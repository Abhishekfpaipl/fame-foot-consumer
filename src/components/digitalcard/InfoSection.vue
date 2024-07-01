<template>
    <div class="container-fluid text-dark bg-light py-5 d-flex justify-content-evenly" style="height: 300px;">
        <div v-for="(item, index) in items" :key="index" class="d-flex flex-column text-center">
            <i :class="item.iconClass" :style="{ color: item.iconColor }"></i>
            <p class="fw-bold m-0 d-flex justify-content-center align-items-center fs-4">
                <AutoCounter :data="item.data"></AutoCounter>
            </p>
            <small class="smaller fw-bold">{{ item.label }}</small>
            <i class="bi bi-plus-circle-fill fs-4"></i>
        </div> 
    </div>
</template>

<script>
import AutoCounter from '@/components/AutoCounter.vue';

export default {
    name: 'InfoSection',
    components: {
        AutoCounter
    },
    data() {
        return {
            items: [
                {
                    iconClass: 'bi bi-chat-square-text-fill fs-1',
                    iconColor: 'green',
                    data: 10,
                    label: 'Reviews'
                },
                {
                    iconClass: 'bi bi-star-fill fs-1',
                    iconColor: 'gold',
                    data: 5,
                    label: 'Ratings'
                },
                {
                    iconClass: 'bi bi-trophy-fill fs-1',
                    iconColor: 'blue',
                    data: 10,
                    label: 'Rewards'
                },
                {
                    iconClass: 'bi bi-people-fill fs-1',
                    iconColor: 'red',
                    data: 50,
                    label: 'Promoters'
                }
            ]
        }
    }
}
</script>

 
