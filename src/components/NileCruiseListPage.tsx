import React, { useEffect } from "react";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { Star, Clock, MapPin, ChevronRight, Waves } from "lucide-react";

// استيراد الداتا الجديدة

import { cruises } from "../data/cruisesData";

export const NileCruiseListPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}

      <section className="bg-brand-emerald py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=2000&fmt=webp&w=800&q=75"
            alt="Nile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Nile River Cruises
          </motion.h1>

          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Experience the heartbeat of Egypt. From legendary vessels to
            ultra-luxury cruises, discover your perfect journey.
          </p>
        </div>
      </section>

      {/* Cruise Grid */}

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
              <Waves size={24} />
            </div>

            <h2 className="text-3xl font-serif font-bold text-brand-emerald">
              Our Luxury Nile Cruises
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cruises.map((cruise) => (
              <motion.div
                key={cruise.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl group cursor-pointer h-full flex flex-col"
              >
                <Link
                  to={`/nile-cruise/${cruise.id}`}
                  className="flex flex-col h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={cruise.gallery[0]}
                      alt={cruise.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-brand-emerald uppercase tracking-widest flex items-center gap-1">
                      <Star
                        size={10}
                        className="fill-brand-gold text-brand-gold"
                      />
                      5-Star Luxury
                    </div>
                  </div>

                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-brand-emerald transition-colors line-clamp-2">
                      {cruise.name}
                    </h3>

                    <p className="text-xs text-brand-gold uppercase tracking-widest font-bold mb-4">
                      {cruise.type}
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin size={14} className="text-brand-gold" />
                        Aswan / Luxor (Multiple Itineraries)
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock size={14} className="text-brand-gold" />
                        3, 4 or 7 Nights Available
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                      <div>
                        <span className="block text-[10px] text-gray-600 uppercase font-bold tracking-widest mb-1">
                          Starting from
                        </span>

                        {/* بناخد أقل سعر في المركب عشان نعرضه كبداية */}

                        <span className="text-2xl font-bold text-brand-emerald">
                          ${cruise.itineraries[0].pricing[0].doubleSharing}{" "}
                          <span className="text-sm font-normal text-gray-600">
                            / USD
                          </span>
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-full bg-brand-gold/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
