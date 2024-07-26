<template>
    <nav class="d-block d-md-none navbar navbar-expand-lg top-brand p-0 border-top position-fixed bottom-0 w-100 bg-dark"
        style="z-index: 9; ">
        <div class="container-fluid">
            <div class="navbar-nav d-flex flex-row w-100 justify-content-around ">
                <div class="nav-item" v-for="(link, linkIndex) in links" :key="linkIndex">
                    <router-link :to="link.path" class="nav-link position-relative text-white" :class="{ 'active': isLinkActive(link) }">
                        <div class="d-flex flex-column align-items-center fw-bold">
                            <i class="bi fs-5" :class="link.icon"></i>
                            <div style="font-size: 0.75rem;">{{ link.name }}</div>
                        </div>
                        <span v-if="link.count" class="badge count">{{ link.count }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                // { id: 1, path: "/product-list", name: "Business", icon: "bi bi-shop", },
                { id: 1, path: "/request-details", name: "Request", icon: "bi bi-chat-square", count: '9', },
                { id: 2, path: "/supporters-details", name: "Supporters", icon: "bi bi-people", count: '', },
                { id: 3, path: "/fameset-details", name: "Fameset", icon: "bi bi-star-fill", count: '', },
                { id: 4, path: "/rewards-details", name: "Rewards", icon: "bi bi-trophy", count: '', },
                { id: 5, path: "/dashboard", name: "Manage", icon: "bi bi-list", count: '', },
            ],
        };
    },

    methods: {
        isLinkActive(link) {
            return this.$route.matched.some((route) => {
                return route.path === link.path || (route.path !== '/' && link.path.startsWith(route.path));
            });
        },
    },
}
</script>
<style scoped>
.router-link-active.router-link-exact-active.nav-link,
.active {
    color: #ffc107 !important;
}

.count {
    position: absolute;
    top: -4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #eb3e25;
    right: 0px;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 14px;
}
</style>