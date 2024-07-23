<template>
    <div>
        <BusinessCounter/>
        <BusinessSell/>
        <HowItWorks/>
        <JourneySection/>
    </div>
</template>
<script>
import BusinessCounter from '@/components/business/BusinessCounter.vue';
import BusinessSell from '@/components/business/BusinessSell.vue';
import HowItWorks from '@/components/business/HowItWorks.vue';
import JourneySection from '@/components/business/JourneySection.vue';
export default {
    components: {
        BusinessCounter,
        BusinessSell,
        HowItWorks,
        JourneySection,
    },
    data() {
        return { 
        }
    }
}
</script>
<style lang="">

</style>