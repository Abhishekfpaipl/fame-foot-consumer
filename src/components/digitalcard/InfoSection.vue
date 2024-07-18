<template>
    <div class="container text-dark bg-white my-5 pb-md-5">
        <div class="row">
            <div class="col mt-5 mt-md-0">
                <div class="btn btn-outline-dark border-3 p-3 d-flex flex-column justify-content-center align-items-center"
                    style="border-color: #FFCE56 !important;">
                    <div class="rounded border   border-3 bg-dark"
                        style="width:60px;height: 60px; margin-top: -50px;border-color: #FFCE56 !important;">
                        <img src="/img/logo.svg" alt="" style="width: 100%;height: 100%;filter: invert(1);">
                    </div>
                    <p class="fw-bold m-0 d-flex justify-content-center align-items-center fs-4">
                        <AutoCounter :data="50"></AutoCounter>
                    </p>
                    <small class="smaller fw-bold">Fameset</small>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="container text-dark bg-white">
        <div class="row row-cols-2 row-cols-md-4 g-5">
            <div v-for="(item, index) in fav" :key="index" class="col mb-5 position-relative card-wrapper">
                <div class="card bg-white p-3 d-flex flex-column justify-content-center align-items-center"
                    style="border-color: #FFCE56 !important;">
                    <div class="rounded border"
                        style="width:60px;height: 60px; margin-top: -50px;background-color: #FFF5DD;border-color: #FFCE56 !important;">
                        <i :class="item.iconClass" class="text-dark"></i>
                    </div>
                    <p class="fw-bold m-0 d-flex justify-content-center align-items-center fs-4">
                        <AutoCounter :data="item.data"></AutoCounter>
                    </p>
                    <small class="smaller fw-bold">{{ item.label }}</small>
                </div>
            </div>
        </div>
    </div> -->
    <div class="container text-dark bg-white">
        <div class="d-flex flex-wrap justify-content-center align-items-center">
            <div v-for="(item, index) in fav" :key="index" class="d-flex align-items-center mb-5">
                <div class="p-3 d-flex flex-column justify-content-center align-items-center"
                    style="border-color: #FFCE56 !important;">
                    <i :class="item.iconClass" class="text-dark"></i>
                    <p class="fw-bold fs-4">
                        <AutoCounter :data="item.data"></AutoCounter>
                    </p>
                    <small class="smaller fw-bold">{{ item.label }}</small>
                </div>
                <div v-if="index < fav.length - 1" class="vr mx-4"></div>
            </div>
        </div>
    </div>

    <div class="container text-dark bg-white my-5 pt-md-5">
        <div class="row g-md-5 g-2">
            <div v-for="(item, index) in items" :key="index" class="col-3 mt-5 mt-md-0">
                <div class="btn btn-outline-dark border-3 p-3 d-flex flex-column justify-content-center align-items-center"
                    :data-bs-toggle="'offcanvas'" :data-bs-target="`#${item.offcanvasTarget}`"
                    :aria-controls="item.offcanvasTarget" style="border-color: #FFCE56 !important;">
                    <div class="rounded border border-3 text-bg-dark"
                        style="width:60px;height: 60px; margin-top: -50px;border-color: #FFCE56 !important;"
                        :style="{ backgroundColor: item.backgroundColor }">
                        <i :class="`bi ${item.iconClass} fs-1`"></i>
                    </div>
                    <p class="fw-bold m-0 d-flex justify-content-center align-items-center fs-4">
                        <AutoCounter :data="item.count"></AutoCounter>
                    </p>
                    <small class="smaller fw-bold">{{ item.label }}</small>
                </div>
            </div>
        </div>

        <div v-for="(item, index) in items" :key="`offcanvas-${index}`" class="offcanvas offcanvas-bottom w-100"
            style="height: 75%" :tabindex="'-1'" :id="item.offcanvasTarget" :aria-labelledby="item.offcanvasTarget">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title">{{ item.offcanvasTitle }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <component :is="item.component" />
            </div>
        </div>
    </div>
</template>

<script>
import AutoCounter from '@/components/AutoCounter.vue';
import OffcanvasRating from "@/components/OffcanvasRating.vue";
import PromoteSection from "@/components/PromoteSection.vue";

export default {
    name: 'InfoSection',
    components: {
        AutoCounter,
        OffcanvasRating,
        PromoteSection,
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
                    iconClass: 'bi bi-heart fs-1',
                    iconColor: '#BCDFFB',
                    data: 10,
                    label: 'Likes',

                },
                {
                    iconClass: 'bi bi-eye fs-1',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Views'
                },
                // {
                //     iconClass: 'bi bi-share fs-1',
                //     iconColor: '#BCDFFB',
                //     data: 10,
                //     label: 'Shared'
                // },
                {
                    iconClass: 'bi bi-coin fs-1',
                    iconColor: '#FFB2B2',
                    data: 50,
                    label: 'Repo'
                },
                {
                    iconClass: 'bi bi-people fs-1',
                    iconColor: '#FFB2B2',
                    data: 50,
                    label: 'Uers'
                },
            ]
        }
    }
}
</script>
<style scoped></style>
