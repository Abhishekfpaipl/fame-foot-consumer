<template>
    <DigitalCardNav :title="title"/>
    <div class="my-3 pb-3">
        <div class="container">
            <div>
                <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
                    <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                        <li class="nav-item border rounded" role="presentation"
                            v-for="(collection, index) in collections" :key="index">
                            <div class="d-flex justify-content-center align-items-center nav-link"
                                style=" height: 60px;" :class="{ 'active': index === activeTabIndex }"
                                :id="'tab-' + index" data-bs-toggle="pill" :data-bs-target="'#content-' + index"
                                role="tab" :aria-controls="'#content-' + index"
                                :aria-selected="index === activeTabIndex" @click="activeTabIndex = index">
                                {{ collection.name }}
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
                        v-for="(collection, index) in filteredCollections" :key="index" :id="'content-' + index"
                        role="tabpanel" :aria-labelledby="'tab-' + index" tabindex="0">
                        <div class="row g-2">
                            <div class="col-12">
                                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
                                    <div class="col" v-for="(product, productIndex) in collection.products"
                                        :key="productIndex">
                                        <div class="border position-relative" data-bs-toggle="collapse"
                                            :data-bs-target="'#productInfo' + productIndex" aria-expanded="false"
                                            :aria-controls="'productInfo' + productIndex">
                                            <img v-if="product.img" :src="product.img" alt=""
                                                style="object-position: top; object-fit: cover; width: 100%; height: 160px;" />
                                            <div v-else
                                                class=" bg-light d-flex justify-content-center align-items-center"
                                                style="width: 100%; height: 160px;">
                                                <i
                                                    class="bi bi-shop-window fs-1 rounded border px-4 py-2 text-muted border"></i>
                                            </div>
                                            <div v-if="product.price" class="position-absolute top-0 start-0 ms-0"
                                                style="font-size: 12px;">
                                                <span class="text-white bg-danger px-1 rounded-end-3">₹{{
                                                    product.price }}</span>
                                            </div>
                                            <div class="d-flex p-1">
                                                <div
                                                    class="w-75 d-flex flex-column justify-content-center align-items-start">
                                                    <div class="w-75">
                                                        <p v-if="product.name"
                                                            class="smaller text-start text-ellipsis2 mb-0 w-100">
                                                            {{ product.name }}
                                                        </p>
                                                        <p v-else class="smaller text-start text-ellipsis2 mb-0">
                                                            #{{ product.id }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    class="d-flex flex-column justify-content-center align-items-center w-25">
                                                    <i :class="product.liked ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up'"
                                                        @click="like(product)"></i>
                                                    <small class="smaller">{{ product.likes }}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="collapse m-2" :id="'productInfo' + productIndex">
                                            <button class="btn btn-success rounded-0 w-100" @click="enquiry(product)">
                                                <i class="bi bi-whatsapp me-2"></i>
                                                <span>Enquiry Now</span>
                                            </button>
                                        </div>
                                    </div>
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
import DigitalCardNav from '@/components/DigitalCardNav.vue'
export default {
    name: "BusinessSection",
    components: {
        DigitalCardNav,
    },
    data() {
        return {
            collections: [
                {
                    id: 620,
                    name: "All",
                    design: 0,
                    products: [
                        {
                            id: 3423,
                            likes: 45,
                            price: '1200',
                            dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                        },
                        {
                            id: 2343242,
                            likes: 72,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '990',
                        },
                        {
                            id: 32342343,
                            likes: 38,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1890',
                        },
                        {
                            id: 4234234,
                            likes: 7,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1790',
                        },
                        {
                            id: 545654,
                            likes: 98,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '3490',
                        },
                        {
                            id: 66524524,
                            likes: 92,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1590',
                        },
                        {
                            id: 3423,
                            likes: 45,
                            name: 'Cutout Jacquard Wide Leg Jeans with Rhinestone',
                            img: 'https://img101.urbanic.com/v1/703c1c85d9a04f03a11294de9aa4d46f.webp',
                            price: '1200',
                            dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                        },
                        {
                            id: 2343242,
                            likes: 72,
                            name: "Jumpsuit",
                            img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '990',
                        },
                        {
                            id: 32342343,
                            likes: 38,
                            name: "Wide Leg Pants",
                            img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1890',
                        },
                        {
                            id: 4234234,
                            likes: 7,
                            name: "Knotted Shirt Dress",
                            img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1790',
                        },
                        {
                            id: 545654,
                            name: "Color Block Shimmer Top",
                            img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                            likes: 98,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '3490',
                        },
                        {
                            id: 66524524,
                            img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                            likes: 92,
                            name: "Linen Blend Cropped Blazer",
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1590',
                        }
                    ],
                },
                {
                    id: 622,
                    name: "Without image",
                    design: 1,
                    products: [
                        {
                            id: 3423,
                            likes: 45,
                            price: '1200',
                            dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                        },
                        {
                            id: 2343242,
                            likes: 45,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '990',
                        },
                        {
                            id: 32342343,
                            likes: 45,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1890',
                        },
                        {
                            id: 4234234,
                            likes: 45,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1790',
                        },
                        {
                            id: 545654,
                            likes: 45,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '3490',
                        },
                        {
                            id: 66524524,
                            likes: 45,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1590',
                        }
                    ],
                },
                {
                    id: 62,
                    name: "Image with price",
                    design: 2,
                    products: [
                        {
                            id: 3423,
                            likes: 45,
                            img: 'https://img101.urbanic.com/v1/goods-pic/22d804d0a5e44c3aa26aab2f0c81e6e0UR_w1440_q90.webp',
                            price: '1200',
                            dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                        },
                        {
                            id: 2343242,
                            likes: 45,
                            img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '990',
                        },
                        {
                            id: 32342343,
                            likes: 45,
                            img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1890',
                        },
                        {
                            id: 4234234,
                            likes: 45,
                            img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1790',
                        },
                        {
                            id: 545654,
                            img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                            likes: 45,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '3490',
                        },
                        {
                            id: 66524524,
                            img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                            likes: 45,
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            price: '1590',
                        }
                    ],
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
                            likes: 45,
                            dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                        },
                        {
                            id: 2343242,
                            name: "Jumpsuit",
                            img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            likes: 45,
                        },
                        {
                            id: 32342343,
                            name: "Wide Leg Pants",
                            img: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            likes: 45,
                        },
                        {
                            id: 4234234,
                            name: "Knotted Shirt Dress",
                            img: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            likes: 45,
                        },
                        {
                            id: 545654,
                            img: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                            name: "Color Block Shimmer Top",
                            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                            likes: 45,
                        },
                        {
                            id: 66524524,
                            img: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                            name: "Linen Blend Cropped Blazer",
                            likes: 45,
                        }
                    ],
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
                },
            ],
            searchTerm: '',
            activeTabIndex: 0,
            title:'Collection'
        };
    },
    computed: {
        filteredCollections() {
            if (!this.searchTerm) {
                return this.collections;
            }
            const term = this.searchTerm.toLowerCase();
            return this.collections.map(collection => {
                const filteredProducts = collection.products.filter(product => {
                    return (
                        (product.name && product.name.toLowerCase().includes(term)) ||
                        (product.price && product.price.toLowerCase().includes(term)) ||
                        (product.id && product.id.toString().toLowerCase().includes(term)) ||
                        (product.likes && product.likes.toString().toLowerCase().includes(term))
                    );
                });
                return { ...collection, products: filteredProducts };
            });
        }
    },
    methods: {
        enquiry(product) {
            console.log(product.name)
            const phoneNumber = '918826658501';
            const message = `Hello, I'm interested in ${product.name}. Please confirm`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        },
        like(product) {
            if (product.liked) {
                product.likes--;
            } else {
                product.likes++;
            }
            product.liked = !product.liked;
        },

    },
    mounted() {
        this.$refs.searchInput.focus();
    }
};
</script>

<style scoped>
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
</style>
