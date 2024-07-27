<template>
    <div class="containerr d-flex justify-content-between align-items-center" ref="topnav"
        :style="`background:rgb(0,0,0, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-3">
            <router-link to="/" :class="{ 'hide-on-scroll': hideOnScroll }"
                class="text-decoration-none text-dark d-flex align-items-center">
                <img :src="`${publicPath}${img}`" style="width: 50px;object-fit: contain;filter: invert(1);">
                <span class="text-uppercase text-white fs-3">fameset</span>
            </router-link>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-3" :class="{ 'hide-on-scroll': hideOnScroll }">
            <router-link to="/registration-page" class="btn btn-danger rounded-pill">Register</router-link>
            <router-link to="/story" class="bi bi-shop text-white fs-1"></router-link>
             <router-link to="/dashboard" class="text-white">
                <i class="bi bi-person-circle fs-1"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo.svg",
            backgroundOpacity: 0,
            hideOnScroll: true,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            // console.log(scrollTop)
            // console.log(scrollPercentage)
            if (scrollPercentage >= 5 && scrollPercentage <= 6) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = true;
            } else if (scrollPercentage > 5) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
    }
};
</script>

<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    z-index: 10;
}
</style>