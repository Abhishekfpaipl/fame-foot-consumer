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
                <RouterLink to="/review-list" class="text-dark text-decoration-none">
                    <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
                </RouterLink>
            </div>
            <div class="container">
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(vote, index) in shops" :key="index">
                        <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                            style="padding-bottom:37px;">
                            <div class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                aria-controls="offcanvasExample">
                                <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
                                    alt="" class="card-img-top" />
                                <p class="smaller my-2 text-center text-ellipsis2 fw-bold ">{{ vote.name }} skdjfh
                                    laskjdhf
                                    alksjd
                                    sdfh slkdjfh sdsjkf skdj</p>
                            </div>
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
                                <p class="mb-0">Promoters</p>
                            </div>
                        </div>

                        <div class="position-absolute index-label">
                            <span>{{ index + 1 }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="offcanvas  offcanvas-end w-100" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div
                    class="offcanvas-header py-2 bg-white border-bottom d-flex justify-content-between align-items-center">
                    <!-- <img src="/img/logo.svg" style="width: 50px;object-fit: contain;" alt=""> -->
                    <div class="w-75 d-flex justify-content-start align-items-center" data-bs-dismiss="offcanvas"
                        aria-label="Close">
                        <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg"
                            style="width: 40px;object-fit: contain;" alt="">
                        <span class="ms-1 fs-5 text-ellipsis">Business Name</span>
                    </div>
                    <router-link to="/dashboard" class="btn btn-dark rounded-pill">Login</router-link>
                </div>
                <div class="offcanvas-body p-0">
                    <DigitalCardOffcanvas />
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="text-center position-fixed bottom-0 px-2 py-1 m-2 rounded text-white"
                            style="z-index: 9999; background-color: #38383899;" data-bs-dismiss="offcanvas"
                            aria-label="Close">
                            <i class="bi bi-arrow-left me-2"></i>
                            <span>Back</span>
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
                <RouterLink to="/review-list" class="text-dark text-decoration-none">
                    <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
                </RouterLink>
            </div>
            <div class="container">
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(vote, index) in shops" :key="index">
                        <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                            data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                            aria-controls="offcanvasExample" style="padding-bottom:37px;">
                            <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt=""
                                class="card-img-top" />
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold ">{{ vote.name }} skdjfh laskjdhf
                                alksjd
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
                                <p class="mb-0">Promoters</p>
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
                <RouterLink to="/review-list" class="text-dark text-decoration-none">
                    <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
                </RouterLink>
            </div>
            <div class="container">
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(vote, index) in shops" :key="index">
                        <div class="card d-flex flex-column align-items-center justify-content-center rounded pt-2 px-1"
                            data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                            aria-controls="offcanvasExample" style="padding-bottom:37px;">
                            <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt=""
                                class="card-img-top" />
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold ">{{ vote.name }} skdjfh laskjdhf
                                alksjd
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
                                <p class="mb-0">Promoters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DigitalCardOffcanvas from "@/components/DigitalCardOffcanvas.vue";
export default {
    name: "GeneralCollection",
    components: {
        DigitalCardOffcanvas
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
<style>
.index-label {
    top: -20px;
    left: -5px;
    padding: 5px;
    font-size: 3rem;
    font-weight: 800;
    /* background-color: rgba(0, 0, 0, 0.5); */
    /* color: #000; */
    /* border-top-left-radius: 5px;
    border-bottom-right-radius: 5px; */
    background: linear-gradient(90deg, rgba(254, 242, 159, 1) 0%, rgba(210, 163, 73, 1) 50%, rgba(254, 242, 159, 1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>