import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/lib/data';

export default function PackagesPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
            <Navbar />

            <section className="pt-40 pb-20 container relative">
                {/* Background Text Overlay */}
                <div className="absolute top-10 left-0 text-[15vw] font-playfair text-white/[0.02] pointer-events-none select-none italic tracking-tighter leading-none z-0">
                    CATALOGUE
                </div>

                <div className="relative z-10">
                    <span className="text-[11px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-medium">
                        Full Catalogue
                    </span>
                    <h1 className="text-5xl md:text-8xl font-playfair text-white tracking-tighter leading-none mb-8">
                        ALL <span className="italic">EXPERIENCES</span>
                    </h1>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 max-w-lg leading-loose border-l border-[#c5a021] pl-6">
                        Browse our expertly curated desert, tech, and fusion collections. <br />
                        Each experience includes VIP concierge & instant hotel pickup.
                    </p>
                </div>
            </section>

            <section className="pb-32 container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
