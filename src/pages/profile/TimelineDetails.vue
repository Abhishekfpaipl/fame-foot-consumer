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

                    <div class="w-100 form-floating my-2">
                        <input type="text" class="form-control" placeholder="" v-model="heading" required>
                        <label for="floatingInput" class="text-muted ms-2">Heading</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <input type="text" class="form-control" placeholder="" v-model="subheading" required>
                        <label for="floatingInput" class="text-muted ms-2">Sub Heading</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                            v-model="description"></textarea>
                        <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <input type="text" class="form-control" placeholder="Mobile" v-model="id" required>
                        <label class="ms-2 text-muted">Approver Id</label>
                    </div>
                    <div class="w-100 form-floating my-2">
                        <input type="date" class="form-control" placeholder="Mobile" v-model="date" required>
                        <label class="ms-2 text-muted">Date</label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-dark py-2 fs-5 w-100 rounded-0" data-bs-dismiss="offcanvas"
                            type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="container" style="padding-top: 140px;">

            <div class="pe-md-5 pe-0 my-5" v-for="(job, index) in timeline" :key="index">
                <div class="position-relative border bg-rounded bg-white">
                    <div class="d-flex gap-2 text-bg-light p-3 pe-0 pb-0">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RtG1nbTevktTfxpzyx-T-13zpDJwtLQz-A&s"
                            class="rounded" alt="" style="width: 50px; height: 50px;object-fit: cover;">
                        <div class="flex-fill d-flex flex-column justify-content-between">
                            <small class="mb-0 text-start fw-bold text-ellipsis2 pe-2">{{ job.id }} Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Itaque totam nobis alias repellat non cumque
                                laudantium facere a! Atque, tempora!</small>
                            <div class="text-end mt-3 mt-md-0">
                                <span :class="job.iconColor" class="px-1 rounded-start-3 text-white">
                                    <i :class="job.icon" class=""></i>
                                </span>
                            </div>
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
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end align-items-center gap-3">
                    <span class="text-white px-1 wh-40 rounded-circle mt-2 me-2"
                        style="background-color: #3a3c3d7a !important">
                        <i class="bi bi-trash"></i>
                    </span>
                    <span class="text-white px-1 wh-40 rounded-circle mt-2 me-2"
                        style="background-color: #3a3c3d7a !important">
                        <i class="bi bi-pencil-square"></i>
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
            timeline: [
                {
                    heading: '2019 - 2022',
                    id: 'Company Name | 123 Anywhere St., Any City',
                    sub_heading: 'Job position here',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.',
                    icon: 'bi bi-exclamation',
                    iconColor: 'bg-warning',
                    date: '22 july 24',
                },
                {
                    heading: '2019 - 2022',
                    id: 'Company Name | 123 Anywhere St., Any City',
                    sub_heading: 'Job position here',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.',
                    icon: 'bi bi-x',
                    iconColor: 'bg-danger',
                    date: '22 july 24',
                },
                {
                    heading: '2019 - 2022',
                    id: 'Company Name | 123 Anywhere St., Any City',
                    sub_heading: 'Job position here',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.',
                    icon: 'bi bi-check',
                    iconColor: 'bg-success',
                    date: '22 july 24',
                },

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
        goback() {
            window.history.back();
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
    }
}
</script>