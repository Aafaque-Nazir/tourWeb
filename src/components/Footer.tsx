import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-[#c5a021]/20 pt-24 pb-12 relative overflow-hidden">
            {/* Nano Tech Overlay */}
            <div className="absolute inset-0 nano-overlay opacity-5 pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Social */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl font-playfair gold-gradient-text tracking-tighter mb-2">TOURWEB</h3>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Dubai Elite Concierge</span>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed font-sans max-w-xs">
                            Crafting bespoke narratives in the City of Gold. From the silence of the dune to the pulse of the marina.
                        </p>
                        <div className="flex gap-5 pt-2">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-white/40 hover:text-[#c5a021] transition-colors hover:scale-110 transform duration-300">
                                    <Icon size={18} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="space-y-6">
                        <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#c5a021] font-bold">Menu</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '/about' },
                                { name: 'Packages', href: '/packages' },
                                { name: 'Contact', href: '#' },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors font-sans tracking-wide">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Series */}
                    <div className="space-y-6">
                        <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#c5a021] font-bold">Series</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Desert Pulse', href: '/packages?cat=desert' },
                                { name: 'Tech Horizon', href: '/packages?cat=tech' },
                                { name: 'Fusion Flow', href: '/packages?cat=fusion' },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors font-sans tracking-wide">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#c5a021] font-bold">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="block text-[10px] uppercase text-white/30 tracking-widest mb-1">Concierge Line</span>
                                <span className="text-sm text-white/80 font-sans">+971 4 123 4567</span>
                            </li>
                            <li>
                                <span className="block text-[10px] uppercase text-white/30 tracking-widest mb-1">Email</span>
                                <span className="text-sm text-white/80 font-sans">concierge@tourweb.ae</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-sans">
                        © 2026 TourWeb Elite
                    </span>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white/50 transition-colors font-sans">Privacy</a>
                        <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white/50 transition-colors font-sans">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
