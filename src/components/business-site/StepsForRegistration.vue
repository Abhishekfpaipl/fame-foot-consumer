<template>
    <div class="" style="background-color: var(--bg-forth)">
        <div class="container py-5 text-dark">
            <h1 class="text-center mb-4 text-capitalize">Get started in 3 simple steps</h1>
            <div class="row row-cols-1 row-cols-lg-3 g-3">
                <div v-for="(link, index) in links" :key="index" class="col">
                    <div class="card p-3 ">
                        <div style="color: var(--bg-primary);">
                            <div class="d-flex justify-content-center align-items-center">
                                <img :src="link.img" width="75" alt=""/>
                                <nuxt-icon :name="link.icon" class="fs-1"
                                    style="font-size: 50px !important; color: var(--bg-primary);" />
                            </div>
                            <h5 class="mt-3 text-center text-capitalize">{{ link.head }}</h5>
                            <p class="text-center w-100 text-capitalize small">{{ link.text }}</p>
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
            links: [
                {
                    id: 1,
                    img: '/img/registration/1.png',
                    icon: 'register',
                    head: 'Register Your Account',
                    text: 'Register your account and get verified.'
                },
                {
                    id: 2,
                    img: '/img/registration/2.png',
                    icon: 'accountsetup',
                    head: 'Setup Your Account',
                    text: 'Setup your account as per your business details.'
                },
                {
                    id: 3,
                    img: '/img/registration/registration.png',
                    icon: 'bootsales',
                    head: 'Boost your sales',
                    text: 'through various of our features'
                },
            ],
        }
    }
}
</script>