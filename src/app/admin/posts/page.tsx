import Link from 'next/link';
import { getPosts, deletePost } from '@/lib/actions/posts';
import { Edit3, Trash2, Plus, MessageSquare, Quote } from 'lucide-react';

export default async function PostsPage() {
    const posts = await getPosts();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Posts Manager</h1>
                    <p className="text-zinc-400 mt-1">Manage blogs, news, and client testimonials.</p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg font-medium transition-all"
                >
                    <Plus size={18} />
                    Add Post
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {posts.length === 0 ? (
                    <div className="p-12 text-center border border-white/5 rounded-2xl bg-zinc-900/30">
                        <MessageSquare className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-white">No Posts Yet</h3>
                        <p className="text-zinc-500 mt-2">Create a blog post or testimonial.</p>
                    </div>
                ) : (
                    posts.map((post) => (
                        <div
                            key={post.id}
                            className="group flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${post.type === 'blog' ? 'bg-purple-500/10 text-purple-400' : 'bg-green-500/10 text-green-400'}`}>
                                    {post.type === 'blog' ? <MessageSquare size={20} /> : <Quote size={20} />}
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white">{post.title}</h3>
                                    <div className="flex items-center gap-3 text-sm text-zinc-500 mt-1">
                                        <span className="capitalize">{post.type}</span>
                                        <span>•</span>
                                        <span>{post.author}</span>
                                        <span>•</span>
                                        <span className={post.published ? 'text-green-400' : 'text-zinc-600'}>
                                            {post.published ? 'Published' : 'Draft'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Link
                                    href={`/admin/posts/${post.id}`}
                                    className="p-2 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                                >
                                    <Edit3 size={18} />
                                </Link>
                                <form action={async () => {
                                    'use server';
                                    await deletePost(post.id);
                                }}>
                                    <button type="submit" className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
