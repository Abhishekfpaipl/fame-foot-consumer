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
                <RouterLink to="/" class="text-dark text-decoration-none">
                    <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
                </RouterLink>
            </div>
            <div class="container">
                <div class="row row-cols-3 row-cols-md-5 g-3">
                    <div class="col position-relative" v-for="(vote, index) in shops" :key="index">
                        <div class="bg-light d-flex flex-column align-items-center justify-content-center border rounded pt-2 px-1"
                            style="padding-bottom:37px;">
                            <div class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                aria-controls="offcanvasExample">
                                <img :src="vote.img" alt="" class="" style="width: 35%;" />
                                <p class="smaller my-2 text-center text-ellipsis2 fw-bold">{{ vote.name }} skdjfh
                                    laskjdhf alksjd
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
                            <div class='d-flex flex-column align-items-center justify-content-center pe-2'>
                                <p class="small mb-0 lh-1 text-muted">{{ vote.support }}+</p>
                                <p class="small mb-0 text-muted"><small>Reviews</small></p>
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
                <div class="offcanvas-header py-2 bg-light border-bottom d-flex justify-content-between align-items-center">
                    <img src="/img/famefoot.svg"  style="width: 80px;object-fit: contain;" alt="">
                    <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg"
                        style="width: 50px;object-fit: contain;" alt="">
                    
                </div>
                <div class="offcanvas-body p-0">
                    <DigitalCardOffcanvas />
                </div>
                <div class="close-icon-wrapper">
                    <div class="rounded-circle border p-1 px-2 close-icon" data-bs-dismiss="offcanvas"
                        aria-label="Close">
                        <i class="bi bi-x fs-1"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DigitalCardOffcanvas from "@/components/DigitalCardOffcanvas.vue";
export default {
    name: "NumberingCollection",
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
<style scoped>
.index-label {
    top: -20px;
    left: -5px;
    padding: 5px;
    font-size: 2rem;
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

.close-icon-wrapper {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}

.close-icon {
    background: #38383899;
    color:white;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>