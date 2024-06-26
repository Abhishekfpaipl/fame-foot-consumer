<template>
    <div class="container mt-5">
        <h3 class="">~ Reviews ~</h3>
        <div v-if="reviews.length" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
            <div class="col" v-for="(review, index) in reviews" :key="index">
                <div class="card d-flex justify-content-center align-items-center mt-3 p-4">
                    <img src="/img/users/1.png" style="width: 60px;" alt="">
                    <p class="my-2 fw-bold">Shelly</p>
                    <div class="rating mb-3">
                        <span v-for="star in 5" :key="star" class="star">
                            <i :class="star <= review.rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                        </span>
                    </div>
                    <p>{{ review.text }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="ratingGif text-white" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
        <img src="/img/rating.gif" style="width: 50px;" alt="">
    </div>

    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-white" style="background-color: #34356f;">
                <div class="modal-body"> 
                    <img src="/img/rating.gif" style="width: 50px;" alt="">
                    <p class="my-2">Tap a star to give your rating</p>
                    <div class="rating mb-3">
                        <span v-for="star in 5" :key="star" @click="setRating(star)" class="star">
                            <i :class="star <= rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                        </span>
                    </div>
                    <div v-if="rating" class="mt-3">
                        <p>You rated: {{ rating }} stars</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-dark rounded-pill" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                    <button class="btn btn-danger rounded-pill" data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal">Next</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-white" style="background-color: #444fb8;">
                <div class="modal-body">
                    <h3>App rating</h3>
                    <p>Your rating:</p>
                    <div class="rating mb-3">
                        <span v-for="star in 5" :key="star" class="star">
                            <i :class="star <= rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                        </span>
                    </div>
                    <p>Please write your feedback</p>
                    <div class="form-floating">
                        <textarea class="form-control text-white" placeholder="Leave a comment here"
                            v-model="reviewText" id="floatingTextarea2"
                            style="height: 100px;background-color: #2d357d;"></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn text-warning" data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal">Back</button>
                    <button class="btn text-warning" @click="submitReview" data-bs-dismiss="modal"
                        aria-label="Close">Send
                        review</button>
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
                { "rating": 5, "text": "FameFoot was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend FameFoot for any micro business." },
                { "rating": 5, "text": "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." },
                { "rating": 5, "text": "The general idea was to keep everything in one place and at an affordable price, and FameFoot was very accessible that way, and with the ability to expand without switching CRMs." },
                { "rating": 5, "text": "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses." },
                { "rating": 5, "text": "FameFoot has been really helpful for us to keep a track on contacts and deals. Since we are small team, FameFoot was so user-friendly that we were able to start using from week 1 of our trial." },
                { "rating": 5, "text": "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But FameFoot is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it." },
                { "rating": 5, "text": "As vendor and customers needed order visibility, we wanted to automate the entire business and found only FameFoot to be the best suited in terms of integration." },
                { "rating": 5, "text": "FameFoot has stayed true to its value proposition—a CRM tailored for small businesses and startups." },
                { "rating": 5, "text": "Since the implementation of FameFoot, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!" },
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

.ratingGif {
    z-index: 9;
    position: fixed;
    bottom: 60px;
    right: 10px;
    padding: 10px 10px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
}
</style>
