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
        <p class="fs-5 text-center text-capitalize">Enter your business logo</p>
        <form @submit.prevent="submitForm()" class="row g-3">
            <div class="col-12">
                <ImageUpload @imageUploaded="handleImageUploaded" />
                <div class="my-3">
                    <div class="card-body">
                        <h5 class="text-center">Select Your Brand Color</h5>

                        <div class="form-group">
                            <input v-model="selectedColor" type="color" id="favcolor" name="favcolor"
                                class="form-control border-0">
                        </div>
                        <div class="d-flex justify-content-center gap-2 mt-3"
                            :class="{ 'justify-content-between': submittedColor }">
                            <button  class="btn btn-dark w-50" @click="submitColor">show color</button>
                            <div v-if="submittedColor"
                                class="d-flex align-items-center justify-content-center border p-2 ">
                                <p class="text-center mb-0 me-3">
                                    Selected Color:
                                    <span>{{ submittedColor }}</span>
                                </p>
                                <div class="rounded-circle" :style="{ backgroundColor: submittedColor }"
                                    style="width:30px; height:30px">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button class="btn btn-dark w-100" type="submit">Save & Continue <i
                    class="bi bi-arrow-right ms-2"></i></button>
        </form>

    </div>
</template>

<script>
import ImageUpload from '@/components/ImageUploadBox.vue';
import TopNav from "@/components/profile/TopNav.vue";
export default {
    components: {
        TopNav,
        ImageUpload
    },
    name: "BusinessTypeDetail",
    data() {
        return {
            selectedColor: '',
            submittedColor: false,
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
        },
        submitForm() {
            console.log(this.name, this.pincode, this.address1, this.address2, this.area, this.landmark, this.city, this.state)
            this.$router.push("/connect-details")
        },
        submitColor() {
            this.submittedColor = this.selectedColor;
            // this.selectedColor = '#ff0000'; 
        },
    }

}
</script>

<style scoped></style>