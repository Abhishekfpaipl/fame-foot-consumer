<template>
    <div>
        <div class="">
            <div class="d-flex justify-content-between border-bottom" v-for="(collection, index) in collections"
                :key="index">
                <div class="d-flex p-2">
                    <div>
                        <img :src="collection.img" class="border rounded"
                            style="object-position: top; object-fit: cover; height: 60px; width: 60px;">
                    </div>
                    <h3 class="mb-0 ms-2">{{ collection.name }}</h3>
                </div>
            </div>

            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">{{ editingCollection ? 'Edit Collection' :
                        'Create Collection' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <form @submit.prevent="submitForm()">
                        <ImageUploadBox @image="image"></ImageUploadBox>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="assignee" placeholder="name@example.com"
                                v-model="form.name">
                            <label for="assignee">Collection Name</label>
                        </div>

                        <button type="submit" class="btn btn-dark w-100">{{ editingCollection ? 'Update' : 'Submit'
                            }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageUploadBox from '@/components/ImageUploadBox.vue'

export default {
    components: {
        ImageUploadBox,
    },
    data() {
        return {
            form: {
                name: '',
                parentImageUrl: '',
            },
            editingCollection: null,
            collections: [
                {
                    id: 1,
                    img: 'https://img101.urbanic.com/v1/goods-pic/3d61244a46284f94890650425d5ef27cUR_w1440_q90.webp',
                    name: 'Bottoms',

                },
                {
                    id: 2,
                    img: 'https://img101.urbanic.com/v1/goods-pic/e0488ae753074c1f80fddaa530154cc0UR_w1440_q90.webp',
                    name: 'Tops',
                },
                {
                    id: 3,
                    img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
                    name: 'T-shirts',
                },
            ],
        };
    },
    methods: {
        submitForm() {
            if (this.editingCollection) {
                // Update existing collection
                this.$store.dispatch('updateCollection', { id: this.editingCollection.id, data: this.form }).then(() => {
                    this.editingCollection = null;
                    this.form = {
                        name: '',
                        parentImageUrl: '',
                    };
                });
            } else {
                // Create new collection
                this.$store.dispatch('addToCollection', this.form).then(() => {
                    this.form = {
                        name: '',
                        parentImageUrl: '',
                    };
                });
            }
        },
        editCollection(collection) {
            this.editingCollection = collection;
            this.form = {
                name: collection.name,
                parentImageUrl: collection.img,
            };
        },
        image(value) {
            console.log(value)
            this.form.parentImageUrl = value
        }
    },
}
</script>

<style lang="scss" scoped></style>
