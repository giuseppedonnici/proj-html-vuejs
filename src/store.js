import { reactive } from "vue";

export const store = reactive({
    partnersArray: ['logo-5.png', 'logo-1.png', 'logo-2.png', 'logo-3.png', 'logo-4.png', 'logo-5.png'],
    news: [
        {
            img: 'news-1.jpg',
            title: 'Increasing creativity is possible for everyone'
        },
        {
            img: 'news-2.jpg',
            title: 'Because market research is part of the business plan'
        },
        {
            img: 'news-3.jpg',
            title: 'Working from home is now a trend'
        },
        {
            img: 'news-4.jpg',
            title: ''
        },
        {
            img: 'news-5.jpg',
            title: ''
        }
    ],
    footerCards: [
        {
            title: 'About',
            id: 1,
            items: [
                {
                    item1: 'The Company',
                    item2: 'Institutional',
                    item3: 'Social & Events',
                    item4: 'Innovation',
                    item5: 'Environment',
                    item6: 'Technology'
                }
            ]
        },
        {
            title: 'Transport',
            id: 2,
            items: [
                {
                    item1: 'Industrialized',
                    item2: 'Chemicals',
                    item3: 'Packaged Liquids',
                    item4: 'Construction',
                    item5: 'Laminated Wood',
                    item6: 'And others'
                }
            ]
        },
        {
            title: 'Support',
            id: 3,
            items: [
                {
                    item1: 'Responsability',
                    item2: 'Terms of Use',
                    item3: 'About Cookies',
                    item4: 'Privacy Policy',
                    item5: 'Accessibility',
                    item6: 'Information'
                }
            ]
        }
    ]
});