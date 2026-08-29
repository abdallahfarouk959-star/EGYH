import os
import zipfile
import xml.etree.ElementTree as ET
import re
import json

# Define mapping for categories
CATEGORIES = {
    'luxury boats - Copy': 'luxury',
    'ultra deluxe  boats - Copy': 'ultra-deluxe',
    'deluxe - Copy': 'deluxe',
    'standard boats - Copy': 'standard'
}

BASE_DIR = r"d:\Abdallah Projects\Egypt-Holiday--main\public"

EXISTING_CRUISES = [
    "esplanade", "historia", "sunray", "renaissance", "st.george", "sun goddess", "mahrousa"
]

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml')
            root = ET.fromstring(xml_content)
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            text = '\n'.join([node.text for node in root.findall('.//w:t', ns) if node.text])
            return text
    except Exception as e:
        print(f"Error reading {docx_path}: {e}")
        return ""

def parse_price(text_segment):
    double = 0
    single = 0
    double_match = re.search(r'USD\s*(\d+)\s*per person in a (?:luxury\s*)?double', text_segment, re.IGNORECASE)
    if double_match:
        double = int(double_match.group(1))
    single_match = re.search(r'USD\s*(\d+)\s*per person in a (?:luxury\s*)?Single', text_segment, re.IGNORECASE)
    if single_match:
        single = int(single_match.group(1))
    return double, single

