<template>
    <div class="my-3">
        <nav class="p-0 pt-3 pb-1 position-sticky sticky-nav bg-dark">
            <div class="nav nav-tabs d-flex justify-content-center flex-nowrap overflow-x-scroll border-0" id="scroll"
                role="tablist">
                <button class="nav-link active text-white small px-2" id="nav-rating-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-rating" type="button" role="tab" aria-controls="nav-rating"
                    aria-selected="true">Rating</button>

                <button class="nav-link text-white small px-2" id="nav-promote-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-promote" type="button" role="tab" aria-controls="nav-promote"
                    aria-selected="false">Promote</button>

                <button class="nav-link text-white small px-2" id="nav-about-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-about" type="button" role="tab" aria-controls="nav-about"
                    aria-selected="false">About</button>

                <button class="nav-link text-white smallepx-2" id="nav-reward-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-reward" type="button" role="tab" aria-controls="nav-reward"
                    aria-selected="false">Reward</button>

                <button class="nav-link text-white small px-2" id="nav-connect-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-connect" type="button" role="tab" aria-controls="nav-connect"
                    aria-selected="false">Connect</button>
            </div>
        </nav>
        <div class="tab-content mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-rating" role="tabpanel" aria-labelledby="nav-rating-tab"
                tabindex="0">
                <OffcanvasRating />
            </div>
            <div class="tab-pane fade" id="nav-promote" role="tabpanel" aria-labelledby="nav-promote-tab" tabindex="0">
                <PromoteSection />
            </div>
            <div class="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab" tabindex="0">
                <AboutusSection />
                <BusinessSection />

            </div>
            <div class="tab-pane fade" id="nav-reward" role="tabpanel" aria-labelledby="nav-reward-tab" tabindex="0">
                <GallerySection />
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-connect" role="tabpanel" aria-labelledby="nav-connect-tab" tabindex="0">
                <ContactSection />
            </div>
        </div>
    </div>



</template>

<script>
import OffcanvasRating from "@/components/OffcanvasRating.vue";
import PromoteSection from "@/components/PromoteSection.vue";
import BusinessSection from '@/components/BusinessSection.vue';
import GallerySection from '@/components/GallerySection.vue';
import ContactSection from '@/components/ContactSection.vue';
import AboutusSection from "@/components/AboutusSection.vue";
export default {
    name: "InformationSection",
    components: {
        OffcanvasRating,
        PromoteSection,
        BusinessSection,
        GallerySection,
        ContactSection,
        AboutusSection,
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
    background-color: white;
    color: black !important;
}

.sticky-nav {
    /* position: -webkit-sticky; */
    /* For Safari */
    position: sticky;
    top: 0 !important;
    z-index: 1000;
    background-color: white;
}
</style>