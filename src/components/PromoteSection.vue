<template>
    <div class="container pb-5">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="fs-3 my-5 mb-2 border rounded py-1 w-100">Our Promoters 100+ </div>
            </div>
            <div class="col-12 col-md-6">
                <!-- <div class="my-5 border py-2 "> -->
                <button class="btn btn-outline-dark w-100 my-5 py-1 fs-3">Promote Us</button>
                <!-- </div> -->
            </div>
        </div>
        <div class="mt-5">
            <!-- <h3 class="text-center bill"><span class="fs-2">~ Rate Us ~</span></h3> -->

        </div>

        <h3 class="text-center bill my-5"><span class="fs-2">Promoters</span></h3>
        <div class="d-flex justify-content-between gap-2 mb-3">
            <div class="w-50">
                <p class="fw-bold">Filter By</p>
                <select v-model="selectedStarRating" id="starFilter" class="bg-light form-select p-2 py-3 rounded-0 ">
                    <option v-for="star in 5" :key="star" :value="star">{{ star }} Star</option>
                </select>
            </div>
            <div class="w-50">
                <p class="fw-bold">Sort By</p>
                <select v-model="sortOrder" class=" bg-light form-select p-2 py-3 rounded-0">
                    <option value="recent">Recent</option>
                    <option value="relevant">Relevant</option>
                </select>
            </div>
        </div>

        <div class="input-group border mb-3">
            <input type="search" placeholder="Search" v-model="searchTerm" class="form-control bg-light border-0"
                ref="searchInput" @keyup.enter="search">
            <button class="btn btn-dark rounded-0" type="button" id="button-addon2"><i class="bi bi-search"
                    @click="search"></i></button>
        </div>
        <div v-if="filteredReviews.length" class="mt-3">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                <div class="col" v-for="(review, index) in sortedAndFilteredReviews" :key="index">
                    <div class="border bg-light p-2 position-relative">
                        <div class="d-flex align-items-center gap-2 mb-2">
                            <img src="/img/users/1.png" style="width:60px;" />
                            <div class="ms-2">
                                <p class="my-2 fs-5 text-start text-ellipsis ">{{ review.name }}</p>
                                <div class="d-flex gap-2 overflow-x-scroll w-75" id="scroll">
                                    <img :src="image" style="width: 20px; height: 20px; object-fit: contain;"
                                        v-for="image in images" :key="image.id" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- <div class="" @click="toggleExpand(index)">
                            <p class="text-start mb-0 rating-text" :class="{ expanded: isExpanded(index) }">
                                {{ isExpanded(index) ? review.text : truncateText(review.text) }}
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="rating">
                                    <span v-for="star in 5" :key="star" class="star">
                                        <i :class="star <= review.rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                                    </span>
                                </div>
                                <i class="bi bi-chevron-down fs-5" :class="{ 'rotate-icon': isExpanded(index) }"></i>
                                <span class="smaller pe-1">{{ review.date }}</span>
                            </div>
                        </div> -->
                        <div class="position-absolute end-0 text-dark" style="font-size: 12px;top:2px;">
                            <span class="bg-light border p-1 px-2 rounded-start-3">
                                <i class="bi bi-star-fill small me-2"></i>
                                <span class="fw-bold">{{ review.user_promoters }}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="mt-3">
            <p>No reviews available for the selected star rating.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rating: 0,
            reviewText: '',
            reviews: [
                { "rating": 5, "user_promoters": 100, "name": "Promoter 1", },
                { "rating": 4, "user_promoters": 200, "name": "Promoter 2", },
                { "rating": 2, "user_promoters": 400, "name": "Promoter 3", },
                { "rating": 1, "user_promoters": 130, "name": "Promoter 4", },
                { "rating": 3, "user_promoters": 60, "name": "Promoter 5", },
                { "rating": 5, "user_promoters": 16, "name": "Promoter 16", },
                { "rating": 4, "user_promoters": 10, "name": "Promoter 17", },
                { "rating": 5, "user_promoters": 198, "name": "Promoter 18", },
                { "rating": 5, "user_promoters": 400, "name": "Promoter 134", },
                { "rating": 3, "user_promoters": 200, "name": "Promoter 1234", },
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
            selectedStarRating: '5',
            sortOrder: 'recent',
            expandedReviews: []
        }
    },
    computed: {
        totalReviews() {
            return this.reviews.length;
        },
        averageRating() {
            const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
            return sum / this.totalReviews;
        },
        filteredReviews() {
            let filtered = this.reviews;

            if (this.selectedStarRating) {
                filtered = filtered.filter(review => review.rating === parseInt(this.selectedStarRating));
            }

            if (this.searchTerm) {
                const term = this.searchTerm.toLowerCase();
                filtered = filtered.filter(review =>
                    review.name.toLowerCase().includes(term) ||
                    review.text.toLowerCase().includes(term)
                );
            }

            return filtered;
        },
        sortedAndFilteredReviews() {
            let reviews = [...this.filteredReviews];

            if (this.sortOrder === 'recent') {
                reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else if (this.sortOrder === 'relevant') {
                reviews.sort((a, b) => b.user_rating - a.user_rating);
            }

            return reviews;
        }
    },
    methods: {
        getPercentage(star) {
            const count = this.reviews.filter(review => review.rating === star).length;
            return Math.round((count / this.totalReviews) * 100);
        },
        getColorClass(star) {
            switch (star) {
                case 5: return 'bg-success';
                case 4: return 'four-star';
                case 3: return 'three-star';
                case 2: return 'two-star';
                case 1: return 'one-star';
                default: return 'bg-secondary';
            }
        },
        setRating(star) {
            this.rating = star;
        },
        submitReview() {
            this.reviews.push({
                rating: this.rating,
                text: this.reviewText,
                date: new Date().toLocaleDateString(), // Use the current date
                name: 'New User', // Placeholder name
                user_rating: Math.floor(Math.random() * 5) + 1 // Random user rating for example purposes
            });

            this.rating = 0;
            this.reviewText = '';
        },
        truncateText(text) {
            return text.split(' ').slice(0, 20).join(' ') + '...';
        },
        toggleExpand(index) {
            const expandedIndex = this.expandedReviews.indexOf(index);
            if (expandedIndex === -1) {
                this.expandedReviews.push(index);
            } else {
                this.expandedReviews.splice(expandedIndex, 1);
            }
        },
        isExpanded(index) {
            return this.expandedReviews.includes(index);
        }
    }
};
</script>

<style scoped>
.rating .star {
    cursor: pointer;
    /* font-size: 14px; */
    color: #ffc107;
}

.rotate-icon {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.bi-chevron-down {
    transition: transform 0.3s ease;
}

.rating-text {
    height: 50px;
    overflow: hidden;
}

.rating-text.expanded {
    height: auto;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.star-label,
.percentage {
    font-size: 0.9rem;
}

.four-star {
    background-color: #C9D825;
}

.three-star {
    background-color: #FBD453;
}

.two-star {
    background-color: #F8A42A;
}

.one-star {
    background-color: #ff7878;
}

.bg-orange {
    background-color: #FFA500 !important;
}

.bg-pink {
    background-color: #FFC0CB !important;
}
</style>
