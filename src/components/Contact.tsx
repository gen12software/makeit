"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send, Mail, Instagram, Linkedin, Globe } from "lucide-react";

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

                                <div className="space-y-6 pt-10">
                                    <a href="mailto:hola@makeit-studio.com" className="flex items-center gap-6 group">
                                        <div className="h-14 w-14 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black transition-all duration-300">
                                            <Mail className="text-brand-black group-hover:text-white transition-colors" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-stone font-black mb-1">Email</p>
                                            <p className="text-xl font-black text-brand-black">hola@makeit-studio.com</p>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-4 pt-4">
                                        {[
                                            { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
                                            { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
                                            { icon: <Globe size={20} />, label: "Behance", href: "#" }
                                        ].map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                className="h-12 w-12 rounded-full border border-brand-black/5 flex items-center justify-center hover:bg-brand-stone/10 transition-colors"
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Modern Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-8 md:p-16 rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-brand-stone/10"
                        >
                            <form className="space-y-10 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder=" "
                                            className="peer w-full bg-transparent border-b-2 border-brand-black/10 py-4 text-lg md:text-xl font-black text-brand-black outline-none transition-all focus:border-brand-stone"
                                        />
                                        <label className="absolute left-0 top-4 text-brand-black/30 text-base md:text-lg font-black uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-stone peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                                            Nombre
                                        </label>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder=" "
                                            className="peer w-full bg-transparent border-b-2 border-brand-black/10 py-4 text-lg md:text-xl font-black text-brand-black outline-none transition-all focus:border-brand-stone"
                                        />
                                        <label className="absolute left-0 top-4 text-brand-black/30 text-base md:text-lg font-black uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-stone peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                                            Email
                                        </label>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder=" "
                                        className="peer w-full bg-transparent border-b-2 border-brand-black/10 py-4 text-lg md:text-xl font-black text-brand-black outline-none transition-all focus:border-brand-stone"
                                    />
                                    <label className="absolute left-0 top-4 text-brand-black/30 text-base md:text-lg font-black uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-stone peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                                        Interés (Marca, Foto, Estrategia...)
                                    </label>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        rows={2}
                                        placeholder=" "
                                        className="peer w-full bg-transparent border-b-2 border-brand-black/10 py-4 text-lg md:text-xl font-black text-brand-black outline-none transition-all focus:border-brand-stone resize-none"
                                    />
                                    <label className="absolute left-0 top-4 text-brand-black/30 text-base md:text-lg font-black uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-stone peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                                        Tu Mensaje
                                    </label>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full h-20 bg-brand-black text-white rounded-full flex items-center justify-center gap-4 group transition-all duration-300 hover:bg-brand-stone"
                                >
                                    <span className="font-heading font-black tracking-[0.3em] text-sm uppercase">Enviar Mensaje</span>
                                    <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                                        <Send size={16} />
                                    </div>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-40 pt-16 border-t border-brand-black/5 flex flex-col md:flex-row justify-between items-center gap-8 italic text-brand-black/30 font-black text-sm tracking-widest select-none">
                    <p>© 2024 MAKE IT STUDIO. ALL RIGHTS RESERVED.</p>
                    <p className="font-signature text-3xl opacity-50">Manu & Estefi</p>
                    <p>CBA / BSAS - GLOBAL</p>
                </div>
            </div>
        </section>
    );
}
