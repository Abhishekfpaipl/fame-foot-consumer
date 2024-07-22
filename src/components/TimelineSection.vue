<template>
    <div>
        <div class="timeline position-relative mx-auto">
            <div class="timeline-item pe-md-5 pe-0" v-for="(job, index) in resume.experience" :key="index">
                <div class="position-relative shadow bg-rounded bg-white">
                    <div class="d-md-flex gap-3 text-bg-dark p-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RtG1nbTevktTfxpzyx-T-13zpDJwtLQz-A&s"
                            class="rounded" alt="" style="width: 50px; height: 50px;object-fit: cover;">
                        <h5 class="mb-0">{{ job.company }}</h5>
                    </div>
                    <div class="text-bg-secondary text-center p-2">
                        <p class="mb-0">{{ job.period }}</p>
                    </div>
                    <div class="p-3">
                        <p class="">{{ job.position }}</p>
                        <p class="timeline-description">{{ job.description }}</p>
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
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.'
                    },
                    {
                        period: '2019 - 2022',
                        company: 'Company Name | 123 Anywhere St., Any City',
                        position: 'Job position here',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.'
                    },
                    {
                        period: '2019 - 2022',
                        company: 'Company Name | 123 Anywhere St., Any City',
                        position: 'Job position here',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio est repellat eaque harum nostrum perferendis ipsa voluptate iste, necessitatibus dolore ducimus praesentium, modi consequatur, assumenda sint at laboriosam neque.'
                    },

                ],
            }
        }
    }
}
</script>
<style >

.timeline {
    position: relative; 
    margin: 0 auto;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #333;
    top: 0;
    bottom: 0;
    left: 0%;
    margin-left: -3px;
}

.timeline-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 100%;
}

.timeline-item::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -12px;
    background-color: white;
    border: 4px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

/* .timeline-item:nth-child(odd) {
    left: 0;
} */

.timeline-item {
    left: 0%;
}

.timeline-item::after {
    left: -12px;
}


@media screen and (max-width: 600px) {
    .timeline::after {
        left: 31px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 60px;
        padding-right: 25px;
    }

    .timeline-item::after {
        left: 18px !important;
    }

    .timeline-item:nth-child(even) {
        left: 0%;
    }
}
</style>