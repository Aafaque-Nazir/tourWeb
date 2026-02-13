'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type Post = {
    id: string;
    slug: string;
    title: string;
    type: 'blog' | 'testimonial';
    excerpt: string;
    content: string;
    cover_image: string;
    author: string;
    published: boolean;
    created_at: string;
};

export async function getPosts(type?: 'blog' | 'testimonial') {
    let query = supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

    if (type) {
        query = query.eq('type', type);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }

    return data as Post[];
}

export async function getPost(id: string) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

    if (error) return null;
    return data as Post;
}

export async function savePost(formData: FormData) {
    const id = formData.get('id') as string;
    const isNew = formData.get('isNew') === 'true';

    const rawData = {
        slug: formData.get('slug') as string,
        title: formData.get('title') as string,
        type: formData.get('type') as 'blog' | 'testimonial',
        excerpt: formData.get('excerpt') as string,
        content: formData.get('content') as string,
        cover_image: formData.get('cover_image') as string,
        author: formData.get('author') as string,
        published: formData.get('published') === 'on',
    };

    let query;
    if (isNew) {
        query = supabase.from('posts').insert([rawData]);
    } else {
        query = supabase.from('posts').update(rawData).eq('id', id);
    }

    const { error } = await query;

    if (error) {
        console.error('Error saving post:', error);
        throw new Error('Failed to save post');
    }

    revalidatePath('/admin/posts');
    revalidatePath('/blog');
    revalidatePath('/'); // For testimonials

    redirect('/admin/posts');
}

export async function deletePost(id: string) {
    const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting post:', error);
        throw new Error('Failed to delete post');
    }

    revalidatePath('/admin/posts');
}
