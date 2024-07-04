<template>
    <div class="mb-5 pb-5">
        <div class="container-fluid position-fixed top-0 w-100 bg-light" style="z-index: 99;">
            <div class="row border py-3 px-2">
                <div class="col-4 d-flex gap-2 align-items-center">
                    <i class="bi bi-chevron-left" @click=goback()></i>
                    <!-- <span>{{ pageName }}</span> -->
                     <small>Page Name</small>
                </div>
                <div class="col-8 d-flex gap-2 justify-content-end align-items-center fs-4">
                    <i :class="currentIcon" @click="toggleIcon"></i>
                    <i class="bi bi-funnel"></i>
                    <i class="bi bi-sort-up-alt"></i>
                    <i class="bi bi-search" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                        aria-expanded="false" aria-controls="collapseExample"></i>

                    <button class="btn border" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
                        <i class="bi bi-plus-lg"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="collapse" id="collapseExample">
            <div class="input-group border">
                <input type="search" placeholder="Search" v-model="searchTerm" class="form-control bg-light border-0"
                    ref="searchInput" @keyup.enter="search">
                <button class="btn btn-dark rounded-0" type="button" id="button-addon2"><i class="bi bi-search"
                        @click="search"></i></button>
            </div>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Create Product</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation" novalidate>
                    <div class="w-100 form-floating my-2">
                        <input type="text" class="form-control" placeholder="" v-model="code" required>
                        <label for="floatingInput" class="text-muted ms-2">Code</label>
                    </div>
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
                        <label class="ms-2 text-muted">Brand Name</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <input type="tel" class="form-control" placeholder="Mobile" v-model="category" required>
                        <label class="ms-2 text-muted">Category</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <input type="tel" class="form-control" placeholder="Mobile" v-model="price" required>
                        <label class="ms-2 text-muted">price</label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-secondary py-2 fs-5 w-50 rounded-0" type="reset">Reset</button>
                        <button class="btn btn-danger py-2 fs-5 w-50 rounded-0" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>

        <div v-if="products.length === 0">No products available</div>

        <!-- Conditional Rendering for Different Views -->
       <div class="" style="padding-top:71px">
        <div v-if="currentIcon === 'bi bi-list-ul'" class="d-flex flex-column my-2">
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

        <div v-else-if="currentIcon === 'bi bi-grid-3x3-gap-fill'" class="container my-2">
            <div class="row row-cols-3 g-2">
                <div class="col" v-for="(product, index) in products" :key="index">
                    <div class="card border-0">
                        <img :src="product.img" class="border rounded card-img-top">
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="currentIcon === 'bi bi-grid-fill'" class="container my-2">
            <div class="row row-cols-2 g-2">
                <div class="col" v-for="(product, index) in products" :key="index">
                    <div class="card border-0">
                        <img :src="product.img" class="border rounded card-img-top">
                        <p class="text-start">{{ product.name }}</p>
                    </div>
                </div>
            </div>
        </div>
       </div>

    </div>
    <BottomNav />
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";
export default {
    components:{
        BottomNav,
    },
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
            icons: [
                'bi bi-grid-fill',
                'bi bi-grid-3x3-gap-fill',
                'bi bi-list-ul'
            ],
            currentIconIndex: 0,
            pageName: ''
        }
    },
    // mounted() {
    //     this.pageName = this.$router.params.path
    // },
    computed: {
        currentIcon() {
            return this.icons[this.currentIconIndex];
        }
    },
    methods: {
        editProduct(product) {
            this.$router.push({ name: 'EditProduct', params: { id: product.id } });
        },
        toggleIcon() {
            this.currentIconIndex = (this.currentIconIndex + 1) % this.icons.length;
        },
        goback() {
            window.history.back()
        }
    }
}
</script>

<style lang="scss" scoped></style>
