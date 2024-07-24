<template>
    <div class="my-3 py-3">
        <div class="table-responsive pb-4">
                <table class="table table-bordered table-light table-striped" style="width: 100%;">
                    <thead class="border-bottom">
                        <tr>
                            <th class="text-start">Reseller <br> <span class="smaller">Account</span> <p class="mb-0 smaller fw-normal">Features List</p>
                            </th>
                            <th scope="col" class="border-end text-center" v-for="plan in plans" :key="plan.id">
                                <p class="mb-0">{{ plan.title }}</p>
                                <p v-if="plan.price" class="mb-0">
                                    <!-- <small class="smaller ">₹</small> -->
                                    <small class="smaller">{{ plan.price }}</small>
                                    <!-- <small class="smaller fw-normal">/-</small> -->
                                </p>
                                <p v-else class="mb-0">
                                    <small class="smaller">Custom</small>
                                </p>
                                <p v-if="plan.price" class="mb-0">
                                    <small class="fw-light text-dark smaller">
                                        ₹ / year
                                    </small>
                                </p>
                                <p v-else class="mb-0">
                                    <small class="fw-light text-dark smaller">Contact</small>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="border-start border-end">
                        <tr class="border-bottom" v-for="(feature, index) in plans[0].features" :key="feature.id">
                            <th class="pb-1 text-start">
                                <span class="fw-normal smaller">{{ feature.name }}</span>
                            </th>
                            <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                <i v-if="plan.features[index].included"
                                    class="bi bi-check2 fs-5 text-success smaller"></i>
                                <i v-else-if="feature.name === 'Brand Logo' && plan.id === 4"
                                    class="fw-normal">Basic</i>
                                <i v-else class="bi bi-dash fs-5 text-secondary"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
export default {
    name: "PriceSection",
    data() {
        return {
            plans: [
                {
                    id: 1,
                    title: "Trial",
                    description: "Info Website",
                    price: '6,000',
                    mrp: '10,000',
                    features: [
                        { id: 10, name: "Authorized Seller", included: true },
                        { id: 1, name: "Premium Accounts", included: true },
                        { id: 2, name: "Fameset Course", included: true },
                        { id: 9, name: "Lead Management", included: true },
                        { id: 5, name: "Awards", included: false },
                        { id: 6, name: "Rewards", included: false },
                        { id: 7, name: "Memberships", included: false },
                        { id: 7, name: "Certificates", included: false },
                        { id: 7, name: "Verifications", included: false },
                        { id: 7, name: "PR Management", included: false },
                        { id: 8, name: "Fameset Badges", included: false },
                        { id: 3, name: "Fameset Listing", included: false },
                        { id: 4, name: "Fameset Marketing", included: false },
                        { id: 11, name: "Business Accounts", included: false },
                        { id: 12, name: "Reseller Accounts", included: false },
                    ],
                },
                {
                    id: 2,
                    title: "Plus",
                    description: "Business Website",
                    price: '84,000',
                    mrp: '30,000',
                    features: [
                        { id: 10, name: "Authorized Seller", included: true },
                        { id: 1, name: "Premium Accounts", included: true },
                        { id: 2, name: "Fameset Course", included: true },
                        { id: 9, name: "Lead Management", included: true },
                        { id: 5, name: "Awards", included: true },
                        { id: 6, name: "Rewards", included: true },
                        { id: 7, name: "Memberships", included: true },
                        { id: 7, name: "Certificates", included: true },
                        { id: 7, name: "Verifications", included: false },
                        { id: 7, name: "PR Management", included: false },
                        { id: 8, name: "Fameset Badges", included: false },
                        { id: 3, name: "Fameset Listing", included: false },
                        { id: 4, name: "Fameset Marketing", included: false },
                        { id: 11, name: "Business Accounts", included: false },
                        { id: 12, name: "Reseller Accounts", included: false },
                    ],
                },
                {
                    id: 3,
                    title: "Elite",
                    description: "Catalog Website",
                    price: '3,00,000',
                    mrp: '60,000',
                    features: [
                        { id: 10, name: "Authorized Seller", included: true },
                        { id: 1, name: "Premium Accounts", included: true },
                        { id: 2, name: "Fameset Course", included: true },
                        { id: 9, name: "Lead Management", included: true },
                        { id: 5, name: "Awards", included: true },
                        { id: 6, name: "Rewards", included: true },
                        { id: 7, name: "Memberships", included: true },
                        { id: 7, name: "Certificates", included: true },
                        { id: 7, name: "Verifications", included: true },
                        { id: 7, name: "PR Management", included: true },
                        { id: 8, name: "Fameset Badges", included: true },
                        { id: 3, name: "Fameset Listing", included: true },
                        { id: 4, name: "Fameset Marketing", included: true },
                        { id: 11, name: "Business Accounts", included: true },
                        { id: 12, name: "Reseller Accounts", included: false },
                    ],
                },
                {
                    id: 4,
                    title: "Pro",
                    description: "Catalog Website",
                    // price: '29,999',
                    // mrp: '60,000',
                    features: [
                        { id: 10, name: "Authorized Seller", included: true },
                        { id: 1, name: "Premium Accounts", included: true },
                        { id: 2, name: "Fameset Course", included: true },
                        { id: 9, name: "Lead Management", included: true },
                        { id: 5, name: "Awards", included: true },
                        { id: 6, name: "Rewards", included: true },
                        { id: 7, name: "Memberships", included: true },
                        { id: 7, name: "Certificates", included: true },
                        { id: 7, name: "Verifications", included: true },
                        { id: 7, name: "PR Management", included: true },
                        { id: 8, name: "Fameset Badges", included: true },
                        { id: 3, name: "Fameset Listing", included: true },
                        { id: 4, name: "Fameset Marketing", included: true },
                        { id: 11, name: "Business Accounts", included: true },
                        { id: 12, name: "Reseller Accounts", included: true },
                    ],
                },
            ],
        }
    },
};
</script>
