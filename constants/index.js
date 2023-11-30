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
    { href: '/standardqueen', image: '/testroom.png', key: 'standardqueenroom', label: 'Standard Queen Room', subtext: 'Cozy up in our Standard Queen, equipped with a queen-size bed.'  },
    { href: '/suiteroom', image: '/testroom.png', key: 'suiteroom', label: 'Suite Room', subtext: 'Retreat to a perfect sanctuary in the heart of the city and experience a luxurious stay in our Suite Room. The expansive suite offers stylish amenities, a separate lounge and living room with garden views. Luxuriate in a well-appointed bathroom with separate shower and bathtub.'  },
    { href: '/kingroom', image: '/testroom.png', key: 'kingroom', label: 'King Room', subtext: 'Upgrade to King Room for a chic staycation. Unwind, curl up in a generous bed or revel in the modern bathroom with separate shower and bathtub. Perfect for families travelling together, and for long-stay leisure or business travelers.'  },
    { href: '/premiumqueen', image: '/testroom.png', key: 'premiumroom', label: 'Premium Queen Room', subtext: 'Spacious with 30-33 square meters, Premium Queen comes with a queen-size bed and contemporary amenities.'  }
]

//ROOM VARIANTS
export const SINGLE_ROOM = [
    {
        //highlights
        inclusionA: [
            { list: 'Sleeps maximum of 1 guest' },
            { list: 'Smart TV' },
            { list: 'Coffee and Tea Making Facilities' },
            { list: 'Safe Box' },
            { list: 'Iron & Ironing board - upon request' },
        ],

        inclusionB: [
            { image: '/icons/Capacity.png', label: 'CAPACITY', subtext: '1 (One person)' },
            { image: '/icons/room size.png', label: 'ROOM SIZE', subtext: '21sqm' },
            { image: '/icons/breakfast.png', label: 'PLATED BREAKFAST', subtext: 'MEAL'
            },
        ],

        inclusionC: [
            { image: '/icons/pool.png', name: 'KIDDIE POOL' },
            { image: '/icons/gym.png', name: 'GYM' },
            { image: '/icons/sauna.png', name: 'WATER SPA' },
        ],

    }
]

export const STANDARD_QUEEN_ROOM = [
    {
        //highlights
        inclusionA: [
            { list: 'Sleeps maximum of 2 guests' },
            { list: '27 square meters' },
            { list: 'Smart TV' },
            { list: 'Coffee and Tea Making Facilities' },
            { list: 'Writing Desk' },
            { list: 'Safe Box' },
            { list: 'Iron & Ironing board – upon request' },
        ],

        inclusionB: [
            { image: '/icons/Capacity.png', label: 'CAPACITY', subtext: '2 (Two persons)' },
            { image: '/icons/room size.png', label: 'ROOM SIZE', subtext: '27sqm' },
            { image: '/icons/breakfast.png', label: 'PLATED BREAKFAST', subtext: 'MEAL'
            },
        ],

        inclusionC: [
            { image: '/icons/pool.png', name: 'KIDDIE POOL' },
            { image: '/icons/gym.png', name: 'GYM' },
            { image: '/icons/sauna.png', name: 'WATER SPA' },
        ],

    }
]

export const SUITE_ROOM = [
    {
        //highlights
        inclusionA: [
            { list: 'Sleeps maximum of 2 guests' },
            { list: '78 square meters' },
            { list: 'Smart TV' },
            { list: 'Separate bathtub and shower' },
            { list: 'Coffee and Tea Making Facilities' },
            { list: 'Writing Desk' },
            { list: 'Safe Box' },
            { list: 'Iron & Ironing board – upon request' },
        ],

        inclusionB: [
            { image: '/icons/Capacity.png', label: 'CAPACITY', subtext: '2 (Two persons)' },
            { image: '/icons/room size.png', label: 'ROOM SIZE', subtext: '78sqm' },
            { image: '/icons/breakfast.png', label: 'PLATED BREAKFAST', subtext: 'MEAL'
            },
        ],

        inclusionC: [
            { image: '/icons/pool.png', name: 'KIDDIE POOL' },
            { image: '/icons/gym.png', name: 'GYM' },
            { image: '/icons/sauna.png', name: 'WATER SPA' },
        ],

    }
]

export const KING_ROOM = [
    {
        //highlights
        inclusionA: [
            { list: 'Sleeps maximum of 2 guests' },
            { list: '33-35 square meters' },
            { list: 'Smart TV' },
            { list: 'Separate bathtub and shower' },
            { list: 'Coffee and Tea Making Facilities' },
            { list: 'Writing Desk' },
            { list: 'Safe Box' },
            { list: 'Iron & Ironing board – upon request' },
        ],

        inclusionB: [
            { image: '/icons/Capacity.png', label: 'CAPACITY', subtext: '2 (Two persons)' },
            { image: '/icons/room size.png', label: 'ROOM SIZE', subtext: '35sqm' },
            { image: '/icons/breakfast.png', label: 'PLATED BREAKFAST', subtext: 'MEAL'
            },
        ],

        inclusionC: [
            { image: '/icons/pool.png', name: 'KIDDIE POOL' },
            { image: '/icons/gym.png', name: 'GYM' },
            { image: '/icons/sauna.png', name: 'WATER SPA' },
        ],

    }
]

export const PREMIUM_QUEEN = [
    {
        //highlights
        inclusionA: [
            { list: 'Sleeps maximum of 2 guests' },
            { list: 'Smart TV' },
            { list: 'Separate bathtub and shower' },
            { list: 'Coffee and Tea Making Facilities' },
            { list: 'Writing Desk' },
            { list: 'Safe Box' },
            { list: 'Iron & Ironing board – upon request' },
        ],

        inclusionB: [
            { image: '/icons/Capacity.png', label: 'CAPACITY', subtext: '2 (Two persons)' },
            { image: '/icons/room size.png', label: 'ROOM SIZE', subtext: '33sqm' },
            { image: '/icons/breakfast.png', label: 'PLATED BREAKFAST', subtext: 'MEAL'
            },
        ],

        inclusionC: [
            { image: '/icons/pool.png', name: 'KIDDIE POOL' },
            { image: '/icons/gym.png', name: 'GYM' },
            { image: '/icons/sauna.png', name: 'WATER SPA' },
        ],

    }
]

//EVENT SPACES
export const EVENT_SPACES = [
    {
       Ballroom: [
        {
            image: '/testroom.png',
            name: 'Ballroom',
            subtext: 'Throw your biggest party of VS Hotel’s Club lounge and party like no other. Its modern interiors compliment the classy and chill vibe of the spot located at the Upper Ground Floor of Victoria Sports Tower 2.',
            sub_name: 'Capacity',
            capacity: [
                {
                    space_name: 'Classroom',
                    space_count: '250pax'
                },

                {
                    space_name: 'Banquet',
                    space_count: '280pax'
                },

                {
                    space_name: 'Theater',
                    space_count: '200pax'
                }
            ]
        }
       ]
    }
]