'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
    id: string;
    content: string;
    excerpt?: string;
    title: string;
    author: string;
}

export default function TestimonialsClient({ testimonials }: { testimonials: Testimonial[] }) {
    if (testimonials.length === 0) return null;

    return (
        <section className="py-32 bg-[#020617] relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 nano-overlay opacity-10 pointer-events-none" />

            <div className="container relative z-10 mb-16">
                <div className="text-center">
                    <span className="text-[11px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-medium">
                        Client Voices
                    </span>
                    <h2 className="text-4xl md:text-5xl font-playfair text-white">
                        STORIES OF THE <span className="italic text-[#c5a021]">ELITE</span>
                    </h2>
                </div>
            </div>

            {/* Marquee Animation */}
            <div className="relative w-full overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 w-max pl-8"
                    animate={{ x: ['-25%', '-50%'] }} // Smooth continuous loop
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    }}
                    whileHover={{ animationPlayState: 'paused' }}
                >
                    {/* Double the array to create seamless loop */}
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                        <div
                            key={`${t.id}-${idx}`}
                            className="w-[450px] flex-shrink-0 p-10 rounded-none border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group hover:bg-white/[0.04] transition-colors duration-500"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c5a021]/30 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c5a021]/30 opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 opacity-30">
                                <Quote className="w-10 h-10 text-[#c5a021]" />
                            </div>

                            <p className="text-xl md:text-2xl font-playfair text-white/90 mb-8 leading-relaxed italic border-l-2 border-[#c5a021]/20 pl-6">
                                "{t.excerpt || t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-[#c5a021]/50" />
                                <div>
                                    <h4 className="text-white font-playfair text-lg">{t.title}</h4>
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a021] font-medium">
                                        {t.author}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
