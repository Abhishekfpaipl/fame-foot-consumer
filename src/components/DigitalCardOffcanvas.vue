<template>


    <div class="offcanvas  offcanvas-end w-100" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header py-2 bg-white border-bottom d-flex justify-content-between align-items-center">
            <div class="w-75 d-flex justify-content-start align-items-center" data-bs-dismiss="offcanvas"
                aria-label="Close">
                <i class="bi bi-arrow-left me-2 fs-5"></i>
                <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg"
                    style="width: 40px;object-fit: contain;" alt="">
                <span class="ms-1 fs-5 text-ellipsis">Business Name</span>
            </div>
            <router-link to="/product-list" class="btn btn-dark rounded-pill">Login</router-link>
        </div>
        <div class="offcanvas-body p-0">
            <InfoSection />
            <TopSection />
            <InformationSection />
            <FameFoot />
            <div class="d-flex justify-content-center align-items-center">
                <div class="text-center position-fixed bottom-0 px-2 py-1 m-2 rounded text-white"
                    style="z-index: 9999; background-color: #38383899;" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i class="bi bi-arrow-left me-2"></i>
                    <span>Back</span>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>

import TopSection from '@/components/digitalcard/TopSection.vue'
import InfoSection from '@/components/digitalcard/InfoSection.vue';
import InformationSection from '@/components/InformationSection.vue';
import FameFoot from '@/components/FameFoot.vue';

export default {
    name: "DigitalCard",
    components: {
        TopSection,
        InfoSection,
        InformationSection,
        FameFoot,
    },

};
</script>