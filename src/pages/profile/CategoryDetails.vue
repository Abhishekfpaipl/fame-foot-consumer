<template>
    <TopNav />
    <div class="container-fluid position-fixed w-100 bg-light" style="z-index: 99;top: 58px;">
        <div class="row border py-3 px-2">
            <div class="col-12 d-flex gap-2 align-items-center">
                <i class="bi bi-chevron-left" @click=goback()></i>
                <span class="text-capitalize">{{ pageName }}</span>
            </div>

        </div>
    </div>
    <div class="container" style="padding-top: 140px;">
        <h2>Add Business Category</h2>
        <p>Choose the right business categories so your customer can easily find you</p>

        <div class="row">
            <div class="col-12">
                <div class="card px-3">fq
                    <div class="input-group my-3">
                        <input type="text" class="form-control" placeholder="Type Business Category"
                            v-model="searchTerm" @keyup.enter="addCategory">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary rounded-0" type="button" @click="addCategory">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>

                    <div v-if="filteredCategories.length > 0" class="mb-3">
                        <h5>Search Results:</h5>
                        <button v-for="category in filteredCategories" :key="category"
                            class="btn btn-outline-primary me-2 mb-2" @click="selectCategory(category)">
                            {{ category }}
                        </button>
                    </div>

                    <div v-if="selectedCategories.length > 0" class="mb-3">
                        <h5>Selected Categories:</h5>
                        <button v-for="category in selectedCategories" :key="category"
                            class="btn btn-primary me-2 mb-2">
                            {{ category }}
                            <span @click="removeCategory(category)" class="ms-2">&times;</span>
                        </button>
                    </div>

                    <div v-if="suggestedCategories.length > 0" class="mb-3">
                        <h5>Suggested Categories:</h5>
                        <button v-for="category in suggestedCategories" :key="category"
                            class="btn btn-outline-secondary me-2 mb-2" @click="selectCategory(category)">
                            {{ category }}
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn btn-dark w-100 my-2" @click="saveAndContinue">
            Save and Continue
            <i class="bi bi-arrow-right"></i>
        </button>
    </div>
</template>

<script>
import TopNav from "@/components/profile/TopNav.vue";

export default {
    name: "CategoryDetails",
    components: {
        TopNav
    },
    data() {
        return {
            searchTerm: '',
            selectedCategories: [],
            allCategories: ['Online Websites', 'Online Websites For Business Loan', 'Opticians', 'Eyeglass Dealers'],
            suggestedCategories: ['Opticians', 'Eyeglass Dealers'],
            pageName: '',
        }
    },
    mounted() {
        let path = this.$route.path;
        path = path.replace(/^\/|\/$/g, '');
        path = path.replace(/-/g, ' ');
        this.pageName = path;
        console.log(this.pageName);
    },
    computed: {
        filteredCategories() {
            return this.allCategories.filter(category =>
                category.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
                !this.selectedCategories.includes(category)
            );
        }
    },
    methods: {
        addCategory() {
            if (this.searchTerm && !this.selectedCategories.includes(this.searchTerm)) {
                this.selectedCategories.push(this.searchTerm);
                this.searchTerm = '';
            }
        },
        selectCategory(category) {
            if (!this.selectedCategories.includes(category)) {
                this.selectedCategories.push(category);
            }
        },
        removeCategory(category) {
            this.selectedCategories = this.selectedCategories.filter(c => c !== category);
        },
        saveAndContinue() {
            // Implement save functionality here
            console.log('Selected categories:', this.selectedCategories);
            this.$router.push('/dashboard')
        },
        goback() {
            window.history.back();
        },
    }
}
</script>

<style scoped></style>