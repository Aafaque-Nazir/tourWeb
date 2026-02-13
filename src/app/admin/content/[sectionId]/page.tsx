import { SITE_SECTIONS } from '@/config/site-sections';
import { getContent, saveContent } from '@/lib/actions/content';
import { notFound } from 'next/navigation';
import { Save } from 'lucide-react';

export default async function EditContentPage({ params }: { params: Promise<{ sectionId: string }> }) {
    const { sectionId } = await params;
    const section = SITE_SECTIONS.find((s) => s.id === sectionId);

    if (!section) return notFound();

    const initialContent = await getContent(sectionId);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Edit: {section.title}</h1>
                <p className="text-zinc-400 mt-1">{section.description}</p>
            </div>

            <form action={saveContent} className="space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <input type="hidden" name="sectionId" value={section.id} />

                {section.fields.map((field) => (
                    <div key={field.key} className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300 block">
                            {field.label}
                        </label>

                        {field.type === 'textarea' ? (
                            <textarea
                                name={field.key}
                                defaultValue={initialContent[field.key] || ''}
                                placeholder={field.placeholder}
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder:text-zinc-600"
                            />
                        ) : field.type === 'image' ? (
                            <div className="space-y-2">
                                {/* Simple URL input for now, enhanced Image Picker can be added later */}
                                <input
                                    type="text"
                                    name={field.key}
                                    defaultValue={initialContent[field.key] || ''}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder:text-zinc-600"
                                />
                                <p className="text-xs text-zinc-500">Paste an image URL here.</p>
                            </div>
                        ) : (
                            <input
                                type="text"
                                name={field.key}
                                defaultValue={initialContent[field.key] || ''}
                                placeholder={field.placeholder}
                                className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder:text-zinc-600"
                            />
                        )}
                    </div>
                ))}

                <div className="pt-4 border-t border-white/10">
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all"
                    >
                        <Save size={18} />
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
