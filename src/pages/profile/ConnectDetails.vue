<template>
    <div class="container mt-3 mb-5">
        <p class="fs-5 text-center">Contact Details</p>
        <form @submit.prevent="submitDetails()" class="row g-3 pb-4">
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-phone"></i></span>
                <input type="number" class="form-control" placeholder="Contact Number" aria-label="Contact Number"
                    aria-describedby="basic-addon1" v-model="number">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-whatsapp"></i></span>
                <input type="number" class="form-control" placeholder="Whatsapp Number" aria-label="Whatsapp Number"
                    aria-describedby="basic-addon1" v-model="whatsapp">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
                <input type="email" class="form-control" placeholder="E-mail" aria-label="E-mail"
                    aria-describedby="basic-addon1" v-model="email">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-geo"></i></span>
                <input type="text" class="form-control" placeholder="Location" aria-label="Location"
                    aria-describedby="basic-addon1" v-model="location">
            </div>
            <p class="fs-5 text-center">Social Details</p>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-facebook"></i></span>
                <input type="text" class="form-control" placeholder="Facebook" aria-label="Facebook"
                    aria-describedby="basic-addon1" v-model="facebook">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-instagram"></i></span>
                <input type="text" class="form-control" placeholder="Instagram" aria-label="Instagram"
                    aria-describedby="basic-addon1" v-model="instagram">
            </div>

            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-youtube"></i></span>
                <input type="text" class="form-control" placeholder="Youtube" aria-label="Youtube"
                    aria-describedby="basic-addon1" v-model="youtube">
            </div>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-linkedin"></i></span>
                <input type="text" class="form-control" placeholder="Linkedin" aria-label="Linkedin"
                    aria-describedby="basic-addon1" v-model="linkedin">
            </div>
            <!-- <RouterLink to=/BusinessType class="d-flex justify-content-center my-3 mb-5 w-100 text-decoration-none"> -->
                <button class="btn btn-dark w-100 py-3" type="submit">Save & continue <i
                        class="bi bi-arrow-right ms-2"></i></button>
            <!-- </RouterLink> -->
        </form>

    </div>
</template>

<script>

export default {
    name: "ContactDetails",
    data() {
        return {
            number: "",
            whatsapp: "",
            email: "",
            location: "",
            facebook: "",
            instagram: "",
            youtube: "",
            linkedin: ""

        }
    },
    methods: {
        submitDetails() {
            // Save the details to a database or API
            console.log(this.number, this.whatsapp, this.email, this.location, this.facebook, this.instagram, this.youtube, this.linkedin);
            // Redirect to the BusinessType page
            this.$router.push("/BusinessType");
        }
    }
}
</script>

<style scoped></style>