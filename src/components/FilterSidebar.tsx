import React from 'react';
import { Filter, X } from 'lucide-react';

export interface FilterState {
  category: string;
  minPrice: number | '';
  maxPrice: number | '';
  duration: string;
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  categories: { id: string; label: string }[];
  isOpen: boolean;
  onClose: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
  categories,
  isOpen,
  onClose,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFilters({
      category: 'all',
      minPrice: '',
      maxPrice: '',
      duration: 'all',
    });
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:shadow-none lg:w-64 flex flex-col h-full ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2 text-brand-emerald font-bold">
            <Filter size={20} />
            Filters
          </div>
          <button onClick={onClose} className="lg:hidden text-gray-500 hover:text-gray-900">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8 overflow-y-auto flex-grow">
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
              Category
            </h3>
            <div className="space-y-3">
              {categories.map(cat => (
                <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    value={cat.id}
                    checked={filters.category === cat.id}
                    onChange={handleChange}
                    className="w-4 h-4 text-brand-emerald border-gray-300 focus:ring-brand-emerald"
                  />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    {cat.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
              Price Range (USD)
            </h3>
            <div className="flex items-center gap-3">
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
                placeholder="Min"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
                placeholder="Max"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
              Duration
            </h3>
            <select
              name="duration"
              value={filters.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald bg-white"
            >
              <option value="all">Any Duration</option>
              <option value="3">3 Nights</option>
              <option value="4">4 Nights</option>
            </select>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100">
          <button
            onClick={handleClear}
            className="w-full py-3 bg-gray-50 text-gray-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
};
