<template>
    <div>
        <div class="container pb-4">
            <!-- <div class="mt-5">
                <h3 class="text-center bill"><span class="fs-2">~ Rate Us ~</span></h3>
                <img src="/img/rate2.gif" style="width: 100px;">
                <div class="rating my-3">
                    <span v-for="star in 5" :key="star" @click="setRating(star)" class="star fs-1">
                        <i :class="star <= rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                    </span>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" v-model="reviewText"
                            id="floatingTextarea2" style="height: 50px;"></textarea>
                        <label for="floatingTextarea2" class="text-muted small">Please write your Review</label>
                    </div>
                </div>
                <button class="btn btn-warning border mt-3" @click="submitReview">Submit</button>
            </div> -->
            <div class="mt-5">
                <h2 class="mb-2">Reviews <span class="text-warning"><i class="bi bi-star-fill text-warning"></i> {{
                    averageRating.toFixed(1) }}</span></h2>
                <p class="text-muted">{{ totalReviews }} total</p>
                <div class="rating-bars mt-4">
                    <div v-for="star in 5" :key="star" class="row align-items-center mb-2">
                        <div class="col-2 text-end">
                            <span class="star-label">{{ 6 - star }}-star</span>
                        </div>
                        <div class="col-8">
                            <div class="progress" style="height: 10px;">
                                <div class="progress-bar" role="progressbar" :class="getColorClass(6 - star)"
                                    :style="{ width: getPercentage(6 - star) + '%' }"
                                    :aria-valuenow="getPercentage(6 - star)" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <span class="percentage">{{ getPercentage(6 - star) }}%</span>
                        </div>
                    </div>
                </div>
            </div>

            <label for="starFilter" class="form-label">Filter Rating By:</label>
            <div class="d-flex justify-content-between gap-2 mb-3">
                <div class="w-50">
                    <p>Filter By</p>
                    <select v-model="selectedStarRating" id="starFilter" class="form-select p-2 py-3 rounded-0 ">
                        <option v-for="star in 5" :key="star" :value="star">{{ star }} Star</option>
                    </select>
                </div>
                <div class="w-50">
                    <p>Sort By</p>
                    <select v-model="sortOrder" class="form-select p-2 py-3 rounded-0">
                        <option value="recent">Recent</option>
                        <option value="relevant">Relevant</option>
                    </select>
                </div>
            </div>
            <div class="d-flex align-items-center shadow p-2 mb-3">
                <input type="search" placeholder="Search" v-model="searchTerm" class="form-control border-0"
                    ref="searchInput" @keyup.enter="search">
                <div>
                    <i class="bi bi-search" @click="search"></i>
                </div>
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
                            <div class="" @click="toggleExpand(index)">
                                <p class="text-start mb-0 rating-text" :class="{ expanded: isExpanded(index) }">
                                    {{ isExpanded(index) ? review.text : truncateText(review.text) }}
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="rating">
                                        <span v-for="star in 5" :key="star" class="star">
                                            <i :class="star <= review.rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                                        </span>
                                    </div>
                                    <i class="bi bi-chevron-down fs-5"
                                        :class="{ 'rotate-icon': isExpanded(index) }"></i>
                                    <span class="smaller pe-1">{{ review.date }}</span>
                                </div>
                            </div>
                            <div class="position-absolute end-0 text-dark" style="font-size: 12px;top: 55px;">
                                <span class="bg-light border p-1 px-2 rounded-start-3">
                                    <i class="bi bi-star-fill small me-2"></i>
                                    <span class="fw-bold">{{ review.user_rating }}</span>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            rating: 0,
            reviewText: '',
            reviews: [
                { "rating": 5, "user_rating": 5, "name": "User 1", "text": "We initially thought FameFoot was a small tool that only stores client data but once we started working on it, we knew its depth. We are very excited to use the new features like Team Pipelines, Email-in, and File Cabinet. We 100% recommend FameFoot to everyone!", "date": "27.06.2024" },
                { "rating": 4, "user_rating": 5, "name": "User 2", "text": "FameFoot was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend FameFoot for any micro business.", "date": "26.06.2024" },
                { "rating": 2, "user_rating": 5, "name": "User 3", "text": "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all.", "date": "25.06.2024" },
                { "rating": 1, "user_rating": 2, "name": "User 4", "text": "The general idea was to keep everything in one place and at an affordable price, and FameFoot was very accessible that way, and with the ability to expand without switching CRMs.", "date": "24.06.2024" },
                { "rating": 3, "user_rating": 5, "name": "User 5", "text": "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses.", "date": "23.06.2024" },
                { "rating": 5, "user_rating": 5, "name": "User 16", "text": "FameFoot has been really helpful for us to keep a track on contacts and deals. Since we are small team, FameFoot was so user-friendly that we were able to start using from week 1 of our trial.", "date": "22.06.2024" },
                { "rating": 4, "user_rating": 4, "name": "User 17", "text": "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But FameFoot is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it.", "date": "21.06.2024" },
                { "rating": 5, "user_rating": 3, "name": "User 18", "text": "As vendor and customers needed order visibility, we wanted to automate the entire business and found only FameFoot to be the best suited in terms of integration.", "date": "20.06.2024" },
                { "rating": 5, "user_rating": 3, "name": "User 134", "text": "FameFoot has stayed true to its value proposition—a CRM tailored for small businesses and startups.", "date": "19.06.2024" },
                { "rating": 3, "user_rating": 3, "name": "User 1234", "text": "Since the implementation of FameFoot, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!", "date": "18.06.2024" },
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
    font-size: 16px;
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
