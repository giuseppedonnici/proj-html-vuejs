<script>
export default {
    name: "ServiceSection",
    components: {

    }
}
</script>

<template>
<section id="services">
    <div class="ms-container">
        <div class="container-fluid">
            <div class="row row-cols-lg-3 gx-5">
                <div class="col">
                    <h6 class="text-uppercase fw-bold">our business areas</h6>
                    <h2>Logistics Services</h2>
                    <p class="w-75">We are leaders in providing logistics services with a set of cutting edge technologies and a team of experienced and renowned professionals.</p>
                    <span class="badge p-2 me-3 mb-3">Tradition</span>
                    <span class="badge p-2 me-3 mb-3">Quality</span>
                    <span class="badge p-2 me-3 mb-3">Security</span>
                    <button class="primary-btn btn d-block">read more</button>
                </div>
                <div class="col">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, amet sint. Repellendus quae alias minus vero officia, commodi sit. Maxime neque quia, deserunt omnis blanditiis laboriosam officia sequi ipsum totam!
                    Reiciendis, odio corrupti sunt error mollitia distinctio corporis? Soluta aliquid consectetur incidunt iusto. Pariatur ipsum a nobis suscipit ut unde consequatur placeat eum, inventore laborum fugit officia eveniet, rem qui.
                    Delectus, accusantium pariatur nulla maxime aperiam cupiditate tempore, neque repellendus voluptates alias officia impedit, deleniti corrupti commodi ipsa temporibus laboriosam doloremque hic tempora. Nihil enim illum debitis voluptates atque molestiae!
                </div>
                <div class="col">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, amet sint. Repellendus quae alias minus vero officia, commodi sit. Maxime neque quia, deserunt omnis blanditiis laboriosam officia sequi ipsum totam!
                    Reiciendis, odio corrupti sunt error mollitia distinctio corporis? Soluta aliquid consectetur incidunt iusto. Pariatur ipsum a nobis suscipit ut unde consequatur placeat eum, inventore laborum fugit officia eveniet, rem qui.
                    Delectus, accusantium pariatur nulla maxime aperiam cupiditate tempore, neque repellendus voluptates alias officia impedit, deleniti corrupti commodi ipsa temporibus laboriosam doloremque hic tempora. Nihil enim illum debitis voluptates atque molestiae!
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
            // debug
            border: 1px solid red;
            h6 {
                color: $primary-color;
                font-size: .8rem;
            }
            h2 {
                width: 60%;
                font-weight: 700;
                font-size: 3rem;
                margin: 1.5rem 0;
            }
            span {
                color: $primary-color;
                background-color: $secondary-color;
                font-weight: 300;
            }
        }
        
    }

</style>