'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Send, Loader2, Check, Shield } from 'lucide-react';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 2000);
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden border border-[#c5a021]/30 p-16 text-center space-y-6 bg-gradient-to-b from-[#0a1628] to-[#050a18]"
            >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a021] to-transparent" />

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 border-2 border-[#c5a021] rounded-full flex items-center justify-center mx-auto"
                >
                    <Check className="w-10 h-10 text-[#c5a021]" />
                </motion.div>

                <h3 className="text-2xl font-playfair text-white">Message Received</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 leading-loose max-w-[320px] mx-auto">
                    Our concierge team will respond within 2 hours during business hours.
                </p>
            </motion.div>
        );
    }

    const inputClasses = "w-full bg-white/[0.02] border border-white/[0.06] py-3.5 px-5 text-white text-sm focus:outline-none focus:border-[#c5a021]/50 focus:bg-white/[0.04] transition-all duration-300 placeholder:text-white/15";
    const labelClasses = "text-[9px] uppercase tracking-[0.4em] text-white/30 ml-1 mb-2 block font-bold";

    return (
        <div className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#c5a021]/20 via-transparent to-[#c5a021]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative bg-gradient-to-b from-[#0a1628] to-[#050a18] border border-white/[0.06] p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a021]/40 to-transparent" />

                <div className="mb-10">
                    <h2 className="text-2xl font-playfair text-white mb-3">Send Us a Message</h2>
                    <p className="text-[11px] text-white/30 uppercase tracking-[0.15em]">
                        Tell us what you&apos;re looking for and we&apos;ll craft the perfect response
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClasses}>Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                                <input type="text" required className={`${inputClasses} pl-12`} placeholder="Your Name" />
                            </div>
                        </div>
                        <div>
                            <label className={labelClasses}>Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                                <input type="email" required className={`${inputClasses} pl-12`} placeholder="your@email.com" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClasses}>Phone / WhatsApp</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                                <input type="tel" className={`${inputClasses} pl-12`} placeholder="+971 50 000 0000" />
                            </div>
                        </div>
                        <div>
                            <label className={labelClasses}>Subject</label>
                            <select className={`${inputClasses} cursor-pointer appearance-none`}>
                                <option value="" className="bg-[#050a18]">Select a topic</option>
                                <option value="booking" className="bg-[#050a18]">Booking Inquiry</option>
                                <option value="custom" className="bg-[#050a18]">Custom Itinerary</option>
                                <option value="corporate" className="bg-[#050a18]">Corporate Events</option>
                                <option value="partnership" className="bg-[#050a18]">Partnership</option>
                                <option value="other" className="bg-[#050a18]">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className={labelClasses}>Your Message</label>
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/15" />
                            <textarea
                                rows={5}
                                required
                                className={`${inputClasses} pl-12 resize-none`}
                                placeholder="Tell us about your ideal Dubai experience..."
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="relative w-full overflow-hidden bg-gradient-to-r from-[#c5a021] to-[#a68518] text-[#020617] py-4 text-[11px] uppercase tracking-[0.35em] font-bold transition-all duration-500 hover:from-[#dbb832] hover:to-[#c5a021] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin w-4 h-4" />
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                Send Message
                            </>
                        )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[8px] uppercase tracking-widest text-white/20 pt-2">
                        <Shield className="w-3 h-3" />
                        Your information is encrypted and never shared
                    </div>
                </form>
            </div>
        </div>
    );
}
