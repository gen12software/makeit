import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Contenido editable de la landing. Todo lo marcado PENDIENTE lo tiene que
 * entregar la clienta (Estefi). Mientras falte, la página usa los textos de
 * referencia y oculta los bloques sin material.
 */
const content = {
    // PENDIENTE: foto de Estefi sola → "/images/delabarra/estefi.jpg"
    photo: null as string | null,
    logo: "/images/delabarra/logo.png",
    // PENDIENTE: mail de De La Barra Experience (mientras tanto, el de Make It)
    email: "makeitstudio.agency@gmail.com",
    tagline: "Experiencias que se viven.",
    intro:
        "Eventos corporativos, lanzamientos y activaciones de marca bajo la dirección de Estefi De La Barra.",
    // PENDIENTE: CV breve de Estefi
    bio: [
        "Estefi De La Barra es Founder & Creative Director de Make It y de De La Barra Experience.",
        "Integra el concepto y la dirección creativa de cada marca a experiencias reales: eventos, activaciones y lanzamientos que potencian el alcance de cada proyecto, fortalecen su posicionamiento y conectan con sus audiencias.",
    ],
    services: [
        {
            title: "Eventos corporativos",
            description: "Encuentros que comunican la identidad de tu empresa y conectan con tu equipo, clientes y socios.",
        },
        {
            title: "Lanzamientos",
            description: "Presentaciones de producto y de marca pensadas para generar impacto desde el primer momento.",
        },
        {
            title: "Activaciones de marca",
            description: "Experiencias que acercan tu marca a su audiencia y la convierten en algo que se vive.",
        },
    ],
    // PENDIENTE: proyectos de De La Barra Experience → { name, image, description }
    projects: [] as { name: string; image: string; description: string }[],
};

export const metadata: Metadata = {
    title: "De La Barra Experience | Eventos, lanzamientos y activaciones de marca",
    description: content.intro,
    openGraph: {
        title: "De La Barra Experience",
        description: content.intro,
        siteName: "MAKE IT",
        locale: "es_AR",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "De La Barra Experience" }],
    },
};

export default function DeLaBarraExperiencePage() {
    return (
        <main className="min-h-screen bg-background text-brand-black">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-black/50 hover:text-brand-stone transition-colors mb-10"
                        >
                            <ArrowLeft size={14} /> Volver a Make It
                        </Link>
                        <p className="font-sans text-sm uppercase tracking-[0.4em] text-brand-stone mb-4">De La Barra Experience</p>
                        <h1 className="text-[12vw] sm:text-[8vw] lg:text-[5.5vw] leading-[0.95] tracking-tighter mb-8">
                            {content.tagline}
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-xl">{content.intro}</p>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="relative w-full aspect-3/4 lg:aspect-auto lg:h-[70vh] rounded-[40px] md:rounded-[60px] overflow-hidden bg-black shadow-2xl">
                            {/* Panel del hero: el logo (fondo negro puro, igual al del PNG). Si llega la foto de Estefi, la reemplaza. */}
                            {content.photo ? (
                                <Image src={content.photo} alt="Estefi De La Barra" fill priority sizes="(max-width: 1024px) 90vw, 500px" className="object-cover" />
                            ) : (
                                <Image src={content.logo} alt="De La Barra Experience logo" fill priority sizes="(max-width: 1024px) 90vw, 500px" className="object-contain p-6 md:p-10" />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Presentación */}
            <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-brand-black/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-stone mb-4">Presentación</p>
                        <h2 className="text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                            Estefi <br />
                            <span className="font-highlight italic text-brand-stone normal-case">De La Barra</span>
                        </h2>
                        <p className="mt-4 text-xs uppercase tracking-widest text-brand-black/40">Founder & Creative Director</p>
                    </div>
                    <div className="lg:col-span-7 space-y-6 font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed">
                        {content.bio.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Servicios */}
            <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-brand-black/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl tracking-tighter mb-12">
                        Lo que <span className="font-highlight italic text-brand-stone normal-case">creamos</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.services.map((service, i) => (
                            <div key={service.title} className="rounded-[2.5rem] bg-brand-black text-white p-10">
                                <span className="font-heading text-4xl text-white/30">{String(i + 1).padStart(2, "0")}</span>
                                <h3 className="text-2xl md:text-3xl mt-8 mb-4 tracking-tight">{service.title}</h3>
                                <p className="font-sans text-base text-white/60 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proyectos */}
            {content.projects.length > 0 && (
                <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-brand-black/10">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-6xl tracking-tighter mb-12">Proyectos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {content.projects.map((project) => (
                                <div key={project.name}>
                                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-4">
                                        <Image src={project.image} alt={project.name} fill sizes="(max-width: 768px) 90vw, 600px" className="object-cover" />
                                    </div>
                                    <p className="font-sans text-xl uppercase tracking-[0.2em]">{project.name}</p>
                                    <p className="font-sans text-brand-black/60 mt-2">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Contacto */}
            <section id="contacto-delabarra" className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto text-center bg-brand-black text-white rounded-[4rem] p-10 md:p-16">
                    <h2 className="text-5xl md:text-7xl tracking-tighter leading-[0.9] mb-8">
                        Hagamos que <br />
                        <span className="font-highlight italic text-brand-stone normal-case">se viva</span>
                    </h2>
                    <p className="font-sans text-lg md:text-xl text-white/60 mb-12">Contanos tu idea y la convertimos en una experiencia.</p>
                    <a
                        href={`mailto:${content.email}`}
                        className="inline-flex items-center gap-4 bg-white text-brand-black px-10 py-6 rounded-full font-bold text-sm tracking-widest hover:bg-brand-stone transition-colors"
                    >
                        <Mail size={18} />
                        <span className="break-all">{content.email}</span>
                        <ArrowUpRight size={18} />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
