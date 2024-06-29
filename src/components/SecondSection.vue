<template>
    <div class="container">
        <div class="my-3">
            <p class="p-2 text-center mt-3 mb-0 bill text-style">
                <span class="fs-5">WHAT ARE YOU LOOKING FOR?</span>
            </p>
            <div>
                <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
                    <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                        <li class="nav-item border rounded-pill" role="presentation" v-for="(price, index) in pricing"
                            :key="index">
                            <button class="nav-link" :class="{ 'active': index === activeTabIndex }"
                                :id="'tab-' + index" data-bs-toggle="pill" :data-bs-target="'#content-' + index"
                                type="button" role="tab" :aria-controls="'content-' + index"
                                :aria-selected="index === activeTabIndex" @click="activeTabIndex = index">{{ price.name
                                }}</button>
                        </li>
                    </div>
                </ul>
                <div class="tab-content pb-5" id="pills-tabContent">
                    <!-- <div class="d-flex align-items-center shadow p-2 mb-3">
                        <input type="search" placeholder="Search for questions?" v-model="searchTerm"
                            class="form-control border-0" ref="searchInput" @keyup.enter="search">
                        <div>
                            <i class="bi bi-search" @click="search"></i>
                        </div>
                    </div> -->
                    <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }"
                        v-for="(price, index) in pricing" :key="index" :id="'content-' + index" role="tabpanel"
                        :aria-labelledby="'tab-' + index" tabindex="0">

                        <div class="container">
                            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2">
                                <router-link to="/review-list" class="col text-decoration-none text-dark"
                                    v-for="(type, index) in price.types" :key="index">
                                    <div class="card d-flex justify-content-center align-items-center py-3 border-0 mx-2"
                                        style="width: 10rem;background:linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,254,196,1) 29%, rgba(255,217,102,1) 90%)">
                                        <img :src="type.img" style="width: 32px; height: 32px;" alt="" />
                                        <span class="smaller fw-bold">{{ type.name }}</span>
                                    </div>

                                </router-link>
                            </div>
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
            pricing: [
                {
                    id: 622,
                    name: "Category 1",
                    types: [
                        {
                            name: 'Bank',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/banks.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Travel insurance',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_insurance.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Car Dealer',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/car_dealer.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Furniture Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/furniture_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Jewelry Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/jewelry_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Clothing Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Electronics & Technology',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronics_technology.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Fitness and Nutrition',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/fitness_nutrition_center.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Pet Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/pet_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Energy Supplier',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/energy_supplier.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Real Estate Agents',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/real_estate_agents.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Insurance Agency',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/insurance_agency.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Bedroom Furniture',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bedroom_furniture.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Activewear Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/activewear.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: "Women's Clothing",
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/womens_clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: "Men's Clothing",
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mens_clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Bicycle store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bicycle_shop.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Shoe store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/shoe_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Mortgage Broker',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mortgage_broker.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Appliance Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/appliance_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Cosmetics store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/cosmetics_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Electronics store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronic_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Garden Center',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/garden_center.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Travel Agency',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_agency.svg",
                            icon: 'bi bi-heart-fill'
                        },
                    ],
                },
                {
                    id: 62,
                    name: "Category 2",
                    types: [
                        {
                            name: 'Bank',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/banks.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Travel insurance',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_insurance.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Car Dealer',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/car_dealer.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Furniture Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/furniture_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Jewelry Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/jewelry_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Clothing Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Electronics & Technology',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronics_technology.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Fitness and Nutrition',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/fitness_nutrition_center.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Pet Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/pet_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Energy Supplier',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/energy_supplier.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Real Estate Agents',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/real_estate_agents.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Insurance Agency',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/insurance_agency.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Bedroom Furniture',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bedroom_furniture.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Activewear Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/activewear.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: "Women's Clothing",
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/womens_clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: "Men's Clothing",
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mens_clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Bicycle store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bicycle_shop.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Shoe store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/shoe_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Mortgage Broker',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mortgage_broker.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Appliance Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/appliance_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Cosmetics store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/cosmetics_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Electronics store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronic_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Garden Center',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/garden_center.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Travel Agency',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_agency.svg",
                            icon: 'bi bi-heart-fill'
                        },
                    ],
                },
                {
                    id: 1,
                    name: "Category 3",
                    types: [
                        {
                            name: 'Bank',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/banks.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Travel insurance',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_insurance.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Car Dealer',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/car_dealer.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Furniture Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/furniture_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Jewelry Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/jewelry_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Clothing Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Electronics & Technology',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronics_technology.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Fitness and Nutrition',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/fitness_nutrition_center.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Pet Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/pet_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Energy Supplier',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/energy_supplier.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Real Estate Agents',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/real_estate_agents.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Insurance Agency',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/insurance_agency.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Bedroom Furniture',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bedroom_furniture.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Activewear Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/activewear.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: "Women's Clothing",
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/womens_clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: "Men's Clothing",
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mens_clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Bicycle store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bicycle_shop.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Shoe store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/shoe_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Mortgage Broker',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mortgage_broker.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Appliance Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/appliance_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Cosmetics store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/cosmetics_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Electronics store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronic_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Garden Center',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/garden_center.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Travel Agency',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_agency.svg",
                            icon: 'bi bi-heart-fill'
                        },
                    ],
                },
                {
                    id: 6,
                    name: "Category 4",
                    types: [
                        {
                            name: 'Bank',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/banks.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Travel insurance',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_insurance.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Car Dealer',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/car_dealer.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Furniture Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/furniture_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Jewelry Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/jewelry_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Clothing Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Electronics & Technology',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronics_technology.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Fitness and Nutrition',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/fitness_nutrition_center.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Pet Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/pet_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Energy Supplier',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/energy_supplier.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Real Estate Agents',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/real_estate_agents.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Insurance Agency',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/insurance_agency.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Bedroom Furniture',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bedroom_furniture.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Activewear Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/activewear.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: "Women's Clothing",
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/womens_clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: "Men's Clothing",
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mens_clothing_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Bicycle store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/bicycle_shop.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Shoe store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/shoe_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Mortgage Broker',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/mortgage_broker.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Appliance Store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/appliance_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Cosmetics store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/cosmetics_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Electronics store',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/electronic_store.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Garden Center',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/garden_center.svg",
                            icon: 'bi bi-heart-fill'
                        },
                        {
                            name: 'Travel Agency',
                            img: "https://consumersite-assets.trustpilot.net/consumersite-home/public/categories-icons/_rebrand/travel_agency.svg",
                            icon: 'bi bi-heart-fill'
                        },
                    ],
                },
            ],
            searchTerm: '',
            activeTabIndex: 0
        }
    },
    methods: {
        filteredFaqs(plans) {
            if (!this.searchTerm) {
                return plans;
            }
            const term = this.searchTerm.toLowerCase();
            return plans.filter(faq =>
                faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
            );
        },
    }
}
</script>
<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
    color: black !important;
}

.nav-link.active {
    background-color: black !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    border-radius: 2rem;
    transform: scale(1.2);
}
</style>