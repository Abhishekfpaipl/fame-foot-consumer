<template>
  <div class="home">
    <div class="">
      <BannerSection />
    </div>
    <div class="">
      <SecondSection />
    </div>
    <div class="">
      <NumberingCollection />
    </div>
    <div class="">
      <GeneralCollection />
    </div>
  </div>
</template>

<script>
import BannerSection from "@/components/BannerSection.vue";
import SecondSection from "@/components/SecondSection.vue";
import NumberingCollection from "@/components/NumberingCollection.vue";
import GeneralCollection from "@/components/GeneralCollection.vue";
export default {
  name: "HomeView",
  components: {
    BannerSection,
    SecondSection,
    NumberingCollection,
    GeneralCollection,
  },
};
</script>
