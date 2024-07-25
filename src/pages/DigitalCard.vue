<template>
  <div style="padding-top: 50px;">
    <DigitalCardNav :title="title" />
    <div class="container-fluid row g-0">
      <div class="col-md-4 position-sticky sticky-container">
        <CarouselBanner :images="images" />
      </div>
      <div class="col-md-8">
        <InfoSection />
        <InformationSection />
      </div>
    </div>
  </div>
</template>

<script>
// import TopSection from '@/components/digitalcard/TopSection.vue'
import DigitalCardNav from '@/components/DigitalCardNav.vue';
import InfoSection from '@/components/digitalcard/InfoSection.vue';
import InformationSection from '@/components/InformationSection.vue';
import CarouselBanner from '@/components/ResellerCarousel.vue'; 

export default {
  name: "DigitalCard",
  components: {
    DigitalCardNav,
    // TopSection,
    InfoSection,
    InformationSection,
    CarouselBanner, 
  },
  data() {
    return {
      title: "Digital Card",
      images: [
        {
          src: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp',
          // alt: 'First slide',
          // label: 'First slide label',
          // content: 'Some representative placeholder content for the first slide.'
        },
        {
          src: 'https://img101.urbanic.com/v1/goods-pic/2a8f2aed210c4841b9ef564e8c21ba3bUR_w1440_q90.webp',
          // alt: 'Second slide',
          // label: 'Second slide label',
          // content: 'Some representative placeholder content for the second slide.'
        },
        {
          src: 'https://img101.urbanic.com/v1/goods-pic/f90d99ccd699497b9a4f1970823e8e11UR_w1440_q90.webp',
          // alt: 'Third slide',
          // label: 'Third slide label',
          // content: 'Some representative placeholder content for the third slide.'
        }
      ]
    }
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  .sticky-container {
    top: 50px;
    position: -webkit-sticky;
    /* For Safari */
    position: sticky;
    height: 100vh;
    /* Ensures full height */
    /* overflow-y: auto; */
    /* Adds scrolling if needed */
  }
}
/* @media (max-width: 767px) {
  .sticky-container {
    height: 100vh !important; 
  }
} */
</style>
