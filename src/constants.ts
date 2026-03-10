import { Paintbrush, Layers, Droplets, Sparkles } from "lucide-react";
import React from "react";

export const galleryImages = [
  { id: 1, url: "https://i.ibb.co/9kqqrrWN/IMG-20210803-162931.jpg", title: "Acabado Exterior", category: "Exterior" },
  { id: 2, url: "https://i.ibb.co/1f3Dh1Qg/20230331-092808.jpg", title: "Texturado en Muros", category: "Texturado" },
  { id: 3, url: "https://i.ibb.co/cXvd41J0/20230331-092754.jpg", title: "Preparación de Superficie", category: "Preparación" },
  { id: 4, url: "https://i.ibb.co/p6wzLZGT/20221108-160612.jpg", title: "Pintura de Fachada", category: "Exterior" },
  { id: 5, url: "https://i.ibb.co/DPsD1zB4/20230626-115604.jpg", title: "Impermeabilización", category: "Impermeabilizado" },
  { id: 6, url: "https://i.ibb.co/zHP9Q2kC/FB-IMG-1675023495350.jpg", title: "Detalle de Terminación", category: "Interior" },
  { id: 7, url: "https://i.ibb.co/1J6GvhYH/FB-IMG-1675023509417.jpg", title: "Obra Residencial", category: "Exterior" },
  { id: 8, url: "https://i.ibb.co/jn1Kj89/FB-IMG-1675023455496.jpg", title: "Pintura Interior", category: "Interior" },
  { id: 9, url: "https://i.ibb.co/pBkWzt3q/FB-IMG-1675023466134.jpg", title: "Acabado Premium", category: "Interior" },
  { id: 10, url: "https://i.ibb.co/dw1JF40S/20221108-160349.jpg", title: "Renovación de Muros", category: "Interior" },
  { id: 11, url: "https://i.ibb.co/dJ22MtY8/20230222-145441.jpg", title: "Tratamiento de Humedad", category: "Preparación" },
  { id: 12, url: "https://i.ibb.co/KzQ6wf4w/20230331-092732.jpg", title: "Planimetría Perfecta", category: "Texturado" },
  { id: 13, url: "https://i.ibb.co/VYDjBfk9/20230114-154625.jpg", title: "Pintura Epoxi", category: "Especiales" },
  { id: 14, url: "https://i.ibb.co/PvLz39tx/20230626-115530.jpg", title: "Protección Climática", category: "Impermeabilizado" },
  { id: 15, url: "https://i.ibb.co/gZPbY64g/FB-IMG-1675023474269.jpg", title: "Estética de Lujo", category: "Interior" },
  { id: 16, url: "https://i.ibb.co/CK9kgwP3/20230331-092801.jpg", title: "Enduido Técnico", category: "Texturado" },
  { id: 17, url: "https://i.ibb.co/jZZHQDdN/20221108-160428.jpg", title: "Fachada Renovada", category: "Exterior" },
  { id: 18, url: "https://i.ibb.co/k2Trb9zw/20230605-071817.jpg", title: "Pintura de Altura", category: "Exterior" },
  { id: 19, url: "https://i.ibb.co/G4ySTr9T/20221119-135750.jpg", title: "Resultado Final", category: "Exterior" },
  { id: 20, url: "https://i.ibb.co/hJ3WL68W/20230314-105258.jpg", title: "Obra en Proceso", category: "Preparación" },
  { id: 21, url: "https://i.ibb.co/9LtKW8M/20221108-110313.jpg", title: "Limpieza de Obra", category: "Preparación" },
  { id: 22, url: "https://i.ibb.co/fVWsVQ67/20221119-135744.jpg", title: "Antes de Pintar", category: "Preparación" },
  { id: 23, url: "https://i.ibb.co/BHn3xjLK/20230313-101329.jpg", title: "Preparación Técnica", category: "Preparación" },
  { id: 24, url: "https://i.ibb.co/MDR0qhQ8/20221117-174053.jpg", title: "Acabado de Fachada", category: "Exterior" },
  { id: 25, url: "https://i.ibb.co/S4ypw9SK/20221119-135822.jpg", title: "Detalle de Obra", category: "Exterior" },
  { id: 26, url: "https://i.ibb.co/YThHjhRF/20221108-110244.jpg", title: "Pintura de Muros", category: "Interior" },
  { id: 27, url: "https://i.ibb.co/KzSnkZzY/20221108-160522.jpg", title: "Terminación Profesional", category: "Interior" }
];

export const categories = ["Todos", "Interior", "Exterior", "Texturado", "Impermeabilizado", "Preparación", "Especiales"];

export const services = [
  {
    id: "01",
    title: "Pintura Interior & Exterior",
    description: "Pintor de confianza para acabados de lujo en interiores y exteriores con pigmentos de máxima durabilidad.",
    icon: React.createElement(Paintbrush, { className: "w-5 h-5" }),
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
    icon: React.createElement(Layers, { className: "w-5 h-5" }),
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
    icon: React.createElement(Droplets, { className: "w-5 h-5" }),
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
    icon: React.createElement(Sparkles, { className: "w-5 h-5" }),
    image: "https://i.ibb.co/VYDjBfk9/20230114-154625.jpg",
    details: {
      features: ["Pintura epoxi de alta resistencia", "Realce natural de vetas en madera", "Acabados espejo o mate profundo"],
      process: ["Pulido fino de superficie", "Descontaminación total", "Aplicación controlada de resina/barniz"],
      benefits: "Protección de lujo para pisos y maderas, garantizando una estética premium y fácil mantenimiento."
    }
  }
];

export const whatsappNumber = "0984921554";
export const whatsappLink = `https://wa.me/595984921554`;
