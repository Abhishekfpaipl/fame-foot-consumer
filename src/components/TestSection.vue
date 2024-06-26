<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li v-for="(page, index) in categories" :key="index" :data-target="'#carouselExampleIndicators'"
                :data-slide-to="index" :class="{ 'active': index === 0 }"></li>
        </ol>
        <div class="carousel-inner">
            <div v-for="(page, pageIndex) in categories" :key="pageIndex" class="carousel-item"
                :class="{ 'active': pageIndex === 0 }">
                <div class="d-flex justify-content-around">
                    <div v-for="(category, index) in page" :key="index" class="card border-0">
                        <a :href="'categories/' + category.href" class="text-decoration-none">
                            <img :src="category.img" class="card-img-top" :alt="category.name">
                            <div class="card-body text-center">
                                <p class="card-text">{{ category.name }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                [
                    { href: 'bank', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/banks.svg', name: 'Bank' },
                    { href: 'travel_insurance_company', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_insurance.svg', name: 'Travel Insurance Company' },
                    { href: 'car_dealer', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/car_dealer.svg', name: 'Car Dealer' },
                    { href: 'furniture_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/furniture_store.svg', name: 'Furniture Store' }
                ],
                [
                    { href: 'jewelry_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/jewelry_store.svg', name: 'Jewelry Store' },
                    { href: 'clothing_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/clothing_store.svg', name: 'Clothing Store' },
                    { href: 'electronics_technology', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronics_technology.svg', name: 'Electronics & Technology' },
                    { href: 'fitness_and_nutrition_service', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/fitness_nutrition_center.svg', name: 'Fitness and Nutrition Service' }
                ],
                [
                    { href: 'pet_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/pet_store.svg', name: 'Pet Store' },
                    { href: 'energy_supplier', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/energy_supplier.svg', name: 'Energy Supplier' },
                    { href: 'real_estate_agents', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/real_estate_agents.svg', name: 'Real Estate Agents' },
                    { href: 'insurance_agency', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/insurance_agency.svg', name: 'Insurance Agency' }
                ],
                [
                    { href: 'bedroom_furniture_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bedroom_furniture.svg', name: 'Bedroom Furniture Store' },
                    { href: 'activewear_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/activewear.svg', name: 'Activewear Store' },
                    { href: 'womens_clothing_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/womens_clothing_store.svg', name: 'Women\'s Clothing Store' },
                    { href: 'mens_clothing_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mens_clothing_store.svg', name: 'Men\'s Clothing Store' }
                ],
                [
                    { href: 'bicycle_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bicycle_shop.svg', name: 'Bicycle Store' },
                    { href: 'shoe_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/shoe_store.svg', name: 'Shoe Store' },
                    { href: 'mortgage_broker', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mortgage_broker.svg', name: 'Mortgage Broker' },
                    { href: 'appliance_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/appliance_store.svg', name: 'Appliance Store' }
                ],
                [
                    { href: 'cosmetics_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/cosmetics_store.svg', name: 'Cosmetics Store' },
                    { href: 'electronics_store', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronic_store.svg', name: 'Electronics Store' },
                    { href: 'garden_center', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/garden_center.svg', name: 'Garden Center' },
                    { href: 'travel_agency', img: 'https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_agency.svg', name: 'Travel Agency' }
                ]
            ]
        };
    },
};
</script>

<style scoped>
/* @media (min-width: 768px) {
    .row {
        flex-wrap: wrap !important;
        overflow: visible !important;
    }
} */
</style>