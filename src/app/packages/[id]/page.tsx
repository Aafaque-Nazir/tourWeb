import { packages } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return packages.map((pkg) => ({ id: pkg.id }));
}

export default async function PackageDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const pkg = packages.find((p) => p.id === id);
    if (!pkg) notFound();

    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
            <Navbar />

            {/* Cinematic Hero */}
            <section className="relative h-[70vh] w-full flex items-end pb-20">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

                <div className="container relative z-10 max-w-3xl">
                    <span className="inline-block text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-4 font-bold">
                        {pkg.category} Experience
                    </span>
                    <h1 className="text-5xl md:text-7xl font-playfair text-white tracking-tighter leading-[0.9] mb-6">
                        {pkg.title}
                    </h1>
                    <div className="flex items-baseline gap-8 text-white/50">
                        <span className="text-[11px] uppercase tracking-[0.3em]">{pkg.duration}</span>
                        <span className="text-3xl font-playfair text-[#c5a021] italic">${pkg.price}</span>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-white/30">/ person</span>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-20 container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Details */}
                    <div className="lg:col-span-7 space-y-16">
                        <div>
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 font-bold">Overview</h2>
                            <p className="text-base text-white/60 leading-relaxed font-light">
                                {pkg.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-8 font-bold">Included</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {pkg.highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 border border-white/[0.03] hover:border-[#c5a021]/20 transition-colors">
                                        <Check className="w-4 h-4 text-[#c5a021] shrink-0" />
                                        <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div>
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-8 font-bold">Itinerary</h2>
                            <div className="space-y-0 border-l border-white/[0.05]">
                                {[
                                    { time: '09:00', title: 'Luxury Pickup', desc: 'Chauffeur arrives at your hotel in a premium vehicle.' },
                                    { time: '10:30', title: 'Welcome & Briefing', desc: 'Traditional Arabic coffee welcome ceremony.' },
                                    { time: '12:00', title: 'Core Experience', desc: 'The main activity commences with VIP access.' },
                                    { time: '14:00', title: 'Gourmet Dining', desc: 'Five-star catered meal with refreshments.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="relative pl-10 py-8 hover:bg-white/[0.01] transition-colors">
                                        <div className="absolute left-[-5px] top-10 w-[10px] h-[10px] bg-[#c5a021]" />
                                        <span className="text-[10px] tracking-[0.4em] text-[#c5a021] font-bold block mb-2">{item.time}</span>
                                        <h4 className="text-lg font-playfair text-white mb-2">{item.title}</h4>
                                        <p className="text-[11px] text-white/40 uppercase tracking-[0.1em]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Booking */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28">
                            <BookingForm packageTitle={pkg.title} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
