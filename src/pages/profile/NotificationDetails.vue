<template>
    <TopNav />
    <div class="container-fluid position-fixed w-100 bg-light" style="z-index: 99;top: 58px;">
        <div class="row border py-3 px-2">
            <div class="col-12 d-flex justify-content-between align-items-center">
                <div class="d-flex gap-2 align-items-center">
                    <i class="bi bi-chevron-left" @click=goback()></i>
                    <span class="text-capitalize">{{ pageName }}</span>
                </div>
                <div class="d-flex gap-2 align-items-center">
                    <p class="mb-0">Promotions</p>
                    <p class="mb-0">Coupon</p>
                    <p class="mb-0">Offer</p>
                </div>
            </div>
        </div>
    </div>


    <div class="" style="padding-top: 140px;">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="Promotion-tab" data-bs-toggle="tab"
                    data-bs-target="#Promotion-tab-pane" type="button" role="tab" aria-controls="Promotion-tab-pane"
                    aria-selected="true">Promotion</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="Offers-tab" data-bs-toggle="tab" data-bs-target="#Offers-tab-pane"
                    type="button" role="tab" aria-controls="Offers-tab-pane" aria-selected="false">Offers</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="Coupon-tab" data-bs-toggle="tab" data-bs-target="#Coupon-tab-pane"
                    type="button" role="tab" aria-controls="Coupon-tab-pane" aria-selected="false">Coupon</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="Promotion-tab-pane" role="tabpanel"
                aria-labelledby="Promotion-tab" tabindex="0">
                <div class="container mt-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <div v-for="(notification, index) in notifications" :key="index"
                                :class="['notification-item', notification.type]">
                                <i :class="notification.icon"></i>
                                <div>
                                    <strong>{{ notification.title }}</strong>
                                    <div>{{ notification.message }}</div>
                                    <small class="text-muted">{{ notification.time }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="Offers-tab-pane" role="tabpanel" aria-labelledby="Offers-tab" tabindex="0">
                <div class="container mt-4">
                    <div class="notification-list">
                        <div v-for="(notification, index) in offers" :key="index" class="notification-item mb-3">
                            <div class="card" :class="notification.color">
                                <div class="card-body d-flex align-items-center">
                                    <div class="icon-container me-3">
                                        <i :class="notification.icon"></i>
                                    </div>
                                    <div class="content flex-grow-1">
                                        <h5 class="card-title mb-0">{{ notification.title }}</h5>
                                        <p class="card-text small mb-0">{{ notification.description }}</p>
                                    </div>
                                    <div class="small text-muted">
                                        {{ notification.time }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="Coupon-tab-pane" role="tabpanel" aria-labelledby="Coupon-tab" tabindex="0">
                <div class="container mt-4">
                    <div class="offer-list">
                        <div v-for="(offer, index) in coupons" :key="index" class="offer-item mb-3">
                            <div class="card">
                                <div class="card-body d-flex align-items-center p-0 text-white"
                                    :style="{ backgroundColor: offer.color }">
                                    <div class="offer-content flex-grow-1 px-3 py-2">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <h5 class="card-title mb-0">{{ offer.brand }}</h5>
                                            <span class="discount">{{ offer.discount }} OFF</span>
                                        </div>
                                        <p class="card-text small mb-1">Valid until: {{ offer.validUntil }}</p>
                                        <button class="btn btn-sm btn-warning">Shop Now</button>
                                    </div>
                                </div>
                            </div>
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
            notifications: [
                {
                    type: "custom-action",
                    icon: "bi bi-lightning-charge text-warning",
                    title: "Custom Action:",
                    message: "Action Description",
                    time: "Time frame",
                },
                {
                    type: "task",
                    icon: "bi bi-file-text text-primary",
                    title: "Task assigned to you:",
                    message: "Aye yo, do this ting bruh",
                    time: "7 hours ago",
                },
                {
                    type: "notification",
                    icon: "bi bi-bell text-info",
                    title: "Notification triggered:",
                    message: "Michael is in the warehouse",
                    time: "",
                },
                {
                    type: "notification",
                    icon: "bi bi-bell text-info",
                    title: "Notification triggered:",
                    message: "Water spilled chill",
                    time: "",
                },
            ],
            pageName: '',
            offers: [
                {
                    title: 'Cannabies',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-flower1',
                    color: 'bg-light',
                    time: '12:00 AM'
                },
                {
                    title: 'Marijuana',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-flower2',
                    color: 'bg-danger text-white',
                    time: '2 Days Ago'
                },
                {
                    title: 'Free Delivery',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-geo-alt',
                    color: 'bg-light',
                    time: '12:00 AM'
                },
                {
                    title: 'Cannabies',
                    description: 'We have an Exciting Offers for you near to yo...',
                    icon: 'bi bi-flower1',
                    color: 'bg-light',
                    time: '2 Days Ago'
                }
            ],
            coupons: [
                {
                    brand: 'STARBUCKS COFFEE',
                    discount: '50%',
                    validUntil: '01-01-2023',
                    color: '#00704A'
                },
                {
                    brand: "Sam's CLUB",
                    discount: '25%',
                    validUntil: '15-11-2024',
                    color: '#004C97'
                },
                {
                    brand: 'BURGER KING',
                    discount: '75%',
                    validUntil: '30-12-2024',
                    color: '#D62300'
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
    methods: {
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