'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Package } from '@/lib/data';
import { motion } from 'framer-motion';

export default function PackageCard({ pkg }: { pkg: Package }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="card-luxury group relative flex flex-col h-[600px] overflow-hidden"
        >
            {/* Image with subtle zoom */}
            <div className="relative h-[65%] w-full overflow-hidden">
                <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] to-transparent opacity-80" />

                {/* Category Tag */}
                <div className="absolute top-6 left-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white glass px-4 py-2">
                        {pkg.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-2xl font-playfair text-white leading-tight pr-4">
                        {pkg.title}
                    </h3>
                    <span className="text-[#c5a021] font-medium text-sm tracking-widest italic font-playfair">
                        ${pkg.price}
                    </span>
                </div>

                <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-6 leading-relaxed">
                    {pkg.duration} • Instant Pickup
                </p>

                <p className="text-xs text-white/60 mb-8 line-clamp-2 leading-relaxed font-light">
                    {pkg.description}
                </p>

                <div className="mt-auto">
                    <Link
                        href={`/packages/${pkg.id}`}
                        className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-[#c5a021] group/link"
                    >
                        DISCOVER
                        <span className="w-8 h-px bg-[#c5a021]/30 group-hover/link:w-16 group-hover/link:bg-[#c5a021] transition-all duration-500" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
