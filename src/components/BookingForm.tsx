'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, Mail, MapPin, MessageSquare, Loader2, Check, Shield, Clock, Users } from 'lucide-react';

interface BookingFormProps {
    packageTitle: string;
    price: number;
    duration: string;
}

export default function BookingForm({ packageTitle, price, duration }: BookingFormProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [guests, setGuests] = useState(1);

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
                className="relative overflow-hidden border border-[#c5a021]/30 p-12 text-center space-y-6 bg-gradient-to-b from-[#0a1628] to-[#050a18]"
            >
                {/* Gold shimmer line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a021] to-transparent" />

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 border-2 border-[#c5a021] rounded-full flex items-center justify-center mx-auto"
                >
                    <Check className="w-10 h-10 text-[#c5a021]" />
                </motion.div>

                <h3 className="text-2xl font-playfair text-white">Reservation Confirmed</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 leading-loose max-w-[280px] mx-auto">
                    Our VIP concierge will contact you within 2 hours to finalize your experience details.
                </p>

                <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center justify-center gap-2 text-[10px] text-[#c5a021]/60 uppercase tracking-widest">
                        <Shield className="w-3 h-3" /> Secured & Encrypted
                    </div>
                </div>
            </motion.div>
        );
    }

    const inputClasses = "w-full bg-white/[0.02] border border-white/[0.06] py-3.5 px-5 text-white text-sm rounded-none focus:outline-none focus:border-[#c5a021]/50 focus:bg-white/[0.04] transition-all duration-300 placeholder:text-white/15";
    const labelClasses = "text-[9px] uppercase tracking-[0.4em] text-white/30 ml-1 mb-2 block font-bold";

    return (
        <div className="relative group">
            {/* Outer glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#c5a021]/30 via-[#c5a021]/5 to-[#c5a021]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative bg-gradient-to-b from-[#0a1628] to-[#050a18] border border-white/[0.06] p-8 md:p-10 transition-all duration-500 overflow-hidden">
                {/* Top gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a021]/60 to-transparent" />

                {/* Header with price */}
                <div className="mb-8 pb-6 border-b border-white/[0.05]">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-2 font-bold">Reserve</h3>
                            <p className="text-[11px] text-white/30 uppercase tracking-[0.15em] max-w-[180px] leading-relaxed">
                                {packageTitle}
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-playfair text-white">${price}</span>
                            <span className="block text-[9px] uppercase tracking-widest text-white/25 mt-1">per guest</span>
                        </div>
                    </div>

                    {/* Quick info pills */}
                    <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-white/30 bg-white/[0.03] px-3 py-1.5 border border-white/[0.04]">
                            <Clock className="w-3 h-3 text-[#c5a021]/50" />
                            {duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-white/30 bg-white/[0.03] px-3 py-1.5 border border-white/[0.04]">
                            <Users className="w-3 h-3 text-[#c5a021]/50" />
                            {guests} Guest{guests > 1 ? 's' : ''}
                        </div>
                    </div>
                </div>

                <form action="https://formspree.io/f/mnjbplna" method="POST" className="space-y-5">
                    {/* Hidden Fields for Context */}
                    <input type="hidden" name="_subject" value={`New Booking Request: ${packageTitle}`} />
                    <input type="hidden" name="Package" value={packageTitle} />
                    <input type="hidden" name="Estimated Total" value={`$${price * guests}`} />
                    {/* Honeypot */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />

                    {/* Full Name */}
                    <div>
                        <label className={labelClasses}>Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                            <input type="text" name="name" required className={`${inputClasses} pl-12`} placeholder="John Doe" />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className={labelClasses}>Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                            <input type="email" name="email" required className={`${inputClasses} pl-12`} placeholder="john@example.com" />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className={labelClasses}>Phone / WhatsApp</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                            <input type="tel" name="phone" required className={`${inputClasses} pl-12`} placeholder="+971 50 123 4567" />
                        </div>
                    </div>

                    {/* Date & Guests Row */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className={labelClasses}>Preferred Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                                <input type="date" name="date" required className={`${inputClasses} pl-12`} style={{ colorScheme: 'dark' }} />
                            </div>
                        </div>
                        <div>
                            <label className={labelClasses}>Guests</label>
                            <select
                                name="guests"
                                className={`${inputClasses} cursor-pointer appearance-none`}
                                value={guests}
                                onChange={(e) => setGuests(Number(e.target.value))}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                    <option key={n} value={n} className="bg-[#050a18]">{n} Guest{n > 1 ? 's' : ''}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Hotel Pickup */}
                    <div>
                        <label className={labelClasses}>Hotel / Pickup Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                            <input type="text" name="location" required className={`${inputClasses} pl-12`} placeholder="Your Hotel Name & Room No." />
                        </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                        <label className={labelClasses}>Special Requests <span className="text-white/15">(Optional)</span></label>
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-white/15" />
                            <textarea
                                name="message"
                                rows={3}
                                className={`${inputClasses} pl-12 resize-none`}
                                placeholder="Dietary needs, celebrations, accessibility..."
                            />
                        </div>
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between py-4 px-1 border-t border-b border-white/[0.05]">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Estimated Total</span>
                        <span className="text-2xl font-playfair text-[#c5a021]">${price * guests}</span>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="relative w-full overflow-hidden bg-gradient-to-r from-[#c5a021] to-[#a68518] text-[#020617] py-4 text-[11px] uppercase tracking-[0.35em] font-bold transition-all duration-500 hover:from-[#d4ad24] hover:to-[#c5a021] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                        {loading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Confirm Reservation'}
                    </button>

                    <p className="text-[8px] text-white/20 text-center uppercase tracking-widest mt-2">
                        You will be redirected to confirm via Email
                    </p>

                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-6 pt-2">
                        <div className="flex items-center gap-1.5 text-[8px] uppercase tracking-widest text-white/20">
                            <Shield className="w-3 h-3" /> Secure
                        </div>
                        <div className="w-[1px] h-3 bg-white/10" />
                        <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                            Free cancellation — 24h before
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
