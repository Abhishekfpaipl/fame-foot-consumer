<template>
    <div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div class="col" v-for="(product, index) in products" :key="index">
                    <div class="border position-relative">
                        <div v-if="product.img" class="card-img-container">
                            <img :src="product.img" class="card-img-top rounded-0" alt="..."
                                style="object-position: top; object-fit: cover; width: 100%; height: 250px;">
                        </div>

                        <div v-else class=" bg-light d-flex justify-content-center align-items-center"
                            style="width: 100%; height: 250px;">
                            <i class="bi bi-shop-window fs-1 rounded border px-4 py-2 text-muted border"></i>
                        </div>
                        <div v-if="product.price" class="position-absolute top-0 start-0 ms-0" style="font-size: 12px;">
                            <span class="text-white bg-dark px-1 rounded-end-3">
                                {{ product.date }}
                            </span>
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
                        </div>
                        <div class="d-flex justify-content-between align-items-start p-2">
                            <div class="d-flex gap-2 align-items-start">
                                <img :src="product.img" class="rounded" alt=""
                                    style="min-width:60px; height: 60px;object-fit: cover;object-position: top;">
                                <small class="text-ellipsis3 text-start">The Institute of Chartered Accountants of India
                                    The Institute of Chartered Accountants of India </small>
                            </div>
                            <span :class="getClass(index)" class="px-1 rounded-start-3">
                                <i :class="getIconClass(index)"></i>
                            </span>
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
            products: [
                {
                    id: 3423,
                    likes: 45,
                    price: '1200',
                    date: "22 July 24",
                    dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                },
                {
                    id: 2343242,
                    likes: 72,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '990',
                },
                {
                    id: 32342343,
                    likes: 38,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1890',
                },
                {
                    id: 4234234,
                    likes: 7,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1790',
                },
                {
                    id: 545654,
                    likes: 98,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '3490',
                },
                {
                    id: 66524524,
                    likes: 92,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1590',
                },
                {
                    id: 3423,
                    likes: 45,
                    date: "22 July 24",
                    name: "Degree The Institute of Chartered Accountants of India",
                    img: 'https://img101.urbanic.com/v1/703c1c85d9a04f03a11294de9aa4d46f.webp',
                    price: '1200',
                    dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                },
                {
                    id: 2343242,
                    likes: 72,
                    name: "Degree The Institute of Chartered Accountants of India",
                    date: "22 July 24",
                    img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '990',
                },
                {
                    id: 32342343,
                    likes: 38,
                    name: "Degree The Institute of Chartered Accountants of India",
                    date: "22 July 24",
                    img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1890',
                },
                {
                    id: 4234234,
                    likes: 7,
                    name: "Degree The Institute of Chartered Accountants of India",
                    date: "22 July 24",
                    img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1790',
                },
                {
                    id: 545654,
                    name: "Degree The Institute of Chartered Accountants of India",
                    date: "22 July 24",
                    img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                    likes: 98,
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '3490',
                },
                {
                    id: 66524524,
                    img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                    likes: 92,
                    date: "22 July 24",
                    name: "Degree The Institute of Chartered Accountants of India",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1590',
                }
            ],

        }
    },
    methods: {
        getClass(index) {
            return index % 2 === 0 ? 'text-white bg-danger' : 'text-white bg-success';
        },
        getIconClass(index) {
            return index % 2 === 0 ? 'bi bi-x' : 'bi bi-check';
        }
    }
}
</script>
<style lang="">

</style>