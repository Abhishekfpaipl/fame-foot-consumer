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
        <p class="text-center fw-bold fs-5 mb-2">Upload Your Banner Below</p>
        <ImageUploadBox></ImageUploadBox>
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-center">Select Your Brand Color</h5>
                            <form @submit.prevent="submitColor">
                                <div class="form-group">

                                    <input v-model="selectedColor" type="color" id="favcolor" name="favcolor"
                                        class="form-control">
                                </div>
                                <div class="d-flex justify-content-center mt-3">
                                    <button type="submit" class="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div class="d-flex align-items-center justify-content-center">
                            <p v-if="submittedColor" class="text-center mb-0 me-3">
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


    </div>
</template>

<script>
import ImageUploadBox from '@/components/ImageUploadBox.vue'
import TopNav from "@/components/profile/TopNav.vue";
export default {
    components: {
        ImageUploadBox,
        TopNav,
    },
    data() {
        return {
            selectedColor: '#ff0000',
            submittedColor: '',
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
        submitColor() {
            this.submittedColor = this.selectedColor;
            // this.selectedColor = '#ff0000'; 
        },
        goback() {
            window.history.back();
        }
    }
}
</script>

<style lang="scss" scoped></style>