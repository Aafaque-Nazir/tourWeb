import Link from 'next/link';
import { Instagram, Twitter, Linkedin, ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#010309] border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
            {/* Background Texture */}
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbikvb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-[0.15] pointer-events-none mix-blend-overlay" />

            <div className="container relative z-10">
                {/* Top Section: CTA & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-playfair text-white leading-[0.9] tracking-tighter mb-8">
                            READY FOR <br /> <span className="text-[#c5a021] italic">THE UNSEEN?</span>
                        </h2>
                        <button className="group flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-white hover:text-[#c5a021] transition-colors">
                            <span className="border-b border-white/20 group-hover:border-[#c5a021] pb-1 transition-all">Start Your Journey</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    <div className="lg:pl-20">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6 font-medium">
                            Join the Elite Circle
                        </p>
                        <form action="https://formspree.io/f/mnjbplna" method="POST" className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#c5a021] transition-all font-light pr-12"
                            />
                            {/* Hidden field for subject */}
                            <input type="hidden" name="_subject" value="New Newsletter Subscription (TourWeb)" />
                            {/* Honeypot */}
                            <input type="text" name="_gotcha" style={{ display: 'none' }} />

                            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#c5a021] transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="h-px w-full bg-white/5 mb-16" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                    {/* Brand */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="block">
                            <h3 className="text-2xl font-playfair font-bold text-white tracking-tight">TOURWEB</h3>
                        </Link>
                        <p className="text-sm text-white/40 leading-relaxed font-light max-w-xs">
                            Dubai's premier luxury concierge. Curating moments that transcend the ordinary for the world's most discerning travelers.
                        </p>
                        <div className="flex gap-6 pt-2">
                            {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/5 text-white/40 hover:text-[#c5a021] hover:border-[#c5a021]/30 hover:bg-[#c5a021]/5 transition-all duration-300">
                                    <Icon size={16} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Explore', links: ['The Collection', 'About Us', 'Journal', 'Gallery'] },
                            { title: 'Series', links: ['Desert Pulse', 'Tech Horizon', 'Fusion Flow', 'Private Jet'] },
                            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'] }
                        ].map((column, idx) => (
                            <div key={idx} className="space-y-6">
                                <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#c5a021] font-bold">{column.title}</h4>
                                <ul className="space-y-3">
                                    {column.links.map(link => (
                                        <li key={link}>
                                            <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-wide hover:translate-x-1 inline-block duration-300">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">
                    <span>© 2026 TourWeb. All Rights Reserved.</span>
                    <span className="hidden md:block">Dubai • London • New York</span>
                </div>

                {/* Massive Watermark */}
                <div className="absolute -bottom-20 -right-20 pointer-events-none select-none opacity-[0.02]">
                    <span className="text-[20vw] font-playfair font-black text-white leading-none">TW</span>
                </div>
            </div>
        </footer>
    );
}
