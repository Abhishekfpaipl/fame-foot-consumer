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
        <form @submit.prevent="submitDetails()" class="row g-3 pb-4">
            <div class="input-group mb-3 w-50">
                <span class="input-group-text text-bg-dark" id="basic-addon1"><i class="bi bi-phone"></i></span>
                <input type="number" class="form-control" placeholder="Contact Number" aria-label="Contact Number"
                    aria-describedby="basic-addon1" v-model="number">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text text-bg-success" id="basic-addon1"><i class="bi bi-whatsapp"></i></span>
                <input type="number" class="form-control" placeholder="Whatsapp Number" aria-label="Whatsapp Number"
                    aria-describedby="basic-addon1" v-model="whatsapp">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text text-bg-danger" id="basic-addon1"><i class="bi bi-envelope"></i></span>
                <input type="email" class="form-control" placeholder="E-mail" aria-label="E-mail"
                    aria-describedby="basic-addon1" v-model="email">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text text-bg-primary" id="basic-addon1"><i class="bi bi-geo"></i></span>
                <input type="text" class="form-control" placeholder="Location" aria-label="Location"
                    aria-describedby="basic-addon1" v-model="location">
            </div>
            <p class="fs-5 text-center">Social Details</p>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text text-bg-primary" id="basic-addon1"><i class="bi bi-facebook"></i></span>
                <input type="text" class="form-control" placeholder="Facebook" aria-label="Facebook"
                    aria-describedby="basic-addon1" v-model="facebook">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text text-bg-dark" id="basic-addon1"><i class="bi bi-instagram"></i></span>
                <input type="text" class="form-control" placeholder="Instagram" aria-label="Instagram"
                    aria-describedby="basic-addon1" v-model="instagram">
            </div>

            <div class="input-group mb-3 w-50">
                <span class="input-group-text text-bg-danger" id="basic-addon1"><i class="bi bi-youtube"></i></span>
                <input type="text" class="form-control" placeholder="Youtube" aria-label="Youtube"
                    aria-describedby="basic-addon1" v-model="youtube">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text text-bg-primary" id="basic-addon1"><i class="bi bi-linkedin"></i></span>
                <input type="text" class="form-control" placeholder="Linkedin" aria-label="Linkedin"
                    aria-describedby="basic-addon1" v-model="linkedin">
            </div>
            <button class="btn btn-dark w-100 py-3" type="submit">Save & continue <i
                    class="bi bi-arrow-right ms-2"></i></button>
        </form>

    </div>
</template>

<script>
import TopNav from "@/components/profile/TopNav.vue";
export default {
    name: "ContactDetails",
    components: {
        TopNav
    },
    data() {
        return {
            number: "",
            whatsapp: "",
            email: "",
            location: "",
            facebook: "",
            instagram: "",
            youtube: "",
            linkedin: "",
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
        submitDetails() {
            // Save the details to a database or API
            console.log(this.number, this.whatsapp, this.email, this.location, this.facebook, this.instagram, this.youtube, this.linkedin);
            // Redirect to the BusinessType page
            this.$router.push("/worktime-details");
        },
        goback() {
            window.history.back();
        }
    }
}
</script>

<style scoped></style>