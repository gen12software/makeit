"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = [
    { id: 3, src: "/images/3.png" },
    { id: 1, src: "/images/1.png" },
    { id: 2, src: "/images/2.png" },
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
        <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 lg:pt-16 overflow-hidden bg-background">
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
                        className="font-heading font-black text-brand-stone text-sm md:text-base uppercase tracking-[0.4em] mb-4"
                    >
                        Make it real.
                    </motion.div>

                    <h1 className="text-[12vw] sm:text-[8vw] lg:text-[5.5vw] font-black text-brand-black leading-[0.95] tracking-tighter mb-8 lg:mb-10">
                        CREATIVE MINDS, <br />
                        IMPACTFUL <br />
                        BRANDS.
                    </h1>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <p className="text-lg md:text-xl text-brand-black/70 font-sans max-w-lg leading-relaxed">
                            En MAKE IT potenciamos marcas a través de estrategias creativas y diseño de alto impacto.
                        </p>
                        <Link
                            href="#contacto"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-10 py-5 bg-brand-black text-white rounded-full font-black text-sm hover:bg-brand-stone transition-all transform hover:scale-105 active:scale-95 shadow-xl uppercase tracking-widest whitespace-nowrap"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-12 xl:col-span-5 relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-8 lg:mt-0"
                >
                    <div className="relative w-full h-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
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
                                    alt={`MAKE IT Creative Work ${heroImages[currentIndex].id}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Subtle overlay for better visual depth */}
                                <div className="absolute inset-0 bg-brand-black/5 pointer-events-none" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Indicators */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                            {heroImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1 transition-all duration-700 rounded-full ${currentIndex === idx ? "w-12 bg-white" : "w-4 bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
