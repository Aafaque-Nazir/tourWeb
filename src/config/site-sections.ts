export type ContentField = {
    key: string;
    label: string;
    type: 'text' | 'textarea' | 'image' | 'rich-text';
    placeholder?: string;
};

export type SiteSection = {
    id: string;
    title: string;
    description: string;
    fields: ContentField[];
};

export const SITE_SECTIONS: SiteSection[] = [
    {
        id: 'home-hero',
        title: 'Home / Hero Section',
        description: 'The main tagline and background image on the homepage.',
        fields: [
            { key: 'heading', label: 'Main Heading', type: 'text', placeholder: 'Discover the Unseen' },
            { key: 'subheading', label: 'Subheading', type: 'textarea', placeholder: 'Explore the world with us...' },
            { key: 'heroImage', label: 'Background Image', type: 'image' },
        ],
    },
    {
        id: 'home-about',
        title: 'Home / About Us',
        description: 'Brief introduction section on the homepage.',
        fields: [
            { key: 'title', label: 'Section Title', type: 'text' },
            { key: 'content', label: 'Main Content', type: 'rich-text' },
            { key: 'image', label: 'Side Image', type: 'image' },
        ],
    },
    {
        id: 'contact-info',
        title: 'Global / Contact Info',
        description: 'Phone numbers, emails, and address displayed in footer/contact page.',
        fields: [
            { key: 'phone', label: 'Phone Number', type: 'text' },
            { key: 'email', label: 'Email Address', type: 'text' },
            { key: 'address', label: 'Physical Address', type: 'textarea' },
        ],
    },
];
