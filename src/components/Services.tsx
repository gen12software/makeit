"use client";

import { motion } from "framer-motion";
import {
    Camera,
    Smartphone,
    Target,
    Megaphone,
    Palette,
    Laptop,
    ArrowUpRight,
    CheckCircle2
} from "lucide-react";

const services = [
    {
        id: "01",
        title: "Creación de contenido",
        icon: <Camera className="w-8 h-8" />,
        description: "Producción de fotos y videos profesionales pensados para redes, web y campañas.",
        items: [
            "Contenido lifestyle y UGC",
            "Fotos de producto",
            "Reels, stories y carruseles",
            "Dirección creativa y edición"
        ],
        badge: "Most Popular"
    },
    {
        id: "02",
        title: "Community Management",
        icon: <Smartphone className="w-8 h-8" />,
        description: "Gestión integral de cuentas de Instagram para marcas que buscan impacto.",
        items: [
            "Planificación mensual",
            "Publicación y copy",
            "Community engagement",
            "Análisis de métricas"
        ]
    },
    {
        id: "03",
        title: "Pauta publicitaria",
        icon: <Megaphone className="w-8 h-8" />,
        description: "Visibilidad estratégica en Meta Ads & Google Ads para crecer y vender.",
        items: [
            "Gestión de campañas Ads",
            "Piezas creativas para pauta",
            "Segmentación avanzada",
            "Optimización de ROI"
        ]
    },
    {
        id: "04",
        title: "Identidad Visual",
        icon: <Palette className="w-8 h-8" />,
        description: "Construimos marcas con personalidad, coherencia y un estilo atemporal.",
        items: [
            "Logo y sistema gráfico",
            "Paleta de colores",
            "Tipografías exclusivas",
            "Lineamientos de marca"
        ]
    },
    {
        id: "05",
        title: "Desarrollo Web",
        icon: <Laptop className="w-8 h-8" />,
        description: "Soluciones digitales funcionales y tiendas online de alto rendimiento.",
        items: [
            "Diseño de sitios web",
            "E-commerce y tiendas",
            "Integración de pagos",
            "Optimización UI/UX"
        ]
    },
    {
        id: "06",
        title: "Estrategia de Marca",
        icon: <Target className="w-8 h-8" />,
        description: "Definimos qué decir, a quién y para qué con un enfoque estratégico.",
        items: [
            "Posicionamiento",
            "Auditoría de marca",
            "Storytelling",
            "Hoja de ruta"
        ]
    }
];

export default function Services() {
    return (
        <section id="servicios" className="section-padding bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section - Clean & Centered */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-signature text-4xl text-brand-stone block mb-4">What we do best</span>
                        <h2 className="text-[10vw] lg:text-[5.5vw] font-black text-brand-black leading-[0.95] tracking-tighter uppercase mb-8">
                            OUR <span className="text-brand-stone italic">SERVICES</span>
                        </h2>
                        <div className="h-1 w-24 bg-brand-stone mx-auto rounded-full" />
                    </motion.div>
                </div>

                {/* Services Grid - Modern Bento/Card Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white border border-brand-black/3 p-10 md:p-12 rounded-[3rem] h-full flex flex-col transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2 relative overflow-hidden group">

                                {/* Top: Icon & Index */}
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-light-gray flex items-center justify-center text-brand-black group-hover:bg-brand-black group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                        {service.icon}
                                    </div>
                                    <span className="font-heading font-black text-4xl text-brand-black/5 group-hover:text-brand-stone/20 transition-colors duration-500">
                                        {service.id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="grow">
                                    {service.badge && (
                                        <span className="inline-block px-3 py-1 bg-brand-stone/10 text-brand-stone text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                                            {service.badge}
                                        </span>
                                    )}
                                    <h3 className="text-2xl md:text-3xl font-black text-brand-black mb-6 tracking-tight leading-tight group-hover:text-brand-stone transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-brand-black/50 text-base leading-relaxed mb-10 font-sans">
                                        {service.description}
                                    </p>

                                    {/* Checked Items */}
                                    <ul className="space-y-4">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-brand-black/70 group-hover:text-brand-black transition-colors">
                                                <div className="w-5 h-5 rounded-full bg-brand-light-gray flex items-center justify-center group-hover:bg-brand-stone/20 transition-colors">
                                                    <CheckCircle2 size={12} className="text-brand-black" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom: Action Circle */}
                                <div className="mt-12 pt-8 border-t border-brand-black/3 flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-black/30 group-hover:text-brand-black transition-colors">Saber más</span>
                                    <div className="w-10 h-10 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all">
                                        <ArrowUpRight size={18} className="text-brand-black group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                {/* Hover Background Decoration */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-stone/5 rounded-full blur-3xl scale-0 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 p-10 md:p-16 rounded-[4rem] bg-brand-black text-center text-white relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <span className="font-signature text-4xl text-brand-stone block mb-6">Let&apos;s make it real</span>
                        <h4 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 tracking-tighter leading-tight">
                            ¿LISTOS PARA <br className="hidden md:block" /> EMPRENDER EL VIAJE?
                        </h4>
                        <button className="bg-brand-white text-brand-black px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-stone transition-all duration-500 shadow-xl">
                            HABLEMOS AHORA
                        </button>
                    </div>
                    {/* Background Noise/Texture or decoration could go here */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
