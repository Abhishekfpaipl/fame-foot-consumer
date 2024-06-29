<template>
  <div class="container py-3">
    <h1 class="px-2 text-center mb-0">About Us</h1>
    <div class="position-relative">
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
  </div>
</template>

<script>
export default {
  name: 'InfoSection',
  // props: ['customFields'],
  props: {
    customFields: {
      type: Array,
      required: true
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
