'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Package } from '@/lib/actions/packages';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

export default function PackageCard({ pkg, index = 0 }: { pkg: Package; index?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
            <Link
                href={`/packages/${pkg.id}`}
                className="group relative flex flex-col h-[580px] overflow-hidden bg-[#050a18] border border-white/[0.04] hover:border-[#c5a021]/30 transition-all duration-700"
            >
                {/* Image Section */}
                <div className="relative h-[55%] w-full overflow-hidden">
                    <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    />
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] via-[#050a18]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050a18]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Category Badge */}
                    <div className="absolute top-5 left-5">
                        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#c5a021] bg-[#020617]/80 backdrop-blur-md px-4 py-2 border border-[#c5a021]/20">
                            {pkg.category}
                        </span>
                    </div>

                    {/* Price Tag - floating */}
                    <div className="absolute top-5 right-5 text-right">
                        <span className="text-2xl font-playfair text-white">${pkg.price}</span>
                        <span className="block text-[8px] uppercase tracking-[0.3em] text-white/30 mt-0.5">per guest</span>
                    </div>

                    {/* Bottom gold accent line */}
                    <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#c5a021] via-[#c5a021]/50 to-transparent transition-all duration-700" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-7 flex flex-col relative">
                    {/* Hover glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a021]/[0.03] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Meta info */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1.5 text-[10px] text-white/35 uppercase tracking-widest">
                            <Clock className="w-3 h-3 text-[#c5a021]/40" />
                            {pkg.duration}
                        </div>
                        <div className="w-[1px] h-3 bg-white/10" />
                        <div className="flex items-center gap-1.5 text-[10px] text-white/35 uppercase tracking-widest">
                            <MapPin className="w-3 h-3 text-[#c5a021]/40" />
                            Instant Pickup
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[22px] font-playfair text-white leading-snug mb-3 group-hover:text-[#c5a021] transition-colors duration-500">
                        {pkg.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12px] text-white/40 leading-relaxed line-clamp-2 mb-6 font-light">
                        {pkg.description}
                    </p>

                    {/* Highlights mini-tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {pkg.highlights.slice(0, 3).map((h, i) => (
                            <span
                                key={i}
                                className="text-[8px] uppercase tracking-[0.2em] text-white/25 border border-white/[0.06] px-2.5 py-1 group-hover:border-[#c5a021]/15 group-hover:text-white/40 transition-all duration-500"
                            >
                                {h}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-[0.35em] font-bold text-[#c5a021]/70 group-hover:text-[#c5a021] transition-colors duration-300 font-playfair">
                            Explore
                        </span>
                        <div className="w-10 h-10 flex items-center justify-center border border-white/[0.06] group-hover:border-[#c5a021]/40 group-hover:bg-[#c5a021]/5 transition-all duration-500">
                            <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#c5a021] group-hover:translate-x-0.5 transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
