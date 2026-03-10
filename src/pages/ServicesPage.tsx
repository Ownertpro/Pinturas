import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowRight, Paintbrush, Layers, Droplets, Sparkles, Search, ShieldAlert } from "lucide-react";
import { services } from "../constants";

interface ServicesPageProps {
  isDarkMode: boolean;
  setIsHovering: (val: boolean) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ isDarkMode, setIsHovering }) => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <div className={`pt-32 pb-24 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Nuestra Oferta</h2>
          <h1 className={`font-sans text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-tighter mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Servicios <br />
            <span className="text-[#3c6994]">Especializados.</span>
          </h1>
          <p className={`text-xl leading-relaxed max-w-2xl mx-auto font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Desde la preparación técnica del sustrato hasta el acabado final de lujo, 
            cubrimos todas las necesidades de recubrimiento arquitectónico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`group relative p-12 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-[#3c6994]' : 'bg-white border-[#e9ecef] hover:border-[#3c6994] hover:shadow-2xl'}`}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#3c6994]/10 rounded-2xl flex items-center justify-center text-[#3c6994] mb-12 group-hover:bg-[#3c6994] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                <p className={`text-lg leading-relaxed font-medium mb-12 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{service.description}</p>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-black text-[#3c6994]">
                  Ver Detalles Técnicos <ArrowRight size={16} />
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3c6994]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#3c6994]/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Technical Breakdown Section */}
        <div className="mt-32">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Nuestro Método</h2>
            <h3 className={`font-sans text-4xl font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Excelencia en el Proceso.</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Search size={24} />, title: "Evaluación", desc: "Análisis técnico de la superficie y detección de patologías." },
              { icon: <ShieldAlert size={24} />, title: "Preparación", desc: "Tratamiento de grietas, lijado y aplicación de selladores." },
              { icon: <Paintbrush size={24} />, title: "Aplicación", desc: "Técnicas de pintado controladas para un acabado uniforme." }
            ].map((step, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-[#3c6994]/10 rounded-full flex items-center justify-center text-[#3c6994] mx-auto mb-8">
                  {step.icon}
                </div>
                <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{step.title}</h4>
                <p className={`text-sm leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setSelectedService(null)} />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#e9ecef]'}`}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <X size={24} />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="h-[40vh] lg:h-auto relative">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>

                <div className="p-12 lg:p-20">
                  <span className="font-mono text-[10px] md:text-xs text-[#3c6994] mb-4 block font-bold uppercase tracking-widest">Servicio {selectedService.id}</span>
                  <h3 className={`text-3xl md:text-5xl font-extrabold leading-tight mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{selectedService.title}</h3>
                  <p className={`text-lg leading-relaxed mb-12 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {selectedService.description}
                  </p>

                  <div className="space-y-12">
                    <div>
                      <h4 className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Características Clave</h4>
                      <div className="grid gap-4">
                        {selectedService.details.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <CheckCircle2 size={18} className="text-[#3c6994] shrink-0" />
                            <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Nuestro Proceso</h4>
                      <div className="space-y-6">
                        {selectedService.details.process.map((step, i) => (
                          <div key={i} className="flex gap-6">
                            <div className="w-8 h-8 rounded-lg bg-[#3c6994]/10 flex items-center justify-center text-[#3c6994] text-xs font-black shrink-0">
                              0{i + 1}
                            </div>
                            <p className={`text-sm leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
