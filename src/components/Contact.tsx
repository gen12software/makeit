"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send, Mail, Instagram, Linkedin, Globe, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section id="contacto" className="section-padding bg-background relative overflow-hidden">
            {/* Background Decorative Text - Matching the site's editorial language */}
            <div className="absolute bottom-0 left-0 opacity-[0.03] select-none pointer-events-none -translate-x-1/4 translate-y-1/4">
                <span className="text-[30vw] font-black leading-none">CONTACT</span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

                    {/* Left Column: Information & Text */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px w-12 bg-brand-stone" />
                                <span className="font-heading font-black text-brand-stone tracking-[0.2em] text-sm uppercase">Get in touch</span>
                            </div>

                            <h2 className="text-[12vw] lg:text-[7vw] font-black text-brand-black leading-[0.85] tracking-tighter mb-12">
                                LET&apos;S <br />
                                <span className="text-brand-stone italic">TALK</span>
                            </h2>

                            <div className="space-y-10">
                                <p className="text-xl md:text-2xl text-brand-black/60 leading-relaxed font-sans max-w-sm">
                                    Estamos listos para transformar tu visión en una realidad digital de alto impacto. Escribinos y empecemos a crear.
                                </p>

                                <div className="space-y-8 pt-10">
                                    {[
                                        {
                                            icon: <Mail size={20} />,
                                            label: "Email",
                                            value: "makeitstudio.agency@gmail.com",
                                            href: "mailto:makeitstudio.agency@gmail.com"
                                        },
                                        {
                                            icon: <MessageCircle size={20} />,
                                            label: "WhatsApp",
                                            value: "+54 9 2215 02-7463",
                                            href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5492215027463"}`
                                        },
                                        {
                                            icon: <Instagram size={20} />,
                                            label: "Instagram",
                                            value: "@makeitagency_",
                                            href: "https://instagram.com/makeitagency_"
                                        }
                                    ].map((contact) => (
                                        <a
                                            key={contact.label}
                                            href={contact.href}
                                            target={contact.href.startsWith('http') ? "_blank" : undefined}
                                            rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                            className="flex items-center gap-6 group"
                                        >
                                            <div className="h-14 w-14 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black transition-all duration-300">
                                                <div className="text-brand-black group-hover:text-white transition-colors">
                                                    {contact.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-stone font-black mb-1">{contact.label}</p>
                                                <p className="text-xl font-black text-brand-black">{contact.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Calendly Booking Card */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-10 md:p-20 rounded-[50px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-brand-stone/10 text-center flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-brand-light-gray flex items-center justify-center mb-10">
                                <Globe className="text-brand-black w-10 h-10" />
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black text-brand-black mb-6 tracking-tighter leading-tight italic uppercase">
                                Reserva tu <br /> <span className="text-brand-stone not-italic">Reunión</span>
                            </h3>

                            <p className="text-lg md:text-xl text-brand-black/50 leading-relaxed font-sans mb-12 max-w-sm">
                                Elegí el día y horario que mejor te quede para conversar sobre tu proyecto y cómo podemos potenciarlo.
                            </p>

                            <motion.a
                                href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/makeitstudio-agency/reunion"}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full h-24 bg-brand-black text-white rounded-full flex items-center justify-center gap-6 group transition-all duration-300 hover:bg-brand-stone shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]"
                            >
                                <span className="font-heading font-black tracking-[0.3em] text-sm uppercase">Agendar Llamada</span>
                                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                                    <ArrowUpRight size={20} />
                                </div>
                            </motion.a>

                            <div className="mt-12 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-brand-black/20">
                                <div className="w-2 h-2 rounded-full bg-brand-stone animate-pulse" />
                                <span>Disponibilidad Actualizada</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-40 pt-16 border-t border-brand-black/5 flex flex-col md:flex-row justify-between items-center gap-8 italic text-brand-black/30 font-black text-sm tracking-widest select-none">
                    <p>© 2024 MAKE IT STUDIO. ALL RIGHTS RESERVED.</p>
                    <p className="font-heading font-black text-brand-stone text-base md:text-xl uppercase tracking-[0.3em] not-italic">Manu & Estefi</p>
                    <p>CBA / BSAS - GLOBAL</p>
                </div>
            </div>
        </section>
    );
}
