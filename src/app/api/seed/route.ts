import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { packages } from '@/lib/data';
import { TESTIMONIALS } from '@/lib/testimonials-data';

export async function GET() {
    try {
        // 1. Seed Packages
        const formattedPackages = packages.map(pkg => ({
            id: pkg.id,
            title: pkg.title,
            category: pkg.category,
            price: pkg.price,
            duration: pkg.duration,
            image: pkg.image,
            description: pkg.description,
            highlights: pkg.highlights,
            included_services: pkg.included_services,
            pickup_ready: pkg.pickup_ready,
        }));

        const { error: pkgError } = await supabase
            .from('packages')
            .upsert(formattedPackages, { onConflict: 'id' });

        if (pkgError) throw new Error(`Package Error: ${pkgError.message}`);

        // 2. Seed Testimonials (as posts)
        // We assume 'posts' table has: id, type, title (author), content (quote), etc.
        // Adjust logic if schema differs. Based on previous logs, 'posts' table exists.
        const formattedTestimonials = TESTIMONIALS.map((t, i) => ({
            slug: `testimonial-${i}`,
            type: 'testimonial',
            title: t.author,
            content: t.quote,
            excerpt: 'Client Review', // Optional
            author: t.author,
            published: true
        }));

        const { error: testError } = await supabase
            .from('posts')
            .upsert(formattedTestimonials, { onConflict: 'slug' });

        if (testError) throw new Error(`Testimonial Error: ${testError.message}`);

        return NextResponse.json({ success: true, message: 'Database seeded successfully!' });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
