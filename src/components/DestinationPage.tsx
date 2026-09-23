import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DESTINATIONS } from '../data/toursData';
import { CheckCircle, X, Users, MessageSquare, ChevronLeft, Calendar, Info, AlertTriangle } from 'lucide-react';

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

import toursFr from '../data/toursData_fr.json';

export default function DestinationPage() {
  const { t, i18n } = useTranslation();
  const { category, tourId } = useParams<{ category: string; tourId?: string }>();
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const [showDropdown, setShowDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', countryCode: '+20', date: '',
    adults: 1, childrenUnder6: 0, children6To12: 0, message: '', agreed: false
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const minDate = getTodayDateString();

  const currentDestinations = i18n.language.startsWith('fr') ? toursFr.DESTINATIONS : DESTINATIONS;
  const currentCategoryData = category && currentDestinations[category.toLowerCase()] ? currentDestinations[category.toLowerCase()] : null;
  const filteredTours = currentCategoryData ? currentCategoryData.tours : [];

  const singleTourDetail = tourId && filteredTours.length > 0 
    ? filteredTours.find((t: any) => t.id === parseInt(tourId)) 
    : null;

  const getCategoryTitle = () => {
    switch (category?.toLowerCase()) {
      case 'aswan': return t('category.aswan_title', 'Aswan Tours & Day Trips');
      case 'luxor': return t('category.luxor_title', 'Luxor Excursions & Packages');
      case 'cairo': return t('category.cairo_title', 'Cairo & Pyramids Packages');
      case 'abu-simbel': return t('category.abu_simbel_title', 'Abu Simbel Sacred Excursions');
      case 'historical-wonders': return t('category.historical_title', 'Historical Wonders & Long Packages');
      default: return 'Egypt Special Tours';
    }
  };

  const getCategoryQuote = () => {
    switch (category?.toLowerCase()) {
      case 'aswan': return t('category.aswan_desc');
      case 'luxor': return t('category.luxor_desc');
      case 'cairo': return t('category.cairo_desc');
      case 'abu-simbel': return t('category.abu_simbel_desc');
      case 'historical-wonders': return t('category.historical_desc');
      default: return currentCategoryData?.quote || '';
    }
  };

  const openBookingModal = (e: React.MouseEvent, tour: any) => {
    e.stopPropagation(); 
    setSelectedTour(tour);
    setIsBookingOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
  };

  const updateCounter = (field: 'adults' | 'childrenUnder6' | 'children6To12', amount: number) => {
    setFormData(prev => {
      const newVal = Math.max(0, prev[field] + amount);
      if (field === 'adults') return { ...prev, adults: Math.max(1, newVal) };
      return { ...prev, [field]: newVal };
    });
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      setErrorMsg(t('tours_ui.agree_required', 'You must agree to the privacy policy to submit.'));
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tourTitle: selectedTour?.title || singleTourDetail?.title || 'Day Tour Package',
          category: 'Day Tour Package'
        })
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setSuccessMsg(t('tours_ui.booking_success', 'Your booking request was submitted successfully!'));
        setFormData({
          name: '', email: '', phone: '', countryCode: '+20', date: '',
          adults: 1, childrenUnder6: 0, children6To12: 0, message: '', agreed: false
        });
      } else {
        setErrorMsg(resData.message || t('tours_ui.booking_error', 'Something went wrong.'));
      }
    } catch (err) {
      setErrorMsg(t('tours_ui.booking_connect_error', 'Failed to connect to the server.'));
    } finally {
      setLoading(false);
    }
  };

  if (singleTourDetail) {
    return (
      <div className="bg-slate-50 min-h-screen pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to={`/destination/${category}`} className="inline-flex items-center gap-2 text-[#004d33] font-medium hover:text-[#d4af37] transition-colors mb-6">
            <ChevronLeft size={20} /> {t('common.back_to_home', 'Back')}
          </Link>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="h-96 w-full relative">
              <img src={singleTourDetail.images[0]} alt={singleTourDetail.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{singleTourDetail.title}</h1>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {t('tours_ui.overview', 'Overview & Highlights')}
                </h3>
                <p className="text-slate-700 leading-relaxed text-base italic">"{singleTourDetail.highlights}"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50">
                  <h4 className="text-sm font-bold text-[#004d33] uppercase tracking-wider mb-4">
                    {t('tours_ui.included', "What's Included")}
                  </h4>
                  <ul className="space-y-2.5">
                    {singleTourDetail.inclusions.map((inc: string, i: number) => (
                      <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                        <CheckCircle size={16} className="text-[#004d33] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-50/30 p-6 rounded-2xl border border-rose-100/50">
                  <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wider mb-4">
                    {t('tours_ui.excluded', "What's Excluded")}
                  </h4>
                  <ul className="space-y-2.5">
                    {singleTourDetail.exclusions.map((exc: string, i: number) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                  {t('tours_ui.itinerary', 'Itinerary Timeline')}
                </h4>
                <div className="relative border-l-2 border-slate-100 ml-4 pl-6 space-y-6">
                  {singleTourDetail.itinerary.map((step: any, i: number) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-white bg-[#004d33] shadow-sm"></div>
                      <span className="text-xs font-bold text-[#d4af37] tracking-wider block">
                        {step.day ? `${step.day} • ${step.time}` : step.time}
                      </span>
                      <h5 className="text-base font-bold text-slate-900 mb-1">{step.event}</h5>
                      {step.detail && <p className="text-sm text-slate-500">{step.detail}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {singleTourDetail.pricingPolicy && (
                <div className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
                    <div className="w-10 h-10 rounded-full bg-[#004d33]/10 flex items-center justify-center text-[#004d33]">
                      <Info size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {t('tours_ui.seasonal_supplements', 'Seasonal Supplements')}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <Calendar size={18} className="text-[#004d33]" />
                      <span className="font-medium">{singleTourDetail.pricingPolicy.baseRatePeriod}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {singleTourDetail.pricingPolicy.supplements.map((supp: any, idx: number) => (
                        <div 
                          key={idx} 
                          className={`p-4 rounded-xl border flex flex-col gap-2 ${
                            supp.isPeak 
                              ? 'bg-rose-50 border-rose-100' 
                              : 'bg-amber-50 border-amber-100'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-bold uppercase tracking-widest ${supp.isPeak ? 'text-rose-600' : 'text-amber-600'}`}>
                              {supp.isPeak ? t('tours_ui.peak_season', 'Peak Season') : t('tours_ui.high_season', 'High Season')}
                            </span>
                            <span className={`text-lg font-bold ${supp.isPeak ? 'text-rose-700' : 'text-amber-700'}`}>
                              +{supp.increase}
                            </span>
                          </div>
                          <p className={`text-sm font-medium flex items-center gap-2 ${supp.isPeak ? 'text-rose-800' : 'text-amber-800'}`}>
                            <AlertTriangle size={14} />
                            {supp.period}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {singleTourDetail.prices && singleTourDetail.prices.length > 0 && (
                <div className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">
                    {t('tours_ui.pricing_tiers', 'Pricing Options (Per Person)')}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {singleTourDetail.prices.map((priceItem: any, idx: number) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center hover:border-[#004d33] hover:shadow-md transition-all">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{priceItem.label}</span>
                        <span className="text-xl font-black text-[#004d33]">{priceItem.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">
                    {t('tours_ui.prices_starting', 'Starting From')}
                  </span>
                  <span className="text-2xl font-black text-[#004d33]">
                    {singleTourDetail.prices[0]?.price} 
                    <span className="text-xs font-medium text-slate-500"> {t('tours_ui.per_person', '/ per person')}</span>
                  </span>
                </div>
                <button type="button" onClick={(e) => openBookingModal(e, singleTourDetail)} className="w-full sm:w-auto bg-[#004d33] hover:bg-[#003322] text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-colors text-center tracking-wide">
                  {t('tours_ui.book_request_now', 'Book Request Now')}
                </button>
              </div>

            </div>
          </div>
        </div>

        {isBookingOpen && selectedTour && renderBookingModalForm()}
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-[#004d33] font-medium hover:text-[#d4af37] transition-colors">
            <ChevronLeft size={20} /> {t('common.back_to_home', 'Back to Home')}
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{getCategoryTitle()}</h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-sm leading-relaxed italic">
            "{getCategoryQuote()}"
          </p>
        </div>

        {filteredTours.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border">
            <p className="text-slate-500 text-lg">{t('tours_ui.no_packages', 'No packages available in this category currently.')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour: any) => (
              <Link 
                key={tour.id} 
                to={`/destination/${category}/${tour.id}`}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer"
              >
                <div className="relative h-56 bg-slate-200 overflow-hidden">
                  <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 min-h-[56px] group-hover:text-[#004d33] transition-colors">{tour.title}</h3>
                  <p className="text-slate-500 text-xs line-clamp-3 mb-4 flex-grow leading-relaxed">{tour.highlights}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {t('common.package_features', 'Package Features')}
                    </h4>
                    <ul className="space-y-1.5">
                      {tour.inclusions.slice(0, 3).map((inc: string, index: number) => (
                        <li key={index} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <CheckCircle size={12} className="text-[#004d33] shrink-0" />
                          <span className="truncate">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium uppercase">
                        {t('common.price_from', 'Price From')}
                      </span>
                      <span className="text-base font-extrabold text-[#004d33]">
                        {tour.prices[0]?.price || 'N/A'}
                      </span>
                    </div>
                    <button 
                      type="button" 
                      onClick={(e) => openBookingModal(e, tour)} 
                      className="bg-[#004d33] hover:bg-[#003322] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                    >
                      {t('common.book_now', 'Book Now')}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {isBookingOpen && selectedTour && renderBookingModalForm()}
    </div>
  );

  function renderBookingModalForm() {
    const filteredCountries = COUNTRY_CODES.filter(c => 
      c.code.includes(formData.countryCode) || 
      c.name.toLowerCase().includes(formData.countryCode.toLowerCase())
    );

    return (
      <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overscroll-contain">
        <div className="bg-white rounded-2xl md:rounded-3xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[95vh] md:max-h-[85vh] overflow-hidden">
          
          <div className="bg-[#004d33] text-white px-5 md:px-6 py-4 flex justify-between items-center shrink-0">
            <div className="pr-4">
              <span className="text-[10px] md:text-xs font-bold text-[#d4af37] uppercase tracking-wider block mb-0.5">{t('tours_ui.booking_request', 'Booking Request')}</span>
              <h3 className="text-sm md:text-lg font-bold line-clamp-1">{selectedTour?.title || singleTourDetail?.title}</h3>
            </div>
            <button type="button" onClick={() => setIsBookingOpen(false)} className="p-1.5 md:p-2 hover:bg-white/20 rounded-full transition-colors text-white shrink-0">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleBookingSubmit} className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-5 custom-scrollbar">
              
              {successMsg && <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-sm">{successMsg}</div>}
              {errorMsg && <div className="p-3 bg-rose-50 text-rose-800 rounded-xl border border-rose-200 text-sm">{errorMsg}</div>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{t('tours_ui.your_full_name', 'Your Full Name')}</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{t('contact.info_email', 'Email Address')}</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{t('contact.info_phone', 'Phone Number')}</label>
                  <div className="flex gap-2">
                    <div className="relative w-28 shrink-0">
                      <input 
                        type="text" 
                        name="countryCode" 
                        required 
                        value={formData.countryCode} 
                        onChange={(e) => {
                          handleInputChange(e);
                          setShowDropdown(true);
                        }}
                        onFocus={() => setShowDropdown(true)}
                        onBlur={() => setShowDropdown(false)}
                        className="w-full px-2 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm text-center" 
                        placeholder="+20" 
                      />
                      {showDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-56 max-h-48 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50">
                          {filteredCountries.length > 0 ? filteredCountries.map(country => (
                            <div 
                              key={country.name} 
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setFormData(prev => ({ ...prev, countryCode: country.code }));
                                setShowDropdown(false);
                              }}
                              className="px-3 py-2 text-sm hover:bg-slate-50 cursor-pointer flex items-center gap-2"
                            >
                              <span>{country.flag}</span>
                              <span className="font-medium text-[#004d33]">{country.code}</span>
                              <span className="text-slate-500 text-xs truncate">{country.name}</span>
                            </div>
                          )) : (
                            <div className="px-3 py-2 text-xs text-slate-400">No matches found</div>
                          )}
                        </div>
                      )}
                    </div>

                    <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm" placeholder="123 456 789" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{t('tours_ui.desired_travel_date', 'Desired Travel Date')}</label>
                  <input type="date" name="date" required min={minDate} value={formData.date} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm" />
                </div>
              </div>

              <div className="bg-slate-50 p-3 md:p-4 rounded-2xl border border-slate-200/60 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Users size={14}/> {t('tours_ui.number_of_travelers', 'Number of Travelers')}</h4>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 md:gap-3 text-center">
                  <div className="bg-white p-2 md:p-2.5 rounded-xl border flex flex-row xs:flex-col justify-between items-center">
                    <span className="text-[11px] md:text-xs font-semibold text-slate-600 block mb-0 xs:mb-1">{t('cruises_ui.adults', 'Adults')}</span>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateCounter('adults', -1)} className="w-6 h-6 md:w-7 md:h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm flex items-center justify-center">-</button>
                      <span className="font-bold text-sm w-4">{formData.adults}</span>
                      <button type="button" onClick={() => updateCounter('adults', 1)} className="w-6 h-6 md:w-7 md:h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm flex items-center justify-center">+</button>
                    </div>
                  </div>
                  <div className="bg-white p-2 md:p-2.5 rounded-xl border flex flex-row xs:flex-col justify-between items-center">
                    <span className="text-[11px] md:text-xs font-semibold text-slate-600 block mb-0 xs:mb-1">{t('tours_ui.kids_0_6', 'Kids (0-6)')}</span>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateCounter('childrenUnder6', -1)} className="w-6 h-6 md:w-7 md:h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm flex items-center justify-center">-</button>
                      <span className="font-bold text-sm w-4">{formData.childrenUnder6}</span>
                      <button type="button" onClick={() => updateCounter('childrenUnder6', 1)} className="w-6 h-6 md:w-7 md:h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm flex items-center justify-center">+</button>
                    </div>
                  </div>
                  <div className="bg-white p-2 md:p-2.5 rounded-xl border flex flex-row xs:flex-col justify-between items-center">
                    <span className="text-[11px] md:text-xs font-semibold text-slate-600 block mb-0 xs:mb-1">{t('tours_ui.kids_6_12', 'Kids (6-12)')}</span>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateCounter('children6To12', -1)} className="w-6 h-6 md:w-7 md:h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm flex items-center justify-center">-</button>
                      <span className="font-bold text-sm w-4">{formData.children6To12}</span>
                      <button type="button" onClick={() => updateCounter('children6To12', 1)} className="w-6 h-6 md:w-7 md:h-7 bg-slate-100 hover:bg-slate-200 rounded-full font-bold text-sm flex items-center justify-center">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><MessageSquare size={14}/> {t('tours_ui.special_requests', 'Special Requests / Notes')}</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#004d33] text-sm resize-none" placeholder="Any details or preferences..."></textarea>
              </div>

              <div className="flex items-start gap-2.5 pt-1 pb-2">
                <input type="checkbox" id="agreed" checked={formData.agreed} onChange={handleCheckboxChange} className="mt-1 accent-[#004d33] shrink-0" />
                <label htmlFor="agreed" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                  {t('tours_ui.agree_booking_terms', 'I agree to the terms of booking, privacy policy, and confirm that all data typed above is correct.')}
                </label>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 border-t border-slate-100 shrink-0">
              <button type="submit" disabled={loading} className="w-full bg-[#004d33] hover:bg-[#003322] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors shadow-md text-sm md:text-base tracking-wide flex justify-center items-center">
                {loading ? t('cruises_ui.sending_request', 'Sending Request...') : t('tours_ui.confirm_request', 'Confirm & Request Booking')}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}