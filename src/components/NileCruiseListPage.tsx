import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Filter, Waves } from "lucide-react";
import { cruises } from "../data/cruisesData";
import { CruiseCard } from "./CruiseCard";
import { FilterSidebar, FilterState } from "./FilterSidebar";

const CATEGORIES: { id: string; label: string }[] = [
  { id: "all", label: "All Cruises" },
  { id: "luxury", label: "Luxury" },
  { id: "ultra-deluxe", label: "Ultra Deluxe" },
  { id: "deluxe", label: "Deluxe" },
  { id: "standard", label: "Standard" },
  { id: "lake-nasser-cruises", label: "Lake Nasser Cruises" },
  { id: "cruise-by-felucca", label: "Cruise by Felucca" },
  { id: "dahabiya-nile-cruise-boat", label: "Dahabiya Nile Cruise Boat" },
];

export const NileCruiseListPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
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

  // Sync route param to filter state
  useEffect(() => {
    setFilters(prev => ({ ...prev, category: categoryId || "all" }));
  }, [categoryId]);

  // Sync filter state to route (only for category)
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
            if (season.doubleSharing) {
              const price = Number(season.doubleSharing);
              if (price < minPrice) minPrice = price;
            }
          }
        }
      }
    }
    return minPrice === Infinity ? 999999 : minPrice;
  };

  const filteredCruises = cruises.filter(cruise => {
    // Category Filter
    if (filters.category !== "all" && cruise.category !== filters.category) {
      return false;
    }
    
    // Price Filter
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
            Nile River Cruises
          </motion.h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Experience the heartbeat of Egypt. From legendary vessels to
            ultra-luxury cruises, discover your perfect journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar (Desktop & Mobile Modal) */}
          <FilterSidebar 
            filters={filters} 
            setFilters={setFilters} 
            categories={CATEGORIES}
            isOpen={isMobileFiltersOpen}
            onClose={() => setIsMobileFiltersOpen(false)}
          />

          {/* Grid Area */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
                  <Waves size={24} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-brand-emerald">
                  {CATEGORIES.find(c => c.id === filters.category)?.label} Cruises
                </h2>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button 
                    onClick={() => setIsMobileFiltersOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium"
                >
                    <Filter size={18} />
                    Filters
                </button>
                <div className="flex items-center gap-4 ml-auto">
                  <p className="text-gray-500 font-medium hidden sm:block">Showing {filteredCruises.length} results</p>
                  <select 
                    value={sortOrder} 
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-brand-emerald focus:border-brand-emerald block px-3 py-2 outline-none shadow-sm cursor-pointer"
                  >
                    <option value="default">Sort by Default</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {filteredCruises.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">No cruises found</h3>
                    <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                    <button 
                        onClick={() => setFilters({category: 'all', minPrice: '', maxPrice: ''})}
                        className="mt-6 px-6 py-2 bg-brand-emerald text-white font-bold rounded-lg hover:bg-brand-emerald/90 transition-colors"
                    >
                        Clear all filters
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
