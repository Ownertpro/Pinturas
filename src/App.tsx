import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { Users } from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import VisualizerPage from "./pages/VisualizerPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [notification, setNotification] = useState<{ city: string, time: string } | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const cities = ["Limpio", "Asunción", "Luque", "Mariano R. Alonso", "San Lorenzo", "Lambaré"];
    const showNotification = () => {
      const city = cities[Math.floor(Math.random() * cities.length)];
      setNotification({ city, time: "hace 2 min" });
      setTimeout(() => setNotification(null), 5000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) showNotification();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-[#f8f9fa] text-slate-900'} selection:bg-[#3c6994]/30 md:cursor-none overflow-x-hidden`}>
      <ScrollToTop />
      
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#3c6994]/50 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        animate={{ 
          x: cursorPos.x - 16, 
          y: cursorPos.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(60, 105, 148, 0.1)" : "transparent"
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-[#3c6994] rounded-full" />
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#3c6994] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Live Notification Toast */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: notification ? 24 : -400, opacity: notification ? 1 : 0 }}
        className="fixed bottom-32 left-0 z-[110] hidden md:block"
      >
        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-[#e9ecef] text-slate-900'} p-4 rounded-xl border flex items-center gap-4 shadow-lg`}>
          <div className="w-10 h-10 rounded-full bg-[#3c6994]/10 flex items-center justify-center text-[#3c6994]">
            <Users size={20} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Solicitud Reciente</div>
            <div className="text-xs font-bold">Alguien en <span className="text-[#3c6994]">{notification?.city}</span> pidió un presupuesto</div>
          </div>
        </div>
      </motion.div>

      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setIsHovering={setIsHovering} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} setIsHovering={setIsHovering} />} />
          <Route path="/servicios" element={<ServicesPage isDarkMode={isDarkMode} setIsHovering={setIsHovering} />} />
          <Route path="/galeria" element={<GalleryPage isDarkMode={isDarkMode} setIsHovering={setIsHovering} />} />
          <Route path="/visualizador" element={<VisualizerPage isDarkMode={isDarkMode} setIsHovering={setIsHovering} />} />
          <Route path="/nosotros" element={<AboutPage isDarkMode={isDarkMode} />} />
          <Route path="/contacto" element={<ContactPage isDarkMode={isDarkMode} setIsHovering={setIsHovering} />} />
        </Routes>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
