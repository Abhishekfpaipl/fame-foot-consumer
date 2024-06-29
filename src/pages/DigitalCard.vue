<template>
  <div class=" ">
    <InfoSection />
    <TopSection />
    <InformationSection /> 
  </div>
</template>

<script>

import TopSection from '@/components/digitalcard/TopSection.vue'
import InfoSection from '@/components/digitalcard/InfoSection.vue';
import InformationSection from '@/components/InformationSection.vue'; 

export default {
  name: "DigitalCard",
  components: {
    TopSection,
    InfoSection,
    InformationSection, 
  },

};
</script>