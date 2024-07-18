<template>
    <div class="containerr" ref="topnav" :style="`background:rgb(0,0,0, ${backgroundOpacity});`">
        <div class="d-flex justify-content-between align-items-center" :class="{ 'hide-on-scroll': hideOnScroll }">
            <i class="bi bi-arrow-left text-white"></i>
            <p class="mb-0 text-white">Business Name</p>
            <i class="btn bi bi-person-circle text-white"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
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