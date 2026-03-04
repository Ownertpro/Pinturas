/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
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
  Maximize2,
  Scan,
  Zap,
  Clock,
  MapPin,
  ChevronLeft,
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

const galleryImages = [
  { id: 1, url: "https://i.ibb.co/9kqqrrWN/IMG-20210803-162931.jpg", title: "Acabado Exterior" },
  { id: 2, url: "https://i.ibb.co/1f3Dh1Qg/20230331-092808.jpg", title: "Texturado en Muros" },
  { id: 3, url: "https://i.ibb.co/cXvd41J0/20230331-092754.jpg", title: "Preparación de Superficie" },
  { id: 4, url: "https://i.ibb.co/p6wzLZGT/20221108-160612.jpg", title: "Pintura de Fachada" },
  { id: 5, url: "https://i.ibb.co/DPsD1zB4/20230626-115604.jpg", title: "Impermeabilización" },
  { id: 6, url: "https://i.ibb.co/zHP9Q2kC/FB-IMG-1675023495350.jpg", title: "Detalle de Terminación" },
  { id: 7, url: "https://i.ibb.co/1J6GvhYH/FB-IMG-1675023509417.jpg", title: "Obra Residencial" },
  { id: 8, url: "https://i.ibb.co/jn1Kj89/FB-IMG-1675023455496.jpg", title: "Pintura Interior" },
  { id: 9, url: "https://i.ibb.co/pBkWzt3q/FB-IMG-1675023466134.jpg", title: "Acabado Premium" },
  { id: 10, url: "https://i.ibb.co/dw1JF40S/20221108-160349.jpg", title: "Renovación de Muros" },
  { id: 11, url: "https://i.ibb.co/dJ22MtY8/20230222-145441.jpg", title: "Tratamiento de Humedad" },
  { id: 12, url: "https://i.ibb.co/KzQ6wf4w/20230331-092732.jpg", title: "Planimetría Perfecta" },
  { id: 13, url: "https://i.ibb.co/VYDjBfk9/20230114-154625.jpg", title: "Pintura Epoxi" },
  { id: 14, url: "https://i.ibb.co/PvLz39tx/20230626-115530.jpg", title: "Protección Climática" },
  { id: 15, url: "https://i.ibb.co/gZPbY64g/FB-IMG-1675023474269.jpg", title: "Estética de Lujo" },
  { id: 16, url: "https://i.ibb.co/CK9kgwP3/20230331-092801.jpg", title: "Enduido Técnico" },
  { id: 17, url: "https://i.ibb.co/jZZHQDdN/20221108-160428.jpg", title: "Fachada Renovada" },
  { id: 18, url: "https://i.ibb.co/k2Trb9zw/20230605-071817.jpg", title: "Pintura de Altura" },
  { id: 19, url: "https://i.ibb.co/G4ySTr9T/20221119-135750.jpg", title: "Resultado Final" },
  { id: 20, url: "https://i.ibb.co/hJ3WL68W/20230314-105258.jpg", title: "Obra en Proceso" },
  { id: 21, url: "https://i.ibb.co/9LtKW8M/20221108-110313.jpg", title: "Limpieza de Obra" },
  { id: 22, url: "https://i.ibb.co/fVWsVQ67/20221119-135744.jpg", title: "Antes de Pintar" },
  { id: 23, url: "https://i.ibb.co/BHn3xjLK/20230313-101329.jpg", title: "Preparación Técnica" },
  { id: 24, url: "https://i.ibb.co/MDR0qhQ8/20221117-174053.jpg", title: "Acabado de Fachada" },
  { id: 25, url: "https://i.ibb.co/S4ypw9SK/20221119-135822.jpg", title: "Detalle de Obra" },
  { id: 26, url: "https://i.ibb.co/YThHjhRF/20221108-110244.jpg", title: "Pintura de Muros" },
  { id: 27, url: "https://i.ibb.co/KzSnkZzY/20221108-160522.jpg", title: "Terminación Profesional" }
];

