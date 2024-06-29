<template>
    <div class="container-fluid text-dark bg-light py-5 d-flex justify-content-evenly" style="height: 300px;">
        <div class="text-center">
            <i class="bi bi-chat-square-text-fill fs-1 text-success"></i>
            <p class="fw-bold m-0 d-flex justify-content-center align-items-center fs-4">
                <AutoCounter :data="10"> </AutoCounter>
            </p>
            <small class="smaller fw-bold">Reviews</small>
        </div>
        <div class="separator"></div>
        <div class="text-center">
            <i class="bi bi-star-fill fs-1 text-warning"></i>
            <p class="fw-bold m-0 d-flex justify-content-center align-items-center fs-4">
                <AutoCounter :data="5"> </AutoCounter>
            </p>
            <small class="smaller fw-bold">Ratings</small>
        </div>
        <div class="separator"></div>
        <div class="text-center">
            <i class="bi bi-trophy-fill fs-1 text-primary"></i>
            <p class="fw-bold m-0 d-flex justify-content-center align-items-center fs-4">
                <AutoCounter :data="10"> </AutoCounter>
            </p>
            <small class="smaller fw-bold">Rewards</small>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'InfoSection',
    components: {
        AutoCounter
    },
    data() {
        return {
            information: [
                {
                    heading: "Shop Name",
                    text: "R2L"
                },
                {
                    heading: "Description",
                    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
                },
            ],
            counters: [
                {
                    heading: "Shop Name",
                    text: "R2L"
                },
                {
                    heading: "Description",
                    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
                },
            ]
        }
    }

}
</script>
<style scoped>
.separator {
    border-left: 1px solid grey;
    /* Adjust the color and style as needed */
    height: 80px;
    /* Adjust the height as needed */
    margin: 0 20px;
    /* Adjust the margin as needed */
}
</style>