import { getPost, savePost } from '@/lib/actions/posts';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EditPostPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const isNew = id === 'new';
    const post = isNew ? null : await getPost(id);

    if (!isNew && !post) notFound();

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="mb-8 flex items-center gap-4">
                <Link href="/admin/posts" className="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        {isNew ? 'New Post' : `Edit: ${post?.title}`}
                    </h1>
                    <p className="text-zinc-400 mt-1">
                        {isNew ? 'Create a blog post or testimonial.' : 'Update content.'}
                    </p>
                </div>
            </div>

            <form action={savePost} className="space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <input type="hidden" name="id" value={post?.id || ''} />
                <input type="hidden" name="isNew" value={String(isNew)} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Title / Client Name</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={post?.title || ''}
                            required
                            placeholder="e.g. The Future of Tourism OR John Doe"
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Slug (URL)</label>
                        <input
                            type="text"
                            name="slug"
                            defaultValue={post?.slug || ''}
                            required
                            placeholder="e.g. future-tourism-2026"
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Type</label>
                        <select
                            name="type"
                            defaultValue={post?.type || 'blog'}
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        >
                            <option value="blog">Blog Post</option>
                            <option value="testimonial">Testimonial</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Author / Role</label>
                        <input
                            type="text"
                            name="author"
                            defaultValue={post?.author || ''}
                            placeholder="e.g. Admin OR CEO, TechCorp"
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Excerpt / Short Quote</label>
                    <textarea
                        name="excerpt"
                        defaultValue={post?.excerpt || ''}
                        rows={3}
                        className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Full Content (Markdown/HTML)</label>
                    <textarea
                        name="content"
                        defaultValue={post?.content || ''}
                        rows={10}
                        className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none font-mono"
                        placeholder="# Markdown Supported..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Cover Image URL</label>
                    <input
                        type="text"
                        name="cover_image"
                        defaultValue={post?.cover_image || ''}
                        placeholder="/assets/..."
                        className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="published"
                        id="published"
                        defaultChecked={post?.published ?? true}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="published" className="text-sm font-medium text-zinc-300">
                        Published (Visible on site)
                    </label>
                </div>

                <div className="pt-4 border-t border-white/10">
                    <button
                        type="submit"
                        className="flex items-center justify-center w-full md:w-auto gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all"
                    >
                        <Save size={18} />
                        Save Post
                    </button>
                </div>
            </form>
        </div>
    );
}
