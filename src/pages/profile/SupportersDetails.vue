<template>
    <div class="">
        <TopNav>
            <div class="">

                <div class="d-flex gap-2 justify-content-end align-items-center fs-4">
                    <i class="bi bi-plus-lg btn border p-1 text-white" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
                    <i class="bi bi-funnel btn border p-1 text-white" data-bs-toggle="offcanvas" data-bs-target="#Filter"
                        aria-controls="Filter"></i>
                    <i class="bi bi-sort-up-alt btn border p-1 text-white" data-bs-toggle="offcanvas"
                        data-bs-target="#Sort" aria-controls="Sort"></i>
                    <i class="bi bi-search btn border p-1 text-white" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></i>

                </div>
                <div class="p-2 collapse" id="collapseExample">
                    <div class="input-group border">
                        <input type="search" placeholder="Search" v-model="searchTerm"
                            class="form-control bg-light border-0" ref="searchInput" @keyup.enter="search">
                        <button class="btn btn-dark rounded-0" type="button" id="button-addon2"><i class="bi bi-search"
                                @click="search"></i></button>
                    </div>
                </div>
            </div>

        </TopNav>
        <!-- sort -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="Sort" aria-labelledby="SortLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="SortLabel">Sort</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
        <!-- filter -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="Filter" aria-labelledby="FilterLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="FilterLabel">Filter</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
        <!-- create -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Add Supporter</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form @submit.prevent="createProduct()" class="mt-4 row g-3 needs-validation" novalidate>
                    <ImageUploadBox @image="handleImage" />
                    <div class="w-100 form-floating my-2">
                        <input type="text" class="form-control" placeholder="" v-model="name" required>
                        <label for="floatingInput" class="text-muted ms-2">Name</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <input type="text" class="form-control" placeholder="" v-model="description" required>
                        <label for="floatingInput" class="text-muted ms-2">Description</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <input type="tel" class="form-control" placeholder="Mobile" v-model="brandName" required>
                        <label class="ms-2 text-muted">Company Name</label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-secondary py-2 fs-5 w-50 rounded-0" type="reset">Reset</button>
                        <button class="btn btn-danger py-2 fs-5 w-50 rounded-0" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
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