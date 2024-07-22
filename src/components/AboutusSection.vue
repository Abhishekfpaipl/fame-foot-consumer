<template>
  <div class="container pb-3">
    <div class="position-relative my-5">
      <div class="d-flex gap-3 overflow-x-scroll" id="scroll" ref="scrollContainer">
        <div class="" v-for="(custom, index) in customFields" :key="index">
          <div class="card" style="min-width: 18rem; min-height: 12rem">
            <div class="card-body p-0">
              <h5 class="text-center card-title border-bottom py-3 bg-light">{{ custom.name }}</h5>
              <p class="card-text px-2 overflow-scroll" id="scroll">{{ custom.value }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-circle border d-flex justify-content-center align-items-center position-absolute bg-light"
        @click="scrollLeft" style="width: 40px; height:40px ;top: 40%; left: -2%">
        <i class="bi bi-chevron-left"></i>
      </div>
      <div class="rounded-circle border d-flex justify-content-center align-items-center position-absolute bg-light"
        @click="scrollRight" style="width: 40px; height:40px ;top: 40%; right: -2%">
        <i class="bi bi-chevron-right"></i>
      </div>
    </div>

    <div class="my-5">
      <h1 class="text-center mb-5">Skillset</h1>
      <div class="row row-cols-1 row-cols-md-2 g-md-5 g-2">
        <div class="col mt-2" v-for="(skill, index) in skills" :key="index">
          <h5 class="mb-1 mt-3 text-uppercase">{{ skill.skill }} </h5>
          <div class="progress rounded-0" role="progressbar" aria-label="Danger example" aria-valuenow="100"
            aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar-striped" :class="skill.bg" :style="{ width: skill.percent + '%' }"> {{
              skill.percent
              }}
              %</div>
          </div>
        </div>
      </div>
    </div>


    <div class="row m-2 my-5" v-for="(edu, index) in education " :key="index">
      <h1 class="text-center col-12 mb-2">{{ edu.year }}</h1>
      <div class="border col-md-6 bg-light py-3">
        <p class="mb-0 fw-bold text-ellipsis3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum
          quam vero
          culpa et eaque deserunt distinctio, neque tenetur amet.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugiat illum quam vero
          culpa et eaque deserunt distinctio, neque tenetur amet.</p>
        <hr />
        <p class="mb-0 smaller text-ellipsis3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          illum quam vero
          culpa et eaque deserunt distinctio, neque tenetur amet.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugiat illum quam vero
          culpa et eaque deserunt distinctio, neque tenetur amet.</p>
      </div>
      <div class="border col-md-6 py-3 bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        earum
        minus soluta deleniti consectetur corrupti odio delectus numquam odit quibusdam sapiente ullam consequatur
        dolores possimus animi ex praesentium cupiditate cum, voluptas adipisci. Non a atque accusamus eum dolor,
        voluptas obcaecati quod aliquam nam. Modi fugit ad perferendis minima non ab! Nihil magni aliquam beatae. Porro
        id deleniti sunt asperiores reprehenderit autem vel maxime quaerat? Quod error asperiores fugiat earum cum
        molestias? Hic vitae dolores delectus quasi fugit velit perferendis. Possimus pariatur suscipit quaerat aut
        aliquid sed qui aspernatur quae, architecto, sint voluptatibus corrupti laudantium sit dolor repudiandae autem
        deleniti consequatur.</div>
    </div>
  </div>  
  <CustomCounter service="satisfied customers" :serviceCount="1000" category="years of expirence"
        :categoryCount="10" place="projects completed" :placeCount="4000"  title="fun facts" />
  <ContactSection />
</template>

<script>
import ContactSection from "@/components/ContactSection.vue"
import CustomCounter from "@/components/CustomCounter.vue"
export default {
  name: 'AboutusSection',
  components: {
    ContactSection,
    CustomCounter,
  },
  data() {
    return {
      customFields: [
        {
          name: "Shop Name",
          value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus ."
        },
        {
          name: "Description",
          value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
        },
        {
          name: "Description",
          value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
        },
        {
          name: "Description",
          value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
        },
        {
          name: "Description",
          value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
        },
      ],
      education: [
        { year: '2019 - 2022', degree: 'Company Name  & Address', school: 'University/College' },
        { year: '2019 - 2022', degree: 'Company Name  & Address', school: 'University/College' }
      ],
      skills: [
        { bg: 'bg-danger', skill: 'HTML', percent: '100' },
        { bg: 'bg-dark', skill: 'CSS3', percent: '50' },
        { bg: 'bg-primary', skill: 'JavaScript', percent: '75' },
        { bg: 'bg-success', skill: 'jQuery', percent: '50' },
        { bg: 'bg-warning', skill: 'Php', percent: '25' },
        { bg: 'bg-info', skill: 'sql', percent: '75' },
      ],
    }
  },
  methods: {
    scrollLeft() {
      const container = this.$refs.scrollContainer;
      const scrollWidth = container.clientWidth;
      const newScrollLeft = Math.max(container.scrollLeft - scrollWidth);

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    },
    scrollRight() {
      const container = this.$refs.scrollContainer;
      const scrollWidth = container.clientWidth;
      const maxScrollLeft = container.scrollWidth - scrollWidth;
      const newScrollLeft = Math.min(container.scrollLeft + scrollWidth, maxScrollLeft);

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.card-text {
  max-height: 12rem;
  /* Adjust as needed */
  overflow-y: auto;
}

#scroll::-webkit-scrollbar {
  display: none;
}
</style>
