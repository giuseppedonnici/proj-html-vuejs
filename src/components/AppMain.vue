<script>
import ServicesSection from './ServicesSection.vue';
import SkillsSection from './SkillsSection.vue';
import NewsSections from './NewsSection.vue';
import NewsletterSection from './NewsletterSection.vue';
import GetintouchSection from './GetintouchSection.vue';
import { getImagePath } from "../utils";
import { store } from "../store";


export default {
    name: "AppMain",
    components: {
        ServicesSection,
        SkillsSection,
        NewsSections,
        NewsletterSection,
        GetintouchSection
    },
    data() {
        return {
            store
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
                <li v-for="(partner, index) in store.partnersArray" :key="index">
                    <img :src="getImagePath(partner)" :alt="partner">
                </li>
            </ul>
        </div>
    </section>

    <NewsSections />
    <NewsletterSection />
    <GetintouchSection />
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