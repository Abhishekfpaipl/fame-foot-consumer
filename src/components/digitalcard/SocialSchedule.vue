<template>
    <div class="container my-3 py-3">
        <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Schedule ~</span></p>
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