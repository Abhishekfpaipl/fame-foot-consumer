<template>
    <div style="background-color: var(--bg-forth)">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-md-6 text-center">
                    <img :src="imageSrc" class="img-fluid" style="height: 250px;" alt="Image">
                </div>
                <div class="col-md-6 mt-5 mt-md-0">
                    <h1 class="text-center mb-5 text-capitalize text-dark">{{ title }}</h1>
                    <router-link to="/demo" class="btn btn-warning w-100"><span class="me-2">Click Here</span><i
                            class="bi bi-arrow-right"></i>

                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        faqs: {
            type: Array,
            required: true
        },
        imagePosition: {
            type: String,
            default: 'left',
            validator: function (value) {
                return ['left', 'right'].includes(value.toLowerCase());
            }
        }
    }
};
</script>

<style></style>