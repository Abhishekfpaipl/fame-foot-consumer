<template>
    <div class="py-5 text-dark">
        <article :class="['wrapper', { 'wrapper--vertical': isVertical }]">
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-3" style="background-color: #f0f8ff;">
                            <div class="card">
                                <div class="card-header">
                                    <div class="profile-image">
                                        <img :src="card.image" alt="Profile" />
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h3 class="text-emphasis-danger">{{ card.title }}</h3>
                                    <div class="">{{ card.tax }}</div>
                                    <p class="fw-bold text-info">{{ card.time }}</p>
                                    <p class="name">{{ card.name }}</p>
                                    <!-- <div class="rating">
                                        <i v-for="star in 5" :key="star" class="star"></i>
                                    </div> -->
                                    <p class="mb-0">Fameset <i class="bi bi-star-fill text-warning"></i> 8.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-3" style="background-color: #f0f8ff;">
                            <div class="card">
                                <div class="card-header">
                                    <div class="profile-image">
                                        <img :src="card.image" alt="Profile" />
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h3 class="text-emphasis-danger">{{ card.title }}</h3>
                                    <div class="">{{ card.tax }}</div>
                                    <p class="fw-bold text-info">{{ card.time }}</p>
                                    <p class="name">{{ card.name }}</p>
                                    <p class="mb-0">Fameset <i class="bi bi-star-fill text-warning"></i> 8.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marquee marquee--reverse" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group" :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-3" style="background-color: #f0f8ff;">
                            <div class="card">
                                <div class="card-header">
                                    <div class="profile-image">
                                        <img :src="card.image" alt="Profile" />
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h3 class="text-emphasis-danger">{{ card.title }}</h3>
                                    <div class="">{{ card.tax }}</div>
                                    <p class="fw-bold text-info">{{ card.time }}</p>
                                    <p class="name">{{ card.name }}</p>
                                    <p class="mb-0">Fameset <i class="bi bi-star-fill text-warning"></i> 8.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group"
                    :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-3" style="background-color: #f0f8ff;">
                            <div class="card">
                                <div class="card-header">
                                    <div class="profile-image">
                                        <img :src="card.image" alt="Profile" />
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h3 class="text-emphasis-danger">{{ card.title }}</h3>
                                    <div class="">{{ card.tax }}</div>
                                    <p class="fw-bold text-info">{{ card.time }}</p>
                                    <p class="name">{{ card.name }}</p>
                                    <p class="mb-0">Fameset <i class="bi bi-star-fill text-warning"></i> 8.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-3" style="background-color: #f0f8ff;">
                            <div class="card">
                                <div class="card-header">
                                    <div class="profile-image">
                                        <img :src="card.image" alt="Profile" />
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h3 class="text-emphasis-danger">{{ card.title }}</h3>
                                    <div class="">{{ card.tax }}</div>
                                    <p class="fw-bold text-info">{{ card.time }}</p>
                                    <p class="name">{{ card.name }}</p>
                                    <!-- <div class="rating">
                                        <i v-for="star in 5" :key="star" class="star"></i>
                                    </div> -->
                                    <p class="mb-0">Fameset <i class="bi bi-star-fill text-warning"></i> 8.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-3" style="background-color: #f0f8ff;">
                            <div class="card">
                                <div class="card-header">
                                    <div class="profile-image">
                                        <img :src="card.image" alt="Profile" />
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h3 class="text-emphasis-danger">{{ card.title }}</h3>
                                    <div class="">{{ card.tax }}</div>
                                    <p class="fw-bold text-info">{{ card.time }}</p>
                                    <p class="name">{{ card.name }}</p>
                                    <p class="mb-0">Fameset <i class="bi bi-star-fill text-warning"></i> 8.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

