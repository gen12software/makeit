"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="section-padding bg-background relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
                <span className="text-[30vw] font-black leading-none">MAKE IT</span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Heading & Image */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="aspect-3/4 relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                                <Image
                                    src="/images/5.png"
                                    alt="The Founders"
                                    fill
                                    className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-brand-black text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                                <p className="font-heading font-black text-2xl leading-none">EST. 2024</p>
                                <p className="text-[10px] uppercase tracking-[0.3em] mt-2 opacity-50">Creative Studio</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[2px] w-12 bg-brand-stone" />
                                <span className="font-heading font-black text-brand-stone tracking-widest text-sm uppercase">About the minds</span>
                            </div>

                            <h2 className="text-[10vw] lg:text-[5.5vw] font-black text-brand-black leading-[0.95] mb-10 tracking-tighter">
                                THE <br />
                                <span className="text-brand-stone italic">FOUNDERS</span>
                            </h2>

                            <div className="space-y-8 max-w-2xl">
                                <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-brand-black leading-[1.1] tracking-tight">
                                    Unimos fuerzas para transformar visiones en <span className="text-brand-stone underline decoration-4 underline-offset-8">realidades digitales</span>.
                                </p>

                                <p className="text-lg md:text-xl text-brand-black/60 leading-relaxed font-sans">
                                    Creamos estrategias personalizadas que fusionan creatividad, diseño y marketing digital. No somos solo una agencia, somos vuestros aliados estratégicos para construir marcas con propósito.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-brand-black/10">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group"
                                >
                                    <p className="font-heading font-black text-brand-black text-xl md:text-2xl uppercase tracking-[0.2em] mb-4">Manu Fretes</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-px bg-brand-stone group-hover:w-12 transition-all duration-300" />
                                        <p className="text-xs font-black uppercase tracking-widest text-brand-black/40">Co-Founder & Creative</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group"
                                >
                                    <p className="font-heading font-black text-brand-black text-xl md:text-2xl uppercase tracking-[0.2em] mb-4">Estefi De La Barra</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-px bg-brand-stone group-hover:w-12 transition-all duration-300" />
                                        <p className="text-xs font-black uppercase tracking-widest text-brand-black/40">Co-Founder & Design</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
