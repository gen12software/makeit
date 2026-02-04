"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "LIDHERMA",
        category: "SKINCARE & CONTENT",
        description: "Dirección de arte y producción de contenido visual para lanzamientos de cosmética profesional.",
        image: "/images/TheWorks/32.png",
    },
    {
        number: "02",
        title: "TROMEN",
        category: "LIFESTYLE & CONTENT",
        description: "Capturamos la calidez y el diseño de piezas líderes en calefacción y deco.",
        image: "/images/TheWorks/27.png",
    },
    {
        number: "03",
        title: "IL GIOIELLO JOYAS",
        category: "JEWELRY & CONTENT",
        description: "Producción de contenido humanizado y fotografía de producto para alta joyería.",
        image: "/images/TheWorks/30.png",
    },
    {
        number: "04",
        title: "HOTEL GRAND BRIZO",
        category: "HOSPITALITY & CONTENT",
        description: "Estrategia visual y contenido de lifestyle para una de las cadenas hoteleras más exclusivas.",
        image: "/images/TheWorks/13.png",
    },
    {
        number: "05",
        title: "MINI JULI BABY",
        category: "KIDS FASHION",
        description: "Dulzura y estética cuidada en producciones de moda infantil.",
        image: "/images/TheWorks/19.png",
    },
    {
        number: "06",
        title: "KUTIKA",
        category: "KIDS DECO & TOYS",
        description: "Estrategia de marca y contenido para universos de juego y decoración infantil.",
        image: "/images/TheWorks/20.png",
    },
    {
        number: "07",
        title: "TIERRA BRUTA",
        category: "HOME DECO & DESIGN",
        description: "Minimalismo y calidez en producciones de vajilla y accesorios de diseño.",
        image: "/images/TheWorks/25.png",
    },
    {
        number: "08",
        title: "FABRIC",
        category: "INTERIOR DESIGN",
        description: "Capturamos el confort y la calidad en producciones de sofás y mobiliario de alta gama.",
        image: "/images/TheWorks/26.png",
    },
    {
        number: "09",
        title: "KONSENTIDOS",
        category: "FURNITURE & DESIGN",
        description: "Fotografía y estrategia visual para mobiliario con terminaciones artesanales.",
        image: "/images/TheWorks/28.png",
    },
    {
        number: "10",
        title: "GINGER & COCO",
        category: "HOTEL BOUTIQUE",
        description: "Contenido aspiracional y branding para experiencias de hospedaje exclusivas.",
        image: "/images/TheWorks/10.png",
    },
    {
        number: "11",
        title: "HOTEL DAZZLER",
        category: "SOCIAL MEDIA STRATEGY",
        description: "Gestión y producción de contenido dinámico para el sector hotelero.",
        image: "/images/TheWorks/14.png",
    }
];

export default function Projects() {
    return (
        <section id="proyectos" className="bg-background py-12 md:py-20 relative overflow-hidden">
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
                        <h2 className="text-[10vw] lg:text-[5.5vw] font-black text-brand-black leading-[0.95] tracking-tighter">
                            THE <br />
                            <span className="text-brand-stone italic uppercase">Works</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Projects List - Alternating Editorial Layout */}
                <div className="space-y-24 md:space-y-36 lg:space-y-48">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-32 items-center lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Project Info */}
                            <div className="w-full lg:w-[40%] space-y-8">
                                <div className="relative">
                                    <span className="font-heading font-black text-brand-stone text-7xl md:text-9xl opacity-[0.05] absolute -top-12 -left-4 leading-none select-none">
                                        {project.number}
                                    </span>
                                    <div className="relative z-10">
                                        <p className="text-xs font-black uppercase tracking-[0.4em] text-brand-stone mb-4">
                                            {project.category}
                                        </p>
                                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black tracking-tighter italic leading-tight uppercase">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-lg md:text-xl text-brand-black/60 leading-relaxed font-sans max-w-md">
                                    {project.description}
                                </p>

                                <motion.button
                                    whileHover={{ x: index % 2 === 0 ? 15 : -15 }}
                                    className={`flex items-center gap-4 group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    <div className="h-14 w-14 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all duration-500">
                                        <ArrowUpRight className="text-brand-black group-hover:text-white transition-colors duration-500" size={24} />
                                    </div>
                                    <span className="font-black text-xs uppercase tracking-widest text-brand-black/50 group-hover:text-brand-black transition-colors duration-500">Ver Proyecto</span>
                                </motion.button>
                            </div>

                            {/* Project Image */}
                            <div className="w-full lg:w-[60%] group/img">
                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                    className="relative aspect-4/3 lg:aspect-video rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.18)]"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-brand-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 md:mt-32 pt-12 md:pt-20 border-t border-brand-black/5 text-center"
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
