<template>
    <div class="pt-3">
        <div class="container">
            <div class="row rounded align-items-start">
                <div class="col-md-6 d-flex justify-content-center">
                    <img src="https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp"
                        alt="" class="rounded"
                        style="width: 320px; height: 320px;object-fit:cover; object-position: top;">
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-center align-items-center mt-3 mt-md-0">

                    <p class="mb-0  fs-2 fw-bold">Mariana Anderson</p>

                    <p class="smaller text-ellipsis">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Nostrum
                        quaerat harum voluptatem cupiditate? Molestias similique eum incidunt atque quibusdam
                        exercitationem.</p>

                    <div class="d-md-flex justify-content-between align-items-start my-1 fs-5">
                        <div class="d-flex justify-content-center justify-content-md-start gap-2 align-items-start ">
                            <span>Fameset</span>
                            <i class="bi bi-star-fill text-warning"></i>
                            <span>8.5 Rating</span>

                        </div>

                    </div>

                    <!-- <div class="d-flex gap-4 justify-content-md-start justify-content-center my-4">  
                        <div class="">
                            <button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#likeModal">
                                <i :class="likeIcon" class=""></i>
                            </button>
                            <div class="mb-0 smaller text-center pt-2 d-flex flex-column">
                                <span>1.35K+ </span>
                                <span>Likes </span>
                            </div>
                        </div>
                        <div class="">
                            <button class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#heartModal">
                                <i :class="heartIcon" class=""></i>
                            </button>
                            <div class="mb-0 smaller text-center pt-2 d-flex flex-column">
                                <span>1.35K+ </span>
                                <span>Hearts </span>
                            </div>

                        </div>
                        <div class="">
                            <button :class="promoteButtonClass" class="btn btn-outline-dark"
                                @click="toggleIcon('promote')">
                                <i :class="promoteIcon" class="me-2"></i> {{ promoteText }}
                            </button>
                            <p class="mb-0 smaller text-center pt-2">1.35K+</p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="my-5">
            <h1 class="text-center mb-4">Top Promoters</h1>
            <div class="d-flex justify-content-center  gap-2 overflow-x-scroll w-100" id="scroll">
                <img :src="image" style="width: 80px; height: 80px; object-fit: contain;" v-for="image in images"
                    :key="image.id" alt="">
            </div>
        </div>
        <div class="container text-dark bg-white my-5">
            <div class="row row-cols-4 row-cols-md-4 mx-1 g-1">
                <div v-for="(item, index) in fav" :key="index" class="col">
                    <div class="p-2 card shadow" :data-bs-toggle="item.offcanvas ? 'offcanvas' : ''"
                        :data-bs-target="item.offcanvas ? '#' + item.offcanvas : ''"
                        style="background-color: #FFF5DD !important; border-color: #FFCE56 !important;">
                        <div class="d-md-flex justify-content-between align-items-center border-bottom pb-2"
                            style="border-color: #FFCE56 !important;">
                            <i :class="item.iconClass" class="text-dark fs-5"></i>
                            <p class="fw-bold smaller mb-0">{{ item.label }}</p>
                        </div>
                        <p class="fw-bold fs-1 mb-0 d-flex justify-content-center align-items-center">
                            <AutoCounter :data="item.data" />&nbsp;+
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <TestimonialSection />







        <OffcanvasRating />
        <OffcanvasPromoters />
        <OffcanvasThankful />
    </div>
</template>

<script>
import AutoCounter from '@/components/AutoCounter.vue';
import OffcanvasRating from '@/components/OffcanvasRating.vue';
import OffcanvasPromoters from '@/components/OffcanvasPromoters.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import OffcanvasThankful from '@/components/OffcanvasThankful.vue';

