<template>
    <div class="container-fluid" style="background-color: #FFF5DD;">
        <div class="row py-4 text-dark">
            <h1 class=" text-center text-capitalize my-5">{{ title }}</h1>
            <div class="col">
                <div class="text-center">
                    <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                        <AutoCounter :data="serviceCount"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="mt-0 text-capitalize">{{ service }}</p>
                </div>
            </div>
            <div class="col">
                <div class="text-center">
                    <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                        <AutoCounter :data="categoryCount"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="mt-0 text-capitalize">{{ category }}</p>
                </div>
            </div>
            <div class="col">
                <div class="text-center">
                    <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                        <AutoCounter :data="placeCount"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="mt-0 text-capitalize">{{ place }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'CustomCounter',
    components: {
        AutoCounter
    },
    props: {
        service: { type: String, },
        category: { type: String, },
        place: { type: String, },
        serviceCount: { type: Number, },
        placeCount: { type: Number, },
        categoryCount: { type: Number, },
        image: { type: String, },
        title: { type: String, },
        icon: { type: String, },
        path: { type: String, },
    },

}
</script>