export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'HOME' },
    { href: '/stay', key: 'stay', label: 'STAY' },
    { href: '/dining', key: 'dining', label: 'DINING' },
    { href: '/conventioncenter', key: 'conventioncenter', label: 'CONVENTION CENTER' },
    { href: 'https://victoriasportsclub.com/', key: 'vsclub', label: 'VS CLUB' },
    { href: '/specialoffers', key: 'specialoffers', label: 'SPECIAL OFFERS' }
]

export const MENU_OPT = [
    { href: '/menu/VSCAFE_Menu_1.jpg', image: '/menu/VSCAFE_Menu_1.jpg', key: 'MENU A' },
    { href: '/menu/VSCAFE_Menu_2.jpg', image: '/menu/VSCAFE_Menu_2.jpg', key: 'MENU B' }
]

export const ROOM_TYPE = [
    { href: '/standardjunior', image: '/rooms/singleroom/1.jpg', key: 'singleroom', label: 'Standard Junior Room', subtext: 'Comfortably relaxing, 21 square meters with queen-size bed.'  },
    { href: '/standardqueen', image: '/rooms/standardqueen/1.jpg', key: 'standardqueenroom', label: 'Standard Queen Room', subtext: 'Cozy up in our Standard Queen, equipped with a queen-size bed.'  },
    { href: '/suiteroom', image: '/rooms/suiteroom/1.jpg', key: 'suiteroom', label: 'Suite Room', subtext: 'Retreat to a perfect sanctuary in the heart of the city and experience a luxurious stay in our Suite Room. The expansive suite offers stylish amenities, a separate lounge and living room with garden views. Luxuriate in a well-appointed bathroom with separate shower and bathtub.'  },
    { href: '/kingroom', image: '/rooms/kingroom/1.jpg', key: 'kingroom', label: 'King Room', subtext: 'Upgrade to King Room for a chic staycation. Unwind, curl up in a generous bed or revel in the modern bathroom with separate shower and bathtub. Perfect for families travelling together, and for long-stay leisure or business travelers.'  },
    { href: '/premiumqueen', image: '/rooms/premiumqueen/1.jpg', key: 'premiumqueenroom', label: 'Premium Queen Room', subtext: 'Spacious with 30-33 square meters, Premium Queen comes with a queen-size bed and contemporary amenities.'  },
    { href: '/familyroom', image: '/rooms/familyroom/1.jpg', key: 'familyroom', label: 'Family Room', subtext: 'Our Family Room is one of the spacious in the city. Inviting and relaxing with separate bathroom shower and bathtub.'  },
]

//ROOM VARIANTS
export const SINGLE_ROOM = [
    {
        //highlights
        inclusionA: [
            { list: 'Sleeps maximum of 2 guests' },
            { list: 'Smart TV' },
            { list: 'Coffee and Tea Making Facilities' },
            { list: 'Safe Box' },
            { list: 'Iron & Ironing board - upon request' },
        ],

        inclusionB: [
            { image: '/icons/Capacity.png', label: 'CAPACITY', subtext: '2 (Two persons)' },
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

export const FAMILY_ROOM = [
    {
        //highlights
        inclusionA: [
            { list: 'Sleeps maximum of 4 guests' },
            { list: '33-35 square meters' },
            { list: 'Connecting Rooms' },
            { list: 'Smart TV' },
            { list: 'Separate bathtub and shower' },
            { list: 'Coffee and Tea Making Facilities' },
            { list: 'Writing Desk' },
            { list: 'Safe Box' },
            { list: 'Iron & Ironing board – upon request' }
        ],

        inclusionB: [
            { image: '/icons/Capacity.png', label: 'CAPACITY', subtext: '4 (Four persons)' },
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
       Spaces: [
        {
            image: '/conventioncenter/FBallroom.jpg',
            name: 'Grand Ballroom',
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
        },

        {
            image: '/conventioncenter/FRooftopBR.png',
            name: 'City View Function Room',
            subtext: 'Enjoy the breathtaking view from the 10th floor of the VS Tower with a sophisticated venue and a complete event set-up of your choice.',
            sub_name: 'Capacity',
            capacity: [
                {
                    space_name: 'Classroom',
                    space_count: '250 pax'
                },

                {
                    space_name: 'Banquet',
                    space_count: '280 pax'
                },

                {
                    space_name: 'Theater',
                    space_count: '200 pax'
                }
            ]
        },

        {
            image: '/conventioncenter/FMexico.png',
            name: 'Mexico',
            subtext: 'Work in a different ambiance away from your office. VS Hotel’s Meeting rooms are perfect from Small Private Business Meetings and Brainstorming.',
            sub_name: 'Capacity',
            capacity: [
                {
                    space_name: 'Classroom',
                    space_count: '22 pax'
                },

                {
                    space_name: 'Banquet',
                    space_count: '40 pax'
                },

                {
                    space_name: 'Theater',
                    space_count: '30 pax'
                }
            ]
        },

        {
            image: '/conventioncenter/FTokyo.jpg',
            name: 'Tokyo',
            subtext: 'Brainstorm big ideas in our Tokyo Function Room. Perfect fit for small groups with a maximum capacity of 12 pax.',
            sub_name: 'Capacity',
            capacity: [
                {
                    space_name: 'Conference',
                    space_count: '12 pax'
                }
            ]
        },

        {
            image: '/conventioncenter/FMelbourne.jpg',
            name: 'Melbourne',
            subtext: 'Perfect for big group gatherings for business or school affairs, our Melbourne Function Room can fit up to 120 pax.',
            sub_name: 'Capacity',
            capacity: [
                {
                    space_name: 'Classroom',
                    space_count: '50 pax'
                },

                {
                    space_name: 'Banquet',
                    space_count: '80 pax'
                },

                {
                    space_name: 'Theater',
                    space_count: '100 to 120 pax'
                }
            ]
        },


       ]
    }
]

//SPECIAL OFFERS
export const HTL_OFFERS = [
    {
        Offers: [
            {
                label: "A NEW YEAR'S EVE COUNTDOWN",
                title: 'Christmas Offer',
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nisi rerum adipisci deleniti iste veniam, nam provident modi mollitia quidem repellendus asperiores minima cum dolorem?',
                rate: 'P6,600',
                booking: 'December 31, 2023',
                stay: 'Jan 1, 2024',
                inclusions: [
                    {
                        inc_name: 'Room Accommodation'
                    },
                    {
                        inc_name: 'Set Breakfast'
                    },
                    {
                        inc_name: 'Access to Swimming Pool & Water Spa'
                    },
                    {
                        inc_name: 'Main Gym & Play Gym Access'
                    },
                    {
                        inc_name: 'Passes to the Black & White Masquerade Party'
                    }
                ]
            },

            {
                label: "A NEW YEAR'S EVE COUNTDOWN",
                title: 'Christmas Offer',
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nisi rerum adipisci deleniti iste veniam, nam provident modi mollitia quidem repellendus asperiores minima cum dolorem?',
                rate: 'P6,600',
                booking: 'December 31, 2023',
                stay: 'January 1, 2024',
                inclusions: [
                    {
                        inc_name: 'Room Accommodation'
                    },
                    {
                        inc_name: 'Set Breakfast'
                    },
                    {
                        inc_name: 'Access to Swimming Pool & Water Spa'
                    },
                    {
                        inc_name: 'Main Gym & Play Gym Access'
                    },
                    {
                        inc_name: 'Passes to the Black & White Masquerade Party'
                    }
                ]
            },
        ]
    }
]