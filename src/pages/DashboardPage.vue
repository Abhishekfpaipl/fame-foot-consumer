<template>
    <div class="container my-5">
        <h3 class="text-center mb-4">Profile</h3>
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-2">
            <div class="col" v-for="(link, index) in links" :key="index">
                <router-link :to="link.path" class="card text-decoration-none py-3">
                    <i class="bi fs-3" :class="link.icon"></i>
                    <p class="mb-0">{{ link.name }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DashboardPage",
    data() {
        return {
            links: [
                {
                    icon: 'bi bi-house',
                    name: 'Dashboard',
                    path: '/'
                },
                {
                    icon: 'bi bi-vinyl',
                    name: 'Business Type',
                    path: '/businesstype-details'
                },
                {
                    icon: 'bi-info-circle',
                    name: 'Basic Info',
                    path: '/basic-details',
                },
                {
                    icon: 'bi bi-stars',
                    name: 'Branding',
                    path: '/branding-details'
                },
                {
                    icon: 'bi bi-telephone',
                    name: 'Connect',
                    path: '/connect-details',
                },
                {
                    icon: 'bi bi-clock',
                    name: 'Work Timing',
                    path: '/worktime-details',
                },
                {
                    icon: 'bi-info-circle',
                    name: 'About',
                    path: '/overview-details',
                },
                {
                    icon: 'bi bi-collection',
                    name: 'Collection',
                    path: '/collection-list'
                },
                {
                    icon: 'bi bi-layers',
                    name: 'Product',
                    path: '/product-list'
                },
                // {
                //     icon: 'bi bi-images',
                //     name: 'Gallery',
                //     path: '/gallery-details'
                // },
                {
                    icon: 'bi bi-trophy',
                    name: 'Rewards',
                    path: '/rewards-details'
                },
                {
                    icon: 'bi bi-bank',
                    name: 'Bank',
                    path: '/ '
                },
                {
                    icon: 'bi bi-journal',
                    name: 'Leads',
                    path: '/ '
                },
            ],
        }
    }
}
</script>
<style lang="">

</style>