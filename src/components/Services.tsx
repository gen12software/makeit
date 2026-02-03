"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        number: "01",
        title: "PRODUCCIÓN FOTOGRÁFICA",
        description: "Capturamos historias visuales con una dirección de arte impecable. Nos especializamos en crear imágenes que no solo muestran un producto, sino que transmiten un estilo de vida premium.",
        image: "/images/ContenidoDigitalyContenidodeProductos/36.png",
    },
    {
        number: "02",
        title: "CONTENT CURATION",
        description: "Curaduría estratégica para marcas que entienden que el contenido es el alma de su presencia digital. Elevamos tu feed a un nivel editorial.",
        image: "/images/ContenidoDigitalyContenidodeProductos/26.png",
    },
    {
        number: "03",
        title: "BRAND & DESIGN",
        description: "Construimos identidades visuales desde la raíz. Diseño minimalista, atemporal y con un propósito claro: hacer que tu marca sea inolvidable.",
        image: "/images/ContenidoDigitalyContenidodeProductos/25.png",
    },
    {
        number: "04",
        title: "PRODUCT STRATEGY",
        description: "Estrategia 360° para el lanzamiento de productos. Desde el concepto creativo hasta la ejecución visual y el marketing de impacto.",
        image: "/images/ContenidoDigitalyContenidodeProductos/35.png",
    }
];

export default function Services() {
    return (
        <section id="servicios" className="section-padding bg-background relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-0 left-0 opacity-[0.03] select-none pointer-events-none translate-y-1/2 -rotate-90">
                <span className="text-[25vw] font-black leading-none">STRATEGY</span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-40 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-brand-stone" />
                            <span className="font-heading font-black text-brand-stone tracking-[0.2em] text-sm uppercase">Capabilities</span>
                        </div>
                        <h2 className="text-[12vw] lg:text-[7vw] font-black text-brand-black leading-[0.85] tracking-tighter">
                            OUR <br />
                            <span className="text-brand-stone italic">SERVICES</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Services Grid - No more white boxes, just clean integrated cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_24px_50px_-12px_rgba(0,0,0,0.1)] mb-10">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="flex gap-6">
                                <span className="font-heading font-black text-2xl lg:text-3xl text-brand-stone/40">
                                    {service.number}
                                </span>
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-black text-brand-black mb-4 tracking-tight italic">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-brand-black/50 leading-relaxed font-sans mb-8 max-w-sm">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center gap-3 cursor-pointer group/link">
                                        <div className="h-10 w-10 rounded-full border border-brand-black/10 flex items-center justify-center group-hover/link:bg-brand-black group-hover/link:border-brand-black transition-all">
                                            <ArrowUpRight className="text-brand-black group-hover/link:text-white transition-colors" size={18} />
                                        </div>
                                        <span className="font-black text-[10px] uppercase tracking-widest text-brand-black/30 group-hover/link:text-brand-black transition-colors">Saber más</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
