"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "5492215027463";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-100 group"
        >
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full bg-brand-stone opacity-50 animate-ping group-hover:animate-none" />

            {/* Main Button */}
            <div className="relative h-16 w-16 bg-brand-black border border-brand-stone/30 rounded-full flex items-center justify-center shadow-2xl transition-colors group-hover:bg-brand-stone">
                <MessageCircle
                    className="text-white group-hover:text-brand-black transition-colors"
                    size={32}
                />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-black text-white px-4 py-2 rounded-xl text-xs font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl border border-brand-stone/20">
                    Hablemos por WhatsApp
                </div>
            </div>
        </motion.a>
    );
}
