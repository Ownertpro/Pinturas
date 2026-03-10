import React from "react";
import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { whatsappLink } from "../constants";

interface ContactPageProps {
  isDarkMode: boolean;
  setIsHovering: (val: boolean) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ isDarkMode, setIsHovering }) => {
  return (
    <div className={`pt-32 pb-24 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Contacto</h2>
            <h1 className={`font-sans text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-tighter mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Hablemos de tu <br />
              <span className="text-[#3c6994]">Proyecto.</span>
            </h1>
            <p className={`text-xl leading-relaxed font-medium mb-12 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Estamos listos para asesorarte técnicamente y brindarte el presupuesto que tu obra merece.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Phone size={24} />, title: "Teléfono", value: "+595 984 921 554" },
                { icon: <Mail size={24} />, title: "Email", value: "info@ekopia.com.py" },
                { icon: <MapPin size={24} />, title: "Ubicación", value: "Asunción, Paraguay" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#3c6994]/10 flex items-center justify-center text-[#3c6994]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">{item.title}</div>
                    <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl"
              >
                Chatear por WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className={`p-12 rounded-3xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-[#f8f9fa] border-[#e9ecef]'}`}>
            <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Solicitar Presupuesto</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre..."
                    className={`w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors font-medium ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-[#e9ecef] text-slate-900'}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Servicio</label>
                  <select className={`w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors font-medium ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-[#e9ecef] text-slate-900'}`}>
                    <option>Pintura Interior/Exterior</option>
                    <option>Texturado & Enduido</option>
                    <option>Impermeabilizado</option>
                    <option>Otros</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Mensaje / Detalles de la Obra</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className={`w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors font-medium ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-[#e9ecef] text-slate-900'}`}
                />
              </div>

              <button className="w-full bg-[#3c6994] text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#2d4f70] transition-all flex items-center justify-center gap-3 shadow-xl">
                Enviar Solicitud <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
