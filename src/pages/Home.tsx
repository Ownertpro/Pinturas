import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Clock, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../constants";

interface HomeProps {
  isDarkMode: boolean;
  setIsHovering: (val: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ isDarkMode, setIsHovering }) => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className={`relative min-h-[80vh] flex items-center py-20 overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Ingeniería en Acabados</h2>
                <h1 className={`font-sans text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-tighter mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Pintura que <br />
                  <span className="text-[#3c6994]">Perdura.</span>
                </h1>
                <p className={`text-xl leading-relaxed max-w-xl mb-12 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Especialistas en texturados, impermeabilización y pintura de alta gama para residencias y comercios que exigen perfección técnica.
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <Link 
                    to="/contacto"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="bg-[#3c6994] text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#2d4f70] transition-all flex items-center gap-3 shadow-xl shadow-[#3c6994]/20"
                  >
                    Pedir Presupuesto <ArrowRight size={16} />
                  </Link>
                  <Link 
                    to="/galeria"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs border transition-all ${isDarkMode ? 'border-slate-800 text-white hover:bg-slate-800' : 'border-[#e9ecef] text-slate-900 hover:bg-slate-50'}`}
                  >
                    Ver Proyectos
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800"
              >
                <img 
                  src="https://i.ibb.co/jn1Kj89/FB-IMG-1675023455496.jpg" 
                  alt="Ekopia Work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3c6994]/40 to-transparent" />
              </motion.div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl border border-[#e9ecef] dark:border-slate-800 hidden md:block">
                <div className="text-4xl font-black text-[#3c6994] mb-1">10+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className={`py-12 border-y ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-[#e9ecef]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="text-[#3c6994]" />, text: "Garantía de Obra" },
              { icon: <Clock className="text-[#3c6994]" />, text: "Entrega en Fecha" },
              { icon: <Award className="text-[#3c6994]" />, text: "Calidad Premium" },
              { icon: <Users className="text-[#3c6994]" />, text: "Personal Calificado" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-4 justify-center">
                {badge.icon}
                <span className={`text-[10px] uppercase tracking-widest font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className={`py-32 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Nuestras Especialidades</h2>
              <h3 className={`font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-none tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Soluciones <br />
                <span className="text-[#3c6994]">Técnicas.</span>
              </h3>
            </div>
            <Link 
              to="/servicios"
              className={`text-xs uppercase tracking-widest font-bold pb-2 border-b-2 border-[#3c6994] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
            >
              Ver todos los servicios
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id}
                to="/servicios"
                className={`group p-8 rounded-2xl border transition-all duration-500 ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-[#3c6994]' : 'bg-white border-[#e9ecef] hover:border-[#3c6994] hover:shadow-xl'}`}
              >
                <div className="w-12 h-12 bg-[#3c6994]/10 rounded-xl flex items-center justify-center text-[#3c6994] mb-8 group-hover:bg-[#3c6994] group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{service.title}</h4>
                <p className={`text-sm leading-relaxed font-medium mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{service.description}</p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#3c6994]">
                  Saber más <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#3c6994] rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white blur-[120px] rounded-full" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white blur-[120px] rounded-full" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-white text-[clamp(2rem,6vw,4rem)] font-black leading-none tracking-tighter mb-8">
                ¿Listo para renovar <br /> tu espacio?
              </h2>
              <p className="text-white/80 text-xl mb-12 font-medium">
                Solicita una visita técnica sin compromiso y recibe un presupuesto detallado ajustado a tus necesidades.
              </p>
              <Link 
                to="/contacto"
                className="inline-flex items-center gap-4 bg-white text-[#3c6994] px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl"
              >
                Solicitar Presupuesto <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
