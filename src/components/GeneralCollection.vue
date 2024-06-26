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
                    <div class="col position-relative" v-for="(vote, index) in shops" :key="index">
                        <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                            style="padding-bottom:37px;">
                            <img :src="vote.img" alt="" style="width: 35%;" />
                            <p class="smaller my-2 text-center text-ellipsis2 ">{{ vote.name }} skdjfh laskjdhf alksjd
                                sdfh slkdjfh sdsjkf skdj</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in images" :key="image.id" alt="">
                            </div>
                        </div>

                        <div class="position-absolute bottom-0 m-2 ms-0 text-warning" style="font-size: 12px;">
                            <span class='bg-light border p-1 px-2 rounded-end-3'>
                                <i class="bi bi-star-fill small me-2"></i>
                                <span class="fw-bold">{{ vote.rating }}</span>
                            </span>
                        </div>
                        <div class="position-absolute bottom-0 end-0 m-1 ms-0 text-dark" style="font-size: 12px;">
                            <div class='d-flex flex-column align-items-center justify-content-center pe-2'>
                                <p class="small mb-0 lh-1">{{ vote.support }}+</p>
                                <p class="small mb-0"><small>Reviews</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(vote, index) in shops" :key="index">
                        <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                            style="padding-bottom:37px;">
                            <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="" class="card-img-top" />
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold ">{{ vote.name }} skdjfh laskjdhf alksjd
                                sdfh slkdjfh sdsjkf skdj</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in images" :key="image.id" alt="">
                            </div>
                        </div>

                        <div class="position-absolute bottom-0 m-2 ms-0 text-warning" style="font-size: 12px;">
                            <span class='bg-light border p-1 px-2 rounded-end-3'>
                                <i class="bi bi-star-fill small me-2"></i>
                                <span class="fw-bold">{{ vote.rating }}</span>
                            </span>
                        </div>
                        <div class="position-absolute bottom-0 end-0 m-1 ms-0 text-dark" style="font-size: 12px;">
                            <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1'>
                                <p class="mb-0">{{ vote.support }}+</p>
                                <p class="mb-0">Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(vote, index) in shops" :key="index">
                        <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                            style="padding-bottom:37px;">
                            <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="" class="card-img-top" />
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold ">{{ vote.name }} skdjfh laskjdhf alksjd
                                sdfh slkdjfh sdsjkf skdj</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in images" :key="image.id" alt="">
                            </div>
                        </div>

                        <div class="position-absolute bottom-0 m-2 ms-0 text-warning" style="font-size: 12px;">
                            <span class='bg-light border p-1 px-2 rounded-end-3'>
                                <i class="bi bi-star-fill small me-2"></i>
                                <span class="fw-bold">{{ vote.rating }}</span>
                            </span>
                        </div>
                        <div class="position-absolute bottom-0 end-0 m-1 ms-0 text-dark" style="font-size: 12px;">
                            <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1'>
                                <p class="mb-0">{{ vote.support }}+</p>
                                <p class="mb-0">Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(vote, index) in shops" :key="index">
                        <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                            style="padding-bottom:37px;">
                            <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="" class="card-img-top" />
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold ">{{ vote.name }} skdjfh laskjdhf alksjd
                                sdfh slkdjfh sdsjkf skdj</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in images" :key="image.id" alt="">
                            </div>
                        </div>

                        <div class="position-absolute bottom-0 m-2 ms-0 text-warning" style="font-size: 12px;">
                            <span class='bg-light border p-1 px-2 rounded-end-3'>
                                <i class="bi bi-star-fill small me-2"></i>
                                <span class="fw-bold">{{ vote.rating }}</span>
                            </span>
                        </div>
                        <div class="position-absolute bottom-0 end-0 m-1 ms-0 text-dark" style="font-size: 12px;">
                            <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1'>
                                <p class="mb-0">{{ vote.support }}+</p>
                                <p class="mb-0">Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(vote, index) in shops" :key="index">
                        <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                            style="padding-bottom:37px;">
                            <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="" class="card-img-top" />
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold ">{{ vote.name }} skdjfh laskjdhf alksjd
                                sdfh slkdjfh sdsjkf skdj</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in images" :key="image.id" alt="">
                            </div>
                        </div>

                        <div class="position-absolute bottom-0 m-2 ms-0 text-warning" style="font-size: 12px;">
                            <span class='bg-light border p-1 px-2 rounded-end-3'>
                                <i class="bi bi-star-fill small me-2"></i>
                                <span class="fw-bold">{{ vote.rating }}</span>
                            </span>
                        </div>
                        <div class="position-absolute bottom-0 end-0 m-1 ms-0 text-dark" style="font-size: 12px;">
                            <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1'>
                                <p class="mb-0">{{ vote.support }}+</p>
                                <p class="mb-0">Reviews</p>
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
    name: "GeneralCollection",
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
    }
}
</script>
<style lang="">

</style>