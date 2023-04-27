<script>
import ServiceCard from "./ServiceCard.vue";
import { getImagePath } from "../utils";

export default {
    name: "ServiceSection",
    components: {
        ServiceCard
    },
    methods: {
        getImagePath
    }
}
</script>

<template>
<section id="services">
    <div class="ms-container">
        <div class="container-fluid">
            <div class="row row-cols-lg-3 gx-3">
                <div class="col">
                    <h6>our business areas</h6>
                    <h2>Logistics Services</h2>
                    <p class="w-75">We are leaders in providing logistics services with a set of cutting edge technologies and a team of experienced and renowned professionals.</p>
                    <span class="badge p-2 me-3 mb-3">Tradition</span>
                    <span class="badge p-2 me-3 mb-3">Quality</span>
                    <span class="badge p-2 me-3 mb-3">Security</span>
                    <button class="primary-btn btn d-block">read more</button>
                </div>
                <div class="col">
                    <ServiceCard 
                    :image="getImagePath('gallery-3.jpg')"
                    title="Tecnology"
                    description="Focused on developing technology solutions adapted to our client's needs"
                    />
                </div>
                <div class="col">
                    <ServiceCard 
                    :image="getImagePath('gallery-5.jpg')"
                    title="Transport"
                    description="We develop operational strategies to improve logistical efficienty."
                    />
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;

    #services {
        background-color: $section-bg-color;
        .col {
            h2 {
                width: 60%;
            }
            span {
                color: $primary-color;
                background-color: $secondary-color;
                font-weight: 300;
            }
        }
    }
</style>