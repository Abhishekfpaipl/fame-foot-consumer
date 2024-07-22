<template>
    <div>
        <div class="container my-5" v-for="(service, index) in services" :key="index">
            <div class="d-flex justify-content-between justify-content-md-center align-items-center">
                <h1 class="text-start text-capitalize">{{ service.name }} </h1>
                <router-link :to="service.route"
                    class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                    <span>See More</span>
                    <img src="/img/travel/right-arrow.svg" style="width:20px;">
                </router-link>
            </div>
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 my-4 d-flex align-items-center">
                <div class="col" v-for="(product, productIndex) in products" :key="productIndex">
                    <div class="border position-relative">
                        <div v-if="product.img" class="card-img-container">
                            <img :src="product.img" class="card-img-top rounded-0" alt="..."
                                style="object-position: top; object-fit: cover; width: 100%;">

                        </div>
                        <div v-else class=" bg-light d-flex justify-content-center align-items-center"
                            style="width: 100%; height: 160px;">
                            <i class="bi bi-shop-window fs-1 rounded border px-4 py-2 text-muted border"></i>
                        </div>
                        <div v-if="product.price" class="position-absolute top-0 start-0 ms-0" style="font-size: 12px;">
                            <span class="text-white bg-danger px-1 rounded-end-3">₹{{
                                product.price }}</span>
                        </div>
                        <div class="d-flex p-1">
                            <div class="w-75 d-flex flex-column justify-content-center align-items-start">
                                <div class="w-75">
                                    <p v-if="product.name" class="smaller text-start text-ellipsis2 mb-0 w-100">
                                        {{ product.name }}
                                    </p>
                                    <p v-else class="smaller text-start text-ellipsis2 mb-0">
                                        #{{ product.id }}
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center w-25">
                                <i :class="product.liked ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up'"
                                    @click="like(product)"></i>
                                <small class="smaller">{{ product.likes }}</small>
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
    data() {
        return {
            services: [
                { route: "/", name: "Collection One", },
                { route: "/", name: "Collection Two", },
                { route: "/", name: "Collection Three", },
                { route: "/", name: "Collection Four", },
            ],

            products: [
                {
                    id: 3423,
                    name: 'Cutout Jacquard Wide Leg Jeans with Rhinestone',
                    img: 'https://img101.urbanic.com/v1/goods-pic/22d804d0a5e44c3aa26aab2f0c81e6e0UR_w1440_q90.webp',
                    likes: 45,
                    price: '1200',
                    dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                },
                {
                    id: 2343242,
                    name: "Jumpsuit",
                    img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                    likes: 45,
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '990',
                },
                {
                    id: 32342343,
                    name: "Wide Leg Pants",
                    img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                    likes: 45,
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1890',
                },
                {
                    id: 4234234,
                    name: "Knotted Shirt Dress",
                    img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    likes: 45,
                    price: '1790',
                },
                {
                    id: 545654,
                    img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                    name: "Color Block Shimmer Top",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    likes: 45,
                    price: '3490',
                },
                {
                    id: 66524524,
                    img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                    name: "Linen Blend Cropped Blazer",
                    likes: 45,
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1590',
                }
            ],
        }
    },
    methods: {
        enquiry(fair) {
            console.log(fair.title)
            const phoneNumber = '918318599577';
            const message = `Hello, I'm interested in ${fair.title}. Please confirm`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        },
    }
}
</script>
<style scoped>
.card-img-container {
    overflow: hidden;
    /* height: 200px; */
}

.card-img-top {
    transition: transform 0.3s ease;
}

.col:hover .card-img-top {
    transform: scale(1.1);
}
</style>
