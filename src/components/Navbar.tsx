import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown, Menu, X, Globe, CheckCircle } from "lucide-react";
import { NavItem } from "../data/toursData";
import LogoImg from "../assets/Primary icon logo.svg";

const MobileNavItem: React.FC<{
  item: NavItem;
  depth?: number;
  closeMenu: () => void;
}> = ({ item, depth = 0, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className={`${depth === 0 ? "border-b border-emerald-100/50" : ""}`}>
      <div className="flex items-center justify-between py-3">
        {hasSubItems ? (
          <span className={`text-gray-800 ${depth === 0 ? "text-lg font-medium" : "text-sm font-medium"}`}>
            {item.name}
          </span>
        ) : (
          item.link === "/" ? (
            <a href="/" onClick={closeMenu} className={`text-gray-800 ${depth === 0 ? "text-lg font-medium" : "text-sm"}`}>
              {item.name}
            </a>
          ) : (
            <Link to={item.link} onClick={closeMenu} className={`text-gray-800 ${depth === 0 ? "text-lg font-medium" : "text-sm"}`}>
              {item.name}
            </Link>
          )
        )}
        {hasSubItems && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 -mr-2 text-gray-600 hover:text-emerald-600 transition-colors">
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      <AnimatePresence>
        {hasSubItems && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 border-l-2 border-emerald-200 mb-2"
          >
            <div className="pb-2 space-y-1">
              {item.subItems?.map((sub) => (
                <MobileNavItem key={sub.name} item={sub} depth={depth + 1} closeMenu={closeMenu} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Dropdown = ({
  title, items, activeDropdown, setActiveDropdown,
}: {
  title: string; items: NavItem[]; activeDropdown: string | null; setActiveDropdown: (title: string | null) => void;
}) => {
  const isOpen = activeDropdown === title;
  return (
    <div className="relative group" onMouseEnter={() => setActiveDropdown(title)} onMouseLeave={() => setActiveDropdown(null)}>
      <button className="flex items-center gap-1 py-4 text-sm font-semibold text-gray-800 hover:text-brand-emerald transition-colors cursor-pointer capitalize">
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 top-full bg-white border border-emerald-50 shadow-xl rounded-lg py-1 min-w-[240px] z-50"
          >
            {items.map((item) => (
              <div key={item.name} className="relative group/sub">
                <Link to={item.link} className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors font-medium">
                  <CheckCircle size={14} className="text-brand-emerald shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  const currentLanguage = i18n.language?.startsWith("fr") ? "Français" : "English";

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  const ALL_TOURS_ITEMS = [
    { name: t('nav.aswan_tours', 'Aswan Tours'), link: "/destination/aswan" },
    { name: t('nav.luxor_tours', 'Luxor Tours'), link: "/destination/luxor" },
    { name: t('nav.cairo_tours', 'Cairo Tours'), link: "/destination/cairo" },
    { name: t('nav.abu_simbel_tours', 'Abu Simbel Tours'), link: "/destination/abu-simbel" },
  ];

  const SIMPLIFIED_PACKAGES = [
    { name: t('nav.6_nights', '6 Nights'), link: "/destination/historical-wonders/1" },
    { name: t('nav.9_nights', '9 Nights'), link: "/destination/historical-wonders/2" },
    { name: t('nav.11_nights', '11 Nights'), link: "/destination/historical-wonders/3" },
    { name: t('nav.14_nights', '14 Nights'), link: "/destination/historical-wonders/4" },
  ];

  const NILE_CRUISE_ITEMS = [
    { name: t('nav.all_nile_cruises', 'All Nile Cruises'), link: "/nile-cruise" },
    { name: t('nav.luxury_cruises', 'Luxury Cruises'), link: "/nile-cruise/category/luxury" },
    { name: t('nav.ultra_deluxe_cruises', 'Ultra Deluxe Cruises'), link: "/nile-cruise/category/ultra-deluxe" },
    { name: t('nav.deluxe_cruises', 'Deluxe Cruises'), link: "/nile-cruise/category/deluxe" },
    { name: t('nav.standard_cruises', 'Standard Cruises'), link: "/nile-cruise/category/standard" },
    { name: t('nav.lake_nasser_cruises', 'Lake Nasser Cruises'), link: "/nile-cruise/category/lake-nasser-cruises" },
    { name: t('nav.cruise_by_felucca', 'Cruise by Felucca'), link: "/nile-cruise/category/cruise-by-felucca" },
    { name: t('nav.dahabiya_nile_cruise_boat', 'Dahabiya Nile Cruise Boat'), link: "/nile-cruise/category/dahabiya-nile-cruise-boat" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-emerald-50/95 backdrop-blur-md shadow-sm border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <img src={LogoImg} alt="Egypt Holiday Aswan Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif font-bold text-xl text-brand-emerald tracking-tight leading-none uppercase">Egypt Holiday</h1>
            <p className="text-[10px] text-brand-gold font-bold tracking-widest uppercase">Aswan</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <a href="/" className="text-sm font-semibold text-gray-800 hover:text-brand-emerald transition-colors">{t('nav.home', 'Home')}</a>
          <Dropdown title={t('nav.all_tours', 'All Tours')} items={ALL_TOURS_ITEMS} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
          <Dropdown title={t('nav.tours', 'Packages')} items={SIMPLIFIED_PACKAGES} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
          <Dropdown title={t('nav.nile_cruise', 'Nile Cruise')} items={NILE_CRUISE_ITEMS} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
          <Link to="/about" className="text-sm font-semibold text-gray-800 hover:text-brand-emerald transition-colors">{t('nav.about', 'About Us')}</Link>
          <Link to="/contact" className="text-sm font-semibold text-gray-800 hover:text-brand-emerald transition-colors">{t('nav.contact', 'Contact Us')}</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="flex items-center gap-1.5 px-3 py-1.5 border border-emerald-200 rounded-full text-xs font-semibold hover:border-emerald-500 transition-colors bg-white/60">
              <Globe size={14} className="text-emerald-600" />
              {currentLanguage}
              <ChevronDown size={12} className={`transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 bg-white border border-emerald-100 shadow-xl rounded-xl py-1 z-[110] min-w-[120px]">
                  {[{ name: "English", code: "en" }, { name: "Français", code: "fr" }].map((lang) => (
                    <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className={`w-full text-left px-4 py-2 text-xs hover:bg-emerald-50 transition-colors ${i18n.language?.startsWith(lang.code) ? "text-emerald-600 font-bold" : "text-gray-600"}`}>
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button 
          className="lg:hidden p-2 text-gray-600 hover:text-emerald-600" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden bg-emerald-50/95 backdrop-blur-md border-t border-emerald-100 overflow-hidden">
            <div className="p-4 space-y-1">
              <MobileNavItem item={{ name: t('nav.home', 'Home'), link: "/" }} closeMenu={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem item={{ name: t('nav.all_tours', 'All Tours'), link: "#", subItems: ALL_TOURS_ITEMS }} closeMenu={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem item={{ name: t('nav.tours', 'Packages'), link: "#", subItems: SIMPLIFIED_PACKAGES }} closeMenu={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem item={{ name: t('nav.nile_cruise', 'Nile Cruise'), link: "#", subItems: NILE_CRUISE_ITEMS }} closeMenu={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem item={{ name: t('nav.about', 'About Us'), link: "/about" }} closeMenu={() => setIsMobileMenuOpen(false)} />
              <MobileNavItem item={{ name: t('nav.contact', 'Contact Us'), link: "/contact" }} closeMenu={() => setIsMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;