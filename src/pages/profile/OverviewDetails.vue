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
        <div class="accordion my-3" id="accordionSizes">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseSizes" aria-expanded="true" aria-controls="collapseSizes">
                        Add Custom Fields
                    </button>
                </h2>
                <div id="collapseSizes" class="accordion-collapse collapse show" data-bs-parent="#accordionSizes">
                    <div class="accordion-body">
                        <div class="mb-4">
                            <div class="card-body">
                                <form @submit.prevent="saveSize">
                                    <div class="mb-3">
                                        <label for="size" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="size" v-model="profile.size"
                                            required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="sizePrice" class="form-label">Value</label>
                                        <input type="text" class="form-control" id="sizePrice" v-model="profile.price"
                                            required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="position" class="form-label">position</label>
                                        <input type="number" class="form-control" id="position"
                                            v-model="profile.position">
                                        <small><small class="text-secondary">Optional</small></small>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <button type="button" class="btn btn-secondary"
                                            @click="resetSizeForm">Reset</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div v-for="(size, index) in sizes" :key="index">
                            <div class="d-flex mb-2 w-100">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div class="d-block d-md-flex  w-100">
                                        <div class="border px-1  w-100  bg-light border-bottom-0">
                                            <p class="mb-0 w-100"> {{ size.size }}</p>
                                        </div>
                                        <div class="w-100 border px-1">
                                            <p class="mb-0 w-100"> {{ size.price }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-end ms-2">
                                    <button class="  btn btn-sm btn-outline-danger" @click="deleteSize(index)"><i
                                            class="bi bi-trash"></i></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
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
    data() {
        return {
            profile: {
                size: '',
                price: '',
                position: ''
            },
            sizes: [],
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
        saveSize(event) {
            event.preventDefault();
            if (this.profile.size && this.profile.price) {
                const newSize = { ...this.profile };

                // If position is provided, add the new size at the specified position
                if (newSize.position !== null && newSize.position !== undefined && newSize.position !== '') {
                    const position = parseInt(newSize.position) - 1; // Subtract 1 from the position to start from 1
                    if (position >= 0 && position < this.sizes.length) { // Check if position is between 0 and sizes.length - 1
                        this.sizes.splice(position, 0, newSize);
                    } else {
                        // If position is out of bounds, add the new size at the end
                        this.sizes.push(newSize);
                    }
                } else {
                    // If position is not provided, add the new size at the end
                    this.sizes.push(newSize);
                }

                this.resetSizeForm();
            } else {
                alert('Please enter a size and price');
            }
        },
        resetSizeForm() {
            this.profile = {
                size: '',
                price: ''
            };
        },
        deleteSize(index) {
            this.sizes.splice(index, 1);
        },
    }
}
</script>

<style lang="scss" scoped></style>