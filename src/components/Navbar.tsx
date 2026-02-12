'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { packages } from '@/lib/data';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
            )}
            onMouseLeave={() => setDropdownOpen(false)}
        >
            <div className="container flex items-center justify-between relative">
                {/* Logo */}
                <Link href="/" className="group flex flex-col z-50 relative">
                    <span className="text-2xl font-playfair gold-gradient-text tracking-tighter leading-none">
                        TOURWEB
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mt-1">
                        Dubai Elite
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-12">
                    <Link
                        href="/"
                        className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        Home
                    </Link>

                    {/* Mega Menu Trigger */}
                    <div
                        className="h-full flex items-center"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <button className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 hover:text-[hsl(var(--primary))] transition-colors relative z-50">
                            Packages <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="fixed top-0 left-0 w-full bg-[#050a18]/98 backdrop-blur-2xl border-b border-white/5 shadow-2xl z-40 pt-32 pb-16"
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    <div className="container">
                                        <div className="grid grid-cols-3 gap-12">
                                            {['Desert', 'Tech', 'Fusion'].map((cat) => (
                                                <Link
                                                    key={cat}
                                                    href={`/packages?cat=${cat.toLowerCase()}`}
                                                    className="group flex flex-col gap-4 p-6 hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-500 h-full relative"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 group-hover:text-[#c5a021] transition-colors">
                                                        0{cat === 'Desert' ? '1' : cat === 'Tech' ? '2' : '3'} — {cat} Collection
                                                    </span>
                                                    <h3 className="text-4xl font-playfair text-white italic group-hover:translate-x-2 transition-transform duration-500">
                                                        The {cat}
                                                    </h3>
                                                    <p className="text-[11px] text-white/30 leading-loose">
                                                        {cat === 'Desert' && 'Dune bashing, private camps, and starlight dinners.'}
                                                        {cat === 'Tech' && 'Museum of the Future, Sky Views, and cyber-city tours.'}
                                                        {cat === 'Fusion' && 'The best of both worlds. Sunsets and skylines.'}
                                                    </p>
                                                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                        <span className="text-[#c5a021] text-xl">→</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href="/about"
                        className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        About
                    </Link>

                    <button className="btn-sexy scale-90">
                        Book Now
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-white z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[#020617] z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-playfair text-white hover:text-[#c5a021] hover:italic transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/packages"
                            className="text-4xl font-playfair text-white hover:text-[#c5a021] hover:italic transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Packages
                        </Link>
                        <button className="btn-sexy mt-8 px-12 py-4 text-sm scale-110">Reserve Now</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
