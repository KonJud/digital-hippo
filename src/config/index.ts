export const PRODUCT_CATEGORIES = [
    {
        label: 'Kits IU',
        value: 'ui_kits' as const,
        featured: [
            {
                name: 'Choix de l\’éditeur',
                href: '#',
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name: 'Nouveautés',
                href: '#',
                imageSrc: '/nav/ui-kits/blue.jpg'
            },
            {
                name: 'Meilleurs Ventes',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpg'
            }
        ]
    },
    {
        label: 'Icons',
        value: 'icons' as const,
        featured: [
            {
                name: 'Choix de d\'icon favorit',
                href: '#',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Nouveautés',
                href: '#',
                imageSrc: '/nav/icons/new.jpg'
            },
            {
                name: 'Icones les plus vendus',
                href: '#',
                imageSrc: '/nav/icons/bestsellers.jpg'
            }
        ]
    }
]