<template>
    <div class="fs-5 text-warning">
        <span v-for="(star, index) in stars" :key="index">
            <i v-if="star === 'full'" class="bi bi-star-fill"></i>
            <i v-else-if="star === 'half'" class="bi bi-star-half"></i>
            <i v-else class="bi bi-star"></i>
        </span>
    </div>
</template>

<script>
export default {
    name: 'ReviewRating',
    props: {
        rating: {
            type: Number,
            required: true
        }
    },
    computed: {
        stars() {
            const fullStars = Math.floor(this.rating);
            const halfStar = this.rating % 1 !== 0;
            return Array.from({ length: 5 }, (_, index) => {
                if (index < fullStars) {
                    return 'full';
                } else if (index === fullStars && halfStar) {
                    return 'half';
                } else {
                    return 'empty';
                }
            });
        }
    }
}
</script>
