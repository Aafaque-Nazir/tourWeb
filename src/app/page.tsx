import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import PackageSlider from '@/components/PackageSlider'; // Keeping for potential future use or removing if completely unused
import LuxuryGallery from '@/components/LuxuryGallery';
import Testimonials from '@/components/Testimonials';
import { getContent } from '@/lib/actions/content';
import { getPackages } from '@/lib/actions/packages';

export default async function Home() {
  const heroContent = await getContent('home-hero');
  const packages = await getPackages();

  return (
    <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
      <Navbar />
      <Hero
        heading={heroContent?.heading}
        subheading={heroContent?.subheading}
        backgroundImage={heroContent?.heroImage}
      />

      {/* Featured Packages Section */}
      <section className="py-32 container relative" id="packages">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none fade-mask" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 relative z-10">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-medium">
              Curated Selection
            </span>
            <h2 className="text-5xl md:text-8xl font-playfair text-white tracking-tighter leading-[0.9]">
              THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a021] via-[#e6c768] to-[#c5a021]">COLLECTION</span>
            </h2>
          </div>
          <div className="max-w-xs text-right md:text-left">
            <p className="text-[10px] uppercase tracking-[.3em] text-white/40 leading-loose border-l border-[#c5a021]/30 pl-6">
              Expertly vetted tours. <br />
              Luxury certified. <br />
              Reserved for the 1%.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </section>

      {/* Quote Section - Enhanced */}
      <section className="py-40 bg-[#050a18] border-t border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c5a021]/20 via-[#020617] to-[#020617]" />

        <div className="container relative">
          <div className="text-[20vw] font-playfair text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none italic tracking-tighter whitespace-nowrap">
            ELITE DUBAI
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-playfair text-white mb-12 leading-tight">
              &quot;The Desert is a <span className="text-[#c5a021] italic">mirage</span> of the mind, the City is a <span className="text-[#c5a021] italic">dream</span> of the future.&quot;
            </h3>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[#c5a021]/50" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">
                TourWeb Concierge Team
              </span>
              <div className="h-px w-12 bg-[#c5a021]/50" />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <LuxuryGallery />

      <Footer />
    </main>
  );
}
