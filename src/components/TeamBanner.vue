<template>
    <div class="container mt-3">
        <div class="w-100 overflow-x-scroll d-flex justify-content-center align-items-center hide-scroll" id="scroll"
            ref="slider">
            <div v-for="(review, index) in infiniteReviews" :key="index" @click="showUser(review, index)"
                class="btn m-3 d-flex" :class="{ selectedDiv: isSelected(review.id) }">
                <img :src="review.imgr" style="object-fit: contain;" alt="User Image">
            </div>

        </div>

        <div class="border-bottom border-end border-start container w-100 pb-4">
            <p class="text-center mb-0 text-uppercase">
                {{ getSelectedReviewInfo.name }}</p>
            <p class="text-center mb-2 text-uppercase">
                {{ getSelectedReviewInfo.brand }}</p> 
            <div class="d-flex justify-content-center text-center">
                <p class="small w-75 text-secondary">{{ getSelectedReviewInfo.text }}</p>
            </div>
            <a class="d-flex justify-content-center text-decoration-none" :href="getSelectedReviewInfo.url"
                target="_blank">
                <button :href="getSelectedReviewInfo.url" class="btn btn-dark px-3">Check</button>
            </a>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedReview: 1,
            reviews: [
                {
                    id: 1,
                    show: false,
                    brand: 'Bar Council of India',
                    imgr: '/img/members/1.png',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
                {
                    id: 2,
                    show: false,
                    brand: 'Bharatiya Janta Party',
                    imgr: '/img/members/2.webp',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
                {
                    id: 3,
                    show: false,
                    brand: 'Chartered Accountant Of India',
                    imgr: '/img/members/3.png',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
                {
                    id: 4,
                    show: false,
                    brand: 'Cycling Club',
                    imgr: '/img/members/4.png',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
                {
                    id: 5,
                    show: false,
                    brand: 'Delhi Police',
                    imgr: '/img/members/5.jpg',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
                {
                    id: 6,
                    show: false,
                    brand: 'India Lawers Association',
                    imgr: '/img/members/6.webp',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
                {
                    id: 7,
                    show: false,
                    brand: 'International Medical Association',
                    imgr: '/img/members/7.jpeg',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
                {
                    id: 8,
                    show: false,
                    brand: 'National Sports Club Of India',
                    imgr: '/img/members/8.png',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
                {
                    id: 9,
                    show: false,
                    brand: 'Bar Council of India',
                    imgr: '/img/members/1.png',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
                {
                    id: 10,
                    show: false,
                    brand: 'Bharatiya Janta Party',
                    imgr: '/img/members/2.webp',
                    text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
                    url: 'https://fpaipl.com/'
                },
            ],
        };
    },
    computed: {

        infiniteReviews() {
            const repeatedReviews = [];
            for (const review of this.reviews) {
                repeatedReviews.push(review);

            }
            return repeatedReviews;
        },
        getSelectedReviewInfo() {
            const selectedReview = this.infiniteReviews[this.selectedReview];
            return {
                text: selectedReview.text,
                name: selectedReview.name,
                brand: selectedReview.brand,
                btnName: selectedReview.btnName,
                url: selectedReview.url
            };
        }
    },

    mounted() {
        this.reviews[this.selectedReview].show = true;
        this.scrollToCenter();
    },
    methods: {
        isSelected(clickedReviewId) {
            return clickedReviewId === this.infiniteReviews[this.selectedReview].id;
        },
        showUser(review, index) {
            this.selectedReview = index;
            this.$store.dispatch('toggleReview', review);
            this.scrollToCenter();
        },
        scrollToCenter() {
            const slider = this.$refs.slider;
            const selectedElement = slider.children[this.selectedReview];
            const scrollLeft =
                selectedElement.offsetLeft - (slider.offsetWidth - selectedElement.offsetWidth) / 1.8;
            slider.scrollLeft = scrollLeft;
        },
    },
};
</script>

<style scoped>
.btn.selectedDiv {
    border: 2px solid #e7e2dc;
}

img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
}

.btn.selectedDiv img {
    transform: scale(1.5);
    width: 60px !important;
    height: 30px !important;
}

#style-4 {
    scroll-behavior: smooth;
    overflow-x: scroll;
}

#style-4::-webkit-scrollbar {
    display: none;
}

/* .hide-scroll {
    overflow-x: hidden;
} */

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #ffffff;
}

::-webkit-scrollbar-thumb {
    background: rgb(134, 132, 132)4f4;
    border-radius: 5px;
    width: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #f5e5e5;
    width: 10px;
}
</style>
