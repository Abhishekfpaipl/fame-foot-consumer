<template>
    <div class="text-bg-dark p-1 col-md-4 col-12" style="z-index: 10000 !important;position:fixed !important;bottom: 0%;">
        <div class="d-flex gap-2 align-items-center">
            <div class="w-100" v-for="(link, index) in links" :key="index">
                <router-link :to="link.route" @click="toggleFavorite(index)"
                    :class="['d-flex', 'flex-column', 'btn', { 'btn-outline-warning': !link.isFavorite, 'btn-warning': link.isFavorite }, 'p-1']">
                    <i :class="link.isFavorite ? link.iconFill : link.iconOutline" :aria-label="link.name"></i>
                    <span class="smaller">{{ link.name }}</span>
                    <span class="smaller">{{ link.label }}</span>
                </router-link>
            </div>
        </div>
    </div>

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
                },
                {
                    iconOutline: 'bi bi-hand-thumbs-up',
                    iconFill: 'bi bi-hand-thumbs-up-fill',
                    name: 'Like',
                    label: '1.35K+',
                    isFavorite: false,
                    route: '',
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
                    label: '1.35K+',
                    isFavorite: false,
                    route: '/collection-page'
                },
            ]
        }
    },
    methods: {
        toggleFavorite(index) {
            this.links[index].isFavorite = !this.links[index].isFavorite;
        }
    }
}
</script>
