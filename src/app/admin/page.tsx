import { auth } from '@/auth';

export default async function AdminDashboardPage() {
    const session = await auth();

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                    <p className="text-zinc-400 mt-1">Welcome back, {session?.user?.name || 'Admin'}</p>
                </div>
                <div className="flex gap-3">
                    {/* Placeholder for future action buttons */}
                </div>
            </div>

            {/* Stats Grid (Placeholder) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Total Visits', value: '12,345', trend: '+12%' },
                    { label: 'Active Packages', value: '8', trend: 'Stable' },
                    { label: 'Pending Bookings', value: '3', trend: '-2' },
                ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
                        <h3 className="text-zinc-500 text-sm font-medium">{stat.label}</h3>
                        <div className="flex items-end gap-3 mt-2">
                            <span className="text-3xl font-bold text-white">{stat.value}</span>
                            <span className={`text-sm mb-1 ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-zinc-400'}`}>
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 border-dashed min-h-[400px] flex items-center justify-center text-zinc-500">
                Chart / Analytics Placeholder
            </div>
        </div>
    );
}
