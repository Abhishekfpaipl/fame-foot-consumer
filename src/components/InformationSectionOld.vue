<template>
    <div class="container-fluid bg-dark  my-3">
        <nav class="p-0 py-3 position-sticky sticky-nav">
            <div class="nav nav-tabs d-flex justify-content-start flex-nowrap overflow-x-scroll" id="scroll"
                role="tablist">
                <button class="nav-link active text-muted small px-2" id="nav-rating-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-rating" type="button" role="tab" aria-controls="nav-rating"
                    aria-selected="true">Rating</button>

                <button class="nav-link text-muted small px-2" id="nav-promote-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-promote" type="button" role="tab" aria-controls="nav-promote"
                    aria-selected="false">Promote</button>

                <button class="nav-link text-muted small px-2" id="nav-about-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-about" type="button" role="tab" aria-controls="nav-about"
                    aria-selected="false">About</button>

                <button class="nav-link text-muted smallepx-2" id="nav-reward-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-reward" type="button" role="tab" aria-controls="nav-reward"
                    aria-selected="false">Reward</button>

                <button class="nav-link text-muted small px-2" id="nav-connect-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-connect" type="button" role="tab" aria-controls="nav-connect"
                    aria-selected="false">Connect</button>
            </div>
        </nav>
        <div class="tab-content mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-rating" role="tabpanel" aria-labelledby="nav-rating-tab"
                tabindex="0">
                <button class="btn btn-dark">Rating</button>
                <OffcanvasRating />
            </div>
            <div class="tab-pane fade" id="nav-promote" role="tabpanel" aria-labelledby="nav-promote-tab" tabindex="0">
                <button class="btn btn-dark">Promote</button>
            </div>
            <div class="tab-pane fade" id="nav-reward" role="tabpanel" aria-labelledby="nav-reward-tab" tabindex="0">
                <button class="btn btn-dark">Reward</button>
            </div>
            <div class="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab" tabindex="0">
                <button class="btn btn-dark">About</button>
            </div>
            <div class="tab-pane fade" id="nav-connect" role="tabpanel" aria-labelledby="nav-connect-tab" tabindex="0">
                <button class="btn btn-dark">Connect</button>
            </div>
        </div>
    </div>


    
</template>

<script>
import OffcanvasRating from "@/components/OffcanvasRating.vue";
export default {
    name: "InformationSection",
    components: {
        OffcanvasRating,
    },
    data() {
        return {
            rating: 0,
            reviewText: ""
        }
    },
    methods: {
        setRating(star) {
            this.rating = star;
        },
    }
}
</script>
<style scoped>
.nav-link.active {
    background-color: black;
    color: white !important;
}

.sticky-nav {
    /* position: -webkit-sticky; */
    /* For Safari */
    position: sticky;
    top: 0 !important;
    z-index: 1000;
    /* Ensure it stays above other content */
    background-color: white;
    /* Match background color to avoid visual issues */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Optional: Add a subtle shadow */
}
</style>