"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contacto" className="bg-brand-black text-white py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[9vw] lg:text-[6.5vw] font-black leading-[0.8] tracking-[-0.05em] mb-12">
                        READY <br />
                        TO WORK <br />
                        WITH US?
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                            <label className="text-xs font-black uppercase tracking-widest text-white/40">Full Name</label>
                            <input
                                type="text"
                                className="minimal-input w-full text-2xl font-bold text-white placeholder:text-white/10"
                                placeholder="Write your name"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-white/40">Email</label>
                                <input
                                    type="email"
                                    className="minimal-input w-full text-2xl font-bold text-white placeholder:text-white/10"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-white/40">Phone</label>
                                <input
                                    type="tel"
                                    className="minimal-input w-full text-2xl font-bold text-white placeholder:text-white/10"
                                    placeholder="+54 000 000"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-black uppercase tracking-widest text-white/40">Message</label>
                            <textarea
                                rows={1}
                                className="minimal-input w-full text-2xl font-bold text-white placeholder:text-white/10 resize-none h-auto overflow-hidden"
                                placeholder="How can we help?"
                            />
                        </div>

                        <button className="w-full py-5 bg-white text-brand-black rounded-full font-black text-lg hover:bg-brand-stone transition-all transform hover:scale-[1.02] tracking-widest uppercase">
                            Enviar
                        </button>
                    </form>
                </motion.div>
            </div>

            <div className="mt-32 pt-12 border-t border-white/10 flex flex-wrap justify-between items-center gap-8">
                <div className="font-signature text-5xl text-white/20 select-none">
                    MAKE IT Studio
                </div>
                <div className="flex gap-12 text-sm font-black uppercase tracking-[0.2em] text-white/40">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Behance</a>
                </div>
            </div>
        </section>
    );
}
