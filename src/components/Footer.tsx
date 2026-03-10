import React from "react";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-24 border-t ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-[#e9ecef]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#3c6994] rounded-xl flex items-center justify-center text-white font-bold">
                EK
              </div>
              <span className={`font-sans text-2xl tracking-tighter font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ekopia</span>
            </div>
            <p className={`text-lg leading-relaxed max-w-md font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Transformamos espacios con ingeniería de color y acabados de alta gama. 
              Calidad certificada en cada pincelada.
            </p>
          </div>
          
          <div>
            <h4 className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Contacto</h4>
            <ul className={`space-y-4 text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <li className="flex items-center gap-3"><Phone size={16} className="text-[#3c6994]" /> +595 984 921 554</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-[#3c6994]" /> info@ekopia.com.py</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-[#3c6994]" /> Asunción, Paraguay</li>
            </ul>
          </div>
          
          <div>
            <h4 className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Redes</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${isDarkMode ? 'border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white' : 'border-[#e9ecef] text-slate-400 hover:bg-[#3c6994] hover:text-white hover:border-[#3c6994]'}`}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t ${isDarkMode ? 'border-slate-800' : 'border-[#e9ecef]'}`}>
          <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
            © 2024 Ekopia — Fabián Paul Sanabria | Auditado & Optimizado v2.0
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-400">
            <a href="#" className="hover:text-[#3c6994] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#3c6994] transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
