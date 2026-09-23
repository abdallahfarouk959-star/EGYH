import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, ChevronRight } from 'lucide-react';
import { CruiseData } from '../data/cruisesData';
import { useTranslation } from 'react-i18next';

interface CruiseCardProps {
  cruise: CruiseData;
}

export const CruiseCard: React.FC<CruiseCardProps> = ({ cruise }) => {
  const { t } = useTranslation();

  const getBasePrice = () => {
    let minPrice = Infinity;
    if (cruise.itineraries) {
      for (const itin of cruise.itineraries) {
        if (itin.pricing) {
          for (const season of itin.pricing) {
            if (season.doubleSharing) {
              const price = Number(season.doubleSharing);
              if (price < minPrice) minPrice = price;
            }
          }
        }
      }
    }
    return minPrice === Infinity ? null : minPrice;
  };

  const getDurations = () => {
    if (!cruise.itineraries || cruise.itineraries.length === 0) return t('cruises_list.various_durations', 'Various Durations');
    const nights = Array.from(new Set(cruise.itineraries.map(it => {
        const match = it.durationName.match(/(\d+)\s*NIGHT/i);
        return match ? match[1] : null;
    }))).filter(Boolean);
    
    if (nights.length > 0) {
        return `${nights.join(', ')} ${t('cruises_list.nights_available', 'Nights Available')}`;
    }
    return t('cruises_list.various_durations', 'Various Durations');
  };

  const price = getBasePrice();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl group cursor-pointer h-full flex flex-col"
    >
      <Link to={`/nile-cruise/${cruise.id}`} className="flex flex-col h-full">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={cruise.gallery[0] || '/placeholder-cruise.webp'}
            alt={cruise.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-brand-emerald uppercase tracking-widest flex items-center gap-1">
            <Star size={10} className="fill-brand-gold text-brand-gold" />
            {cruise.category.replace('-', ' ')}
          </div>
        </div>

        <div className="p-8 flex-grow flex flex-col">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-brand-emerald transition-colors line-clamp-2">
            {cruise.name}
          </h3>
          <p className="text-xs text-brand-gold uppercase tracking-widest font-bold mb-4">
            {cruise.type}
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MapPin size={14} className="text-brand-gold" />
              {t('cruises_list.multiple_itineraries', 'Aswan / Luxor (Multiple Itineraries)')}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock size={14} className="text-brand-gold" />
              {getDurations()}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
            <div>
              <span className="block text-[10px] text-gray-600 uppercase font-bold tracking-widest mb-1">
                {t('cruises_list.starting_from', 'Starting from')}
              </span>
              <span className="text-2xl font-bold text-brand-emerald">
                {price ? `$${price}` : 'N/A'}{' '}
                {price && <span className="text-sm font-normal text-gray-600">/ USD</span>}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-gold/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
