import os
import json
import docx

def extract_docx_data(directory, output_file):
    results = []
    
    # We will only look in the 'public' directory which contains the folders 'deluxe - Copy', 'luxury boats - Copy', etc.
    for root, dirs, files in os.walk(directory):
        # skip certain directories
        if 'node_modules' in root or 'dist' in root or '.git' in root or 'temp_missing' in root:
            # Note: I'll actually just let it search all of public because the 'temp_missing' might have the ones he couldn't find, or maybe they are duplicates.
            pass
            
        for file in files:
            if file.endswith('.docx') and not file.startswith('~'):
                file_path = os.path.join(root, file)
                
                try:
                    doc = docx.Document(file_path)
                except Exception as e:
                    print(f"Failed to read {file_path}: {e}")
                    continue
                
                # Extract all paragraphs
                paragraphs = [p.text for p in doc.paragraphs if p.text.strip() != ""]
                
                # Extract all tables
                tables_data = []
                for table in doc.tables:
                    table_data = []
                    for row in table.rows:
                        row_data = [cell.text.strip() for cell in row.cells]
                        table_data.append(row_data)
                    tables_data.append(table_data)
                
                # Full text
                full_text_parts = paragraphs.copy()
                for t in tables_data:
                    for r in t:
                        full_text_parts.append(" | ".join(r))
                
                full_text = "\n".join(full_text_parts)
                
                # Cruise name based on file name
                file_name = file
                cruise_name = file_name.replace('.docx', '').title().strip()
                
                results.append({
                    "fileName": file_name,
                    "cruiseName": cruise_name,
                    "fullText": full_text,
                    "paragraphs": paragraphs,
                    "tables": tables_data
                })
                print(f"Extracted: {file_name}")

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"\nSuccessfully extracted data from {len(results)} files to {output_file}")

if __name__ == "__main__":
    public_dir = os.path.join(os.getcwd(), 'public')
    output_path = os.path.join(os.getcwd(), 'src', 'data', 'all_cruises_extracted.json')
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    extract_docx_data(public_dir, output_path)
