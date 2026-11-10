"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DELABARRA_URL } from "@/lib/links";

const navLinks = [
    { name: "HOME", href: "/#home" },
    { name: "ABOUT US", href: "/#about" },
    { name: "SERVICES", href: "/#servicios" },
    { name: "PROJECTS", href: "/#proyectos" },
    { name: "DE LA BARRA EXPERIENCE", href: DELABARRA_URL },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-white/80 backdrop-blur-xl shadow-sm" : "py-4 md:py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link
                    href="/"
                    aria-label="MAKE IT Studio — Inicio"
                    className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                    <Image
                        src="/logo.png"
                        alt="MAKE IT Logo"
                        fill
                        sizes="48px"
                        className="object-cover"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:gap-5 lg:gap-10 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] lg:text-sm font-bold tracking-widest whitespace-nowrap transition-all duration-300 hover:text-brand-stone text-brand-black"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#contacto"
                        aria-label="Contactanos"
                        className="hidden lg:inline-block px-8 py-3 bg-brand-black text-white rounded-full text-xs font-bold tracking-[0.2em] whitespace-nowrap hover:bg-brand-stone transition-all transform hover:scale-105"
                    >
                        CONTACT US
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-black"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-white border-b border-brand-black/10 overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl font-bold text-brand-black tracking-tighter"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
