import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-[#c5a021]/20 pt-32 pb-16 relative overflow-hidden">
            {/* Nano Tech Overlay */}
            <div className="absolute inset-0 nano-overlay opacity-10 pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand */}
                    <div className="md:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-4xl font-playfair gold-gradient-text tracking-tighter mb-2">TOURWEB</h3>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/20">Dubai Elite Concierge</span>
                        </div>
                        <p className="text-[13px] text-white/50 leading-loose max-w-sm font-light">
                            Crafting bespoke narratives in the City of Gold. From the silence of the dune to the pulse of the marina, we curate the impossible.
                        </p>
                    </div>

                    {/* Explore */}
                    <div className="md:col-span-2 md:col-start-7 space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] font-bold">Menu</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '/about' },
                                { name: 'Packages', href: '/packages' },
                                { name: 'Contact', href: '#' },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Collection */}
                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] font-bold">Series</h4>
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

                    {/* Social */}
                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] font-bold">Follow</h4>
                        <ul className="space-y-4">
                            {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                                <li key={social}>
                                    <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-[#c5a021] transition-colors">{social}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.05] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
                        © 2026 TourWeb Elite
                    </span>
                    <div className="flex gap-8">
                        <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-white/50 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-white/50 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
