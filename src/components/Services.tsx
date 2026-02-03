"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        title: "PRODUCCIÓN FOTOGRÁFICA",
        image: "/images/ProduccionesFotograficas/21.png",
    },
    {
        title: "CONTENT CURATION",
        image: "/images/ContenidoDigitalyContenidodeProductos/33.png",
    },
    {
        title: "KIDS & HOME",
        image: "/images/ContenidoDigitalyContenidodeProductos/35.png",
    },
    {
        title: "PRODUCT DESIGN",
        image: "/images/ContenidoDigitalyContenidodeProductos/44.png",
    }
];

export default function Services() {
    return (
        <section id="servicios" className="bg-[#EEE] overflow-hidden">
            <div className="pt-24 px-6 md:px-12 lg:px-24 mb-16">
                <p className="text-brand-black/40 font-black uppercase tracking-widest mb-4">Estrategia & Diseño</p>
                <h2 className="text-[10vw] sm:text-[8vw] lg:text-[7vw] font-black text-brand-black leading-[0.8] tracking-[-0.05em]">
                    OUR <br />
                    SERVICES
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] border-t border-brand-black/10">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative flex-1 h-[400px] lg:h-full overflow-hidden border-r border-brand-black/10 cursor-pointer"
                    >
                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10">
                            <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tighter leading-[0.9] transition-transform duration-500 group-hover:-translate-y-4">
                                {service.title}
                            </h3>
                            <div className="h-1 w-0 group-hover:w-full bg-white transition-all duration-500 mt-4" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
