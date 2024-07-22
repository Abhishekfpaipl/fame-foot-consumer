<template>
    <div class="container my-5">
        <h1 class="text-center ">Contact</h1>
        <div class="row ">
            <div class="col-12 text-center px-4">
                <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation border p-2 py-4 border-dark">
                    <div class="w-100 form-floating mt-0">
                        <input type="text" class="form-control" placeholder="" v-model="name" required>
                        <label for="floatingInput" class="text-muted ms-2">Name</label>
                    </div>
                    <div class="w-100 form-floating mt-2">
                        <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                        <label class="ms-2 text-muted">Mobile No</label>
                    </div>
                    <div class="w-100 form-floating mt-2">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                            v-model="note"></textarea>
                        <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                    </div>

                    <div class="form-check text-start ms-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="agree">
                        <label class="form-check-label small" for="flexCheckDefault">
                            I agree to share my contact details
                        </label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-dark py-2 fs-5 w-100 rounded-0" type="submit">Submit</button>
                    </div>
                </form>

            </div>

        </div>
        <ConnectSection />
    </div>
</template>
<script>
import ConnectSection from '@/components/ConnectSection.vue';
export default {
    components: {
        ConnectSection,
    },
    data() {
        return {
            name: '',
            number: '',
            note: '',
            agree: false
        }
    },
    methods: {
        submitQuery() {
            if (this.agree) {
                // Submit the form
                // Add your own logic here
                console.log('Form submitted successfully!');
            } else {
                alert('Please agree to the terms and conditions.');
            }
        }
    }
}
</script>
<style scoped>
.cutout {
    overflow: hidden;
    text-align: center;
}

.cutout>span {
    position: relative;
    display: inline-block;
}

.cutout>span:before,
.cutout>span:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 900px;
    /* Adjust width as needed */
    margin: 0 20px;
}

.cutout>span:before {
    right: 100%;
    border-bottom: 2px solid;
    border-color: red;
    border-image-slice: 1;
}

.cutout>span:after {
    left: 100%;
    border-bottom: 2px solid;
    border-color: red;
    border-image-slice: 1;
}
</style>