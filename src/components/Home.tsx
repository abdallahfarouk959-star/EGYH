import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Calendar } from "lucide-react";
// استيراد دالة الترجمة
import { useTranslation } from "react-i18next";
// استيراد داتا المراكب الجديدة
import { getCruises } from "../data/cruisesData";

export const Home: React.FC = () => {
  const location = useLocation();
  // تشغيل الهوك بتاع الترجمة
  const { t, i18n } = useTranslation();
  const cruises = getCruises(i18n.language);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  const topCruiseIds = [
    "ms-sonesta-st-george",
    "ms-historia",
    "ms-movenpick-sunray",
    "ms-omar-el-khayam",
    "ms-espelanad",
    "ms-renaissance"
  ];
  const topCruises = cruises.filter(c => topCruiseIds.includes(c.id));

  return (
    <main>
      {/* --- Hero Section --- */}
      <section className="relative h-screen w-full overflow-hidden pt-24 bg-black">
        <motion.div viewport={{ once: true }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-0 top-0 z-0"
        >
          {/* Overlay Dark */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1539768942893-daf53e448371?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWd5cHRpYW4lMjBDcnVpc2VzfGVufDB8fDB8fHww&fmt=webp&w=800&q=75"
            alt="Egyptian Cruises - Nile River Experience"
            fetchPriority="high"
            width="800"
            height="600"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <motion.div viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              {t("hero.title")}
            </h2>
            <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto font-medium  py-3 px-6 inline-block mb-10">
              {t("hero.subtitle")}
            </p>
            <div>
              <a
                href="mailto:reservation@egyptholidaysaswan.com?subject=Website%20Inquiry"
                className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-800 transition duration-300 shadow-xl inline-block cursor-pointer"
              >
                {t("hero.btn_book")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Special Offers Section --- */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
              Special Offers
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          <motion.div viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex-1 min-w-[300px] 2xl:min-w-[600px] bg-white group overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row relative"
          >
            <div className="lg:w-2/5 aspect-[4/3] lg:aspect-auto overflow-hidden relative">
              <img
                src="/cruises/New folder/WhatsApp Image 2026-09-24 at 1.52.04 AM.webp"
                alt="3 Nights Cruise from Aswan to Luxor Balloon and Abu Simbel"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4 group-hover:text-brand-emerald transition-colors">
                3 Nights Cruise from Aswan to Luxor, Balloon & Abu Simbel
              </h3>
              <div className="flex items-center text-[#0b8a3e] font-semibold mb-4 bg-emerald-50 w-max px-4 py-2 rounded-lg">
                 <Calendar className="w-5 h-5 mr-2" />
                 Available every day
              </div>
              <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                Experience the magic of the Nile with a 5-star standard cruise. This exclusive package features an Abu Simbel Tour, a breathtaking Hot Air Balloon ride in Luxor, and all transfers by AC minibus, motor boat, and horse carriage. Guided by a professional Egyptology tour guide.
              </p>
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-gray-500 line-through text-xl font-bold">from $576</span>
                    <span className="bg-[#0b8a3e] text-white text-sm font-bold px-3 py-1 rounded-lg">10% off</span>
                  </div>
                  <div className="text-4xl font-bold text-gray-900">
                    $518 <span className="text-sm text-gray-600 font-normal">per person</span>
                  </div>
                </div>
                <Link to="/special-offer/aswan-luxor-cruise" className="px-8 py-4 bg-white border-2 border-brand-gold text-brand-gold font-bold rounded-xl hover:bg-brand-gold hover:text-white transition-all text-sm uppercase tracking-widest shadow-md hover:shadow-brand-gold/20 w-full sm:w-auto text-center">
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Top-Rated Nile Cruise Spotlight --- */}
      <section
        id="nile-cruise"
        className="max-w-7xl mx-auto px-4 py-32 border-t border-gray-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
              {t("hero.top_cruise")}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCruises.map((cruise, i) => {
            // استخراج أقل سعر يبدأ منه المركب (أول سعر في أول مسار)
            const startingPrice = cruise.itineraries[0]?.pricing[0]?.tripleSharing || cruise.itineraries[0]?.pricing[0]?.doubleSharing || 0;

            return (
              <motion.div viewport={{ once: true }}
                key={cruise.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white group overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Link to={`/nile-cruise/${cruise.id}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cruise.gallery[0]}
                      alt={cruise.name}
                      loading="lazy"
                      width="800"
                      height="600"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-2 group-hover:text-brand-emerald transition-colors">
                      {cruise.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-8">
                      {cruise.type}
                    </p>
                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] text-gray-600 uppercase font-bold tracking-widest mb-1">
                          {t("common.start_from")}
                        </span>
                        <span className="text-2xl font-bold text-gray-900">
                          ${startingPrice}{" "}
                          <span className="text-sm text-gray-600 font-normal">
                            {t("common.per_person")}
                          </span>
                        </span>
                      </div>
                      <button type="button" className="px-6 py-3 bg-white border-2 border-brand-gold text-brand-gold font-bold rounded-xl hover:bg-brand-gold hover:text-white transition-all text-xs uppercase tracking-widest shadow-md hover:shadow-brand-gold/20">
                        {t("common.book_now")}
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- Discover Our Great Packages --- */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
              {t("hero.discover_packages")}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: t("home.pkg1_name", "Essential Egypt (7 Days)"),
              type: t("home.pkg1_type", "Cairo, Aswan & Luxor"),
              price: "$1,250",
              img: "https://plus.unsplash.com/premium_photo-1728561809541-1620be0f4004?w=800&auto=format&fit=crop&q=80&fmt=webp&w=800&q=75",
              link: "/destination/historical-wonders/1",
            },
            {
              name: t("home.pkg2_name", "Nile & Red Sea Magic (10 Days)"),
              type: t("home.pkg2_type", "Cairo, Aswan, Luxor & Hurghada"),
              price: "$1,725",
              img: "https://images.unsplash.com/photo-1553913861-c46db5573ced?w=800&auto=format&fit=crop&q=80&fmt=webp&w=800&q=75",
              link: "/destination/historical-wonders/2",
            },
            {
              name: t("home.pkg3_name", "The Grand Explorer (12 Days)"),
              type: t("home.pkg3_type", "Cairo, Aswan, Luxor & Alexandria"),
              price: "$2,365",
              img: "https://images.unsplash.com/photo-1628503218283-6ddeac69dfea?w=800&auto=format&fit=crop&q=80&fmt=webp&w=800&q=75",
              link: "/destination/historical-wonders/3",
            },
          ].map((packageTour, i) => (
            <motion.div viewport={{ once: true }}
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white group overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Link to={packageTour.link || "#"}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={packageTour.img}
                    alt={packageTour.name}
                    loading="lazy"
                    width="800"
                    height="600"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold font-serif text-gray-900 mb-2 group-hover:text-brand-emerald transition-colors">
                    {packageTour.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mb-8">
                    {packageTour.type}
                  </p>
                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-gray-600 uppercase font-bold tracking-widest mb-1">
                        {t("common.start_from")}
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {packageTour.price}{" "}
                        <span className="text-sm text-gray-600 font-normal">
                          {t("common.per_person")}
                        </span>
                      </span>
                    </div>
                    <button type="button" className="px-6 py-3 bg-white border-2 border-brand-gold text-brand-gold font-bold rounded-xl hover:bg-brand-gold hover:text-white transition-all text-xs uppercase tracking-widest shadow-md hover:shadow-brand-gold/20">
                      {t("common.book_now")}
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TripAdvisor Premium Card */}
      <div className="max-w-4xl mx-auto mt-16 px-4 pb-24">
        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">

          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none group-hover:bg-emerald-100 transition-colors duration-500"></div>

          <div className="w-24 h-24 shrink-0 flex items-center justify-center bg-white border border-gray-100 shadow-sm rounded-full p-4 z-10">
            <svg className="w-full h-full" fill="#34E0A1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Tripadvisor</title>
              <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z" />
            </svg>
          </div>

          <div className="flex-1 text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-[#34E0A1]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-3 text-sm font-bold text-gray-800 uppercase tracking-widest">{t("common.excellent")}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-serif">
              Egypt Holiday Aswan
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {t("home.reviews_title")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10 mt-4 md:mt-0">
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g294204-d32865044-Reviews-Egypt_Holiday_Aswan-Aswan_Aswan_Governorate_Nile_River_Valley.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-gray-900 text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#34E0A1] hover:text-gray-900 hover:shadow-lg transition-all duration-300 text-center whitespace-nowrap"
            >
              {t("home.see_reviews")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;