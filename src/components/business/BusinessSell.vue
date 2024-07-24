<template>
    <div class="container my-5">
        <h1 class="mb-4">Why sell on Fameset?</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="(reason, index) in reasons" :key="index">
                <div class="card h-100 hover-scale">
                    <div class="card-body d-flex flex-column">
                        <div class="icon-wrapper mb-3">
                            <i :class="reason.icon"></i>
                        </div>
                        <h5 class="card-title">{{ reason.title }}</h5>
                        <p class="card-text">{{ reason.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        reasons: [
          {
            icon: 'bi bi-tag-fill text-warning',
            title: 'Reach crores',
            description: 'Crores of customers shop from Fameset.in, India\'s most visited shopping destination.'
          },
          {
            icon: 'bi bi-truck text-warning',
            title: 'Deliver smiles',
            description: '100% of India\'s serviceable pincodes are supported for delivery, through Easy Ship & Fulfillment by Fameset.'
          },
          {
            icon: 'bi bi-lightning-charge-fill text-warning',
            title: 'Make money',
            description: '95K+ sellers became lakhpatis in 2023. You could be next'
          }
        ]
      };
    }
  };
  </script>

<style scoped>
.hover-scale {
    transition: transform 0.3s ease-in-out;
}

.hover-scale:hover {
    transform: scale(1.05);
}

.icon-wrapper {
    font-size: 2rem;
}

.card {
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>