'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface PackageHeroProps {
    image: string;
    title: string;
    category: string;
    duration: string;
    price: number;
}

const PackageHero = ({ image, title, category, duration, price }: PackageHeroProps) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-[75vh] md:min-h-[85vh] w-full overflow-hidden flex flex-col justify-end pt-44 pb-20 md:pb-24">
            {/* Parallax Image Background */}
            <motion.div style={{ y, opacity: 1 }} className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-transparent" />
                {/* Nano Tech Overlay */}
                <div className="absolute inset-0 nano-overlay opacity-20 pointer-events-none" />
            </motion.div>

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-auto">
                <div className="md:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-0"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-[#c5a021]" />
                            <span className="text-[11px] uppercase tracking-[0.4em] text-[#c5a021] font-bold">
                                {category} Collection
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-playfair text-white tracking-tighter leading-[1.1] mb-8">
                            {title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 md:gap-12">
                            <div>
                                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Duration</span>
                                <span className="text-lg font-playfair text-white">{duration} Experience</span>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10 hidden md:block" />
                            <div>
                                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Starting From</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-playfair text-[#c5a021]">${price}</span>
                                    <span className="text-[10px] text-white/30">/ Guest</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default PackageHero;
