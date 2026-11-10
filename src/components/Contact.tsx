"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, Instagram } from "lucide-react";
import { DELABARRA_URL } from "@/lib/links";

const contacts = [
    {
        icon: <Mail size={20} />,
        label: "Email",
        value: "makeitstudio.agency@gmail.com",
        href: "mailto:makeitstudio.agency@gmail.com"
    },
    {
        icon: <Instagram size={20} />,
        label: "Instagram",
        value: "@makeitagency_",
        href: "https://instagram.com/makeitagency_"
    }
];

/** Flecha ↓ que reemplaza al SVG de dos flechas cuando las columnas se apilan (mobile). */
function MobileArrow() {
    return (
        <div className="md:hidden flex justify-center mb-6 text-brand-stone" aria-hidden>
            <ArrowDown size={28} strokeWidth={1.25} />
        </div>
    );
}

export default function Contact() {
    return (
        <section id="contacto" className="section-padding bg-background relative overflow-hidden">
            {/* Background Decorative Text - Matching the site's editorial language */}
            <div className="absolute bottom-0 left-0 opacity-[0.03] select-none pointer-events-none -translate-x-1/4 translate-y-1/4">
                <span className="text-[30vw] font-black leading-none">CONTACT</span>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* LET'S TALK */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-12 bg-brand-stone" />
                        <span className="font-heading font-black text-brand-stone tracking-[0.2em] text-sm uppercase">Get in touch</span>
                        <div className="h-px w-12 bg-brand-stone" />
                    </div>

                    <h2 className="text-[16vw] md:text-[10vw] lg:text-[8vw] font-black text-brand-black leading-[0.85] tracking-normal mb-10">
                        LET<span className="inline-block mx-[0.06em]">&apos;</span>S <span className="text-brand-stone italic">TALK</span>
                    </h2>

                    <div className="text-xl md:text-2xl text-brand-black/60 leading-tight font-sans space-y-1">
                        <p className="text-brand-black font-bold mb-3">Tu marca está para más…</p>
                        <p>más estrategia</p>
                        <p>más creatividad</p>
                        <p>mejor ejecución</p>
                    </div>
                </motion.div>

                {/* Dos flechas que se abren hacia los dos caminos (desktop) */}
                <motion.svg
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewBox="0 0 1000 160"
                    fill="none"
                    aria-hidden
                    className="hidden md:block w-full h-auto mt-10 text-brand-stone"
                >
                    <path d="M500 0 C 500 70, 260 60, 250 150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                    <path d="M238 134 L250 152 L262 134" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                    <path d="M500 0 C 500 70, 740 60, 750 150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                    <path d="M738 134 L750 152 L762 134" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                </motion.svg>

                {/* Dos caminos: Make It / De La Barra Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 mt-14 md:mt-6 items-stretch">

                    {/* Make It Happen */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center text-center"
                    >
                        <MobileArrow />
                        <h3 className="text-5xl md:text-6xl font-black text-brand-black leading-[0.85] tracking-tighter mb-10">
                            MAKE IT <br />
                            <span className="text-brand-stone italic">HAPPEN</span>
                        </h3>

                        <div className="space-y-6 text-left">
                            {contacts.map((contact) => (
                                <a
                                    key={contact.label}
                                    href={contact.href}
                                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-5 group"
                                >
                                    <div className="h-14 w-14 shrink-0 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black transition-all duration-300">
                                        <div className="text-brand-black group-hover:text-white transition-colors">
                                            {contact.icon}
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-stone font-black mb-1">{contact.label}</p>
                                        <p className="text-lg md:text-xl font-black text-brand-black break-all">{contact.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Brand Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col"
                    >
                        <MobileArrow />
                        <div className="grow bg-brand-black text-white p-10 md:p-12 rounded-[50px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] text-center flex flex-col items-center">
                            <div className="relative h-20 w-20 rounded-full overflow-hidden mb-8 ring-1 ring-white/10">
                                <Image src="/images/delabarra/logo.png" alt="De La Barra Experience logo" fill sizes="80px" className="object-cover" />
                            </div>
                            <h3 className="text-5xl md:text-6xl font-black leading-[0.85] tracking-tighter mb-6">
                                BRAND <br />
                                <span className="text-brand-stone italic">EXPERIENCE</span>
                            </h3>
                            <p className="font-sans text-base md:text-lg text-white/60 leading-snug mb-10 max-w-sm">
                                Eventos, lanzamientos y activaciones de marca con De La Barra Experience.
                            </p>
                            <Link
                                href={DELABARRA_URL}
                                className="mt-auto w-full h-20 bg-white text-brand-black rounded-full flex items-center justify-center gap-5 group transition-all duration-300 hover:bg-brand-stone hover:text-white"
                            >
                                <span className="font-heading font-black tracking-[0.25em] text-xs md:text-sm uppercase">Explorá las experiencias</span>
                                <div className="h-10 w-10 rounded-full bg-brand-black/5 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                                    <ArrowUpRight size={20} />
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
