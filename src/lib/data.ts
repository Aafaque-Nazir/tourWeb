export interface Package {
    id: string;
    title: string;
    category: 'Desert' | 'Tech' | 'Fusion';
    price: number;
    duration: string;
    image: string;
    description: string;
    highlights: string[];
    includedServices: string[];
    pickupReady: boolean;
}

export const packages: Package[] = [
    {
        id: 'desert-pulse-vip',
        title: 'The Desert Pulse: Elite Dunes',
        category: 'Desert',
        price: 550,
        duration: '5 Hours',
        image: '/assets/desert-hero.png',
        description: 'A high-octane expedition into the heart of the Arabian desert. Private 4x4 dune bashing, falconry, and a secluded gourmet majlis dinner.',
        highlights: ['Instant Hotel Pickup', 'Private Luxury Majlis', 'Elite Sands Access'],
        includedServices: [
            'Private 4x4 Luxury Vehicle',
            'Professional Safari Guide',
            'Gourmet Majlis Dinner',
            'Live Falcon Show',
            'Arabic Coffee & Dates',
            'Sandboarding Session',
            'Hotel Pickup & Drop-off',
            'Professional Photography',
        ],
        pickupReady: true,
    },
    {
        id: 'tech-horizon-cyber',
        title: 'Tech Horizon: Future City',
        category: 'Tech',
        price: 350,
        duration: '4 Hours',
        image: '/assets/tech-hero.png',
        description: 'Explore the architectural future of Dubai. Private tour of the Museum of the Future and an exclusive access to the Sky View glass slide.',
        highlights: ['VIP Museum Entrance', 'Sky View Glass Access', 'Tech Hub Insights'],
        includedServices: [
            'Skip-the-Line VIP Tickets',
            'Private Expert Guide',
            'Premium Refreshments',
            'Sky View Observatory Access',
            'Exclusive Souvenir Pack',
            'Hotel Transfer (Both Ways)',
            'AR Experience Session',
            'Complimentary Wi-Fi Device',
        ],
        pickupReady: true,
    },
    {
        id: 'fusion-flow-night',
        title: 'The Fusion Flow: Night Mirage',
        category: 'Fusion',
        price: 850,
        duration: '8 Hours',
        image: '/assets/fusion-hero.png',
        description: 'The ultimate Dubai duality. A serene desert sunset followed by a high-fashion night cruise through the Neon-lit Dubai Marina.',
        highlights: ['Sunset Desert Safari', 'Neon Marina Cruise', 'Five-Star Catering'],
        includedServices: [
            'Desert Sunset Safari',
            'Private Marina Yacht Cruise',
            'Five-Star Gourmet Dinner',
            'Professional Photography',
            'Sunset Lounge Access',
            'Hotel Pickup & Drop-off',
            'Live Entertainment Onboard',
            'Premium Open Bar',
        ],
        pickupReady: true,
    },
];
