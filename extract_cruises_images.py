import os
import re
import io
import fitz  # PyMuPDF
from PIL import Image

def clean_folder_name(name):
    """تنظيف اسم الملف لعمل فولدر احترافي"""
    # إزالة الامتداد
    name = os.path.splitext(name)[0]
    # إزالة كلمة MS أو ms في البداية
    name = re.sub(r'^[Mm][Ss][\.\s_]*', '', name)
    # إزالة التواريخ والأوقات الموجودة في بعض الملفات (مثل 26-08-2026 22.17)
    name = re.sub(r'\d{1,2}-\d{1,2}-\d{4}.*', '', name)
    # استبدال الرموز بمسافات، ثم عمل Slug
    name = re.sub(r'[^\w\s-]', ' ', name)
    name = re.sub(r'\s+', '-', name).strip('-').lower()
    return name

def process_cruises_pdfs(input_root, output_dir, quality=85):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # جلب جميع مجلدات المراكب الموجودة حالياً لتخطيها
    existing_folders = [f.lower() for f in os.listdir(output_dir) if os.path.isdir(os.path.join(output_dir, f))]

    pdf_tasks = []
    # البحث في كل الفولدرات الفرعية (Deluxe, Luxury, Standard, Ultra Deluxe)
    for root, _, files in os.walk(input_root):
        for f in files:
            if f.lower().endswith('.pdf') and not f.startswith('~$'):
                pdf_tasks.append(os.path.join(root, f))

    total_files = len(pdf_tasks)
    print(f"📁 تم العثور على {total_files} ملف PDF.")
    print("🚀 جاري بدء الاستخراج... (سيتم تخطي المراكب الموجودة مسبقاً)\n")

    for idx, pdf_path in enumerate(pdf_tasks, 1):
        pdf_name = os.path.basename(pdf_path)
        folder_slug = clean_folder_name(pdf_name)
        
        # نظام الحماية: التحقق مما إذا كان الفولدر موجوداً مسبقاً
        # نبحث عن تطابق تقريبي أو دقيق مع الفولدرات القديمة (مثل historia, esplanade)
        is_existing = any(folder_slug in ex or ex in folder_slug for ex in existing_folders)
        
        cruise_folder = os.path.join(output_dir, folder_slug)
        
        # التحقق الإضافي: هل الفولدر موجود وفيه صور؟
        if is_existing or (os.path.exists(cruise_folder) and len(os.listdir(cruise_folder)) > 0):
            print(f"⏭️ تخطي [{idx}/{total_files}]: {pdf_name} (موجودة بالفعل)")
            continue

        os.makedirs(cruise_folder, exist_ok=True)

        try:
            doc = fitz.open(pdf_path)
            extracted_count = 0

            for page_index in range(len(doc)):
                page = doc[page_index]
                image_list = page.get_images(full=True)

                for img_info in image_list:
                    xref = img_info[0]
                    base_image = doc.extract_image(xref)
                    image_bytes = base_image["image"]

                    image = Image.open(io.BytesIO(image_bytes))

                    # تجاهل اللوجوهات أو الأيقونات الصغيرة
                    if image.width < 300 or image.height < 300:
                        continue

                    # تحويل الصورة لـ RGB لمنع أخطاء الـ WEBP
                    if image.mode in ("CMYK", "P", "RGBA"):
                        # بالنسبة لـ RGBA نضع خلفية بيضاء لتجنب المشاكل
                        if image.mode == 'RGBA':
                            background = Image.new("RGB", image.size, (255, 255, 255))
                            background.paste(image, mask=image.split()[3])
                            image = background
                        else:
                            image = image.convert("RGB")

                    extracted_count += 1
                    webp_filename = f"image{extracted_count}.webp"
                    webp_path = os.path.join(cruise_folder, webp_filename)

                    image.save(webp_path, "WEBP", quality=quality, method=6)

            print(f"✅ تم [{idx}/{total_files}]: {pdf_name} -> استخراج {extracted_count} صورة إلى فولدر '{folder_slug}'")
            doc.close()

            # لو الـ PDF مفيهوش صور مفيدة، احذف الفولدر الفاضي
            if extracted_count == 0:
                os.rmdir(cruise_folder)

        except Exception as e:
            print(f"❌ خطأ في {pdf_name}: {e}")

    print("\n🎉 انتهت العملية بنجاح!")

if __name__ == "__main__":
    # المسارات بناءً على هيكل مشروعك
    INPUT_FOLDER = r"./pdf_files"       # الفولدر اللي جواه الـ 4 تصنيفات
    OUTPUT_FOLDER = r"./public/cruises" # الفولدر اللي هتترمي فيه الصور

    process_cruises_pdfs(INPUT_FOLDER, OUTPUT_FOLDER, quality=85)