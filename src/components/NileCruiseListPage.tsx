import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Filter, Waves } from "lucide-react";
import { getCruises } from "../data/cruisesData";
import { CruiseCard } from "./CruiseCard";
import { FilterSidebar, FilterState } from "./FilterSidebar";
import { useTranslation } from "react-i18next";

export const NileCruiseListPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const cruises = getCruises(i18n.language);

  const CATEGORIES: { id: string; label: string }[] = [
    { id: "all", label: t('cruises_list.all_cruises', 'All Cruises') },
    { id: "luxury", label: t('cruises_list.luxury', 'Luxury') },
    { id: "ultra-deluxe", label: t('cruises_list.ultra_deluxe', 'Ultra Deluxe') },
    { id: "deluxe", label: t('cruises_list.deluxe', 'Deluxe') },
    { id: "standard", label: t('cruises_list.standard', 'Standard') },
    { id: "lake-nasser-cruises", label: t('cruises_list.lake_nasser', 'Lake Nasser Cruises') },
    { id: "cruise-by-felucca", label: t('cruises_list.felucca', 'Cruise by Felucca') },
    { id: "dahabiya-nile-cruise-boat", label: t('cruises_list.dahabiya', 'Dahabiya Nile Cruise Boat') },
  ];
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<"default" | "low-to-high" | "high-to-low">("default");
  const [filters, setFilters] = useState<FilterState>({
    category: categoryId || "all",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  useEffect(() => {
    setFilters(prev => ({ ...prev, category: categoryId || "all" }));
  }, [categoryId]);

  useEffect(() => {
    if (filters.category === "all" && categoryId) {
      navigate("/nile-cruise");
    } else if (filters.category !== "all" && filters.category !== categoryId) {
      navigate(`/nile-cruise/category/${filters.category}`);
    }
  }, [filters.category, navigate, categoryId]);

  const getBasePrice = (cruise: any) => {
    let minPrice = Infinity;
    if (cruise.itineraries) {
      for (const itin of cruise.itineraries) {
        if (itin.pricing) {
          for (const season of itin.pricing) {
            const baseVal = season.tripleSharing || season.doubleSharing || season.singleCabin;
            if (baseVal) {
              const price = Number(baseVal);
              if (price < minPrice) minPrice = price;
            }
          }
        }
      }
    }
    return minPrice === Infinity ? 999999 : minPrice;
  };

  const filteredCruises = cruises.filter(cruise => {
    if (filters.category !== "all" && cruise.category !== filters.category) {
      return false;
    }
    const price = getBasePrice(cruise);
    if (filters.minPrice && price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && price > Number(filters.maxPrice) && price !== 999999) return false;
    return true;
  }).sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return getBasePrice(a) - getBasePrice(b);
    } else if (sortOrder === "high-to-low") {
      return getBasePrice(b) - getBasePrice(a);
    }
    return 0;
  });

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
            {t('cruises_list.hero_title', 'Nile River Cruises')}
          </motion.h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {t('cruises_list.hero_desc', 'Experience the heartbeat of Egypt. From legendary vessels to ultra-luxury cruises, discover your perfect journey.')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar 
            filters={filters} 
            setFilters={setFilters} 
            categories={CATEGORIES}
            isOpen={isMobileFiltersOpen}
            onClose={() => setIsMobileFiltersOpen(false)}
          />

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
                  <Waves size={24} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-brand-emerald">
                  {CATEGORIES.find(c => c.id === filters.category)?.label} {t('cruises_list.cruises_suffix', 'Cruises')}
                </h2>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button 
                    onClick={() => setIsMobileFiltersOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium"
                >
                    <Filter size={18} />
                    {t('cruises_list.filters', 'Filters')}
                </button>
                <div className="flex items-center gap-4 ml-auto">
                  <p className="text-gray-500 font-medium hidden sm:block">{t('cruises_list.showing_results', 'Showing {{count}} results', { count: filteredCruises.length })}</p>
                  <select 
                    value={sortOrder} 
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-brand-emerald focus:border-brand-emerald block px-3 py-2 outline-none shadow-sm cursor-pointer"
                  >
                    <option value="default">{t('cruises_list.sort_default', 'Sort by Default')}</option>
                    <option value="low-to-high">{t('cruises_list.sort_low_high', 'Price: Low to High')}</option>
                    <option value="high-to-low">{t('cruises_list.sort_high_low', 'Price: High to Low')}</option>
                  </select>
                </div>
              </div>
            </div>

            {filteredCruises.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{t('cruises_list.no_cruises', 'No cruises found')}</h3>
                    <p className="text-gray-500">{t('cruises_list.no_cruises_hint', "Try adjusting your filters to find what you're looking for.")}</p>
                    <button 
                        onClick={() => setFilters({category: 'all', minPrice: '', maxPrice: ''})}
                        className="mt-6 px-6 py-2 bg-brand-emerald text-white font-bold rounded-lg hover:bg-brand-emerald/90 transition-colors"
                    >
                        {t('cruises_list.clear_all_filters', 'Clear all filters')}
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredCruises.map((cruise) => (
                    <CruiseCard key={cruise.id} cruise={cruise} />
                ))}
                </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NileCruiseListPage;
