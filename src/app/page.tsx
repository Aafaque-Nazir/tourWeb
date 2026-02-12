import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import PackageSlider from '@/components/PackageSlider'; // Keeping for potential future use or removing if completely unused
import LuxuryGallery from '@/components/LuxuryGallery';
import { packages } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
      <Navbar />
      <Hero />

      {/* Featured Packages Section */}
      <section className="py-32 container" id="packages">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-medium">
              Curated Selection
            </span>
            <h2 className="text-5xl md:text-7xl font-playfair text-white tracking-tighter leading-tight">
              THE <span className="text-[#c5a021]">COLLECTION</span>
            </h2>
          </div>
          <p className="text-[11px] uppercase tracking-[.3em] text-white/30 max-w-sm leading-loose">
            Expertly vetted and luxury certified tours for travelers already in any Dubai hotel. Reserved for the 1%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Sexy Split Quote Section */}
      <section className="py-40 bg-[#050a18] border-y border-white/5 overflow-hidden">
        <div className="container relative">
          <div className="text-[25vw] font-playfair text-white/5 absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none italic tracking-tighter">
            DUBAI
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-playfair text-white mb-12 leading-relaxed">
              "The Desert is a <span className="gold-gradient-text">mirage</span> of the mind, the City is a <span className="italic">dream</span> of the future."
            </h3>
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30">
              — TourWeb Concierge Team
            </span>
          </div>
        </div>
      </section>

      <LuxuryGallery />

      <Footer />
    </main>
  );
}
