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


    <div class="" style="padding-top: 70px;">
        <div class="container">
            <h3 class="text-center">Request </h3>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 my-4">
                <div v-for="(notification, index) in requests" :key="index" class="col">
                    <div class="card position-relative border"  :style="{ background: notification.bgColor + '!important', borderColor: notification.borderColor + '!important'}">
                        <div class="card-body d-flex align-items-center gap-3 mt-3">
                            <img src="/img/members/12.jpg" style="min-width: 40px; height: 40px; object-fit: cover;" alt="">
                            <!-- <div class="d-flex justify-content-center align-items-center rounded"
                                style="width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.3);">
                            </div> -->
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
                    time: '12:00 AM',
                    bgColor:'#ebe0ff',
                    borderColor: '#a984ff'
                },
                {
                    title: 'Marijuana',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-flower2',
                    color: 'text-bg-warning',
                    time: '2 Days Ago',
                    bgColor:'#ffe0e6',
                    borderColor: '#e56f89'
                },
                {
                    title: 'Free Delivery',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-geo-alt',
                    color: 'text-bg-success',
                    time: '12:00 AM',
                    bgColor:'#dcf1f4',
                    borderColor: '#73ccc6'
                },
                {
                    title: 'Cannabies',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-flower1',
                    color: 'text-bg-info',
                    time: '2 Days Ago',
                    bgColor:'#feecd8',
                    borderColor: '#eca454'
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