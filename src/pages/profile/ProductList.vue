<template>
    <div class="mb-5 pb-5">
        <TopNav>
            <div class="">

                <div class="d-flex gap-2 justify-content-end align-items-center fs-4">
                    <i class="bi bi-plus-lg btn border p-1 text-white" data-bs-toggle="offcanvas"
                        data-bs-target="#createProduct" aria-controls="createProduct"></i>
                    <i class="bi bi-funnel btn border p-1 text-white" data-bs-toggle="offcanvas"
                        data-bs-target="#Filter" aria-controls="Filter"></i>
                    <i class="bi bi-sort-up-alt btn border p-1 text-white" data-bs-toggle="offcanvas"
                        data-bs-target="#Sort" aria-controls="Sort"></i>
                    <i class="bi bi-search btn border p-1 text-white" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></i>
                    <i :class="currentIcon" class="btn border text-white p-1" @click="toggleIcon"></i>

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
        <div class="offcanvas offcanvas-end" tabindex="-1" id="createProduct" aria-labelledby="createProductLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="createProductLabel">Create Product</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form @submit.prevent="createProduct()" class="mt-4 row g-3 needs-validation" novalidate>
                    <ImageUploadBox @image="handleImage" />
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
        <div class="" style="padding-top:80px">
            <div v-if="currentIcon === 'bi bi-list-ul'" class="container-fluid my-2">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1">
                    <div class="col" v-for="(product, index) in products" :key="index" data-bs-toggle="modal"
                        data-bs-target="#collectionModal" :data-bs-collectionId="product.id">
                        <div class="border  d-flex justify-content-start gap-2 p-2">
                            <img :src="product.img" class="border rounded-0"
                                style="object-position: top; object-fit: cover; max-height: 60px; max-width: 60px;">
                            <p class="text-start mb-0 truncate text-capitalize">{{ product.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="editProduct" aria-labelledby="editProductLabel">
                    <div class="offcanvas-header border-bottom">
                        <h5 class="offcanvas-title" id="editProductLabel">Edit Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <form @submit.prevent="createProduct()" class="mt-4 row g-3 needs-validation" novalidate>
                            <ImageUploadBox @image="handleImage" />
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
                                <input type="tel" class="form-control" placeholder="Mobile" v-model="brandName"
                                    required>
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
            </div>

            <div v-else-if="currentIcon === 'bi bi-grid-3x3-gap-fill'" class="container my-2">
                <div class="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-2">
                    <div class="col" v-for="(product, index) in products" :key="index">
                        <div class="card border-0" data-bs-toggle="modal" data-bs-target="#collectionModal"
                            :data-bs-collectionId="product.id">
                            <img :src="product.img" class="border rounded-0 card-img-top">
                        </div>
                    </div>
                </div>
            </div>

            <div v-else-if="currentIcon === 'bi bi-grid-fill'" class="container my-2">
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2">
                    <div class="col" v-for="(product, index) in products" :key="index">
                        <div class="card border-0" data-bs-toggle="modal" data-bs-target="#collectionModal"
                            :data-bs-collectionId="product.id">
                            <img :src="product.img" class="border rounded-0 card-img-top">
                            <p class="text-start">{{ product.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal :collection="products" />
        </div>

    </div>
    <BottomNav />
</template>

<script>
import ImageUploadBox from "@/components/ImageUpload.vue";
import BottomNav from "@/components/profile/BottomNav.vue";
import TopNav from "@/components/profile/TopNav.vue";
import ProductModal from "@/components/profile/ProductModal.vue";
export default {
    components: {
        BottomNav,
        TopNav,
        ImageUploadBox,
        ProductModal,
    },
    data() {
        return {
            icons: [
                'bi bi-grid-fill',
                'bi bi-grid-3x3-gap-fill',
                'bi bi-list-ul'
            ],
            currentIconIndex: 0,
            pageName: '',
            links: [
                { path: "/product-list", name: 'Business', },
                { path: "/supporters-details", name: 'Supporters', },
                { path: "/fameset-details", name: 'Fameset', },
                { path: "/rewards-details", name: 'Rewards', },
                { path: "/dashboard", name: 'Manage', },

            ],
            code: '',
            name: '',
            description: '',
            brandName: '',
            category: '',
            price: '',
            uploadedImageUrl: ''
        }
    },
    mounted() {
        let path = this.$route.path;
        path = path.replace(/^\/|\/$/g, '');
        path = path.replace(/-/g, ' ');
        this.pageName = path;
        console.log(this.pageName);
    },
    computed: {
        currentIcon() {
            return this.icons[this.currentIconIndex];
        },
        products() {
            return this.$store.getters.getProducts
        }
    },
    methods: {
        toggleIcon() {
            this.currentIconIndex = (this.currentIconIndex + 1) % this.icons.length;
        },
        goback() {
            window.history.back()
        },
        isLinkActive(link) {
            return this.$route.matched.some((route) => {
                return route.path === link.path || (route.path !== '/' && link.path.startsWith(route.path));
            });
        },
        handleImage(imageUrl) {
            this.uploadedImageUrl = imageUrl;
            console.log("Uploaded image URL:", imageUrl);
        },
        createProduct() {
            let data = {
                code: this.code,
                name: this.name,
                description: this.description,
                brandName: this.brandName,
                category: this.category,
                price: this.price,
                img: this.uploadedImageUrl
            }
            this.$store.dispatch('createProduct', data);
        },
        editProduct() {
            let data = {
                code: this.code,
                name: this.name,
                description: this.description,
                brandName: this.brandName,
                category: this.category,
                price: this.price,
                img: this.uploadedImageUrl
            }
            this.$store.dispatch('editProduct', data);
        }
    }
}
</script>

<!-- <style scoped>
.router-link-active.router-link-exact-active.nav-link,
.active {
    color: #ffc107 !important;
    font-weight: 800;
    /* text-decoration: underline !important; */
    border-bottom: 2px solid #ffc107;
}
</style> -->
