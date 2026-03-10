import React from "react";
import { motion } from "motion/react";
import { Search, ShieldAlert, Paintbrush, CheckCircle2 } from "lucide-react";

interface AboutPageProps {
  isDarkMode: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ isDarkMode }) => {
  const timelineSteps = [
    { title: "Evaluación Técnica", desc: "Visita en obra para medir humedad y estado del sustrato.", icon: <Search size={20} /> },
    { title: "Preparación", desc: "Sellado de grietas, lijado y aplicación de imprimante.", icon: <ShieldAlert size={20} /> },
    { title: "Aplicación", desc: "Doble o triple capa de recubrimiento premium.", icon: <Paintbrush size={20} /> },
    { title: "Auditoría Final", desc: "Control de calidad con micrómetro y entrega certificada.", icon: <CheckCircle2 size={20} /> }
  ];

  return (
    <div className={`pt-32 pb-24 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Nuestra Historia</h2>
            <h1 className={`font-sans text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-tighter mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Pasión por el <br />
              <span className="text-[#3c6994]">Detalle.</span>
            </h1>
            <p className={`text-xl leading-relaxed font-medium mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              En Ekopia, no solo pintamos paredes; protegemos y embellecemos estructuras con un enfoque de ingeniería. 
              Cada proyecto es una oportunidad para demostrar que la calidad técnica y la estética pueden ir de la mano.
            </p>
            <p className={`text-lg leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Liderados por Fabián Paul Sanabria, nuestro equipo se especializa en acabados finos que resisten el paso del tiempo y las condiciones climáticas más exigentes de Paraguay.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
                alt="Team working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#3c6994] p-12 rounded-3xl text-white shadow-2xl hidden md:block">
              <div className="text-5xl font-black mb-2">100%</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-80">Compromiso Técnico</div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section className="py-32 border-t border-[#e9ecef] dark:border-slate-800">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Nuestro Método</h2>
            <h3 className={`font-sans text-4xl font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Cronograma de Obra.</h3>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-[#e9ecef] shadow-sm'}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#3c6994]/10 flex items-center justify-center text-[#3c6994] mb-6">
                  {step.icon}
                </div>
                <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{step.title}</h4>
                <p className={`text-sm leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
