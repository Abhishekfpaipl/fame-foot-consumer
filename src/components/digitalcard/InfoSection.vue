<template>
    <div class="">
        <div class="text-bg-dark">
            <div class="container">
                <div class="row rounded p-3 align-items-center g-md-5">
                    <div class="col-md-3">
                        <img src="https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp"
                            alt="" class="rounded"
                            style="width: 100%; height: 320px;object-fit:cover; object-position: top;">
                    </div>
                    <div class="col-md-9 text-center text-md-start">
                        <div class="d-flex flex-column align-items-md-start align-items-center mt-2">
                            <p class="mb-0  fs-2 fw-bold">Mariana Anderson</p>
                            <p class="smaller text-ellipsis2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Nostrum
                                quaerat harum voluptatem cupiditate? Molestias similique eum incidunt atque quibusdam
                                exercitationem.</p>
                        </div>
                        <div class="d-md-flex justify-content-between align-items-start my-1 fs-5">
                            <div
                                class="d-flex justify-content-center justify-content-md-start gap-2 align-items-start ">
                                <span>Fameset</span>
                                <i class="bi bi-star-fill text-warning"></i>
                                <span>8.5 Rating</span>
                                <i class="bi bi-share fs-5"></i>
                            </div>
                            <router-link to="/collection-page" class="btn btn-warning my-3 my-md-0">
                                <i class="bi bi-shop me-2"></i>
                                <span>Showcase </span>
                                <i class="bi bi-arrow-right ms-2"></i>
                            </router-link>
                        </div>

                        <div class="d-flex justify-content-center justify-content-md-start gap-2 overflow-x-scroll w-100 my-2"
                            id="scroll">
                            <img :src="image" style="width: 30px; height: 30px; object-fit: contain;"
                                v-for="image in images" :key="image.id" alt="">
                        </div>
                        <div class="d-flex gap-3 my-4">
                            <div class="w-25">
                                <button :class="reviewButtonClass" class="w-100" @click="toggleIcon('save')">
                                    <i :class="saveIcon" class="me-2 "></i>
                                    <span class="d-md-block d-none">{{ saveText }}</span>
                                </button>
                                <p class="mb-0 smaller text-center pt-2">2.35M+</p>
                            </div>
                            <div class="w-25">
                                <button :class="favouriteButtonClass" class="w-100 btn btn-light"
                                    @click="toggleIcon('favourite')">
                                    <i :class="favouriteIcon" class="me-2"></i>
                                    <span class="d-md-block d-none">{{ favouriteText }}</span>
                                </button>
                                <p class="mb-0 smaller text-center pt-2">5.35K+</p>
                            </div>
                            <div class="w-50">
                                <button :class="promoteButtonClass" class="w-100 btn btn-light"
                                    @click="toggleIcon('promote')">
                                    <i :class="promoteIcon" class="me-2"></i> {{ promoteText }}
                                </button>
                                <p class="mb-0 smaller text-center pt-2">1.35K+</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container text-dark bg-white mt-4">
            <div class="row row-cols-4 row-cols-md-4 mx-1 g-1">
                <div v-for="(item, index) in fav" :key="index" class="col">
                    <div class="p-2 card shadow"
                        style="background-color: #FFF5DD !important;border-color: #FFCE56 !important;">
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
        <div class="mx-3 pb-3 pt-4">
            <button class="w-100 btn btn-warning fs-5"><span class="text-capitalize">We'd Love To Have Your
                    Review</span> <i class="bi bi-arrow-right "></i></button>
                    <p class="text-end mb-0 pe-2">2.5K+</p>
        </div>
    </div>
</template>

<script>
import AutoCounter from '@/components/AutoCounter.vue';

export default {
    name: 'InfoSection',
    components: {
        AutoCounter,
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
                // {
                //     iconClass: 'bi bi-hand-thumbs-up-fill',
                //     iconColor: '#FFB2B2',
                //     data: 50,
                //     label: 'Promoters'
                // },
                {
                    iconClass: 'bi bi-hearts',
                    iconColor: '#BCDFFB',
                    data: 10,
                    label: 'Hearts',

                },
                // {
                //     iconClass: 'bi bi-heart-fill',
                //     iconColor: '#BCDFFB',
                //     data: 10,
                //     label: 'Likes',

                // },
                // {
                //     iconClass: 'bi bi-chat-dots-fill',
                //     iconColor: '#C9E7CA',
                //     data: 10,
                //     label: 'Reviews'
                // },
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
                    label: 'Badges'
                },
                {
                    iconClass: 'bi bi-emoji-smile-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Thankful'
                },
                {
                    iconClass: 'bi bi-people-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Reach'
                },
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
            favouriteIcon: 'bi bi-hand-thumbs-up',
            promoteIcon: 'bi bi-megaphone',
            saveText: 'Hearts',
            favouriteText: 'Like Us',
            promoteText: 'Promote Us',
            addToFav: 'bi bi-heart',
            reviewButtonClass: 'btn btn-light'
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
            } else if (buttonType === 'favourite') {
                this.favouriteIcon = this.favouriteIcon === 'bi bi-hand-thumbs-up' ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up';
                this.favouriteText = this.favouriteText === 'Like Us' ? 'Liked' : 'Like Us';
            } else if (buttonType === 'promote') {
                this.promoteIcon = this.promoteIcon === 'bi bi-megaphone' ? 'bi bi-megaphone-fill' : 'bi bi-megaphone';
                this.promoteText = this.promoteText === 'Promote Us' ? 'Promoter' : 'Promote Us';
            }
        }
    }
}
</script>
<style scoped></style>
