<template>
    <TopNav />
    <div>
        <div class="container-fluid position-fixed w-100 bg-light" style="z-index: 99;top: 58px;">
            <div class="row border py-3 px-2">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div class="d-flex gap-2 align-items-center">
                        <i class="bi bi-chevron-left" @click=goback()></i>
                        <span class="text-capitalize">{{ pageName }}</span>
                    </div>
                    <i class="bi bi-plus btn border" data-bs-toggle="offcanvas" data-bs-target="#createShowcase"
                        aria-controls="createShowcase"></i>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="createShowcase" aria-labelledby="createShowcaseLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="createShowcaseLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation border p-2 py-4">
                    <ImageUploadBox @image="handleImage" />
                    <div class="w-100 form-floating mt-0">
                        <input type="text" class="form-control" placeholder="" v-model="name" required>
                        <label for="floatingInput" class="text-muted ms-2">Name</label>
                    </div>
                    <div class="w-100 form-floating mt-2">
                        <input type="text" class="form-control" placeholder="Mobile" v-model="id" required>
                        <label class="ms-2 text-muted">Approver Id</label>
                    </div>
                    <div class="w-100 form-floating mt-2">
                        <input type="date" class="form-control" placeholder="Mobile" v-model="date" required>
                        <label class="ms-2 text-muted">Date</label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-dark py-2 fs-5 w-100 rounded-0" data-bs-dismiss="offcanvas"
                            type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="container" style="padding-top: 140px;">

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
                <div class="col " v-for="(product, index) in showcase" :key="index">
                    <div class="border position-relative">
                        <div v-if="product.image" class="card-img-container">
                            <img :src="product.image" class="card-img-top rounded-0" alt="..."
                                style="object-position: top; object-fit: cover; width: 100%; height: 250px;">
                        </div>

                        <div v-else class=" bg-light d-flex justify-content-center align-items-center"
                            style="width: 100%; height: 250px;">
                            <i class="bi bi-shop-window fs-1 rounded border px-4 py-2 text-muted border"></i>
                        </div>
                        <div class="d-flex justify-content-between w-100 align-items-center position-absolute top-0">

                            <span class="text-white bg-dark px-1 rounded-end-3 smaller">
                                {{ product.date }}
                            </span>

                            <div class="d-flex flex-column">
                                <span class="text-white px-1 wh-40 rounded-circle mt-2 me-2"
                                    style="background-color: #3a3c3d7a !important">
                                    <i class="bi bi-trash"></i>
                                </span>
                                <span class="text-white px-1 wh-40 rounded-circle mt-2 me-2"
                                    style="background-color: #3a3c3d7a !important">
                                    <i class="bi bi-pencil-square"></i>
                                 </span>
                            </div>

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
                        <div class="d-flex justify-content-between align-items-end p-2 pb-0 pe-0">
                            <div class="d-flex gap-2 align-items-start">
                                <img :src="product.img" class="rounded" alt=""
                                    style="min-width:60px; height: 60px;object-fit: cover;object-position: top;">
                                <small class="text-ellipsis3 text-start">The Institute of Chartered Accountants of India
                                    The Institute of Chartered Accountants of India </small>
                            </div>
                            <span :class="product.iconColor" class="px-1 rounded-start-3 text-white">
                                <i :class="product.icon"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <BottomNav />
