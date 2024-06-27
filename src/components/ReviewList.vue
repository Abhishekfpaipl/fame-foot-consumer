<template>
    <div class="container pt-5">
        <div class="d-flex align-items-center bg-light p-2 my-3">
            <input type="search" placeholder="Search for questions?" v-model="searchTerm" class="form-control border-0"
                ref="searchInput" @keyup.enter="search">
            <div>
                <i class="bi bi-search" @click="search"></i>
            </div>
        </div>
        <div class="d-flex justify-content-between gap-3 mb-3">
            <select v-model="selectedStarRating" id="starFilter" class="form-select p-2 py-3 rounded-0">
                <option value="0">All Stars</option>
                <option v-for="star in 5" :key="star" :value="star">{{ star }} Star</option>
            </select>
            <select v-model="sortOrder" class="form-select p-2 py-3 rounded-0">
                <option value="recent">Recent</option>
                <option value="relevant">Relevant</option>
            </select>
        </div>
        <div class="row row-cols-2 row-cols-md-5 g-1">
            <div class="col position-relative" v-for="(shop, index) in filteredShops" :key="index">
                <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                    style="padding-bottom:37px;">
                    <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt=""
                        class="card-img-top" />
                    <p class="smaller my-2 text-center text-ellipsis2 fw-bold ">{{ shop.name }} skdjfh laskjdhf
                        alksjd
                        sdfh slkdjfh sdsjkf skdj</p>
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
                        <p class="mb-0">{{ shop.support }}+</p>
                        <p class="mb-0">Reviews</p>
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
                { id: 1, img: 'img/users/1.png', name: 'Travis', rating: 4, support: 200 },
                { id: 2, img: 'img/users/2.png', name: 'Kanye', rating: 5, support: 100 },
                { id: 3, img: 'img/users/3.png', name: 'Snoop', rating: 2.5, support: 200 },
                { id: 4, img: 'img/users/4.png', name: 'Weekend', rating: 5, support: 100 },
                { id: 5, img: 'img/users/5.png', name: 'Akon', rating: 4.5, support: 100 },
                { id: 6, img: 'img/users/3.png', name: 'Snoop', rating: 4, support: 200 },
                { id: 7, img: 'img/users/4.png', name: 'Weekend', rating: 3.5, support: 100 },
                { id: 8, img: 'img/users/5.png', name: 'Akon', rating: 3, support: 100 },
                { id: 9, img: 'img/users/3.png', name: 'Snoop', rating: 5, support: 200 },
                { id: 10, img: 'img/users/3.png', name: 'Snoop', rating: 4.5, support: 200 },
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
            sortOrder: 'recent',
        }
    },
    computed: {
        filteredShops() {
            return this.shops
                .filter(shop => {
                    const searchTermMatch = this.searchTerm === '' || shop.name.toLowerCase().includes(this.searchTerm.toLowerCase());
                    const starRatingMatch = this.selectedStarRating === 0 || shop.rating >= this.selectedStarRating;
                    return searchTermMatch && starRatingMatch;
                })
                .sort((a, b) => {
                    if (this.sortOrder === 'recent') {
                        return b.id - a.id;
                    } else if (this.sortOrder === 'relevant') {
                        return b.rating - a.rating;
                    }
                    return 0;
                });
        }
    },
    mounted() {
        this.$refs.searchInput.focus();
    },
    methods: {
        search() {
            // No additional logic needed here since search is handled by computed property
        }
    }
}
</script>

<style lang="">
/* Add your styles here */
</style>
