'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    '/assets/gallery-1.png',
    '/assets/gallery-2.png',
    '/assets/gallery-3.png',
    '/assets/gallery-4.png',
    '/assets/gallery-5.png',
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

            {/* Testimonials Marquee - Enhanced */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 w-max pl-8"
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 50,
                        ease: "linear",
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                        <div
                            key={idx}
                            className="w-[450px] flex-shrink-0 p-10 rounded-none border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group hover:bg-white/[0.04] transition-colors duration-500"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c5a021]/30 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c5a021]/30 opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 opacity-30">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-[#c5a021]">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                            </div>

                            <h3 className="text-xl md:text-2xl font-playfair text-white/90 mb-8 leading-relaxed italic border-l-2 border-[#c5a021]/20 pl-6">
                                "{item.quote}"
                            </h3>

                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-[#c5a021]/50" />
                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a021] font-medium">
                                    {item.author}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
