import { reactive } from "vue";

export const store = reactive({
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
});