<template>
    <div>
        <div class="position-fixed top-0 w-100 bg-dark text-white" style="z-index: 99;">
            <div class="d-flex justify-content-between align-items-center p-2">
                <router-link to="/" class="d-flex align-items-center text-decoration-none text-white">
                    <img src="/img/logo.svg" alt="logo"
                        style="width: 40px; height: 40px;object-fit: contain; filter: invert(1);">
                    <span class="ms-1 fs-3">Fameset</span>
                    <!-- <i class="bi bi-chevron-left fs-3" @click=goback()></i> -->
                </router-link>
                <div class="">
                    <div class="d-none d-md-flex gap-5 me-4">
                        <router-link :to="link.path" v-for="(link, index) in links" :key="index"
                            class="text-decoration-none text-white" :class="{ 'active': isLinkActive(link) }">
                            <small>{{ link.name }}</small>
                        </router-link>
                    </div>
                </div>
                <slot></slot>
            </div>

        </div>

    </div>
</template>
<script>
export default {
    name: "ProfileTopNav",
    data() {
        return {
            pageName: '',
            links: [
                { path: "/product-list", name: 'Business', },
                { path: "/supporters-details", name: 'Supporters', },
                { path: "/fameset-details", name: 'Fameset', },
                { path: "/rewards-details", name: 'Rewards', },
                { path: "/dashboard", name: 'Manage', },

            ],

        }
    },
    methods: {
        goback() {
            window.history.back()
        },
        isLinkActive(link) {
            return this.$route.matched.some((route) => {
                return route.path === link.path || (route.path !== '/' && link.path.startsWith(route.path));
            });
        },
    }
}
</script>
<style scoped>
.router-link-active.router-link-exact-active.nav-link,
.active {
    color: #ffc107 !important;
    font-weight: 800;
    /* text-decoration: underline !important; */
    border-bottom: 2px solid #ffc107;
}
</style>