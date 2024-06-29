<template>
    <div class=" "> 
        <InfoSection />
        <TopSection />
        <InformationSection />
        <FameFoot />
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