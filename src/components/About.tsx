"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="section-padding bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-12"
                    >
                        <h2 className="text-[9vw] lg:text-[7vw] font-black text-brand-black leading-[0.8] mb-12">
                            THE <br />
                            FOUNDERS
                        </h2>
                    </motion.div>

                    <div className="lg:col-span-12 xl:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-xl md:text-3xl text-brand-black font-medium leading-tight mb-8">
                                Unimos nuestros conocimientos y experiencias con un objetivo claro: Potenciar y empoderar negocios para que marquen la diferencia.
                            </p>
                            <p className="text-lg md:text-xl text-brand-black/70 leading-relaxed mb-12 max-w-2xl">
                                Creamos estrategias personalizadas que fusionan creatividad, diseño y marketing digital. Nos apasiona trabajar codo a codo con cada cliente para transformar su visión en una marca con impacto real y resultados extraordinarios.
                            </p>

                            <div className="flex flex-wrap gap-12 mt-12 pt-8 border-t border-brand-black/5">
                                <div className="relative">
                                    <p className="font-signature text-5xl text-brand-black -rotate-3 mb-2">Manu Fretes</p>
                                    <p className="text-xs font-black uppercase tracking-widest text-brand-black/40">Co-Founder & Creative</p>
                                </div>
                                <div className="relative">
                                    <p className="font-signature text-5xl text-brand-black -rotate-3 mb-2">Estefi De La Barra</p>
                                    <p className="text-xs font-black uppercase tracking-widest text-brand-black/40">Co-Founder & Design</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-12 xl:col-span-5 relative mt-12 xl:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="aspect-4/5 relative rounded-[40px] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/5.png"
                                alt="The Founders"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
