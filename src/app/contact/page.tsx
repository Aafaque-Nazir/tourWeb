import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
    title: 'Contact — Get in Touch | TourWeb',
    description: 'Reach our VIP concierge team. We respond within 2 hours during business hours.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
            <Navbar />

            {/* Hero */}
            <section className="pt-48 md:pt-56 pb-20 container">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-bold">
                    Get in Touch
                </span>
                <h1 className="text-5xl md:text-7xl font-playfair text-white tracking-tighter leading-[1.05] mb-6 max-w-3xl">
                    Let&apos;s <span className="italic text-white/30">Connect</span>
                </h1>
                <p className="text-sm text-white/40 uppercase tracking-[0.2em] max-w-xl leading-relaxed">
                    Our VIP concierge team is standing by. Every inquiry receives a personal response within 2 hours.
                </p>
            </section>

            {/* Content Grid */}
            <section className="container pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>

                    {/* Info Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Office */}
                        <div className="border border-white/[0.05] bg-white/[0.01] p-8 hover:border-[#c5a021]/20 transition-all duration-500 group">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#c5a021]/20 bg-[#c5a021]/5 group-hover:bg-[#c5a021]/10 transition-colors">
                                    <MapPin className="w-5 h-5 text-[#c5a021]" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#c5a021] mb-3 font-bold">Dubai Office</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        Level 42, Emirates Towers<br />
                                        Sheikh Zayed Road, DIFC<br />
                                        Dubai, United Arab Emirates
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="border border-white/[0.05] bg-white/[0.01] p-8 hover:border-[#c5a021]/20 transition-all duration-500 group">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#c5a021]/20 bg-[#c5a021]/5 group-hover:bg-[#c5a021]/10 transition-colors">
                                    <Phone className="w-5 h-5 text-[#c5a021]" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#c5a021] mb-3 font-bold">Direct Line</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        +971 4 555 0123<br />
                                        <span className="text-white/30">WhatsApp: +971 50 555 0123</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="border border-white/[0.05] bg-white/[0.01] p-8 hover:border-[#c5a021]/20 transition-all duration-500 group">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#c5a021]/20 bg-[#c5a021]/5 group-hover:bg-[#c5a021]/10 transition-colors">
                                    <Mail className="w-5 h-5 text-[#c5a021]" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#c5a021] mb-3 font-bold">Email</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        concierge@tourweb.ae<br />
                                        <span className="text-white/30">vip@tourweb.ae</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="border border-white/[0.05] bg-white/[0.01] p-8 hover:border-[#c5a021]/20 transition-all duration-500 group">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#c5a021]/20 bg-[#c5a021]/5 group-hover:bg-[#c5a021]/10 transition-colors">
                                    <Clock className="w-5 h-5 text-[#c5a021]" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#c5a021] mb-3 font-bold">Operating Hours</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        Sunday – Thursday: 9AM – 9PM<br />
                                        Friday – Saturday: 10AM – 6PM<br />
                                        <span className="text-white/30">Emergency line: 24/7</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map placeholder */}
                        <div className="border border-white/[0.05] overflow-hidden relative h-[200px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9!2d55.28!3d25.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEzJzEyLjAiTiA1NcKwMTYnNDguMCJF!5e0!3m2!1sen!2sae!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(60%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="absolute inset-0 pointer-events-none border border-white/[0.05]" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
