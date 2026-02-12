'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    'https://images.unsplash.com/photo-1547234935-80c7142ea969?q=80&w=800&auto=format&fit=crop', // Desert (Reliable)
    'https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=800&auto=format&fit=crop', // Skyline (Reliable)
    'https://images.unsplash.com/photo-1518684079-3c830dcef6c3?q=80&w=800&auto=format&fit=crop', // Marina (Reliable)
    'https://images.unsplash.com/photo-1578509375730-10101831825c?q=80&w=800&auto=format&fit=crop', // Future (Reliable)
    'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=800&auto=format&fit=crop', // Water (Reliable)
];

const testimonials = [
    {
        quote: "The only way to see Dubai. Absolute perfection from pickup to drop-off.",
        author: "Alexander V., CEO",
    },
    {
        quote: "Surreal. The desert silence and the city noise, perfectly curated.",
        author: "Elena R., Architect",
    },
    {
        quote: "Instant access to places I didn't verify existed. Top tier.",
        author: "Marcus J., Investor",
    },
];

export default function LuxuryGallery() {
    return (
        <section className="py-32 overflow-hidden bg-[#020617] border-t border-white/5 relative">
            <div className="container mb-16 relative z-10">
                <span className="text-[11px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-medium">
                    The Lifestyle
                </span>
                <h2 className="text-4xl md:text-6xl font-playfair text-white">
                    MOMENTS IN <span className="italic text-white/50">MOTION</span>
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
                    {[...galleryImages, ...galleryImages].map((src, idx) => (
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

            {/* Testimonials Marquee */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-16 w-max"
                    animate={{ x: ['-50%', '0%'] }} // Reverse direction
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                        <div key={idx} className="w-[400px] md:w-[600px] flex-shrink-0 text-center opacity-50 hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-2xl md:text-4xl font-playfair text-white mb-6 leading-tight">
                                "{item.quote}"
                            </h3>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a021]">
                                — {item.author}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
