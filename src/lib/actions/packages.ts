'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Type definition based on the SQL schema
export type Package = {
    id: string;
    title: string;
    category: 'Desert' | 'Tech' | 'Fusion';
    price: number;
    duration: string;
    image: string;
    description: string;
    highlights: string[];
    included_services: string[];
    pickup_ready: boolean;
};

export async function getPackages() {
    const { data, error } = await supabase
        .from('packages')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching packages:', error);
        return [];
    }

    return data as Package[];
}

export async function getPackage(id: string) {
    const { data, error } = await supabase
        .from('packages')
        .select('*')
        .eq('id', id)
        .single();

    if (error) return null;
    return data as Package;
}

export async function savePackage(formData: FormData) {
    const id = formData.get('id') as string;
    const isNew = formData.get('isNew') === 'true';

    const rawData = {
        id: formData.get('slug') as string, // Slug becomes the ID
        title: formData.get('title') as string,
        category: formData.get('category') as string,
        price: Number(formData.get('price')),
        duration: formData.get('duration') as string,
        image: formData.get('image') as string,
        description: formData.get('description') as string,
        highlights: (formData.get('highlights') as string).split('\n').filter(Boolean),
        included_services: (formData.get('included_services') as string).split('\n').filter(Boolean),
        pickup_ready: formData.get('pickup_ready') === 'on',
    };

    const { error } = await supabase
        .from('packages')
        .upsert(rawData, { onConflict: 'id' });

    if (error) {
        console.error('Error saving package:', error);
        throw new Error('Failed to save package');
    }

    revalidatePath('/admin/packages');
    revalidatePath('/'); // Revalidate home
    revalidatePath(`/packages/${rawData.id}`); // Revalidate detail page

    redirect('/admin/packages');
}

export async function deletePackage(id: string) {
    const { error } = await supabase
        .from('packages')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting package:', error);
        throw new Error('Failed to delete package');
    }

    revalidatePath('/admin/packages');
}
