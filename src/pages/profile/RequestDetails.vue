<template>
    <TopNav />
    <!-- <div class="container-fluid position-fixed w-100 bg-light" style="z-index: 99;top: 58px;">
        <div class="row border py-3 px-2">
            <div class="col-12 d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2 align-items-center">
                    <i class="bi bi-chevron-left" @click=goback()></i>
                    <span class="text-capitalize">{{ pageName }}</span>
                </div>
            </div>
        </div>
    </div> -->


    <div class="" style="padding-top: 140px;">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-2 my-4">
                <div v-for="(notification, index) in requests" :key="index" class="col">
                    <div class="card position-relative"  style="background-color:#FFF5DD !important;border-color:1px solid #FFCE56 !important">
                        <div class="card-body d-flex align-items-center gap-3 mt-3">
                            <div class="d-flex justify-content-center align-items-center rounded"
                                style="width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.3);">
                                <img src="/img/members/12.jpg" style="width:100%; height:100%" alt="">
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="text-start mb-0">{{ notification.title }}</h5>
                                <p class="text-start small mb-0">{{ notification.description }}</p>
                            </div>
                            <div class="small position-absolute top-0 end-0 rounded-start-3 border px-2 py-1 m-1">
                                {{ notification.time }}
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <button class="btn btn-success">Accept <i class="bi bi-check-lg"></i></button>
                            <button class="btn btn-danger">Decline <i class="bi bi-x"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <BottomNav />
</template>

<script>
import BottomNav from "@/components/profile/BottomNav.vue";
import TopNav from "@/components/profile/TopNav.vue";

export default {
    components: {
        BottomNav,
        TopNav,
    },
    data() {
        return {
            pageName: '',
            requests: [
                {
                    title: 'Cannabies',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-flower1',
                    color: 'text-bg-dark',
                    time: '12:00 AM'
                },
                {
                    title: 'Marijuana',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-flower2',
                    color: 'text-bg-warning',
                    time: '2 Days Ago'
                },
                {
                    title: 'Free Delivery',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-geo-alt',
                    color: 'text-bg-success',
                    time: '12:00 AM'
                },
                {
                    title: 'Cannabies',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-flower1',
                    color: 'text-bg-info',
                    time: '2 Days Ago'
                }
            ],
        };
    },
    mounted() {
        let path = this.$route.path;
        path = path.replace(/^\/|\/$/g, '');
        path = path.replace(/-/g, ' ');
        this.pageName = path;
        console.log(this.pageName);
    },
    methods:{
        goback() {
           window.history.back();
        }
    }
};
</script>

<style scoped>
.notification-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
}


.discount {
    font-weight: bold;
    color: #FF6B00;
}

.btn-warning {
    background-color: #FF6B00;
    border-color: #FF6B00;
    color: white;
}

.btn-warning:hover {
    background-color: #E66000;
    border-color: #E66000;
    color: white;
}
</style>