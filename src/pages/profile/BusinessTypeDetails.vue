<template>
    <TopNav />
    <div class="container-fluid position-fixed w-100 bg-light" style="z-index: 99;top: 58px;">
        <div class="row border py-3 px-2">
            <div class="col-12 d-flex gap-2 align-items-center">
                <i class="bi bi-chevron-left" @click=goback()></i>
                <span class="text-capitalize">{{ pageName }}</span>
            </div>

        </div>
    </div>
    <div class="" style="padding-top: 140px;">
        <div class="container">
            <p class="fs-5 text-center">Catagory</p> 
            <div v-for="(type, index) in types" :key="index"
                class="d-flex justify-content-between px-2 py-2  align-items-center   border-bottom">
                <div class="d-flex">
                    <div>
                        <img :src="type.img" alt="">
                    </div>
                    <label class="ms-2 form-check-label" :for="'inlineRadio' + index">
                        <span>{{ type.label }}</span>
                        <p class="mb-0">{{ type.heading }}</p>
                    </label>
                </div>

                <input class="form-check-input" type="radio" name="inlineRadioOptions" :id="'inlineRadio' + index"
                    :value="type.value">
            </div>
            <div class="d-flex justify-content-center my-3 w-100">
                <button class="btn btn-dark w-100 py-3" type="submit">Save<i
                        class="bi bi-arrow-right  ms-2"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from "@/components/profile/TopNav.vue";
export default {
    components: {
        TopNav
    },
    name: "BusinessTypeDetail",
    data() {
        return {
            types: [
                {
                    id: 1,
                    label: 'I sell online from my home',
                    heading: 'Reseller',
                    img: '/img/first.png',
                },
                {
                    id: 2,
                    label: 'I have a retail Shop',
                    heading: 'Retailer',
                    img: '/img/sec.png',
                },
                {
                    id: 3,
                    label: 'I have wholsale Store',
                    heading: 'Wholesaler',
                    img: '/img/third.png',
                },
                {
                    id: 4,
                    label: 'i Have a manufacturing unit',
                    heading: 'Manufacturer',
                    img: '/img/fourth.png',
                },
            ],
            pageName: '',
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
            window.history.back();
        }
    }

}
</script>

<style scoped></style>