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
    <div class="container" style="padding-top: 140px;">
        <p class="fs-5 text-center text-capitalize">Enter your business details</p>
        <form @submit.prevent="submitForm()" class="row g-3">
            <div class="col-12">
                <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="name" placeholder="name" v-model="name">
                    <label for="name" class="px-3">Business Name</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="number" class="form-control" id="pincode" placeholder="pincode" v-model="pincode">
                    <label for="pincode" class="px-3">Pincode</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="address1" placeholder="address1" v-model="address1">
                    <label for="address1" class="px-3">Bock Number / Building Name</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="address2" placeholder="address2" v-model="address2">
                    <label for="address2" class="px-3">Street / Colony Name</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="area" placeholder="area" v-model="area">
                    <label for="area" class="px-3">Area</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="landmark" placeholder="landmark" v-model="landmark">
                    <label for="landmark" class="px-3">Landmark</label>
                </div>
                <div class="d-flex gap-2">
                    <div class="form-floating mb-2 w-50">
                        <input type="text" class="form-control" id="city" placeholder="city" v-model="city">
                        <label for="city" class="px-3">City</label>
                    </div>
                    <div class="form-floating mb-2 w-50">
                        <input type="text" class="form-control" id="state" placeholder="state" v-model="state">
                        <label for="state" class="px-3">State</label>
                    </div>
                </div>
            </div>
            <button class="btn btn-dark w-100" type="submit">Save & Continue <i
                    class="bi bi-arrow-right ms-2"></i></button>
        </form>

    </div>
</template>

<script>
// import ImageUpload from '@/components/ImageUploadBox.vue';
import TopNav from "@/components/profile/TopNav.vue";
export default {
    components: {
        // ImageUpload,
        TopNav
    },

    data() {
        return {
            pageName: '',
            name: '',
            pincode: '',
            address1: '',
            address2: '',
            area: '',
            landmark: '',
            city: '',
            state: '',
            selectedColor: '#000000',
            submittedColor: '',
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
        submitForm() {
            console.log(this.name, this.pincode, this.address1, this.address2, this.area, this.landmark, this.city, this.state)
            this.$router.push("/businesstype-details")
        },
        goback() {
            window.history.back();
        },
       
    }
}
</script>

<style scoped></style>