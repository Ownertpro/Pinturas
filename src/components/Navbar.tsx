import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setIsHovering: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode, setIsHovering }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Galería", path: "/galeria" },
    { name: "Visualizador", path: "/visualizador" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Presupuesto", path: "/contacto" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[60] px-6 py-6">
        <div className={`max-w-7xl mx-auto flex items-center justify-between ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#e9ecef]'} px-8 py-3 rounded-xl border shadow-md transition-colors duration-500`}>
          <Link to="/" className="flex items-center gap-3" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="w-8 h-8 bg-[#3c6994] rounded-lg flex items-center justify-center text-white font-bold text-xs">
              EK
            </div>
            <span className={`font-sans text-lg tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ekopia</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`text-xs uppercase tracking-wider font-bold transition-colors ${
                  location.pathname === item.path 
                    ? "text-[#3c6994]" 
                    : isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-[#3c6994]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-[#3c6994]'}`}
            >
              {isDarkMode ? <Sparkles size={18} /> : <Zap size={18} />}
            </button>
            <button className={`md:hidden ${isDarkMode ? 'text-white' : 'text-slate-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-full left-6 right-6 mt-4 p-8 rounded-2xl border shadow-2xl md:hidden ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#e9ecef]'}`}
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm uppercase tracking-widest font-bold ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#3c6994]'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