export default {
    name: "AutoScrolling",
    props: {
        brandColorOne: {
            type: String,
            default: '#000'
        }
    },
    data() {
        return {
            isVertical: false,
            isReverse: false,
            links: [
                {
                    id: 1,
                    name: 'Amazon',
                    image: '/img/members/1.png'
                },
                {
                    id: 2,
                    name: 'Apple',
                    image: "/img/members/2.webp"
                },
                {
                    id: 3,
                    name: 'Aws',
                    image: "/img/members/3.png"
                },
                {
                    id: 4,
                    name: 'Facebook',
                    image: "/img/members/4.png"
                },
                {
                    id: 5,
                    name: 'Google',
                    image: "/img/members/5.jpg"
                },
                {
                    id: 6,
                    name: 'Meta',
                    image: "/img/members/6.webp"
                },
                {
                    id: 7,
                    name: 'Microsoft',
                    image: "/img/members/7.jpeg"
                },
                {
                    id: 11,
                    name: 'Vodafone',
                    image: "/img/members/8.png"
                },
            ],
            cards: [
                {
                    image: 'img/members/13.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'Prashant Malik',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/14.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/15.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'Prashant Malik',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/16.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/17.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'Prashant Malik',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/18.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/19.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
            ]
        };
    },
    methods: {
        toggleDirection() {
            this.isVertical = !this.isVertical;
            this.isReverse = !this.isReverse;
        },
    },
};
</script>

<style>
:root {
    --color-text: navy;
    --color-bg: papayawhip;
    --color-bg-accent: #ecdcc0;
    --size: clamp(10rem, 1rem + 40vmin, 30rem);
    --gap: calc(var(--size) / 14);
    --duration: 20s;
    --scroll-start: 0;
    --scroll-end: calc(-100% - var(--gap));
}

.marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
    mask-image: linear-gradient(var(--mask-direction, to right),
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 20%,
            hsl(0 0% 0% / 1) 80%,
            hsl(0 0% 0% / 0));
}

.marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll-x var(--duration) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
    .marquee__group {
        animation-play-state: paused;
    }
}

.marquee--vertical {
    --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
    flex-direction: column;
}

.marquee--vertical .marquee__group {
    animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
}

@keyframes scroll-x {
    from {
        transform: translateX(var(--scroll-start));
    }

    to {
        transform: translateX(var(--scroll-end));
    }
}

@keyframes scroll-y {
    from {
        transform: translateY(var(--scroll-start));
    }

    to {
        transform: translateY(var(--scroll-end));
    }
}

/* Parent wrapper */
.wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin: auto;
    max-width: 100vw;
}

.wrapper--vertical {
    flex-direction: row;
    height: 100vh;
}

/* Toggle direction button */
/* .toggle {
    --size: 3rem;
    position: relative;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: var(--size);
    height: var(--size);
    font: inherit;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 50%;
    color: inherit;
    background-color: var(--color-bg-accent);
    z-index: 1;
}

.toggle:focus-visible {
    box-shadow: 0 0 0 2px var(--color-text);
}

.toggle span {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: calc(100% + 0.4em);
    width: fit-content;
    white-space: nowrap;
    transform: translateY(-50%);
    animation: fade 400ms 4s ease-out forwards;
    user-select: none;
} */

@keyframes fade {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

.card {
    /* background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden; */
}

.card-header {
    /* background: linear-gradient(to right, #ff6b6b, #4ecdc4); */
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 254, 196, 1) 29%, rgba(255, 217, 102, 1) 90%);
    padding: 10px;
    text-align: center;
    border-bottom: 0px !important;
}

.profile-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    border: 3px solid white;
    margin-top: -27px;
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-body {
    padding: 20px;
    text-align: center;
}

.loan-type {
    color: #ff6b6b;
    margin-bottom: 10px;
}


.amount {
    font-weight: bold;
    color: #4ecdc4;
}


.name {
    margin-top: 10px;
    font-weight: bold;
}

.rating {
    color: gold;
}

.star::before {
    content: "\2605";
}

/* Quotation marks */
.card-container::before {
    content: '“';
    position: absolute;
    font-size: 4em;
    /* color: #4ecdc4; */
    color: black;
    font-family: sans-serif;
}

.card-container::after {
    content: '”';
    position: absolute;
    font-size: 4em;
    color: black;
    font-family: sans-serif;
}

.card-container::before {
    top: 0;
    left: -5px;
}

.card-container::after {
    bottom: -20px;
    right: -5px;
}
</style>