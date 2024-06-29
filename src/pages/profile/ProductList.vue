<template>
    <div>
        <RouterLink to="/create-product">
            <div class="mx-1 btn btn-outline-primary">
                <i class="bi bi-plus-lg fs-4"></i>
            </div>
        </RouterLink>
        <div v-if="products.length === 0">No products available</div>
        <div class="d-flex justify-content-between border-bottom" v-for="(product, index ) in products" :key="index"
            @click="editProduct(product)">
            <div class="d-flex justify-content-between p-2">
                <div>
                    <img :src="product.img" class="border rounded"
                        style="object-position: top; object-fit: cover; height: 60px; width: 60px;">
                </div>
                <p class="mb-0 truncate ms-2"> {{ product.name }}fsdf jkhsd jahsdjh saldkj laksjd lkajds
                    kalsdj aslkdj</p>
                <p class="mb-0">₹{{ product.price }}</p>
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
                    id: 1,
                    name: 'Sheer Pullover T-shirt',
                    img: 'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                    price: 2300,
                    unit: 12,
                    moq: 10,
                    option: [],
                    range: [],
                },
                {
                    id: 2,
                    name: 'Black Top',
                    img: 'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                    price: 799,
                    unit: 12,
                    moq: 10,
                    option: [],
                    range: [],
                },
                {
                    id: 3,
                    name: 'Sheer Pullover T-shirt',
                    img: 'https://img101.urbanic.com/v1/goods-pic/4f8bd334d26b4144bca22a09f38bc28fUR_w750_q90.webp',
                    price: 2300,
                    unit: 12,
                    moq: 10,
                    option: [],
                    range: [],
                },
                {
                    id: 4,
                    name: 'Black Top',
                    img: 'https://img101.urbanic.com/v1/goods-pic/286e3f3c7b2541d681460f61ea4bb4aaUR_w360_q85.webp',
                    price: 799,
                    unit: 12,
                    moq: 10,
                    option: [],
                    range: [],
                },
            ],
        }
    },
    methods: {
        editProduct(product) {
            this.$router.push({ name: 'EditProduct', params: { id: product.id } });

        }
    }

}
</script>

<style lang="scss" scoped></style>