import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1578509375730-10101831825c?q=80&w=2600&auto=format&fit=crop"
                    alt="Dubai Skyline Abstract"
                    fill
                    className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]" />

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-bold animate-fade-in">
                        Our Philosophy
                    </span>
                    <h1 className="text-5xl md:text-8xl font-playfair text-white tracking-tighter leading-none mb-8">
                        BEYOND <span className="italic text-[#c5a021]">ACCESS</span>
                    </h1>
                    <p className="text-sm md:text-base text-white/50 uppercase tracking-[0.2em] leading-loose max-w-2xl mx-auto">
                        We don't just offer tours. We curate moments of suspension in time for the elite traveler.
                    </p>
                </div>
            </section>

            {/* Narrative Section - Split Layout */}
            <section className="py-32 container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-5xl font-playfair text-white leading-tight">
                            The Art of <br />
                            <span className="italic text-white/30">concierge</span>
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#c5a021] mb-4">The Vision</h3>
                                <p className="text-white/60 leading-relaxed font-light">
                                    TourWeb was born from a simple observation: Dubai is vast, but true luxury is intimate. We strip away the noise of mass tourism to reveal the city's golden core—from the silence of the deep desert to the electric pulse of the marina.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#c5a021] mb-4">The Promise</h3>
                                <p className="text-white/60 leading-relaxed font-light">
                                    Instant mobility. Zero friction. Access to the inaccessible. Whether you are here for 24 hours or 24 days, we ensure every second is engineered for awe.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] w-full border border-white/5">
                        <Image
                            src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2787&auto=format&fit=crop"
                            alt="Luxury Interior"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-[#c5a021]/30 hidden md:block" />
                        <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#c5a021]/30 hidden md:block" />
                    </div>
                </div>
            </section>

            {/* Stats / Proof */}
            <section className="py-20 border-y border-white/5 bg-[#050a18]">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: 'Private Guests', value: '12k+' },
                        { label: 'Years Active', value: '08' },
                        { label: 'Elite Partners', value: '45' },
                        { label: 'Global Awards', value: '12' },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <span className="text-4xl md:text-5xl font-playfair text-white block">{stat.value}</span>
                            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a021]">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team / Fleet Teaser */}
            <section className="py-32 container text-center">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-bold">
                    The Standard
                </span>
                <h2 className="text-3xl md:text-5xl font-playfair text-white mb-16">
                    Driven by <span className="italic">Perfection</span>
                </h2>

                <div className="relative w-full h-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                    <Image
                        src="https://images.unsplash.com/photo-1563720360172-67b8f3dce1e3?q=80&w=2670&auto=format&fit=crop"
                        alt="Luxury Fleet"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <button className="btn-outline-sexy backdrop-blur-sm">View Our Fleet</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
