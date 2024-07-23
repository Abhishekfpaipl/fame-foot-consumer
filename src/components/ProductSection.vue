<template>
    <div class="container">
        <h1 class="text-center my-3">Earn money online with a wide range of great products.</h1>
        <div class="row row-cols-1 row-cols-md-4 g-5 my-5">
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
                { title: "Domain Names", description: "Sell any of our hundreds of new domains, including .ninja, .xyz and more." },
                { title: "Web Hosting", description: "Hosting that's lightning-fast and packed with features." },
                { title: "Business-Grade Email", description: "Our worry-free email solution." },
                { title: "Website Builder", description: "A DIY solution for your customers." },
                { title: "SSL Certificates", description: "Keep sites safe, sound and 100% secure with the strongest encryption out there." },
                { title: "Servers", description: "Whether it's dedicated or virtual private, we have your server options covered." },
                { title: "Website Security Powered by Sucuri", description: "Protection from malware, hacking and more." },
                { title: "Managed WordPress", description: "Hosting made specifically for WordPress, minus the stress." },
            ]
        }
    }
}
</script>
<style lang="">

</style>