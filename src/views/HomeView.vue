<template>
  <div class="home">
    <div class="">
      <BannerSection />
    </div>
    <div class="">
      <SecondSection />
    </div>
    <TestSection />
    <!-- <div class="">
      <NumberingCollection />
    </div> -->
    <div class="">
      <GeneralCollection />
    </div>
    <FooterBar/>
  </div>
</template>

<script>
import BannerSection from "@/components/BannerSection.vue";
import SecondSection from "@/components/SecondSection.vue";
// import TestSection from "@/components/TestSection.vue";
// import NumberingCollection from "@/components/NumberingCollection.vue";
import GeneralCollection from "@/components/GeneralCollection.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "HomeView",
  components: {
    BannerSection,
    SecondSection,
    // TestSection,
    // NumberingCollection,
    GeneralCollection,
    FooterBar,
  },
};
</script>
