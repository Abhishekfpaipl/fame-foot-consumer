<template>
  <div class="container bg-light rounded my-5">
    <h2 class="text-center mb-4">How it works</h2>
    <div class="how-it-works" :class="{ 'mobile-view': isMobile }">
      <div v-for="(step, index) in steps" :key="index" class="step-container">
        <div class="step-number">{{ index + 1 }}</div>
        <div class="step-content px-2">
          <h3 class="text-start">{{ step.title }}</h3>
          <p class="text-start">{{ step.description }}</p>
          <ul v-if="step.details" class="list-group">
            <li class="text-start" v-for="(detail, detailIndex) in step.details" :key="detailIndex">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      steps: [
        {
          title: "Create Account",
          description: "All you need is:",
          details: [
            "GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)",
            "Bank Account"
          ]
        },
        {
          title: "List Products",
          description: "List the products you want to sell in your supplier panel"
        },
        {
          title: "Get Orders",
          description: "Start getting orders from crores of Indians actively shopping on our platform."
        },
        {
          title: "Lowest Cost Shipping",
          description: "Products are shipped to customers at lowest costs"
        },
        {
          title: "Receive Payments",
          description: "Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery."
        }
      ]
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
};
</script>

<style scoped>
.how-it-works {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.how-it-works::before {
  content: '';
  position: absolute;
  top: 30px;
  left: 30px;
  right: 20%;
  height: 2px;
  background-color: #ffc107;
  z-index: 0;
}

.step-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 20%;
  text-align: center;
  position: relative;
  z-index: 1;
}

.step-number {
  width: 60px;
  height: 60px;
  background-color: #ffc107;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.step-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.step-content p, .step-content ul {
  font-size: 14px;
}

.step-content ul {
  list-style-type: none;
  padding-left: 0;
}

.mobile-view {
  flex-direction: column;
}

.mobile-view::before {
  top: 30px;
  left: 30px;
  width: 2px;
  height: calc(100% - 100px);
}

.mobile-view .step-container {
  width: 100%;
  flex-direction: row;
  text-align: left;
  margin-bottom: 20px;
}

.mobile-view .step-number {
  margin-right: 15px;
  margin-bottom: 0;
}

.mobile-view .step-content {
  flex: 1;
}
</style>