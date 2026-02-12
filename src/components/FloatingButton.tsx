'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Send } from 'lucide-react';
import Link from 'next/link';

export default function FloatingButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
            {/* Expanded Options */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#0a1628] border border-white/[0.08] shadow-2xl shadow-black/50 overflow-hidden mb-2 w-[260px]"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-white/[0.05] bg-gradient-to-r from-[#c5a021]/10 to-transparent">
                            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a021] font-bold mb-1">Quick Connect</h4>
                            <p className="text-[10px] text-white/30">How can we help you?</p>
                        </div>

                        {/* Options */}
                        <div className="p-2">
                            <a
                                href="https://wa.me/971505550123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 hover:bg-[#c5a021]/5 transition-colors group rounded-sm"
                            >
                                <div className="w-9 h-9 flex items-center justify-center bg-[#25D366]/10 border border-[#25D366]/20 rounded-full">
                                    <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[11px] text-white/80 font-medium block">WhatsApp</span>
                                    <span className="text-[9px] text-white/30">Chat with us instantly</span>
                                </div>
                            </a>

                            <a
                                href="tel:+97145550123"
                                className="flex items-center gap-3 p-3 hover:bg-[#c5a021]/5 transition-colors group rounded-sm"
                            >
                                <div className="w-9 h-9 flex items-center justify-center bg-[#c5a021]/10 border border-[#c5a021]/20 rounded-full">
                                    <Phone className="w-4 h-4 text-[#c5a021]" />
                                </div>
                                <div>
                                    <span className="text-[11px] text-white/80 font-medium block">Call Us</span>
                                    <span className="text-[9px] text-white/30">+971 4 555 0123</span>
                                </div>
                            </a>

                            <a
                                href="mailto:concierge@tourweb.ae"
                                className="flex items-center gap-3 p-3 hover:bg-[#c5a021]/5 transition-colors group rounded-sm"
                            >
                                <div className="w-9 h-9 flex items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-full">
                                    <Mail className="w-4 h-4 text-blue-400" />
                                </div>
                                <div>
                                    <span className="text-[11px] text-white/80 font-medium block">Email</span>
                                    <span className="text-[9px] text-white/30">concierge@tourweb.ae</span>
                                </div>
                            </a>

                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 p-3 hover:bg-[#c5a021]/5 transition-colors group rounded-sm"
                            >
                                <div className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-full">
                                    <Send className="w-4 h-4 text-white/50" />
                                </div>
                                <div>
                                    <span className="text-[11px] text-white/80 font-medium block">Contact Form</span>
                                    <span className="text-[9px] text-white/30">Get a detailed response</span>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#c5a021] to-[#8b7015] text-[#020617] rounded-full shadow-lg shadow-[#c5a021]/20 hover:shadow-[#c5a021]/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
                {/* Pulse ring */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full border-2 border-[#c5a021]/30 animate-ping pointer-events-none" />
                )}

                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-5 h-5" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle className="w-5 h-5" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}
