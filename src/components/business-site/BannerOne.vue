<template>
    <div class="container-fluid">
        <div class="row p-3 py-5">
            <div class="col-12 col-md-6">
                <img :src="banner" alt="Cover Image" style="width:75%;">
            </div>
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h1 class="text-center text-capitalize">{{ title }}</h1>
                <p>{{ description }}</p>
                <button class="btn brand-hover" :style="buttonStyle" @mouseover="hover = true" @mouseleave="hover = false">
                    Button
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BannerOne',
    props: ['banner', 'brandColorOne', 'brandTextColor', 'title', 'description'],
    data() {
        return {
            hover: false
        };
    },
    computed: {
        buttonStyle() {
            return this.hover
                ? { backgroundColor: this.brandTextColor, color: this.brandColorOne }
                : { backgroundColor: this.brandColorOne, color: this.brandTextColor };
        }
    }
}
</script>
<style scoped>
.brand-hover {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}
</style>