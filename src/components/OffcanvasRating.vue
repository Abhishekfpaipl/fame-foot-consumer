<template>
    <div>
        <div class="container ">
            <div class="mt-5">
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
            </div>
            <div class=" mt-5">
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

            <div class="mt-5">
                <h3 class="text-center bill"><span class="fs-2">~ Reviews ~</span></h3> 
                <div v-if="reviews.length" class="mt-3">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                        <div class="col" v-for="(review, index) in reviews" :key="index">
                            <div class="border bg-light p-2 position-relative">
                                <div class="d-flex align-items-center gap-2 mb-2">
                                    <img src="/img/users/1.png" style="width:60px;" />
                                    <div class="ms-2">
                                        <p class="my-2 fs-5 text-start text-ellipsis w-75">Shelly sd fsd fsd fsd sd fsd
                                            fsd sf </p>
                                        <div class="d-flex gap-2 overflow-x-scroll w-75" id="scroll">
                                            <img :src="image" style="width: 20px; height: 20px; object-fit: contain;"
                                                v-for="image in images" :key="image.id" alt="">
                                        </div>
                                    </div>
                                </div>
                                <p class="text-start mb-0 rating-text" style="height: 50px;overflow-y: scroll; ">{{
                                    review.text }}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="rating">
                                        <span v-for="star in 5" :key="star" class="star">
                                            <i :class="star <= review.rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                                        </span>
                                    </div>
                                    <div class="">
                                        <small class="text-muted">26.06.2024</small>
                                    </div>
                                </div>
                                <div class="position-absolute top-0 end-0 mt-1 ms-0 text-dark" style="font-size: 12px;">
                                    <span class='bg-light border p-1 px-2 rounded-start-3'>
                                        <i class="bi bi-star-fill small me-2"></i>
                                        <span class="fw-bold">{{ review.rating }}</span>
                                    </span>
                                </div>
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
    data() {
        return {
            rating: 0,
            reviewText: '',
            reviews: [
                { "rating": 5, "text": "We initially thought FameFoot was a small tool that only stores client data but once we started working on it, we knew its depth. We are very excited to use the new features like Team Pipelines, Email-in, and File Cabinet. We 100% recommend FameFoot to everyone!" },
                { "rating": 4, "text": "FameFoot was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend FameFoot for any micro business." },
                { "rating": 2, "text": "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." },
                { "rating": 1, "text": "The general idea was to keep everything in one place and at an affordable price, and FameFoot was very accessible that way, and with the ability to expand without switching CRMs." },
                { "rating": 3, "text": "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses." },
                { "rating": 5, "text": "FameFoot has been really helpful for us to keep a track on contacts and deals. Since we are small team, FameFoot was so user-friendly that we were able to start using from week 1 of our trial." },
                { "rating": 4, "text": "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But FameFoot is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it." },
                { "rating": 5, "text": "As vendor and customers needed order visibility, we wanted to automate the entire business and found only FameFoot to be the best suited in terms of integration." },
                { "rating": 5, "text": "FameFoot has stayed true to its value proposition—a CRM tailored for small businesses and startups." },
                { "rating": 3, "text": "Since the implementation of FameFoot, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!" },
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
            ]
        }
    },
    computed: {
        totalReviews() {
            return this.reviews.length;
        },
        averageRating() {
            const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
            return sum / this.totalReviews;
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
        submitQuery() {
            console.log('Submit Query')
            const data = {
                name: this.name,
                email: this.email,
                query: this.query,
            }
            this.$store.dispatch('submitQuery', data)
        },
        setRating(star) {
            this.rating = star;
        },
        submitReview() {
            // Push the new review to the reviews array
            this.reviews.push({
                rating: this.rating,
                text: this.reviewText
            });

            // Reset the form
            this.rating = 0;
            this.reviewText = '';
        },
    }

};
</script>
<style scoped>
.rating .star {
    cursor: pointer;
    font-size: 16px;
    color: #ffc107;
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

/* .five-star{
    background-color: #5CCD5F;
} */
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