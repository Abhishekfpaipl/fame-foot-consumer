<template>
    <div class=" ">
        <div class="form-floating my-2 ">
            <select v-model="localFilters.experience" class="form-select">
                <option value="">All</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="5">5 Years</option>
                <option value="10">10 Years or more</option>
            </select>
            <label class="form-label">
                Filter By Experience:
            </label>
        </div>
        <div class="form-floating my-2">
            <select v-model="localFilters.category" class="form-select">
                <option value="">All</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
            </select>
            <label class="form-label">
                Filter By Category:
            </label>
        </div>
        <div class="form-floating my-2">
            <select v-model="localFilters.collection" class="form-select">
                <option value="">All</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
            </select>
            <label class="form-label">
                Filter By Collection:
            </label>
        </div>
        <div class="my-2">
            <label class="form-label">Filter By reviews:</label>
            <div class="d-flex align-items-center">
                <input type="range" class="form-range" v-model="localFilters.reviews" min="0" max="100" step="10">
                <span class="ms-2">{{ localFilters.reviews }} +</span>
            </div>
        </div>
        <div class="my-2">
            <label class="form-label">Filter By Promoters:</label>
            <div class="d-flex align-items-center">
                <input type="range" class="form-range" v-model="localFilters.promoters" min="100" max="500" step="50">
                <span class="ms-2">{{ localFilters.promoters }} +</span>
            </div>
        </div>
        <div class="my-2">
            <p class="text-start text-muted mb-0">Filter by Rating:</p>
            <div class="d-flex flex-wrap">
                <div v-for="(rating, index) in ratings" :key="index">
                    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" class="btn-check" :id="rating.id" :autocomplete="rating.id"
                            v-model="rating.checked" />
                        <label class="btn btn-outline-dark rounded-0 text-capitalize" :for="rating.id">
                            {{ rating.id }} <i class="bi bi-star-fill"></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-2">
            <p class="text-start text-muted mb-0">Filter by State:</p>
            <div class="d-flex flex-wrap">
                <div v-for="(state, index) in states" :key="index">
                    <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" class="btn-check" :id="state.name" :autocomplete="state.name"
                            v-model="state.checked"/>
                        <label class="btn btn-outline-dark rounded-0 text-capitalize" :for="state.name">
                            {{ state.name }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['filters'],
    data() {
        return {
            localFilters: { ...this.filters },
            activeFilters: [],
            states: [
                { name: "delhi", checked: false },
                { name: "kolkata", checked: false },
                { name: "uk", checked: false },
            ],
            ratings: [
                { id: 'any', checked: false },
                { id: 3, checked: false },
                { id: 4, checked: false },
                { id: 5, checked: false },
            ],
        }
    },
    watch: {
        localFilters: {
            deep: true,
            handler(newFilters) {
                this.$emit('update-filters', newFilters);
            }
        }
    },
    methods: {
        // toggleFilter(item) {
        //     console.log(item)
        //     item.checked = !item.checked;
        //     if (item.checked) {
        //         this.activeFilters.push(item.id || item.name); // Add filter tag when checkbox is selected
        //     } else {
        //         const index = this.activeFilters.indexOf(item.id || item.name);
        //         if (index !== -1) {
        //             this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
        //         }
        //     }
        // },
        // removeFilter(index) {
        //     const removedItem = this.activeFilters[index];
        //     this.activeFilters.splice(index, 1); // Remove the filter tag

        //     // Find the corresponding item object
        //     const itemObject = this.ratings.find(item => item.id === removedItem) || this.states.find(item => item.name === removedItem);
        //     if (itemObject) {
        //         itemObject.checked = false; // Uncheck the corresponding checkbox
        //     }
        // }
    }
}
</script>
