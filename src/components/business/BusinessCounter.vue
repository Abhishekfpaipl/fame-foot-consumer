<template>
    <div>
        <div class="container text-dark bg-white mt-4">
            <div class="row row-cols-4 row-cols-md-4 mx-1 g-4">
                <div v-for="(item, index) in fav" :key="index" class="col">
                    <div class="p-2 card shadow"
                        style="background-color: #FFF5DD !important;border-color: #FFCE56 !important;">
                        <p class="fw-bold fs-1 mb-0 d-flex justify-content-center align-items-center">
                            <AutoCounter :data="item.data" /><span>&nbsp;{{ item.info }}&nbsp;+</span>
                        </p>
                        <p>{{ item.label }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue';
export default {
    components: {
        AutoCounter,
    },
    data() {
        return {
            fav: [
                {
                    data: 11,
                    info: 'Lakh',
                    label: 'Trust Meesho to sell online',

                },
                {
                    data: 14,
                    info: 'Crore',
                    label: 'Customers buying across India'
                },
                {
                    data: 19000,
                    info: '',
                    label: 'Pincode Supported for delivery'
                },
                {
                    data: 700,
                    info: '',
                    label: 'Categories to sell online'
                },
            ],
        }
    }
}
</script>
<style lang="">

</style>