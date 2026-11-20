"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { DELABARRA_URL } from "@/lib/links";
import CircledWord from "@/components/CircledWord";

/** Slides del hero. */
const heroImages = [
    { src: "/images/equipo_makeit.jpeg", alt: "Equipo Make It" },
    { src: "/images/2Nueva.png", alt: "MAKE IT Creative Work" },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // 5 seconds per image
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 lg:pt-32 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-12 xl:col-span-7 relative z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="font-sans text-brand-black/40 text-sm md:text-base uppercase tracking-[0.4em] mb-4"
                    >
                        Make it real.
                    </motion.div>

                    <h1 className="text-[12vw] sm:text-[8vw] lg:text-[5.5vw] text-brand-black leading-[0.95] tracking-tighter mb-8 lg:mb-10">
                        CREATIVE MINDS, <br />
                        IMPACTFUL{" "}
                        <CircledWord>
                            <span className="font-highlight italic normal-case text-brand-stone">brands.</span>
                        </CircledWord>
                    </h1>

                    <div className="max-w-2xl space-y-5">
                        <p className="font-sans text-sm md:text-base font-bold uppercase tracking-[0.25em] text-brand-black">
                            No somos solo una agencia creativa
                        </p>
                        <p className="text-lg md:text-xl text-brand-black/70 font-sans leading-relaxed">
                            Trabajamos en sinergia con{" "}
                            <Link href={DELABARRA_URL} className="font-bold text-brand-black underline decoration-brand-stone underline-offset-4 hover:text-brand-stone transition-colors">
                                De La Barra Experience
                            </Link>
                            , integrando el concepto y la dirección creativa a eventos, activaciones y experiencias de marca para potenciar el alcance de cada proyecto, fortalecer su posicionamiento y conectar con sus audiencias.
                        </p>
                        <p className="text-lg md:text-xl text-brand-black/70 font-sans leading-relaxed">
                            Cada agencia aporta su especialidad y juntas potencian tu negocio,
                        </p>
                    </div>

                    {/* De La Barra Experience */}
                    <div className="mt-10 max-w-2xl border-l-2 border-brand-stone pl-6 py-2">
                        <p className="font-heading text-2xl md:text-3xl text-brand-black tracking-tight mb-3">DE LA BARRA EXPERIENCE</p>
                        <p className="font-sans text-base md:text-lg text-brand-black/70 leading-relaxed mb-6">
                            También creamos experiencias que se viven. Eventos corporativos, lanzamientos y activaciones de marca bajo la dirección de Estefi De La Barra.
                        </p>
                        <Link
                            href={DELABARRA_URL}
                            className="inline-flex items-center gap-3 bg-brand-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-stone transition-colors"
                        >
                            Explorá las experiencias <span aria-hidden>→</span>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-12 xl:col-span-5 relative w-full mt-8 lg:mt-0"
                >
                    <div className="relative w-full h-100 sm:h-125 lg:h-150 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={heroImages[currentIndex].src}
                                    alt={heroImages[currentIndex].alt}
                                    fill
                                    sizes="(max-width: 1280px) 90vw, 520px"
                                    className="object-cover object-center"
                                    priority
                                />
                                {/* Subtle overlay for better visual depth */}
                                <div className="absolute inset-0 bg-brand-black/5 pointer-events-none" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Cita: pie del carrusel. En mobile va debajo; desde sm se monta sobre el borde inferior derecho de la foto. */}
                    <figure className="relative z-10 mt-6 sm:-mt-14 sm:ml-auto sm:mr-6 sm:max-w-sm bg-background rounded-3xl shadow-xl px-8 pt-6 pb-8">
                        <span aria-hidden className="block font-highlight text-6xl leading-none text-brand-stone h-8">
                            &ldquo;
                        </span>
                        <blockquote className="font-highlight italic text-2xl md:text-3xl text-brand-black leading-snug">
                            Dos marcas con identidad propia y una misma mirada creativa.
                        </blockquote>
                        <span aria-hidden className="block text-right font-highlight text-6xl leading-none text-brand-stone h-6 mt-2">
                            &rdquo;
                        </span>
                    </figure>
                </motion.div>
            </div>
        </section>
    );
}
