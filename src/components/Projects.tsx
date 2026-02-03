"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "LIDHERMA",
        category: "SHOOTING & CONTENT",
        image: "/images/ProduccionesFotograficas/22.png",
    },
    {
        title: "MAJE",
        category: "FASHION SHOOTING",
        image: "/images/ProduccionesFotograficas/23.png",
    },
    {
        title: "TIERRA BRUTA",
        category: "DECO & CONTENT",
        image: "/images/ContenidoDigitalyContenidodeProductos/25.png",
    },
    {
        title: "NMNL",
        category: "4K VIDEO & CONTENT",
        image: "/images/ContenidoDigitalyContenidodeProductos/40.png",
    }
];

export default function Projects() {
    return (
        <section id="proyectos" className="bg-brand-black text-white py-24 overflow-hidden">
            <div className="px-6 md:px-12 lg:px-24 mb-20">
                <h2 className="text-[10vw] sm:text-[8vw] lg:text-[7vw] font-black leading-[0.8] tracking-[-0.05em]">
                    OUR <br />
                    WORKS
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="group relative h-[600px] overflow-hidden rounded-3xl cursor-pointer"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="text-3xl font-black mb-1">{project.title}</h3>
                            <p className="text-sm font-bold opacity-60 uppercase tracking-widest">{project.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <button className="font-signature text-4xl text-brand-stone hover:text-white transition-colors">
                    Ver todos los proyectos...
                </button>
            </div>
        </section>
    );
}
