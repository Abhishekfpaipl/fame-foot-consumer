<template>
    <div class="p-2 bg-dark">
        <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
            <img src="/img/logo.svg" style="width: 50px;object-fit: contain;filter: invert(1);">
            <span class="text-uppercase text-white fs-3">fameset</span>
        </router-link>
    </div>
    <div class="input-group border mb-3 position-sticky p-2 bg-white" style="z-index: 999; top: 0%;">
        <input type="search" placeholder="Search" v-model="searchTerm" class="form-control bg-light border-0"
            ref="searchInput" @keyup.enter="search">
        <button class="btn btn-dark rounded-0" type="button" id="button-addon2"><i class="bi bi-search"
                @click="search"></i></button>
    </div>
    <div class="container py-5">
        <div class="d-flex justify-content-between mb-3">
            <div class="d-flex" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">
                <i class="bi bi-sliders btn btn-dark rounded-0 fs-5"></i>
                <span class="fs-4 border form-control rounded-0">Filters</span>
            </div>
            <div class="dropdown">
                <div class="btn btn-warning rounded-0 fs-5 dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="bi bi-arrow-down-up"></i>
                    <span class="ms-2">Sort</span>
                </div>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" @click="setSortOrder('relevance')">Relevance</a></li>
                    <li><a class="dropdown-item" href="#" @click="setSortOrder('rating')">Rating</a></li>
                    <li><a class="dropdown-item" href="#" @click="setSortOrder('popular')">Popular</a></li>
                    <li><a class="dropdown-item" href="#" @click="setSortOrder('distance')">Distance</a></li>
                    <li><a class="dropdown-item" href="#" @click="setSortOrder('price')">Price</a></li>
                    <li><a class="dropdown-item" href="#" @click="setSortOrder('experience')">Experience</a></li>
                </ul>
            </div>
        </div>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ReviewListFilter :filters="filters" @update-filters="updateFilters" />
            </div>
        </div>

        <div class="row row-cols-2 row-cols-md-5 g-1">
            <div class="col position-relative" v-for="(shop, index) in filteredShops" :key="index">
                <div class="card bg-white d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                    style="padding-bottom:37px;">
                    <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt=""
                        class="card-img-top" />
                    <p class="smaller my-2 text-center text-ellipsis2 fw-bold ">{{ shop.name }}</p>
                    <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                        <img :src="image" style="width: 30px; height: 30px; object-fit: contain;"
                            v-for="image in images" :key="image.id" alt="">
                    </div>
                </div>

                <div class="position-absolute bottom-0 m-2 ms-0 text-warning" style="font-size: 12px;">
                    <span class='bg-light border p-1 px-2 rounded-end-3'>
                        <i class="bi bi-star-fill small me-2"></i>
                        <span class="fw-bold">{{ shop.rating }}</span>
                    </span>
                </div>
                <div class="position-absolute bottom-0 end-0 m-1 ms-0 text-dark" style="font-size: 12px;">
                    <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1'>
                        <p class="mb-0">{{ shop.reviews }}+</p>
                        <p class="mb-0">Promoters</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ReviewListFilter from '@/components/ReviewListFilter.vue';

