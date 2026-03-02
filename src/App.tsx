/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Paintbrush, 
  Layers, 
  ShieldCheck, 
  Droplets, 
  Sparkles, 
  Phone, 
  CheckCircle2, 
  ArrowUpRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Maximize,
  Scan,
  Zap,
  Clock,
  MapPin,
  ChevronRight,
  Share2,
  Linkedin,
  ArrowUp,
  Star,
  HelpCircle,
  Award,
  Users,
  Quote,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    id: "01",
    title: "Pintura de Alta Gama",
    description: "Acabados de lujo para interiores y exteriores con pigmentos de máxima durabilidad.",
    icon: <Paintbrush className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    details: {
      features: ["Pigmentos de alta resistencia UV", "Acabado lavable y antimanchas", "Resultados de calidad superior"],
      process: ["Limpieza profunda de superficie", "Aplicación de imprimante sellador", "Doble capa de pintura premium"],
      benefits: "Ideal para residencias que buscan un look sofisticado y una protección duradera contra el clima."
    }
  },
  {
    id: "02",
    title: "Texturado & Enduido",
    description: "Preparación técnica de superficies para una planimetría perfecta y texturas artesanales.",
    icon: <Layers className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800",
    details: {
      features: ["Nivelación milimétrica", "Texturas personalizadas (Travertino, Rulato, etc.)", "Ocultamiento total de imperfecciones"],
      process: ["Lijado mecánico de base", "Aplicación de enduido plástico", "Texturado artesanal con llana"],
      benefits: "Transforma paredes irregulares en superficies de diseño con alta resistencia estructural."
    }
  },
  {
    id: "03",
    title: "Impermeabilizado",
    description: "Sistemas de sellado hermético multicapa para protección total contra agentes climáticos.",
    icon: <Droplets className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800",
    details: {
      features: ["Membrana líquida de alta elasticidad", "Sellado de microfisuras", "Barrera 100% hidrófuga"],
      process: ["Reparación de grietas existentes", "Aplicación de base adherente", "Triple capa cruzada de impermeabilizante"],
      benefits: "Protección definitiva para techos y muros exteriores, evitando filtraciones y humedad interna."
    }
  },
  {
    id: "04",
    title: "Resinas & Barnices",
    description: "Tratamientos de protección con resinas epóxicas y barnices de alto brillo o mate profundo.",
    icon: <Sparkles className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
    details: {
      features: ["Resistencia extrema a rayones", "Realce natural de vetas en madera", "Acabados espejo o mate profundo"],
      process: ["Pulido fino de superficie", "Descontaminación total", "Aplicación controlada de resina/barniz"],
      benefits: "Protección de lujo para pisos y maderas, garantizando una estética premium y fácil mantenimiento."
    }
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [notification, setNotification] = useState<{ city: string, time: string } | null>(null);

  useEffect(() => {
    const cities = ["Limpio", "Asunción", "Luque", "Mariano R. Alonso", "San Lorenzo", "Lambaré"];
    const showNotification = () => {
      const city = cities[Math.floor(Math.random() * cities.length)];
      setNotification({ city, time: "hace 2 min" });
      setTimeout(() => setNotification(null), 5000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) showNotification();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const whatsappNumber = "0984921554";
  const whatsappLink = `https://wa.me/595984921554`;

  return (
    <div ref={containerRef} className="relative bg-[#0a0a0a] text-white selection:bg-emerald-500/30 cursor-none">
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-500/50 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        animate={{ 
          x: cursorPos.x - 16, 
          y: cursorPos.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(16, 185, 129, 0.1)" : "transparent"
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-emerald-500 rounded-full" />
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 noise-bg pointer-events-none z-50" />
      
      {/* Live Notification Toast */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: notification ? 24 : -400, opacity: notification ? 1 : 0 }}
        className="fixed bottom-32 left-0 z-[110] hidden md:block"
      >
        <div className="glass-panel p-4 rounded-2xl border-emerald-500/20 flex items-center gap-4 shadow-2xl">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
            <Users size={20} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">Solicitud Reciente</div>
            <div className="text-xs font-bold">Alguien en <span className="text-emerald-500">{notification?.city}</span> pidió un presupuesto</div>
          </div>
        </div>
      </motion.div>
      
      {/* Immersive Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[60] px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-8 py-4 rounded-full border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">
              PA
            </div>
            <span className="font-serif text-lg tracking-tight font-medium">Pinturas & Acabados</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {["Servicios", "Nosotros", "Procesos", "Testimonios", "FAQ", "Contacto"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors"
            >
              Presupuesto
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-24 left-6 right-6 glass-panel p-8 rounded-3xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic">Servicios</a>
              <a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic">Nosotros</a>
              <a href="#procesos" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic">Procesos</a>
              <a href="#testimonios" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic">Testimonios</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic">FAQ</a>
              <a href={whatsappLink} className="text-2xl font-serif italic text-emerald-400">WhatsApp</a>
              <a 
                href="https://www.facebook.com/share/17eK6YPb9d/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)} 
                className="text-2xl font-serif italic text-blue-400"
              >
                Facebook
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-[1px] w-12 bg-emerald-500" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-emerald-500">
                    Estándar de Calidad Hermética
                  </span>
                </div>
                <h1 className="font-serif text-[clamp(2.5rem,10vw,8rem)] leading-[0.85] tracking-tighter mb-12">
                  ACABADOS <br />
                  <span className="italic text-white/30">QUE PERDURAN.</span>
                </h1>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <p className="text-lg text-white/40 leading-relaxed font-light">
                    Especialistas en la aplicación técnica de recubrimientos de alta gama. 
                    Nuestra metodología garantiza una terminación hermética y una estética impecable.
                  </p>
                <div className="flex flex-wrap gap-6 mt-12">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="bg-emerald-500 text-black px-10 py-5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-all hover:scale-105 active:scale-95"
                  >
                    Solicitar Presupuesto
                  </a>
                  <a 
                    href="#servicios"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="glass-panel text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
                  >
                    Ver Servicios
                  </a>
                </div>

                  <div className="flex gap-12 mt-16 pt-12 border-t border-white/5">
                    {[
                      { val: "524", label: "Proyectos", isCounter: true },
                      { val: "15+", label: "Años", isCounter: false },
                      { val: "100%", label: "Garantía", isCounter: false }
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-3xl font-serif italic mb-1">
                          {stat.isCounter ? (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              524
                            </motion.span>
                          ) : stat.val}
                        </div>
                        <div className="text-[8px] uppercase tracking-widest font-bold text-white/30">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative group"
              >
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Luxury Interior"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Technical HUD Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-8 right-8 text-right">
                      <div className="text-[8px] font-mono text-emerald-500 uppercase tracking-widest mb-1">Surface Analysis</div>
                      <div className="text-xs font-mono text-white/40">99.8% Purity</div>
                    </div>
                    <div className="absolute bottom-8 right-8">
                      <div className="w-12 h-12 border-r border-b border-emerald-500/30" />
                    </div>
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-emerald-500/10 animate-scan" />
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 glass-panel rounded-full flex flex-col items-center justify-center text-center p-6 animate-float">
                  <div className="text-4xl font-serif italic mb-1">15+</div>
                  <div className="text-[8px] uppercase tracking-widest font-bold text-white/40">Años de Maestría</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Bento Grid Style */}
      <section id="servicios" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-emerald-500 mb-6">Portafolio de Especialidades</h2>
              <h3 className="font-serif text-[clamp(2.5rem,8vw,4.5rem)] leading-none tracking-tight">
                SOLUCIONES <br />
                <span className="italic text-white/20">TÉCNICAS.</span>
              </h3>
            </div>
            <p className="text-white/40 max-w-xs text-sm leading-relaxed">
              Desde la preparación estructural hasta el acabado final, cada paso es ejecutado con rigor técnico.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer ${
                  index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                <div className="p-10 h-full flex flex-col justify-between min-h-[400px]">
                  <div>
                    <div className="flex items-center justify-between mb-12">
                      <span className="font-mono text-xs text-emerald-500/50">{service.id}</span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                        {service.icon}
                      </div>
                    </div>
                    <h4 className="text-3xl font-serif italic mb-4">{service.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                      {service.description}
                    </p>
                  </div>
                  
                  <div 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="mt-12 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/20 group-hover:text-emerald-500 transition-colors"
                  >
                    Explorar Detalle <ChevronRight size={12} />
                  </div>
                </div>
                
                {/* Image Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedService(null)}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-[95%] max-w-4xl max-h-[90vh] glass-panel rounded-[2rem] md:rounded-[3rem] overflow-hidden border-white/10 flex flex-col lg:flex-row"
          >
            <button 
              onClick={() => setSelectedService(null)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-black transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="w-full lg:w-1/2 h-48 md:h-64 lg:h-auto relative overflow-hidden shrink-0">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                <span className="font-mono text-[10px] md:text-xs text-emerald-500 mb-2 md:mb-4 block">{selectedService.id}</span>
                <h3 className="text-3xl md:text-5xl font-serif italic">{selectedService.title}</h3>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 overflow-y-auto">
              <div className="mb-12">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-500 mb-6">Descripción</h4>
                <p className="text-white/60 leading-relaxed italic font-serif text-lg md:text-xl">
                  "{selectedService.details.benefits}"
                </p>
              </div>

                <div className="grid gap-12">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6">Características Clave</h4>
                    <div className="space-y-4">
                      {selectedService.details.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          <span className="text-sm text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6">Proceso de Aplicación</h4>
                    <div className="space-y-6">
                      {selectedService.details.process.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="font-mono text-xs text-emerald-500/40">{i + 1}</span>
                          <span className="text-sm text-white/60 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex flex-wrap gap-4">
                  <a 
                    href={whatsappLink}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="inline-flex items-center gap-4 bg-emerald-500 text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    Consultar por este servicio
                    <ArrowUpRight size={16} />
                  </a>
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: selectedService.title,
                          text: selectedService.description,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Enlace copiado al portapapeles");
                      }
                    }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="inline-flex items-center gap-4 glass-panel text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
                  >
                    Compartir
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

      {/* Technical Breakdown Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square glass-panel rounded-[4rem] border-white/5 p-12 flex flex-col justify-center gap-8">
                  {[
                    { layer: "03", title: "Capa de Sellado Hermético", desc: "Barrera hidrófuga que impide el paso del agua pero permite la transpiración.", color: "bg-emerald-500" },
                    { layer: "02", title: "Base de Nivelación", desc: "Enduido plástico de alta densidad para una planimetría perfecta.", color: "bg-white/20" },
                    { layer: "01", title: "Imprimación Técnica", desc: "Puente de adherencia que consolida el sustrato original.", color: "bg-white/10" }
                  ].map((layer, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex gap-6 group"
                    >
                      <div className={`w-12 h-12 rounded-xl ${layer.color} flex items-center justify-center font-mono text-xs text-black font-bold shrink-0`}>
                        {layer.layer}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1 group-hover:text-emerald-500 transition-colors">{layer.title}</h4>
                        <p className="text-xs text-white/40 leading-relaxed">{layer.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-emerald-500/10 rounded-full animate-spin-slow" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-emerald-500 mb-8">Ingeniería de Acabado</h2>
              <h3 className="font-serif text-[clamp(2.5rem,8vw,4.5rem)] mb-12 leading-tight">
                CAPAS DE <br />
                <span className="italic text-white/30">PERFECCIÓN.</span>
              </h3>
              <p className="text-white/50 text-lg leading-relaxed mb-12">
                No solo pintamos; construimos una armadura estética para tu hogar. Cada capa cumple una función técnica específica para garantizar la durabilidad hermética.
              </p>
              <div className="flex items-center gap-4 p-6 glass-panel rounded-3xl border-emerald-500/20">
                <ShieldCheck className="text-emerald-500 w-8 h-8" />
                <div className="text-sm font-medium">Garantía de integridad estructural por 5 años.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-32 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-emerald-500 mb-6">Resultados Reales</h2>
              <h3 className="font-serif text-[clamp(1.8rem,8vw,4.5rem)] leading-none tracking-tight">
                EL PODER DE LA <br />
                <span className="italic text-white/20">TRANSFORMACIÓN.</span>
              </h3>
            </div>
            <p className="text-white/40 max-w-xs text-sm leading-relaxed">
              Visualiza el impacto de nuestro estándar hermético en proyectos reales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Fachada Residencial",
                before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
                after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
                desc: "Restauración total con sellado hidrófugo y pintura de alta densidad."
              },
              {
                title: "Interiores de Lujo",
                before: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
                after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
                desc: "Nivelación de muros con enduido plástico y acabado mate profundo."
              }
            ].map((project, i) => (
              <div key={i} className="group relative">
                <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 relative group/ba">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full relative overflow-hidden border-r border-white/20">
                      <img src={project.before} alt="Before" className="w-full h-full object-cover grayscale" />
                      <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[8px] uppercase tracking-widest font-bold">Antes</div>
                    </div>
                    <div className="w-1/2 h-full relative overflow-hidden">
                      <img src={project.after} alt="After" className="w-full h-full object-cover" />
                      <div className="absolute top-6 right-6 px-3 py-1 bg-emerald-500 rounded-full text-[8px] uppercase tracking-widest font-bold text-black">Después</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Technical HUD Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/ba:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 border-[20px] border-emerald-500/5" />
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-emerald-500/20 animate-scan" />
                    <div className="absolute bottom-12 left-12 font-mono text-[8px] text-emerald-500 uppercase tracking-widest">
                      Delta Analysis: +42% Durability
                    </div>
                  </div>
                </div>
                <div className="mt-8 px-4">
                  <h4 className="text-2xl font-serif italic mb-2">{project.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
              <div>
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-emerald-500 mb-8">Cobertura</h2>
                <h3 className="font-serif text-5xl lg:text-7xl mb-12 leading-tight">
                  Llegamos a <br />
                  <span className="italic text-white/30">TU ZONA.</span>
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-12">
                  Nuestra base operativa en Limpio nos permite una respuesta ágil en todo el departamento Central y alrededores.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {["Limpio", "Asunción", "Luque", "Mariano R. Alonso", "Lambaré", "San Lorenzo", "Fernando de la Mora", "Villa Elisa"].map((city) => (
                    <div 
                      key={city} 
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="flex items-center gap-3 text-sm text-white/40 hover:text-emerald-500 transition-colors cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                      {city}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-full border border-white/10 p-8 flex items-center justify-center relative animate-spin-slow">
                  <div className="absolute inset-0 border-2 border-dashed border-emerald-500/20 rounded-full" />
                  <MapPin size={48} className="text-emerald-500" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
                  <div className="w-3/4 h-3/4 bg-emerald-500/10 blur-[80px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-emerald-500 mb-8">Sobre Nosotros</h2>
              <h3 className="font-serif text-5xl lg:text-7xl mb-12 leading-tight">
                Raíces en <span className="italic text-white/30">Limpio.</span>
              </h3>
              <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-xl">
                Somos un equipo apasionado por la excelencia en acabados, operando desde el corazón de <strong>Isla Aranda, Limpio</strong>. 
                Nuestra misión es elevar el estándar de la construcción en Paraguay a través de técnicas de sellado hermético y una estética impecable.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6 glass-panel p-6 rounded-3xl border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">Ubicación Central</div>
                    <div className="text-sm font-medium">Isla Aranda, Limpio — Paraguay</div>
                  </div>
                </div>
                
                <a 
                  href="https://www.google.com/maps/search/Isla+Aranda,+Limpio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-emerald-500 text-xs uppercase tracking-[0.3em] font-bold hover:gap-6 transition-all"
                >
                  Ver en Google Maps
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5!2d-57.4!3d-25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzAwLjAiUyA1N8KwMjQnMDAuMCJX!5e0!3m2!1ses!2spy!4v1700000000000!5m2!1ses!2spy"
                  className="absolute inset-0 w-full h-full grayscale invert opacity-50 contrast-125 group-hover:opacity-80 transition-opacity"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-panel p-8 rounded-3xl border-emerald-500/20 z-10">
                <div className="text-4xl font-serif italic mb-2">100%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-emerald-500">Compromiso Local</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The "Hermetic" Philosophy - Technical Dashboard Style */}
      <section id="procesos" className="py-32 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-emerald-500 mb-8">Filosofía de Trabajo</h2>
              <h3 className="font-serif text-5xl lg:text-7xl mb-12 leading-tight">
                EL ARTE DE LO <br />
                <span className="italic text-white/30">HERMÉTICO.</span>
              </h3>
              <div className="space-y-12">
                {[
                  {
                    title: "Sellado Estructural",
                    desc: "Eliminamos porosidad y microfisuras antes de la aplicación para garantizar la integridad del sustrato.",
                    icon: <Maximize className="w-5 h-5" />
                  },
                  {
                    title: "Pigmentación Pura",
                    desc: "Utilizamos bases de alta densidad con carga de sólidos superior para colores vibrantes y resistentes al tiempo.",
                    icon: <Zap className="w-5 h-5" />
                  },
                  {
                    title: "Control de Humedad",
                    desc: "Implementamos barreras hidrófugas de última generación que permiten la transpiración natural del muro.",
                    icon: <Droplets className="w-5 h-5" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center shrink-0 border-emerald-500/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] border border-white/10 p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 animate-pulse" />
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000" 
                    alt="Technical Work"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* Technical Overlays */}
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                    <div className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-[8px] font-mono uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Scanning Surface
                    </div>
                    <div className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-[8px] font-mono uppercase tracking-widest">
                      Density: 98.4%
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-3xl border-emerald-500/30">
                <div className="text-xs uppercase tracking-widest font-bold text-white/40 mb-4">Estado del Servicio</div>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-3xl font-serif italic">100%</div>
                    <div className="text-[8px] uppercase tracking-widest font-bold text-emerald-500">Hermético</div>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div>
                    <div className="text-3xl font-serif italic">0.0</div>
                    <div className="text-[8px] uppercase tracking-widest font-bold text-white/40">Margen Error</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Award className="w-6 h-6" />, label: "Garantía Real", sub: "Respaldo total" },
              { icon: <ShieldCheck className="w-6 h-6" />, label: "Materiales Pro", sub: "Marcas Premium" },
              { icon: <Clock className="w-6 h-6" />, label: "Puntualidad", sub: "Plazos cumplidos" },
              { icon: <Users className="w-6 h-6" />, label: "Atención 1 a 1", sub: "Asesoría directa" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-emerald-500">
                  {item.icon}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold mb-2">{item.label}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-emerald-500 mb-6">Testimonios</h2>
            <h3 className="font-serif text-[clamp(2.5rem,8vw,4.5rem)] italic">Voces de Confianza.</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Excelente trabajo, muy profesionales y limpios. El acabado hermético realmente se nota en la durabilidad.",
                author: "Maria G.",
                role: "Residencial"
              },
              {
                text: "Fabián es un experto. Transformó mi fachada por completo con un texturado impecable. 100% recomendado.",
                author: "Juan R.",
                role: "Propietario"
              },
              {
                text: "La atención al detalle es impresionante. No dejaron ni una gota fuera de lugar. Calidad superior.",
                author: "Lucia M.",
                role: "Arquitecta"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-10 rounded-[2.5rem] border-white/5 relative group hover:bg-white/[0.08] transition-all duration-500"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-white/60 leading-relaxed italic mb-8 font-serif text-lg">
                  "{item.text}"
                </p>
                <div>
                  <div className="font-bold text-sm uppercase tracking-widest">{item.author}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">{item.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-emerald-500 mb-6">Preguntas Frecuentes</h2>
            <h3 className="font-serif text-[clamp(2.5rem,8vw,4rem)] italic">Despeja tus Dudas.</h3>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto tiempo dura el proceso?",
                a: "Depende del tamaño del proyecto, pero usualmente entre 3 a 5 días para una residencia estándar, garantizando los tiempos de secado técnico."
              },
              {
                q: "¿Qué marcas de pintura utilizan?",
                a: "Trabajamos exclusivamente con marcas premium nacionales e internacionales con alta carga de sólidos para asegurar la durabilidad hermética."
              },
              {
                q: "¿Ofrecen garantía por el trabajo?",
                a: "Sí, todos nuestros servicios cuentan con garantía escrita tanto en la aplicación técnica como en la calidad de los materiales utilizados."
              },
              {
                q: "¿Llegan a todo el país?",
                a: "Operamos principalmente en Central (Limpio, Asunción, Luque, etc.), pero realizamos proyectos de gran envergadura en todo el territorio nacional."
              }
            ].map((item, i) => (
              <details key={i} className="group glass-panel rounded-3xl border-white/5 overflow-hidden">
                <summary 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="flex items-center justify-between p-8 cursor-pointer list-none"
                >
                  <span className="font-bold text-sm uppercase tracking-widest pr-8">{item.q}</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ChevronRight size={16} />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-white/40 text-sm leading-relaxed border-t border-white/5 pt-6">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Minimalist & Powerful */}
      <section id="contacto" className="py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-emerald-500 mb-8">Contacto</h2>
              <h3 className="font-serif text-[clamp(2.5rem,8vw,6rem)] mb-12 leading-[0.9] tracking-tighter">
                HABLEMOS DE TU <br />
                <span className="italic text-white/20">PROYECTO.</span>
              </h3>
              <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-md">
                Estamos listos para asesorarte y brindarte un presupuesto detallado sin compromiso. 
                Tu patrimonio merece el estándar hermético.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-emerald-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">WhatsApp Directo</div>
                    <a href={whatsappLink} className="text-xl font-bold hover:text-emerald-500 transition-colors">{whatsappNumber}</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-emerald-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">Base Operativa</div>
                    <div className="text-xl font-bold">Isla Aranda, Limpio</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 md:p-16 rounded-[3rem] border-white/5"
            >
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-500">
                    Respuesta en menos de 24h hábiles
                  </span>
                </div>
                <h4 className="text-2xl font-serif italic">Solicita tu Presupuesto</h4>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const service = formData.get('service');
                  const type = formData.get('type');
                  const urgency = formData.get('urgency');
                  const size = formData.get('size');
                  
                  const message = `Hola! Mi nombre es ${name}.
Me interesa el servicio de: ${service}.
Tipo de obra: ${type}.
Urgencia: ${urgency}.
Tamaño estimado: ${size}.
Espero su respuesta, gracias!`;
                  
                  window.open(`https://wa.me/595984921554?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Nombre Completo</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      placeholder="Tu nombre..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Servicio</label>
                    <select 
                      name="service"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                    >
                      {services.map(s => <option key={s.id} value={s.title} className="bg-[#0a0a0a]">{s.title}</option>)}
                      <option value="Otros" className="bg-[#0a0a0a]">Otros</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Tipo de Obra</label>
                    <select 
                      name="type" 
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                    >
                      <option value="Residencial" className="bg-[#0a0a0a]">Residencial</option>
                      <option value="Comercial" className="bg-[#0a0a0a]">Comercial</option>
                      <option value="Industrial" className="bg-[#0a0a0a]">Industrial</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Urgencia</label>
                    <select 
                      name="urgency" 
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                    >
                      <option value="Inmediata" className="bg-[#0a0a0a]">Inmediata</option>
                      <option value="15 días" className="bg-[#0a0a0a]">15 días</option>
                      <option value="1 mes+" className="bg-[#0a0a0a]">1 mes+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Tamaño</label>
                    <select 
                      name="size" 
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                    >
                      <option value="Pequeño (< 50m²)" className="bg-[#0a0a0a]">Pequeño</option>
                      <option value="Mediano (50-150m²)" className="bg-[#0a0a0a]">Mediano</option>
                      <option value="Grande (> 150m²)" className="bg-[#0a0a0a]">Grande</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-full bg-white text-black py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Enviar a WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Stats Bar */}
      <div className="bg-emerald-500 py-3 overflow-hidden whitespace-nowrap border-y border-black/10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center text-black font-mono text-[10px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Humedad Ideal: 45-65%
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Temp. Aplicación: 18-28°C
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Secado Técnico: 24h
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Adherencia: 99.9%
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer - Architectural Style */}
      <footer className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">PA</div>
                <span className="font-serif text-xl tracking-tight font-medium">Pinturas & Acabados</span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-sm mb-4">
                Elevando el estándar de la pintura profesional a través de la técnica, 
                la precisión y el compromiso con la durabilidad hermética.
              </p>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-500/60 mb-2">
                Director: Fabián Paul Sanabria
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/20">
                Isla Aranda, Limpio — Paraguay
              </div>
            </div>
            
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-8">Navegación</h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#servicios" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-emerald-500 transition-colors">Servicios</a></li>
              <li><a href="#nosotros" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-emerald-500 transition-colors">Nosotros</a></li>
              <li><a href="#procesos" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-emerald-500 transition-colors">Procesos</a></li>
              <li><a href="#testimonios" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-emerald-500 transition-colors">Testimonios</a></li>
              <li><a href="#faq" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-emerald-500 transition-colors">FAQ</a></li>
              <li><a href="#contacto" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="hover:text-emerald-500 transition-colors">Contacto</a></li>
            </ul>
            </div>

            <div>
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-8">Social</h5>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/share/17eK6YPb9d/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/20">
              © 2024 Pinturas & Acabados Profesionales — Fabián Paul Sanabria
            </div>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/20">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 group"
      >
        <div className="absolute inset-0 bg-[#25D366] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-2 py-2 rounded-full shadow-2xl shadow-emerald-500/20 border border-white/20">
          <span className="text-[10px] uppercase tracking-widest font-bold hidden md:block">Consultar Ahora</span>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#25D366]">
            <svg 
              viewBox="0 0 24 24" 
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </div>
      </motion.a>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-28 right-10 z-[90] w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
      >
        <ArrowUp size={16} />
      </motion.button>
    </div>
  );
}
