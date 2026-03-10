import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryImages, categories } from "../constants";

interface GalleryPageProps {
  isDarkMode: boolean;
  setIsHovering: (val: boolean) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ isDarkMode, setIsHovering }) => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className={`pt-32 pb-24 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Portafolio</h2>
          <h1 className={`font-sans text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-tighter mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Galería de <br />
            <span className="text-[#3c6994]">Proyectos.</span>
          </h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-black transition-all ${
                  activeCategory === cat 
                    ? "bg-[#3c6994] text-white shadow-xl shadow-[#3c6994]/20 scale-105" 
                    : isDarkMode ? "bg-slate-900 text-slate-400 hover:text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImageIndex(galleryImages.indexOf(img))}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-xl"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/60 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4">
                    <Maximize2 size={20} />
                  </div>
                  <h4 className="text-white text-xl font-bold mb-2">{img.title}</h4>
                  <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-950/95 backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <X size={24} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all hidden md:flex"
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all hidden md:flex"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div 
              key={selectedImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={galleryImages[selectedImageIndex].url} 
                alt={galleryImages[selectedImageIndex].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-slate-950/80 to-transparent">
                <h4 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{galleryImages[selectedImageIndex].title}</h4>
                <p className="text-white/60 text-sm mt-2 font-medium uppercase tracking-widest">{galleryImages[selectedImageIndex].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
