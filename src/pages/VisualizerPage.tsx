import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Zap, ArrowUp } from "lucide-react";

interface VisualizerPageProps {
  isDarkMode: boolean;
  setIsHovering: (val: boolean) => void;
}

const VisualizerPage: React.FC<VisualizerPageProps> = ({ isDarkMode, setIsHovering }) => {
  const [calcData, setCalcData] = useState({ width: 0, height: 0, coats: 2 });
  const [calcResult, setCalcResult] = useState<number | null>(null);
  const [visualizerColor, setVisualizerColor] = useState("#3c6994");

  const visualizerColors = [
    { name: "Azul Ekopia", hex: "#3c6994" },
    { name: "Gris Urbano", hex: "#90A4AE" },
    { name: "Arena Cálida", hex: "#D7CCC8" },
    { name: "Verde Olivo", hex: "#5A5A40" },
    { name: "Blanco Puro", hex: "#F5F5F5" },
    { name: "Terracota", hex: "#A1887F" }
  ];

  const calculatePaint = () => {
    const area = calcData.width * calcData.height;
    const liters = (area / 10) * calcData.coats;
    setCalcResult(Math.ceil(liters));
  };

  return (
    <div className={`pt-32 pb-24 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Herramientas Digitales</h2>
          <h1 className={`font-sans text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-tighter mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Visualizador & <br />
            <span className="text-[#3c6994]">Calculadora.</span>
          </h1>
          <p className={`text-xl leading-relaxed max-w-2xl mx-auto font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Planifica tu proyecto con precisión técnica y visualiza el resultado final antes de empezar.
          </p>
        </div>

        {/* Visualizer Section */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-[#e9ecef] shadow-2xl bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Room Visualizer" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div 
                  className="absolute inset-0 mix-blend-multiply opacity-60 transition-colors duration-700"
                  style={{ backgroundColor: visualizerColor }}
                />
                <div className="absolute top-8 left-8 px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg border border-[#e9ecef] shadow-lg">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#3c6994] mb-1">Color Seleccionado</div>
                  <div className="text-sm font-bold text-slate-900">{visualizerColors.find(c => c.hex === visualizerColor)?.name}</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-8">Innovación Visual</h2>
              <h3 className={`font-sans text-4xl font-extrabold mb-8 leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Visualizador de <br />
                <span className="text-[#3c6994]">Ambientes.</span>
              </h3>
              <p className={`text-lg leading-relaxed mb-12 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Experimenta con nuestra selección de colores premium y visualiza cómo transformarían tu espacio.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {visualizerColors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setVisualizerColor(color.hex)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-3 ${
                      visualizerColor === color.hex 
                        ? "border-[#3c6994] bg-[#3c6994]/5 shadow-lg" 
                        : isDarkMode ? "border-slate-800 bg-slate-900 hover:border-slate-700" : "border-[#e9ecef] bg-white hover:border-[#3c6994]/30"
                    }`}
                  >
                    <div 
                      className="w-12 h-12 rounded-full shadow-inner border border-black/5"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section>
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 text-white">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-8">Herramienta Técnica</h2>
                <h3 className="font-sans text-4xl font-extrabold mb-8 leading-tight">
                  Calculadora de <br />
                  <span className="text-[#3c6994]">Insumos.</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
                  Estima la cantidad de pintura necesaria para tu proyecto. Basado en un rendimiento promedio de 10m² por litro.
                </p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Ancho (m)</label>
                      <input 
                        type="number" 
                        onChange={(e) => setCalcData({...calcData, width: Number(e.target.value)})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors text-white font-medium"
                        placeholder="0.00"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Alto (m)</label>
                      <input 
                        type="number" 
                        onChange={(e) => setCalcData({...calcData, height: Number(e.target.value)})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors text-white font-medium"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Manos de Pintura</label>
                    <select 
                      defaultValue="2"
                      onChange={(e) => setCalcData({...calcData, coats: Number(e.target.value)})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors text-white font-medium appearance-none"
                    >
                      <option value="1" className="bg-slate-900">1 Mano (Refresco)</option>
                      <option value="2" className="bg-slate-900">2 Manos (Estándar)</option>
                      <option value="3" className="bg-slate-900">3 Manos (Cambio de color)</option>
                    </select>
                  </div>
                  <button 
                    onClick={calculatePaint}
                    className="w-full bg-[#3c6994] text-white py-5 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#2d4f70] transition-all"
                  >
                    Calcular Litros
                  </button>
                </div>
              </div>
              
              <div className="bg-[#3c6994]/10 flex items-center justify-center p-12 lg:p-20 border-l border-white/5">
                <div className="text-center">
                  <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Resultado Estimado</div>
                  <div className="text-8xl md:text-9xl font-black text-white mb-4">
                    {calcResult !== null ? calcResult : "0"}
                  </div>
                  <div className="text-2xl font-bold text-slate-400 uppercase tracking-widest">Litros de Pintura</div>
                  <p className="mt-8 text-slate-500 text-xs max-w-xs mx-auto italic">
                    * El cálculo es aproximado y puede variar según la porosidad de la superficie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisualizerPage;
