import { getPosts } from '@/lib/actions/posts';
import TestimonialsClient from './TestimonialsClient';

export default async function Testimonials() {
    const testimonials = await getPosts('testimonial');
    return <TestimonialsClient testimonials={testimonials} />;
}
