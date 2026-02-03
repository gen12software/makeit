"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-12 lg:pt-20 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-12 xl:col-span-8 relative z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="font-signature text-4xl md:text-6xl text-brand-black mb-4 -rotate-6 transform origin-left"
                    >
                        Make it real.
                    </motion.div>

                    <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7vw] font-black text-brand-black leading-[0.85] tracking-[-0.08em] mb-8 lg:mb-10">
                        CREATIVE MINDS, <br />
                        IMPACTFUL <br />
                        BRANDS.
                    </h1>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <p className="text-lg md:text-2xl text-brand-black/70 font-sans max-w-lg leading-relaxed">
                            En MAKE IT potenciamos marcas a través de estrategias creativas y diseño de alto impacto.
                        </p>
                        <button className="px-10 py-5 bg-brand-black text-white rounded-full font-black text-base hover:bg-brand-stone transition-all transform hover:scale-105 active:scale-95 shadow-xl uppercase tracking-widest whitespace-nowrap">
                            Contact Us
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-12 xl:col-span-4 relative h-[350px] sm:h-[450px] lg:h-[650px] w-full mt-8 lg:mt-0"
                >
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="/images/3.png"
                            alt="The Founders"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
