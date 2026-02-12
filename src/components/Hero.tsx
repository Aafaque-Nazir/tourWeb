'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center bg-[#020617]">
            {/* Cinematic Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="https://images.unsplash.com/photo-1549244837-77567e91d5ce?q=80&w=2800"
                    alt="Dubai Mirage"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Sexy Content Layout */}
            <div className="container relative z-10 pt-28">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block text-[11px] uppercase tracking-[0.5em] text-[hsl(var(--primary))] mb-6 font-medium">
                            Available Now In-City
                        </span>

                        <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-playfair text-white leading-[0.85] tracking-tighter mb-8">
                            THE <br />
                            <span className="gold-gradient-text italic">MIRAGE</span> <br />
                            EFFECT
                        </h1>

                        <p className="text-sm md:text-base text-white/50 max-w-sm mb-12 font-light leading-relaxed uppercase tracking-widest">
                            Desert. Tech. Fusion. <br />
                            Instant VIP mobility for the <br />
                            discerning traveler already in Dubai.
                        </p>

                        <div className="flex flex-wrap gap-8 items-center">
                            <button className="btn-sexy flex items-center gap-4 group">
                                Reserve Experience
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                            </button>

                            <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 hover:text-white transition-all group">
                                <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-[hsl(var(--primary))] transition-all duration-700" />
                                View Map
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Side Label */}
            <div className="absolute right-10 top-1/2 -rotate-90 origin-right hidden lg:block">
                <span className="text-[9px] uppercase tracking-[1em] text-white/10 whitespace-nowrap">
                    EXPERIENCE THE EXTRAORDINARY • DUBAI 2026
                </span>
            </div>
        </section>
    );
}
