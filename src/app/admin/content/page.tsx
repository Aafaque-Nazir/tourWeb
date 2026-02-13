import Link from 'next/link';
import { SITE_SECTIONS } from '@/config/site-sections';
import { ChevronRight, Edit3 } from 'lucide-react';

export default function ContentManagerPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Content Manager</h1>
                    <p className="text-zinc-400 mt-1">Select a section to edit its content.</p>
                </div>
            </div>

            <div className="grid gap-4">
                {SITE_SECTIONS.map((section) => (
                    <Link
                        key={section.id}
                        href={`/admin/content/${section.id}`}
                        className="group block p-5 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <Edit3 size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                        {section.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 mt-1 group-hover:text-zinc-400">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                            <ChevronRight className="text-zinc-600 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
