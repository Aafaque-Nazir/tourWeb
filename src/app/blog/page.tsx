import { getPosts } from '@/lib/actions/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
    const posts = await getPosts('blog');

    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
            <Navbar />

            <div className="pt-40 pb-20 container">
                <h1 className="text-5xl md:text-7xl font-playfair text-white mb-8">
                    THE <span className="text-[#c5a021]">JOURNAL</span>
                </h1>
                <p className="text-white/50 max-w-xl text-lg leading-relaxed mb-20">
                    Insights into the luxury lifestyle, hidden Dubai gems, and the art of travel.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.length === 0 ? (
                        <div className="col-span-2 text-center py-20 border border-white/5 rounded-2xl">
                            <p className="text-white/30">No stories published yet.</p>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group block"
                            >
                                <div className="relative aspect-video overflow-hidden rounded-2xl mb-6">
                                    <Image
                                        src={post.cover_image || '/assets/main-hero.png'} // Fallback image
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#c5a021]">
                                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                        <span className="w-1 h-1 bg-[#c5a021] rounded-full" />
                                        <span>{post.author}</span>
                                    </div>

                                    <h2 className="text-3xl font-playfair text-white group-hover:text-[#c5a021] transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-white/50 line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
