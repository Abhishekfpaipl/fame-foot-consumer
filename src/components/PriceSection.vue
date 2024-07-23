<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6" v-for="plan in plans" :key="plan.type">
                <div class="card mb-4">
                    <div class="card-body text-start">
                        <h5 class="card-title">{{ plan.type }}</h5>
                        <p class="card-text">{{ plan.description }}</p>
                        <h2 class="price">₹{{ plan.price }}<span class="period">/yr</span></h2>
                        <div class="d-flex flex-column">
                            <small class="text-muted smaller">You pay ₹{{ plan.price }} today</small>
                            <small class="text-muted smaller">Renews Jul. 2025 for ₹{{ plan.renewalPrice }}/mo (₹{{ plan.price
                                }} total)</small>
                        </div>
                        <button class="btn btn-outline-dark btn-block mt-3 w-100 rounded-0">Add to Cart</button>
                        <ul class="list-unstyled mt-4">
                            <li v-for="feature in plan.features" :key="feature" class="mb-2">
                                <i class="bi bi-check-lg text-success me-2"></i>{{ feature }}
                            </li>
                        </ul>
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
            plans: [
                {
                    type: "Basic Reseller",
                    description: "Best for up to 25 customers",
                    price: "579.99",
                    renewalPrice: "48.34",
                    features: [
                        "White-label ecommerce storefront",
                        "Credit card processing",
                        "24/7 support",
                        "Sales and commission reports",
                        "Standard buy rates, up to 20% off retail"
                    ]
                },
                {
                    type: "Pro Reseller",
                    description: "Best for unlimited customers",
                    price: "11,388.00",
                    renewalPrice: "949.00",
                    features: [
                        "White-label ecommerce storefront",
                        "Credit card processing",
                        "24/7 support",
                        "Sales and commission reports",
                        "Standard buy rates, up to 40% off retail"
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped>
.price {
    font-size: 2.5rem;
    font-weight: bold;
}

.period {
    font-size: 1rem;
    font-weight: normal;
}
</style>