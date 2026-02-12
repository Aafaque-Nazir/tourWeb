'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, MapPin, Mail, Loader2, Check } from 'lucide-react';

export default function BookingForm({ packageTitle }: { packageTitle: string }) {
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
                className="border border-[#c5a021]/30 p-12 text-center space-y-6 bg-[#050a18]"
            >
                <div className="w-16 h-16 border border-[#c5a021] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-[#c5a021]" />
                </div>
                <h3 className="text-2xl font-playfair text-white">Confirmed</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 leading-loose">
                    Our concierge will contact you shortly to finalize your pickup details.
                </p>
            </motion.div>
        );
    }

    const inputClasses = "w-full bg-transparent border border-white/[0.06] py-4 px-5 text-white text-sm focus:outline-none focus:border-[#c5a021]/40 transition-colors placeholder:text-white/15";
    const labelClasses = "text-[9px] uppercase tracking-[0.4em] text-white/30 ml-1 mb-2 block font-bold";

    return (
        <div className="bg-[#050a18] border border-white/[0.03] p-10">
            <div className="mb-10">
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-3 font-bold">Reserve</h3>
                <p className="text-[11px] text-white/30 uppercase tracking-[0.15em]">
                    {packageTitle}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className={labelClasses}>Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input type="text" required className={`${inputClasses} pl-12`} placeholder="John Doe" />
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Email</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input type="email" required className={`${inputClasses} pl-12`} placeholder="john@example.com" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className={labelClasses}>Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                            <input type="date" required className={`${inputClasses} pl-12`} style={{ colorScheme: 'dark' }} />
                        </div>
                    </div>
                    <div>
                        <label className={labelClasses}>Guests</label>
                        <select className={`${inputClasses} cursor-pointer appearance-none`}>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <option key={n} value={n} className="bg-[#050a18]">{n} Guest{n > 1 ? 's' : ''}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Hotel Pickup</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input type="text" required className={`${inputClasses} pl-12`} placeholder="Your Hotel Name" />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-sexy mt-4 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                    {loading ? <Loader2 className="animate-spin w-4 h-4" /> : 'CONFIRM RESERVATION'}
                </button>

                <p className="text-[9px] text-center uppercase tracking-[0.3em] text-white/20 mt-6">
                    Free cancellation up to 24 hours before
                </p>
            </form>
        </div>
    );
}
