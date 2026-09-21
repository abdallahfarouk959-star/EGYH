import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ChevronLeft,
  Star,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  XCircle,
  Info,
} from "lucide-react";

import { cruises } from "../data/cruisesData";

const COUNTRY_CODES = [
  { code: "+20", name: "Egypt", flag: "🇪🇬" },
  { code: "+1", name: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", name: "UK", flag: "🇬🇧" },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+965", name: "Kuwait", flag: "🇰🇼" },
  { code: "+974", name: "Qatar", flag: "🇶🇦" },
  { code: "+973", name: "Bahrain", flag: "🇧🇭" },
  { code: "+968", name: "Oman", flag: "🇴🇲" },
  { code: "+962", name: "Jordan", flag: "🇯🇴" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+41", name: "Switzerland", flag: "🇨🇭" },
  { code: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+7", name: "Russia", flag: "🇷🇺" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+27", name: "South Africa", flag: "🇿🇦" }
];

export const NileCruiseDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { cruiseId } = useParams<{ cruiseId: string }>();

  const cruise = cruises.find((c) => c.id === cruiseId);
  const [selectedItineraryIdx, setSelectedItineraryIdx] = useState(0);
  const [mainImage, setMainImage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+20",
    phone: "",
    date: "",
    cabins: "1",
    adults: 0,
    childrenUnder6: 0,
    children6To12: 0,
    message: "",
    agreed: false,
  });

  const [dateError, setDateError] = useState("");

  const getValidDays = (departureDayStr: string) => {
    if (!departureDayStr) return [];
    const str = departureDayStr.toLowerCase();
    if (str.includes('everyday')) return [0, 1, 2, 3, 4, 5, 6];
    
    const validDays = [];
    if (str.includes('sunday')) validDays.push(0);
    if (str.includes('monday')) validDays.push(1);
    if (str.includes('tuesday')) validDays.push(2);
    if (str.includes('wednesday')) validDays.push(3);
    if (str.includes('thursday') || str.includes('thursady')) validDays.push(4);
    if (str.includes('friday') || str.includes('fiday')) validDays.push(5);
    if (str.includes('saturday')) validDays.push(6);
    
    return validDays;
  };

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const minDate = getTodayDateString();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (cruise && cruise.gallery.length > 0) {
      setMainImage(cruise.gallery[0]);
    }
  }, [cruise]);

  useEffect(() => {
    setFormData(prev => ({ ...prev, date: "" }));
    setDateError("");
  }, [selectedItineraryIdx]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (!selectedDate) {
      setFormData({ ...formData, date: "" });
      setDateError("");
      return;
    }
    
    const itinerary = cruise?.itineraries[selectedItineraryIdx];
    if (!itinerary) return;

    const validDays = getValidDays(itinerary.departureDay);
    const dateObj = new Date(selectedDate);
    const dayOfWeek = dateObj.getDay();
    
    if (validDays.length > 0 && validDays.length < 7 && !validDays.includes(dayOfWeek)) {
      setDateError(`Departures are only available on ${itinerary.departureDay}`);
      setFormData({ ...formData, date: "" });
    } else {
      setDateError("");
      setFormData({ ...formData, date: selectedDate });
    }
  };

  const updateCounter = (
    field: "adults" | "childrenUnder6" | "children6To12",
    delta: number,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Math.max(0, prev[field] + delta),
    }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.phone.trim() !== "" &&
    formData.date !== "" &&
    formData.agreed;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid || !cruise) return;

    setSubmitStatus("submitting");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tourTitle: `${cruise.name} - ${cruise.itineraries[selectedItineraryIdx].durationName}`,
          category: "Nile Cruise",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "", email: "", countryCode: "+20", phone: "", date: "",
          cabins: "1", adults: 0, childrenUnder6: 0, children6To12: 0,
          message: "", agreed: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  if (!cruise) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-serif">Cruise not found</h2>
        <Link to="/nile-cruise" className="text-emerald-600 mt-4 inline-block font-bold">
          View All Cruises
        </Link>
      </div>
    );
  }

  const selectedItinerary = cruise.itineraries[selectedItineraryIdx];

  const filteredCountries = COUNTRY_CODES.filter(c => 
    c.code.includes(formData.countryCode) || 
    c.name.toLowerCase().includes(formData.countryCode.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-[#004d33] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={cruise.gallery[0]} alt="background" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link to="/nile-cruise" className="inline-flex items-center gap-2 text-[#d4af37] mb-8 hover:text-white transition-colors font-bold">
            <ChevronLeft size={20} /> {t('nav.all_nile_cruises', 'All Luxury Cruises')}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="fill-[#d4af37] text-[#d4af37]" />
              ))}
              <span className="text-xs uppercase tracking-widest font-bold ml-2">
                {cruise.type}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              {cruise.name}
            </h1>
            <p className="text-xl md:text-2xl italic text-white/90 border-l-4 border-[#d4af37] pl-6 leading-relaxed">
              Experience the ultimate journey on board {cruise.name}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          <div className="lg:col-span-7 xl:col-span-8">
            
            <div className="mb-16">
              <div className="mb-4">
                <img src={mainImage} alt={cruise.name} className="rounded-3xl w-full h-[300px] md:h-[500px] object-cover shadow-lg transition-all duration-300" />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
                {cruise.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${mainImage === img ? "border-[#d4af37] shadow-md scale-105" : "border-transparent hover:opacity-75"}`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-20 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-serif font-bold text-[#004d33] mb-6">
                {t('cruises_ui.select_itinerary', 'Select Your Itinerary')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cruise.itineraries.map((itin, idx) => {
                  const isSelected = selectedItineraryIdx === idx;
                  const startingPrice = itin.pricing[0]?.doubleSharing || 0;
                  const cardImg = cruise.gallery[idx + 1] || cruise.gallery[0];

                  return (
                    <div
                      key={itin.id}
                      onClick={() => setSelectedItineraryIdx(idx)}
                      className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 flex flex-col ${
                        isSelected ? "border-[#004d33] shadow-lg" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="h-48 sm:h-56 overflow-hidden relative">
                        <img src={cardImg} alt={itin.durationName} className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? "scale-105" : "hover:scale-105"}`} />
                        {isSelected && (
                           <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#004d33] p-1.5 rounded-full shadow-lg">
                               <CheckCircle2 size={20} className="fill-[#004d33] text-white" />
                           </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-grow bg-white">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{itin.durationName}</h4>
                        <p className="text-gray-800 font-medium mb-6">{itin.departureDay}</p>
                        <div className="mt-auto flex items-end justify-between">
                          <div>
                            <span className="block text-sm text-gray-500 mb-1">{t('common.start_from', 'Start from')}</span>
                            <div className="text-xl font-bold text-gray-900">
                              ${startingPrice} <span className="text-sm font-normal text-gray-500">{t('common.per_person', '/ USD per person')}</span>
                            </div>
                          </div>
                          <button type="button" className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${isSelected ? "bg-[#004d33] text-white border border-[#004d33]" : "bg-white text-[#004d33] border border-[#004d33] hover:bg-[#004d33]/5"}`}>
                            {isSelected ? t('cruises_ui.selected', 'Selected') : t('cruises_ui.select', 'Select')}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-16 bg-gray-900 text-white rounded-3xl md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center gap-3">
                <Star className="text-[#d4af37]" /> {t('cruises_ui.pricing_seasons', 'Pricing Seasons')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedItinerary.pricing.map((p, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl group hover:bg-white/10 transition-colors">
                    <span className="block text-xs text-[#d4af37] uppercase font-bold tracking-widest mb-1">{p.seasonName}</span>
                    <span className="block text-[10px] text-gray-400 mb-4 italic">* Price is per person</span>
                    <div className="space-y-3 text-sm text-gray-300">
                      {p.doubleSharing && (
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span>Double Cabin:</span><span className="text-white font-bold text-xl">${p.doubleSharing}</span>
                        </div>
                      )}
                      {p.singleCabin && (
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span>Single Cabin:</span><span className="text-white font-bold text-xl">${p.singleCabin}</span>
                        </div>
                      )}
                      {p.tripleSharing && (
                        <div className="flex justify-between items-center pb-2">
                          <span>Triple Cabin:</span><span className="text-white font-bold text-xl">${p.tripleSharing}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {cruise.note && (
                <div className="mt-8 flex items-start gap-3 text-sm text-[#d4af37] bg-[#d4af37]/10 p-4 rounded-xl border border-[#d4af37]/20 font-bold">
                  <Info size={20} className="shrink-0 mt-0.5" /><span>{cruise.note}</span>
                </div>
              )}
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-[#004d33] mb-8 flex items-center gap-3">
                <Calendar className="text-[#d4af37]" /> {t('cruises_ui.itinerary_schedule', 'Itinerary Schedule')}
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-[#004d33]/10">
                {selectedItinerary.days.map((day, idx) => (
                  <div key={idx} className="relative pl-14 group">
                    <div className="absolute left-3 top-0 w-4 h-4 rounded-full border-2 border-[#d4af37] bg-white group-hover:bg-[#004d33] transition-colors" />
                    <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest block mb-1">Day {day.dayNumber}</span>
                    <h4 className="text-xl font-bold text-[#004d33] mb-3">{day.title}</h4>
                    <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
                      {day.activities.map((act, i) => (
                        <li key={i} className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" /><span>{act}</span></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl">
                <h4 className="text-[#004d33] font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-500" /> {t('tours_ui.included', "What's Included")}</h4>
                <ul className="space-y-3">
                  {cruise.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="mt-0.5 text-emerald-500 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 p-8 rounded-3xl">
                <h4 className="text-red-700 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><XCircle size={18} className="text-red-500" /> {t('tours_ui.excluded', "What's Excluded")}</h4>
                <ul className="space-y-3">
                  {cruise.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700"><XCircle size={16} className="mt-0.5 text-red-500 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl mb-16">
              <h4 className="text-[#004d33] font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2"><Info size={18} className="text-[#d4af37]" /> {t('cruises_ui.children_policy', 'Children Policy')}</h4>
              <ul className="space-y-3">
                {cruise.childrenPolicy.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700"><div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 h-fit sticky top-28 mb-16">
            <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#004d33] mb-2">{t('cruises_ui.book_your_cruise', 'Book Your Cruise')}</h3>
                <p className="text-gray-600 text-sm">{t('cruises_ui.direct_booking', "Direct booking with Egypt's #1 operator.")}</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-600 mb-2 ml-1">Full Name</label>
                  <input type="text" required placeholder="Enter your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#004d33]/20 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-600 mb-2 ml-1">Email Address</label>
                  <input type="email" required placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#004d33]/20 transition-all outline-none" />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-600 mb-2 ml-1">Phone Number</label>
                  <div className="flex gap-2">
                    <div className="relative w-[110px] shrink-0">
                      <input 
                        type="text" 
                        required 
                        value={formData.countryCode} 
                        onChange={(e) => {
                          setFormData({ ...formData, countryCode: e.target.value });
                          setShowDropdown(true);
                        }}
                        onFocus={() => setShowDropdown(true)}
                        onBlur={() => setShowDropdown(false)}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-3 py-4 text-sm focus:ring-2 focus:ring-[#004d33]/20 transition-all outline-none text-center cursor-text" 
                        placeholder="+20" 
                      />
                      {showDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-56 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-2xl z-50">
                          {filteredCountries.length > 0 ? filteredCountries.map(country => (
                            <div 
                              key={country.name} 
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setFormData(prev => ({ ...prev, countryCode: country.code }));
                                setShowDropdown(false);
                              }}
                              className="px-4 py-2.5 text-sm hover:bg-emerald-50 cursor-pointer flex items-center gap-2 border-b border-gray-50 last:border-0"
                            >
                              <span>{country.flag}</span>
                              <span className="font-bold text-[#004d33]">{country.code}</span>
                              <span className="text-gray-500 text-xs truncate">{country.name}</span>
                            </div>
                          )) : (
                            <div className="px-4 py-3 text-xs text-gray-400">No matches found</div>
                          )}
                        </div>
                      )}
                    </div>

                    <input type="tel" required placeholder="Phone number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="flex-grow bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#004d33]/20 transition-all outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-600 mb-2 ml-1">Select Date</label>
                    <input type="date" required min={minDate} value={formData.date} onChange={handleDateChange} className={`w-full bg-gray-50 border ${dateError ? 'border-red-400 focus:ring-red-200' : 'border-gray-100 focus:ring-[#004d33]/20'} rounded-2xl px-4 py-4 text-sm focus:ring-2 transition-all outline-none`} />
                    {dateError && <p className="text-red-500 text-xs mt-2 ml-1 font-medium">{dateError}</p>}
                    {cruise?.itineraries[selectedItineraryIdx]?.departureDay && !dateError && (
                      <p className="text-gray-400 text-[10px] mt-2 ml-1 italic">
                        Departs: {cruise.itineraries[selectedItineraryIdx].departureDay}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 ml-1">Cabins</label>
                    <select value={formData.cabins} onChange={(e) => setFormData({ ...formData, cabins: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 text-sm focus:ring-2 focus:ring-[#004d33]/20 transition-all appearance-none cursor-pointer outline-none">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>{n} Cabin{n > 1 ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <div>
                      <span className="block text-[11px] font-bold text-[#004d33]">Adults</span>
                      <span className="text-[9px] text-gray-400 uppercase tracking-tighter">(+12 years)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateCounter("adults", -1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#004d33] shadow-sm hover:bg-[#d4af37] hover:text-white transition-all">-</button>
                      <span className="w-4 text-center font-bold text-sm">{formData.adults}</span>
                      <button type="button" onClick={() => updateCounter("adults", 1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#004d33] shadow-sm hover:bg-[#d4af37] hover:text-white transition-all">+</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <div>
                      <span className="block text-[11px] font-bold text-[#004d33]">Children</span>
                      <span className="text-[9px] text-gray-400 uppercase tracking-tighter">(0 to 5.99 years)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateCounter("childrenUnder6", -1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#004d33] shadow-sm hover:bg-[#d4af37] hover:text-white transition-all">-</button>
                      <span className="w-4 text-center font-bold text-sm">{formData.childrenUnder6}</span>
                      <button type="button" onClick={() => updateCounter("childrenUnder6", 1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#004d33] shadow-sm hover:bg-[#d4af37] hover:text-white transition-all">+</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <div>
                      <span className="block text-[11px] font-bold text-[#004d33]">Children</span>
                      <span className="text-[9px] text-gray-400 uppercase tracking-tighter">(6 to 11.99 years)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateCounter("children6To12", -1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#004d33] shadow-sm hover:bg-[#d4af37] hover:text-white transition-all">-</button>
                      <span className="w-4 text-center font-bold text-sm">{formData.children6To12}</span>
                      <button type="button" onClick={() => updateCounter("children6To12", 1)} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#004d33] shadow-sm hover:bg-[#d4af37] hover:text-white transition-all">+</button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 ml-1">Message</label>
                  <textarea rows={3} placeholder="Type message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#004d33]/20 transition-all outline-none resize-none" />
                </div>

                <div className="flex items-start gap-3 px-1">
                  <input type="checkbox" id="agree" required checked={formData.agreed} onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })} className="mt-1 accent-[#004d33] shrink-0" />
                  <label htmlFor="agree" className="text-[10px] text-gray-500 leading-tight cursor-pointer">
                    I agree to the <Link to="/policies#terms" className="text-[#004d33] font-bold hover:underline">Terms & Conditions</Link>, Payment, and Cancellation Policies.
                  </label>
                </div>

                <button type="submit" disabled={!isFormValid || submitStatus === "submitting"} className={`w-full py-4 md:py-5 font-bold rounded-2xl shadow-xl transition-all transform uppercase tracking-widest text-xs ${submitStatus === "submitting" ? "bg-gray-400 text-white cursor-wait" : isFormValid ? "bg-[#d4af37] text-white shadow-[#d4af37]/20 hover:bg-[#004d33] hover:scale-[1.02] active:scale-95" : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"}`}>
                  {submitStatus === "submitting" ? "Sending Request..." : t('common.book_now', 'Book Now')}
                </button>

                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-[11px] font-bold text-center border border-emerald-100">
                      Request sent! We will contact you shortly.
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bg-red-50 text-red-700 p-4 rounded-xl text-[11px] font-bold text-center border border-red-100">
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};