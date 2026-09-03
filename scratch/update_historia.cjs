const fs = require('fs');

const tsFilePath = 'src/data/cruisesData.ts';
let content = fs.readFileSync(tsFilePath, 'utf8');

// The file has:
// export interface ...
// export const cruises: CruiseData[] = [
// ...
// ];

// We can extract the array, modify it, and write it back.
const arrayStartIndex = content.indexOf('export const cruises: CruiseData[] = [');
const interfacesPart = content.substring(0, arrayStartIndex);
const arrayPart = content.substring(arrayStartIndex + 'export const cruises: CruiseData[] = '.length);

let cruises;
try {
  // Try to parse the array part as JSON (it should be valid JSON if it was stringified)
  // Wait, the string ends with ';\n'. So let's remove the trailing semicolon.
  const jsonString = arrayPart.replace(/;\s*$/, '');
  cruises = JSON.parse(jsonString);
} catch (e) {
  console.error("Failed to parse cruises array as JSON", e);
  process.exit(1);
}

const historiaIndex = cruises.findIndex(c => c.id === 'ms-historia');
if (historiaIndex === -1) {
  console.error("Could not find ms-historia");
  process.exit(1);
}

const newHistoria = {
  id: "ms-historia",
  name: "ms historia",
  type: "Nile Cruise",
  category: "luxury",
  subType: "nile-cruise",
  featured: false,
  gallery: [],
  inclusions: [
    "We provide seamless pickup and drop-off services at both Luxor International Airport (LXR) and Aswan International Airport (ASW).",
    "04 or 03 nights’ accommodation on board the Nile cruises. on FB basis.",
    "Meet and assist service upon arrival & departure.",
    "Assistance of our personnel during your stay and excursions.",
    "All transfers are made by a modern, air-conditioned, private deluxe vehicle.",
    "All Nile Cruise excursions, as mentioned in the itinerary private.",
    "Entrance fees to all sights in and between Luxor and Aswan."
  ],
  exclusions: [
    "Any Extra meals and beverages.",
    "Personal expenses.",
    "Tipping.",
    "Optional tours."
  ],
  note: "Rates to be applied for (Main deck). A 10% supplement to be added for Upper DecK & connected cabins .\nOther language Guide: Guides speaking other language than English can be provided subject to availability with supplement of USD 300.00 per cruise trip",
  childrenPolicy: [
    "Less than 07years old: will be accommodated free of charge sharing parents’ cabin.",
    "From 7years till 11.99 years: Sharing parent’s cabins and will be charged as a half adult with a maximum of one child.",
    "Children from 12 years & over will be charged full fare.",
    "In case of 01 Child between 07and 11.99 years accommodated with one adult only, cabin will be charged as 01 Double cabin."
  ],
  itineraries: [
    {
      id: "ms-historia-3nights-aswan-to-luxor",
      durationName: "3NIGHTS  ASWAN TO LUXOR",
      departureDay: "Every Friday",
      pricing: [
        {
          seasonName: "Main season",
          applicableDates: [
            "02/10/2026 to 29/11/2026",
            "04/01/2027 to 14/01/2027",
            "01/02/2027 to 25/03/2027",
            "02/04/2027 to 15/04/2027"
          ],
          tripleSharing: null,
          doubleSharing: 2445,
          singleCabin: 4040
        },
        {
          seasonName: "Peak season",
          applicableDates: [
            "21-12-2026 to 03-01-2027",
            "26-3-2027 till 01/04/2027"
          ],
          tripleSharing: null,
          doubleSharing: 3615,
          singleCabin: 6035
        },
        {
          seasonName: "shoulder season",
          applicableDates: [
            "30/11/2026 to 20/12/2026",
            "15/01/2027 to 31/01/2027",
            "16/04/2027 to 02/05/2027"
          ],
          tripleSharing: null,
          doubleSharing: 2045,
          singleCabin: 3430
        }
      ],
      days: [
        {
          dayNumber: 1,
          title: "Aswan Arrival",
          activities: [
            "Pick up from Aswan (airport, train station or hotel)",
            "Meet & greet",
            "Transfer to Nile cruise boat",
            "Embarkation on cruise boat",
            "01:00 PM Lunch on board",
            "Visit to philia temple and high dam",
            "Dinner on board",
            "Over night on boat in aswan"
          ]
        },
        {
          dayNumber: 2,
          title: "KomOmbo & Edfu",
          activities: [
            "Sail to KomOmbo 03:00 AM.",
            "Breakfast and visit to KomOmbo Temple",
            "Sail to Edfu Lunch on board",
            "Visit EdfuTemple.",
            "Sail to Luxor",
            "Dinner on board",
            "Overnight Esna or Luxor"
          ]
        },
        {
          dayNumber: 3,
          title: "Luxor West & East Bank",
          activities: [
            "Optional tour (hot air balloon)",
            "Breakfast on board",
            "Visit the West Bank – The Valley of the Kings -The temple of Queen Hatshepsut at El-Deir El-Bahari and the Colossi Memnon.",
            "Lunch on board",
            "Visit East Bank (Karnak and Luxor Temples)",
            "Dinner on board",
            "Party",
            "Overnight in Luxor"
          ]
        },
        {
          dayNumber: 4,
          title: "Disembarkation",
          activities: [
            "Breakfast on board",
            "Disembarkation at 08:00 am.",
            "Departure transfer to ( airport ,train station or hotel)"
          ]
        }
      ]
    },
    {
      id: "ms-historia-4nights-luxor-to-aswan",
      durationName: "4NIGHTS  LUXOR TOASWAN",
      departureDay: "Every MONDAY",
      pricing: [
        {
          seasonName: "Main season",
          applicableDates: [
            "02/10/2026 to 29/11/2026",
            "04/01/2027 to 14/01/2027",
            "01/02/2027 to 25/03/2027",
            "02/04/2027 to 15/04/2027"
          ],
          tripleSharing: null,
          doubleSharing: 3335,
          singleCabin: 5475
        },
        {
          seasonName: "Peak season",
          applicableDates: [
            "21-12-2026 to 03-01-2027",
            "26-3-2027 till 01/04/2027"
          ],
          tripleSharing: null,
          doubleSharing: 4655,
          singleCabin: 7770
        },
        {
          seasonName: "shoulder season",
          applicableDates: [
            "30/11/2026 to 20/12/2026",
            "15/01/2027 to 31/01/2027",
            "16/04/2027 to 02/05/2027"
          ],
          tripleSharing: null,
          doubleSharing: 2595,
          singleCabin: 4380
        }
      ],
      days: [
        {
          dayNumber: 1,
          title: "Luxor Arrival",
          activities: [
            "Pick up from Luxor ( airport ,train station or hotel)",
            "Meet & greet",
            "Transfer to Nile cruise boat",
            "Embarkation on cruise boat",
            "1pm Lunch on board",
            "East Luxor",
            "Visit to Luxor and Karnak Temples.",
            "Optional tour ( sound& light show in karnak temple).",
            "Dinner and show on board.",
            "Overnight on board in Luxor"
          ]
        },
        {
          dayNumber: 2,
          title: "West Bank & Sail to Edfu",
          activities: [
            "Optional tour (hot air balloon)",
            "Breakfast",
            "West Luxor",
            "Visit to Valley of the Kings, Hatshepsut Temple, and Memnon Colossi.",
            "Lunch on board",
            "Sail to Esna. Cross the lock. Sail to Edfu.",
            "Dinner",
            "Overnight on board in Edfu"
          ]
        },
        {
          dayNumber: 3,
          title: "Edfu & Kom Ombo",
          activities: [
            "Breakfast on board",
            "Visit to Edfu Temple by hors carriage",
            "Sail to komombo temple",
            "Lunch on board",
            "Visit to komombo temple",
            "Sail to Aswan",
            "Dinner",
            "Arrival to Aswan",
            "Over night on board in Aswan"
          ]
        },
        {
          dayNumber: 4,
          title: "Aswan Highlights",
          activities: [
            "Breakfast",
            "Visit to High Dam and Philae Temple",
            "Lunch on board",
            "Optional tour( visit to Nubian village by motor boat or felucca ride sun set time).",
            "Optional tour (sound& light show in philia temple).",
            "Dinner on board",
            "Overnight on board in Aswan"
          ]
        },
        {
          dayNumber: 5,
          title: "Disembarkation",
          activities: [
            "Disembarkation from cruise ship.",
            "Optional tour (visit to Abu simple temples) 8-9 hours by land or 5hours by flight round trip.",
            "Departure transfer to ( airport ,train station or hotel)"
          ]
        }
      ]
    }
  ]
};

cruises[historiaIndex] = newHistoria;

const newContent = interfacesPart + 'export const cruises: CruiseData[] = ' + JSON.stringify(cruises, null, 2) + ';\n';
fs.writeFileSync(tsFilePath, newContent);
console.log('Successfully updated ms historia');