</template>
<script>
import ImageUploadBox from "@/components/ImageUpload.vue";
import BottomNav from "@/components/profile/BottomNav.vue"
import TopNav from "@/components/profile/TopNav.vue";
export default {
    components: {
        BottomNav,
        TopNav,
        ImageUploadBox,
    },
    data() {
        return {
            pageName: '',
            uploadedImageUrl: '',
            name: '',
            id: '',
            date: '',
            showcase: [
                {
                    id: 3423,
                    likes: 45,
                    price: '1200',
                    date: "22 July 24",
                    dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!',
                    icon: 'bi bi-exclamation',
                    iconColor: 'bg-primary',
                },
                {
                    id: 2343242,
                    likes: 72,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '990',
                    icon: 'bi bi-x',
                    iconColor: 'bg-danger',
                },
                {
                    id: 32342343,
                    likes: 38,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1890',
                    icon: 'bi bi-check',
                    iconColor: 'bg-success',
                },
                {
                    id: 4234234,
                    likes: 7,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1790',
                    icon: 'bi bi-exclamation',
                    iconColor: 'bg-primary',
                },
                {
                    id: 545654,
                    likes: 98,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '3490',
                    icon: 'bi bi-x',
                    iconColor: 'bg-danger',
                },
                {
                    id: 66524524,
                    likes: 92,
                    date: "22 July 24",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1590',
                    icon: 'bi bi-check',
                    iconColor: 'bg-success',
                },
                {
                    id: 3423,
                    likes: 45,
                    date: "22 July 24",
                    name: "Degree The Institute of Chartered Accountants of India",
                    image: 'https://img101.urbanic.com/v1/703c1c85d9a04f03a11294de9aa4d46f.webp',
                    price: '1200',
                    dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!',
                    icon: 'bi bi-exclamation',
                    iconColor: 'bg-primary',
                },
                {
                    id: 2343242,
                    likes: 72,
                    name: "Degree The Institute of Chartered Accountants of India",
                    date: "22 July 24",
                    icon: 'bi bi-x',
                    iconColor: 'bg-danger',
                    image: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '990',
                },
                {
                    id: 32342343,
                    likes: 38,
                    name: "Degree The Institute of Chartered Accountants of India",
                    date: "22 July 24",
                    icon: 'bi bi-check',
                    iconColor: 'bg-success',
                    image: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1890',
                },
                {
                    id: 4234234,
                    likes: 7,
                    name: "Degree The Institute of Chartered Accountants of India",
                    date: "22 July 24",
                    icon: 'bi bi-exclamation',
                    iconColor: 'bg-primary',
                    image: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1790',
                },
                {
                    id: 545654,
                    name: "Degree The Institute of Chartered Accountants of India",
                    date: "22 July 24",
                    icon: 'bi bi-x',
                    iconColor: 'bg-danger',
                    image: 'https://img101.urbanic.com/v1/goods-pic/d6f7b633a1c448f9a43e8e3da53b45d3UR_w1440_q90.webp',
                    likes: 98,
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '3490',
                },
                {
                    id: 66524524,
                    image: 'https://img101.urbanic.com/v1/goods-pic/13c18357266840abb92a6f8e8a0bc52dUR_w1440_q90.webp',
                    likes: 92,
                    date: "22 July 24",
                    icon: 'bi bi-x',
                    iconColor: 'bg-danger',
                    name: "Degree The Institute of Chartered Accountants of India",
                    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam natus fugiat laudantium suscipit veritatis numquam deserunt quasi provident.",
                    price: '1590',
                }
            ],
        }
    },
    mounted() {
        let path = this.$route.path;
        path = path.replace(/^\/|\/$/g, '');
        path = path.replace(/-/g, ' ');
        this.pageName = path;
        console.log(this.pageName);
    },
    methods: {
        goback() {
            window.history.back();
        },

        handleImage(imageUrl) {
            this.uploadedImageUrl = imageUrl;
            console.log("Uploaded image URL:", imageUrl);
        },
        submitQuery() {
            let imageUrl = this.uploadedImageUrl.startsWith('blob:')
                ? this.uploadedImageUrl.replace('blob:', '')
                : this.uploadedImageUrl;

            let data = {
                id: this.id,
                name: this.name,
                date: this.date,
                image: imageUrl,
            }
            this.showcase.push(data)
            console.log("Form submitted" + data.id, data.name, data.date, data.image);
            this.id = '',
                this.name = '',
                this.date = '',
                this.uploadedImageUrl = ''
        },
    }
}
</script>
<style lang="">

</style>