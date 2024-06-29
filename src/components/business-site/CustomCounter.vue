<template>
    <div class="container-fluid text-white py-4" style="background-color: var(--bg-primary)">
        <div class="row">
            <div class="d-flex flex-column justify-content-center mb-4">
                <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Our Facts ~</span></p>
            </div>
            <div class="col">
                <div class="text-center">
                    <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                        <AutoCounter :data="value1"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="mt-0 text-capitalize">{{ name1 }}</p>
                </div>
            </div>
            <div class="col">
                <div class="text-center">
                    <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                        <AutoCounter :data="value2"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="mt-0 text-capitalize">{{ name2 }}</p>
                </div>
            </div>
            <div class="col">
                <div class="text-center">
                    <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                        <AutoCounter :data="value3"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="mt-0 text-capitalize">{{ name3 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/business-site/AutoCounter.vue'
export default {
    name: "CustomCounter", 
    components: {
        AutoCounter
    },
    props:{
        name1: {
            type: String,
            required: true
        },
        name2: {
            type: String,
            required: true
        },
        name3: {
            type: String,
            required: true
        },
        value1: {
            type: Number,
            required: true
        },
        value2: {
            type: Number,
            required: true
        },
        value3: {
            type: Number,
            required: true
        },
        brandColorOne: {
            type: String,
            required: true
        },
        brandTextColor: {
            type: String,
            required: true
        },
    },
}
</script>
<style lang="">

</style>