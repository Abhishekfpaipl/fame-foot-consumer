<template>
    <div class="my-3 pb-3">
        <div class="container">
            <h3 class="text-center bill"><span class="fs-2">~ Business ~</span></h3>
            <div>
                <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
                    <!-- <p class="fs-3 mb-0 me-3">Show:</p> -->
                    <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                        <li class="nav-item border rounded" role="presentation" v-for="(price, index) in pricing"
                            :key="index">
                            <div class="d-flex justify-content-center align-items-center nav-link"
                                style=" height: 60px;" :class="{ 'active': index === activeTabIndex }"
                                :id="'tab-' + index" data-bs-toggle="pill" :data-bs-target="'#content-' + index"
                                role="tab" :aria-controls="'content-' + index" :aria-selected="index === activeTabIndex"
                                @click="activeTabIndex = index">
                                {{ price.name }}
                            </div>
                        </li>
                    </div>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="input-group border mb-3">
                        <input type="search" placeholder="Search" v-model="searchTerm"
                            class="form-control bg-light border-0" ref="searchInput" @keyup.enter="search">
                        <button class="btn btn-dark rounded-0" type="button" id="button-addon2"><i class="bi bi-search"
                                @click="search"></i></button>
                    </div>

                    <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }"
                        v-for="(price, index) in pricing" :key="index" :id="'content-' + index" role="tabpanel"
                        :aria-labelledby="'tab-' + index" tabindex="0">
                        <div class="row g-2">
                            <div v-if="price.design === 0" class="col-12">
                                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
                                    <div class="col" v-for="(faq, index) in filteredFaqs(price.plans)"
                                        :key="index">
                                        <div class="border bg-light rounded-0 position-relative p-2 py-3" type="button"
                                            data-bs-toggle="collapse" :data-bs-target="'#collapseExample' + index"
                                            aria-expanded="false" :aria-controls="'collapseExample' + index"
                                            style="height: 160px; width: 160px;">
                                            <div class="text-ellipsis5">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                                                doloremque
                                                modi
                                                sit commodi ex iste odit hic tempore, recusandae eos saepe numquam
                                                minima
                                                beatae
                                                voluptatum ut nemo fugit dolores quaerat quae placeat aperiam eaque.
                                                Quasi
                                                sit
                                                dolorum illo accusantium tempora voluptatum quibusdam inventore ratione,
                                                explicabo
                                            </div>
                                            <div class="position-absolute top-0 start-0 ms-0" style="font-size: 12px;">
                                                <span class='text-white bg-danger px-1 rounded-end-3'>₹ 1500</span>
                                            </div>
                                        </div>
                                        <div class="collapse" :id="'collapseExample' + index"
                                            style="height: 160px; width: 160px;">
                                            <button class="mt-2 btn btn-success rounded-0 w-100" @click="enquiry(faq)">
                                                <i class="bi bi-whatsapp me-2 "></i>
                                                <span>Enquiry Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mt-4">
                                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
                                        <div class="col" v-for="(product, key) in price.products" :key="key">
                                            <div class="border position-relative" data-bs-toggle="collapse"
                                                :data-bs-target="'#enquiry' + key" aria-expanded="false"
                                                :aria-controls="'enquiry' + key">
                                                <img :src="product.img" alt=""
                                                    style="object-position: top; object-fit: cover; width: 160px; height: 160px;">
                                                <div v-if="product.price"
                                                    class="position-absolute top-0 start-0 m-2 ms-0"
                                                    style="font-size: 12px;">
                                                    <span class='text-white bg-danger px-1 rounded-end-3'>₹{{
                                                        product.price }}</span>
                                                </div>
                                                <!-- <div
                                                class="position-absolute top-0 end-0 wh-40 rounded-circle bg-success px-2 p-1">
                                                <i class="bi bi-whatsapp text-white"></i>
                                            </div> -->
                                                <p v-if="product.name" class="smaller text-start px-2 text-ellipsis2">{{
                                                    product.name }}</p>
                                            </div>
                                            <div class="collapse m-2" :id="'enquiry' + key">
                                                <button class="btn btn-success rounded-0 w-100"
                                                    @click="enquiry(product)">
                                                    <i class="bi bi-whatsapp me-2 "></i>
                                                    <span>Enquiry Now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-show="price.design === 1" class="col-md-2 col-6"
                                v-for="(faq, index) in filteredFaqs(price.plans)" :key="index">
                                <div class="border rounded-0 position-relative p-2 py-3" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="'#collapseExample' + index"
                                    aria-expanded="false" :aria-controls="'collapseExample' + index"
                                    style="height: 160px; width: 160px;">
                                    <div class="text-ellipsis5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                                        doloremque
                                        modi
                                        sit commodi ex iste odit hic tempore, recusandae eos saepe numquam minima
                                        beatae
                                        voluptatum ut nemo fugit dolores quaerat quae placeat aperiam eaque. Quasi
                                        sit
                                        dolorum illo accusantium tempora voluptatum quibusdam inventore ratione,
                                        explicabo
                                    </div>
                                    <div class="position-absolute top-0 start-0 ms-0" style="font-size: 12px;">
                                        <span class='text-white bg-danger px-1 rounded-end-3'>₹ 1500</span>
                                    </div>
                                </div>
                                <div class="collapse" :id="'collapseExample' + index"
                                    style="height: 160px; width: 160px;">
                                    <button class="mt-2 btn btn-success rounded-0 w-100" @click="enquiry(faq)">
                                        <i class="bi bi-whatsapp me-2 "></i>
                                        <span>Enquiry Now</span>
                                    </button>
                                </div>
                            </div>


                            <div v-if="price.design === 2" class="col-12">
                                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
                                    <div class="col" v-for="(product, key) in price.products" :key="key">
                                        <div class="position-relative" data-bs-toggle="collapse"
                                            :data-bs-target="'#enquiry' + key" aria-expanded="false"
                                            :aria-controls="'enquiry' + key">
                                            <img :src="product.img" alt=""
                                                style="object-position: top; object-fit: cover; width: 160px; height: 160px;">
                                            <div v-if="product.price" class="position-absolute top-0 start-0 m-2 ms-0"
                                                style="font-size: 12px;">
                                                <span class='text-white bg-danger px-1 rounded-end-3'>₹{{
                                                    product.price }}</span>
                                            </div>
                                            <!-- <div
                                                class="position-absolute top-0 end-0 wh-40 rounded-circle bg-success px-2 p-1">
                                                <i class="bi bi-whatsapp text-white"></i>
                                            </div> -->
                                            <p v-if="product.name" class="smaller text-start px-2 text-ellipsis2">{{
                                                product.name }}</p>
                                        </div>
                                        <div class="collapse m-2" :id="'enquiry' + key">
                                            <button class="btn btn-success rounded-0 w-100" @click="enquiry(product)">
                                                <i class="bi bi-whatsapp me-2 "></i>
                                                <span>Enquiry Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="filteredFaqs(price.plans).length === 0" class="col-12">
                                <p class="text-center">No results found.</p>
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
    name: "BusinessSection",
    data() {
        return {
            pricing: [
                {
                    id: 620,
                    name: "All",
                    design: 0,
                    products: [
                        {
                            id: 3423,

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
                    plans: [
                        {
                            question: " Can i make whatsApp communication from saleswik CRM?",
                            answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                        },
                        {
                            question: "Is Saleswik CRM gives alert of timely followups?",
                            answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                        },
                        {
                            question: "Can I sync my call log leads to saleswik CRM?",
                            answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                        },
                        {
                            question: "Is my data secured at saleswik CRM?",
                            answer: "Yes, your data is completely safe, and important credentails are encripted."
                        },
                    ]
                },
                {
                    id: 622,
                    name: "Without image",
                    design: 1,
                    products: [
                        {
                            id: 3423,

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
                    plans: [
                        {
                            question: " Can i make whatsApp communication from saleswik CRM?",
                            answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                        },
                        {
                            question: "Is Saleswik CRM gives alert of timely followups?",
                            answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                        },
                        {
                            question: "Can I sync my call log leads to saleswik CRM?",
                            answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                        },
                        {
                            question: "Is my data secured at saleswik CRM?",
                            answer: "Yes, your data is completely safe, and important credentails are encripted."
                        },
                    ]
                },
                {
                    id: 62,
                    name: "Image with price",
                    design: 2,
                    products: [
                        {
                            id: 3423,

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
                    plans: [
                        {
                            question: " Can i make whatsApp communication from saleswik CRM?",
                            answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                        },
                        {
                            question: "Is Saleswik CRM gives alert of timely followups?",
                            answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                        },
                        {
                            question: "Can I sync my call log leads to saleswik CRM?",
                            answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                        },
                        {
                            question: "Is my data secured at saleswik CRM?",
                            answer: "Yes, your data is completely safe, and important credentails are encripted."
                        },
                    ]
                },
                {
                    id: 1,
                    name: "Image with name",
                    design: 2,
                    products: [
                        {
                            id: 3423,
                            name: 'Cutout Jacquard Wide Leg Jeans with Rhinestone',
                            img: 'https://img101.urbanic.com/v1/goods-pic/22d804d0a5e44c3aa26aab2f0c81e6e0UR_w1440_q90.webp',
                            options: [
                                "https://img101.urbanic.com/v1/goods-pic/22d804d0a5e44c3aa26aab2f0c81e6e0UR_w1440_q90.webp",
                                "https://img101.urbanic.com/v1/goods-pic/c63d7db92ce44d4b8f2412e264528d05UR_w1440_q90.webp",
                                "https://img101.urbanic.com/v1/goods-pic/6127ffa148d949e7afe694b522268d4fUR_w1440_q90.webp",
                            ],

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

                            moq: '12',
                            colors: ['red', 'blue', 'green'],
                            sizes: ['small', 'medium', 'large'],
                        }
                    ],
                    plans: [
                        {
                            question: "What does a CRM system do ?",
                            answer: "At its core, the CRM system is designed to manage communications with customers and align all stakeholders involved in interactions with them. However, CRM systems have evolved to perform complex tasks like automating processes, setting up workflows, tracking all conversations and using all the sales and marketing data to derive meaningful reports."
                        },
                        {
                            question: "Why is CRM important for marketers?",
                            answer: "With CRM, marketers can check the performance of their marketing sources, evaluate touchpoints, and more. A CRM helps marketers better understand customers and tune their messaging accordingly. Marketers can also personalize their messages using lead details captured in the CRM platform."
                        },
                        {
                            question: "What is CRM software used for?",
                            answer: "Aligning teams and automating customer-facing processes. Standardizing sales processes and automating them. Managing customer tickets. Tracking the performance of various marketing sources. Reporting and analytics"
                        },
                        {
                            question: "Why is CRM important in sales?",
                            answer: "Because sales reps pursue many leads, CRM plays a significant role in organizing them as per their stages in the sales pipeline. It also helps them keep track of interactions with prospects, schedule meetings, set reminders, and more."
                        },
                    ]
                },
                {
                    id: 1,
                    name: "Image with name and price",
                    design: 2,
                    products: [
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
                    plans: [
                        {
                            question: "What does a CRM system do ?",
                            answer: "At its core, the CRM system is designed to manage communications with customers and align all stakeholders involved in interactions with them. However, CRM systems have evolved to perform complex tasks like automating processes, setting up workflows, tracking all conversations and using all the sales and marketing data to derive meaningful reports."
                        },
                        {
                            question: "Why is CRM important for marketers?",
                            answer: "With CRM, marketers can check the performance of their marketing sources, evaluate touchpoints, and more. A CRM helps marketers better understand customers and tune their messaging accordingly. Marketers can also personalize their messages using lead details captured in the CRM platform."
                        },
                        {
                            question: "What is CRM software used for?",
                            answer: "Aligning teams and automating customer-facing processes. Standardizing sales processes and automating them. Managing customer tickets. Tracking the performance of various marketing sources. Reporting and analytics"
                        },
                        {
                            question: "Why is CRM important in sales?",
                            answer: "Because sales reps pursue many leads, CRM plays a significant role in organizing them as per their stages in the sales pipeline. It also helps them keep track of interactions with prospects, schedule meetings, set reminders, and more."
                        },
                    ]
                },
                // {
                //     id: 6,
                //     name: "Features",
                //     plans: [
                //         {
                //             question: " Can i make whatsApp communication from saleswik CRM?",
                //             answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                //         },
                //         {
                //             question: "Is Saleswik CRM gives alert of timely followups?",
                //             answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                //         },
                //         {
                //             question: "Can I sync my call log leads to saleswik CRM?",
                //             answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                //         },
                //         {
                //             question: "Is my data secured at saleswik CRM?",
                //             answer: "Yes, your data is completely safe, and important credentails are encripted."
                //         },
                //     ]
                // },
                // {
                //     id: 5,
                //     name: "Account",
                //     plans: [
                //         {
                //             question: " Can i make whatsApp communication from saleswik CRM?",
                //             answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                //         },
                //         {
                //             question: "Is Saleswik CRM gives alert of timely followups?",
                //             answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                //         },
                //         {
                //             question: "Can I sync my call log leads to saleswik CRM?",
                //             answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                //         },
                //         {
                //             question: "Is my data secured at saleswik CRM?",
                //             answer: "Yes, your data is completely safe, and important credentails are encripted."
                //         },
                //     ]
                // },
            ],
            searchTerm: '',
            activeTabIndex: 0
        };
    },
    methods: {
        filteredFaqs(plans) {
            if (!this.searchTerm) {
                return plans;
            }
            const term = this.searchTerm.toLowerCase();
            return plans.filter(faq =>
                faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
            );
        },
        enquiry(product) {
            console.log(product.name)
            const phoneNumber = '918826658501';
            const message = `Hello, I'm interested in ${product.name}. Please confirm`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

    },
    mounted() {
        this.$refs.searchInput.focus();
    }
};
</script>

<style scoped>
/* .accordion-button::after {
    display: none !important
}

.accordion-button:not(.collapsed) {
    color: black !important;
    background-color: transparent !important;
    box-shadow: none !important;
} */

.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;

}

.nav-link.active {
    background-color: black !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    /* border-radius: 2rem; */
    transform: scale(1.1);
}

/* Add any necessary styling here */
</style>
