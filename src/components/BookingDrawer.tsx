'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Clock, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { packages } from '@/lib/data';

export default function BookingDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <>
            {/* Trigger Button — Magnetic Gold Pulse */}
            <button
                onClick={() => setIsOpen(true)}
                className="relative group overflow-hidden"
            >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-none border border-[#c5a021]/40 animate-ping opacity-20 pointer-events-none" />

                {/* Main button body */}
                <span className="relative block px-8 py-3 bg-gradient-to-r from-[#c5a021] to-[#dbb832] text-[#020617] text-[11px] uppercase tracking-[0.35em] font-bold transition-all duration-500 group-hover:from-[#dbb832] group-hover:to-[#e8c84a] group-hover:tracking-[0.5em] group-hover:shadow-[0_0_30px_rgba(197,160,33,0.3)]">
                    Book Now

                    {/* Shimmer sweep */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                </span>
            </button>

            {/* Drawer Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 h-full w-full md:w-[520px] bg-[#050a18] z-[101] flex flex-col overflow-y-auto"
                        >
                            {/* Top gold line */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a021] to-transparent" />

                            {/* Header */}
                            <div className="flex items-center justify-between p-8 pb-6">
                                <div>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] font-bold mb-2"
                                    >
                                        Select Your Experience
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="text-[11px] text-white/30 tracking-wide"
                                    >
                                        Choose a collection to begin booking
                                    </motion.p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#c5a021]/50 hover:bg-[#c5a021]/5 transition-all duration-300 text-white/40 hover:text-[#c5a021]"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Package Cards */}
                            <div className="flex-1 px-8 pb-8 space-y-4">
                                {packages.map((pkg, idx) => (
                                    <motion.div
                                        key={pkg.id}
                                        initial={{ opacity: 0, x: 60 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Link
                                            href={`/packages/${pkg.id}`}
                                            onClick={() => setIsOpen(false)}
                                            className="group relative block overflow-hidden border border-white/[0.05] hover:border-[#c5a021]/30 transition-all duration-500"
                                            onMouseEnter={() => setHoveredIdx(idx)}
                                            onMouseLeave={() => setHoveredIdx(null)}
                                        >
                                            {/* Background image */}
                                            <div className="absolute inset-0 z-0">
                                                <Image
                                                    src={pkg.image}
                                                    alt={pkg.title}
                                                    fill
                                                    className={`object-cover transition-all duration-700 ${hoveredIdx === idx ? 'scale-110 opacity-40' : 'scale-100 opacity-20'}`}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#050a18] via-[#050a18]/90 to-[#050a18]/70" />
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 p-6 flex items-center justify-between gap-4">
                                                <div className="flex-1 min-w-0">
                                                    {/* Category */}
                                                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#c5a021]/70 font-bold mb-2 block">
                                                        {String(idx + 1).padStart(2, '0')} — {pkg.category}
                                                    </span>

                                                    {/* Title */}
                                                    <h3 className="text-xl font-playfair text-white mb-3 group-hover:text-[#c5a021] transition-colors duration-300 leading-tight truncate">
                                                        {pkg.title}
                                                    </h3>

                                                    {/* Meta */}
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-wider">
                                                            <Clock className="w-3 h-3 text-[#c5a021]/40" />
                                                            {pkg.duration}
                                                        </div>
                                                        <div className="w-[1px] h-3 bg-white/10" />
                                                        <span className="text-lg font-playfair text-white/80 group-hover:text-[#c5a021] transition-colors">
                                                            ${pkg.price}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Arrow */}
                                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-white/[0.06] group-hover:border-[#c5a021]/40 group-hover:bg-[#c5a021]/10 transition-all duration-300">
                                                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#c5a021] group-hover:translate-x-0.5 transition-all duration-300" />
                                                </div>
                                            </div>

                                            {/* Bottom gold line on hover */}
                                            <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#c5a021] to-[#c5a021]/0 transition-all duration-500 ${hoveredIdx === idx ? 'w-full' : 'w-0'}`} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="border-t border-white/[0.04] p-8"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Sparkles className="w-4 h-4 text-[#c5a021]/40" />
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">VIP Concierge</span>
                                </div>
                                <p className="text-[11px] text-white/25 leading-relaxed">
                                    Need a bespoke experience? Our concierge team crafts fully custom itineraries.{' '}
                                    <a href="mailto:concierge@tourweb.ae" className="text-[#c5a021]/60 hover:text-[#c5a021] transition-colors underline underline-offset-2">
                                        Get in touch →
                                    </a>
                                </p>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
