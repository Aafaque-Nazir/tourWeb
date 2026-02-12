import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/lib/data';

export default function PackagesPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
            <Navbar />

            <section className="pt-40 pb-16 container">
                <span className="text-[11px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-medium">
                    Full Catalogue
                </span>
                <h1 className="text-5xl md:text-8xl font-playfair text-white tracking-tighter leading-none mb-6">
                    ALL <span className="italic">EXPERIENCES</span>
                </h1>
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 max-w-md leading-loose">
                    Browse our expertly curated desert, tech, and fusion collections. Each experience includes instant hotel pickup.
                </p>
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
