<template>
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button v-for="(image, index) in images" :key="index" :data-bs-target="'#carouselExampleCaptions'"
                    :data-bs-slide-to="index" :class="{ active: index === 0 }"
                    :aria-current="index === 0 ? 'true' : false" :aria-label="'Slide ' + (index + 1)"></button>
            </div>
            <div class="carousel-inner">
                <div v-for="(image, index) in images" :key="index" class="carousel-item"
                    :class="{ active: index === 0 }" data-bs-interval="2000">
                    <img :src="image.src" class="d-block w-100"
                        style="min-height:calc(100vh - 140px); object-fit: cover;object-position: top;" :alt="image.alt">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ image.label }}</h5>
                        <p>{{ image.content }}</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <!-- <ResellerBottomNav /> -->
</template>

<script>
// import ResellerBottomNav from '@/components/ResellerBottomNav.vue';
export default {
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    components: {
        // ResellerBottomNav,
    },
};
</script>

<style scoped>
/* .carousel-item img {
    height: 400px;
    object-fit: cover;
  } */
</style>