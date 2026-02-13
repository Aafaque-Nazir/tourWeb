import Link from 'next/link';
import { getPackages, deletePackage } from '@/lib/actions/packages';
import { Edit3, Trash2, Plus, Package as PackageIcon } from 'lucide-react';
import Image from 'next/image';

export default async function PackagesPage() {
    const packages = await getPackages();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Packages</h1>
                    <p className="text-zinc-400 mt-1">Manage your tour packages and experiences.</p>
                </div>
                <Link
                    href="/admin/packages/new"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg font-medium transition-all"
                >
                    <Plus size={18} />
                    Add Package
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {packages.length === 0 ? (
                    <div className="p-12 text-center border border-white/5 rounded-2xl bg-zinc-900/30">
                        <PackageIcon className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-white">No Packages Found</h3>
                        <p className="text-zinc-500 mt-2">Create your first package to get started.</p>
                    </div>
                ) : (
                    packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="group flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-zinc-800">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white">{pkg.title}</h3>
                                    <div className="flex items-center gap-3 text-sm text-zinc-500 mt-1">
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 text-xs border border-white/5">
                                            {pkg.category}
                                        </span>
                                        <span>${pkg.price}</span>
                                        <span>{pkg.duration}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Link
                                    href={`/admin/packages/${pkg.id}`}
                                    className="p-2 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                                >
                                    <Edit3 size={18} />
                                </Link>
                                <form action={async () => {
                                    'use server';
                                    await deletePackage(pkg.id);
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
