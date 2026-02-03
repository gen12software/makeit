"use client";

const items = [
    { text: "MAKE IT REAL", type: "heading" },
    { text: "MANU & ESTEFI", type: "signature" },
    { text: "CREATIVE POWER DUO", type: "heading" },
    { text: "BRAND TRANSFORMATION", type: "heading" },
    { text: "STRATEGIC VISION", type: "heading" },
];

export default function Ticker() {
    return (
        <div className="py-8 border-y border-brand-black/5 overflow-hidden bg-brand-black relative z-20">
            <div className="marquee-content whitespace-nowrap flex items-center gap-16">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-16">
                        {items.map((item, idx) => (
                            <span
                                key={`${item.text}-${idx}`}
                                className={`flex items-center gap-16 ${item.type === "signature"
                                        ? "font-signature text-4xl md:text-6xl text-brand-stone"
                                        : "font-heading font-black text-2xl md:text-3xl text-white tracking-widest"
                                    }`}
                            >
                                {item.text}
                                <span className="text-white/20 font-heading text-xl md:text-2xl font-black">/</span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
