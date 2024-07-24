<template>
    <div>
        <div class="container my-5">
            <h1 class="px-2 text-center mb-5">Testimonials</h1>
            <div class="position-relative">
                <div class="d-flex gap-3 overflow-x-scroll" ref="techScrollContainer" id="scroll">
                    <div class="col-12" v-for="(team, index) in reviews" :key="index">
                        <div class="card mx-4 mx-md-0" style="min-width: 18rem;">
                            <div class="card-body p-0">
                                <div
                                    class="d-flex justify-content-start align-items-center gap-4 border-bottom p-2 bg-light">
                                    <img :src="team.img" class="rounded-circle" alt="..."
                                        style="height:60px;width: 60px;object-fit: cover;object-position: top;">
                                    <h5 class="lh-1 mb-0">{{ team.name }}</h5>
                                    <!-- <small>{{ team.post }}</small> -->
                                </div>
                                <div class="p-2" style="min-height:235px">
                                    <p class="smaller pe-1 text-end">{{ team.date }}</p>
                                    <p class="text-ellipsis7"><span class="fw-bold">"</span> {{ team.value }} <span
                                            class="fw-bold">"</span></p>
                                </div>

                                <!-- <div class="p-2" @click="toggleExpand(index)">
                                    <p class="text-start mb-0 rating-text" :class="{ expanded: isExpanded(index) }">
                                        {{ team.value }}
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <i class="bi bi-chevron-down fs-5"
                                            :class="{ 'rotate-icon': isExpanded(index) }"></i>
                                        <span class="smaller pe-1">{{ team.date }}</span>
                                    </div>
                                </div> -->
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
                <div class="rounded-circle border d-flex justify-content-center align-items-center position-absolute bg-light"
                    @click="scrollLeft($refs.techScrollContainer)"
                    style="width: 40px; height:40px ;top: 40%; left: -4%">
                    <i class="bi bi-chevron-left"></i>
                </div>
                <div class="rounded-circle border d-flex justify-content-center align-items-center position-absolute bg-light"
                    @click="scrollRight($refs.techScrollContainer)"
                    style="width: 40px; height:40px ;top: 40%; right: -4%">
                    <i class="bi bi-chevron-right"></i>
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
                    name: "Piyush Gupta",
                    "rating": 5, "user_rating": 5, "date": "27.06.2024",
                    post: "CTO",
                    img: "img/members/12.jpg",
                    value: "Leads the company's technology strategy, oversees software development and IT infrastructure, and ensures the organization stays at the forefront of technological innovation."
                },
                {
                    name: "Santosh Kumar",
                    "rating": 5, "user_rating": 5, "date": "27.06.2024",
                    post: "Backend Developer",
                    img: "img/members/13.jpg",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    name: "Satpal Rawat",
                    "rating": 5, "user_rating": 5, "date": "27.06.2024",
                    post: "Backend Developer",
                    img: "img/members/14.jpg",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    name: "Vivek Kumar",
                    "rating": 5, "user_rating": 5, "date": "27.06.2024",
                    post: "Backend Developer",
                    img: "img/members/15.jpg",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    name: "Jatin Bhardwaj",
                    "rating": 5, "user_rating": 5, "date": "27.06.2024",
                    post: "Backend Developer",
                    img: "img/members/16.jpg",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    name: "Abhishek Negi",
                    "rating": 5, "user_rating": 5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    img: "img/members/17.jpg",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
                {
                    name: "Nikhil Garg",
                    "rating": 5, "user_rating": 5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    img: "img/members/18.jpg",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
                {
                    name: "Harmanpreet Singh",
                    "rating": 5, "user_rating": 5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    img: "img/members/19.jpg",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
                {
                    name: "Shivam Sharma",
                    "rating": 5, "user_rating": 5, "date": "27.06.2024",
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
            expandedReviews: []
        }
    },
    methods: {
        getCircleStyle(score) {
            const percentage = (score / 10) * 100;
            return {
                background: `conic-gradient(#ffc107 0deg ${percentage * 3.6}deg, #e6e2e7 ${percentage * 3.6}deg 360deg)`
            };
        },
        scrollLeft(container) {
            const scrollWidth = container.clientWidth;
            const newScrollLeft = Math.max(container.scrollLeft - scrollWidth, 0);

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        },
        scrollRight(container) {
            const scrollWidth = container.clientWidth;
            const maxScrollLeft = container.scrollWidth - scrollWidth;
            const newScrollLeft = Math.min(container.scrollLeft + scrollWidth, maxScrollLeft);

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
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
</style>