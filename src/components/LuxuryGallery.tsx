import { getContent } from '@/lib/actions/content';
import LuxuryGalleryClient from './LuxuryGalleryClient';

const defaultImages = [
    '/assets/gallery-1.png',
    '/assets/gallery-2.png',
    '/assets/gallery-3.png',
    '/assets/gallery-4.png',
    '/assets/gallery-5.png',
];

export default async function LuxuryGallery() {
    const content = await getContent('home-gallery');

    // Create array from content keys or fallback
    const galleryImages = [
        content?.image1 || defaultImages[0],
        content?.image2 || defaultImages[1],
        content?.image3 || defaultImages[2],
        content?.image4 || defaultImages[3],
        content?.image5 || defaultImages[4],
    ].filter(Boolean);

    return <LuxuryGalleryClient images={galleryImages} />;
}
