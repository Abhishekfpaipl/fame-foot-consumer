<template>
    <div class="bg-dark p-1 col-md-4 col-12 w-100 pb-3" style="margin-top: -1px;">
        <div class="d-flex gap-2 align-items-center">
            <div class="w-100" v-for="(link, index) in links" :key="index">
                <router-link :to="link.route" @click="toggleFavorite(index)"
                    :data-bs-toggle="link.modal ? 'offcanvas' : ''" :data-bs-target="link.modal ? '#' + link.modal : ''"
                    :class="['d-flex', 'flex-column', 'btn', { 'btn-outline-warning': !link.isFavorite, 'btn-warning': link.isFavorite }, 'p-1']">
                    <i :class="link.isFavorite ? link.iconFill : link.iconOutline" :aria-label="link.name"></i>
                    <span class="smaller">{{ link.name }}</span>
                    <span v-if="link.label" class="smaller">{{ link.label }}</span>
                    <span v-else class="smaller bi bi-arrow-right"></span>
                </router-link>
            </div>
        </div>
    </div>
<!-- 
    <div class="offcanvas offcanvas-start" tabindex="-1" id="likeModal" aria-labelledby="likeModalLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="likeModalLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div
                class="container d-flex justify-content-center align-items-center gap-md-5 gap-2 text-center border bg-light   ">
                <div class="text-center">
                    <div class="position-relative bi bi-heart-fill"
                        style="font-size: 150px !important; color: #fff3f3 !important;" @mouseover="hover = true"
                        @touchstart="hover = true" @touchend="hover = false" @mouseleave="hover = false"
                        @click="counter++">
                        <div class="position-absolute" style="font-size: 100px !important; left: 25px; top: 37px;">
                            <i :class="[hover ? 'bi bi-heart-fill text-danger' : 'bi bi-heart text-danger',]"
                                class="position-relative"></i>
                            <span class="bi bi-plus text-danger position-absolute"
                                style="font-size:60px;left:20px;top:25px;"></span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <p class="fs-1 mb-0">{{ counter }}</p>
                    <button class="btn btn-danger" @click="submitHear(counter)" data-bs-dismiss="offcanvas">Submit
                        Hearts</button>
                    <p class="mb-0 mt-2">2.35M+ <i class="bi bi-people-fill mx-2"></i>Hearts</p>
                </div>
            </div>
        </div>
    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="heartModal" aria-labelledby="heartModalLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="heartModalLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div
                class="container d-flex justify-content-center align-items-center gap-md-5 gap-2 text-center border bg-light   ">
                <div class="text-center">
                    <div class="position-relative bi bi-heart-fill"
                        style="font-size: 150px !important; color: #fff3f3 !important;" @mouseover="hover = true"
                        @touchstart="hover = true" @touchend="hover = false" @mouseleave="hover = false"
                        @click="counter++">
                        <div class="position-absolute" style="font-size: 100px !important; left: 25px; top: 37px;">
                            <i :class="[hover ? 'bi bi-heart-fill text-danger' : 'bi bi-heart text-danger',]"
                                class="position-relative"></i>
                            <span class="bi bi-plus text-danger position-absolute"
                                style="font-size:60px;left:20px;top:25px;"></span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <p class="fs-1 mb-0">{{ counter }}</p>
                    <button class="btn btn-danger" @click="submitHear(counter)" data-bs-dismiss="offcanvas">Submit
                        Hearts</button>
                    <p class="mb-0 mt-2">2.35M+ <i class="bi bi-people-fill mx-2"></i>Hearts</p>
                </div>
            </div>
        </div>
    </div> -->


</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    iconOutline: 'bi bi-heart',
                    iconFill: 'bi bi-heart-fill',
                    name: 'Heart',
                    label: '1.35K+',
                    isFavorite: false,
                    route: '',
                    modal: 'likeModal'
                },
                {
                    iconOutline: 'bi bi-hand-thumbs-up',
                    iconFill: 'bi bi-hand-thumbs-up-fill',
                    name: 'Like',
                    label: '1.35K+',
                    isFavorite: false,
                    route: '',
                    modal: 'heartModal'
                },
                {
                    iconOutline: 'bi bi-megaphone',
                    iconFill: 'bi bi-megaphone-fill',
                    name: 'Promote ',
                    label: '1.35K+',
                    isFavorite: false,
                    route: '',
                },
                {
                    iconOutline: 'bi bi-rss',
                    iconFill: 'bi bi-rss-fill',
                    name: 'Feeds',
                    label: '1.35K+',
                    isFavorite: false,
                    route: '',
                },
                {
                    iconOutline: 'bi bi-shop',
                    iconFill: 'bi bi-shop',
                    name: 'Business',
                    label: '',
                    isFavorite: true,
                    route: '/collection-page'
                },
            ],
            counter: 0,
        }
    },
    methods: {
        toggleFavorite(index) {
            this.links[index].isFavorite = !this.links[index].isFavorite;
        },
        submitHear(counter) {
            console.log(counter)
            this.counter = 0
        }
    }
}
</script>
