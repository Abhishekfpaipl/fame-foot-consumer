<template>
    <TopNav />
    <div class="container-fluid position-fixed w-100 bg-light" style="z-index: 99;top: 58px;">
        <div class="row border py-3 px-2">
            <div class="col-12 d-flex gap-2 align-items-center">
                <i class="bi bi-chevron-left" @click=goback()></i>
                <span class="text-capitalize">{{ pageName }}</span>
            </div>
        </div>
    </div>
    <div class="" style="padding-top: 140px;">
        <h4 class="text-center">Add Business Timings</h4>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card">
                    <h4 class="text-center my-3">Selected Weeks:</h4>
                    <div v-if="selectedWeeks.length > 0">
                        <div v-for="(group, index) in selectedWeeks" :key="index" class="">
                            <div class="d-flex justify-content-between px-2">
                                <p v-if="group.isClosed">This day is closed.</p>
                                <p v-else>
                                    <span class="fw-bold">Start Time:</span> {{ group.startDate }}
                                </p>
                                <p v-if="!group.isClosed">
                                    <span class="fw-bold">End Time:</span> {{ group.endDate }}
                                </p>
                            </div>
                            <p class="fw-bold my-2">{{ group.label }}</p>
                            <button class="btn btn-danger" @click="deleteGroup(index)">Delete</button>
                        </div>
                    </div>
                    <div v-else>
                        <div class="d-flex justify-content-between px-2">
                            <span><span class="fw-bold me-2">Start Time:</span>08:00</span>
                            <span><span class="fw-bold me-2">End Time:</span>05:00</span>
                        </div>
                        <p class="fw-bold my-2">Monday, Tuesday, Wednesday</p>
                        <button class="btn btn-danger my-2">Delete</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 mt-2 mt-md-0">
                <div class="card card-body">
                    <small class="text-start">Let your customers know when you are open for business</small>
                    <p class="text-start my-2">Select days of the week</p>
                    <div class="d-flex flex-wrap justify-content-start gap-2">
                        <div v-for="(week, index) in weeks" :key="index"
                            class="d-flex justify-content-center border rounded-circle p-2 "
                            style="height: 45px; width: 45px;"
                            :class="{ 'bg-primary text-white': isWeekSelected(index) }" @click="toggleWeek(index)">
                            <small>{{ week.shortLabel }}</small>
                        </div>
                    </div>
                    <div class="form-check text-start ms-2 mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="agree"
                            @change="selectAllDays">
                        <label class="form-check-label small text-capitalize" for="flexCheckDefault">
                            Select all days
                        </label>
                    </div>
                    <div v-for="(slot, index) in timeSlots" :key="index" class="d-flex gap-2 my-3">
                        <div class="form-floating mb-3 w-50">
                            <input type="time" class="form-control" v-model="slot.start" />
                            <label class="form-label">Select Start Time:</label>
                        </div>
                        <div class="form-floating mb-3 w-50">
                            <input type="time" class="form-control" v-model="slot.end" />
                            <label class="form-label">Select End Time:</label>
                        </div>
                    </div>
                    <p class="text-start" @click="addTimeSlot"><i class="bi bi-plus me-2"></i> Add another time slot</p>
                    <div class="d-flex mt-2">
                        <button class="btn btn-primary w-100 mx-1" @click="submitWeeks">Submit</button>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn btn-dark w-100 my-3" type="submit" @click="submitData()">Save & Continue <i
                class="bi bi-arrow-right"></i></button>

    </div>
</template>

<script>
import TopNav from "@/components/profile/TopNav.vue";
export default {
    components: {
        TopNav
    },
    data() {
        return {
            weeks: [
                { shortLabel: "Mon", label: "Monday" },
                { shortLabel: "Tue", label: "Tuesday" },
                { shortLabel: "Wed", label: "Wednesday" },
                { shortLabel: "Thu", label: "Thursday" },
                { shortLabel: "Fri", label: "Friday" },
                { shortLabel: "Sat", label: "Saturday" },
                { shortLabel: "Sun", label: "Sunday" },
            ],
            selectedIndexes: [],
            selectedWeeks: [],
            disabledWeeks: [],
            pageName: '',
            agree: false,
            timeSlots: [{ start: '', end: '' }]
        }
    },
    mounted() {
        let path = this.$route.path;
        path = path.replace(/^\/|\/$/g, '');
        path = path.replace(/-/g, ' ');
        this.pageName = path;
        console.log(this.pageName);
    },
    computed: {
        isWeekSelected() {
            return (index) => this.selectedIndexes.includes(index);
        },
        isWeekDisabled() {
            return (index) => this.disabledWeeks.includes(index);
        },
    },
    methods: {
        goback() {
            window.history.back();
        },
        toggleWeek(index) {
            if (this.isWeekDisabled(index)) return;

            if (this.selectedIndexes.includes(index)) {
                this.selectedIndexes = this.selectedIndexes.filter((i) => i !== index);
            } else {
                this.selectedIndexes.push(index);
            }
        },
        selectAllDays() {
            if (this.agree) {
                this.selectedIndexes = this.weeks.map((_, index) => index);
            } else {
                this.selectedIndexes = [];
            }
        },
        addTimeSlot() {
            this.timeSlots.push({ start: '', end: '' });
        },
        submitWeeks() {
            if (this.timeSlots.every(slot => slot.start && slot.end)) {
                const selectedWeekLabels = this.selectedIndexes.map(index => this.weeks[index].label);
                const groups = this.groupConsecutiveDays(selectedWeekLabels);

                const newSelectedWeeks = groups.map(group => ({
                    label: group.join(', '),
                    startDate: this.timeSlots[0].start,
                    endDate: this.timeSlots[0].end,
                    isClosed: false
                }));

                this.selectedWeeks = [...this.selectedWeeks, ...newSelectedWeeks];
                this.disableSelectedWeeks();
                this.timeSlots = [{ start: '', end: '' }];
            }
        },
        groupConsecutiveDays(days) {
            const dayIndices = days.map(day => this.weeks.findIndex(week => week.label === day));
            dayIndices.sort((a, b) => a - b);

            const groups = [];
            let group = [];

            for (let i = 0; i < dayIndices.length; i++) {
                if (group.length === 0 || dayIndices[i] === dayIndices[i - 1] + 1) {
                    group.push(this.weeks[dayIndices[i]].label);
                } else {
                    groups.push(group);
                    group = [this.weeks[dayIndices[i]].label];
                }
            }

            if (group.length > 0) {
                groups.push(group);
            }

            return groups;
        },
        disableSelectedWeeks() {
            this.disabledWeeks = [...this.selectedIndexes];
            this.selectedIndexes = [];
        },
        deleteGroup(index) {
            const deletedGroup = this.selectedWeeks.splice(index, 1)[0];
            const deletedLabels = deletedGroup.label.split(', ');
            const deletedIndices = deletedLabels.map(label => this.weeks.findIndex(week => week.label === label));
            this.disabledWeeks = this.disabledWeeks.filter(index => !deletedIndices.includes(index));
        },
        submitData() {
            console.log("Form submitted!");
            this.$router.push('/category-details');
        }
    }
};
</script>

<style scoped></style>
