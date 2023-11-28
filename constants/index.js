export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'HOME' },
    { href: '/stay', key: 'stay', label: 'STAY' },
    { href: '/dining', key: 'dining', label: 'DINING' },
    { href: '/conventioncenter', key: 'conventioncenter', label: 'CONVENTION CENTER' },
    { href: 'https://vshotel.com.ph/ConventionCenter', key: 'vsclub', label: 'VS CLUB' },
    { href: '/specialoffers', key: 'specialoffers', label: 'SPECIAL OFFERS' }
]

export const ROOM_TYPE = [
    { href: '/singleroom', image: '/testroom.png', key: 'singleroom', label: 'Single Room', subtext: 'Comfortably relaxing, 21 square meters with queen-size bed.'  },
    { href: '/', image: '/testroom.png', key: 'standardqueenroom', label: 'Standard Queen Room', subtext: 'Cozy up in our Standard Queen, equipped with a queen-size bed.'  },
    { href: '/', image: '/testroom.png', key: 'suiteroom', label: 'Suite Room', subtext: 'Retreat to a perfect sanctuary in the heart of the city and experience a luxurious stay in our Suite Room. The expansive suite offers stylish amenities, a separate lounge and living room with garden views. Luxuriate in a well-appointed bathroom with separate shower and bathtub.'  },
    { href: '/', image: '/testroom.png', key: 'kingroom', label: 'King Room', subtext: 'Upgrade to King Room for a chic staycation. Unwind, curl up in a generous bed or revel in the modern bathroom with separate shower and bathtub. Perfect for families travelling together, and for long-stay leisure or business travelers.'  },
    { href: '/', image: '/testroom.png', key: 'premiumroom', label: 'Premium Queen Room', subtext: 'Spacious with 30-33 square meters, Premium Queen comes with a queen-size bed and contemporary amenities.'  }
]

//ROOM VARIANTS
export const ROOM_VARIANTS = [
    {
        name: 'SINGLE ROOM',
        label: 'Comfortably relaxing, 21 square meters with queen-size bed.',
        //highlights
        inclusionA: [
            {
                list: 'Sleeps maximum of 1 guest',
                listA: '20-21 square meters',
                listB: 'Smart TV',
                listC: 'Coffee and Tea Making Facilities',
                listD: 'Safe Box',
                listE: 'Iron & Ironing board - upon request'
            }
        ],
        inclusionB: [
            {
                image: '/testroom.png',
                label: 'CAPACITY',
                subtext: '1 (One person)'
            },

            {
                image: '/testroom.png',
                label: 'ROOM SIZE',
                subtext: '1 (One person)'
            },

            {
                image: '/testroom.png',
                label: 'PLATED BREAKFAST',
                subtext: '1 (One person)'
            },
        ],

        inclusionC: [
            {
                image: '/testroom.png',
                name: 'KIDDIE POOL'
            },

            {
                image: '/testroom.png',
                name: 'GYM'
            },

            {
                image: '/testroom.png',
                name: 'WATER SPA'
            },
        ]

    }
]