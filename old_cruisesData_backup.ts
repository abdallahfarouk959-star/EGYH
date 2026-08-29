export interface PricingSeason {
  seasonName: string;
  tripleSharing: number | null;
  doubleSharing: number;
  singleCabin: number;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  activities: string[];
}

export interface CruiseItinerary {
  id: string;
  durationName: string;
  departureDay: string;
  pricing: PricingSeason[];
  days: ItineraryDay[];
}

export interface CruiseData {
  id: string;
  name: string;
  type: string;
  gallery: string[];
  inclusions: string[];
  exclusions: string[];
  childrenPolicy: string[];
  itineraries: CruiseItinerary[];
  note?: string;
}

export const cruises: CruiseData[] = [
  // 1. MS Esplanade
  {
    id: "ms-esplanade",
    name: "MS Esplanade",
    type: "Nile Cruise",
    gallery: [
      "/cruises/esplanade/image1.webp",
      "/cruises/esplanade/image2.webp",
      "/cruises/esplanade/image3.webp",
      "/cruises/esplanade/image4.webp",
      "/cruises/esplanade/image5.webp",
      "/cruises/esplanade/image6.webp",
      "/cruises/esplanade/image7.webp"
    ],
    inclusions: [
      "Seamless pickup and drop-off services at Luxor (LXR) and Aswan (ASW) airports.",
      "04 or 03 nights' accommodation on board the Nile cruises on FB basis.",
      "Meet and assist service upon arrival & departure.",
      "Assistance of our personnel during your stay and excursions.",
      "All transfers by modern, air-conditioned, private deluxe vehicle.",
      "All Nile Cruise excursions, as mentioned in the itinerary (private).",
      "Entrance fees to all sights in and between Luxor and Aswan."
    ],
    exclusions: [
      "Any extra meals and beverages.",
      "Personal expenses.",
      "Tipping.",
      "Optional tours."
    ],
    childrenPolicy: [
      "Less than 6 years old: accommodated free of charge sharing parents' cabin.",
      "From 6 years till 11.99 years: Sharing parents' cabin and charged as a half adult (max one child).",
      "Children from 12 years & over will be charged full fare.",
      "1 Child between 6 and 11.99 years accommodated with one adult only will be charged as 1 Double cabin."
    ],
    itineraries: [
      {
        id: "esplanade-3-nights",
        durationName: "3 Nights Aswan to Luxor",
        departureDay: "Every Wednesday",
        pricing: [
          { seasonName: "Summer Price (02/09/2026 to 30/09/2026)", tripleSharing: 895, doubleSharing: 955, singleCabin: 1630 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 1265, doubleSharing: 1325, singleCabin: 2260 },
          { seasonName: "Peak Winter (20/12/26 - 31/12/26 & 01/04/27 - 10/04/27)", tripleSharing: 1750, doubleSharing: 1810, singleCabin: 2800 }
        ],
        days: [
          { dayNumber: 1, title: "Aswan Arrival", activities: ["Pick up from Aswan.", "Transfer to Nile cruise boat.", "1:00 PM Lunch on board.", "Visit Philae Temple and High Dam.", "Dinner & Overnight on board in Aswan."] },
          { dayNumber: 2, title: "Kom Ombo & Edfu", activities: ["Sail to Kom Ombo 03:00 AM.", "Breakfast and visit to Kom Ombo Temple.", "Sail to Edfu & Lunch on board.", "Visit Edfu Temple.", "Sail to Luxor.", "Dinner & Overnight in Esna or Luxor."] },
          { dayNumber: 3, title: "Luxor Sightseeing", activities: ["Optional tour (hot air balloon).", "Breakfast on board.", "Visit West Bank (Valley of the Kings, Hatshepsut Temple, Colossi of Memnon).", "Lunch on board.", "Visit East Bank (Karnak and Luxor Temples).", "Dinner, Party & Overnight in Luxor."] },
          { dayNumber: 4, title: "Departure", activities: ["Breakfast on board.", "Disembarkation at 08:00 am.", "Departure transfer."] }
        ]
      },
      {
        id: "esplanade-4-nights",
        durationName: "4 Nights Luxor to Aswan",
        departureDay: "Every Saturday",
        pricing: [
          { seasonName: "Summer Price (02/09/2026 to 30/09/2026)", tripleSharing: 1080, doubleSharing: 1160, singleCabin: 1880 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 1555, doubleSharing: 1635, singleCabin: 2770 },
          { seasonName: "Peak Winter (20/12/26 - 31/12/26 & 01/04/27 - 10/04/27)", tripleSharing: 2170, doubleSharing: 2250, singleCabin: 3410 }
        ],
        days: [
          { dayNumber: 1, title: "Luxor Arrival", activities: ["Pick up from Luxor.", "Transfer & Embarkation.", "1pm Lunch on board.", "East Luxor: Luxor and Karnak Temples.", "Dinner and show on board.", "Overnight in Luxor."] },
          { dayNumber: 2, title: "West Bank to Edfu", activities: ["Optional: Hot air balloon.", "Breakfast.", "West Luxor: Valley of the Kings, Hatshepsut Temple, Memnon Colossi.", "Lunch on board.", "Sail to Esna & Edfu.", "Dinner & Overnight in Edfu."] },
          { dayNumber: 3, title: "Edfu & Kom Ombo", activities: ["Breakfast on board.", "Visit Edfu Temple by horse carriage.", "Sail to Kom Ombo.", "Lunch on board.", "Visit Kom Ombo Temple.", "Sail to Aswan.", "Dinner & Overnight in Aswan."] },
          { dayNumber: 4, title: "Aswan Highlights", activities: ["Breakfast.", "Visit High Dam and Philae Temple.", "Lunch on board.", "Optional: Nubian village.", "Dinner & Overnight in Aswan."] },
          { dayNumber: 5, title: "Departure", activities: ["Disembarkation.", "Optional: Abu Simbel temples.", "Departure transfer."] }
        ]
      }
    ]
  },
  // 2. MS Historia
  {
    id: "ms-historia",
    name: "MS Historia",
    type: "Ultra Luxury Nile Cruise",
    gallery: [
      "/cruises/historia/image1.webp",
      "/cruises/historia/image2.webp",
      "/cruises/historia/image3.webp",
      "/cruises/historia/image5.webp",
      "/cruises/historia/image6.webp",
      "/cruises/historia/image7.webp",
      "/cruises/historia/image8.webp",
      "/cruises/historia/image9.webp",
      "/cruises/historia/image10.webp",
      "/cruises/historia/image11.webp",
      "/cruises/historia/image12.webp",
      "/cruises/historia/image13.webp",
      "/cruises/historia/image14.webp"
    ],
    inclusions: [
      "Seamless pickup and drop-off services at Luxor & Aswan.",
      "Accommodation on board the Nile cruises on FB basis.",
      "Meet and assist service upon arrival & departure.",
      "All transfers by modern, air-conditioned deluxe vehicle.",
      "All Nile Cruise private excursions as mentioned.",
      "Entrance fees to all sights."
    ],
    exclusions: [
      "Any extra meals and beverages.",
      "Personal expenses.",
      "Tipping.",
      "Optional tours."
    ],
    childrenPolicy: [
      "Less than 7 years old: accommodated free of charge sharing parents' cabin.",
      "From 7 years till 11.99 years: Sharing parents' cabin and charged as a half adult (max one child).",
      "Children from 12 years & over will be charged full fare."
    ],
    note: "A 10% supplement is added for Upper Deck & connected cabins. Other language guides available for $300 supplement.",
    itineraries: [
      {
        id: "historia-3-nights",
        durationName: "3 Nights Aswan to Luxor",
        departureDay: "Every Friday",
        pricing: [
          { seasonName: "Shoulder Season", tripleSharing: null, doubleSharing: 2045, singleCabin: 3430 },
          { seasonName: "Main Season", tripleSharing: null, doubleSharing: 2445, singleCabin: 4040 },
          { seasonName: "Peak Season", tripleSharing: null, doubleSharing: 3615, singleCabin: 6035 }
        ],
        days: [
          { dayNumber: 1, title: "Aswan Arrival", activities: ["Pick up from Aswan.", "Embarkation on cruise boat.", "1:00 PM Lunch on board.", "Visit Philae Temple and High Dam.", "Dinner & Overnight in Aswan."] },
          { dayNumber: 2, title: "Kom Ombo & Edfu", activities: ["Sail to Kom Ombo 03:00 AM.", "Breakfast and visit to Kom Ombo Temple.", "Sail to Edfu & Lunch on board.", "Visit Edfu Temple.", "Sail to Luxor.", "Dinner & Overnight in Esna or Luxor."] },
          { dayNumber: 3, title: "Luxor Sightseeing", activities: ["Breakfast on board.", "Visit West Bank (Valley of the Kings, Hatshepsut, Colossi Memnon).", "Lunch on board.", "Visit East Bank (Karnak and Luxor Temples).", "Dinner, Party & Overnight in Luxor."] },
          { dayNumber: 4, title: "Departure", activities: ["Breakfast on board.", "Disembarkation at 08:00 am.", "Departure transfer."] }
        ]
      },
      {
        id: "historia-4-nights",
        durationName: "4 Nights Luxor to Aswan",
        departureDay: "Every Monday",
        pricing: [
          { seasonName: "Shoulder Season", tripleSharing: null, doubleSharing: 2595, singleCabin: 4380 },
          { seasonName: "Main Season", tripleSharing: null, doubleSharing: 3335, singleCabin: 5475 },
          { seasonName: "Peak Season", tripleSharing: null, doubleSharing: 4655, singleCabin: 7770 }
        ],
        days: [
          { dayNumber: 1, title: "Luxor Arrival", activities: ["Pick up from Luxor.", "Embarkation.", "1pm Lunch on board.", "East Luxor: Luxor and Karnak Temples.", "Dinner & Overnight in Luxor."] },
          { dayNumber: 2, title: "West Bank & Sailing", activities: ["Breakfast.", "West Luxor: Valley of the Kings, Hatshepsut, Memnon Colossi.", "Lunch on board.", "Sail to Esna & Edfu.", "Dinner & Overnight in Edfu."] },
          { dayNumber: 3, title: "Edfu & Kom Ombo", activities: ["Breakfast.", "Visit Edfu Temple by horse carriage.", "Sail to Kom Ombo.", "Lunch on board.", "Visit Kom Ombo Temple.", "Sail to Aswan.", "Dinner & Overnight in Aswan."] },
          { dayNumber: 4, title: "Aswan Highlights", activities: ["Breakfast.", "Visit High Dam and Philae Temple.", "Lunch on board.", "Dinner & Overnight in Aswan."] },
          { dayNumber: 5, title: "Departure", activities: ["Disembarkation from cruise ship.", "Departure transfer."] }
        ]
      }
    ]
  },
  // 3. MS Movenpick Sunray
  {
    id: "ms-movenpick-sunray",
    name: "M├╢venpick MS Sunray",
    type: "Nile Cruise",
    gallery: [
      "/cruises/sunray/image1.webp",
      "/cruises/sunray/image2.webp",
      "/cruises/sunray/image3.webp",
      "/cruises/sunray/image4.webp",
      "/cruises/sunray/image5.webp",
      "/cruises/sunray/image6.webp",
      "/cruises/sunray/image7.webp",
      "/cruises/sunray/image8.webp",
      "/cruises/sunray/image9.webp",
      "/cruises/sunray/image10.webp",
      "/cruises/sunray/image11.webp",
      "/cruises/sunray/image12.webp",
      "/cruises/sunray/image13.webp",
      "/cruises/sunray/image14.webp",
      "/cruises/sunray/image15.webp",
      "/cruises/sunray/image16.webp",
      "/cruises/sunray/image17.webp",
      "/cruises/sunray/image18.webp",
      "/cruises/sunray/image19.webp"
    ],
    inclusions: [
      "Seamless pickup and drop-off services.",
      "Accommodation on board on FB basis.",
      "Meet and assist service.",
      "All transfers by modern air-conditioned vehicle.",
      "All Nile Cruise excursions.",
      "Entrance fees to all sights."
    ],
    exclusions: [
      "Any extra meals and beverages.",
      "Personal expenses.",
      "Tipping.",
      "Optional tours."
    ],
    childrenPolicy: [
      "Less than 5 years old: free of charge sharing parents' cabin.",
      "From 5 till 11.99 years: Half adult (max one child).",
      "12 years & over: full fare."
    ],
    note: "Rates are Not applicable during the New Year trip. New Year trip supplement applies.",
    itineraries: [
      {
        id: "sunray-3-nights",
        durationName: "3 Nights Aswan to Luxor",
        departureDay: "Every Monday",
        pricing: [
          { seasonName: "Summer Price (Sep 2026)", tripleSharing: 955, doubleSharing: 970, singleCabin: 1660 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 1770, doubleSharing: 1785, singleCabin: 2925 },
          { seasonName: "Peak Winter Price", tripleSharing: 2030, doubleSharing: 2045, singleCabin: 3355 }
        ],
        days: [
          { dayNumber: 1, title: "Aswan", activities: ["Pick up from Aswan.", "Embarkation.", "1:00 PM Lunch.", "Visit Philae Temple and High Dam.", "Dinner & Overnight in Aswan."] },
          { dayNumber: 2, title: "Kom Ombo & Edfu", activities: ["Sail to Kom Ombo 03:00 AM.", "Breakfast and visit Kom Ombo Temple.", "Sail to Edfu & Lunch.", "Visit Edfu Temple.", "Sail to Luxor.", "Dinner & Overnight."] },
          { dayNumber: 3, title: "Luxor", activities: ["Breakfast.", "West Bank (Valley of the Kings, Hatshepsut, Memnon).", "Lunch.", "East Bank (Karnak and Luxor Temples).", "Dinner, Party & Overnight in Luxor."] },
          { dayNumber: 4, title: "Departure", activities: ["Breakfast.", "Disembarkation at 08:00 am.", "Departure transfer."] }
        ]
      },
      {
        id: "sunray-4-nights",
        durationName: "4 Nights Luxor to Aswan",
        departureDay: "Every Thursday",
        pricing: [
          { seasonName: "Summer Price (May & Sep)", tripleSharing: 1170, doubleSharing: 1190, singleCabin: 2020 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 2315, doubleSharing: 2295, singleCabin: 3760 },
          { seasonName: "Peak Winter Price", tripleSharing: 2625, doubleSharing: 2645, singleCabin: 4310 }
        ],
        days: [
          { dayNumber: 1, title: "Luxor Arrival", activities: ["Pick up from Luxor.", "Embarkation.", "1pm Lunch.", "East Luxor: Luxor and Karnak Temples.", "Dinner & Overnight."] },
          { dayNumber: 2, title: "West Bank", activities: ["Breakfast.", "West Luxor: Valley of the Kings, Hatshepsut Temple, Memnon Colossi.", "Lunch.", "Sail to Esna & Edfu.", "Dinner & Overnight in Edfu."] },
          { dayNumber: 3, title: "Edfu & Kom Ombo", activities: ["Breakfast.", "Visit Edfu Temple by horse carriage.", "Sail to Kom Ombo.", "Lunch.", "Visit Kom Ombo.", "Sail to Aswan.", "Dinner & Overnight in Aswan."] },
          { dayNumber: 4, title: "Aswan Highlights", activities: ["Breakfast.", "Visit High Dam and Philae Temple.", "Lunch.", "Dinner & Overnight in Aswan."] },
          { dayNumber: 5, title: "Departure", activities: ["Disembarkation.", "Departure transfer."] }
        ]
      }
    ]
  },
  // 4. Steigenberger Omar El Khayam
  {
    id: "steigenberger-omar",
    name: "Steigenberger Omar El Khayam",
    type: "Lake Nasser Cruise",
    gallery: [
      "/cruises/omar/image1.webp",
      "/cruises/omar/image2.webp",
      "/cruises/omar/image3.webp",
      "/cruises/omar/image4.webp",
      "/cruises/omar/image5.webp",
      "/cruises/omar/image6.webp",
      "/cruises/omar/image7.webp",
      "/cruises/omar/image8.webp",
      "/cruises/omar/image9.webp",
      "/cruises/omar/image10.webp",
      "/cruises/omar/image11.webp",
      "/cruises/omar/image12.webp",
      "/cruises/omar/image13.webp",
      "/cruises/omar/image14.webp",
      "/cruises/omar/image15.webp",
      "/cruises/omar/image16.webp",
      "/cruises/omar/image17.webp",
      "/cruises/omar/image18.webp",
      "/cruises/omar/image19.webp"
    ],
    inclusions: [
      "Meet and assist service.",
      "Personal assistance during your stay.",
      "All transfers by modern air-conditioned vehicle.",
      "Accommodation on a 5-star cruise on FB basis.",
      "All sightseeing excursions.",
      "Entrance fees to all sites between Aswan and Abu Simbel.",
      "Egyptologist guide."
    ],
    exclusions: [
      "Personal expenses and extras.",
      "Gratuities."
    ],
    childrenPolicy: [
      "Less than 5 years old: free of charge.",
      "From 5 till 11.99 years: Half adult (max one child).",
      "12 years & over: full fare."
    ],
    itineraries: [
      {
        id: "omar-3-nights",
        durationName: "3 Nights Aswan to Abu Simbel",
        departureDay: "Every Friday",
        pricing: [
          { seasonName: "Normal price (21/09/2026 to 29/01/2027)", tripleSharing: 1055, doubleSharing: 1070, singleCabin: 1870 },
          { seasonName: "High price (01/02/2027 to 30/04/2027)", tripleSharing: 1160, doubleSharing: 1175, singleCabin: 1950 },
          { seasonName: "Peak Price", tripleSharing: 1325, doubleSharing: 1340, singleCabin: 2200 }
        ],
        days: [
          { dayNumber: 1, title: "Friday - Abu Simbel", activities: ["08:00 Pickup from Aswan (3 hours private transfer).", "13:00 Check-in & embarkation.", "14:00 Visit Abu Simbel Temple.", "21:00 Dinner on board.", "Overnight in Abu Simbel."] },
          { dayNumber: 2, title: "Saturday - Kasr Ibrim & Amada", activities: ["07:30 Sail to Kasr Ibrim.", "11:30 Kasr Ibrim Overview.", "16:30 Visit Amada.", "18:30 Sail to Wadi El Seboua.", "21:30 Nubian Show.", "Overnight at Wadi El Seboua."] },
          { dayNumber: 3, title: "Sunday - Wadi El Seboua", activities: ["07:00 Visit Wadi El Seboua Temples.", "09:00 Sail to Aswan.", "Overnight in Aswan."] },
          { dayNumber: 4, title: "Monday - Departure", activities: ["07:00 Visit Kalabsha Temples.", "09:00 Check-out.", "Private transfer to Aswan."] }
        ]
      },
      {
        id: "omar-4-nights",
        durationName: "4 Nights Aswan to Abu Simbel",
        departureDay: "Every Monday",
        pricing: [
          { seasonName: "Normal price (21/09/2026 to 29/01/2027)", tripleSharing: 1320, doubleSharing: 1340, singleCabin: 2350 },
          { seasonName: "High price (01/02/2027 to 30/04/2027)", tripleSharing: 1470, doubleSharing: 1490, singleCabin: 2460 },
          { seasonName: "Peak Price", tripleSharing: 1700, doubleSharing: 1720, singleCabin: 5795 }
        ],
        days: [
          { dayNumber: 1, title: "Monday - Aswan", activities: ["Morning pickup in Aswan.", "Embarkation.", "13:00 Lunch.", "20:00 Dinner.", "Overnight in Aswan."] },
          { dayNumber: 2, title: "Tuesday - Kalabsha & Wadi El Seboua", activities: ["08:00 Visit Kalabsha Temples.", "10:30 Sail to Wadi El Seboua.", "20:00 Dinner.", "Overnight at Wadi El Seboua."] },
          { dayNumber: 3, title: "Wednesday - Amada", activities: ["08:00 Visit Wadi El Seboua Temples.", "10:30 Sail to Amada.", "16:00 Visit Amada.", "21:30 Nubian Show.", "Overnight at Amada."] },
          { dayNumber: 4, title: "Thursday - Kasr Ibrim & Abu Simbel", activities: ["06:30 Sail to Kasr Ibrim.", "12:30 Visit Abu Simbel Temple.", "20:00 Sound & Light Show (Optional).", "Overnight at Abu Simbel."] },
          { dayNumber: 5, title: "Friday - Departure", activities: ["09:00 Check-out.", "Private transfer from Abu Simbel to Aswan (approx 3 hours)."] }
        ]
      }
    ]
  },
  // 5. MS Renaissance
  {
    id: "ms-renaissance",
    name: "MS Renaissance",
    type: "Nile Cruise",
    gallery: [
      "/cruises/renaissance/2.webp",
      "/cruises/renaissance/4.webp",
      "/cruises/renaissance/7.webp",
      "/cruises/renaissance/10.webp",
      "/cruises/renaissance/13.webp",
      "/cruises/renaissance/14.webp",
      "/cruises/renaissance/16.webp",
      "/cruises/renaissance/23.webp",
      "/cruises/renaissance/25.webp",
      "/cruises/renaissance/28.webp",
      "/cruises/renaissance/31.webp",
      "/cruises/renaissance/33.webp",
      "/cruises/renaissance/36.webp",
      "/cruises/renaissance/39.webp",
      "/cruises/renaissance/42.webp",
      "/cruises/renaissance/44.webp",
      "/cruises/renaissance/47.webp",
      "/cruises/renaissance/52.webp",
      "/cruises/renaissance/56.webp",
      "/cruises/renaissance/58.webp"
    ],
    inclusions: [
      "Pickup and drop-off services.",
      "Accommodation on FB basis.",
      "Meet and assist service.",
      "Transfers by modern deluxe vehicle.",
      "All Nile Cruise private excursions.",
      "Entrance fees to all sights."
    ],
    exclusions: [
      "Any extra meals and beverages.",
      "Personal expenses.",
      "Tipping.",
      "Optional tours."
    ],
    childrenPolicy: [
      "Less than 6 years old: free of charge.",
      "From 6 till 11.99 years: Half adult (max one child).",
      "12 years & over: full fare."
    ],
    itineraries: [
      {
        id: "renaissance-3-nights",
        durationName: "3 Nights Aswan to Luxor",
        departureDay: "Every Wednesday",
        pricing: [
          { seasonName: "Summer Price (July to Sep)", tripleSharing: 580, doubleSharing: 595, singleCabin: 895 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 760, doubleSharing: 775, singleCabin: 1115 },
          { seasonName: "Peak Winter Price", tripleSharing: 1035, doubleSharing: 1050, singleCabin: 1680 }
        ],
        days: [
          { dayNumber: 1, title: "Aswan Arrival", activities: ["Pick-up from Aswan.", "Embarkation.", "Visit Philae Temple & High Dam.", "Dinner & overnight in Aswan."] },
          { dayNumber: 2, title: "Sailing to Kom Ombo", activities: ["Breakfast.", "2:00 PM Sail to Kom Ombo & visit the temple.", "Sail to Edfu.", "Dinner & overnight in Edfu."] },
          { dayNumber: 3, title: "Edfu & Luxor", activities: ["Visit Edfu Temple.", "Breakfast.", "Sail to Esna, cross the lock, then sail to Luxor.", "Dinner & overnight in Luxor."] },
          { dayNumber: 4, title: "Luxor Departure", activities: ["Breakfast & Disembarkation.", "Visit Valley of the Kings, Hatshepsut Temple.", "Visit Karnak & Luxor Temples.", "Departure transfer."] }
        ]
      },
      {
        id: "renaissance-4-nights",
        durationName: "4 Nights Luxor to Aswan",
        departureDay: "Every Saturday",
        pricing: [
          { seasonName: "Summer Price (July to Sep)", tripleSharing: 675, doubleSharing: 695, singleCabin: 1025 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 930, doubleSharing: 950, singleCabin: 1380 },
          { seasonName: "Peak Winter Price", tripleSharing: 1305, doubleSharing: 1325, singleCabin: 2095 }
        ],
        days: [
          { dayNumber: 1, title: "Luxor Arrival", activities: ["Pick-up from Luxor.", "Embarkation.", "Visit Luxor and Karnak Temples.", "Dinner & overnight in Luxor."] },
          { dayNumber: 2, title: "West Bank", activities: ["Breakfast.", "Visit Valley of the Kings, Hatshepsut Temple.", "Sail to Esna & Edfu.", "Dinner & overnight in Edfu."] },
          { dayNumber: 3, title: "Edfu & Kom Ombo", activities: ["Breakfast.", "Visit Edfu Temple.", "Sail to Kom Ombo & visit temple.", "Sail to Aswan.", "Overnight in Aswan."] },
          { dayNumber: 4, title: "Aswan Highlights", activities: ["Breakfast.", "Visit High Dam & Philae Temple.", "Lunch.", "Dinner & overnight in Aswan."] },
          { dayNumber: 5, title: "Departure", activities: ["Disembarkation.", "Departure transfer."] }
        ]
      }
    ]
  },
  // 6. MS Sonesta St. George
  {
    id: "ms-sonesta",
    name: "MS Sonesta St. George",
    type: "Nile Cruise",
    gallery: [
      "/cruises/sonesta/image1.webp",
      "/cruises/sonesta/image2.webp",
      "/cruises/sonesta/image3.webp",
      "/cruises/sonesta/image4.webp",
      "/cruises/sonesta/image5.webp",
      "/cruises/sonesta/image6.webp",
      "/cruises/sonesta/image7.webp",
      "/cruises/sonesta/image8.webp",
      "/cruises/sonesta/image9.webp"
    ],
    inclusions: [
      "Pickup and drop-off services.",
      "Accommodation on FB basis.",
      "Meet and assist service.",
      "Transfers by modern deluxe vehicle.",
      "All Nile Cruise private excursions.",
      "Entrance fees to all sights."
    ],
    exclusions: [
      "Any extra meals and beverages.",
      "Personal expenses.",
      "Tipping.",
      "Optional tours."
    ],
    childrenPolicy: [
      "Less than 6 years old: free of charge.",
      "From 6 till 11.99 years: Half adult (max one child).",
      "12 years & over: full fare."
    ],
    itineraries: [
      {
        id: "sonesta-3-nights",
        durationName: "3 Nights Aswan to Luxor",
        departureDay: "Every Friday",
        pricing: [
          { seasonName: "Summer Price (May & Sep)", tripleSharing: 990, doubleSharing: 1020, singleCabin: 1720 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 1725, doubleSharing: 1845, singleCabin: 2860 },
          { seasonName: "Peak Winter Price", tripleSharing: 2330, doubleSharing: 2255, singleCabin: 3980 }
        ],
        days: [
          { dayNumber: 1, title: "Aswan", activities: ["Pick up from Aswan.", "Embarkation.", "Visit Philae temple and high dam.", "Dinner on board.", "Overnight in Aswan."] },
          { dayNumber: 2, title: "Kom Ombo & Edfu", activities: ["Sail to Kom Ombo.", "Visit Kom Ombo Temple.", "Sail to Edfu.", "Visit Edfu Temple.", "Sail to Luxor.", "Overnight Esna or Luxor."] },
          { dayNumber: 3, title: "Luxor", activities: ["Breakfast.", "Visit West Bank (Valley of Kings, Hatshepsut).", "Visit East Bank (Karnak and Luxor Temples).", "Overnight in Luxor."] },
          { dayNumber: 4, title: "Departure", activities: ["Breakfast.", "Disembarkation at 08:00 am.", "Departure transfer."] }
        ]
      },
      {
        id: "sonesta-4-nights",
        durationName: "4 Nights Luxor to Aswan",
        departureDay: "Every Monday",
        pricing: [
          { seasonName: "Summer Price (May & Sep)", tripleSharing: 1210, doubleSharing: 1270, singleCabin: 2120 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 2315, doubleSharing: 2440, singleCabin: 3760 },
          { seasonName: "Peak Winter Price", tripleSharing: 3190, doubleSharing: 3450, singleCabin: 5250 }
        ],
        days: [
          { dayNumber: 1, title: "Luxor", activities: ["Pick up from Luxor.", "Embarkation.", "Visit Luxor and Karnak Temples.", "Overnight in Luxor."] },
          { dayNumber: 2, title: "West Bank", activities: ["Breakfast.", "Visit West Luxor (Valley of Kings).", "Sail to Esna & Edfu.", "Overnight in Edfu."] },
          { dayNumber: 3, title: "Edfu & Kom Ombo", activities: ["Breakfast.", "Visit Edfu Temple.", "Sail to Kom Ombo and visit.", "Sail to Aswan.", "Overnight in Aswan."] },
          { dayNumber: 4, title: "Aswan", activities: ["Breakfast.", "Visit High Dam and Philae Temple.", "Overnight in Aswan."] },
          { dayNumber: 5, title: "Departure", activities: ["Disembarkation.", "Departure transfer."] }
        ]
      }
    ]
  },
  // 7. MS Sunrise El Mahrousa
  {
    id: "ms-sunrise",
    name: "MS Sunrise El Mahrousa",
    type: "Nile Cruise",
    gallery: [
      "/cruises/sunrise/image1.webp",
      "/cruises/sunrise/image2.webp",
      "/cruises/sunrise/image3.webp",
      "/cruises/sunrise/image4.webp"
    ],
    inclusions: [
      "Pickup and drop-off services.",
      "Accommodation on FB basis.",
      "Meet and assist service.",
      "Transfers by modern deluxe vehicle.",
      "All Nile Cruise private excursions.",
      "Entrance fees to all sights."
    ],
    exclusions: [
      "Any extra meals and beverages.",
      "Personal expenses.",
      "Tipping.",
      "Optional tours."
    ],
    childrenPolicy: [
      "Less than 6 years old: free of charge.",
      "From 6 till 11.99 years: Half adult (max one child).",
      "12 years & over: full fare."
    ],
    itineraries: [
      {
        id: "sunrise-3-nights",
        durationName: "3 Nights Aswan to Luxor",
        departureDay: "Every Friday",
        pricing: [
          { seasonName: "Summer Price (July to Sep)", tripleSharing: 500, doubleSharing: 520, singleCabin: 790 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 660, doubleSharing: 675, singleCabin: 935 },
          { seasonName: "Peak Winter Price", tripleSharing: 930, doubleSharing: 945, singleCabin: 1680 }
        ],
        days: [
          { dayNumber: 1, title: "Aswan Arrival", activities: ["Pick-up from Aswan.", "Embarkation.", "Visit Philae Temple & High Dam.", "Dinner & overnight in Aswan."] },
          { dayNumber: 2, title: "Sailing to Kom Ombo", activities: ["Breakfast.", "2:00 PM Sail to Kom Ombo & visit the temple.", "Sail to Edfu.", "Dinner & overnight in Edfu."] },
          { dayNumber: 3, title: "Edfu & Luxor", activities: ["Visit Edfu Temple.", "Breakfast.", "Sail to Esna, cross the lock, then sail to Luxor.", "Dinner & overnight in Luxor."] },
          { dayNumber: 4, title: "Luxor Departure", activities: ["Breakfast & Disembarkation.", "Visit Valley of the Kings, Hatshepsut Temple.", "Visit Karnak & Luxor Temples.", "Departure transfer."] }
        ]
      },
      {
        id: "sunrise-4-nights",
        durationName: "4 Nights Luxor to Aswan",
        departureDay: "Every Monday",
        pricing: [
          { seasonName: "Summer Price (July to Sep)", tripleSharing: 595, doubleSharing: 615, singleCabin: 875 },
          { seasonName: "Winter Price (Oct to Apr)", tripleSharing: 810, doubleSharing: 830, singleCabin: 1140 },
          { seasonName: "Peak Winter Price", tripleSharing: 1200, doubleSharing: 1220, singleCabin: 1855 }
        ],
        days: [
          { dayNumber: 1, title: "Luxor Arrival", activities: ["Pick-up from Luxor.", "Embarkation.", "Visit Luxor and Karnak Temples.", "Dinner & overnight in Luxor."] },
          { dayNumber: 2, title: "West Bank", activities: ["Breakfast.", "Visit Valley of the Kings, Hatshepsut Temple.", "Sail to Esna & Edfu.", "Dinner & overnight in Edfu."] },
          { dayNumber: 3, title: "Edfu & Kom Ombo", activities: ["Breakfast.", "Visit Edfu Temple.", "Sail to Kom Ombo & visit temple.", "Sail to Aswan.", "Overnight in Aswan."] },
          { dayNumber: 4, title: "Aswan Highlights", activities: ["Breakfast.", "Visit High Dam & Philae Temple.", "Lunch.", "Dinner & overnight in Aswan."] },
          { dayNumber: 5, title: "Departure", activities: ["Disembarkation.", "Departure transfer."] }
        ]
      }
    ]
  }
];
