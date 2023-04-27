<script>
import ServicesSection from './ServicesSection.vue';
import SkillsSection from './SkillsSection.vue';
import NewsSections from './NewsSection.vue';
import NewsletterSection from './NewsletterSection.vue';
import { getImagePath } from "../utils";


export default {
    name: "AppMain",
    components: {
        ServicesSection,
        SkillsSection,
        NewsSections,
        NewsletterSection

    },
    data() {
        return {
            partnersArray: ['logo-5.png', 'logo-1.png', 'logo-2.png', 'logo-3.png', 'logo-4.png', 'logo-5.png']
        }
    },
    methods: {
        getImagePath
    }
}
</script>

<template>
    <ServicesSection />
    <SkillsSection />

    <section id="partners">
        <div class="ms-container">
            <ul class="d-flex justify-content-around">
                <li v-for="(partner, index) in partnersArray" :key="index">
                    <img :src="getImagePath(partner)" :alt="partner">
                </li>
            </ul>
        </div>
    </section>

    <NewsSections />
    <NewsletterSection />
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

    #partners {
        background-color: $section-bg-color;
        img {
            width: 100%;
            height: 30px;
            object-fit: scale-down;
            filter: invert(73%) sepia(6%) saturate(411%) hue-rotate(184deg) brightness(90%) contrast(85%); //this is the $gray-text: #9FA3AC; color
        }
    }
</style>