<template>
<div class="brandText container">
    <h1>Collections</h1>
    <div class="row row-cols-3 row-cols-md-6 g-1">
        <div class="col" v-for="(collection, key) in collections" :key="key">
            <div class="position-relative">
                <img :src="collection.img" alt="" data-bs-toggle="modal" data-bs-target="#collectionModal"
                    :data-bs-collectionId="collection.id"
                    style="object-position: top; object-fit: cover; width: 100%; height: 150px;">
                <div class="position-absolute top-0 start-0 m-2 ms-0" style="font-size: 12px;">
                    <span class='text-white bg-danger px-1 rounded-end-3'>₹{{ collection.price }}</span>
                </div>
            </div>
        </div>
    </div>
</div>
    <CollectionModal :collection="collections" />
</template>
<script>
import CollectionModal from "@/components/business-site/CollectionModal.vue";
export default {
    name: 'CollectionSection',
    components: {
        CollectionModal,
    },
    data() {
        return {
            collections: [
                {
                    id: 3423,
                    name: 'Cutout Jacquard Wide Leg Jeans with Rhinestone',
                    img: 'https://img101.urbanic.com/v1/goods-pic/22d804d0a5e44c3aa26aab2f0c81e6e0UR_w1440_q90.webp',
                    options: [
                        "https://img101.urbanic.com/v1/goods-pic/22d804d0a5e44c3aa26aab2f0c81e6e0UR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/c63d7db92ce44d4b8f2412e264528d05UR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/6127ffa148d949e7afe694b522268d4fUR_w1440_q90.webp",
                    ],
                    price: '1200',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                    dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                },
                {
                    id: 2343242,
                    name: "Jumpsuit",
                    img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                    options: [
                        "https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/94c0f21ca7154c0aa9fdbfd3933432a5UR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/6764a34771dc424dab6242745619af3bUR_w1440_q90.webp"

                    ],
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '990',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                },
                {
                    id: 32342343,
                    name: "Wide Leg Pants",
                    img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                    options: [
                        "https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/91f80499cc694821a31371821c8cccaeUR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/86537f4572e04e1ab25b03ae81ea7257UR_w1440_q90.webp"

                    ],
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1890',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                },
                {
                    id: 4234234,
                    name: "Knotted Shirt Dress",
                    img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    options: [
                        "https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/e45c5576bb5f4889b91f3a9744aa4f42UR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/6cf6e008117740e5bf84156c9b432c92UR_w1440_q90.webp"

                    ],
                    price: '1790',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                },
                {
                    id: 545654,
                    img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                    name: "Color Block Shimmer Top",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    options: [
                        "https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/3489771b71d04e4ca2ce02a19557512bUR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/7b658cae5d9c4e468e82c8a6443df69cUR_w1440_q90.webp"

                    ],
                    price: '3490',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                },
                {
                    id: 66524524,
                    img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                    name: "Linen Blend Cropped Blazer",
                    options: [
                        "https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/bf00caad3b9e4e16b150c65d1b741c80UR_w1440_q90.webp",
                        "https://img101.urbanic.com/v1/goods-pic/bd890ae22a41498b873e0265ad2464e5UR_w1440_q90.webp"

                    ],
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1590',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                }
            ],
        }
    },
}
</script>