import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata = {
    title: 'Blog — Dubai Travel Insights | TourWeb',
    description: 'Insider guides, hidden gems, and luxury travel intelligence for the discerning Dubai traveler.',
};

export default function BlogPage() {
    const featured = blogPosts[0];
    const rest = blogPosts.slice(1);

    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
            <Navbar />

            {/* Hero */}
            <section className="pt-48 md:pt-56 pb-20 container">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a021] mb-6 block font-bold">
                    Insights & Guides
                </span>
                <h1 className="text-5xl md:text-7xl font-playfair text-white tracking-tighter leading-[1.05] mb-6 max-w-3xl">
                    The Dubai <span className="italic text-white/30">Journal</span>
                </h1>
                <p className="text-sm text-white/40 uppercase tracking-[0.2em] max-w-xl leading-relaxed">
                    Curated intelligence for travelers who demand more than guidebook clichés.
                </p>
            </section>

            {/* Featured Post */}
            <section className="container pb-24">
                <Link href={`/blog/${featured.slug}`} className="group block relative overflow-hidden border border-white/[0.04] hover:border-[#c5a021]/20 transition-all duration-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
                            <Image
                                src={featured.image}
                                alt={featured.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020617] hidden lg:block" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent lg:hidden" />
                        </div>

                        <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c5a021] font-bold mb-4 block">
                                Featured — {featured.category}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6 leading-tight group-hover:text-[#c5a021] transition-colors duration-300">
                                {featured.title}
                            </h2>
                            <p className="text-sm text-white/50 leading-relaxed mb-8 line-clamp-3">
                                {featured.excerpt}
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
                                    <Clock className="w-3 h-3 text-[#c5a021]/40" />
                                    {featured.readTime} read
                                </div>
                                <span className="text-[10px] text-white/20">{featured.date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Posts Grid */}
            <section className="container pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map((post, idx) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block border border-white/[0.04] hover:border-[#c5a021]/20 transition-all duration-500 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-[220px] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                                <span className="absolute top-4 left-4 text-[8px] uppercase tracking-[0.3em] text-[#c5a021] bg-[#020617]/80 backdrop-blur-sm px-3 py-1.5 font-bold border border-[#c5a021]/20">
                                    {post.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-xl font-playfair text-white mb-3 leading-tight group-hover:text-[#c5a021] transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-[13px] text-white/40 leading-relaxed mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-[9px] text-white/25 uppercase tracking-widest">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-[#c5a021]/50 group-hover:text-[#c5a021] uppercase tracking-widest transition-colors">
                                        Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom gold line */}
                            <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-[#c5a021] to-transparent transition-all duration-500" />
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