export default {
    name: "ReviewList",
    components: {
        ReviewListFilter
    },
    data() {
        return {
            shops: [
                { id: 1, img: 'img/users/1.png', collection: 'a', experience: 5, rating: 5, reviews: 101, category: 'a', state: 'delhi', distance: 10, name: 'Travis', promoters: 400 },
                { id: 2, img: 'img/users/2.png', collection: 'a', experience: 25, rating: 4, reviews: 190, category: 'b', state: 'kolkata', distance: 9, name: 'Kanye', promoters: 150 },
                { id: 3, img: 'img/users/3.png', collection: 'b', experience: 35, rating: 4.5, reviews: 100, category: 'c', state: 'uk', distance: 12, name: 'Snoop', promoters: 200 },
                { id: 4, img: 'img/users/4.png', collection: 'b', experience: 54, rating: 4.5, reviews: 140, category: 'd', state: 'delhi', distance: 13, name: 'Weekend', promoters: 390 },
                { id: 5, img: 'img/users/5.png', collection: 'c', experience: 56, rating: 2.5, reviews: 310, category: 'b', state: 'uk', distance: 1, name: 'Akon', promoters: 500 },
                { id: 6, img: 'img/users/3.png', collection: 'c', experience: 25, rating: 4, reviews: 170, category: 'd', state: 'uk', distance: 90, name: 'Snoop', promoters: 250 },
                { id: 7, img: 'img/users/4.png', collection: 'd', experience: 55, rating: 4, reviews: 180, category: 'c', state: 'uk', distance: 5, name: 'Weekend', promoters: 100 },
                { id: 8, img: 'img/users/5.png', collection: 'd', experience: 52, rating: 5, reviews: 310, category: 'b', state: 'kolkata', distance: 105, name: 'Akon', promoters: 300 },
                { id: 9, img: 'img/users/3.png', collection: 'b', experience: 51, rating: 3.5, reviews: 110, category: 'a', state: 'kolkata', distance: 102, name: 'Snoop', promoters: 200 },
                { id: 10, img: 'img/users/3.png', collection: 'a', experience: 58, rating: 3.5, reviews: 810, category: 'b', state: 'delhi', distance: 10, name: 'Snoop', promoters: 200 },
            ],
            images: [
                "/img/members/1.png",
                "/img/members/2.webp",
                "/img/members/3.png",
                "/img/members/4.png",
                "/img/members/5.jpg",
                "/img/members/6.webp",
                "/img/members/7.jpeg",
                "/img/members/8.png",
            ],
            searchTerm: '',
            selectedStarRating: 0,
            filters: {
                experience: '',
                rating: '',
                reviews: '',
                promoters: '',
                category: '',
                collection: '',
                state: '',
            },
            sortOrder: 'relevance',
            activeFilters: [],
        }
    },
    computed: {
        filteredShops() {
            let filteredShops = this.shops
                .filter(shop => {
                    const searchTermMatch = this.searchTerm === '' || shop.name.toLowerCase().includes(this.searchTerm.toLowerCase());
                    const starRatingMatch = this.selectedStarRating === 0 || shop.rating >= this.selectedStarRating;
                    return searchTermMatch && starRatingMatch;
                })
                .filter(shop => {
                    return (
                        (this.filters.experience === '' || shop.experience.toString().includes(this.filters.experience)) &&
                        (this.filters.rating === '' || shop.rating.toString().includes(this.filters.rating)) &&
                        (this.filters.reviews === '' || shop.reviews.toString().includes(this.filters.reviews)) &&
                        (this.filters.promoters === '' || shop.promoters.toString().includes(this.filters.promoters)) &&
                        (this.filters.category === '' || shop.category.includes(this.filters.category)) &&
                        (this.filters.collection === '' || shop.collection.includes(this.filters.collection)) &&
                        (this.filters.state === '' || shop.state.includes(this.filters.state))
                    );
                });

            if (this.sortOrder === 'rating') {
                filteredShops = filteredShops.sort((a, b) => b.rating - a.rating);
            } else if (this.sortOrder === 'popular') {
                filteredShops = filteredShops.sort((a, b) => b.reviews - a.reviews);
            } else if (this.sortOrder === 'distance') {
                filteredShops = filteredShops.sort((a, b) => a.distance - b.distance);
            } else if (this.sortOrder === 'price') {
                filteredShops = filteredShops.sort((a, b) => a.promoters - b.promoters); // Assuming price is represented by promoters count
            } else if (this.sortOrder === 'experience') {
                filteredShops = filteredShops.sort((a, b) => b.experience - a.experience);
            }

            return filteredShops;
        },
    },

    mounted() {
        this.$refs.searchInput.focus();
    },
    methods: {
        updateFilters(newFilters) {
            this.filters = newFilters;
        },
        setSortOrder(order) {
            this.sortOrder = order;
        },
        search() {
            this.filteredShops();
        },
    }
}
</script>


<style>
.form-control {
    box-shadow: none !important;
}
</style>
