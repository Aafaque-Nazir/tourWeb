import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-white/[0.03] pt-24 pb-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand */}
                    <div className="md:col-span-4 space-y-6">
                        <h3 className="text-3xl font-playfair gold-gradient-text tracking-tighter">TOURWEB</h3>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 leading-loose max-w-xs">
                            Curating exclusive Dubai experiences for the discerning mind. Desert purity, Tech precision, Fusion excellence.
                        </p>
                    </div>

                    {/* Explore */}
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] font-bold">Explore</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Desert', href: '/packages?cat=desert' },
                                { name: 'Tech', href: '/packages?cat=tech' },
                                { name: 'Fusion', href: '/packages?cat=fusion' },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] font-bold">Concierge</h4>
                        <ul className="space-y-4 text-[11px] uppercase tracking-[0.15em] text-white/40">
                            <li>+971 4 123 4567</li>
                            <li>concierge@tourweb.ae</li>
                            <li>Downtown Dubai, UAE</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] font-bold">Connect</h4>
                        <div className="flex gap-6">
                            {['IG', 'X', 'FB'].map(social => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-[11px] uppercase tracking-[0.3em] text-white/30 hover:text-[#c5a021] transition-colors"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.03] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-[9px] uppercase tracking-[0.5em] text-white/20">
                        © 2026 TOURWEB — All Rights Reserved
                    </span>
                    <div className="flex gap-8">
                        <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-white/50 transition-colors">Privacy</a>
                        <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-white/50 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
