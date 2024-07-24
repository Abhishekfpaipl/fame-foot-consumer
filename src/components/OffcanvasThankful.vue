<template>
    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="Thankful" aria-labelledby="Thankful">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="Review">Review</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="container my-5">
            <h1 class="px-2 text-center mb-5">Testimonials</h1>
            <div class="position-relative">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col-12" v-for="(team, index) in reviews" :key="index">
                        <div class="card position-relative" style="min-width: 18rem;">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center gap-2 mb-2 p-2 bg-light border-bottom">
                                    <img :src="team.img" class="rounded-circle" alt="..."
                                        style="height:60px;width: 60px;object-fit: cover;object-position: top;">
                                    <div class="ms-2">
                                        <h5 class="lh-1 text-start">{{ team.name }}</h5>
                                        <div class="d-flex gap-2 overflow-x-scroll w-75" id="scroll">
                                            <img :src="image" style="width: 20px; height: 20px; object-fit: contain;"
                                                v-for="image in images" :key="image.id" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2" style="min-height:235px">
                                    <p class="smaller pe-1 text-end">{{ team.date }}</p>
                                    <p class="text-ellipsis7"><span class="fw-bold">"</span> {{ team.value }} <span
                                            class="fw-bold">"</span></p>
                                </div>
                                <div class="position-absolute end-0 text-dark" style="font-size: 12px;top: 55px;">
                                    <span class="bg-light border p-1 px-2 rounded-start-3">
                                        <i class="bi bi-star-fill text-warning small me-2"></i>
                                        <span class="fw-bold">{{ team.user_rating }}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="card-footer p-0">
                                <div class="d-flex p-2 overflow-x-scroll mt-3" id="scroll">
                                    <div class="" style="min-width: 100px;" v-for="(skill, index) in skills"
                                        :key="index">
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
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoSection',
    data() {
        return {
            reviews: [
                {
                    id: 1,
                    name: "Piyush Gupta",
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "CTO",
                    img: "img/members/12.jpg",
                    value: "Leads the company's technology strategy, oversees software development and IT infrastructure, and ensures the organization stays at the forefront of technological innovation."
                },
                {
                    id: 2,
                    name: "Santosh Kumar",
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Backend Developer",
                    img: "img/members/13.jpg",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    id: 3,
                    name: "Satpal Rawat",
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Backend Developer",
                    img: "img/members/14.jpg",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    id: 454,
                    name: "Vivek Kumar",
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Backend Developer",
                    img: "img/members/15.jpg",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    id: 1232,
                    name: "Jatin Bhardwaj",
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Backend Developer",
                    img: "img/members/16.jpg",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    id: 12323,
                    name: "Abhishek Negi",
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    img: "img/members/17.jpg",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
                {
                    id: 1988,
                    name: "Nikhil Garg",
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    img: "img/members/18.jpg",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
                {
                    id: 100,
                    name: "Harmanpreet Singh",
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    img: "img/members/19.jpg",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
                {
                    id: 112324,
                    name: "Shivam Sharma",
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    img: "img/members/12.jpg",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
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
            expandedReviews: [],
            images: [
                "/img/members/1.png",
                "/img/members/2.webp",
                "/img/members/3.png",
                "/img/members/4.png",
                "/img/members/5.jpg",
                "/img/members/6.webp",
                "/img/members/7.jpeg",
                "/img/members/8.png",
            ],
            selectedReview: 0,
        }
    },
    computed: {
        infiniteReviews() {
            return this.reviews;
        },
        getSelectedReviewText() {
            return this.infiniteReviews[this.selectedReview];
        },
    }, 
    methods: {
        getCircleStyle(score) {
            const percentage = (score / 10) * 100;
            return {
                background: `conic-gradient(#ffc107 0deg ${percentage * 3.6}deg, #e6e2e7 ${percentage * 3.6}deg 360deg)`
            };
        }, 
        toggleExpand(index) {
            const expandedIndex = this.expandedReviews.indexOf(index);
            if (expandedIndex === -1) {
                this.expandedReviews.push(index);
            } else {
                this.expandedReviews.splice(expandedIndex, 1);
            }
        },
        isExpanded(index) {
            return this.expandedReviews.includes(index);
        },
    }
}
</script>

<style scoped>
#scroll::-webkit-scrollbar {
    display: none;
}

.bi-chevron-down {
    transition: transform 0.3s ease;
}

.rating-text {
    height: 50px;
    overflow: hidden;
}

.rating-text.expanded {
    height: auto;
}

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

.btn.selectedDiv {
    border: 2px solid var(--brand-color);
}

img {
    width: 80px;
    height: 80px;
    object-fit: cover;
}

.btn.selectedDiv img {
    width: 120px !important;
    height: 120px !important;
}

.btn {
    --bs-btn-padding-x: 5px;
    --bs-btn-padding-y: 5px;
}
</style>