import { getPosts } from '@/lib/actions/posts';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = await getPosts('blog');
    return posts.map((post) => ({ slug: post.slug }));
}

async function getPostBySlug(slug: string) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('type', 'blog')
        .single();

    if (error) return null;
    return data;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc]">
            <Navbar />

            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={post.cover_image || '/assets/main-hero.png'}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 container">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[#c5a021] mb-6 hover:underline">
                        <ArrowLeft size={16} />
                        Back to Journal
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-playfair text-white max-w-4xl leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-6 text-sm text-white/60">
                        <span className="text-[#c5a021] font-bold">{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            <article className="container max-w-3xl py-20">
                <div className="prose prose-invert prose-lg prose-gold mx-auto">
                    {/* 
                        Note: In a real app, use a markdown renderer like 'react-markdown'. 
                        For now, we'll display text with line breaks or basic HTML if sanitized.
                        Assuming simple text for this demo or safe HTML if admin is trusted.
                    */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </article>

            <Footer />
        </main>
    );
}
