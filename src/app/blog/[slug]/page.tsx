import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import { ArrowLeft, Clock, User, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const currentIdx = blogPosts.findIndex((p) => p.slug === slug);
    const nextPost = blogPosts[(currentIdx + 1) % blogPosts.length];
    const prevPost = blogPosts[(currentIdx - 1 + blogPosts.length) % blogPosts.length];

    // Parse markdown-style bold text
    const renderContent = (text: string) => {
        return text.split('\n\n').map((paragraph, idx) => {
            // Heading
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                    <h3 key={idx} className="text-2xl font-playfair text-white mt-12 mb-4 flex items-baseline gap-3">
                        <span className="w-8 h-[1px] bg-[#c5a021] flex-shrink-0 mt-3" />
                        {paragraph.replace(/\*\*/g, '')}
                    </h3>
                );
            }

            // Italic line (subheading)
            if (paragraph.startsWith('*') && paragraph.endsWith('*') && !paragraph.startsWith('**')) {
                return (
                    <h4 key={idx} className="text-lg font-playfair italic text-[#c5a021]/80 mt-8 mb-3">
                        {paragraph.replace(/\*/g, '')}
                    </h4>
                );
            }

            // Regular paragraph — handle inline bold
            const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
            return (
                <p key={idx} className="text-base text-white/60 leading-[1.9] mb-6 font-light">
                    {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="text-white/80 font-medium">{part.replace(/\*\*/g, '')}</strong>;
                        }
                        return part;
                    })}
                </p>
            );
        });
    };

    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
            <Navbar />

            {/* Hero Image */}
            <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-[#020617]/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/60 via-transparent to-transparent" />

                {/* Back button */}
                <div className="absolute top-32 left-0 container z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-[#c5a021] transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Journal
                    </Link>
                </div>

                {/* Title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 container pb-16 z-10">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#c5a021] font-bold mb-4 block">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-playfair text-white tracking-tighter leading-[1.1] max-w-4xl mb-6">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-[10px] text-white/30 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <User className="w-3 h-3 text-[#c5a021]/40" />
                            {post.author}
                        </div>
                        <div className="w-[1px] h-3 bg-white/10" />
                        <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3 text-[#c5a021]/40" />
                            {post.readTime} read
                        </div>
                        <div className="w-[1px] h-3 bg-white/10" />
                        <span>{post.date}</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Article */}
                    <article className="lg:col-span-8">
                        {/* Excerpt */}
                        <p className="text-xl text-white/70 leading-relaxed mb-12 pb-12 border-b border-white/[0.05] font-light italic">
                            {post.excerpt}
                        </p>

                        {/* Body */}
                        <div className="prose-custom">
                            {renderContent(post.content)}
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            {/* Share / Meta Card */}
                            <div className="border border-white/[0.05] bg-white/[0.01] p-8">
                                <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a021] mb-6 font-bold">About This Article</h4>
                                <div className="space-y-4 text-[11px] text-white/40">
                                    <div className="flex justify-between">
                                        <span className="uppercase tracking-widest text-white/25">Category</span>
                                        <span className="text-white/60">{post.category}</span>
                                    </div>
                                    <div className="h-[1px] bg-white/[0.04]" />
                                    <div className="flex justify-between">
                                        <span className="uppercase tracking-widest text-white/25">Read Time</span>
                                        <span className="text-white/60">{post.readTime}</span>
                                    </div>
                                    <div className="h-[1px] bg-white/[0.04]" />
                                    <div className="flex justify-between">
                                        <span className="uppercase tracking-widest text-white/25">Published</span>
                                        <span className="text-white/60">{post.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="border border-[#c5a021]/20 bg-[#c5a021]/[0.03] p-8">
                                <h4 className="text-lg font-playfair text-white mb-3">Experience It Yourself</h4>
                                <p className="text-[11px] text-white/40 leading-relaxed mb-6">
                                    Ready to go beyond reading? Our curated packages turn these stories into your reality.
                                </p>
                                <Link href="/packages" className="block w-full text-center bg-gradient-to-r from-[#c5a021] to-[#a68518] text-[#020617] py-3 text-[11px] uppercase tracking-[0.3em] font-bold hover:from-[#dbb832] hover:to-[#c5a021] transition-all duration-300">
                                    View Packages
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Prev / Next Navigation */}
            <section className="border-t border-white/[0.04]">
                <div className="container grid grid-cols-1 md:grid-cols-2">
                    <Link href={`/blog/${prevPost.slug}`} className="group p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/[0.04] hover:bg-white/[0.01] transition-colors">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 mb-3 block flex items-center gap-2">
                            <ArrowLeft className="w-3 h-3" /> Previous
                        </span>
                        <h4 className="text-lg font-playfair text-white/70 group-hover:text-[#c5a021] transition-colors line-clamp-1">
                            {prevPost.title}
                        </h4>
                    </Link>
                    <Link href={`/blog/${nextPost.slug}`} className="group p-8 md:p-12 text-right hover:bg-white/[0.01] transition-colors">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 mb-3 block flex items-center justify-end gap-2">
                            Next <ArrowRight className="w-3 h-3" />
                        </span>
                        <h4 className="text-lg font-playfair text-white/70 group-hover:text-[#c5a021] transition-colors line-clamp-1">
                            {nextPost.title}
                        </h4>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
