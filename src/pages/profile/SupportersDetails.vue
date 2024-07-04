<template>
    <div class="">
        <div class="container-fluid position-fixed top-0 w-100 bg-light" style="z-index: 99;">
            <div class="row border py-3 px-2">
                <div class="col-12 d-flex gap-2 align-items-center">
                    <i class="bi bi-chevron-left" @click=goback()></i>
                    <!-- <span>{{ pageName }}</span> -->
                    <small>Page Name</small>
                </div>
                <!-- <div class="col-8 d-flex gap-2 justify-content-end align-items-center fs-4">
                    <i :class="currentIcon" @click="toggleIcon"></i>
                    <i class="bi bi-funnel"></i>
                    <i class="bi bi-sort-up-alt"></i>
                    <i class="bi bi-search" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                        aria-expanded="false" aria-controls="collapseExample"></i>

                    <button class="btn border" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
                        <i class="bi bi-plus-lg"></i>
                    </button>
                </div> -->
            </div>
        </div>
        <div class="d-flex flex-column my-2" style="padding-top:71px">
            <div class="d-flex justify-content-between border-bottom" v-for="(product, index) in products" :key="index"
                @click="editProduct(product)">
                <div class="d-flex justify-content-between p-2">
                    <div>
                        <img :src="product.img" class="border rounded"
                            style="object-position: top; object-fit: cover; height: 60px; width: 60px;">
                    </div>
                    <p class="text-start mb-0 truncate ms-2">{{ product.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Sheer Pullover T-shirt',
                    img: 'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                    price: 2300,
                    unit: 12,
                    moq: 10,
                    option: [],
                    range: [],
                },
                {
                    id: 2,
                    name: 'Black Top',
                    img: 'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                    price: 799,
                    unit: 12,
                    moq: 10,
                    option: [],
                    range: [],
                },
                {
                    id: 3,
                    name: 'Sheer Pullover T-shirt',
                    img: 'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                    price: 2300,
                    unit: 12,
                    moq: 10,
                    option: [],
                    range: [],
                },
                {
                    id: 4,
                    name: 'Black Top',
                    img: 'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                    price: 799,
                    unit: 12,
                    moq: 10,
                    option: [],
                    range: [],
                },
            ],
        }
    },
    methods: {
        goback() {
            window.history.back()
        }
    }
}
</script>