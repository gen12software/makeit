"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Proyectos del portfolio. Las imágenes son láminas de 1366×768 con el título y
 * los tags incrustados; se recortan por CSS para mostrar solo la franja de fotos
 * (y ≈ 150–600 px) y el texto se renderiza en HTML con la tipografía del sitio.
 */
const projects = [
    {
        name: "Tromen",
        tags: ["Branding & Design", "Social Media", "Product Content"],
        image: "/images/TheWorks/27.png",
    },
    {
        name: "Lidherma",
        tags: ["Branding & Design", "Social Media", "Product Content"],
        image: "/images/TheWorks/32.png",
    },
];

// Recorte de la franja de fotos dentro de la lámina original (en px sobre 768 de alto).
const SHEET_HEIGHT = 768;
const STRIP_TOP = 150;
const STRIP_HEIGHT = 450;

// Repetimos la lista para que la marquee cubra pantallas anchas aun con pocos proyectos.
const MARQUEE_REPEAT = 3;
const projectsRow = Array.from({ length: MARQUEE_REPEAT }, () => projects).flat();

const clients = [
    { name: "Danone", logo: "/images/Clients/Danone-Logo-PNG.png" },
    { name: "Johnnie Walker", logo: "/images/Clients/Johnnie-Walker-Logo-PNG.png" },
    { name: "McDonalds", logo: "/images/Clients/mc-logo.png", multiply: true, scale: 2.2 },
    { name: "Chevrolet", logo: "/images/Clients/chevrolet logo.png" },
    { name: "Danonino", logo: "/images/Clients/danonino logo.png", scale: 3.0 },
    { name: "Hasbro", logo: "/images/Clients/hasbro.png" },
    { name: "Huggies", logo: "/images/Clients/huggies logo.png" },
    { name: "L'Oreal", logo: "/images/Clients/loreal paris logo.png" },
    { name: "Mercado Libre", logo: "/images/Clients/mercado-libre-seeklogo.png" },
    { name: "Suzuki", logo: "/images/Clients/suzuki logo.png", scale: 2.4 },
    { name: "Tissot", logo: "/images/Clients/tissot-logo.png", multiply: true, scale: 2.2 },
    // PENDIENTE (clienta): logo de Personal Flow →
    // { name: "Personal Flow", logo: "/images/Clients/personal-flow.png" },
];

// PENDIENTE (clienta): imágenes de Personal Flow, p. ej. "personal-flow-01.jpeg".
const personalFlowImages: string[] = [];

const carruselImages = [
    ...Array.from({ length: 16 }, (_, i) => `carrusel-${String(i + 1).padStart(2, "0")}.jpeg`),
    ...personalFlowImages,
].map(img => `/images/TheWorks/carrusel/${img}`);

const half = Math.ceil(carruselImages.length / 2);

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
    return (
        <div className="flex-none w-[80vw] md:w-125 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 hover:scale-[1.02] px-5 py-6 md:px-8 md:py-8 flex flex-col gap-5">
            <p className="font-sans text-center text-xl md:text-2xl uppercase tracking-[0.2em] text-brand-black">
                {project.name}
            </p>
            <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: `1366 / ${STRIP_HEIGHT}` }}
            >
                <div
                    className="absolute left-0 w-full"
                    style={{
                        height: `${(SHEET_HEIGHT / STRIP_HEIGHT) * 100}%`,
                        top: `-${(STRIP_TOP / STRIP_HEIGHT) * 100}%`,
                    }}
                >
                    <Image
                        src={project.image}
                        alt={`${project.name}: ${project.tags.join(", ")}`}
                        fill
                        sizes="(max-width: 768px) 80vw, 500px"
                        className="object-cover"
                    />
                </div>
            </div>
            <p className="font-sans text-center text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-black/70">
                {project.tags.join("  |  ")}
            </p>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="proyectos" className="bg-background py-12 md:py-20 relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none translate-x-1/4">
                <span className="text-[25vw] font-bold leading-none">PROJECTS</span>
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
                        <h2 className="text-[10vw] lg:text-[5.5vw] text-brand-black leading-[0.95] tracking-tighter">
                            <span className="text-brand-stone font-highlight uppercase">Projects</span>
                        </h2>
                    </motion.div>
                </div>

            </div>

            {/* Carrusel de proyectos */}
            <div className="mt-16 relative overflow-hidden w-full">
                <div className="flex marquee-content gap-4">
                    {[...projectsRow, ...projectsRow].map((project, idx) => (
                        <ProjectCard key={`p-${idx}`} project={project} />
                    ))}
                </div>
            </div>

            {/* Carruseles de fotos */}
            <div className="mt-8 space-y-8 relative overflow-hidden w-full">
                {/* Row 1: Left */}
                <div className="flex marquee-content gap-4">
                    {[...carruselImages.slice(0, half), ...carruselImages.slice(0, half)].map((img, idx) => (
                        <div
                            key={`r1-${idx}`}
                            className="relative flex-none w-[70vw] md:w-125 aspect-video rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                        >
                            <Image
                                src={img}
                                alt={`Work Row 1 ${idx}`}
                                fill
                                sizes="(max-width: 768px) 70vw, 500px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Row 2: Right */}
                <div className="flex marquee-content-reverse gap-4">
                    {[...carruselImages.slice(half), ...carruselImages.slice(half)].map((img, idx) => (
                        <div
                            key={`r2-${idx}`}
                            className="relative flex-none w-[70vw] md:w-125 aspect-video rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                        >
                            <Image
                                src={img}
                                alt={`Work Row 2 ${idx}`}
                                fill
                                sizes="(max-width: 768px) 70vw, 500px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Clients Section */}
                <div className="mt-20 md:mt-32 pt-10 border-t border-brand-black/5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl md:text-5xl font-bold text-brand-black tracking-tighter uppercase">
                            Marcas que ya confiaron
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-20 items-center justify-items-center opacity-70">
                        {clients.map((client) => (
                            <motion.div
                                key={client.name}
                                whileHover={{ scale: 1.05, opacity: 1 }}
                                className="relative w-40 h-20 md:w-56 md:h-28 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    style={{
                                        transform: client.scale ? `scale(${client.scale})` : undefined,
                                        mixBlendMode: (client.multiply ? 'multiply' : 'normal') as React.CSSProperties['mixBlendMode']
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 md:mt-24 text-center"
                >
                    <p className="font-sans text-brand-black/40 text-sm md:text-base uppercase font-bold tracking-[0.2em]">
                        Make It Powerful. Make It Bigger. 💎 Make It Expand. make it different...
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
