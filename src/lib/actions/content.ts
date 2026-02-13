'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { DEFAULT_CONTENT } from '@/config/defaults';

export async function getContent(sectionId: string) {
    const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .eq('section_id', sectionId)
        .single();

    if (error || !data) {
        // If no content in DB, return default from code (Syncs Admin with current Site)
        return DEFAULT_CONTENT[sectionId] || {};
    }

    // Merge DB content with defaults to ensure missing keys have values
    return { ...DEFAULT_CONTENT[sectionId], ...data.content };
}

export async function saveContent(formData: FormData) {
    const sectionId = formData.get('sectionId') as string;
    const rawData: Record<string, any> = {};

    formData.forEach((value, key) => {
        if (key !== 'sectionId' && !key.startsWith('$ACTION')) {
            rawData[key] = value;
        }
    });

    const { error } = await supabase
        .from('site_content')
        .upsert(
            { section_id: sectionId, content: rawData },
            { onConflict: 'section_id' }
        );

    if (error) {
        console.error('Error saving content:', error);
        throw new Error('Failed to save content');
    }

    revalidatePath('/');
    revalidatePath(`/admin/content/${sectionId}`);
}
