<template>
    <div class="my-3 py-3">
        <div class="container">
            <!-- <h1 class="text-center text-capitalize">Services</h1>
            <small>No hidden charges only pay what you see</small> -->

            <div class="row row-cols-2 row-cols-md-4 my-3">
                <div class="col" v-for="(plan, index) in plans" :key="index">
                    <div class="card mb-3 px-3 bg-light rounded-0" :class="{ 'recommended': index === 2 }">

                        <!-- <div v-if="index === 2" class="position-absolute top-0 start-0 m-2 ms-0"
                            style="font-size: 12px;">
                            <span class='text-dark fw-bold bg-warning p-1 px-2 rounded-end-3'>Recommended</span>
                        </div> -->

                        <div class="py-2 border-bottom fw-bold">{{ plan.name }}</div>
                        <div class="card-body text-center">
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <p v-if="plan.price" class="mb-0 card-title smaller"><span class="fw-bold">{{
                                    plan.price }} </span></p>
                                <p v-else class="mb-0 card-title smaller fw-bold">Custom</p>
                            </div>
                            <p><small class="text-capitalize smaller">₹ / sale</small></p>
                            <!-- <p v-else class="smaller">Contact</p> -->
                            <div v-if="plan.price" class="d-flex justify-content-center align-items-center">
                                <p class="fw-light d-inline-block px-4 rounded-3 text-bg-warning "                                    style="background-color: var(--brand-color)">
                                    <!-- <span class="text-decoration-line-through text-white">{{ plan.mrp }}</span> -->
                                    <span class="text-dark"> ({{ getDiscount(plan) }}% Off)</span>
                                </p>
                            </div>
                            <p v-else class="fw-light d-inline-block px-4 rounded-3 text-bg-warning">Contact</p>

                            <ul v-if="plan.features" class="list-group">
                                <small class="text-start text-uppercase fw-bold my-2 text-primary smaller">{{ plan.key
                                    }}</small>
                                <li v-for="(feature, featureIndex) in plan.features.slice(0, 2)" :key="featureIndex"
                                    class="px-0 d-flex justify-content-between list-group-item bg-light text-start text-capitalize border-0 smaller">
                                    <div class="">
                                        <i class="bi bi-check-circle text-success"></i>
                                        <span class="px-2">
                                            {{ feature.text }}
                                        </span>
                                    </div>
                                    <i class="bi bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="top"
                                        data-bs-custom-class="custom-tooltip" :data-bs-title="feature.tooltip"></i>
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer bg-light p-0 border-top pt-2">
                            <!-- <p class="card-text text-capitalize">{{ plan.description }}</p> -->

                            <div class="btn-group w-100 my-2">
                                <!-- <router-link :to="plan.link" class="btn border btn-light text-capitalize px-4">
                                    Know More
                                </router-link> -->
                                <a :href="'https://wa.me/8860012001?text=' + encodeURIComponent('Hello, I want to get your ' + plan.name + ' service')"
                                    class="btn text-capitalize px-4 text-white btn-success">
                                    <i class="bi bi-whatsapp"></i>
                                    <span class="ms-2">Enquiry</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- <div class="my-3">
                <ul class="nav nav-pills justify-content-center sticky-container" id="pills-tab" role="tablist">
                    <div class="d-flex border p-2 px-3 rounded shadow " style="">
                        <li class="nav-item" role="presentation" v-for="(price, index) in pricing" :key="index">
                            <button class="nav-link text-muted" :class="{ 'active': index === 0 }" :id="'tab-' + index"
                                data-bs-toggle="pill" :data-bs-target="'#content-' + index" type="button" role="tab"
                                :aria-controls="'content-' + index" :aria-selected="index === 0">{{ price.name
                                }}</button>
                        </li>
                    </div>
                </ul>
                <div class="tab-content mt-2 pt-4" id="pills-tabContent">
                    <div class="tab-pane fade" :class="{ 'show active': index === 0 }" v-for="(price, index) in pricing"
                        :key="index" :id="'content-' + index" role="tabpanel" :aria-labelledby="'tab-' + index"
                        tabindex="0">
                        <div class="container">
                           
                        </div>
                    </div>
                </div>
            </div> -->
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
                    id: 124,
                    name: "Trial",
                    price: "6,000",
                    mrp: "12,000",
                    link: "/digital-marketing/",
                    tag: "/user/yearly/billed yearly",
                    description: "Start with our Starter plan and upgrade only when you need additional features.",
                    button: "Get Started",
                    key: "key features",
                    features: [
                        {
                            text: "One Time",
                            tooltip: "Improve rankings with on-page and off-page SEO techniques."
                        },
                        {
                            text: "1 Account",
                            tooltip: "Manage paid ads on search engines and social media for targeted visibility."
                        },
                        {
                            text: "Content Marketing",
                            tooltip: "Create and distribute engaging content to attract and retain audiences."
                        },
                        {
                            text: "Social Media Marketing (SMM)",
                            tooltip: "Manage social media content and run targeted ad campaigns."
                        },
                        {
                            text: "Email Marketing",
                            tooltip: "Design and execute personalized email campaigns for better engagement."
                        },
                        {
                            text: "Influencer Marketing",
                            tooltip: "Partner with influencers to endorse products and reach new audiences."
                        },
                        {
                            text: "Conversion Rate Optimization (CRO)",
                            tooltip: "Optimize websites to increase conversion rates through data analysis."
                        },
                        {
                            text: "Analytics and Reporting",
                            tooltip: "Monitor and analyze marketing metrics to inform strategic decisions."
                        },
                        {
                            text: "Online Reputation Management (ORM)",
                            tooltip: "Manage online reviews and feedback to maintain a positive brand image."
                        },
                        {
                            text: "Mobile Marketing",
                            tooltip: "Optimize marketing strategies for mobile users and mobile-specific behaviors."
                        },
                        {
                            text: "Customer Relationship Management (CRM)",
                            tooltip: "Use CRM systems to manage leads and personalize marketing efforts."
                        },
                        {
                            text: "Marketing Automation",
                            tooltip: "Automate marketing tasks with tools like HubSpot, Marketo, or Mailchimp."
                        },
                    ]
                },
                {
                    id: 54,
                    name: "Plus",
                    price: "8,400",
                    mrp: "12,000",
                    link: "/digital-marketing/",
                    tag: "/user/yearly/billed yearly",
                    description: "Choose the right set of features you need to begin your  journey.",
                    button: "Get Started",
                    button2: "Buy now",
                    key: "key features",
                    features: [
                        {
                            text: "Multiple Time",
                            tooltip: "Improve rankings with on-page and off-page SEO techniques."
                        },
                        {
                            text: "10 Accounts",
                            tooltip: "Manage paid ads on search engines and social media for targeted visibility."
                        },
                        {
                            text: "Content Marketing",
                            tooltip: "Create and distribute engaging content to attract and retain audiences."
                        },
                        {
                            text: "Social Media Marketing (SMM)",
                            tooltip: "Manage social media content and run targeted ad campaigns."
                        },
                        {
                            text: "Email Marketing",
                            tooltip: "Design and execute personalized email campaigns for better engagement."
                        },
                        {
                            text: "Influencer Marketing",
                            tooltip: "Partner with influencers to endorse products and reach new audiences."
                        },
                        {
                            text: "Conversion Rate Optimization (CRO)",
                            tooltip: "Optimize websites to increase conversion rates through data analysis."
                        },
                        {
                            text: "Analytics and Reporting",
                            tooltip: "Monitor and analyze marketing metrics to inform strategic decisions."
                        },
                        {
                            text: "Online Reputation Management (ORM)",
                            tooltip: "Manage online reviews and feedback to maintain a positive brand image."
                        },
                        {
                            text: "Mobile Marketing",
                            tooltip: "Optimize marketing strategies for mobile users and mobile-specific behaviors."
                        },
                        {
                            text: "Customer Relationship Management (CRM)",
                            tooltip: "Use CRM systems to manage leads and personalize marketing efforts."
                        },
                        {
                            text: "Marketing Automation",
                            tooltip: "Automate marketing tasks with tools like HubSpot, Marketo, or Mailchimp."
                        },
                    ]
                },
                {
                    id: 64,
                    name: "Elite",
                    link: "/digital-marketing/",
                    price: "6,000",
                    mrp: "12,000",
                    tag: "/user/yearly/billed yearly",
                    description: "Enjoy our advanced offering for fast-growing businesses and startups.",
                    button: "Get Started",
                    button2: "Buy now",
                    key: "key features",
                    features: [
                        {
                            text: "Multiple Time",
                            tooltip: "Improve rankings with on-page and off-page SEO techniques."
                        },
                        {
                            text: "50 Accounts",
                            tooltip: "Manage paid ads on search engines and social media for targeted visibility."
                        },
                        {
                            text: "Content Marketing",
                            tooltip: "Create and distribute engaging content to attract and retain audiences."
                        },
                        {
                            text: "Social Media Marketing (SMM)",
                            tooltip: "Manage social media content and run targeted ad campaigns."
                        },
                        {
                            text: "Email Marketing",
                            tooltip: "Design and execute personalized email campaigns for better engagement."
                        },
                        {
                            text: "Influencer Marketing",
                            tooltip: "Partner with influencers to endorse products and reach new audiences."
                        },
                        {
                            text: "Conversion Rate Optimization (CRO)",
                            tooltip: "Optimize websites to increase conversion rates through data analysis."
                        },
                        {
                            text: "Analytics and Reporting",
                            tooltip: "Monitor and analyze marketing metrics to inform strategic decisions."
                        },
                        {
                            text: "Online Reputation Management (ORM)",
                            tooltip: "Manage online reviews and feedback to maintain a positive brand image."
                        },
                        {
                            text: "Mobile Marketing",
                            tooltip: "Optimize marketing strategies for mobile users and mobile-specific behaviors."
                        },
                        {
                            text: "Customer Relationship Management (CRM)",
                            tooltip: "Use CRM systems to manage leads and personalize marketing efforts."
                        },
                        {
                            text: "Marketing Automation",
                            tooltip: "Automate marketing tasks with tools like HubSpot, Marketo, or Mailchimp."
                        },
                    ]
                },
                {
                    id: 64,
                    name: "Pro",
                    link: "/digital-marketing/",
                    tag: "/user/yearly/billed yearly",
                    description: "Enjoy our advanced offering for fast-growing businesses and startups.",
                    button: "Get Started",
                    button2: "Buy now",
                    key: "key features",
                    features: [
                        {
                            text: "Multiple Time",
                            tooltip: "Improve rankings with on-page and off-page SEO techniques."
                        },
                        {
                            text: "As Required ",
                            tooltip: "Manage paid ads on search engines and social media for targeted visibility."
                        },
                        {
                            text: "Content Marketing",
                            tooltip: "Create and distribute engaging content to attract and retain audiences."
                        },
                        {
                            text: "Social Media Marketing (SMM)",
                            tooltip: "Manage social media content and run targeted ad campaigns."
                        },
                        {
                            text: "Email Marketing",
                            tooltip: "Design and execute personalized email campaigns for better engagement."
                        },
                        {
                            text: "Influencer Marketing",
                            tooltip: "Partner with influencers to endorse products and reach new audiences."
                        },
                        {
                            text: "Conversion Rate Optimization (CRO)",
                            tooltip: "Optimize websites to increase conversion rates through data analysis."
                        },
                        {
                            text: "Analytics and Reporting",
                            tooltip: "Monitor and analyze marketing metrics to inform strategic decisions."
                        },
                        {
                            text: "Online Reputation Management (ORM)",
                            tooltip: "Manage online reviews and feedback to maintain a positive brand image."
                        },
                        {
                            text: "Mobile Marketing",
                            tooltip: "Optimize marketing strategies for mobile users and mobile-specific behaviors."
                        },
                        {
                            text: "Customer Relationship Management (CRM)",
                            tooltip: "Use CRM systems to manage leads and personalize marketing efforts."
                        },
                        {
                            text: "Marketing Automation",
                            tooltip: "Automate marketing tasks with tools like HubSpot, Marketo, or Mailchimp."
                        },
                    ]
                }
            ]
        }
    },
    computed: {
        pricing() {
            return this.$store.getters.getPricing
        }
    },
    mounted() {
        this.initTooltips();
    },
    updated() {
        this.initTooltips();
    },
    methods: {
        initTooltips() {
            // Initialize tooltips (assuming using Bootstrap's tooltip)
            const tooltipTriggerList = [].slice.call(
                document.querySelectorAll('[data-bs-toggle="tooltip"]')
            );
            tooltipTriggerList.forEach(function (tooltipTriggerEl) {
                new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        },
        getDiscount(plan) {
            if (plan.mrp && typeof plan.mrp === 'string') {
                const mrp = parseFloat(plan.mrp.replace(/[^\d.-]/g, ''));
                const price = parseFloat(plan.price.replace(/[^\d.-]/g, ''));
                if (!isNaN(mrp) && !isNaN(price) && mrp > 0) {
                    return ((mrp - price) / mrp * 100).toFixed(0);
                }
            }
            return 0; // Default return if calculation fails
        }

    }
};
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.active {
    background-color: var(--brand-color) !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    /* transform: scale(1.2); */
}

.sticky-container {
    position: sticky;
    top: 70px;
    z-index: 1000;
    background-color: white;
}
</style>
