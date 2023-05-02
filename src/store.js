import { reactive } from "vue";

export const store = reactive({
    servicesCards: [
        {
            title: 'Tecnology',
            description: "Focused on developing technology solutions adapted to our client's needs",
            img: 'gallery-3.jpg'
        },
        {
            title: 'Transport',
            description: "We develop operational strategies to improve logistical efficienty.",
            img: 'gallery-5.jpg'
        }
    ],
    badgesService: ['Tradition', 'Quality', 'Security'],
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
            title: 'prova'
        },
        {
            img: 'news-5.jpg',
            title: 'prova'
        },
    ],
    footerCards: [
        {
            title: 'About',
            id: 1,
            items: ['The Company', 'Institutional', 'Social & Events', 'Innovation', 'Environment', 'Technology']
        },
        {
            title: 'Transport',
            id: 2,
            items: ['Industrialized', 'Chemicals', 'Packaged Liquids', 'Construction', 'Laminated Wood', 'And others']
        },
        {
            title: 'Support',
            id: 3,
            items: ['Responsability', 'Terms of Use', 'About Cookies', 'Privacy Policy', 'Accessibility', 'Information']
        }
    ]
});