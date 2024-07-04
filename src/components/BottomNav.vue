<template>
    <nav class="navbar fixed-bottom " style="z-index:1;">
        <div class=" position-fixed w-100" style="bottom: 0;">
            <div style="background-color: white;">
                <div class="d-flex justify-content-evenly text-center w-100 border-top borde-light">
                    <div v-for="(link, index) in links" :key="index" :link="link"
                        class="d-flex justify-content-evenly w-100">
                        <routerLink :to="link.route" class="text-decoration-none text-dark">
                            <div class="inner-items py-1 d-flex flex-column">
                                <i :class="link.icon"></i>
                                <p class="m-0" style="font-size:12px;">{{ link.name }}</p>
                            </div>
                        </routerLink>
                    </div>
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
                { id: 1, route: "/product-list", name: "Business", icon: "bi bi-shop fs-5", },
                { id: 2, route: "/supporters-details", name: "Supporters", icon: "bi bi-people fs-5", },
                { id: 3, route: "/fameset-details", name: "Fameset", icon: "bi bi-hearts fs-5", },
                { id: 4, route: "/rewards-details", name: "Rewards", icon: "bi bi-trophy fs-5", },
                { id: 5, route: "/dashboard", name: "Manage", icon: "bi bi-list fs-5", },
            ],
        };
    },
}
</script>

<style lang="scss" scoped>
.items {
    display: flex;
    text-align: center;
}
</style>