<template>
    <!-- <div class="modal fade" id="collectionModal" tabindex="-1" aria-labelledby="collectionModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-4">
                <div class="modal-body p-0">
                    <div class="card p-0">
                        <div class="card-header border-0 p-0">
                            <div :id="'productImages' + index" class="carousel slide d-md-none">
                                <div class="carousel-inner position-relative">
                                    <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                        :class="{ active: imgIndex === 0 }"
                                        v-for="(image, imgIndex) in activeProduct.options" :key="imgIndex">
                                        <img :src="image" class="card-img-top rounded-0" :alt="image.name"
                                            style="min-height: 100px; object-fit: cover;">
                                    </div>
                                    <div class="position-absolute end-0 m-2 wh-40 text-white rounded-circle"
                                        style="background-color: rgb(0 0 0 / 37%) !important; padding: 0 6px;"
                                        data-bs-dismiss="modal">
                                        <i class="bi bi-x fs-2"></i>
                                    </div>
                                    <div class="position-absolute end-0 bottom-0 m-2 wh-40 text-white rounded-circle"
                                        @click="share"
                                        style="background-color: rgb(0 0 0 / 37%) !important; padding: 0 6px;">
                                        <nuxt-icon name="share" />
                                    </div>
                                </div>
                                <div v-if="activeProduct.options" class="d-flex mt-2 p-2" id="scroll"
                                    style="overflow-x: scroll;">
                                    <button type="button" class="rounded p-0 border me-1"
                                        :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                        :class="{ active: imgIndex === 0 }"
                                        :aria-current="imgIndex === 0 ? true : false"
                                        v-for="(image, imgIndex) in activeProduct.options" :key="imgIndex">
                                        <img :src="image" class="rounded" :alt="image.name"
                                            style="width: 35px; height: 35px; object-fit: fill;">
                                    </button>
                                </div>
                            </div>

                            <div :id="'productImagesdk' + index" class="carousel slide d-md-flex d-none">
                                <div v-if="activeProduct.options" class="col-3 d-flex flex-column p-2" id="scroll"
                                    style="overflow-y: scroll; max-height: 500px;">
                                    <button type="button" class="rounded p-0 border my-1"
                                        style="width: 100px; height: 100px;"
                                        :data-bs-target="'#productImagesdk' + index" :data-bs-slide-to="imgIndex"
                                        :class="{ active: imgIndex === 0 }"
                                        :aria-current="imgIndex === 0 ? true : false"
                                        v-for="(image, imgIndex) in activeProduct.options" :key="imgIndex">
                                        <img :src="image" class="rounded" :alt="image.name"
                                            style="width: 100%; height: 100%; object-fit: contain;">
                                    </button>
                                </div>
                                <div class="carousel-inner position-relative">
                                    <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                        :class="{ active: imgIndex === 0 }"
                                        v-for="(image, imgIndex) in activeProduct.options" :key="imgIndex">
                                        <img :src="image" class="card-img-top" :alt="image.name"
                                            style="min-height: 100px; object-fit: cover;">
                                    </div>
                                    <div class="position-absolute end-0 m-2 text-white wh-40 rounded-circle px-1"
                                        data-bs-dismiss="modal" style="background-color: rgb(0 0 0 / 37%) !important;">
                                        <i class="bi bi-x fs-5"></i>
                                    </div>
                                    <div class="position-absolute end-0 bottom-0 m-2 text-white wh-40 rounded-circle px-1"
                                        @click="share" style="background-color: rgb(0 0 0 / 37%) !important;">
                                        <i class="bi bi-share fs-5"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i class="bi bi-pencil-square" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"></i>
                </div>
            </div>
        </div>
    </div> -->
    <div class="modal fade" id="collectionModal" aria-hidden="true" aria-labelledby="collectionModalLabel"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="collectionModalLabel">Edit Product</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body p-2">
                        <form @submit.prevent="saveProduct">
                            <ImageUploadBox @image="handleImage" />
                            <div class="form-floating my-3">
                                <input type="text" class="form-control" placeholder="" id="productCollection"
                                    v-model="activeProduct.collection">
                                <label for="productCollection" class="form-label">Collection</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="" id="productName"
                                    v-model="activeProduct.name">
                                <label for="productName" class="form-label">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" placeholder="" id="productPrice"
                                    v-model="activeProduct.price">
                                <label for="productPrice" class="form-label">Price</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="productDescription" placeholder="" rows="3"
                                    v-model="activeProduct.dis"></textarea>
                                <label for="productDescription" class="form-label">Description</label>
                            </div>
                            <button type="submit" class="btn btn-dark w-100">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageUploadBox from "@/components/ImageUpload.vue";
// import ImageUploadBox from "@/components/ImageUploadBox.vue";
export default {
    name: "QuickAdd",
    props: ["collection"],
    components: {
        ImageUploadBox,
    },
    data() {
        return {
            activeProduct: {},
            uploadedImageUrl: ''
        };
    },
    async mounted() {
        this.setupModalEvent();
    },
    methods: {
        handleImage(imageUrl) {
            this.uploadedImageUrl = imageUrl;
            console.log("Uploaded image URL:", imageUrl);
        },
        setupModalEvent() {
            const collectionModal = document.getElementById("collectionModal");
            if (collectionModal) {
                collectionModal.addEventListener("show.bs.modal", (event) => {
                    const button = event.relatedTarget; // Button that triggered the modal
                    const collectionId = button.getAttribute("data-bs-collectionId");
                    this.activeProduct = this.collection.find(
                        (collection) => collection.id == collectionId
                    );
                });
            }
        },
        saveProduct() {
            let imageUrl = this.uploadedImageUrl.startsWith('blob:')
                ? this.uploadedImageUrl.replace('blob:', '')
                : this.uploadedImageUrl;

            let data = {
                id: this.activeProduct.id,
                name: this.activeProduct.name,
                collection: this.activeProduct.collection,
                price: this.activeProduct.price,
                dis: this.activeProduct.dis,
                image: imageUrl,
            };

            console.log('Product saved:', data);
            this.$store.dispatch('editProduct', data)
                .then(() => {
                    console.log('Product successfully saved');
                    // Optionally, close the modal after saving the product
                    const modalElement = document.getElementById('collectionModalLabel');
                    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
                    modalInstance.hide();
                    this.uploadedImageUrl = '';
                })
                .catch(error => {
                    console.error('Error saving product:', error);
                });
        },
        addToCart(product) {
            const data = {
                product_sid: product.sid,
                option_sid: this.currentColor,
                range_sid: this.selectedSize,
                quantity: this.quantity,
            };
            this.$store.dispatch("LoggedInUserStore/addToCart", data);
        },
        share() {
            if (navigator.share) {
                navigator.share({
                    title: 'Share this content',
                    text: 'Check out this awesome content!',
                    url: window.location.href,
                }).then(() => {
                    console.log('Successful share');
                }).catch((error) => {
                    console.log('Error sharing', error);
                });
            } else {
                alert('Web Share API is not supported in your browser.');
            }
        },
    },
};
</script>

<style scoped>
#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.nuxt-icon svg {
    height: 0rem !important;
}

/* Add your scoped styles here */
</style>
