<template>
    <!-- <div class="">
        <div class="" style="background-color: var(--bg-forth)">
            <div class="container py-5">
                <h3 class="text-capitalize mb-4">Our Partnership Benefits</h3>
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                    <div v-for="(data, index) in works" :key="index" class="col">
                        <div class="d-flex align-items-center border my-1 ps-5 ps-md-2">
                            <i :class="data.icon" class="fs-4 p-1"></i>
                            <small class="fw-bold text-capitalize ms-3">{{ data.heading }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="container px-3 px-md-0">
        <div class="row d-flex justify-content-center pb-5 pt-2">
            <div class="col-lg-4 row row-cols-1 g-3 mt-0">
                <div v-for="(service, index) in servicesLeft" :key="index" class="col">
                    <div class="d-flex align-items-start">
                        <i class="bi fs-4 pe-4" :class="service.icon"></i>
                        <div class="d-flex flex-column text-start flex-fill">
                            <p class="fs-5 fw-b title mb-0">{{ service.heading }}</p>
                            <small class="smaller fw-light mb-0">{{ service.description }}</small>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-lg-4 overflow-hidden p-5 mt-0">
                <img src="/img/benefit.svg" class="h-100 w-100 of-cover">
            </div>


            <div class="col-lg-4 row row-cols-1 g-3 mt-0">
                <div v-for="(service, index) in servicesRight" :key="index" class="col">
                    <div class="d-flex align-items-start">
                        <i class="bi fs-5 pe-4" :class="service.icon"></i>
                        <div class="d-flex flex-column text-start flex-fill">
                            <p class="fs-5 fw-b title mb-0">{{ service.heading }}</p>
                            <small class="smaller fw-light mb-0">{{ service.description }}</small>
                        </div>
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
            works: [

            ],
            servicesLeft: [
                {
                    icon: 'bi bi-shop fs-3',
                    heading: 'Build your online store front',
                    description: 'Easily create and customize your online shop with user-friendly tools.'
                },
                {
                    icon: 'bi bi-currency-rupee fs-3',
                    heading: 'Set your own prices',
                    description: 'Flexibly set product prices and discounts to attract more customers.'
                },
                {
                    icon: 'bi bi-headset fs-3',
                    heading: '24x7 award-winning support',
                    description: 'Get help whenever you need it from our dedicated support team.'
                },
                {
                    icon: 'bi bi-diagram-2 fs-3',
                    heading: 'Bulk subscriptions',
                    description: 'Manage and sell multiple subscriptions with ease and efficiency.'
                },
            ],
            servicesRight: [

                {
                    icon: 'bi bi-bar-chart-line fs-3',
                    heading: 'Detailed Analytics',
                    description: 'Gain insights into your business with comprehensive analytics tools.'
                },
                {
                    icon: 'bi bi-lock fs-3',
                    heading: 'Secure Payments',
                    description: 'Ensure safe and secure transactions with our advanced payment security.'
                },
                {
                    icon: 'bi bi-phone fs-3',
                    heading: 'Mobile Friendly',
                    description: 'Reach more customers with a mobile-friendly store that looks great on any device.'
                },
                {
                    icon: 'bi bi-cloud-arrow-up fs-3',
                    heading: 'Cloud Backup',
                    description: 'Keep your data safe with automatic cloud backups.'
                }
            ]
        }
    },
}

</script>