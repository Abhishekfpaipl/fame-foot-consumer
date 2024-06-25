<template>
    <div class="container mt-5">
        <h1 class="text-center">~ Give Review ~</h1>
        <div class="card p-4 mt-3">
            <h3 class="card-title">Write a Review</h3>
            <div class="rating mb-3">
                <span v-for="star in 5" :key="star" @click="setRating(star)" class="star">
                    <i :class="star <= rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                </span>
            </div>
            <textarea v-model="reviewText" class="form-control mb-3" placeholder="Write your review..."></textarea>
            <button @click="submitReview" class="btn btn-primary">Submit</button>
        </div>
        <div v-if="reviews.length" class="d-flex flex-column justify-content-start align-items-center mt-5">
            <h3 class="me-3">~ Reviews ~</h3>
            <div v-for="(review, index) in reviews" :key="index" class="card mt-3 p-4" style="width: 10rem;">
                <div class="rating mb-3">
                    <span v-for="star in 5" :key="star" class="star">
                        <i :class="star <= review.rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                    </span>
                </div>
                <p>{{ review.text }}</p>
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
                { "rating": 5, "text": "sdfsdf" }
            ]
        };
    },
    methods: {
        setRating(star) {
            this.rating = star;
        },
        submitReview() {
            if (this.rating === 0 || this.reviewText === '') {
                alert('Please provide a rating and a review.');
                return;
            }

            // Push the new review to the reviews array
            this.reviews.push({
                rating: this.rating,
                text: this.reviewText
            });

            // Reset the form
            this.rating = 0;
            this.reviewText = '';
        },
    },
};
</script>

<style scoped>
.rating .star {
    cursor: pointer;
    font-size: 24px;
    color: #ffc107;
}
</style>