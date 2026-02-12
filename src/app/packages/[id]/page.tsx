import { packages } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import PackageHero from '@/components/PackageHero';
import { Check, Clock, MapPin, Star } from 'lucide-react';
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

            {/* Dynamic Client Hero */}
            <PackageHero
                image={pkg.image}
                title={pkg.title}
                category={pkg.category}
                duration={pkg.duration}
                price={pkg.price}
            />

            {/* Elegant Content Grid */}
            <section className="relative py-24 container z-20 -mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8 bg-[#020617]/50 backdrop-blur-xl border border-white/5 p-8 md:p-12 shadow-2xl">
                        {/* Overview */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-playfair text-white mb-6 flex items-baseline gap-4">
                                <span className="text-[#c5a021]">01.</span> The Experience
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed font-light first-letter:text-5xl first-letter:font-playfair first-letter:text-white first-letter:float-left first-letter:mr-3">
                                {pkg.description}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-playfair text-white mb-8 flex items-baseline gap-4">
                                <span className="text-[#c5a021]">02.</span> Highlights
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {pkg.highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
                                        <div className="w-10 h-10 flex items-center justify-center border border-[#c5a021]/30 rounded-full group-hover:border-[#c5a021] transition-colors">
                                            <Star className="w-4 h-4 text-[#c5a021]" />
                                        </div>
                                        <span className="text-sm font-medium tracking-wide text-white/80">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Itinerary Timeline */}
                        <div>
                            <h2 className="text-3xl font-playfair text-white mb-10 flex items-baseline gap-4">
                                <span className="text-[#c5a021]">03.</span> Itinerary
                            </h2>
                            <div className="space-y-0 relative border-l-2 border-white/[0.05] ml-4">
                                {[
                                    { time: '09:00', title: 'Luxury Pickup', desc: 'Chauffeur arrives at your hotel in a premium vehicle.', icon: MapPin },
                                    { time: '10:30', title: 'Welcome & Briefing', desc: 'Traditional Arabic coffee welcome ceremony.', icon: Star },
                                    { time: '12:00', title: 'Core Experience', desc: 'The main activity commences with VIP access.', icon: Clock },
                                    { time: '14:00', title: 'Gourmet Dining', desc: 'Five-star catered meal with refreshments.', icon: Check },
                                ].map((item, idx) => (
                                    <div key={idx} className="relative pl-12 pb-12 last:pb-0 group">
                                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#020617] border-2 border-[#c5a021] z-10 group-hover:scale-125 transition-transform duration-300" />

                                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                                            <span className="text-sm font-bold text-[#c5a021] tracking-widest">{item.time}</span>
                                            <h4 className="text-xl font-playfair text-white group-hover:text-[#c5a021] transition-colors">{item.title}</h4>
                                        </div>
                                        <p className="text-sm text-white/50 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Booking */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32">
                            <div className="absolute -inset-4 bg-gradient-to-b from-[#c5a021]/10 to-transparent blur-xl -z-10" />
                            <BookingForm packageTitle={pkg.title} />

                            <div className="mt-8 p-6 border border-white/5 bg-white/[0.02]">
                                <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a021] mb-4 font-bold">Concept Note</h4>
                                <p className="text-xs text-white/40 leading-relaxed italic">
                                    "We don't sell tours. We design moments that become memory artifacts. This itinerary is curated for the 1%."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
