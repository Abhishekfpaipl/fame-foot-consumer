<template>
    <div class="container">
        <div class="my-4">
            <div class="pe-md-5 pe-0 my-5" v-for="(job, index) in resume.experience" :key="index">
                <div class="position-relative border bg-rounded bg-white">
                    <div class="d-flex gap-2 text-bg-light p-3 pe-0 pb-0">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RtG1nbTevktTfxpzyx-T-13zpDJwtLQz-A&s"
                            class="rounded" alt="" style="width: 50px; height: 50px;object-fit: cover;">
                        <div class="flex-fill d-flex flex-column justify-content-between">
                            <small class="mb-0 text-start fw-bold text-ellipsis2">{{ job.company }} Lorem ipsum dolor
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
                            <!-- <h5 class="accordion-header"> -->
                            <button class="accordion-button bg-light rounded-0" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#collapseOne' + index" aria-expanded="true"
                                :aria-controls="'collapseOne' + index">
                                <h5 class="text-center">{{ job.period }}</h5>
                            </button>
                            <!-- </h5> -->
                            <div :id="'collapseOne' + index" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p class="text-end smaller mb-0 ">{{ job.date }}</p>
                                    <p class="">{{ job.position }}</p>
                                    <p class="">{{ job.description }}</p>
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
    data() {
        return {
            resume: {
                experience: [
                    {
                        period: '2019 - 2022',
                        company: 'Company Name | 123 Anywhere St., Any City',
                        position: 'Job position here',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.',
                        icon: 'bi bi-exclamation',
                        iconColor: 'bg-warning',
                        date: '22 july 24',
                    },
                    {
                        period: '2019 - 2022',
                        company: 'Company Name | 123 Anywhere St., Any City',
                        position: 'Job position here',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.',
                        icon: 'bi bi-x',
                        iconColor: 'bg-danger',
                        date: '22 july 24',
                    },
                    {
                        period: '2019 - 2022',
                        company: 'Company Name | 123 Anywhere St., Any City',
                        position: 'Job position here',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.',
                        icon: 'bi bi-check',
                        iconColor: 'bg-success',
                        date: '22 july 24',
                    },

                ],
            }
        }
    },
    methods: {
        getClass(index) {
            return index % 2 === 0 ? 'text-white bg-danger' : 'text-white bg-success';
        },
        getIconClass(index) {
            return index % 2 === 0 ? 'bi bi-x' : 'bi bi-check';
        }
    }
}
</script>
<style>
.accordion-button:focus {
    z-index: 3;
    outline: 0;
    box-shadow: none !important;
}
</style>