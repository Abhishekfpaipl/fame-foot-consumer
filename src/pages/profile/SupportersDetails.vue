<template>
    <div class="">
        <TopNav />
        <div class="d-flex flex-column my-2" style="padding-top:80px">
            <div class="d-flex justify-content-between border-bottom" v-for="(product, index) in products" :key="index">
                <div class="d-flex justify-content-between p-2" data-bs-toggle="modal" data-bs-target="#collectionModal"
                    :data-bs-collectionId="product.id">

                    <img :src="product.img" class="border rounded"
                        style="object-position: top; object-fit: cover; height: 60px; width: 60px;">

                    <p class="text-start mb-0 truncate ms-2">{{ product.name }}</p>
                </div>
            </div>
            <ProductModal :collection="products" />
        </div>
    </div>
    <BottomNav />
</template>
<script>
import BottomNav from "@/components/profile/BottomNav.vue"
import TopNav from "@/components/profile/TopNav.vue"
import ProductModal from "@/components/profile/ProductModal.vue"
export default {
    components: {
        BottomNav,
        TopNav,
        ProductModal,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Supporter 1',
                    img: 'https://img101.urbanic.com/v1/goods-pic/2a09375782c34f1781fd99bae860f81cUR_w750_q90.webp',
                    price: 2300,
                    options: [
                        "https://img101.urbanic.com/v1/goods-pic/2a09375782c34f1781fd99bae860f81cUR_w750_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/2a09375782c34f1781fd99bae860f81cUR_w750_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/2a09375782c34f1781fd99bae860f81cUR_w750_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/2a09375782c34f1781fd99bae860f81cUR_w750_q90.webp"
                    ],
                },
                {
                    id: 2,
                    name: 'Supporter 2',
                    img: 'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                    price: 799,
                    options: [
                        'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                        'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                        'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                        'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                    ],
                },
                {
                    id: 3,
                    name: 'Supporter 3',
                    img: 'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                    price: 2300,
                    options: [
                        'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                        'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                        'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                        'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                    ],
                },
                {
                    id: 4,
                    name: 'Supporter 4',
                    img: 'https://img101.urbanic.com/v1/goods-pic/0f85126c686b4fae95567f1203c53a69UR_w750_q90.webp',
                    price: 799,
                    options: [
                        'https://img101.urbanic.com/v1/goods-pic/0f85126c686b4fae95567f1203c53a69UR_w750_q90.webp',
                        'https://img101.urbanic.com/v1/goods-pic/0f85126c686b4fae95567f1203c53a69UR_w750_q90.webp',
                        'https://img101.urbanic.com/v1/goods-pic/0f85126c686b4fae95567f1203c53a69UR_w750_q90.webp',
                        'https://img101.urbanic.com/v1/goods-pic/0f85126c686b4fae95567f1203c53a69UR_w750_q90.webp',
                    ],
                },
            ],
            pageName: ''
        }
    },
    mounted() {
        let path = this.$route.path;

        // Remove leading and trailing slashes
        path = path.replace(/^\/|\/$/g, '');

        // Replace dashes with spaces
        path = path.replace(/-/g, ' ');

        // Optionally, capitalize the first letter of each word
        // path = path.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        this.pageName = path;
        console.log(this.pageName);
    },
    methods: {
        goback() {
            window.history.back()
        },

    }
}
</script>