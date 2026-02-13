'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    Package,
    Image as ImageIcon,
    Users,
    MessageSquareQuote
} from 'lucide-react';
import { signOut } from 'next-auth/react';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
    { icon: FileText, label: 'Content Manager', href: '/admin/content' },
    { icon: Package, label: 'Packages', href: '/admin/packages' },
    { icon: MessageSquareQuote, label: 'Blog & Posts', href: '/admin/posts' },
    { icon: ImageIcon, label: 'Media Library', href: '/admin/media' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-md border-r border-white/10 flex flex-col z-50">
            <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                    TourWeb CMS
                </h2>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname.startsWith(item.href); // Better active state matching
                    return (
                        <Link key={item.href} href={item.href}>
                            <div
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                                        ? 'bg-white/10 text-white shadow-lg shadow-white/5'
                                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <item.icon size={18} className={`transition-colors ${isActive ? 'text-blue-400' : 'text-zinc-500 group-hover:text-blue-300'}`} />
                                <span className="text-sm font-medium">{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute left-0 w-1 h-8 bg-blue-500 rounded-r-full"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button
                    onClick={() => signOut()}
                    className="flex items-center gap-3 w-full px-3 py-2.5 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                >
                    <LogOut size={18} />
                    <span className="text-sm font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
