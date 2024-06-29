<template>
    <div class="container py-3">
        <h1 class="px-2 py-3 text-center mb-0"> Schedule </h1>
        <div class="d-flex justify-content-center">
            <div class="container row ">
                <div class="col-md-3 m-1 col-1 card card-body bg-light text-secondary">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-clock-fill fs-1 me-3"></i>
                        <div class="">
                            <span class="fw-bold">09:00 AM </span> —
                            <span class="fw-bold"> 09:00 PM</span>
                            <div class="d-flex">
                                <div v-for="(week, index) in weeks" :key="index">
                                    <div class="d-flex">
                                        <small style="font-size: var(--x-small)" class="week-label truncate3">
                                            <span class="fw-bold">{{ week.day }}</span>
                                            <span v-if="index !== weeks.length - 1"> &nbsp;|&nbsp; </span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 m-1 card card-body bg-light text-secondary">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-clock-fill fs-1 me-3"></i>
                        <div class="">
                            <span class="fw-bold">09:00 AM </span> —
                            <span class="fw-bold"> 09:00 PM</span>
                            <div class="d-flex">
                                <div v-for="(week, index) in weeks" :key="index">
                                    <div class="d-flex">
                                        <small style="font-size: var(--x-small)" class="week-label truncate3">
                                            <span class="fw-bold">{{ week.day }}</span>
                                            <span v-if="index !== weeks.length - 1"> &nbsp;|&nbsp; </span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 m-1 col-1 card card-body bg-light text-secondary">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-clock-fill fs-1 me-3"></i>
                        <div class="">
                            <span class="fw-bold">09:00 AM </span> —
                            <span class="fw-bold"> 09:00 PM</span>
                            <div class="d-flex">
                                <div v-for="(week, index) in weeks" :key="index">
                                    <div class="d-flex">
                                        <small style="font-size: var(--x-small)" class="week-label truncate3">
                                            <span class="fw-bold">{{ week.day }}</span>
                                            <span v-if="index !== weeks.length - 1"> &nbsp;|&nbsp; </span>
                                        </small>
                                    </div>
                                </div>
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
    name: 'SocialSchedule',
    data() {
        return {
            folows: [
                {
                    icon: 'bi bi-facebook fs-3',
                    name: 'Facebook',
                    url: 'https://www.facebook.com/yourpage'
                },
                {
                    icon: 'bi bi-instagram fs-3',
                    name: 'Instagram',
                    url: 'https://www.instagram.com/yourprofile'
                },
                {
                    icon: 'bi bi-youtube fs-3',
                    name: 'YouTube',
                    url: 'https://www.youtube.com/'
                },
                {
                    icon: 'bi bi-linkedin fs-3',
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/yourprofile'
                },
            ],
            weeks: [
                { day: 'Mon' },
                { day: 'Tue' },
                { day: 'Wed' },
                { day: 'Thu' },
                { day: 'Fri' },
                { day: 'Sat' },
                { day: 'Sun' },
            ]
        }
    }

}
</script>

<style lang="scss" scoped></style>