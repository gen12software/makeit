"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Photo = { src: string; alt: string };

const SIZES = "(max-width: 1024px) 90vw, 500px";

/**
 * Panel del hero de De La Barra Experience: fotos de Estefi (rotan si hay más
 * de una) con el logo fijo en la esquina. Sin fotos, el logo ocupa el panel.
 */
export default function DeLaBarraHeroPanel({ photos, logo }: { photos: Photo[]; logo: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (photos.length < 2) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [photos.length]);

    const panelClass =
        "relative w-full aspect-3/4 lg:aspect-auto lg:h-[70vh] rounded-[40px] md:rounded-[60px] overflow-hidden bg-black shadow-2xl";

    if (photos.length === 0) {
        return (
            <div className={panelClass}>
                <Image src={logo} alt="De La Barra Experience logo" fill priority sizes={SIZES} className="object-contain p-6 md:p-10" />
            </div>
        );
    }

    const photo = photos[currentIndex % photos.length];

    return (
        <div className={panelClass}>
            <AnimatePresence initial={false}>
                <motion.div
                    key={photo.src + currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <Image src={photo.src} alt={photo.alt} fill priority={currentIndex === 0} sizes={SIZES} className="object-cover" />
                </motion.div>
            </AnimatePresence>
            {/* Logo fijo en la esquina, fuera de la animación */}
            <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 z-10 w-1/4 min-w-20 aspect-square rounded-full bg-black overflow-hidden shadow-lg">
                <Image src={logo} alt="De La Barra Experience logo" fill sizes="140px" className="object-contain" />
            </div>
        </div>
    );
}
