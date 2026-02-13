import { getPackage, savePackage } from '@/lib/actions/packages';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EditPackagePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const isNew = id === 'new';
    const pkg = isNew ? null : await getPackage(id);

    if (!isNew && !pkg) notFound();

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="mb-8 flex items-center gap-4">
                <Link href="/admin/packages" className="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        {isNew ? 'New Package' : `Edit: ${pkg?.title}`}
                    </h1>
                    <p className="text-zinc-400 mt-1">
                        {isNew ? 'Create a new experience.' : 'Update package details.'}
                    </p>
                </div>
            </div>

            <form action={savePackage} className="space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <input type="hidden" name="isNew" value={String(isNew)} />
                {/* If editing, keep original ID unless we want to allow slug changes (tricky) */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Package Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={pkg?.title || ''}
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Slug (ID)</label>
                        <input
                            type="text"
                            name="slug"
                            defaultValue={pkg?.id || ''}
                            required
                            // readOnly={!isNew} // Optionally lock slug after creation
                            className={`w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none ${!isNew ? 'opacity-80' : ''}`}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Category</label>
                        <select
                            name="category"
                            defaultValue={pkg?.category || 'Desert'}
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        >
                            <option value="Desert">Desert</option>
                            <option value="Tech">Tech</option>
                            <option value="Fusion">Fusion</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={pkg?.price || ''}
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Duration</label>
                        <input
                            type="text"
                            name="duration"
                            defaultValue={pkg?.duration || ''}
                            placeholder="e.g. 5 Hours"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={pkg?.image || ''}
                            placeholder="/assets/..."
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Description</label>
                    <textarea
                        name="description"
                        defaultValue={pkg?.description || ''}
                        rows={3}
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Highlights (One per line)</label>
                        <textarea
                            name="highlights"
                            defaultValue={pkg?.highlights?.join('\n') || ''}
                            rows={6}
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Included Services (One per line)</label>
                        <textarea
                            name="included_services"
                            defaultValue={pkg?.included_services?.join('\n') || ''}
                            rows={6}
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="pickup_ready"
                        id="pickup_ready"
                        defaultChecked={pkg?.pickup_ready ?? true}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="pickup_ready" className="text-sm font-medium text-zinc-300">
                        Pickup Ready (Show "Pickup Available" badge)
                    </label>
                </div>

                <div className="pt-4 border-t border-white/10">
                    <button
                        type="submit"
                        className="flex items-center justify-center w-full md:w-auto gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all"
                    >
                        <Save size={18} />
                        Save Package
                    </button>
                </div>
            </form>
        </div>
    );
}
