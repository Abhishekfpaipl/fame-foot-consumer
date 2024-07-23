<template>
    <div class="container my-4">
        <h1 class="text-primary mb-3">Access our tools to grow faster on Fameset</h1>
        <p class="mb-4">
            We understand that your online business may require additional support from time to time, and we've got you
            covered.
            With your Fameset account, you gain access to a range of tools designed to help grow your online business.
        </p>
        <h2 class="text-light mb-4">5x Growth</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="tool in tools" :key="tool.title">
                <div class="card h-100">
                    <div class="card-body text-start">
                        <div class="d-flex align-items-center">
                            <i :class="tool.icon" class="fs-1"></i>
                            <span class="fs-4 ms-3">{{ tool.title }}</span>
                        </div>
                        <p class="card-text">{{ tool.description }}</p>
                        <a href="#" class="text-decoration-none">Learn More</a>
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
            tools: [
                {
                    title: 'Fulfilment by Fameset',
                    description: 'Worried about storing, packing, shipping, and delivering your products? Let Fameset do it all for you.',
                    icon: 'bi bi-house'
                },
                {
                    title: 'Fameset Ads',
                    description: 'Curious how your products will stand out from your competitors and gain maximum visibility?',
                    icon: 'bi bi-megaphone'
                },
                {
                    title: 'Shopping Festivals',
                    description: 'Get access to India\'s biggest shopping festivals, The Big Billion Day, Big Diwali Sale, and more.',
                    icon: 'bi bi-bag'
                },
                {
                    title: 'Learning Center',
                    description: 'Personalised learning modules, exclusive webinars, tutorial videos, and more to help sell better faster.',
                    icon: 'bi bi-book'
                },
                {
                    title: 'Account Management',
                    description: 'Improve product selection, product pricing, business insights, & more with our expert in-house account managers.',
                    icon: 'bi bi-person-gear'
                },
                {
                    title: 'Mobile App',
                    description: 'Manage your online seller account 24x7 with Fameset Seller Hub App. Compatible with all Android & iOS devices.',
                    icon: 'bi bi-phone'
                }
            ]
        }
    }
}
</script>