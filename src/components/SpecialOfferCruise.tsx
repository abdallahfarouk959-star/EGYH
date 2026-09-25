import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ChevronLeft,
  Calendar,
  CheckCircle2,
  XCircle,
  MapPin,
  Clock,
  Info,
  X,
  ChevronRight
} from "lucide-react";

export const SpecialOfferCruise: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("itinerary");

  const images = [
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.51.56 AM.webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.51.57 AM.webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.51.58 AM.webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.02 AM.webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.04 AM.webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.05 AM.webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.08 AM (1).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.08 AM (2).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.08 AM (3).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.08 AM (4).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.08 AM.webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.09 AM (1).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.09 AM (2).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.09 AM (3).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.09 AM (4).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.09 AM (5).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.09 AM (6).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.09 AM.webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.10 AM (1).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.10 AM (2).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.10 AM.webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.56.51 AM (1).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.56.51 AM (2).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.56.51 AM (3).webp",
    "/cruises/New folder/WhatsApp Image 2026-09-24 at 1.56.51 AM (4).webp"
  ];

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      {/* Lightbox */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setIsGalleryOpen(false)}>
          <button 
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-brand-gold transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-gold transition-colors z-50"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/9]" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex]}
              alt={`Gallery ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-gold transition-colors z-50"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-brand-emerald transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-widest animate-pulse">
                  Special Offer
                </span>
                <span className="bg-[#0b8a3e] text-white text-xs font-bold px-3 py-1 rounded-lg">
                  10% OFF
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                3 Nights Cruise from Aswan to Luxor, Balloon & Abu Simbel
              </h1>
              <div className="flex items-center text-gray-500 text-sm gap-4">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> Aswan to Luxor</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 4 Days / 3 Nights</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 line-through mb-1">Original Price: $576</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                $518 <span className="text-sm font-normal text-gray-500">per person</span>
              </div>
              <p className="text-xs text-gray-400">Price varies by date</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div 
            className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] cursor-pointer group relative"
            onClick={() => openGallery(0)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
            <img src={images[0]} alt="Cruise" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            {images.slice(1, 4).map((img, idx) => {
              const actualIndex = idx + 1;
              const isLast = idx === 2;
              return (
                <div 
                  key={actualIndex} 
                  className="rounded-2xl overflow-hidden h-full cursor-pointer group relative"
                  onClick={() => openGallery(actualIndex)}
                >
                  <img src={img} alt="Cruise detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {isLast && images.length > 4 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold hover:bg-black/40 transition-colors z-20">
                      +{images.length - 4}
                    </div>
                  )}
                  {!isLast && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Pick up</h3>
                <p className="text-sm text-gray-600">Any Hotel or Airport in Aswan / Train station</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Drop off</h3>
                <p className="text-sm text-gray-600">Tour ends in Luxor - Hotel / Airport / Train Station</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">What makes this Tour unique</h2>
              <ul className="space-y-3">
                {[
                  "5 Stars standard Nile Cruise from Aswan to Luxor.",
                  "Includes Abu Simbel Tour and Hot Air Balloon in Luxor.",
                  "All transfers by AC minibus, Motor Boat and Horse carriage.",
                  "Professional Egyptology tour guide."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                  Included
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Lunch x3, Breakfast x3, Dinner x3</li>
                  <li>• 3 nights at 5 stars cruise</li>
                  <li>• Pick up from hotel and drop off by AC mini bus</li>
                  <li>• Egyptology tour guide</li>
                  <li>• Motor Boat & Horse carriage</li>
                  <li>• Qualified licensed drivers</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                  <XCircle className="w-5 h-5 text-red-500 mr-2" />
                  Excluded
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tipping</li>
                  <li>• Entrance tickets</li>
                  <li>• French / Italian / German / Spanish Guide (EUR 200 per booking)</li>
                </ul>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Itinerary</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Aswan Highlights", visits: "High Dam & Philae Temple", meals: "Lunch & Dinner (Open Buffet)", acc: "Overnight in Aswan" },
                  { day: 2, title: "Abu Simbel & Kom Ombo", visits: "Abu Simbel Temples & Kom Ombo Temple (Sailing to Edfu)", meals: "Breakfast, Lunch & Dinner (Open Buffet)", acc: "Overnight Onboard" },
                  { day: 3, title: "Edfu & Luxor East Bank", visits: "Edfu Temple (by Horse Carriage) & Luxor Temple", meals: "Breakfast, Lunch & Dinner", acc: "Overnight in Luxor" },
                  { day: 4, title: "Luxor West Bank, Karnak & Departure", visits: "Hot Air Balloon, Colossi of Memnon, Valley of the Kings, Hatshepsut Temple & Karnak Temple", meals: "Breakfast (Open Buffet)", acc: "Checkout & Departure" },
                ].map((d) => (
                  <div key={d.day} className="relative pl-8 border-l-2 border-brand-emerald/30 last:border-0 pb-6 last:pb-0">
                    <div className="absolute top-0 -left-[9px] w-4 h-4 bg-brand-emerald rounded-full border-4 border-white"></div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Day {d.day}: {d.title}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong className="text-gray-800">Visits:</strong> {d.visits}</p>
                      <p><strong className="text-gray-800">Meals Included:</strong> {d.meals}</p>
                      <p><strong className="text-gray-800">Accommodation:</strong> {d.acc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Important Information</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 shrink-0" />
                  <p>All entrance fees must be paid by credit card, not cash (except the entrance for High Dam which is in cash).</p>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 shrink-0" />
                  <p>This is a shared tour.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 shrink-0" />
                  <p><strong>Required from travelers:</strong> Lead Traveler's Name, WhatsApp Number, Arrival/Departure Flight Details, Arrival/Departure Train Details.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-brand-gold/20 sticky top-24">
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Pricing Guide (10% Off Applied)</h3>
              
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-bold text-brand-emerald mb-2 border-b pb-1">May - Sep (Low Season)</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex justify-between items-center"><span>1 Person</span> <div><span className="text-gray-400 line-through text-xs mr-2">$993</span><strong className="text-gray-900">$893.7</strong></div></li>
                    <li className="flex justify-between items-center"><span>2-15 Persons</span> <div><span className="text-gray-400 line-through text-xs mr-2">$576</span><strong className="text-gray-900">$518</strong></div></li>
                    <li className="flex justify-between items-center"><span>Child (6-11)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$287.5</span><strong className="text-gray-900">$258.75</strong></div></li>
                    <li className="flex justify-between items-center"><span>Infant (0-5)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$173</span><strong className="text-gray-900">$155.7</strong></div></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-brand-emerald mb-2 border-b pb-1">Oct - Dec & Jan - May (High Season)</h4>
                  <p className="text-xs text-gray-500 mb-2">Sun, Tue, Thu Departures</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex justify-between items-center"><span>1 Person</span> <div><span className="text-gray-400 line-through text-xs mr-2">$1,445</span><strong className="text-gray-900">$1,300.5</strong></div></li>
                    <li className="flex justify-between items-center"><span>2-15 Persons</span> <div><span className="text-gray-400 line-through text-xs mr-2">$903</span><strong className="text-gray-900">$812.7</strong></div></li>
                    <li className="flex justify-between items-center"><span>Child (6-11)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$451</span><strong className="text-gray-900">$406</strong></div></li>
                    <li className="flex justify-between items-center"><span>Infant (0-5)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$271</span><strong className="text-gray-900">$244</strong></div></li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2 mb-2">Sat, Mon, Wed, Fri Departures</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex justify-between items-center"><span>1 Person</span> <div><span className="text-gray-400 line-through text-xs mr-2">$1,306</span><strong className="text-gray-900">$1,175</strong></div></li>
                    <li className="flex justify-between items-center"><span>2-15 Persons</span> <div><span className="text-gray-400 line-through text-xs mr-2">$785</span><strong className="text-gray-900">$706.5</strong></div></li>
                    <li className="flex justify-between items-center"><span>Child (6-11)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$329.5</span><strong className="text-gray-900">$296.5</strong></div></li>
                    <li className="flex justify-between items-center"><span>Infant (0-5)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$235.5</span><strong className="text-gray-900">$212</strong></div></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brand-emerald mb-2 border-b pb-1">Peak Season (Dec 21 - Jan 3)</h4>
                  <p className="text-xs text-gray-500 mb-2">Sun, Tue, Thu Departures</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex justify-between items-center"><span>1 Person</span> <div><span className="text-gray-400 line-through text-xs mr-2">$2,160</span><strong className="text-gray-900">$1,944</strong></div></li>
                    <li className="flex justify-between items-center"><span>2-15 Persons</span> <div><span className="text-gray-400 line-through text-xs mr-2">$1,347</span><strong className="text-gray-900">$1,212</strong></div></li>
                    <li className="flex justify-between items-center"><span>Child (6-11)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$674</span><strong className="text-gray-900">$606.6</strong></div></li>
                    <li className="flex justify-between items-center"><span>Infant (0-5)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$404</span><strong className="text-gray-900">$363.6</strong></div></li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2 mb-2">Sat, Mon, Wed, Fri Departures</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex justify-between items-center"><span>1 Person</span> <div><span className="text-gray-400 line-through text-xs mr-2">$2,000</span><strong className="text-gray-900">$1,800</strong></div></li>
                    <li className="flex justify-between items-center"><span>2-15 Persons</span> <div><span className="text-gray-400 line-through text-xs mr-2">$1,208</span><strong className="text-gray-900">$1,087</strong></div></li>
                    <li className="flex justify-between items-center"><span>Child (6-11)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$604</span><strong className="text-gray-900">$543.6</strong></div></li>
                    <li className="flex justify-between items-center"><span>Infant (0-5)</span> <div><span className="text-gray-400 line-through text-xs mr-2">$362.5</span><strong className="text-gray-900">$326.25</strong></div></li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="mailto:reservation@egyptholidaysaswan.com?subject=Booking Inquiry for Special Offer: 3 Nights Aswan to Luxor Cruise"
                  className="block w-full text-center bg-brand-gold text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:bg-brand-emerald transition-all"
                >
                  Book Now via Email
                </a>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Please include lead traveler name, dates, and number of passengers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCruise;
