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
            <div class="d-flex" @click="showFilterPanel = !showFilterPanel">
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

        <div>
            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="filters" aria-labelledby="filtersLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="filtersLabel">Filters</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <select v-model="selectedStarRating" id="starFilter" class="form-select p-2 py-3 rounded-0">
                        <option value="0">All Stars</option>
                        <option v-for="star in 5" :key="star" :value="star">{{ star }} Star</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-3 border" v-show="showFilterPanel">
                <div class="filters">
                    <div class="form-floating my-2 ">
                        <select v-model="filters.experience" class="form-select">
                            <option value="">All</option>
                            <option value="1">1 Year</option>
                            <option value="2">2 Years</option>
                            <option value="5">5 Years</option>
                            <option value="10">10 Years or more</option>
                        </select>
                        <label class="form-label">
                            Filter By Experience:
                        </label>
                    </div>
                    <div class="form-floating my-2">
                        <select v-model="filters.category" class="form-select">
                            <option value="">All</option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                            <option value="d">D</option>
                        </select>
                        <label class="form-label">
                            Filter By Category:
                        </label>
                    </div>
                    <div class="form-floating my-2">
                        <select v-model="filters.category" class="form-select">
                            <option value="">All</option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                            <option value="d">D</option>
                        </select>
                        <label class="form-label">
                            Filter By Collection:
                        </label>
                    </div>
                    <div class="my-2">
                        <label class="form-label">Filter By reviews:</label>
                        <div class="d-flex align-items-center">
                            <input type="range" class="form-range" v-model="filters.reviews" min="0" max="100"
                                step="10">
                            <span class="ms-2">{{ filters.reviews }} +</span>
                        </div>
                    </div>
                    <div class="my-2">
                        <label class="form-label">Filter By Promoters:</label>
                        <div class="d-flex align-items-center">
                            <input type="range" class="form-range" v-model="filters.promoters" min="100" max="500"
                                step="50">
                            <span class="ms-2">{{ filters.promoters }} +</span>
                        </div>
                    </div>
                    <div class="my-2">
                        <p class="text-start text-muted mb-0">Filter by Rating:</p>
                        <div class="d-flex flex-wrap">
                            <div v-for="(rating, index) in ratings" :key="index">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" :id="rating.id" :autocomplete="rating.id"
                                        v-model="rating.checked" @change="toggleFilter(rating)" />
                                    <label class="btn btn-outline-dark rounded-0 text-capitalize" :for="rating.id">
                                        {{ rating.id }} <i class="bi bi-star-fill"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-2">
                        <p class="text-start text-muted mb-0">Filter by State:</p>
                        <div class="d-flex flex-wrap">
                            <div v-for="(state, index) in states" :key="index">
                                <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" :id="state.name" :autocomplete="state.name"
                                        v-model="state.checked" @change="toggleFilter(state)" />
                                    <label class="btn btn-outline-dark rounded-0 text-capitalize" :for="state.name">
                                        {{ state.name }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div :class="toggleCol">
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(shop, index) in filteredShops" :key="index">
                        <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
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
        </div>
    </div>
</template>

<script>
export default {
    name: "ReviewList",
    data() {
        return {
            shops: [
                { id: 1, img: 'img/users/1.png', experience: 5, rating: 5, reviews: 101, category: 'a', state: 'delhi', distance: 10, name: 'Travis', promoters: 400 },
                { id: 2, img: 'img/users/2.png', experience: 25, rating: 4, reviews: 190, category: 'b', state: 'kolkata', distance: 9, name: 'Kanye', promoters: 150 },
                { id: 3, img: 'img/users/3.png', experience: 35, rating: 4.5, reviews: 100, category: 'c', state: 'uk', distance: 12, name: 'Snoop', promoters: 200 },
                { id: 4, img: 'img/users/4.png', experience: 54, rating: 4.5, reviews: 140, category: 'd', state: 'delhi', distance: 13, name: 'Weekend', promoters: 390 },
                { id: 5, img: 'img/users/5.png', experience: 56, rating: 2.5, reviews: 310, category: 'b', state: 'uk', distance: 1, name: 'Akon', promoters: 500 },
                { id: 6, img: 'img/users/3.png', experience: 25, rating: 4, reviews: 170, category: 'd', state: 'uk', distance: 90, name: 'Snoop', promoters: 250 },
                { id: 7, img: 'img/users/4.png', experience: 55, rating: 4, reviews: 180, category: 'c', state: 'uk', distance: 5, name: 'Weekend', promoters: 100 },
                { id: 8, img: 'img/users/5.png', experience: 52, rating: 5, reviews: 310, category: 'b', state: 'kolkata', distance: 105, name: 'Akon', promoters: 300 },
                { id: 9, img: 'img/users/3.png', experience: 51, rating: 3.5, reviews: 110, category: 'a', state: 'kolkata', distance: 102, name: 'Snoop', promoters: 200 },
                { id: 10, img: 'img/users/3.png', experience: 58, rating: 3.5, reviews: 810, category: 'b', state: 'delhi', distance: 10, name: 'Snoop', promoters: 200 },
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
            showFilterPanel: false,
            filters: {
                experience: '',
                rating: '',
                reviews: '',
                promoters: '',
                category: '',
                state: '',
            },
            states: [
                { name: "delhi", checked: false },
                { name: "kolkata", checked: false },
                { name: "uk", checked: false },
            ],
            ratings: [
                { id: 'any', checked: false },
                { id: 3, checked: false },
                { id: 4, checked: false },
                { id: 5, checked: false },
            ],
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
        toggleCol() {
            return this.showFilterPanel ? 'col-9' : 'col-12';
        },
    },

    mounted() {
        this.$refs.searchInput.focus();
    },
    methods: {
        toggleFilter(states) {
            if (states.checked) {
                this.activeFilters.push(states.name); // Add filter tag when checkbox is selected
            } else {
                const index = this.activeFilters.indexOf(states.name);
                if (index !== -1) {
                    this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
                }
            }
        },
        removeFilter(index) {
            const removedColor = this.activeFilters[index];
            this.activeFilters.splice(index, 1); // Remove the filter tag

            // Find the corresponding states object
            const colorObject = this.states.find((color) => color.name === removedColor);
            if (colorObject) {
                colorObject.checked = false; // Uncheck the corresponding checkbox
            }
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
