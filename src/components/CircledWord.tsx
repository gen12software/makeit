import type { ReactNode } from "react";

/**
 * Recurso gráfico: envuelve una palabra con un óvalo de trazo fino, dibujado
 * "a mano" (abierto, levemente inclinado). El color sale de `className` vía
 * currentColor. Uso: <CircledWord>palabra</CircledWord>
 */
export default function CircledWord({ children, className = "text-brand-stone/60" }: { children: ReactNode; className?: string }) {
    return (
        <span className="relative inline-block">
            {children}
            <svg
                aria-hidden
                viewBox="0 0 200 100"
                preserveAspectRatio="none"
                fill="none"
                className={`absolute pointer-events-none ${className}`}
                style={{ left: "-10%", right: "-8%", top: "-14%", bottom: "-18%" }}
            >
                <path
                    d="M150 10 C 110 0, 35 4, 13 38 C -2 66, 55 96, 120 92 C 178 88, 202 56, 186 28 C 172 8, 128 4, 96 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </span>
    );
}