const services = [
  {
    id: "01",
    title: "Pintura Interior & Exterior",
    description: "Pintor de confianza para acabados de lujo en interiores y exteriores con pigmentos de máxima durabilidad.",
    icon: <Paintbrush className="w-5 h-5" />,
    image: "https://i.ibb.co/jn1Kj89/FB-IMG-1675023455496.jpg",
    details: {
      features: ["Pigmentos de alta resistencia UV", "Acabado lavable y antimanchas", "Trabajo fino y responsable"],
      process: ["Limpieza profunda de superficie", "Aplicación de imprimante sellador", "Doble capa de pintura premium"],
      benefits: "Ideal para residencias que buscan un look sofisticado y una protección duradera contra el clima."
    }
  },
  {
    id: "02",
    title: "Texturado & Enduido",
    description: "Preparación técnica de superficies con enduido plástico para una planimetría perfecta y texturas artesanales.",
    icon: <Layers className="w-5 h-5" />,
    image: "https://i.ibb.co/1f3Dh1Qg/20230331-092808.jpg",
    details: {
      features: ["Nivelación milimétrica con enduido", "Texturas personalizadas (Travertino, Rulato, etc.)", "Ocultamiento total de imperfecciones"],
      process: ["Lijado mecánico de base", "Aplicación de enduido plástico", "Texturado artesanal con llana"],
      benefits: "Transforma paredes irregulares en superficies de diseño con alta resistencia estructural."
    }
  },
  {
    id: "03",
    title: "Impermeabilizado",
    description: "Sistemas de sellado hermético y pintura impermeabilizante para protección total contra agentes climáticos.",
    icon: <Droplets className="w-5 h-5" />,
    image: "https://i.ibb.co/DPsD1zB4/20230626-115604.jpg",
    details: {
      features: ["Membrana líquida de alta elasticidad", "Sellado de microfisuras", "Barrera 100% hidrófuga"],
      process: ["Reparación de grietas existentes", "Aplicación de base adherente", "Triple capa cruzada de impermeabilizante"],
      benefits: "Protección definitiva para techos y muros exteriores, evitando filtraciones y humedad interna."
    }
  },
  {
    id: "04",
    title: "Pintura Epoxi & Barnices",
    description: "Tratamientos de protección con pintura epoxi de alta resistencia y barnices de alto brillo o mate profundo.",
    icon: <Sparkles className="w-5 h-5" />,
    image: "https://i.ibb.co/VYDjBfk9/20230114-154625.jpg",
    details: {
      features: ["Pintura epoxi de alta resistencia", "Realce natural de vetas en madera", "Acabados espejo o mate profundo"],
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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
    <div ref={containerRef} className="relative bg-[#f8f9fa] text-slate-900 selection:bg-[#3c6994]/30 cursor-none overflow-x-hidden">
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
        <div className="bg-white p-4 rounded-xl border border-[#e9ecef] flex items-center gap-4 shadow-lg">
          <div className="w-10 h-10 rounded-full bg-[#3c6994]/10 flex items-center justify-center text-[#3c6994]">
            <Users size={20} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Solicitud Reciente</div>
            <div className="text-xs font-bold">Alguien en <span className="text-[#3c6994]">{notification?.city}</span> pidió un presupuesto</div>
          </div>
        </div>
      </motion.div>
      
      {/* Immersive Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3c6994]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#3c6994]/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[60] px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white px-8 py-3 rounded-xl border border-[#e9ecef] shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#3c6994] rounded-lg flex items-center justify-center text-white font-bold text-xs">
              EK
            </div>
            <span className="font-sans text-lg tracking-tight font-bold text-slate-900">Ekopia</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Servicios", "Galería", "Nosotros", "Procesos", "Testimonios", "FAQ", "Presupuesto"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase() === 'presupuesto' ? 'contacto' : item.toLowerCase() === 'galería' ? 'galeria' : item.toLowerCase()}`} 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-[#3c6994] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-20 left-6 right-6 bg-white p-8 rounded-xl md:hidden shadow-xl border border-[#e9ecef]"
          >
            <div className="flex flex-col gap-6">
              <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-slate-900">Servicios</a>
              <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-slate-900">Galería</a>
              <a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-slate-900">Nosotros</a>
              <a href="#procesos" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-slate-900">Procesos</a>
              <a href="#testimonios" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-slate-900">Testimonios</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-slate-900">FAQ</a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-[#3c6994]">Presupuesto</a>
              <a href={whatsappLink} className="text-xl font-bold text-[#3c6994]">WhatsApp</a>
              <a 
                href="https://www.facebook.com/share/17eK6YPb9d/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)} 
                className="text-xl font-bold text-[#3c6994]"
              >
                Facebook
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Professional Community Style */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-white border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3c6994]/10 rounded-full mb-8">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#3c6994]">
                    Estándar de Calidad Profesional
                  </span>
                </div>
                <h1 className="font-sans text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.1] tracking-tight mb-8 text-slate-900">
                  Ekopia: El Arte de Pintar tu <span className="text-[#3c6994]">Espacio.</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">
                  Especialistas responsables en la aplicación técnica de recubrimientos premium: 
                  texturado, enduido, pintura epoxi e impermeabilizados con acabados finos.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="bg-[#3c6994] text-white px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#2d4f70] transition-all shadow-lg shadow-[#3c6994]/20"
                  >
                    Solicitar Presupuesto
                  </a>
                  <a 
                    href="#servicios"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="bg-white border border-[#e9ecef] text-slate-900 px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-slate-50 transition-all shadow-sm"
                  >
                    Nuestros Servicios
                  </a>
                </div>

                <div className="flex gap-12 mt-16 pt-8 border-t border-[#e9ecef]">
                  {[
                    { val: "524", label: "Proyectos Realizados" },
                    { val: "15+", label: "Años de Experiencia" },
                    { val: "100%", label: "Garantía de Calidad" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-slate-900 mb-1">{stat.val}</div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#e9ecef] shadow-2xl bg-white">
                  <img 
                    src="https://i.ibb.co/1J6GvhYH/FB-IMG-1675023509417.jpg" 
                    alt="Ekopia High-End Finish"
                    className="w-full h-full object-cover transition-all duration-700"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Minimalist & Powerful (Moved Up) */}
      <section id="contacto" className="py-32 relative overflow-hidden bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-8">Presupuesto</h2>
              <h3 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold mb-12 leading-[1.1] tracking-tight text-slate-900">
                Hablemos de tu <br />
                <span className="text-[#3c6994]">Proyecto.</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-md font-medium">
                Estamos listos para asesorarte y brindarte un presupuesto detallado sin compromiso. 
                Tu patrimonio merece el estándar de calidad profesional.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#e9ecef] flex items-center justify-center text-[#3c6994] shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">WhatsApp Directo</div>
                    <a href={whatsappLink} className="text-xl font-bold hover:text-[#3c6994] transition-colors text-slate-900">{whatsappNumber}</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#e9ecef] flex items-center justify-center text-[#3c6994] shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Base Operativa</div>
                    <div className="text-xl font-bold text-slate-900">Isla Aranda, Limpio</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-xl border border-[#e9ecef] shadow-xl"
            >
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#3c6994] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#3c6994]">
                    Respuesta en menos de 24h hábiles
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Solicita tu Presupuesto</h4>
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
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Nombre Completo</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      placeholder="Tu nombre..."
                      className="w-full bg-[#f8f9fa] border border-[#e9ecef] rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors text-slate-900 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Servicio</label>
                    <select 
                      name="service"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="w-full bg-[#f8f9fa] border border-[#e9ecef] rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors appearance-none text-slate-900 font-medium"
                    >
                      {services.map(s => <option key={s.id} value={s.title} className="bg-white">{s.title}</option>)}
                      <option value="Otros" className="bg-white">Otros</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Tipo de Obra</label>
                    <select 
                      name="type" 
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="w-full bg-[#f8f9fa] border border-[#e9ecef] rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors appearance-none text-slate-900 font-medium"
                    >
                      <option value="Residencial" className="bg-white">Residencial</option>
                      <option value="Comercial" className="bg-white">Comercial</option>
                      <option value="Industrial" className="bg-white">Industrial</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Urgencia</label>
                    <select 
                      name="urgency" 
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="w-full bg-[#f8f9fa] border border-[#e9ecef] rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors appearance-none text-slate-900 font-medium"
                    >
                      <option value="Inmediata" className="bg-white">Inmediata</option>
                      <option value="15 días" className="bg-white">15 días</option>
                      <option value="1 mes+" className="bg-white">1 mes+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Tamaño</label>
                    <select 
                      name="size" 
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="w-full bg-[#f8f9fa] border border-[#e9ecef] rounded-lg px-6 py-4 focus:outline-none focus:border-[#3c6994] transition-colors appearance-none text-slate-900 font-medium"
                    >
                      <option value="Pequeño (< 50m²)" className="bg-white">Pequeño</option>
                      <option value="Mediano (50-150m²)" className="bg-white">Mediano</option>
                      <option value="Grande (> 150m²)" className="bg-white">Grande</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-full bg-[#3c6994] text-white py-5 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#2d4f70] transition-all shadow-lg shadow-[#3c6994]/20"
                >
                  Enviar a WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Bento Grid Style */}
      <section id="servicios" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Portafolio de Especialidades</h2>
              <h3 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-none tracking-tight text-slate-900">
                Soluciones <br />
                <span className="text-[#3c6994]">Técnicas.</span>
              </h3>
            </div>
            <p className="text-slate-500 max-w-xs text-sm leading-relaxed font-medium">
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
                className={`group relative overflow-hidden rounded-xl border border-[#e9ecef] bg-white hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                <div className="p-10 h-full flex flex-col justify-between min-h-[400px]">
                  <div>
                    <div className="flex items-center justify-between mb-12">
                      <span className="font-mono text-xs text-[#3c6994]/50">{service.id}</span>
                      <div className="w-10 h-10 rounded-lg border border-[#e9ecef] flex items-center justify-center group-hover:bg-[#3c6994] group-hover:text-white transition-all shadow-sm">
                        {service.icon}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-xs font-medium">
                      {service.description}
                    </p>
                  </div>
                  
                  <div 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="mt-12 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-[#3c6994] transition-colors"
                  >
                    Explorar Detalle <ChevronRight size={12} />
                  </div>
                </div>
                
                {/* Image Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-[95%] max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden border border-[#e9ecef] flex flex-col lg:flex-row shadow-2xl"
          >
            <button 
              onClick={() => setSelectedService(null)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#3c6994] transition-all z-20 shadow-lg"
            >
              <X size={20} />
            </button>

            <div className="lg:w-1/2 relative min-h-[250px] lg:min-h-full bg-slate-100">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="font-mono text-[10px] md:text-xs text-[#3c6994] mb-2 md:mb-4 block font-bold uppercase tracking-widest">Servicio {selectedService.id}</span>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{selectedService.title}</h3>
              </div>
            </div>

            <div className="lg:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="mb-12">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-6">Descripción</h4>
                <p className="text-slate-600 leading-relaxed font-medium text-lg md:text-xl">
                  {selectedService.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Características</h4>
                  <ul className="space-y-4">
                    {selectedService.details.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 size={16} className="text-[#3c6994] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Proceso</h4>
                  <div className="space-y-6">
                    {selectedService.details.process.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="font-mono text-xs text-[#3c6994]/40 font-bold">{i + 1}</span>
                        <span className="text-sm text-slate-600 leading-relaxed font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-[#e9ecef] flex flex-wrap gap-4">
                <a 
                  href={whatsappLink}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="inline-flex items-center gap-4 bg-[#3c6994] text-white px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#2d4f70] transition-all shadow-lg shadow-[#3c6994]/20"
                >
                  Consultar Ahora
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
                  className="inline-flex items-center gap-4 bg-[#f8f9fa] border border-[#e9ecef] text-slate-900 px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all"
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
      <section className="py-32 relative bg-white border-y border-[#e9ecef] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square bg-white rounded-xl border border-[#e9ecef] p-12 flex flex-col justify-center gap-8 shadow-xl">
                  {[
                    { layer: "03", title: "Capa de Sellado Hermético", desc: "Barrera hidrófuga que impide el paso del agua pero permite la transpiración.", color: "bg-[#3c6994]" },
                    { layer: "02", title: "Base de Nivelación", desc: "Enduido plástico de alta densidad para una planimetría perfecta.", color: "bg-slate-200" },
                    { layer: "01", title: "Imprimación Técnica", desc: "Puente de adherencia que consolida el sustrato original.", color: "bg-slate-100" }
                  ].map((layer, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex gap-6 group"
                    >
                      <div className={`w-12 h-12 rounded-lg ${layer.color} flex items-center justify-center font-mono text-xs ${i === 0 ? 'text-white' : 'text-slate-900'} font-bold shrink-0 shadow-sm`}>
                        {layer.layer}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1 group-hover:text-[#3c6994] transition-colors text-slate-900">{layer.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{layer.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#3c6994]/10 rounded-full animate-spin-slow" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-8">Ingeniería de Acabado</h2>
              <h3 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold mb-12 leading-tight text-slate-900">
                Capas de <br />
                <span className="text-[#3c6994]">Perfección.</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
                No solo pintamos; construimos una armadura estética para tu hogar. Cada capa cumple una función técnica específica para garantizar la durabilidad profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Gallery Section */}
      <section id="galeria" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Portafolio de Excelencia</h2>
            <h3 className="font-sans text-[clamp(2rem,5vw,4rem)] font-extrabold leading-tight tracking-tight text-slate-900">
              Nuestros Trabajos en <span className="text-[#3c6994]">Acabados Finos.</span>
            </h3>
            <p className="mt-6 text-slate-500 max-w-xl mx-auto text-sm font-medium">
              Haz clic en cualquier imagen para abrir el visor de detalle y apreciar la calidad de terminación original.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 4) * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => setSelectedImageIndex(i)}
                className="relative group overflow-hidden rounded-xl border border-[#e9ecef] bg-white break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#3c6994] mb-2">Proyecto Realizado</div>
                  <h4 className="text-white font-bold text-lg">{image.title}</h4>
                  <div className="mt-4 flex items-center gap-2 text-white/70 text-[10px] uppercase tracking-widest font-bold">
                    <Maximize2 size={12} />
                    Ver Detalle
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-10 p-2 bg-white/5 rounded-full backdrop-blur-md"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X size={24} />
            </button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 p-4 bg-white/5 rounded-full backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 p-4 bg-white/5 rounded-full backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
              }}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative max-w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[selectedImageIndex].url} 
                alt={galleryImages[selectedImageIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="mt-10 text-center">
                <div className="text-[#3c6994] text-[10px] uppercase tracking-[0.6em] font-bold mb-3">Ekopia Acabados Finos</div>
                <h4 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{galleryImages[selectedImageIndex].title}</h4>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="h-[1px] w-12 bg-white/10" />
                  <p className="text-white/30 text-xs uppercase tracking-widest font-medium">Terminación de Excelencia</p>
                  <div className="h-[1px] w-12 bg-white/10" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Area Section */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl border border-[#e9ecef] overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-8">Cobertura Estratégica</h2>
                <h3 className="font-sans text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-8 leading-tight text-slate-900">
                  Donde la Calidad <br />
                  <span className="text-[#3c6994]">no tiene Fronteras.</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
                  Operamos en los puntos más exigentes del país, llevando nuestro estándar de terminación profesional a cada proyecto.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { city: "Asunción", status: "Alta Prioridad" },
                    { city: "Gran Asunción", status: "Cobertura Total" },
                    { city: "Limpio", status: "Base Operativa" },
                    { city: "Luque", status: "Zona Activa" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2 text-[#3c6994]">
                        <MapPin size={14} className="fill-current" />
                        <span className="font-bold text-slate-900">{item.city}</span>
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{item.status}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] lg:h-auto bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 border border-[#3c6994]/20 rounded-full animate-ping" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin size={48} className="text-[#3c6994]" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
                  <div className="w-3/4 h-3/4 bg-[#3c6994]/10 blur-[80px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-32 relative bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-8">Sobre Nosotros</h2>
              <h3 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold mb-12 leading-tight text-slate-900">
                Raíces en <span className="text-[#3c6994]">Limpio.</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-xl font-medium">
                Somos un equipo apasionado por la excelencia en acabados, operando desde el corazón de <strong>Isla Aranda, Limpio</strong>. 
                Nuestra misión es elevar el estándar de la construcción en Paraguay a través de técnicas de sellado profesional y una estética impecable.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6 bg-white p-6 rounded-xl border border-[#e9ecef] shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-[#3c6994]/10 flex items-center justify-center text-[#3c6994]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Ubicación Central</div>
                    <div className="text-sm font-bold text-slate-900">Isla Aranda, Limpio — Paraguay</div>
                  </div>
                </div>
                
                <a 
                  href="https://www.google.com/maps/search/Isla+Aranda,+Limpio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-[#3c6994] text-xs uppercase tracking-[0.3em] font-bold hover:gap-6 transition-all"
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
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-[#e9ecef] relative shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8841416551!2d-57.4833!3d-25.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da5903875c617%3A0x639686a68812830!2sLimpio!5e0!3m2!1ses!2spy!4v1710000000000!5m2!1ses!2spy"
                  className="absolute inset-0 w-full h-full transition-opacity duration-700"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl border border-[#e9ecef] z-10 shadow-2xl">
                <div className="text-4xl font-extrabold mb-2 text-slate-900">100%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#3c6994]">Compromiso Local</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The "Hermetic" Philosophy - Technical Dashboard Style */}
      <section id="procesos" className="py-32 bg-white border-y border-[#e9ecef] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-8">Filosofía de Trabajo</h2>
              <h3 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold mb-12 leading-tight text-slate-900">
                El Arte de lo <br />
                <span className="text-[#3c6994]">Profesional.</span>
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
                    <div className="w-14 h-14 rounded-lg bg-white border border-[#e9ecef] flex items-center justify-center shrink-0 text-[#3c6994] shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-xl border border-[#e9ecef] p-4 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[#3c6994]/5 animate-pulse" />
                <div className="relative h-full w-full rounded-lg overflow-hidden border border-[#e9ecef] bg-slate-50">
                  <img 
                    src="https://i.ibb.co/zHP9Q2kC/FB-IMG-1675023495350.jpg" 
                    alt="Technical Painting Tools"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Technical Overlays */}
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-md border border-[#e9ecef] text-[8px] font-mono uppercase tracking-widest flex items-center gap-2 text-slate-900 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3c6994] animate-ping" />
                      Scanning Surface
                    </div>
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-md border border-[#e9ecef] text-[8px] font-mono uppercase tracking-widest text-slate-900 font-bold">
                      Density: 98.4%
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl border border-[#e9ecef] z-10 shadow-2xl">
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">Estado del Servicio</div>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900">100%</div>
                    <div className="text-[8px] uppercase tracking-widest font-bold text-[#3c6994]">Profesional</div>
                  </div>
                  <div className="w-[1px] h-10 bg-slate-200" />
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900">0.0</div>
                    <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">Margen Error</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 border-y border-[#e9ecef] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Award className="w-6 h-6" />, label: "Garantía Real", sub: "Respaldo total" },
              { icon: <ShieldCheck className="w-6 h-6" />, label: "Materiales Pro", sub: "Marcas Premium" },
              { icon: <Clock className="w-6 h-6" />, label: "Puntualidad", sub: "Plazos cumplidos" },
              { icon: <Users className="w-6 h-6" />, label: "Atención 1 a 1", sub: "Asesoría directa" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-xl bg-white border border-[#e9ecef] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[#3c6994] shadow-sm">
                  {item.icon}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold mb-2 text-slate-900">{item.label}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-32 relative overflow-hidden bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Testimonios</h2>
            <h3 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-slate-900">Voces de Confianza.</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Excelente trabajo, muy profesionales y limpios. El acabado realmente se nota en la durabilidad.",
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
                className="bg-white p-10 rounded-xl border border-[#e9ecef] relative group hover:shadow-xl transition-all duration-500"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-[#3c6994]/10 group-hover:text-[#3c6994]/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#3c6994] text-[#3c6994]" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 font-medium text-lg">
                  "{item.text}"
                </p>
                <div>
                  <div className="font-bold text-sm uppercase tracking-widest text-slate-900">{item.author}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">{item.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#3c6994] mb-6">Preguntas Frecuentes</h2>
            <h3 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-slate-900">Despeja tus Dudas.</h3>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto tiempo dura el proceso?",
                a: "Depende del tamaño del proyecto, pero usualmente entre 3 a 5 días para una residencia estándar, garantizando los tiempos de secado técnico."
              },
              {
                q: "¿Qué marcas de pintura utilizan?",
                a: "Trabajamos exclusivamente con marcas premium nacionales e internacionales con alta carga de sólidos para asegurar la durabilidad profesional."
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
              <details key={i} className="group bg-[#f8f9fa] rounded-xl border border-[#e9ecef] overflow-hidden shadow-sm">
                <summary 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="flex items-center justify-between p-8 cursor-pointer list-none bg-white"
                >
                  <span className="font-bold text-sm uppercase tracking-widest pr-8 text-slate-900">{item.q}</span>
                  <div className="w-8 h-8 rounded-lg border border-[#e9ecef] flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ChevronRight size={16} />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-slate-600 text-sm leading-relaxed border-t border-[#e9ecef] pt-6 bg-[#f8f9fa] font-medium">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stats Bar */}
      <div className="bg-[#3c6994] py-3 overflow-hidden whitespace-nowrap border-y border-[#3c6994]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center text-white font-mono text-[10px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Humedad Ideal: 45-65%
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Temp. Aplicación: 18-28°C
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Secado Técnico: 24h
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Adherencia: 99.9%
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer - Architectural Style */}
      <footer className="py-24 border-t border-[#e9ecef] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-[#3c6994] rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-[#3c6994]/20">EK</div>
                <span className="font-sans text-xl tracking-tight font-extrabold text-slate-900 uppercase">Ekopia</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-4 font-medium">
                Elevando el estándar de la pintura profesional a través de la técnica, 
                la precisión y el compromiso con la calidad profesional.
              </p>
              <div className="text-xs font-bold uppercase tracking-widest text-[#3c6994] mb-2">
                Director: Fabián Paul Sanabria
              </div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                Isla Aranda, Limpio — Paraguay
              </div>
            </div>
            
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-8">Navegación</h5>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#servicios" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="text-slate-600 hover:text-[#3c6994] transition-colors">Servicios</a></li>
              <li><a href="#nosotros" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="text-slate-600 hover:text-[#3c6994] transition-colors">Nosotros</a></li>
              <li><a href="#procesos" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="text-slate-600 hover:text-[#3c6994] transition-colors">Procesos</a></li>
              <li><a href="#testimonios" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="text-slate-600 hover:text-[#3c6994] transition-colors">Testimonios</a></li>
              <li><a href="#faq" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="text-slate-600 hover:text-[#3c6994] transition-colors">FAQ</a></li>
              <li><a href="#contacto" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="text-slate-600 hover:text-[#3c6994] transition-colors">Contacto</a></li>
            </ul>
            </div>

            <div>
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-8">Social</h5>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/share/17eK6YPb9d/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-12 h-12 rounded-lg border border-[#e9ecef] flex items-center justify-center hover:bg-[#3c6994] hover:text-white transition-all text-slate-600 shadow-sm"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-12 h-12 rounded-lg border border-[#e9ecef] flex items-center justify-center hover:bg-[#3c6994] hover:text-white transition-all text-slate-600 shadow-sm"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-12 h-12 rounded-lg border border-[#e9ecef] flex items-center justify-center hover:bg-[#3c6994] hover:text-white transition-all text-slate-600 shadow-sm"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-[#e9ecef]">
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-300">
              © 2024 Ekopia — Fabián Paul Sanabria
            </div>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-300">
              <a href="#" className="hover:text-[#3c6994] transition-colors">Privacidad</a>
              <a href="#" className="hover:text-[#3c6994] transition-colors">Términos</a>
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
        className="fixed bottom-28 right-10 z-[90] w-10 h-10 bg-white border border-[#e9ecef] rounded-lg flex items-center justify-center hover:bg-[#3c6994] hover:text-white transition-all shadow-lg text-slate-600"
      >
        <ArrowUp size={16} />
      </motion.button>
    </div>
  );
}
