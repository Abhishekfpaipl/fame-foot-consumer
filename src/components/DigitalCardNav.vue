<template>
    <div class="containerr" ref="topnav" :style="`background:rgb(0,0,0, ${backgroundOpacity});`">
        <div class="d-flex justify-content-between align-items-center " :class="{ 'hide-on-scroll': hideOnScroll }">
            <div class="d-flex gap-2">
                <i class="bi bi-arrow-left text-white" @click=goBack></i>
                <p class="mb-0 text-white">{{ title }}</p>
            </div>
            <div class="d-flex gap-3 pe-2 p text-white">
                <i @click="toggleIcon('bookmark')" class="fs-5" :class="bookmarkIcon"></i>
                <i class="bi bi-send fs-5"></i>
            </div>
            <!-- <i class="btn bi bi-person-circle text-white"></i> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductTopnav',
    props: {
        title: {
            type: String,
        }
    },
    data() {
        return {
            backgroundOpacity: 0,
            hideOnScroll: true,
            bookmarkIcon: 'bi bi-bookmark-plus',
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleIcon(buttonType) {
            if (buttonType === 'bookmark') {
                this.bookmarkIcon = this.bookmarkIcon === 'bi bi-bookmark-plus' ? 'bi bi-bookmark-check-fill' : 'bi bi-bookmark-plus';
            }
        },
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
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
        goBack() {
            window.history.back();
        }
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