export default {
    name: 'InfoSection',
    components: {
        AutoCounter,
        OffcanvasRating,
        TestimonialSection,
        OffcanvasPromoters,
        OffcanvasThankful,
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    iconClass: 'bi-chat-square-dots-fill',
                    count: 5,
                    label: 'Ratings',
                    offcanvasTarget: 'OffcanvasRating',
                    offcanvasTitle: 'Rate Us',
                    backgroundColor: '#000',
                    component: 'OffcanvasRating'
                },
                {
                    id: 2,
                    iconClass: 'bi-hand-thumbs-up-fill',
                    count: 50,
                    label: 'Promoters',
                    offcanvasTarget: 'PromoteSection',
                    offcanvasTitle: 'Promote Us',
                    backgroundColor: '#000',
                    component: 'PromoteSection'
                },
                {
                    id: 3,
                    iconClass: 'bi-trophy-fill',
                    count: 50,
                    label: 'Awards',
                    offcanvasTarget: 'AwardSection',
                    offcanvasTitle: 'Awards',
                    backgroundColor: '#FFF5DD',
                    component: 'AwardSection'
                },
                {
                    id: 4,
                    iconClass: 'bi-award-fill',
                    count: 50,
                    label: 'Rewards',
                    offcanvasTarget: 'RewardSection',
                    offcanvasTitle: 'Rewards',
                    backgroundColor: '#FFF5DD',
                    component: 'RewardSection'
                }
            ],
            fav: [
                {
                    iconClass: 'bi bi-hand-thumbs-up-fill',
                    iconColor: '#FFB2B2',
                    data: 50,
                    label: 'Promoters',
                    offcanvas: 'Promoter',
                },
                // {
                //     iconClass: 'bi bi-hearts',
                //     iconColor: '#BCDFFB',
                //     data: 10,
                //     label: 'Hearts',

                // },
                // {
                //     iconClass: 'bi bi-heart-fill',
                //     iconColor: '#BCDFFB',
                //     data: 10,
                //     label: 'Likes',

                // },
                {
                    iconClass: 'bi bi-chat-dots-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Reviews',
                    offcanvas: 'Review',
                },
                // {
                //     iconClass: 'bi bi-award-fill',
                //     iconColor: '#C9E7CA',
                //     data: 10,
                //     label: 'Rewards'
                // },
                {
                    iconClass: 'bi bi-shield-fill-check',
                    iconColor: '#FFB2B2',
                    data: 50,
                    label: 'Verified'
                },
                {
                    iconClass: 'bi bi-emoji-smile-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Thankful',
                    offcanvas: 'Thankful',
                },
                // {
                //     iconClass: 'bi bi-people-fill',
                //     iconColor: '#C9E7CA',
                //     data: 10,
                //     label: 'Reach'
                // },
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
            rating: 4.5,
            saveIcon: 'bi bi-heart',
            bookmarkIcon: 'bi bi-bookmark-plus',
            promoteIcon: 'bi bi-megaphone',
            saveText: 'Hearts',
            promoteText: 'Promote',
            addToFav: 'bi bi-heart',
            reviewButtonClass: 'btn btn-light',
            hover: false,
            counter: 0,
            likeIcon: 'bi bi-hand-thumbs-up',
            likeText: 'Like ',
            heartIcon: 'bi bi-heart',
            heartText: 'Heart',
        }
    },
    computed: {
        stars() {
            const fullStars = Math.floor(this.rating);
            const halfStar = this.rating % 1 !== 0;
            return Array.from({ length: 5 }, (_, index) => {
                if (index < fullStars) {
                    return 'full';
                } else if (index === fullStars && halfStar) {
                    return 'half';
                } else {
                    return 'empty';
                }
            });
        }
    },
    methods: {
        toggleIcon(buttonType) {
            if (buttonType === 'save') {
                this.reviewButtonClass = this.reviewButtonClass === 'btn btn-light' ? 'btn btn-danger' : 'btn btn-light';
                // this.saveText = this.saveText === 'Review Us' ? 'Reviewed' : 'Review Us';
            } else if (buttonType === 'like') {
                this.likeIcon = this.likeIcon === 'bi bi-heart' ? 'bi bi-heart-fill' : 'bi bi-heart';
                this.likeText = this.likeText === 'Like Us' ? 'Liked' : 'Like Us';
            } else if (buttonType === 'heart') {
                this.heartIcon = this.heartIcon === 'bi bi-heart' ? 'bi bi-heart-fill' : 'bi bi-heart';
                this.heartText = this.heartText === 'Heart' ? 'Liked' : 'Heart';
            } else if (buttonType === 'bookmark') {
                this.bookmarkIcon = this.bookmarkIcon === 'bi bi-bookmark-plus' ? 'bi bi-bookmark-check-fill' : 'bi bi-bookmark-plus';
                // this.favouriteText = this.favouriteText === 'Like Us' ? 'Liked' : 'Like Us';
            } else if (buttonType === 'favourite') {
                this.favouriteIcon = this.favouriteIcon === 'bi bi-hand-thumbs-up' ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up';
                this.favouriteText = this.favouriteText === 'Like Us' ? 'Liked' : 'Like Us';
            } else if (buttonType === 'promote') {
                this.promoteIcon = this.promoteIcon === 'bi bi-megaphone' ? 'bi bi-megaphone-fill' : 'bi bi-megaphone';
                this.promoteText = this.promoteText === 'Promote Us' ? 'Promoter' : 'Promote Us';
            }
        },
        submitHear(counter) {
            console.log(counter)
            this.counter = 0
        }
    }
}
</script>
<style scoped></style>
