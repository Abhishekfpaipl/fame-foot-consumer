<template>
    <div class="container my-5">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h2 class="mb-3">
                    <span class="text-warning">Seller Success</span> Stories
                </h2>
                <p class="mb-4">14 Lakh+ sellers trust Flipkart for their online business.</p>
                <!-- <button class="btn btn-outline-primary">See All Stories</button> -->
            </div>
            <div class="col-md-6">
                <div class="position-relative">
                    <div class="card border-0 shadow">
                        <div class="card-body">
                            <div class="d-flex flex-column justify-content-center align-items-center mb-3">
                                <img :src="currentStory.image" alt="Seller" class="rounded-circle me-3" width="60"
                                    height="60">
                                <div>
                                    <h5 class="card-title mb-0">{{ currentStory.name }}</h5>
                                    <p class="card-text text-muted">{{ currentStory.company }}</p>
                                </div>
                            </div>
                            <blockquote class="blockquote mb-0">
                                <p>{{ currentStory.quote }}</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="position-absolute top-50 translate-middle" style="left: 0%;">
                        <button class="btn btn-light rounded-circle shadow py-2" @click="prevStory"><i
                                class="bi bi-chevron-left"></i></button>
                    </div>
                    <div class="position-absolute top-50 translate-middle" style="right: -7%;">
                        <button class="btn btn-light rounded-circle shadow py-2" @click="nextStory"><i
                                class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <span v-for="(story, index) in stories" :key="index" class="dot mx-1"
                        :class="{ 'active': index === currentIndex }"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            stories: [
                {
                    name: "Raju Lunawath",
                    company: "Amazestore",
                    image: "img/users/1.png",
                    quote: "Flipkart's support & innovation fueled my exponential growth. I started with 1 category and moved to 6 categories with an astounding 5x Year on Year expansion!"
                },
                {
                    name: "Deep Bajaj",
                    company: "Sirona Hygiene",
                    image: "img/users/2.png",
                    quote: "Flipkart created awareness about intimate & menstrual hygiene products. Their team's involvement made our innovative products household favourites."
                },
                {
                    name: "Ekta Shah",
                    company: "Glide Route Ventures",
                    image: "img/users/3.png",
                    quote: "From 5 to 40+ brands, Flipkart's seamless registration, seller support & account managers' guidance fueled our growth in beauty & grooming sectors."
                },
            ]
        }
    },
    computed: {
        currentStory() {
            return this.stories[this.currentIndex];
        }
    },
    methods: {
        nextStory() {
            this.currentIndex = (this.currentIndex + 1) % this.stories.length;
        },
        prevStory() {
            this.currentIndex = (this.currentIndex - 1 + this.stories.length) % this.stories.length;
        }
    }
}
</script>

<style scoped>
.dot {
    height: 10px;
    width: 10px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}

.dot.active {
    background-color: #007bff;
}
</style>