def process_file(file_path, category_name):
    filename = os.path.basename(file_path)
    for existing in EXISTING_CRUISES:
        if existing.lower() in filename.lower():
            return None
            
    text = extract_text_from_docx(file_path)
    if not text:
        return None
        
    cruise_name = filename.replace('.docx', '').title().strip()
    cruise_id = cruise_name.lower().replace(' ', '-').replace('.', '')
    
    inclusions = [
      "Seamless pickup and drop-off services.",
      "Accommodation on board the Nile cruises on FB basis.",
      "Meet and assist service upon arrival & departure.",
      "Assistance of our personnel during your stay and excursions.",
      "All transfers are made by a modern, air-conditioned, private deluxe vehicle.",
      "All Nile Cruise excursions, as mentioned in the itinerary private.",
      "Entrance fees to all sights in and between Luxor and Aswan."
    ]
    
    exclusions = [
      "Any Extra meals and beverages.",
      "Personal expenses.",
      "Tipping.",
      "Optional tours."
    ]
    
    children_policy = [
      "Less than 6 years old: accommodated free of charge sharing parents' cabin.",
      "From 6 years till 11.99 years: Sharing parents' cabins and will be charged as a half adult with a maximum of one child.",
      "Children from 12 years & over will be charged full fare.",
      "In case of 1 Child between 6 and 11.99 years accommodated with one adult only, cabin will be charged as 1 Double cabin."
    ]
    
    parts = re.split(r'4\s*NIGHTS', text, flags=re.IGNORECASE)
    itineraries = []
    
    it_3 = {
        "id": f"{cruise_id}-3-nights",
        "durationName": "3 Nights Aswan to Luxor",
        "departureDay": "Every Friday", 
        "pricing": [],
        "days": [
          { "dayNumber": 1, "title": "Aswan Arrival", "activities": ["Pick up from Aswan.", "Embarkation on cruise boat.", "Lunch on board.", "Visit Philae Temple and High Dam.", "Dinner & Overnight on board in Aswan."] },
          { "dayNumber": 2, "title": "Kom Ombo & Edfu", "activities": ["Sail to Kom Ombo.", "Breakfast and visit to Kom Ombo Temple.", "Sail to Edfu & Lunch on board.", "Visit Edfu Temple.", "Sail to Luxor.", "Dinner on board.", "Overnight in Esna or Luxor."] },
          { "dayNumber": 3, "title": "Luxor Sightseeing", "activities": ["Breakfast on board.", "Visit West Bank (Valley of the Kings, Hatshepsut Temple).", "Lunch on board.", "Visit East Bank (Karnak and Luxor Temples).", "Dinner on board.", "Overnight in Luxor."] },
          { "dayNumber": 4, "title": "Departure", "activities": ["Breakfast on board.", "Disembarkation at 08:00 am.", "Departure transfer."] }
        ]
    }
    
    it_4 = {
        "id": f"{cruise_id}-4-nights",
        "durationName": "4 Nights Luxor to Aswan",
        "departureDay": "Every Monday", 
        "pricing": [],
        "days": [
          { "dayNumber": 1, "title": "Luxor Arrival", "activities": ["Pick up from Luxor.", "Transfer to Nile cruise boat & Embarkation.", "Lunch on board.", "Visit to Luxor and Karnak Temples.", "Dinner on board.", "Overnight in Luxor."] },
          { "dayNumber": 2, "title": "West Bank & Sailing", "activities": ["Breakfast.", "Visit to Valley of the Kings, Hatshepsut Temple.", "Lunch on board.", "Sail to Esna & cross the lock.", "Sail to Edfu.", "Dinner & Overnight in Edfu."] },
          { "dayNumber": 3, "title": "Edfu & Kom Ombo", "activities": ["Breakfast on board.", "Visit to Edfu Temple.", "Sail to Kom Ombo.", "Lunch on board.", "Visit to Kom Ombo Temple.", "Sail to Aswan.", "Dinner & Overnight in Aswan."] },
          { "dayNumber": 4, "title": "Aswan Highlights", "activities": ["Breakfast.", "Visit to High Dam and Philae Temple.", "Lunch on board.", "Dinner on board.", "Overnight in Aswan."] },
          { "dayNumber": 5, "title": "Departure", "activities": ["Disembarkation from cruise ship.", "Departure transfer."] }
        ]
    }
    
    def get_pricing(text_part):
        pricing = []
        main_match = re.search(r'Main\s*season(.*?)(?:Peak|shoulder|$)', text_part, re.IGNORECASE | re.DOTALL)
        if main_match:
            d, s = parse_price(main_match.group(1))
            if d > 0: pricing.append({"seasonName": "Main Season", "tripleSharing": None, "doubleSharing": d, "singleCabin": s})
            
        peak_match = re.search(r'Peak\s*season(.*?)(?:shoulder|Main|$)', text_part, re.IGNORECASE | re.DOTALL)
        if peak_match:
            d, s = parse_price(peak_match.group(1))
            if d > 0: pricing.append({"seasonName": "Peak Season", "tripleSharing": None, "doubleSharing": d, "singleCabin": s})
            
        shoulder_match = re.search(r'shoulder\s*season(.*?)(?:Peak|Main|$)', text_part, re.IGNORECASE | re.DOTALL)
        if shoulder_match:
            d, s = parse_price(shoulder_match.group(1))
            if d > 0: pricing.append({"seasonName": "Shoulder Season", "tripleSharing": None, "doubleSharing": d, "singleCabin": s})
            
        if not pricing:
            d, s = parse_price(text_part)
            if d > 0: pricing.append({"seasonName": "Standard Price", "tripleSharing": None, "doubleSharing": d, "singleCabin": s})
            
        if not pricing:
            pricing.append({"seasonName": "Standard Price", "tripleSharing": None, "doubleSharing": 1000, "singleCabin": 1500})
            
        return pricing
        
    it_3["pricing"] = get_pricing(parts[0])
    if len(parts) > 1:
        it_4["pricing"] = get_pricing(parts[1])
    else:
        it_4["pricing"] = get_pricing(parts[0])
        
    itineraries.append(it_3)
    itineraries.append(it_4)
    
    cruise_data = {
        "id": cruise_id,
        "name": cruise_name,
        "type": "Nile Cruise",
        "category": category_name,
        "subType": "nile-cruise",
        "featured": False,
        "gallery": [f"/placeholder-cruise.webp"], 
        "inclusions": inclusions,
        "exclusions": exclusions,
        "childrenPolicy": children_policy,
        "itineraries": itineraries,
        "note": "A 10% supplement to be added for Upper Deck & connected cabins."
    }
    return cruise_data

all_cruises = []

for folder, category in CATEGORIES.items():
    dir_path = os.path.join(BASE_DIR, folder)
    if os.path.exists(dir_path):
        for file in os.listdir(dir_path):
            if file.endswith(".docx"):
                full_path = os.path.join(dir_path, file)
                cruise = process_file(full_path, category)
                if cruise:
                    all_cruises.append(cruise)

with open(r"d:\Abdallah Projects\Egypt-Holiday--main\src\data\newCruises.json", "w", encoding="utf-8") as f:
    json.dump(all_cruises, f, indent=2, ensure_ascii=False)

print(f"Processed {len(all_cruises)} new cruises.")
