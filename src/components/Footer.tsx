import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-12 px-6 md:px-12 bg-white border-t border-border">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <Link href="/" className="relative h-8 w-24">
                    <Image
                        src="/logo.png"
                        alt="MAKE IT Logo"
                        fill
                        className="object-contain"
                    />
                </Link>

                <div className="flex gap-8 text-sm font-bold text-brand-black/50 uppercase tracking-widest">
                    <Link href="#home" className="hover:text-brand-stone transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-brand-stone transition-colors">About</Link>
                    <Link href="#servicios" className="hover:text-brand-stone transition-colors">Servicios</Link>
                    <Link href="#proyectos" className="hover:text-brand-stone transition-colors">Proyectos</Link>
                </div>

                <div className="text-sm font-medium text-brand-black/40">
                    © {new Date().getFullYear()} MAKE IT STUDIO. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
