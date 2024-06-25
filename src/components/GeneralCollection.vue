<template>
    <div>
        <div class="my-3">
            <div class="d-flex justify-content-between align-items-end mt-3 mb-4 py-4"
                style="background-color: #efefed">
                <div class="">
                    <p class="ps-2 text-start fw-bold mb-0">
                        <span class="fs-4"> <i class="bi bi-star-fill"></i> Delhi's</span>
                    </p>
                    <p class="ps-2 text-start mb-0">
                        <span style="">Top Retailers</span>
                    </p>
                </div>
                <RouterLink to="/AllMarket" class="text-dark text-decoration-none">
                    <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
                </RouterLink>
            </div>
            <div class="container">
                <div class="row row-cols-3 row-cols-md-5 g-1">
                    <div class="col" v-for="(vote, index) in shops" :key="index">
                        <div
                            class="d-flex flex-column align-items-center justify-content-center border rounded py-2 p-1">
                            <img :src="vote.img" alt="" style="width: 35%;" />
                            <p class="smaller my-2 text-center text-ellipsis2 ">{{ vote.name }} skdjfh laskjdhf alksjd
                                sdfh slkdjfh sdsjkf skdj</p>
                            <ReviewRating :rating="vote.rating" />
                            <div class="d-flex smaller">
                                <small>{{ vote.support }}+ </small> &nbsp;<small>Reviews</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ReviewRating from "@/components/ReviewRating.vue";
export default {
    name: "GeneralCollection",
    components: {
        ReviewRating
    },
    data() {
        return {
            shops: [
                {
                    id: 1,
                    img: 'img/users/1.png',
                    name: 'Travis',
                    rating: 4,
                    support: 200,
                },
                {
                    id: 2,
                    img: 'img/users/2.png',
                    name: 'Kanye',
                    rating: 5,
                    support: 100,
                },
                {
                    id: 3,
                    img: 'img/users/3.png',
                    name: 'Snoop',
                    rating: 2.5,
                    support: 200,
                },
                {
                    id: 4,
                    img: 'img/users/4.png',
                    name: 'Weekend',
                    rating: 5,
                    support: 100,
                },
                {
                    id: 5,
                    img: 'img/users/5.png',
                    name: 'Akon',
                    rating: 4.5,
                    support: 100,
                },
                {
                    id: 6,
                    img: 'img/users/3.png',
                    name: 'Snoop',
                    rating: 4,
                    support: 200,
                },
                {
                    id: 7,
                    img: 'img/users/4.png',
                    name: 'Weekend',
                    rating: 3.5,
                    support: 100,
                },
                {
                    id: 8,
                    img: 'img/users/5.png',
                    name: 'Akon',
                    rating: 3,
                    support: 100,
                },
                {
                    id: 9,
                    img: 'img/users/3.png',
                    name: 'Snoop',
                    rating: 5,
                    support: 200,
                },
                {
                    id: 10,
                    img: 'img/users/3.png',
                    name: 'Snoop',
                    rating: 4.5,
                    support: 200,
                },

            ],
        }
    }
}
</script>
<style lang="">

</style>