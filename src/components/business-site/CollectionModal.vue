<template>
    <div class="modal fade" id="collectionModal" tabindex="-1" aria-labelledby="collectionModalLabel"
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
                                        <nuxt-icon name="share" class="fs-5 text-center" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-2">

                            <h5 class="card-title">{{ activeProduct.name }}</h5>
                            <p class="card-text">{{ activeProduct.dis }}</p>
                            <div class="d-flex justify-content-between align-items-center px-2">
                                <div class="">
                                    <small class="text-uppercase">Price</small>
                                    <p class="mb-0 fw-bold">₹{{ activeProduct.price }}</p>
                                </div>
                                <button class="btn btn-dark w-50" @click="addToCart(activeProduct)">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CollectionModal",
    props: ["collection"],
    data() {
        return {
            activeProduct: {},
            publicPath: process.env.BASE_URL,
            content: "",
            selectedSize: null,
            currentColor: null,
            quantity: 1,
        };
    },
    async mounted() {
        this.setupModalEvent();
    },
    methods: {
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
        addToCart(product) {
            const data = {
                product_sid: product.sid,
                option_sid: this.currentColor,
                range_sid: this.selectedSize,
                quantity: this.quantity,
            };
            console.log(data);
            // this.$store.dispatch("LoggedInUserStore/addToCart", data);
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
    height: 0rem !important
}

/* Add your scoped styles here */
</style>