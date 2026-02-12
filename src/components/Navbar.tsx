'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { packages } from '@/lib/data';
import BookingDrawer from '@/components/BookingDrawer';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
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
                        className="text-[13px] uppercase tracking-[0.2em] font-playfair font-medium text-white/80 hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        Home
                    </Link>

                    {/* Mega Menu Trigger - Elegant Refinement */}
                    <div
                        className="h-full flex items-center"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button
                            className="flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] font-playfair font-medium text-white/80 hover:text-[#c5a021] transition-colors relative z-50 h-full"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Packages <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-[#c5a021]' : ''}`} />
                        </button>

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="fixed top-0 left-0 w-full bg-[#020617] border-b border-[#c5a021]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 pt-32 pb-20"
                                >
                                    <div className="absolute inset-0 nano-overlay opacity-5 pointer-events-none" />

                                    <div className="container relative z-10">
                                        <div className="grid grid-cols-3 gap-8">
                                            {[
                                                { id: 'desert', label: '01 — Desert Collection', title: 'The Desert', desc: 'Dune bashing, private camps, and starlight dinners.', img: '/assets/desert-hero.png' },
                                                { id: 'tech', label: '02 — Tech Collection', title: 'The Tech', desc: 'Museum of the Future, Sky Views, and cyber-city tours.', img: '/assets/tech-hero.png' },
                                                { id: 'fusion', label: '03 — Fusion Collection', title: 'The Fusion', desc: 'The best of both worlds. Sunsets and skylines.', img: '/assets/fusion-hero.png' }
                                            ].map((item) => (
                                                <Link
                                                    key={item.id}
                                                    href={`/packages?cat=${item.id}`}
                                                    className="group relative flex flex-col justify-end p-8 h-[300px] overflow-hidden border border-white/5 hover:border-[#c5a021]/30 transition-all duration-500 bg-white/[0.02]"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    {/* Background Image on Hover */}
                                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-in-out">
                                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                                                    </div>

                                                    <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                        <span className="text-[9px] uppercase tracking-[0.4em] text-[#c5a021] mb-3 block opacity-80">
                                                            {item.label}
                                                        </span>
                                                        <h3 className="text-4xl font-playfair text-white mb-3 group-hover:translate-x-2 transition-transform duration-500">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-[11px] text-white/50 leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                            {item.desc}
                                                        </p>
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
                        className="text-[13px] uppercase tracking-[0.2em] font-playfair font-medium text-white/80 hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        About
                    </Link>

                    <Link
                        href="/blog"
                        className="text-[13px] uppercase tracking-[0.2em] font-playfair font-medium text-white/80 hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        Blog
                    </Link>

                    <Link
                        href="/contact"
                        className="text-[13px] uppercase tracking-[0.2em] font-playfair font-medium text-white/80 hover:text-[hsl(var(--primary))] transition-colors"
                    >
                        Contact
                    </Link>

                    <BookingDrawer />
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
                        <div className="mt-8">
                            <BookingDrawer />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
