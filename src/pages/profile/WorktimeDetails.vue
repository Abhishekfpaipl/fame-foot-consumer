<template>
    <div class="container mt-3">
        <p class="fs-5 text-center">Work Timing</p>
    </div>
    <div class="container">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header d-flex align-items-center ">
                    <div class="btn-group w-100 rounded-2 bg-light" role="group" aria-label="Basic radio toggle button group">
                        <div class="d-flex align-items-center border-bottom" data-bs-toggle="collapse"
                            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="bi bi-plus px-o m-1"></i>
                        </div>
                        <div class="accordion-button bg-light" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            Working Hours
                        </div>
                    </div>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="collapse show" id="collapseExample">
                            <div class="card card-body">
                                <div style="font-size: var(--x-small);" class="d-flex justify-content-between">
                                    <div class="form-group mb-3">
                                        <label for="startDate" class="form-label">Select Start Time:</label>
                                        <input type="time" class="form-control" id="startDate" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="endDate" class="form-label">Select End Time:</label>
                                        <input type="time" class="form-control" id="endDate" />
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap justify-content-between">
                                    <div v-for="(week, index) in weeks" :key="index">
                                        <div class="d-flex border rounded p-2"
                                            :class="{ 'bg-primary text-white': isWeekSelected(index) }"
                                            @click="toggleWeek(index)">
                                            <small style="font-size: var(--x-small)" class="week-label truncate3">{{ week.shortLabel }}</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <button class="btn btn-primary w-100 mx-1" @click="submitWeeks">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container mt-3">
                        <h2>Selected Weeks:</h2>
                        <div v-if="selectedWeeks.length > 0">
                            <div v-for="(group, index) in selectedWeeks" :key="index" class="card card-body">
                                <div class="d-flex justify-content-between">
                                    <p v-if="group.isClosed">This day is closed.</p>
                                    <p v-else>
                                        <span class="fw-bold">Start Time:</span> {{ group.startDate }}
                                    </p>
                                    <p v-if="!group.isClosed">
                                        <span class="fw-bold">End Time:</span> {{ group.endDate }}
                                    </p>
                                </div>
                                <h3>{{ group.label }}</h3>
                                <button class="btn btn-danger" @click="deleteGroup(index)">Delete</button>
                            </div>
                        </div>
                        <div v-else>
                            <p>No weeks selected.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RouterLink to=/BusinessType class="w-100">
            <button class="btn btn-dark w-100 py-3 my-3" type="submit">Save & Continue</button>
        </RouterLink>
    </div>
</template>

<script>
export default {
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
        };
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
        toggleWeek(index) {
            if (this.isWeekDisabled(index)) return;

            if (this.selectedIndexes.includes(index)) {
                this.selectedIndexes = this.selectedIndexes.filter((i) => i !== index);
            } else {
                this.selectedIndexes.push(index);
            }
        },
        submitWeeks() {
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;

            if (startDate && endDate) {
                const selectedWeekLabels = this.selectedIndexes
                    .map(index => this.weeks[index].label);
                
                const groups = this.groupConsecutiveDays(selectedWeekLabels);

                const newSelectedWeeks = groups.map(group => ({
                    label: group.join(', '),
                    startDate,
                    endDate,
                    isClosed: false
                }));

                this.selectedWeeks = [...this.selectedWeeks, ...newSelectedWeeks];
                this.disableSelectedWeeks();
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
        }
    }
};
</script>

<style scoped></style>
