import csv
import json
import os

md_path = '/Users/havvabeyge/.gemini/antigravity/brain/dad5d504-3ec6-433b-a29f-b0d6d1102738/.system_generated/steps/18/content.md'

with open(md_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

csv_lines = [line.split(': ', 1)[1] if ': ' in line else line for line in lines[8:]] # Handle line numbers if any
events = []
reader = csv.reader(csv_lines)
for row in reader:
    if len(row) > 16:
        name = row[4].strip()
        if not name or name == "Etkinlik Adı / Faaliyet":
            continue
        date = row[6].strip()
        time = f"{row[8].strip()} - {row[9].strip()}"
        personnel = row[12].strip()
        location = row[13].strip()
        description = row[16].strip()
        
        # Primary instructor is the first name in the semicolon separated list
        primary_instructor = personnel.split(';')[0].strip().title() if personnel else ""
        
        # "17. Etkinlik (Kim Dışkı Yiyor?)" -> "17. Etkinlik - Kim Dışkı Yiyor?"
        name_clean = name.replace(" (", " - ").replace(")", "")
        
        events.append({
            "id": row[0].strip() or str(len(events)+1),
            "name": name_clean,
            "date": date,
            "time": time,
            "instructor": primary_instructor or "Proje Ekibi",
            "location": location,
            "description": description
        })

os.makedirs('src/data', exist_ok=True)
with open('src/data/schedule.json', 'w', encoding='utf-8') as f:
    json.dump(events, f, ensure_ascii=False, indent=2)

print(f"Parsed {len(events)} events.")
