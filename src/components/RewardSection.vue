<template>
    <div class="container">
        <div class="d-flex overflow-x-scroll gap-3" style="white-space: nowrap;" id="scroll">
            <div class="" v-for="(image, index) in images" :key="index" @click="selectImage(image)">
                <img :src="image.thumbnail" class="" style="width: 80px;">
            </div>
        </div>
        <div class="row pt-4 ">
            <div class="col-12">
                <div v-if="selectedImage">
                    <img :src="selectedImage.thumbnail" class="img-fluid" style="height: 600px; object-fit: contain;">
                </div>
                <div v-else>
                    <p>Please select an image</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/36e2a81c9e3348cfa2187d434f2c2379UR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/5bda5323bbeb417e9bacc64bdc6e945cUR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/aaa2dc38e1bc4e06a5797a4464334001UR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/8578182f6d5e4aab85f3ad043afaf921UR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/6b76cdcaa6bb4ef9a61efc20ed76d981UR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/6cc4429416c444e986cce9081419439bUR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/38a9f23844304c9791f36d8d17dd434dUR_w1440_q90.webp', },
                { thumbnail: 'https://img101.urbanic.com/v1/goods-pic/0895a5151f614a8f9a9a03496223f935UR_w1440_q90.webp', },
            ],
            selectedImage: null
        }
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        }
    }
}
</script>

<style scoped></style>