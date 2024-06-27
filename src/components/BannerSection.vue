<template>
    <div>
        <div class="pt-5">
            <div class="d-md-flex d-none justify-content-evenly align-items-center w-100">
                <div class="d-flex align-items-center">
                    <TextStyle />
                </div>
            </div>
            <div class="d-md-none d-flex flex-column justify-content-center align-items-center w-100">
                <div class="d-flex align-items-center" style="font-size: 20px !important;">
                    <TextStyle />
                </div>
            </div>
            <div class="d-flex flex-column justify-content-center">
                <div class="w-100 pb-5 mt-4">
                    <div class="container d-md-flex d-block justify-content-between align-items-center">
                        <RouterLink to="/review-list" class="text-decoration-none w-100 rounded">
                            <div class="my-1 rounded-0 btn btn-light border py-2 w-100 d-flex justify-content-between">
                                <div class='d-flex'>
                                    <span class="fw-bold">Search by</span> &nbsp;
                                    <span class="text-secondary">{{ searchText }}</span>
                                </div>
                                <i class="bi bi-search"></i>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TextStyle from "@/components/TextStyle.vue";
export default {
    components: {
        TextStyle
    },
    data() {
        return {
            searchText: '',
            currentIndex: 0,
            words: ['City', 'Clothing', 'Categories', 'Top Retailer'],
        }
    },
    mounted() {
        this.rotateWords();
    },
    methods: {
        rotateWords() {
            setTimeout(() => {
                this.searchText = this.words[this.currentIndex];
                this.currentIndex++;
                if (this.currentIndex >= this.words.length) {
                    this.currentIndex = 0;
                }
                this.rotateWords();
            }, 1000);
        },
    }

}
</script>
<style lang="">

</style>