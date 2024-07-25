<template>
    <div class="bg-dark pb-md-4 pb-1" style="padding-top: 100px;">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button class="" v-for="(image, index) in images" :key="index"
                    :data-bs-target="'#carouselExampleCaptions'" :data-bs-slide-to="index"
                    :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : false"
                    :aria-label="'Slide ' + (index + 1)"></button>
            </div>
            <div class="carousel-inner">
                <div v-for="(image, index) in images" :key="index" class="carousel-item"
                    :class="{ active: index === 0 }" data-bs-interval="2000">
                    <img :src="image.src" class=""
                        style="width:320px;height: 480px; object-fit:contain;object-position: top;" :alt="image.alt">
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
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true
        }
    },
};
</script>
<!-- <style scoped>
.carousel-control-next {
    right: -12px !important;
}

.carousel-control-prev {
    left: -12px !important;
}
</style> -->