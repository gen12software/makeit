"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Camera,
    Target,
    Megaphone,
    Palette,
    Laptop,
    Sparkles,
    ArrowUpRight,
    CheckCircle2
} from "lucide-react";
import { DELABARRA_URL } from "@/lib/links";

type ServiceItem = string | { label: string; detail: string };

type Service = {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    items: ServiceItem[];
    cta: string;
    href: string;
    badge?: string;
    variant?: "default" | "inverted";
    /** Solo variante inverted: foto y logo. */
    image?: string;
    logo?: string;
};

const services: Service[] = [
    {
        id: "01",
        title: "Content Creation",
        icon: <Camera className="w-8 h-8" />,
        description: "Producción de fotos y videos profesionales pensados para redes, web y campañas.",
        items: [
            "Contenido lifestyle y UGC",
            "Fotos de producto",
            "Reels, stories y carruseles",
            "Dirección creativa y edición"
        ],
        badge: "Most Popular",
        cta: "Quiero contenido de impacto",
        href: "#contacto"
    },
    {
        id: "02",
        title: "Brands Strategy",
        icon: <Target className="w-8 h-8" />,
        description: "Desarrollamos marcas que quieren expandirse a través de estrategias de comunicación.",
        items: [
            "Posicionamiento",
            "Auditoría de marca",
            "Storytelling"
        ],
        badge: "Most Popular",
        cta: "Quiero un plan estratégico",
        href: "#contacto"
    },
    {
        id: "03",
        title: "Web Development",
        icon: <Laptop className="w-8 h-8" />,
        description: "Soluciones digitales funcionales y tiendas online de alto rendimiento.",
        items: [
            "Diseño de sitios web",
            "E-commerce y tiendas",
            "Integración de pagos",
            "Optimización UI/UX"
        ],
        cta: "Quiero mi web profesional",
        href: "#contacto"
    },
    {
        id: "04",
        title: "Paid Media",
        icon: <Megaphone className="w-8 h-8" />,
        description: "Visibilidad estratégica en Meta Ads & Google Ads para crecer y vender.",
        items: [
            "Gestión de campañas Ads",
            "Piezas creativas para pauta",
            "Segmentación avanzada",
            "Optimización de ROI"
        ],
        cta: "Quiero vender más",
        href: "#contacto"
    },
    {
        id: "05",
        title: "Visual Identity",
        icon: <Palette className="w-8 h-8" />,
        description: "Construimos marcas con personalidad, coherencia y un estilo atemporal.",
        items: [
            { label: "Branding corporativo", detail: "Enfocado en empresas y organizaciones." },
            { label: "Branding personal", detail: "Orientado a posicionar la imagen y reputación de un profesional o figura pública." }
        ],
        cta: "Quiero una identidad única",
        href: "#contacto"
    },
    {
        id: "06",
        title: "De La Barra Experience",
        icon: <Sparkles className="w-8 h-8" />,
        description: "Eventos corporativos, lanzamientos y activaciones de marca bajo la dirección de Estefi De La Barra.",
        items: [
            "Eventos corporativos",
            "Lanzamientos",
            "Activaciones de marca"
        ],
        cta: "Explorá las experiencias",
        href: DELABARRA_URL,
        variant: "inverted",
        logo: "/images/delabarra/logo.png",
        // PENDIENTE (clienta): image: "/images/delabarra/estefi.jpg"
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
                        <h2 className="text-[10vw] lg:text-[5.5vw] text-brand-black leading-[0.95] tracking-tighter uppercase mb-8">
                            OUR <span className="text-brand-stone italic">SERVICES</span>
                        </h2>
                        <div className="h-1 w-24 bg-brand-stone mx-auto rounded-full" />
                    </motion.div>
                </div>

                {/* Services Grid - Modern Bento/Card Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => {
                        const inverted = service.variant === "inverted";
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group h-full"
                            >
                                <div className={`${inverted ? "bg-brand-black text-white border-white/10" : "bg-white border-brand-black/3"} border p-10 md:p-12 rounded-[3rem] h-full flex flex-col transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2 relative overflow-hidden group`}>

                                    {/* Top: Icon/Logo & Index */}
                                    <div className="flex justify-between items-start mb-12">
                                        {inverted && service.logo ? (
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-1 ring-white/10">
                                                <Image src={service.logo} alt={`${service.title} logo`} fill sizes="64px" className="object-cover" />
                                            </div>
                                        ) : (
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:rotate-6 ${inverted ? "bg-white/10 text-white group-hover:bg-white group-hover:text-brand-black" : "bg-brand-light-gray text-brand-black group-hover:bg-brand-black group-hover:text-white"}`}>
                                                {service.icon}
                                            </div>
                                        )}
                                        <span className={`font-heading text-4xl transition-colors duration-500 ${inverted ? "text-white/30 group-hover:text-brand-stone" : "text-brand-black/30 group-hover:text-brand-stone/60"}`}>
                                            {service.id}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="grow">
                                        {/* El alto del badge se reserva siempre para alinear los títulos de la fila */}
                                        <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 ${service.badge ? "bg-brand-stone/10 text-brand-stone" : "invisible"}`} aria-hidden={!service.badge}>
                                            {service.badge ?? "–"}
                                        </span>
                                        <h3 className={`text-2xl md:text-3xl mb-6 tracking-tight leading-tight group-hover:text-brand-stone transition-colors ${inverted ? "text-white" : "text-brand-black"}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`text-base leading-relaxed mb-10 font-sans ${inverted ? "text-white/60" : "text-brand-black/50"}`}>
                                            {service.description}
                                        </p>

                                        {inverted && service.image && (
                                            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden mb-10">
                                                <Image src={service.image} alt="Estefi De La Barra" fill sizes="(max-width: 768px) 90vw, 400px" className="object-cover" />
                                            </div>
                                        )}

                                        {/* Checked Items */}
                                        <ul className="space-y-4">
                                            {service.items.map((item, i) => {
                                                const label = typeof item === "string" ? item : item.label;
                                                const detail = typeof item === "string" ? undefined : item.detail;
                                                return (
                                                    <li key={i} className={`flex items-start gap-3 text-sm font-medium transition-colors ${inverted ? "text-white/70 group-hover:text-white" : "text-brand-black/70 group-hover:text-brand-black"}`}>
                                                        <div className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center transition-colors ${inverted ? "bg-white/10" : "bg-brand-light-gray group-hover:bg-brand-stone/20"}`}>
                                                            <CheckCircle2 size={12} className={inverted ? "text-white" : "text-brand-black"} />
                                                        </div>
                                                        <span>
                                                            {label}
                                                            {detail && (
                                                                <span className={`block mt-1 font-normal ${inverted ? "text-white/50" : "text-brand-black/50"}`}>{detail}</span>
                                                            )}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    {/* Bottom: Action Button */}
                                    <Link
                                        href={service.href}
                                        className={`mt-12 w-full h-16 rounded-full flex items-center justify-center gap-4 group/btn transition-all duration-300 hover:bg-brand-stone shadow-lg relative z-40 ${inverted ? "bg-white text-brand-black" : "bg-brand-black text-white"}`}
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{service.cta}</span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-500 ${inverted ? "bg-brand-black/10" : "bg-white/10"}`}>
                                            <ArrowUpRight size={16} className={inverted ? "text-brand-black" : "text-white"} />
                                        </div>
                                    </Link>

                                    {/* Hover Background Decoration */}
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-stone/5 rounded-full blur-3xl scale-0 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 p-10 md:p-16 rounded-[4rem] bg-brand-black text-center text-white relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h4 className="text-4xl md:text-6xl lg:text-7xl mb-12 tracking-tighter leading-tight font-light">
                            ¿Listos para dar <br className="hidden md:block" /> el próximo salto?
                        </h4>
                        <div className="space-y-4">
                            <Link
                                href="#contacto"
                                className="inline-block bg-brand-white text-brand-black px-12 py-6 rounded-full font-bold text-sm tracking-widest hover:bg-brand-stone transition-all duration-500 shadow-xl"
                            >
                                SÍ, QUIERO POSICIONAR MI MARCA
                            </Link>
                        </div>
                    </div>
                    {/* Background dot pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                </motion.div>
            </div>
        </section>
    );
}
