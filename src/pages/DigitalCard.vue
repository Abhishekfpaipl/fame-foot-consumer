<template>
  <div class=" ">
    <DigitalCardNav :title="title"/>
    <!-- <TopSection /> -->
    <InfoSection />
    <InformationSection /> 
  </div>
</template>

<script>

// import TopSection from '@/components/digitalcard/TopSection.vue'
import DigitalCardNav from '@/components/DigitalCardNav.vue'
import InfoSection from '@/components/digitalcard/InfoSection.vue';
import InformationSection from '@/components/InformationSection.vue'; 

export default {
  name: "DigitalCard",
  components: {
    DigitalCardNav,
    // TopSection,
    InfoSection,
    InformationSection, 
  },
  data(){
    return {
      title: "Digital Card"
    }
  }
};
</script>