<template>
    <div class="container">
        <h1 class="text-center my-3">It's your business. Let it shine.</h1>
        <div class="row d-flex align-items-center">
            <div class="col-md-6">
                <img src="https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/41ad42df-7982-4637-8fd5-8ff1a3334205/feat-resellers-lets-talk-about-money.jpg"
                    alt="" style="width:100%">
            </div>
            <div class="col-md-6">
                <h3>Let's talk about money. Lots of it.</h3>
                <p>While other reseller programs may talk about commission rates, ours stands out from the crowd. Here
                    you can set your own margins. That's right, you pick and choose how much money you make off each
                    product. It feels good to have that power, right?</p>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-5 my-5">
            <div class="col" v-for="(link, index) in links" :key="index">
                <h4 class="text-start">{{ link.title }}</h4>
                <p class="text-start">{{ link.description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProfitSection",
    data() {
        return {
            links: [
                { title: "Selling made easy.", description: "Want to upsell your customers into something bigger and better? We can do that for you, bringing in more income for your business. It's like having a great salesperson on your team that works for free." },
                { title: "Access and manage your customer accounts.", description: "When a new customer creates an account on your reseller storefront, you get automatic access plus the option to purchase and manage products on their behalf. We quietly provide the tools and technology, while you build rapport and trust with your customers." },
                { title: "Offer great promotions and get robust reports.", description: "Keep your customers coming back by refreshing services and prices often. Choose from numerous promotions and decide how long to run them. We'll supply detailed reports to help you expand your service offerings and drive sales." }
            ]
        }
    }
}
</script>
<style lang="">

</style>