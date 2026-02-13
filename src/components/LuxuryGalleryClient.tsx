'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LuxuryGalleryClientProps {
    images: string[];
}

export default function LuxuryGalleryClient({ images }: LuxuryGalleryClientProps) {
    return (
        <section className="py-32 overflow-hidden bg-[#020617] border-t border-white/5 relative">
            <div className="container mb-16 relative z-10">
                <span className="text-[11px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-medium">
                    The Lifestyle
                </span>
                <h2 className="text-4xl md:text-6xl font-playfair text-white">
                    MOMENTS IN <span className="text-white/50">MOTION</span>
                </h2>
            </div>

            {/* Infinite Scroll Gallery */}
            <div className="relative w-full overflow-hidden mb-32 group">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                    whileHover={{ animationPlayState: 'paused' }}
                >
                    {[...images, ...images].map((src, idx) => (
                        <div key={idx} className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src={src}
                                alt="Luxury Moment"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
