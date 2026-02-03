"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "LIDHERMA",
        category: "SHOOTING & CONTENT",
        description: "Dirección de arte y producción de contenido visual para lanzamientos de temporada de una de las marcas líderes en cosmética.",
        image: "/images/ProduccionesFotograficas/22.png",
    },
    {
        number: "02",
        title: "MAJE",
        category: "FASHION SHOOTING",
        description: "Capturamos la elegancia atemporal en producciones de moda de alta gama, enfocándonos en la sofisticación y el detalle.",
        image: "/images/ProduccionesFotograficas/23.png",
    },
    {
        number: "03",
        title: "IL GIOIELLO",
        category: "JEWELRY & CONTENT",
        description: "Fotografía de producto y contenido humanizado para una marca de joyería con enfoque en la elegancia.",
        image: "/images/ContenidoDigitalyContenidodeProductos/30.png",
    },
    {
        number: "04",
        title: "TROMEN",
        category: "LIFESTYLE & CONTENT",
        description: "Capturamos momentos de calidez y diseño en producciones de lifestyle para una marca líder en calefacción.",
        image: "/images/ContenidoDigitalyContenidodeProductos/27.png",
    }
];

export default function Projects() {
    return (
        <section id="proyectos" className="bg-background py-16 md:py-32 relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none translate-x-1/4">
                <span className="text-[25vw] font-black leading-none">WORKS</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-brand-stone" />
                            <span className="font-heading font-black text-brand-stone tracking-[0.2em] text-sm uppercase">Selected Portfolio</span>
                        </div>
                        <h2 className="text-[12vw] lg:text-[8vw] font-black text-brand-black leading-[0.8] tracking-tighter">
                            THE <br />
                            <span className="text-brand-stone italic uppercase">Works</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Projects List - No more boxes, just pure content */}
                <div className="space-y-20 md:space-y-40 lg:space-y-64">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
                        >
                            {/* Project Info */}
                            <div className="w-full lg:w-1/3 order-2 lg:order-1">
                                <span className="font-heading font-black text-brand-stone text-6xl opacity-20 block mb-6">
                                    {project.number}
                                </span>
                                <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-stone mb-4">
                                    {project.category}
                                </p>
                                <h3 className="text-4xl lg:text-6xl font-black text-brand-black mb-6 tracking-tighter italic">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-brand-black/50 leading-relaxed font-sans mb-8 max-w-sm">
                                    {project.description}
                                </p>
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="h-12 w-12 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all">
                                        <ArrowUpRight className="text-brand-black group-hover:text-white transition-colors" size={20} />
                                    </div>
                                    <span className="font-black text-xs uppercase tracking-widest text-brand-black/60 group-hover:text-brand-black transition-colors">Ver Proyecto</span>
                                </motion.button>
                            </div>

                            {/* Project Image - Large, Clean, No Card Background */}
                            <div className="w-full lg:w-2/3 order-1 lg:order-2">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover" // Using cover for maximum impact
                                        priority={index === 0}
                                    />
                                    {/* Subtle overlay to help white text in images pop if it reaches edges */}
                                    <div className="absolute inset-0 bg-brand-black/5 pointer-events-none" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 md:mt-64 pt-16 md:pt-32 border-t border-brand-black/5 text-center"
                >
                    <p className="text-brand-black/30 font-black uppercase tracking-[0.5em] text-xs mb-8 italic">¿Listos para destacar?</p>
                    <h4 className="text-[8vw] font-black text-brand-black tracking-tighter hover:text-brand-stone transition-colors cursor-pointer">
                        LET&apos;S <span className="italic">MAKE IT</span> REAL
                    </h4>
                </motion.div>
            </div>
        </section>
    );
}
