<template>
    <div class="container mt-3">
        <p class="fs-5 text-center">Basic Information</p>
        <form class="row g-3">
            <ImageUpload @imageUploaded="handleImageUploaded" />
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="name" v-model="form.Name">
                <label for="floatingInput">Profile Name</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Discreption</label>
            </div>

            <div class="form-floating mb-2">
                <input type="date" class="form-control" id="floatingInput" v-model="form.country" required>
                <label for="floatingInput">Date of Establishing</label>
            </div>
            <RouterLink to=/ContactDetail class="d-flex justify-content-center my-3 mb-5 w-100 text-decoration-none">
                <button class="btn btn-dark w-100 py-3" type="submit">Save & Continue <i
                        class="bi bi-arrow-right ms-2"></i></button>
            </RouterLink>
        </form>

    </div>
</template>

<script>
import ImageUpload from '@/components/ImageUpload.vue';

export default {
    components: {
        ImageUpload
    },

    data() {
        return {
            imageUrl: '',
            mydate: null,
            form: {
                Name: "",
                discreption: "",
                Pincode: "",
                Year: "",
            },
        }
    },
    methods: {
        getData() {
            console.warn("values :  ", this.form.Name, this.form.BName, this.form.Pincode, this.form.Year);
            alert("Data has been submitted to Console");
        },
    }
}
</script>

<style scoped></style>