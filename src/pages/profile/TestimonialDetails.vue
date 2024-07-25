<template>
    <TopNav />
    <div>
        <div class="container-fluid position-fixed w-100 bg-light" style="z-index: 99;top: 58px;">
            <div class="row border py-3 px-2">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div class="d-flex gap-2 align-items-center">
                        <i class="bi bi-chevron-left" @click=goback()></i>
                        <span class="text-capitalize">{{ pageName }}</span>
                    </div>
                    <i class="bi bi-plus btn border" data-bs-toggle="offcanvas" data-bs-target="#createShowcase"
                        aria-controls="createShowcase"></i>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="createShowcase" aria-labelledby="createShowcaseLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="createShowcaseLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation border p-2 py-4">

                    <!-- <div class="w-100 form-floating my-2">
                        <input type="text" class="form-control" placeholder="" v-model="heading" required>
                        <label for="floatingInput" class="text-muted ms-2">Heading</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <input type="text" class="form-control" placeholder="" v-model="subheading" required>
                        <label for="floatingInput" class="text-muted ms-2">Sub Heading</label>
                    </div> -->
                    <div class="w-100 form-floating my-2">
                        <input type="text" class="form-control" placeholder="Mobile" v-model="id" required>
                        <label class="ms-2 text-muted">Approver Id</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                            v-model="description"></textarea>
                        <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <input type="date" class="form-control" placeholder="Mobile" v-model="date" required>
                        <label class="ms-2 text-muted">Date</label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-dark py-2 fs-5 w-100 rounded-0" data-bs-dismiss="offcanvas"
                            type="submit">Submit</button>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <select class="form-select" v-model="selectedTag" @change="addTag">
                            <option disabled value="">Open this select menu</option>
                            <option value="Total">Total</option>
                            <option value="Regularity">Regularity</option>
                            <option value="Accuracy">Accuracy</option>
                            <option value="Performance">Performance</option>
                            <option value="Punctuality">Punctuality</option>
                            <option value="Health">Health</option>
                            <option value="Trustful">Trustful</option>
                            <option value="Efficiency">Efficiency</option>
                        </select>
                    </div>

                    <div class="w-100 my-2">
                        <div class="badge bg-secondary me-1 mb-1" v-for="(tag, index) in tags" :key="index">
                            {{ tag }}
                            <i class="bi bi-x-circle ms-2" style="cursor:pointer;" @click="removeTag(index)"></i>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="container" style="padding-top: 140px;">

            <div class="pe-md-5 pe-0 my-5" v-for="(job, index) in timeline" :key="index">
                <div class="position-relative border bg-rounded bg-white">
                    <div class="d-flex justify-content-end align-items-center">
                        <span :class="['px-1 rounded-start-3', job.pin ? 'text-bg-success' : 'text-bg-secondary']"
                            @click="togglePin(index)">
                            <i :class="['bi', job.pin ? 'bi-pin-angle-fill' : 'bi-pin-angle']"></i>
                        </span>
                    </div>
                    <div class="d-flex gap-2 text-bg-light p-3 ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RtG1nbTevktTfxpzyx-T-13zpDJwtLQz-A&s"
                            class="rounded" alt="" style="width: 50px; height: 50px;object-fit: cover;">
                        <div class="">
                            <small class="mb-0 text-start fw-bold text-ellipsis2 pe-2">{{ job.id }} Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Itaque totam nobis alias repellat non cumque
                                laudantium facere a! Atque, tempora!</small>

                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <button class="accordion-button bg-light rounded-0" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#collapseOne' + index" aria-expanded="true"
                                :aria-controls="'collapseOne' + index">
                                <h5 class="text-center">{{ job.heading }}</h5>
                            </button>
                            <div :id="'collapseOne' + index" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p class="text-end smaller mb-0 ">{{ job.date }}</p>
                                    <p class="">{{ job.sub_heading }}</p>
                                    <p class="">{{ job.description }}</p>
                                </div>
                            </div>
                            <div class="d-flex p-2 overflow-x-scroll mt-3" id="scroll">
                                <div class="" style="min-width: 100px;" v-for="(skill, index) in skills" :key="index">
                                    <p class="smaller">Out of 10</p>
                                    <div class="skill-circle">
                                        <div class="circle-wrap" :style="getCircleStyle(skill.score)">
                                            <div class="inside-circle fs-5">{{ skill.score }}</div>
                                        </div>
                                    </div>
                                    <p class="text-center mt-2 smaller">{{ skill.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end align-items-center gap-3">
                    <span class="text-bg-secondary btn mt-2 me-2">
                        <i class="bi bi-trash"></i>
                    </span>
                    <span class="text-white mt-2 me-2"
                        :class="['btn', job.approved ? 'text-bg-secondary' : 'text-bg-danger']"
                        @click="toggleApprove(index)">
                        <!-- <span class="me-2">{{ job.approved ? 'Approved' : 'Approve' }}</span> -->
                        <span class="me-2">Approve</span>
                        <i :class="['bi', job.approved ? 'bi-check-circle' : 'bi-info-circle']"></i>
                    </span>

                </div>
            </div>
        </div>
    </div>
    <BottomNav />
</template>
<script>
import BottomNav from "@/components/profile/BottomNav.vue"
import TopNav from "@/components/profile/TopNav.vue";
export default {
    components: {
        BottomNav,
        TopNav,
    },
    data() {
        return {
            pageName: '',
            heading: '',
            subheading: '',
            description: '',
            id: '',
            date: '',
            selectedTag: '',
            tags: [],
            timeline: [
                {
                    heading: '2019 - 2022',
                    id: 'Company Name | 123 Anywhere St., Any City',
                    sub_heading: 'Job position here',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.',
                    icon: 'bi bi-exclamation',
                    iconColor: 'bg-warning',
                    date: '22 july 24',
                    pin: false,
                    approved: false,
                },
                {
                    heading: '2019 - 2022',
                    id: 'Company Name | 123 Anywhere St., Any City',
                    sub_heading: 'Job position here',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.',
                    icon: 'bi bi-x',
                    iconColor: 'bg-danger',
                    date: '22 july 24',
                    pin: false,
                    approved: false,
                },
                {
                    heading: '2019 - 2022',
                    id: 'Company Name | 123 Anywhere St., Any City',
                    sub_heading: 'Job position here',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.',
                    icon: 'bi bi-check',
                    iconColor: 'bg-success',
                    date: '22 july 24',
                    pin: false,
                    approved: false,
                },

            ],
            skills: [
                { name: 'Total', score: 9 },
                { name: 'Regularity', score: 9 },
                { name: 'Accuracy', score: 8 },
                { name: 'Performance', score: 7 },
                { name: 'Punctuality', score: 6 },
                { name: 'Health', score: 5 },
                { name: 'Trustful', score: 4 },
                { name: 'Efficiency', score: 4 },
            ],
        }
    },
    mounted() {
        let path = this.$route.path;
        path = path.replace(/^\/|\/$/g, '');
        path = path.replace(/-/g, ' ');
        this.pageName = path;
        console.log(this.pageName);
    },
    methods: {
        addTag() {
            if (this.selectedTag && !this.tags.includes(this.selectedTag)) {
                this.tags.push(this.selectedTag);
            }
            this.selectedTag = '';
        },
        removeTag(index) {
            this.tags.splice(index, 1);
        },
        goback() {
            window.history.back();
        },
        togglePin(index) {
            this.timeline[index].pin = !this.timeline[index].pin;
        },
        toggleApprove(index) {
            this.timeline[index].approved = !this.timeline[index].approved;
        },
        submitQuery() {
            let data = {
                id: this.id,
                heading: this.heading,
                sub_heading: this.subheading,
                description: this.description,
                date: this.date,
            }
            this.timeline.push(data)
            console.log("Form submitted" + data.id, data.heading, data.sub_heading, data.description, data.date);
            // this.id = '',
            //     this.heading = '',
            //     this.subheading = '',
            //     this.description = '',
            //     this.date = '',
        },
        getCircleStyle(score) {
            const percentage = (score / 10) * 100;
            return {
                background: `conic-gradient(#ffc107 0deg ${percentage * 3.6}deg, #e6e2e7 ${percentage * 3.6}deg 360deg)`
            };
        },
    }
}
</script>
<style scoped>
.skill-circle {
    width: 45px;
    height: 45px;
    margin: 0 auto;
    position: relative;
}

.circle-wrap {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inside-circle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-weight: 700;  */
}
</style>