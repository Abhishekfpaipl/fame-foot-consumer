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
                <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-1">
                    <router-link to="/digital-card" class="col position-relative" v-for="(association, index) in associations" :key="index">
                        <div
                            class="card border-0 rounded p-0 d-flex flex-column align-items-center justify-content-center rounded">
                            <div class="p-2 overflow-hidden"  style="height: 200px">
                                <img :src="association.img" alt="" class="rounded-top"
                                    style="width: 100%; min-width: 100%; min-height: 200px; object-fit: cover; object-position: center;" />
                            </div>
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold text-capitalize">{{
                                association.name
                                }}</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image.image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in association.promoters" :key="image.id" alt="">
                            </div>
                            <div class="card-footer border-0 d-flex justify-content-between p-0 py-2 w-100">
                                <span class='bg-light border p-1 px-2 rounded-end-3 smaller'>
                                    <i class="bi bi-star-fill small me-2"></i>
                                    <span class="fw-bold">{{ association.rating }}</span>
                                </span>
                                <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1 smaller'>
                                    <p class="mb-0">{{ association.support }}+</p>
                                    <p class="mb-0">Promoters</p>
                                </div>
                            </div>
                        </div>
                        <div class="position-absolute index-label">
                            <p class="mb-0">{{ index + 1 }}</p>
                        </div>
                        <div class="position-absolute top-0 start-0 rounded-circle"
                            style="background-color: #ffffff99;z-index: 1; width: 60px; height: 60px;">
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- <DigitalCardOffcanvas /> -->
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
                    <div class="col position-relative" v-for="(association, index) in associations" :key="index">
                        <div
                            class="card border-0 rounded p-0 d-flex flex-column align-items-center justify-content-center rounded">
                            <div class="p-3 overflow-hidden" data-bs-toggle="offcanvas" href="#offcanvasExample"
                                role="button" aria-controls="offcanvasExample" style="height: 200px">
                                <!-- <img src="https://img101.urbanic.com/v1/703c1c85d9a04f03a11294de9aa4d46f.webp" alt="" -->
                                <img :src="association.img" alt="" class="rounded-top"
                                    style="width: 100%; min-width: 100%; min-height: 200px; object-fit: cover; object-position: center;" />
                            </div>
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold text-capitalize">{{
                                association.name
                                }}</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image.image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in association.promoters" :key="image.id" alt="">
                            </div>
                            <div class="card-footer border-0 d-flex justify-content-between p-0 py-2 w-100">
                                <span class='bg-light border p-1 px-2 rounded-end-3 smaller'>
                                    <i class="bi bi-star-fill small me-2"></i>
                                    <span class="fw-bold">{{ association.rating }}</span>
                                </span>
                                <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1 smaller'>
                                    <p class="mb-0">{{ association.support }}+</p>
                                    <p class="mb-0">Promoters</p>
                                </div>
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
                    <div class="col position-relative" v-for="(association, index) in associations" :key="index">
                        <div
                            class="card border-0 rounded p-0 d-flex flex-column align-items-center justify-content-center rounded">
                            <div class="p-3 overflow-hidden" data-bs-toggle="offcanvas" href="#offcanvasExample"
                                role="button" aria-controls="offcanvasExample" style="height: 200px">
                                <!-- <img src="https://img101.urbanic.com/v1/703c1c85d9a04f03a11294de9aa4d46f.webp" alt="" -->
                                <img :src="association.img" alt="" class="rounded-top"
                                    style="width: 100%; min-width: 100%; min-height: 200px; object-fit: cover; object-position: center;" />
                            </div>
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold text-capitalize">{{
                                association.name
                            }}</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image.image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in association.promoters" :key="image.id" alt="">
                            </div>
                            <div class="card-footer border-0 d-flex justify-content-between p-0 py-2 w-100">
                                <span class='bg-light border p-1 px-2 rounded-end-3 smaller'>
                                    <i class="bi bi-star-fill small me-2"></i>
                                    <span class="fw-bold">{{ association.rating }}</span>
                                </span>
                                <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1 smaller'>
                                    <p class="mb-0">{{ association.support }}+</p>
                                    <p class="mb-0">Promoters</p>
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
// import DigitalCardOffcanvas from "@/components/DigitalCardOffcanvas.vue";
export default {
    name: "GeneralCollection",
    components: {
        // DigitalCardOffcanvas
    },
    data() {
        return {
            associations: [
                {
                    id: 1,
                    img: 'img/members/20.jpeg',
                    name: 'bar council of india',
                    rating: 4,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 2,
                    img: 'img/members/19.jpg',
                    name: 'bharatiya janta party',
                    rating: 5,
                    support: 100,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 3,
                    img: 'img/members/18.jpg',
                    name: 'chartered accountant of india',
                    rating: 2.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 4,
                    img: 'img/members/4.png',
                    name: 'delhi cycling club',
                    rating: 5,
                    support: 100,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 5,
                    img: 'img/members/5.jpg',
                    name: 'delhi police',
                    rating: 4.5,
                    support: 100,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 6,
                    img: 'img/members/7.jpeg',
                    name: 'internation medical association',
                    rating: 4,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 7,
                    img: 'img/members/6.webp',
                    name: 'indian lawyers association',
                    rating: 3.5,
                    support: 100,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 8,
                    img: 'img/members/8.png',
                    name: 'nsci',
                    rating: 3,
                    support: 100,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 9,
                    img: 'img/members/9.png',
                    name: 'harley davidson',
                    rating: 5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 10,
                    img: 'img/members/10.png',
                    name: "life's good",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 11,
                    img: 'img/members/11.png',
                    name: "tzp",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 12,
                    img: 'img/members/12.jpg',
                    name: "Ayush",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 13,
                    img: 'img/members/13.jpg',
                    name: "poonam",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 14,
                    img: 'img/members/14.jpg',
                    name: "vivek",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 15,
                    img: 'img/members/15.jpg',
                    name: "nikhil",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 16,
                    img: 'img/members/16.jpg',
                    name: "abhishek",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 17,
                    img: 'img/members/17.jpg',
                    name: "riya",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 18,
                    img: 'img/members/18.jpg',
                    name: "yogesh",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 19,
                    img: 'img/members/19.jpg',
                    name: "bhasker",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
                {
                    id: 20,
                    img: 'img/members/20.jpeg',
                    name: "sumit",
                    rating: 4.5,
                    support: 200,
                    promoters: [
                        { image: "/img/members/1.png", name: "bar council of india", },
                        { image: "/img/members/2.webp", name: "bharatiya janta party", },
                        { image: "/img/members/3.png", name: "chartered accountant of india", },
                        { image: "/img/members/4.png", name: "delhi cycling club", },
                        { image: "/img/members/5.jpg", name: "delhi police", },
                        { image: "/img/members/6.webp", name: "indian lawyers association", },
                        { image: "/img/members/7.jpeg", name: "international medical association", },
                        { image: "/img/members/8.png", name: "nsci", },
                    ]
                },
            ],
        }
    }
}
</script>
<style>
.index-label {
    top: 0px;
    left: 0px;
    z-index: 2;
    line-height: 1;
    background: linear-gradient(90deg, #fef29f 0%, rgb(142, 105, 37) 50%, rgb(122, 107, 10) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.index-label p {
    width: 60px;
    height: 60px;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    text-shadow: 1px 1px 1px #00000020;
}
</style>