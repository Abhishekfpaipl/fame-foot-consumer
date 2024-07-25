<template>
    <TopNav />
    <div class="container" style="padding-top: 90px;">

        <!-- Top section with links -->
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-2">
            <div class="col" v-for="(link, index) in links" :key="index">
                <router-link :to="link.path" class="card text-decoration-none py-3">
                    <i class="bi fs-3" :class="link.icon"></i>
                    <p class="mb-0">{{ link.name }}</p>
                </router-link>
            </div>
        </div>

        <!-- Middle section with language and logout buttons -->
        <div class="row mt-4">
            <div class="col-6">
                <button class="w-100 btn btn-outline-dark"><i class="bi bi-globe"></i> English</button>
            </div>
            <div class="col-6">
                <button class="w-100 btn btn-outline-danger"><i class="bi bi-box-arrow-right"></i> Logout</button>
            </div>
        </div>

        <!-- Bottom section with router-link -->
        
    </div>
    <router-link to="/offer-page"
        class="m-2 px-2 mt-4 bg-dark text-decoration-none text-warning d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
            <i class="bi bi-shield-fill fs-1 pe-2"></i>
            <span class="fw-bold fs-5">Gold Member</span>
        </div>
        <div class="d-flex align-items-center">
            <small class="">Upgrade</small>
            <i class="bi bi-chevron-right fs-4"></i>
        </div>
    </router-link>

    <BottomNav />
</template>
<script>
import BottomNav from "@/components/profile/BottomNav.vue"
import TopNav from "@/components/profile/TopNav.vue";
export default {
    name: "DashboardPage",
    components: {
        BottomNav,
        TopNav,
    },
    data() {
        return {
            links: [
                // {
                //     icon: 'bi bi-house',
                //     name: 'Dashboard',
                //     path: '/'
                // },
                {
                    icon: 'bi-info-circle',
                    name: 'Basic Info',
                    path: '/basic-details',
                },
                // {
                //     icon: 'bi bi-vinyl',
                //     name: 'Business Type',
                //     path: '/businesstype-details'
                // },
                // {
                //     icon: 'bi bi-stars',
                //     name: 'Branding',
                //     path: '/branding-details'
                // },
                // {
                //     icon: 'bi bi-telephone',
                //     name: 'Connect',
                //     path: '/connect-details',
                // },
                // {
                //     icon: 'bi bi-clock',
                //     name: 'Work Timing',
                //     path: '/worktime-details',
                // },
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
                // {
                //     icon: 'bi bi-layers',
                //     name: 'Product',
                //     path: '/product-list'
                // },
                // {
                //     icon: 'bi bi-images',
                //     name: 'Gallery',
                //     path: '/gallery-details'
                // },
                {
                    icon: 'bi bi-stars',
                    name: 'Showcase',
                    path: '/showcase-details'
                },
                {
                    icon: 'bi bi-calendar-minus',
                    name: 'Timeline',
                    path: '/timeline-details'
                },
                {
                    icon: 'bi bi-bank',
                    name: 'Bank',
                    path: '/bank-details'
                },
                {
                    icon: 'bi bi-chat-square-quote',
                    name: 'Testimonial',
                    path: '/testimonial-details'
                },
                {
                    icon: 'bi bi-clipboard2-check',
                    name: 'Verification',
                    path: '/bank-details'
                },
                {
                    icon: 'bi bi-chat-square-text',
                    name: 'Reviews',
                    path: '/bank-details'
                },
                // {
                //     icon: 'bi bi-journal',
                //     name: 'Leads',
                //     path: '/ '
                // },
            ],
            pageName: ''
        }
    },
    mounted() {
        let path = this.$route.path;

        // Remove leading and trailing slashes
        path = path.replace(/^\/|\/$/g, '');

        // Replace dashes with spaces
        path = path.replace(/-/g, ' ');

        // Optionally, capitalize the first letter of each word
        // path = path.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        this.pageName = path;
        console.log(this.pageName);
    },
    methods: {
        goback() {
            window.history.back()
        },

    }
}
</script>
<style lang="">

</style>