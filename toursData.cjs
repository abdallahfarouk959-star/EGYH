"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPoliciesContent = exports.DESTINATIONS = exports.POLICIES = exports.NILE_CRUISE = exports.TOURS = exports.HERO_IMAGES = void 0;
exports.HERO_IMAGES = [
    {
        url: "https://images.unsplash.com/photo-1539186607619-df476afe1ff1?auto=format&fit=crop&q=80&w=2000&fmt=webp",
        title: "Discover Egypt your way",
        subtitle: "crafting unforgettable Egyptian adventure from heart of Egypt to the world",
    },
    {
        url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=2000&fmt=webp",
        title: "The Great Pyramids",
        subtitle: "Step back in time and witness the wonders of the ancient world",
    },
    {
        url: "https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=2000&fmt=webp",
        title: "Nile River Cruises",
        subtitle: "Sail through history on the world's longest river",
    },
];
exports.TOURS = [
    {
        name: "Historical wonders",
        link: "/tours/historical-wonders",
        subItems: [
            { name: "Essential Egypt (7 Days)", link: "/tours/historical-wonders#tour-1" },
            { name: "Nile & Red Sea Magic (10 Days)", link: "/tours/historical-wonders#tour-2" },
            { name: "The Grand Explorer (12 Days)", link: "/tours/historical-wonders#tour-3" },
            { name: "Ultimate Egyptian Odyssey (15 Days)", link: "/tours/historical-wonders#tour-4" },
        ],
    },
    {
        name: "Aswan Tours",
        link: "/tours/aswan",
        subItems: [
            { name: "Philae Temple, High Dam, and Unfinished Obelisk", link: "/tours/aswan#tour-1" },
            { name: "Philae Temple with High Dam or Unfinished Obelisk", link: "/tours/aswan#tour-2" },
            { name: "Sound & Light Show at Philae Temple", link: "/tours/aswan#tour-3" },
            { name: "Kalabsha Temple", link: "/tours/aswan#tour-4" },
            { name: "Nubian Village (Gharb Sehel) by Motor Boat", link: "/tours/aswan#tour-5" },
            { name: "Nubian Tour by Felucca with Exotic Lunch", link: "/tours/aswan#tour-6" },
            { name: "Elephantine and Kitchener's Islands by Felucca", link: "/tours/aswan#tour-7" },
            { name: "Sunset by Felucca", link: "/tours/aswan#tour-8" },
            { name: "Transfer from Aswan to Luxor via Kom Ombo and Edfu Temples", link: "/tours/aswan#tour-9" },
        ],
    },
    {
        name: "Luxor Tours",
        link: "/tours/luxor",
        subItems: [
            { name: "East Bank of Luxor", link: "/tours/luxor#tour-1" },
            { name: "West Bank of Luxor", link: "/tours/luxor#tour-2" },
            { name: "Valley of the Queens & Habu Temple", link: "/tours/luxor#tour-3" },
            { name: "Hot Air Balloon Ride Over Luxor", link: "/tours/luxor#tour-4" },
            { name: "Dendera Temple Experience", link: "/tours/luxor#tour-5" },
            { name: "Dendera and Abydos Temples Experience.", link: "/tours/luxor#tour-6" },
            { name: "Transfer From Luxor to Aswan Via Kom Ombo And Edfu Temples", link: "/tours/luxor#tour-7" },
            { name: "Sound & Light Show at Karnak Temple", link: "/tours/luxor#tour-8" },
        ],
    },
    {
        name: "Cairo Tours",
        link: "/tours/cairo",
        subItems: [
            { name: "Great Pyramids, Sphinx & Grand Egyptian Museum Tour", link: "/tours/cairo#tour-1" },
            { name: "Great Pyramids, Sphinx, Memphis & Sakkara Tour", link: "/tours/cairo#tour-2" },
            { name: "Saladin's Citadel, Old Cairo & Khan El-Khalili", link: "/tours/cairo#tour-3" },
            { name: "Egyptian Museum & National Museum of Egyptian Civilization", link: "/tours/cairo#tour-4" },
            { name: "Sound & Light Show at the Giza Pyramids", link: "/tours/cairo#tour-5" },
            { name: "Nile Cruise Dinner", link: "/tours/cairo#tour-6" },
            { name: "Day Tour to Alexandria from Cairo", link: "/tours/cairo#tour-7" },
        ],
    },
    {
        name: "Abu Simbel Tours",
        link: "/tours/abu-simbel",
        subItems: [
            { name: "Abu Simbel by Land", link: "/tours/abu-simbel#tour-1" },
            { name: "Abu Simbel Overnight Tour with Sound & Light Show", link: "/tours/abu-simbel#tour-2" },
            { name: "Abu Simbel by Flight", link: "/tours/abu-simbel#tour-3" },
        ],
    },
];
exports.NILE_CRUISE = [
    { name: "All Nile Cruises", link: "/nile-cruise" },
    { name: "River Nile Cruises", link: "/nile-cruise#river-nile" },
    { name: "Felucca Adventures", link: "/nile-cruise#felucca" },
    { name: "Dahabiya Nile Cruise", link: "/nile-cruise#dahabiya" },
    { name: "Lake Nasser Cruise", link: "/nile-cruise#lake-nasser" },
];
exports.POLICIES = [
    { name: "Privacy Policy", link: "/policies#privacy" },
    { name: "Terms & Conditions", link: "/policies#terms" },
    { name: "Cancellation & Refund Policy", link: "/policies#cancellation" },
];
exports.DESTINATIONS = {
    aswan: {
        id: "aswan",
        title: "Aswan Tours",
        quote: "Aswan is where the magic of the Nile truly comes to life! With its stunning river views, colorful Nubian villages, and incredible temples, this city is the perfect mix of history and relaxation. Sail on a traditional felucca, explore the beautiful Philae Temple, or visit the famous Aswan High Dam. Whether you want adventure or a peaceful escape, Aswan will steal your heart!",
        tours: [
            {
                id: 1,
                title: "Philae Temple, High Dam, and Unfinished Obelisk",
                images: ["https://images.unsplash.com/photo-1633033254409-bd538e785f51?q=80&w=871&auto=format&fit=crop&fmt=webp"],
                highlights: "Discover the majestic Philae Temple, one of Egypt’s most revered ancient sites, dedicated to the goddess Isis. This impressive complex, with its grand pylons and intricate carvings, was meticulously relocated to its current island location after the construction of the old dam in 1906, a project supported by UNESCO that took over nine years to complete. Explore the awe-inspiring Unfinished Obelisk, an enormous 42-meter-long monument, believed to be the heaviest obelisk ever attempted, weighing nearly 1,100 tons. Abandoned due to natural cracks in the granite, it offers fascinating insights into ancient stone-cutting techniques.",
                inclusions: ["Duration: 5 hours", "Private air-conditioned transport", "Entrance fees", "English-speaking tour guide", "Motorboat to and from Philae Temple"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "08:00", event: "Pickup from your hotel, cruise, or train station" },
                    { time: "Morning", event: "Guided tour of Philae Temple, High Dam, and Unfinished Obelisk" },
                    { time: "13:00", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$90" },
                    { label: "2 People", price: "$65" },
                    { label: "3-5 People", price: "$55" },
                    { label: "6-10 People", price: "$50" },
                    { label: "11-15 People", price: "$45" },
                ],
                childPolicy: "Ages 6-11: $30",
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 2,
                title: "Philae Temple with High Dam or Unfinished Obelisk",
                images: ["https://images.unsplash.com/photo-1738580426867-03fa8c8b5288?q=80&w=871&auto=format&fit=crop&fmt=webp"],
                highlights: "Visit Philae Temple and either the High Dam or the Unfinished Obelisk.",
                inclusions: ["Duration: 3-4 hours", "Private air-conditioned transport", "Entrance fees", "English-speaking tour guide", "Motorboat to Philae Temple"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "08:00", event: "Pickup from your hotel, cruise, or train station" },
                    { time: "Morning", event: "Guided tour of Philae Temple and your chosen site" },
                    { time: "11:00-12:00", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$85" },
                    { label: "2 People", price: "$60" },
                    { label: "3-5 People", price: "$50" },
                    { label: "6-10 People", price: "$45" },
                    { label: "11-15 People", price: "$40" },
                ],
                childPolicy: "Ages 6-11: $28",
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 3,
                title: "Sound & Light Show at Philae Temple",
                images: ["https://plus.unsplash.com/premium_photo-1697729731390-0b5f42cb9f44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGhpbGFlJTIwVGVtcGxlfGVufDB8fDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "Mesmerizing Sound & Light Show at Philae Temple.",
                inclusions: ["Duration: 2.5 hours", "Private air-conditioned transfer", "Motorboat to Philae Temple", "Entrance fees to the show"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "18:00", event: "Pickup from hotel or cruise ship" },
                    { time: "Evening", event: "Attend the Sound & Light Show" },
                    { time: "20:30", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$55" },
                    { label: "2-3 People", price: "$50" },
                    { label: "4-15 People", price: "$45" },
                ],
                childPolicy: "Ages 6-11: $30",
                note: "Show schedule varies by season; check official website for details",
            },
            {
                id: 4,
                title: "Kalabsha Temple",
                images: ["https://images.unsplash.com/photo-1662655558673-4e628102f545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWd5cHRpYW4lMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D&fmt=webp&w=800&q=75"],
                highlights: "Visit the impressive Kalabsha Temple, dedicated to the god Mandulis. Originally located 50 km south of Aswan, the temple was at risk of submersion due to the construction of the Aswan High Dam. In a remarkable German-financed effort, it was dismantled and relocated to its current position near Lake Nasser.",
                inclusions: ["Duration: 3-4 hours", "Private air-conditioned transport", "Entrance fees", "English-speaking tour guide", "Motorboat to and from Kalabsha Temple"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "09:00", event: "Pickup from your hotel, cruise, or train station" },
                    { time: "Morning", event: "Guided tour of Kalabsha Temple" },
                    { time: "12:30", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$135" },
                    { label: "2-3 People", price: "$70" },
                    { label: "4-15 People", price: "$50" },
                ],
                childPolicy: "Ages 6-11: $30",
                note: "Advance booking required (3 days prior) for necessary permissions",
            },
            {
                id: 5,
                title: "Nubian Village (Gharb Sehel) by Motor Boat",
                images: ["https://images.unsplash.com/photo-1655163394362-97de2d3c5c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TnViaWFuJTIwVmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D&fmt=webp&w=800&q=75"],
                highlights: "Discover the vibrant Nubian culture on the west bank of the Nile, opposite Soheil Island. Meet local families, explore their colorful homes, and immerse yourself in their traditions and simple lifestyle.",
                inclusions: ["Duration: 3 hours", "Private motorboat", "Nubian house visit fees", "English-speaking tour guide"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "14:30", event: "Pickup from your hotel, cruise, or train station" },
                    { time: "Afternoon", event: "Visit Nubian Village (Gharb Sehel)" },
                    { time: "17:30", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$60" },
                    { label: "2-3 People", price: "$50" },
                    { label: "4-9 People", price: "$40" },
                    { label: "10-15 People", price: "$30" },
                ],
                childPolicy: "Ages 6-11: $10",
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 6,
                title: "Nubian Tour by Felucca with Exotic Lunch",
                images: ["https://images.unsplash.com/photo-1644517270263-4112379d97ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXN3YW58ZW58MHx8MHx8fDA%3D&fmt=webp&w=800&q=75"],
                highlights: "Sail through the serene Nile archipelago on Arabesque felucca. Explore archaeological sites, enjoy an exotic lunch prepared on board, and relax with traditional drinks like Karkadeh (hibiscus tea).",
                inclusions: ["Tour Duration: 3-4 hours", "Private air-conditioned transport to and from the felucca", "English-speaking tour guide", "Felucca ride", "Nubian lunch and soft drinks", "Karkadeh and water"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "11:00", event: "Pickup from your hotel, cruise, or train station" },
                    { time: "Morning", event: "Embark on felucca and sailing in the archipelago" },
                    { time: "Noon", event: "Lunch on board", detail: "Karkadeh, cakes, and fruits served" },
                    { time: "14:00", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$85" },
                    { label: "2-4 People", price: "$50" },
                    { label: "5-9 People", price: "$40" },
                    { label: "10-15 People", price: "$30" },
                ],
                childPolicy: "Ages 6-11: $10",
                note: "Optional: Visit Elephantine Island, Kitchener’s Island (Botanical Garden), Monastery of St. Simeon with camel ride, Tombs of the Nobles, or a Nubian village on the West bank with camel ride",
            },
            {
                id: 7,
                title: "Elephantine and Kitchener’s Islands by Felucca",
                images: ["https://images.unsplash.com/photo-1609254009350-e8802119df6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXN3YW58ZW58MHx8MHx8fDA%3D&fmt=webp&w=800&q=75"],
                highlights: "Enjoy a scenic felucca ride through the Nile archipelago, visiting the historical Elephantine Island and the lush Botanical Garden on Kitchener’s Island.",
                inclusions: ["Tour Duration: 4 hours", "Felucca ride", "English-speaking tour guide", "Entrance fees"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "09:00", event: "Pickup from your hotel, cruise, or train station" },
                    { time: "Morning", event: "Visit Elephantine Island and Felucca sailing" },
                    { time: "Morning", event: "Visit Kitchener’s Island (Botanical Garden)" },
                    { time: "13:00", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$80" },
                    { label: "2-4 People", price: "$45" },
                    { label: "5-9 People", price: "$30" },
                    { label: "10-15 People", price: "$25" },
                ],
                childPolicy: "Ages 6-11: $10",
                note: "Private tour with flexible timing",
            },
            {
                id: 8,
                title: "Sunset by Felucca",
                images: ["https://images.unsplash.com/photo-1684100096410-fd39cdff91a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzd2FufGVufDB8fDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "Experience total relaxation as you sail the Nile by felucca at sunset, enjoying traditional Karkadeh tea, coffee, cakes, and fruits.",
                inclusions: ["Tour Duration: 2 hours", "Felucca ride", "Karkadeh, tea, coffee with cakes and fruits"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "16:30", event: "Pickup from your hotel, cruise, or train station" },
                    { time: "Evening", event: "Felucca sailing at sunset" },
                    { time: "18:30", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$70" },
                    { label: "2-4 People", price: "$40" },
                    { label: "5-9 People", price: "$30" },
                    { label: "10-15 People", price: "$20" },
                ],
                childPolicy: "Ages 6-11: $5",
                note: "Private tour with flexible timing",
            },
            {
                id: 9,
                title: "Transfer from Aswan to Luxor via Kom Ombo and Edfu Temples",
                images: ["https://plus.unsplash.com/premium_photo-1661963854938-e69a4e65c1e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4b3IlMjB0ZW1wbGV8ZW58MHwwfDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "Embark on a scenic journey from Aswan to Luxor, blending comfort and history in one unforgettable trip. Travel in a private, air-conditioned vehicle with an expert guide as you explore two of Egypt’s most remarkable temples. Marvel at the unique double temple of Kom Ombo, dedicated to Sobek and Horus, and admire the incredibly well-preserved Edfu Temple, dedicated to the falcon god Horus. This seamless transfer ensures you make the most of your travel time while immersing yourself in Egypt’s rich past.",
                inclusions: ["Duration: 8 hours", "Private air-conditioned car/minivan", "Tour guide", "Entrance fees", "Road permission"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "08:00 AM", event: "Pickup from your hotel, cruise, or train station" },
                    { time: "Morning", event: "Transfer to Kom Ombo and Guided visit to Kom Ombo Temple" },
                    { time: "Noon", event: "Transfer to Edfu and Guided visit to Edfu Temple" },
                    { time: "04:00 PM", event: "Transfer to Luxor and Drop-off at your hotel, cruise, felucca, or train station" },
                ],
                prices: [
                    { label: "Single", price: "$250" },
                    { label: "2 People", price: "$130" },
                    { label: "3 People", price: "$100" },
                    { label: "4 People", price: "$80" },
                    { label: "5 People", price: "$70" },
                    { label: "6 People", price: "$60" },
                ],
                note: "Private tour with flexible timing",
            },
        ],
    },
    luxor: {
        id: "luxor",
        title: "Luxor Tours",
        quote: "Luxor is a dream destination for history lovers! Home to the world’s most breathtaking temples and tombs.",
        tours: [
            {
                id: 1,
                title: "East Bank of Luxor",
                images: ["https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2025/11/9/2025_11_9_17_18_56_856.jpeg?fmt=webp"],
                highlights: "Discover the grandeur of Luxor’s East Bank, home to two of Egypt’s most famous temples—Karnak and Luxor. Marvel at their massive pylons, towering columns, and intricate hieroglyphics, which tell the stories of ancient pharaohs and gods. Karnak Temple is the largest religious complex ever built, while Luxor Temple stands as a masterpiece of Egyptian architecture.",
                inclusions: ["Duration: 3 hours", "Private air-conditioned transport", "English-speaking tour guide", "Entrance fees"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "14:30", event: "Pickup from hotel, cruise ship, or train station" },
                    { time: "Afternoon", event: "Guided tour of Karnak Temple" },
                    { time: "Afternoon", event: "Guided tour of Luxor Temple" },
                    { time: "17:30", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$85" },
                    { label: "2 Persons", price: "$65" },
                    { label: "3 Persons", price: "$55" },
                    { label: "4 Persons", price: "$50" },
                    { label: "5 Persons", price: "$47" },
                    { label: "6 Persons", price: "$45" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 2,
                title: "West Bank of Luxor",
                images: ["https://plus.unsplash.com/premium_photo-1661956893568-a6e305457ea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THV4b3J8ZW58MHx8MHx8fDA%3Dfmt=webp&w=800&q=75"],
                highlights: "Experience the wonders of Luxor’s West Bank, where the Valley of the Kings, Hatshepsut Temple, and the Colossi of Memnon await. Walk through ancient tombs adorned with vivid paintings, visit the mortuary temple of Egypt’s first female pharaoh, and stand before the towering twin statues of Amenhotep III.",
                inclusions: ["Duration: 5-6 hours", "Private air-conditioned transport", "English-speaking tour guide", "Entrance fees"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "08:00", event: "Pickup from hotel, cruise ship, or train station" },
                    { time: "Morning", event: "Visit to Valley of the Kings" },
                    { time: "Morning", event: "Visit to Hatshepsut Temple" },
                    { time: "Morning", event: "Visit to Colossi of Memnon" },
                    { time: "13:00-14:00", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$140" },
                    { label: "2 Persons", price: "$105" },
                    { label: "3 Persons", price: "$90" },
                    { label: "4 Persons", price: "$85" },
                    { label: "5 Persons", price: "$80" },
                    { label: "6 Persons", price: "$75" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 3,
                title: "Valley of the Queens & Habu Temple",
                images: ["https://images.unsplash.com/photo-1632944284335-1f80d44244ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGx1eG9yfGVufDB8fDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "Explore the tombs of royal women in the Valley of the Queens and admire the well-preserved carvings of Medinet Habu, the mortuary temple of Ramses III. This tour provides a deeper look into the daily life, beliefs, and artistic achievements of ancient Egypt.",
                inclusions: ["Duration: 4-5 hours", "Private air-conditioned transport", "English speaking tour guide", "Entrance fees"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "08:00", event: "Pickup from hotel, cruise ship, or train station" },
                    { time: "Morning", event: "Visit to Valley of the Queens" },
                    { time: "Morning", event: "Visit to Habu Temple" },
                    { time: "12:00-13:00", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$125" },
                    { label: "2 Persons", price: "$90" },
                    { label: "3 Persons", price: "$75" },
                    { label: "4 Persons", price: "$70" },
                    { label: "5 Persons", price: "$65" },
                    { label: "6 Persons", price: "$60" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 4,
                title: "Hot Air Balloon Ride Over Luxor",
                images: ["https://images.unsplash.com/photo-1685616075808-04bb9db4ea1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eG9yfGVufDB8fDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "Experience Luxor from above with a breathtaking sunrise hot air balloon ride. Float over the Nile, temples, and ancient ruins, capturing panoramic views of this historic city.",
                inclusions: ["Duration: 3 hours", "Private air-conditioned transport", "45 minutes hot air balloon ride", "Flight certificate", "Service charges and taxes"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "05:00", event: "Pickup from hotel, cruise ship, or train station" },
                    { time: "Morning", event: "Transfer to balloon site and Sunrise balloon ride" },
                    { time: "07:30", event: "Return transfer and drop-off" },
                ],
                prices: [{ label: "Per Person", price: "$90" }],
                note: "The balloon takes off between 3:00-4:00 AM (summer) or 4:00-5:00 AM (winter). Pick-up is 45 mins prior. **Hot air balloon rides are currently suspended until further notice**",
            },
            {
                id: 5,
                title: "Dendera Temple Experience",
                images: ["https://images.unsplash.com/photo-1644159406175-3b91e94c7f7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fEx1eG9yfGVufDB8fDB8fHwwfmt=webp&w=800&q=75"],
                highlights: "Embark on a captivating journey to the Temple of Dendera, located just 60 kilometers north of Luxor. Discover the ancient wonders of this sacred site with a private, flexible tour designed to make your experience unforgettable.",
                inclusions: ["Duration: 4 hours of exploration", "Private transport in an air-conditioned car/minivan", "Experienced tour guide", "All entrance fees"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "08:00 AM", event: "Pickup from your hotel, cruise ship, or train station" },
                    { time: "Morning", event: "Scenic drive to Dendera and Temple exploration" },
                    { time: "12:00 PM", event: "Return transfer to destination" },
                ],
                prices: [
                    { label: "1 Person", price: "$140" },
                    { label: "2 Persons", price: "$95" },
                    { label: "3 Persons", price: "$80" },
                    { label: "4 Persons", price: "$75" },
                    { label: "5 Persons", price: "$70" },
                    { label: "6 Persons", price: "$65" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 6,
                title: "Dendera and Abydos Temples Experience",
                images: ["https://images.unsplash.com/photo-1663601896596-ee0f9daac04c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FybmFrfGVufDB8fDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "Immerse yourself in the ancient wonders of both the Dendera and Abydos Temples, two of Egypt's most fascinating archaeological sites. This private tour offers an enriching journey through history with a flexible schedule tailored to you.",
                inclusions: ["Duration: 10-12 hours of discovery", "Private air-conditioned transport", "Expert tour guide", "All entrance fees included"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "06:00 AM", event: "Pick up from your hotel, cruise ship, or train station" },
                    { time: "Morning", event: "Enjoy a scenic drive to Abydos Temple and explore with guide" },
                    { time: "Afternoon", event: "Travel to Dendera Temple and discover its beauty and mystery" },
                    { time: "16:00-18:00 PM", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "1 Person", price: "$260" },
                    { label: "2 Persons", price: "$140" },
                    { label: "3 Persons", price: "$100" },
                    { label: "4 Persons", price: "$80" },
                    { label: "5 Persons", price: "$70" },
                    { label: "6 Persons", price: "$60" },
                ],
                note: "Private tour with flexible timing",
            },
            {
                id: 7,
                title: "Transfer From Luxor to Aswan Via Kom Ombo And Edfu Temples",
                images: ["https://plus.unsplash.com/premium_photo-1661963854938-e69a4e65c1e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4b3IlMjB0ZW1wbGV8ZW58MHwwfDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "Experience a smooth transfer from Luxor to Aswan while exploring the magnificent Edfu and Kom Ombo Temples along the way. This private tour ensures comfort and flexibility, with ancient wonders at every stop.",
                inclusions: ["Duration: 8 hours of scenic travel and discovery", "Private transport in air-conditioned car/minivan", "Knowledgeable tour guide", "All entrance fees included", "Road permit"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "08:00 AM", event: "Pickup from your hotel, cruise ship, or train station" },
                    { time: "Morning", event: "Transport to and explore Edfu Temple" },
                    { time: "Noon", event: "Transport to and explore Kom Ombo Temple" },
                    { time: "04:00 PM", event: "Head to Aswan and final drop-off" },
                ],
                prices: [
                    { label: "1 Person", price: "$250" },
                    { label: "2 Persons", price: "$130" },
                    { label: "3 Persons", price: "$100" },
                    { label: "4 Persons", price: "$80" },
                    { label: "5 Persons", price: "$70" },
                    { label: "6 Persons", price: "$60" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 8,
                title: "Sound & Light Show at Karnak Temple",
                images: ["https://images.unsplash.com/photo-1662655558673-4e628102f545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2FybmFrfGVufDB8fDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "Witness the spectacular Sound & Light Show at the awe-inspiring Karnak Temple, where history comes to life through an immersive audio-visual experience.",
                inclusions: ["Duration: 2.5 hours", "Private transport in air-conditioned car/minivan", "Entrance fees to the show", "Friendly representative"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "6:00 PM", event: "Pickup from location" },
                    { time: "Evening", event: "Enjoy the Mesmerizing Sound & Light Show at Karnak Temple" },
                    { time: "8:30 PM", event: "Transfer back and drop-off" },
                ],
                prices: [
                    { label: "1 Person", price: "$65" },
                    { label: "2 Persons", price: "$50" },
                    { label: "3 Persons", price: "$45" },
                    { label: "4 Persons", price: "$40" },
                    { label: "5 Persons", price: "$35" },
                    { label: "6 Persons", price: "$34" },
                ],
            },
        ],
    },
    cairo: {
        id: "cairo",
        title: "Cairo Tours",
        quote: "Cairo, the vibrant capital of Egypt, is the largest city in both Africa and the Arab world.",
        tours: [
            {
                id: 1,
                title: "Great Pyramids, Sphinx & Grand Egyptian Museum Tour",
                images: ["https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Experience the wonders of ancient Egypt in one unforgettable day. Visit the Great Pyramids of Giza, see the famous Sphinx up close, and explore the Grand Egyptian Museum. Enjoy a private tour with expert guidance and hassle-free transport.",
                inclusions: ["Tour Duration: 8 hours", "Private air-conditioned transport", "English-speaking tour guide", "Entrance fees"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "08:30", event: "Pickup from hotel" },
                    { time: "Morning", event: "Transfer to and explore the Pyramids with a guided tour (Optional: Camel ride or entry inside the Khufu Pyramid)" },
                    { time: "Morning", event: "Visit the Sphinx" },
                    { time: "12:30", event: "Lunch at your own expense" },
                    { time: "Afternoon", event: "Transfer to and discover ancient artifacts of the Grand Egyptian Museum" },
                    { time: "16:30", event: "Transfer back and drop-off at hotel" },
                ],
                prices: [
                    { label: "Single", price: "$209" },
                    { label: "2 Persons", price: "$129" },
                    { label: "3 Persons", price: "$119" },
                    { label: "4 Persons", price: "$109" },
                    { label: "5 Persons", price: "$99" },
                    { label: "6 Persons", price: "$89" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 2,
                title: "Great Pyramids, Sphinx, Memphis & Sakkara Tour",
                images: ["https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Step back in time and explore Egypt’s most legendary sites. Marvel at the Great Pyramids of Giza, stand before the enigmatic Sphinx, visit the ancient capital of Memphis, and uncover the secrets of Sakkara’s Step Pyramid, the world’s first stone pyramid.",
                inclusions: ["Tour Duration: 7 hours", "Private air-conditioned transportation", "English-speaking tour guide", "Entrance fees"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "09:00", event: "Pickup from hotel and transfer to the Great Pyramids area" },
                    { time: "Morning", event: "Visit the Pyramids (optional camel ride & entry to Khufu Pyramid)" },
                    { time: "Morning", event: "Visit the Sphinx" },
                    { time: "13:00", event: "Lunch at your own expense" },
                    { time: "Afternoon", event: "Visit Memphis, the ancient capital of Egypt" },
                    { time: "Afternoon", event: "Visit Sakkara and the Step Pyramid of Djoser" },
                    { time: "16:00", event: "Transfer back and drop-off at hotel" },
                ],
                prices: [
                    { label: "Single", price: "$225" },
                    { label: "2 Persons", price: "$140" },
                    { label: "3 Persons", price: "$130" },
                    { label: "4 Persons", price: "$120" },
                    { label: "5 Persons", price: "$115" },
                    { label: "6 Persons", price: "$105" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 3,
                title: "Saladin’s Citadel, Old Cairo & Khan El-Khalili",
                images: ["https://plus.unsplash.com/premium_photo-1694475081350-ec8e3419b2ef?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Step into Cairo’s rich history as you explore Saladin’s Citadel, stroll through the ancient streets of Old Cairo, and lose yourself in the vibrant markets of Khan El-Khalili. This tour offers a fascinating journey through Cairo's medieval history and its bustling bazaars.",
                inclusions: ["Tour Duration: 7 hours", "Private air-conditioned transportation", "English-speaking tour guide", "Entrance fees"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "09:00", event: "Pickup from hotel" },
                    { time: "Morning", event: "Visit Saladin’s Citadel, with panoramic views of Cairo" },
                    { time: "Morning", event: "Visit Old Cairo: The Hanging Church and Abu Serga Church" },
                    { time: "Afternoon", event: "Explore the lively Khan El-Khalili market" },
                    { time: "16:00", event: "Transfer back and drop-off at hotel or train station" },
                ],
                prices: [
                    { label: "Single", price: "$190" },
                    { label: "2 Persons", price: "$110" },
                    { label: "3 Persons", price: "$100" },
                    { label: "4 Persons", price: "$90" },
                    { label: "5 Persons", price: "$80" },
                    { label: "6 Persons", price: "$70" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 4,
                title: "Egyptian Museum & National Museum of Egyptian Civilization",
                images: ["https://images.unsplash.com/photo-1631713215053-cc2df30dc6e9?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Dive into Egypt’s ancient treasures at the Egyptian Museum and the National Museum of Egyptian Civilization. Discover mummies, rare artifacts, and the rich history that shaped the world’s earliest civilizations.",
                inclusions: ["Tour Duration: 6 hours", "Private air-conditioned transportation", "English-speaking tour guide", "Entrance fees"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "09:00", event: "Pickup from hotel" },
                    { time: "Morning", event: "Visit the Egyptian Museum and explore its extensive collection of ancient artifacts" },
                    { time: "Afternoon", event: "Transfer to the National Museum of Egyptian Civilization to see more fascinating relics, including the royal mummies" },
                    { time: "15:00", event: "Transfer back and drop-off at hotel" },
                ],
                prices: [
                    { label: "Single", price: "$190" },
                    { label: "2 Persons", price: "$130" },
                    { label: "3 Persons", price: "$120" },
                    { label: "4 Persons", price: "$115" },
                    { label: "5 Persons", price: "$110" },
                    { label: "6 Persons", price: "$105" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 5,
                title: "Sound & Light Show at the Giza Pyramids",
                images: ["https://images.unsplash.com/photo-1623674587543-9c7564de99d1?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Experience the magic of ancient Egypt with the Sound & Light Show at the iconic Giza Pyramids. Marvel at the stunning light displays as the pyramids come to life with captivating stories of Egypt’s glorious past.",
                inclusions: ["Tour Duration: 3 hours", "Private air-conditioned transportation", "Entrance fees to the Sound & Light Show", "On-site representative assistance"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "18:00", event: "Pickup from hotel and transfer to the Giza Pyramids" },
                    { time: "Evening", event: "Enjoy the spectacular Sound & Light Show at the pyramids" },
                    { time: "21:00", event: "Transfer back and drop-off at hotel" },
                ],
                prices: [
                    { label: "Single", price: "$120" },
                    { label: "2 Persons", price: "$75" },
                    { label: "3 Persons", price: "$70" },
                    { label: "4 Persons", price: "$65" },
                    { label: "5 Persons", price: "$60" },
                    { label: "6 Persons", price: "$55" },
                ],
                note: "** This itinerary follows the summer timing for the show. For the most up-to-date show timings, please check the Sound & Light Show website or connect with us for more information.**",
            },
            {
                id: 6,
                title: "Nile Cruise Dinner",
                images: ["https://plus.unsplash.com/premium_photo-1678131188332-693a503680ae?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Savor a delightful dinner on the Nile while enjoying live entertainment, including captivating belly dancing and swirling dervish performances. An unforgettable evening on Egypt’s legendary river.",
                inclusions: ["Tour Duration: 4 hours", "Private air-conditioned transportation", "Dinner and show during the boat cruise"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "18:00", event: "Pickup from hotel and transfer to the cruise" },
                    { time: "Evening", event: "Enjoy a delicious dinner and live entertainment during the cruise" },
                    { time: "22:00", event: "Transfer back and drop-off at hotel" },
                ],
                prices: [
                    { label: "Single", price: "$120" },
                    { label: "2 Persons", price: "$75" },
                    { label: "3 Persons", price: "$70" },
                    { label: "4 Persons", price: "$65" },
                    { label: "5 Persons", price: "$60" },
                    { label: "6 Persons", price: "$55" },
                ],
            },
            {
                id: 7,
                title: "Day Tour to Alexandria from Cairo",
                images: ["https://images.unsplash.com/photo-1697546889969-27f7b5be8664?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Uncover the rich history of Alexandria, Egypt's vibrant second-largest city and a key Mediterranean port. Explore the ancient Catacombs, the impressive Roman Amphitheatre, Pompey’s Pillars, and the iconic Bibliotheca Alexandrina – the modern Library of Alexandria, which pays tribute to its ancient predecessor.",
                inclusions: ["Tour Duration: 11 hours", "Private air-conditioned transport to and from Alexandria", "Entrance fees", "English-speaking tour guide"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "08:00", event: "Pickup from your hotel in Cairo, transfer to Alexandria" },
                    { time: "11:00", event: "Arrival in Alexandria, and visit to key sites" },
                    { time: "13:00", event: "Lunch at your own expense" },
                    { time: "16:00", event: "Departure from Alexandria, return to Cairo" },
                    { time: "19:00", event: "Drop-off at your hotel in Cairo" },
                ],
                prices: [
                    { label: "Single", price: "$270" },
                    { label: "2 Persons", price: "$150" },
                    { label: "3 Persons", price: "$140" },
                    { label: "4 Persons", price: "$135" },
                    { label: "5 Persons", price: "$125" },
                    { label: "6 Persons", price: "$120" },
                ],
            },
        ],
    },
    "abu-simbel": {
        id: "abu-simbel",
        title: "Abu Simbel Tours",
        quote: "Abu Simbel is a must-see wonder that will leave you speechless! The massive statues of Ramses II stand tall, guarding one of the most incredible temples ever built. Carved into the rock thousands of years ago, this masterpiece was saved from the rising waters of the Nile and still amazes visitors today. If you want to witness something truly unforgettable, Abu Simbel is the place to be!",
        tours: [
            {
                id: 1,
                title: "Abu Simbel by Land",
                images: ["https://images.unsplash.com/photo-1702909171830-2c4dca2ac090?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Enjoy a full-day excursion to the iconic Abu Simbel site, home to the magnificent temples of Ramses II and Queen Nefertari. Marvel at the colossal statues and intricate carvings, a UNESCO World Heritage Site that was carefully relocated to protect it from the rising waters of Lake Nasser.",
                inclusions: ["Duration: 9 hours", "Private air-conditioned transport to and from Abu Simbel", "English-speaking tour guide", "Entrance fees to Abu Simbel Temple"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "04:15", event: "Pickup from hotel, cruise ship, or train station" },
                    { time: "08:00", event: "Visit to Abu Simbel site" },
                    { time: "10:00", event: "Transfer back to Aswan" },
                    { time: "13:00", event: "Drop-off your hotel, cruise, felucca or train station" },
                ],
                prices: [
                    { label: "Single", price: "$200" },
                    { label: "2 Persons", price: "$150" },
                    { label: "3 Persons", price: "$130" },
                    { label: "4 Persons", price: "$120" },
                    { label: "5 Persons", price: "$110" },
                    { label: "6 Persons", price: "$100" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 2,
                title: "Abu Simbel Overnight Tour with Sound & Light Show",
                images: ["https://images.unsplash.com/photo-1748292951610-1ed2f59c9c20?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Extend your Abu Simbel experience with an overnight stay, allowing you to explore the temples at a relaxed pace. Witness the captivating Sound & Light Show, which brings the history of Ramses II and Queen Nefertari to life with dazzling lights and immersive narration.",
                inclusions: ["Duration: 2 days / 1 night", "Private air-conditioned transport to and from Abu Simbel", "Entrance fees to Abu Simbel Temple and Sound & Light Show", "Transfers within Abu Simbel (hotel – site – show - return)", "English-speaking tour guide", "Road permit for smooth travel"],
                exclusions: ["Personal expenses", "Gratuities", "Accommodation in Abu Simbel"],
                itinerary: [
                    { day: "Day 1", time: "10:30 AM", event: "Pickup from your hotel, cruise, or train station and transfer to Abu Simbel" },
                    { day: "Day 1", time: "01:30 PM", event: "Check-in at your accommodation and enjoy some rest" },
                    { day: "Day 1", time: "03:00 PM", event: "Guided visit to the Abu Simbel site" },
                    { day: "Day 1", time: "07:00 PM", event: "Attend the Sound & Light Show at Abu Simbel" },
                    { day: "Day 1", time: "08:00 PM", event: "Transfer back to your accommodation the evening at leisure" },
                    { day: "Day 2", time: "08:00 AM", event: "Transfer back to Aswan" },
                    { day: "Day 2", time: "11:30 AM", event: "Drop-off at your hotel, cruise, or train station" },
                ],
                prices: [
                    { label: "Single", price: "$300" },
                    { label: "2 Persons", price: "$225" },
                    { label: "3 Persons", price: "$195" },
                    { label: "4 Persons", price: "$180" },
                    { label: "5 Persons", price: "$165" },
                    { label: "6 Persons", price: "$150" },
                ],
                note: "Private tour with flexible timing and duration",
            },
            {
                id: 3,
                title: "Abu Simbel by Flight",
                images: ["https://images.unsplash.com/photo-1761560879601-f44463a523dc?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Skip the long drive and fly directly from Aswan to Abu Simbel for a hassle-free and time-saving experience. This option lets you explore the awe-inspiring temples in the morning before flying back, making the most of your time in Egypt.",
                inclusions: ["Duration: 5-6 hours", "Round-trip flight ticket (Aswan / Abu Simbel / Aswan)", "Pickup and drop-off between Aswan accommodation and airport", "English-speaking Egyptologist guide", "Entrance fees to Abu Simbel Temple", "On-ground assistance"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { time: "18:00", event: "Pickup from hotel or cruise ship" },
                    { time: "Evening", event: "Attend the Sound & Light Show" },
                    { time: "20:30", event: "Return transfer and drop-off" },
                ],
                prices: [
                    { label: "Single", price: "$450" },
                    { label: "2 Persons", price: "$425" },
                    { label: "3 Persons", price: "$410" },
                    { label: "4 Persons", price: "$400" },
                    { label: "5 Persons", price: "$385" },
                    { label: "6 Persons", price: "$380" },
                ],
            },
        ],
    },
    "historical-wonders": {
        id: "historical-wonders",
        title: "Historical Wonders",
        quote: "Experience the magic of Egypt with our carefully curated historical itineraries. From the pulse of Cairo to the serenity of the Nile, these journeys offer a perfect blend of history, culture, and relaxation.",
        tours: [
            {
                id: 1,
                title: "6 Nights / 7 Days – Cairo, Aswan & Luxor (Including a Nile Cruise)",
                images: ["https://plus.unsplash.com/premium_photo-1728561809541-1620be0f4004?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Experience the magic of Egypt with this carefully curated 6-night itinerary.",
                inclusions: ["Three nights at a hotel in Cairo (B&B)", "Three nights/four days on a 5-star Nile cruise (Full Board)", "All sightseeing with Egyptologist guide", "All entrance fees and required permits", "Domestic flights: Cairo/Aswan & Luxor/Cairo"],
                exclusions: ["Optional tours", "Personal expenses", "Gratuities"],
                itinerary: [
                    { day: "Day 1", time: "Arrival", event: "Meet & greet at Cairo airport, private transfer to hotel" },
                    { day: "Day 2", time: "Giza", event: "Visit Pyramids of Giza, the Sphinx, and the Egyptian Museum" },
                    { day: "Day 3", time: "Aswan", event: "Fly to Aswan, embark on cruise, visit High Dam and Philae Temple" },
                    { day: "Day 4", time: "Kom Ombo", event: "Optional Abu Simbel, sail to Kom Ombo, visit Kom Ombo Temple" },
                    { day: "Day 5", time: "Luxor", event: "Visit Edfu Temple, sail through Esna Lock to Luxor" },
                    { day: "Day 6", time: "Luxor", event: "Disembark, West Bank visit & East Bank visit, fly to Cairo" },
                    { day: "Day 7", time: "Departure", event: "Breakfast and check-out, transfer to Cairo airport" },
                ],
                prices: [
                    { label: "Double (3 nights)", price: "$1250" },
                    { label: "Single (3 nights)", price: "$1700" },
                    { label: "Double (4 nights)", price: "$1975" },
                    { label: "Single (4 nights)", price: "$2450" },
                ],
                pricingPolicy: {
                    baseRatePeriod: "Above rates start from 15/07/2026 to 30/09/2026",
                    supplements: [
                        {
                            period: "From 01/10/2026 to 30/04/2027",
                            increase: "20%",
                            isPeak: false
                        },
                        {
                            period: "From 21/12/2026 to 03/01/2027",
                            increase: "35%",
                            isPeak: true
                        }
                    ]
                },
            },
            {
                id: 2,
                title: "9 Nights / 10 Days – Cairo, Aswan, Luxor & Hurghada (Including a Nile Cruise)",
                images: ["https://images.unsplash.com/photo-1553913861-c46db5573ced?w=400&auto=format&fit=crop&fmt=webp"],
                highlights: "Combine history and relaxation. Explore Cairo and the Nile before unwinding on Hurghada.",
                inclusions: ["3 nights in Cairo (B&B)", "3 nights on 5-star Nile cruise (Full Board)", "3 nights in Hurghada (All-inclusive)", "Domestic flights: Cairo/Aswan & Hurghada/Cairo"],
                exclusions: ["Optional tours", "Meals during sightseeing (unless specified)", "Gratuities"],
                itinerary: [
                    { day: "Day 1", time: "Arrival", event: "Arrival in Cairo, transfer to hotel" },
                    { day: "Day 2", time: "Giza", event: "Pyramids, Sphinx, and GEM" },
                    { day: "Day 3", time: "Cruising", event: "Fly to Aswan, visit High Dam/Philae, embark cruise" },
                    { day: "Day 4", time: "Temples", event: "Optional Abu Simbel, Kom Ombo temple" },
                    { day: "Day 5", time: "Edfu", event: "Edfu temple, sail to Luxor" },
                    { day: "Day 6", time: "Transfer", event: "Luxor West/East Bank tour, transfer to Hurghada" },
                    { day: "Day 7", time: "Red Sea", event: "Relaxation or optional sea trip" },
                    { day: "Day 8", time: "Safari", event: "Relaxation or optional desert safari" },
                    { day: "Day 9", time: "Cairo", event: "Fly to Cairo, optional Old Cairo tour" },
                    { day: "Day 10", time: "Departure", event: "Departure from Cairo" },
                ],
                prices: [
                    { label: "Basic", price: "$1,725" },
                    { label: "Premium", price: "$2,525" },
                    { label: "Luxury", price: "$3,075" },
                    { label: "Elite", price: "$5,455" },
                ],
            },
            {
                id: 3,
                title: "11 Nights / 12 Days – Cairo, Aswan, Luxor & Alexandria (Including a Nile Cruise)",
                images: ["https://images.unsplash.com/photo-1628503218283-6ddeac69dfea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWd5cHQlMjB0ZW1wbGUlMjB3aWRlfGVufDB8fDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "The ultimate cultural circuit. Visit Alexandria alongside Cairo, Luxor, and Aswan.",
                inclusions: ["6 nights in Cairo (B&B)", "4 nights on 5-star Nile cruise (Full Board)", "1 night in Aswan (B&B)", "Domestic flights: Cairo/Luxor & Aswan/Cairo"],
                exclusions: ["Optional tours", "Meals during sightseeing", "Gratuities"],
                itinerary: [
                    { day: "Day 1", time: "Arrival", event: "Arrival in Cairo" },
                    { day: "Day 2", time: "Giza", event: "Pyramids, Sphinx and GEM" },
                    { day: "Day 3", time: "Ancient Sites", event: "Sakkara, Memphis and Dahshur" },
                    { day: "Day 4", time: "Alexandria", event: "Catacombs, Amphitheatre, Pompey's Pillars, Library" },
                    { day: "Day 5", time: "Old Cairo", event: "Citadel, NMEC, Old Cairo & Khan El Khalili" },
                    { day: "Day 6", time: "Luxor", event: "Fly to Luxor, East Bank (Karnak/Luxor temples)" },
                    { day: "Day 7", time: "Luxor", event: "West Bank (Valley of Kings, Hatshepsut), sail to Edfu" },
                    { day: "Day 8", time: "Cruising", event: "Edfu & Kom Ombo temples" },
                    { day: "Day 9", time: "Aswan", event: "High Dam & Philae Temple" },
                    { day: "Day 10", time: "Nubian", event: "Disembark, Nubian Museum, Felucca sailing, Nubian village" },
                    { day: "Day 11", time: "Return", event: "Optional Abu Simbel, fly to Cairo" },
                    { day: "Day 12", time: "Departure", event: "Departure from Cairo" },
                ],
                prices: [
                    { label: "Basic", price: "$2,365" },
                    { label: "Premium", price: "$3,825" },
                    { label: "Luxury", price: "$4,375" },
                    { label: "Elite", price: "$7,760" },
                ],
            },
            {
                id: 4,
                title: "14 Nights / 15 Days – Cairo, Oasis & White Desert, Aswan, Luxor & Hurghada (Including a Nile Cruise)",
                images: ["https://images.unsplash.com/photo-1594311526185-cdd502eb5d04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGVneXB0fGVufDB8fDB8fHww&fmt=webp&w=800&q=75"],
                highlights: "An expansive 15-day journey covering the desert, the Nile, and the Red Sea.",
                inclusions: ["5 nights in Cairo (B&B)", "1 night camping (Full Board)", "1 night in Aswan (B&B)", "3 nights on Nile cruise (Full Board)", "1 night in Luxor (B&B)", "3 nights in Hurghada (All-inclusive)"],
                exclusions: ["Optional tours", "Personal expenses", "Gratuities"],
                itinerary: [
                    { day: "Day 1", time: "Arrival", event: "Arrival in Cairo" },
                    { day: "Day 2", time: "Giza", event: "Pyramids, Sphinx and GEM" },
                    { day: "Day 3", time: "Old Cairo", event: "Citadel, Old Cairo, Khan El Khalili" },
                    { day: "Day 4", time: "Desert", event: "Bahariya Oasis, 4x4 Safari, White Desert camping" },
                    { day: "Day 5", time: "Return", event: "Return to Cairo" },
                    { day: "Day 6", time: "Aswan", event: "Fly to Aswan, Nubian Day Tour" },
                    { day: "Day 7", time: "Cruising", event: "High Dam/Philae, embark cruise" },
                    { day: "Day 8", time: "Temples", event: "Optional Abu Simbel, Kom Ombo temple" },
                    { day: "Day 9", time: "Edfu", event: "Edfu temple, sail to Luxor" },
                    { day: "Day 10", time: "Luxor", event: "West Bank tour, East Bank tour" },
                    { day: "Day 11", time: "Hurghada", event: "Transfer to Hurghada" },
                    { day: "Day 12", time: "Sea", event: "Relaxation or optional sea trip" },
                    { day: "Day 13", time: "Safari", event: "Relaxation or optional desert safari" },
                    { day: "Day 14", time: "Cairo", event: "Fly back to Cairo" },
                    { day: "Day 15", time: "Departure", event: "Departure from Cairo" },
                ],
                prices: [
                    { label: "Basic", price: "$2,725" },
                    { label: "Premium", price: "$3,825" },
                    { label: "Luxury", price: "$4,800" },
                    { label: "Elite", price: "$8,300" },
                ],
            },
        ],
    },
    // ============================================
    // 🚢 🚢 NILE CRUISE DATA NEW ADDITIONS 🚢 🚢
    // ============================================
    "luxor-aswan-cruise": {
        id: "luxor-aswan-cruise",
        title: "Luxor & Aswan Nile Cruises",
        quote: "Sail through the heart of history. Our Luxor and Aswan cruises offer a unique perspective of Egypt's ancient wonders from the comfort of a 5-star floating hotel.",
        tours: [
            {
                id: 1,
                title: "Mövenpick MS Sunray - 4 Nights / 5 Days (Luxor to Aswan)",
                images: ["https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=1200&fmt=webp"],
                highlights: "Experience 5-star elegance on the Nile with Mövenpick MS Sunray. Enjoy 43-inch Smart TVs, private espresso machines, and a curated itinerary featuring the best of Luxor and Aswan.",
                inclusions: ["All transfers (airport/train/hotel)", "Accommodation on 5-star cruise (full board)", "Egyptologist guide", "Entrance fees for all mentioned sites", "Free internet Wi-Fi", "Espresso machine in all units"],
                exclusions: ["Optional tours (Abu Simbel, Hot Air Balloon, etc.)", "Personal expenses", "Gratuities"],
                itinerary: [
                    { day: "Thursday", time: "12:00 PM", event: "Check-In & Lunch", detail: "Embarkation in Luxor followed by a sumptuous buffet lunch on board." },
                    { day: "Thursday", time: "02:30 PM", event: "East Bank Tour", detail: "Visit the grand Karnak and Luxor Temples. Overnight in Luxor." },
                    { day: "Friday", time: "07:30 AM", event: "West Bank Exploration", detail: "Discover the Valley of the Kings, Valley of the Queens, and Temple of Hatshepsut. Sail to Edfu via Esna Lock." },
                    { day: "Saturday", time: "07:30 AM", event: "Edfu Temple", detail: "Visit Edfu Temple by horse-drawn carriage. Sail to Kom Ombo." },
                    { day: "Saturday", time: "04:00 PM", event: "Kom Ombo Temple", detail: "Visit the unique double temple of Sobek & Haroeris. Sail to Aswan." },
                    { day: "Saturday", time: "09:00 PM", event: "Egyptian Galabeya Night", detail: "Festive celebration on board. Overnight in Aswan." },
                    { day: "Sunday", time: "07:30 AM", event: "Aswan Historic Sites", detail: "Visit the High Dam, Philae Temple, and the Unfinished Obelisk." },
                    { day: "Sunday", time: "03:30 PM", event: "Felucca Sailing", detail: "Traditional sailing around Kitchener Island. Belly dance show in the evening." },
                    { day: "Monday", time: "08:00 AM", event: "Check-out", detail: "Disembarkation after breakfast." }
                ],
                prices: [
                    { label: "Standard DBL Cabin (Per Person / Cruise)", price: "$210" },
                    { label: "Superior DBL Cabin (Per Person / Cruise)", price: "$242" },
                    { label: "Executive Suite (Private Suite Booking)", price: "$1,365" },
                    { label: "Standard DBL (Winter Season - Per Person)", price: "$430" }
                ],
                boatDetails: {
                    name: "Mövenpick MS Sunray",
                    usp: "Where ancient history meets smart-home tech.",
                    specs: { length: "72m", width: "15m", height: "11.50m", engines: "3", generators: "3", speed: "15" },
                    facilities: ["Main Restaurant", "Lounge Bar", "Pool"],
                    cabins: [{ name: "Standard", size: "20", decks: ["Main"], amenities: ["TV"] }]
                }
            },
            {
                id: 2,
                title: "Mövenpick MS Hamees - 3 Nights / 4 Days (Aswan to Luxor)",
                images: ["https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1200&fmt=webp"],
                highlights: "Discover one of the largest and best-appointed Nile crafts. Mövenpick MS Hamees offers contemporary design, French windows, and world-class dining experiences.",
                inclusions: ["All transfers", "Accommodation on 5-star cruise (full board)", "Egyptologist guide", "Entrance fees", "French windows in cabins", "Smart TVs"],
                exclusions: ["Optional tours", "Personal extras", "Gratuities"],
                itinerary: [
                    { day: "Friday", time: "12:00 PM", event: "Check-In", detail: "Embarkation in Aswan followed by lunch on board." },
                    { day: "Friday", time: "01:30 PM", event: "High Dam & Philae", detail: "Visit the High Dam and the beautiful temple of Philae." },
                    { day: "Saturday", time: "06:00 AM", event: "Sail to Kom Ombo", detail: "Visit Kom Ombo Temple. Sail to Edfu." },
                    { day: "Saturday", time: "01:00 PM", event: "Edfu Temple", detail: "Visit Edfu Temple. Sail to Luxor via Esna Lock." },
                    { day: "Saturday", time: "09:00 PM", event: "Galabeya Night", detail: "Enjoy a traditional celebration while sailing towards Luxor." },
                    { day: "Sunday", time: "07:00 AM", event: "West Bank", detail: "Visit the Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon." },
                    { day: "Sunday", time: "02:30 PM", event: "East Bank", detail: "Visit Karnak and Luxor Temples. Belly dance show in the evening." },
                    { day: "Monday", time: "08:00 AM", event: "Check-out", detail: "Disembarkation after breakfast." }
                ],
                prices: [
                    { label: "Standard DBL Cabin (Per Person / Cruise)", price: "$200" },
                    { label: "Superior DBL Cabin (Per Person / Cruise)", price: "$230" },
                    { label: "Deluxe Suite (Private Suite Booking)", price: "$1,100" }
                ],
                boatDetails: {
                    name: "Mövenpick MS Hamees",
                    usp: "A comfortable sanctuary.",
                    specs: { length: "72m", width: "14.8m", height: "11.5m", engines: "3", generators: "3", speed: "15" },
                    facilities: ["Main Restaurant", "Lounge Bar"],
                    cabins: [{ name: "Standard", size: "21.7", decks: ["Main"], amenities: ["TV"] }]
                }
            },
            {
                id: 3,
                title: "Standard Nile Cruise Fleet (3 or 4 Nights Packages)",
                images: ["https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&fmt=webp"],
                highlights: "Sailing aboard comfortable fleet like M/S Sunrise Semirames I & II, M/S Nile Dolphin, or M/S Zeina. Features Option 1 (Sailing 2:00 PM Day 2) or Option 2 (Sailing 3:00 AM Day 2).",
                inclusions: ["Accommodation on 5-star standard cruise (full board)", "Meet & assist upon arrival & departure", "All sightseeing tours with air-conditioned transport", "Egyptologist guide & entry fees"],
                exclusions: ["Any optional tours", "Personal expenses", "Gratuities"],
                itinerary: [],
                prices: [
                    { label: "3 Nights - Double/Triple Cabin (Per Person)", price: "$480" },
                    { label: "3 Nights - Single Private Cabin", price: "$725" },
                    { label: "4 Nights - Double/Triple Cabin (Per Person)", price: "$630" },
                    { label: "4 Nights - Single Private Cabin", price: "$960" }
                ]
            },
            {
                id: 4,
                title: "Deluxe Nile Cruise Fleet (3 or 4 Nights Packages)",
                images: ["https://images.unsplash.com/photo-1628178651610-d9d1be6a32d1?auto=format&fit=crop&fmt=webp"],
                highlights: "Premium cruising experience on celebrated deluxe ships like M/S Nile Premium, M/S Le Fayan, or M/S Concerto.",
                inclusions: ["Accommodation on 5-star deluxe cruise (full board)", "Meet & assist and private transfers", "All sightseeing tours with expert guide & entrance fees"],
                exclusions: ["Any optional tours", "Personal expenses", "Gratuities"],
                itinerary: [],
                prices: [
                    { label: "3 Nights - Double/Triple Cabin (Per Person)", price: "$825" },
                    { label: "3 Nights - Single Private Cabin", price: "$1300" },
                    { label: "4 Nights - Double/Triple Cabin (Per Person)", price: "$1100" },
                    { label: "4 Nights - Single Private Cabin", price: "$1700" }
                ]
            },
            {
                id: 5,
                title: "Luxury Nile Cruise Fleet (3 or 4 Nights Packages)",
                images: ["https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&fmt=webp"],
                highlights: "Boutique luxury cruising on renowned ships like M/S Mayfair, M/S Mayflower, M/S Sonesta St. George, or M/S Mövenpick Royal Lotus.",
                inclusions: ["Accommodation on 5-star luxury cruise (full board)", "Meet & assist upon arrival & departure", "All sightseeing tours with air-conditioned transport", "Egyptologist guide & entry fees"],
                exclusions: ["Any optional tours", "Personal expenses", "Gratuities"],
                itinerary: [],
                prices: [
                    { label: "3 Nights - Double/Triple Cabin (Per Person)", price: "$1050" },
                    { label: "3 Nights - Single Private Cabin", price: "$1700" },
                    { label: "4 Nights - Double/Triple Cabin (Per Person)", price: "$1400" },
                    { label: "4 Nights - Single Private Cabin", price: "$2260" }
                ]
            },
            {
                id: 6,
                title: "Ultra-Luxury Nile Cruise Experiences",
                images: ["https://images.unsplash.com/photo-1568322422676-9d713bcc136b?auto=format&fit=crop&fmt=webp"],
                highlights: "The absolute pinnacle of royalty and elite comfort on the Nile. Sail aboard world-class historical steamers and ultra-luxury crafts like Mövenpick SS Steamer Misr, Steam Ship Sudan, Oberoi Zahra, or Oberoi Philae.",
                inclusions: ["Boutique Ultra-Luxury Cruise Accommodation (full board)", "VIP private transfers and premium handling", "Tailored private sightseeing tours with top-tier Egyptologist guide"],
                exclusions: ["Any optional tours", "Personal expenses", "Gratuities"],
                itinerary: [],
                prices: [
                    { label: "3 Nights - Double/Triple Cabin (Per Person)", price: "$2990" },
                    { label: "3 Nights - Single Private Cabin", price: "$4780" },
                    { label: "4 Nights - Double/Triple Cabin (Per Person)", price: "$3920" },
                    { label: "4 Nights - Single Private Cabin", price: "$6270" }
                ]
            }
        ]
    },
    "felucca-cruise": {
        id: "felucca-cruise",
        title: "Super Deluxe Felucca Cruises",
        quote: "Sail along the Nile in style aboard an exclusive traditional felucca, offering a blend of heritage and modern comfort. Enjoy pristine river landscapes, campfires, and authentic Nubian hospitality.",
        tours: [
            {
                id: 1,
                title: "From Aswan to Daraw – 1 Night / 1 Day",
                images: ["https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&fmt=webp"],
                highlights: "Experience a magical night under the stars with a campfire and traditional Nubian music performed by the crew. Features traditional clay-pot Nubian Tagen stews.",
                inclusions: ["Private transfer to/from felucca", "Three fresh meals per day and mineral water", "Folklore Nubian music night"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { day: "Day 1", time: "Aswan", event: "Morning departure (10:00), sail downstream, meals onshore/onboard" },
                    { day: "Day 2", time: "Daraw", event: "Arrival in Daraw, transfer back to Aswan or continue to Luxor" }
                ],
                prices: [
                    { label: "1 Person (Private Single Boat Charter)", price: "$190" },
                    { label: "2-4 Persons (Group Package - Per Person)", price: "$130" },
                    { label: "More than 4 Persons (Per Additional Person)", price: "+$60" }
                ],
                note: "Nubian Menu: Traditional Tagen stews, sun bread, salads, soft drinks, and unlimited water."
            },
            {
                id: 2,
                title: "From Aswan to Kom Ombo – 2 Nights / 2 Days",
                images: ["https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&fmt=webp"],
                highlights: "An unforgettable two-day flexible sailing journey downstream with Nubian music, storytelling, and campfire evenings under the stars.",
                inclusions: ["Private transfer from your location to the felucca", "Three fresh meals per day (breakfast, lunch, and dinner) and mineral water", "Campfire setup and onboard Nubian musical entertainment"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { day: "Day 1", time: "Sailing", event: "Depart Aswan, sailing, Nubian music and dinner under the stars" },
                    { day: "Day 2", time: "Sailing", event: "Leisurely sailing, stopping for meals, campfire evening" },
                    { day: "Day 3", time: "Kom Ombo", event: "Arrival at Kom Ombo, transfer to next destination" }
                ],
                prices: [
                    { label: "1 Person (Private Single Boat Charter)", price: "$350" },
                    { label: "2-4 Persons (Group Package - Total Group)", price: "$480" },
                    { label: "More than 4 Persons (Per Additional Person)", price: "+$100" }
                ]
            },
            {
                id: 3,
                title: "From Aswan to Edfu – 3 Nights / 3-4 Days",
                images: ["https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&fmt=webp"],
                highlights: "The ultimate authentic slow-travel experience on the Nile. Fully dependent on wind conditions.",
                inclusions: ["Private transfers from your location to the felucca and return transfers from Edfu", "Three hot fresh meals per day and mineral water", "Luggage storage space and full bedding setup"],
                exclusions: ["Personal expenses", "Gratuities"],
                itinerary: [
                    { day: "Days 1-3", time: "Sailing", event: "Voyage from Aswan, daily sailing, swimming, and stops for exploration" },
                    { day: "Day 4", time: "Edfu", event: "Final breakfast, disembark at Edfu, return transfer" }
                ],
                prices: [
                    { label: "1 Person (Private Single Boat Charter)", price: "$350" },
                    { label: "2-4 Persons (Group Package - Total Group)", price: "$640" },
                    { label: "More than 4 Persons (Per Additional Person)", price: "+$135" }
                ]
            }
        ]
    },
    "dahabiya-cruise": {
        id: "dahabiya-cruise",
        title: "Dahabiya Nile Cruise Boat",
        quote: "A Dahabiya is the most exclusive way to see the Nile. These elegant sailing boats offer a boutique experience far removed from the larger cruise ships.",
        tours: [
            {
                id: 1,
                title: "4 Night Dahabiya Cruise (Esna to Aswan) – Departs Every Monday",
                images: ["https://images.unsplash.com/photo-1568322422676-9d713bcc136b?auto=format&fit=crop&fmt=webp"],
                highlights: "Includes Luxor West/East Bank sightseeing before embarking on your private sailing journey south. Available on premium crafts: Amoura, Queen Anat, Princess Donia, Nebyt, or Orient.",
                inclusions: ["Full board accommodation", "Meet & assist and private transfers", "Sightseeing with expert Egyptologist guide", "Entrance fees for all mentioned temples"],
                exclusions: ["Optional tours", "Gratuities", "Personal expenses"],
                itinerary: [
                    { day: "Day 1", time: "Luxor/Esna", event: "Valley of Kings, Hatshepsut, Karnak, transfer to Esna for embarkation" },
                    { day: "Day 2", time: "Edfu", event: "Sail to Edfu, Horus Temple visit, Bassaw Village cultural experience" },
                    { day: "Day 3", time: "Selsila", event: "Selsila Temple, sail to Kom Ombo Temple, continue to Aswan" },
                    { day: "Day 4", time: "Aswan", event: "Philae Temple, Aswan Souq, optional Nubian Village/Felucca" },
                    { day: "Day 5", time: "Departure", event: "Final breakfast, transfer to airport/hotel" }
                ],
                prices: [
                    { label: "Double/Triple Cabin (Per Person - 3 Nights)", price: "$1200" },
                    { label: "Single Cabin (Private Single - 3 Nights)", price: "$1980" },
                    { label: "Double/Triple Cabin (Per Person - 4 Nights)", price: "$1600" },
                    { label: "Single Cabin (Private Single - 4 Nights)", price: "$2640" }
                ]
            },
            {
                id: 2,
                title: "3 Night Dahabiya Cruise (Aswan to Esna) – Departs Every Friday",
                images: ["https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&fmt=webp"],
                highlights: "Explore Aswan's highlights including Philae Temple and local markets before sailing north towards Luxor on an intimate, top-tier Dahabiya.",
                inclusions: ["Full board boutique accommodation", "Meet & assist upon arrival & departure", "All sightseeing tours with private transport, expert guide, and entry fees"],
                exclusions: ["Optional tours", "Gratuities", "Personal expenses"],
                itinerary: [
                    { day: "Day 1", time: "Aswan", event: "Visit Philae Temple, Souq, embark, sail toward Kom Ombo, visit temple" },
                    { day: "Day 2", time: "Selsila", event: "Selsila Temple, Bassaw Village interaction, folklore night" },
                    { day: "Day 3", time: "Edfu", event: "Visit Horus Temple at Edfu, sail to Esna" },
                    { day: "Day 4", time: "Luxor", event: "Disembark, transfer to Luxor, sightseeing tour, departure" }
                ],
                prices: [
                    { label: "Double/Triple Cabin (Per Person - 3 Nights)", price: "$1200" },
                    { label: "Single Cabin (Private Single - 3 Nights)", price: "$1980" },
                    { label: "Double/Triple Cabin (Per Person - 4 Nights)", price: "$1600" },
                    { label: "Single Cabin (Private Single - 4 Nights)", price: "$2640" }
                ]
            }
        ]
    },
    "lake-nasser-cruise": {
        id: "lake-nasser-cruise",
        title: "Lake Nasser Cruise",
        quote: "Experience the timeless beauty of Lake Nasser on a luxury cruise. Sail between Aswan and Abu Simbel, visiting remote monuments rarely seen by others.",
        tours: [
            {
                id: 1,
                title: "4 Nights / 5 Days Cruise (Aswan to Abu Simbel)",
                images: ["https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&fmt=webp"],
                highlights: "A one-of-a-kind route visiting Kalabsha, Wadi El Seboua, Amada, and finishing with a sunrise over Abu Simbel. Vessels: M/S Steigenberger Omar El Khayam or M/S Prince Abbas.",
                inclusions: ["Meet and assist service upon arrival and departure", "Accommodation on a 5-star Lake Nasser cruise on a full-board basis", "All transfers and sightseeing excursions with deluxe A/C vehicles and entrance fees", "Professional English-speaking Egyptologist guide, all service charges and taxes"],
                exclusions: ["Personal expenses and extras", "Optional Abu Simbel Sound & Light show", "Gratuities"],
                itinerary: [
                    { day: "Day 1", time: "Aswan", event: "Arrival transfer, check-in, lunch on board, free time" },
                    { day: "Day 2", time: "Kalabsha", event: "Visit Kalabsha Temples, sail to Wadi El Seboua, cocktail party" },
                    { day: "Day 3", time: "Amada", event: "Visit Wadi El Seboua, sail to Amada, visit temples, Nubian Show" },
                    { day: "Day 4", time: "Abu Simbel", event: "Sail to Abu Simbel, panorama stop, visit temple, optional Sound & Light" },
                    { day: "Day 5", time: "Departure", event: "Check-out, private transfer back to Aswan" }
                ],
                prices: [
                    { label: "Single Room (Private Room - October to April)", price: "$2300" },
                    { label: "Double Room (Per Person - October to April)", price: "$1400" },
                    { label: "Triple Room (Per Person - October to April)", price: "$1375" }
                ]
            },
            {
                id: 2,
                title: "3 Nights / 4 Days Cruise (Abu Simbel to Aswan)",
                images: ["https://images.unsplash.com/photo-1628178651610-d9d1be6a32d1?auto=format&fit=crop&fmt=webp"],
                highlights: "Start your journey at the majestic Abu Simbel and sail north towards Aswan, visiting the hidden gems of Lake Nasser.",
                inclusions: ["Private road transfer from Aswan to Abu Simbel to initiate the cruise", "Accommodation on a 5-star Lake Nasser cruise on a full-board basis", "All sightseeing tours, entrance fees, and expert Egyptologist guidance", "All applicable service charges and local taxes"],
                exclusions: ["Personal extras", "Gratuities", "Optional tours"],
                itinerary: [
                    { day: "Day 1", time: "Abu Simbel", event: "Transfer from Aswan, embarkation, visit Abu Simbel Temple" },
                    { day: "Day 2", time: "Amada", event: "Sail to Kasr Ibrim (photo stop), visit Amada temples, sail to Wadi El Seboua" },
                    { day: "Day 3", time: "Aswan", event: "Visit Wadi El Seboua Temples, sail to Aswan" },
                    { day: "Day 4", time: "Departure", event: "Visit Kalabsha Temples, check-out, final transfer" }
                ],
                prices: [
                    { label: "Single Room (Private Room - October to April)", price: "$1755" },
                    { label: "Double Room (Per Person - October to April)", price: "$1080" },
                    { label: "Triple Room (Per Person - October to April)", price: "$1050" }
                ]
            }
        ]
    }
};
// ============================================
// 📜 POLICIES CONTENT (EN & FR)
// ============================================
var POLICIES_EN = {
    privacy: {
        title: "Privacy Policy",
        content: "At Egypt Holiday Aswan, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.\n\n1. Information We Collect\nWe may collect the following types of information:\n- Personal Information: Name, email address, phone number, billing details, and any other information you provide when booking a service.\n- Payment Information: When making a purchase, we may collect payment details, but transactions are processed securely through third-party payment gateways.\n- Technical Data: IP address, browser type, device information, and usage data collected through cookies and analytics tools.\n\n2. How We Use Your Information\nWe use the information we collect to:\n- Process bookings and transactions.\n- Improve our website, services, and customer experience.\n- Communicate with you regarding inquiries, confirmations, or updates.\n- Comply with legal and regulatory requirements.\n\n3. Sharing Your Information\nWe do not sell or rent your personal information. However, we may share it with:\n- Service Providers: Third-party vendors, such as hotels, airlines, or tour operators, to fulfill your booking.\n- Legal Authorities: If required by law or to protect our rights and security.\n\n4. Data Security\nWe implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We encourage you to take precautions when sharing personal data online.\n\n5. Cookies and Tracking Technologies\nWe use cookies and analytics tools to enhance your browsing experience. You can control cookie settings through your browser.\n\n6. Your Rights\nYou have the right to:\n- Access, update, or delete your personal information.\n- Opt-out of marketing communications.\n- Request information on how your data is used.\n\n7. Third-Party Links\nOur website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.\n\n8. Updates to This Policy\nWe may update this Privacy Policy from time to time. Any changes will be posted on this page.\n\n9. Contact Us\nIf you have any questions or concerns about this Privacy Policy, please contact us at Reservation@egyptholidayaswan.com."
    },
    terms: {
        title: "Terms & Conditions",
        content: "Welcome to Egypt Holiday Aswan. By booking with us, you agree to the following terms and conditions. Please read them carefully before making a reservation.\n\nBooking & Payment\n- A deposit is required at the time of booking to confirm your reservation.\n- The remaining balance must be paid before departure according to the specific tour terms.\n- Failure to complete payment by the due date may result in cancellation of your booking without a refund.\n- Prices are subject to change based on availability and supplier adjustments.\n\nTravel Documents & Requirements\n- It is the traveler\u2019s responsibility to ensure they have valid passports, visas, and any required health documentation.\n- We are not responsible for denied entry due to incomplete or incorrect documentation.\n\nItinerary & Changes\n- Our itineraries are subject to change due to unforeseen circumstances such as weather, government regulations, or operational requirements.\n- We will make every effort to provide suitable alternatives without additional costs to the customer where possible.\n\nChildren Policy\n- Pricing for children varies based on the specific services included in the package, such as accommodations, transportation, and tours.\n- Discounts may be available depending on the supplier's policies.\n- Infants (typically under 2 years old) may travel free of charge or at a minimal fee.\n- Children under a certain age may receive a discounted rate when sharing accommodations with adults.\n- Exact pricing for children will be provided at the time of booking, based on the applicable supplier terms.\n\nLiability & Responsibility\n- We act as an intermediary between travelers and service providers (airlines, hotels, cruise operators, etc.).\n- We are not responsible for delays, losses, accidents, or damage caused by third-party service providers.\n- We highly recommend purchasing travel insurance to cover unexpected situations.\n\nHealth & Safety\n- Travelers must disclose any medical conditions that may affect their participation in activities.\n- We are not liable for any health-related issues that arise during the trip.\n\nComplaints & Disputes\n- Any complaints must be reported during the trip for immediate resolution.\n- Disputes will be settled according to the laws of Canada."
    },
    cancellation: {
        title: "Cancellation & Refund Policy",
        content: "At Egypt Holiday Aswan, we strive to provide flexibility while ensuring fairness for all parties involved. Our cancellation policy varies based on the type of service booked, as each supplier (flights, Nile cruises, hotels, tours, etc.) may have different cancellation terms.\n\n1. General Cancellation Guidelines\n- Cancellation requests must be submitted in writing via email to Reservation@egyptholidayaswan.com.\n- Refund eligibility depends on the supplier's terms and the cancellation timeline.\n- Any applicable bank or transaction fees will be deducted from the refunded amount.\n- No-shows and last-minute cancellations may result in full charges with no refund.\n\n2. Flight Cancellations\n- Airline tickets are subject to the airline\u2019s cancellation and refund policies.\n- Some fares are non-refundable, while others may allow changes or cancellations with penalties.\n- We recommend purchasing travel insurance to cover unexpected cancellations.\n\n3. Nile Cruise Cancellations\nDue to high demand and limited availability, Nile cruises typically have strict cancellation policies. Below is a general guideline, but actual cancellation fees may vary by cruise provider:\n- More than 90 days before departure: 25% of the total cost will be charged.\n- 60-89 days before departure: 50% of the total cost will be charged.\n- 30-59 days before departure: 75% of the total cost will be charged.\n- Less than 30 days before departure: No refund will be issued.\n\n4. Hotel Cancellations\n- Hotels follow their own cancellation policies, which vary by season and room type.\n- Some hotels allow free cancellation up to a certain period, while others impose penalties.\n- We will inform you of your hotel's specific cancellation terms at the time of booking.\n\n5. Tour & Excursion Cancellations\n- Tours and excursions are generally more flexible.\n- Free cancellation is often available if made at least 48 hours before the scheduled tour.\n- Last-minute cancellations may be subject to a penalty, depending on the supplier.\n\n6. Force Majeure & Unforeseen Circumstances\n- In cases of force majeure (e.g., natural disasters, pandemics, political unrest), we will work with suppliers to offer rescheduling options or partial refunds when possible.\n- However, we are not responsible for losses due to circumstances beyond our control.\n\n7. Refund Process\n- Approved refunds will be processed within 7-14 business days after confirmation.\n- Refunds will be issued using the original payment method.\n- Some suppliers may take longer to process refunds, which is beyond our control."
    }
};
var POLICIES_FR = {
    privacy: {
        title: "Politique de confidentialité",
        content: "Chez Egypt Holiday Aswan, nous accordons une grande importance \u00E0 votre vie priv\u00E9e et nous nous engageons \u00E0 prot\u00E9ger vos informations personnelles. Cette politique de confidentialit\u00E9 d\u00E9crit comment nous collectons, utilisons et prot\u00E9geons vos donn\u00E9es lorsque vous visitez notre site Web ou utilisez nos services.\n\n1. Informations que nous collectons\nNous pouvons collecter les types d'informations suivants :\n- Informations personnelles : nom, adresse e-mail, num\u00E9ro de t\u00E9l\u00E9phone, d\u00E9tails de facturation et toute autre information que vous fournissez lors de la r\u00E9servation d'un service.\n- Informations de paiement : lors d'un achat, nous pouvons collecter des donn\u00E9es de paiement, mais les transactions sont trait\u00E9es en toute s\u00E9curit\u00E9 via des passerelles de paiement tierces.\n- Donn\u00E9es techniques : adresse IP, type de navigateur, informations sur l'appareil et donn\u00E9es d'utilisation collect\u00E9es via des cookies et des outils d'analyse.\n\n2. Comment nous utilisons vos informations\nNous utilisons les informations collect\u00E9es pour :\n- Traiter les r\u00E9servations et les transactions.\n- Am\u00E9liorer notre site Web, nos services et l'exp\u00E9rience client.\n- Communiquer avec vous concernant des demandes, confirmations ou mises \u00E0 jour.\n- Respecter les exigences l\u00E9gales et r\u00E9glementaires.\n\n3. Partage de vos informations\nNous ne vendons ni ne louons vos informations personnelles. Cependant, nous pouvons les partager avec :\n- Prestataires de services : fournisseurs tiers, tels que les h\u00F4tels, les compagnies a\u00E9riennes ou les voyagistes, pour ex\u00E9cuter votre r\u00E9servation.\n- Autorit\u00E9s l\u00E9gales : si la loi l'exige ou pour prot\u00E9ger nos droits et notre s\u00E9curit\u00E9.\n\n4. S\u00E9curit\u00E9 des donn\u00E9es\nNous mettons en \u0153uvre des mesures de s\u00E9curit\u00E9 pour prot\u00E9ger vos informations personnelles. Cependant, aucune m\u00E9thode de transmission sur Internet n'est s\u00E9curis\u00E9e \u00E0 100 %. Nous vous encourageons \u00E0 prendre des pr\u00E9cautions lors du partage de donn\u00E9es personnelles en ligne.\n\n5. Cookies et technologies de suivi\nNous utilisons des cookies et des outils d'analyse pour am\u00E9liorer votre exp\u00E9rience de navigation. Vous pouvez contr\u00F4ler les param\u00E8tres des cookies via votre navigateur.\n\n6. Vos droits\nVous avez le droit de :\n- Acc\u00E9der \u00E0 vos informations personnelles, les mettre \u00E0 jour ou les supprimer.\n- Vous d\u00E9sinscrire des communications marketing.\n- Demander des informations sur l'utilisation de vos donn\u00E9es.\n\n7. Liens tiers\nNotre site Web peut contenir des liens vers des sites Web tiers. Nous ne sommes pas responsables de leurs pratiques de confidentialit\u00E9 et vous encourageons \u00E0 consulter leurs politiques.\n\n8. Mises \u00E0 jour de cette politique\nNous pouvons mettre \u00E0 jour cette politique de confidentialit\u00E9 de temps \u00E0 autre. Tout changement sera publi\u00E9 sur cette page.\n\n9. Contactez-nous\nSi vous avez des questions ou des pr\u00E9occupations concernant cette politique de confidentialit\u00E9, veuillez nous contacter \u00E0 Reservation@egyptholidayaswan.com."
    },
    terms: {
        title: "Conditions Générales",
        content: "Bienvenue chez Egypt Holiday Aswan. En r\u00E9servant avec nous, vous acceptez les conditions g\u00E9n\u00E9rales suivantes. Veuillez les lire attentivement avant de faire une r\u00E9servation.\n\nR\u00E9servation et paiement\n- Un acompte est exig\u00E9 au moment de la r\u00E9servation pour confirmer votre demande.\n- Le solde restant doit \u00EAtre r\u00E9gl\u00E9 avant le d\u00E9part selon les conditions sp\u00E9cifiques du circuit.\n- Le non-r\u00E8glement du paiement \u00E0 la date d'\u00E9ch\u00E9ance peut entra\u00EEner l'annulation de votre r\u00E9servation sans remboursement.\n- Les prix sont sujets \u00E0 modification en fonction de la disponibilit\u00E9 et des ajustements des fournisseurs.\n\nDocuments de voyage et exigences\n- Il incombe au voyageur de s'assurer qu'il poss\u00E8de un passeport valide, des visas et toute documentation sanitaire requise.\n- Nous ne sommes pas responsables du refus d'entr\u00E9e d\u00FB \u00E0 des documents incomplets ou incorrects.\n\nItin\u00E9raire et modifications\n- Nos itin\u00E9raires sont sujets \u00E0 modification en raison de circonstances impr\u00E9vues telles que la m\u00E9t\u00E9o, les r\u00E9glementations gouvernementales ou les exigences op\u00E9rationnelles.\n- Nous ferons tous les efforts possibles pour fournir des alternatives ad\u00E9quates sans frais suppl\u00E9mentaires pour le client dans la mesure du possible.\n\nPolitique concernant les enfants\n- Les tarifs pour les enfants varient en fonction des services inclus dans le forfait, tels que l'h\u00E9bergement, le transport et les visites.\n- Des r\u00E9ductions peuvent \u00EAtre disponibles selon les politiques des fournisseurs.\n- Les nourrissons (g\u00E9n\u00E9ralement de moins de 2 ans) peuvent voyager gratuitement ou \u00E0 un tarif minime.\n- Les enfants de moins d'un certain \u00E2ge peuvent b\u00E9n\u00E9ficier d'un tarif r\u00E9duit lorsqu'ils partagent l'h\u00E9bergement avec des adultes.\n- La tarification exacte pour les enfants sera fournie au moment de la r\u00E9servation, en fonction des conditions applicables du fournisseur.\n\nResponsabilit\u00E9\n- Nous agissons en tant qu'interm\u00E9diaire entre les voyageurs et les prestataires de services (compagnies a\u00E9riennes, h\u00F4tels, croisi\u00E9ristes, etc.).\n- Nous ne sommes pas responsables des retards, pertes, accidents ou dommages caus\u00E9s par des prestataires de services tiers.\n- Nous vous recommandons vivement de souscrire une assurance voyage pour couvrir les situations impr\u00E9vues.\n\nSant\u00E9 et s\u00E9curit\u00E9\n- Les voyageurs doivent d\u00E9clarer toute condition m\u00E9dicale pouvant affecter leur participation aux activit\u00E9s.\n- Nous ne sommes pas responsables des probl\u00E8mes de sant\u00E9 qui surviennent pendant le voyage.\n\nR\u00E9clamations et litiges\n- Toute r\u00E9clamation doit \u00EAtre signal\u00E9e pendant le voyage pour une r\u00E9solution imm\u00E9diate.\n- Les litiges seront r\u00E9gl\u00E9s conform\u00E9ment aux lois du Canada."
    },
    cancellation: {
        title: "Politique d'Annulation et de Remboursement",
        content: "Chez Egypt Holiday Aswan, nous nous effor\u00E7ons d'offrir de la flexibilit\u00E9 tout en garantissant l'\u00E9quit\u00E9 pour toutes les parties impliqu\u00E9es. Notre politique d'annulation varie en fonction du type de service r\u00E9serv\u00E9, car chaque fournisseur (vols, croisi\u00E8res sur le Nil, h\u00F4tels, excursions, etc.) peut avoir des conditions d'annulation diff\u00E9rentes.\n\n1. Directives g\u00E9n\u00E9rales d'annulation\n- Les demandes d'annulation doivent \u00EAtre soumises par \u00E9crit par e-mail \u00E0 Reservation@egyptholidayaswan.com.\n- L'\u00E9ligibilit\u00E9 au remboursement d\u00E9pend des conditions du fournisseur et du calendrier d'annulation.\n- Tous les frais bancaires ou de transaction applicables seront d\u00E9duits du montant rembours\u00E9.\n- Les non-pr\u00E9sentations et les annulations de derni\u00E8re minute peuvent entra\u00EEner la facturation de la totalit\u00E9 des frais sans remboursement.\n\n2. Annulations de vols\n- Les billets d'avion sont soumis aux politiques d'annulation et de remboursement de la compagnie a\u00E9rienne.\n- Certains tarifs ne sont pas remboursables, tandis que d'autres peuvent permettre des modifications ou des annulations avec des p\u00E9nalit\u00E9s.\n- Nous vous recommandons de souscrire une assurance voyage pour couvrir les annulations impr\u00E9vues.\n\n3. Annulations de croisi\u00E8res sur le Nil\nEn raison de la forte demande et de la disponibilit\u00E9 limit\u00E9e, les croisi\u00E8res sur le Nil ont g\u00E9n\u00E9ralement des politiques d'annulation strictes. Voici une directive g\u00E9n\u00E9rale, mais les frais d'annulation r\u00E9els peuvent varier selon le croisi\u00E9riste :\n- Plus de 90 jours avant le d\u00E9part : 25 % du co\u00FBt total sera factur\u00E9.\n- De 60 \u00E0 89 jours avant le d\u00E9part : 50 % du co\u00FBt total sera factur\u00E9.\n- De 30 \u00E0 59 jours avant le d\u00E9part : 75 % du co\u00FBt total sera factur\u00E9.\n- Moins de 30 jours avant le d\u00E9part : Aucun remboursement ne sera effectu\u00E9.\n\n4. Annulations d'h\u00F4tels\n- Les h\u00F4tels suivent leurs propres politiques d'annulation, qui varient selon la saison et le type de chambre.\n- Certains h\u00F4tels permettent l'annulation gratuite jusqu'\u00E0 une certaine p\u00E9riode, tandis que d'autres imposent des p\u00E9nalit\u00E9s.\n- Nous vous informerons des conditions d'annulation sp\u00E9cifiques de votre h\u00F4tel au moment de la r\u00E9servation.\n\n5. Annulations d'excursions\n- Les visites et excursions sont g\u00E9n\u00E9ralement plus flexibles.\n- L'annulation gratuite est souvent disponible si elle est effectu\u00E9e au moins 48 heures avant la visite pr\u00E9vue.\n- Les annulations de derni\u00E8re minute peuvent \u00EAtre soumises \u00E0 une p\u00E9nalit\u00E9, selon le fournisseur.\n\n6. Force majeure et circonstances impr\u00E9vues\n- En cas de force majeure (ex. catastrophes naturelles, pand\u00E9mies, troubles politiques), nous travaillerons avec les fournisseurs pour proposer des options de report ou des remboursements partiels lorsque cela est possible.\n- Cependant, nous ne sommes pas responsables des pertes dues \u00E0 des circonstances ind\u00E9pendantes de notre volont\u00E9.\n\n7. Processus de remboursement\n- Les remboursements approuv\u00E9s seront trait\u00E9s dans un d\u00E9lai de 7 \u00E0 14 jours ouvrables apr\u00E8s confirmation.\n- Les remboursements seront effectu\u00E9s en utilisant le mode de paiement d'origine.\n- Certains fournisseurs peuvent prendre plus de temps pour traiter les remboursements, ce qui \u00E9chappe \u00E0 notre contr\u00F4le."
    }
};
var getPoliciesContent = function (lang) {
    return lang.startsWith('fr') ? POLICIES_FR : POLICIES_EN;
};
exports.getPoliciesContent = getPoliciesContent;
