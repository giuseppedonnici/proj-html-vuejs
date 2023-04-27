<script>
import ServicesSection from './ServicesSection.vue';
import SkillsSection from './SkillsSection.vue';

export default {
    name: "AppMain",
    components: {
        ServicesSection,
        SkillsSection

    }
}
</script>

<template>
    <ServicesSection />
    <SkillsSection />
</template>

<style scoped lang="scss">

</style>