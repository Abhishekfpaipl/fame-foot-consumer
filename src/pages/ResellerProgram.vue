<template>
    <div style="padding-top:66px">
        <div class="text-center fw-bold py-5 text-white" style="background-color: var(--bg-primary);">
            <p class="fs-1 mb-0 text-capitalize">Patnership with us</p>
            <p class="fs-5 text-capitalize">it's your own business , let it shine</p>
        </div>
        <div class="container py-5 rounded-top-5 bg-white" style="margin-top: -40px;" v-observe>
            <div class="row">
                <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img src="/img/partnership.svg" style="width: 350px; max-width: 80%" alt="">
                </div>
                <div class="col-12 col-md-6 text-center mt-4 mt-md-0">
                    <form @submit.prevent="submitQuery()">
                        <div class="mt-2 form-floating">
                            <input type="text" class="form-control" placeholder="First Name" v-model="name">
                            <label for="floatingInput" class="ms-2 text-muted">Your name</label>
                        </div>
                        <div class="mt-2 form-floating">
                            <input type="text" class="form-control" placeholder="Business Name" v-model="designation">
                            <label for="floatingInput" class="ms-2 text-muted">Designation</label>
                        </div>
                        <div class="mt-2 form-floating">
                            <input type="number" class="form-control" placeholder="Phone No." v-model="number">
                            <label for="floatingInput" class="ms-2 text-muted">Phone No</label>
                        </div>
                        <div class="mt-2 form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Notes</label>
                        </div>
                        <ImagePdfUpload />
                        <div class="col-12 mt-3">
                            <button class="btn btn-warning py-2 fs-5 w-100 rounded-0 text-dark"
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <div class="" style="background-color: var(--bg-forth)">
            <div class="container py-5">
                <h3 class="text-capitalize mb-4">Our Partnership Benefits</h3>
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                    <div v-for="(data, index) in works" :key="index" class="col">
                        <div class="d-flex align-items-center border my-1 ps-5 ps-md-2">
                            <i :class="data.icon" class="fs-4 p-1"></i>
                            <small class="fw-bold text-capitalize ms-3">{{ data.heading }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
        <div class="container my-5">
            <h3 class="text-center ">Our Core Values</h3>
            <p class="text-center container">
                One thing that we've tried to keep consistent through all these years is our core set of values and
                beliefs.
                They have helped us get to where we are today, and they guide us as we grow. We inculcate these
                values
                in
                everything we do - from the littlest of things to the biggest of decisions.
            </p>
            <div class="p-2 row">
                <div v-for="(data, index) in datas" :key="index" class="col-12 col-md-6 g-3">
                    <div class="d-flex align-items-center border p-2">
                        <img :src="data.icon" :alt="data.name" style="width: 8%; filter: grayscale(1);" class="mx-3">
                        <div class=" ms-2">
                            <span class="fw-bold">{{ data.heading }}</span>
                            <p>{{ data.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-3 py-3 text-center" style="background-color: var(--bg-forth);">
            <div class="container p-md-5 p-3">
                <h1 class="text-center text-capitalize">Frequently asked questions</h1>
                <small>Take advantage of curated questions and answers frequently asked by the visitors &
                    business.</small>
                <div class="row row-cols-1 row-cols-md-2 g-2 mt-5">
                    <div class="col" v-for="(question, index) in questions" :key="index">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed border-bottom fw-bold" type="button"
                                        data-bs-toggle="collapse" :data-bs-target="'#collapseTwo' + index"
                                        aria-expanded="false" :aria-controls="'collapseTwo' + index">
                                        {{ question.question }}
                                    </button>
                                </h2>
                                <div :id="'collapseTwo' + index" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body text-start">{{ question.answer }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid text-white py-5" style="background-color: var(--bg-primary);">
            <div class="row">
                <div class="col-12 col-md-6">
                    <img src="/img/reseller-program.svg" style="width: 250px;max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 d-flex justify-content-center align-items-center">
                    <p class="fs-1 fw-bold">"It's your own business <br> Let it shine"</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CareerPage',
    data() {
        return {
            datas: [
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/think different.svg',
                    heading: 'Think Different',
                    text: 'Random ideas, new suggestions, and challenging the norm are always welcome.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/ownership of work.svg',
                    heading: 'Stay Weird, Be Yourself',
                    text: 'The Souled Store is strictly a judgment-free zone. Just be the best version of yourself.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/respect everyone.svg',
                    heading: 'Respect Everyone',
                    text: 'Treat others how you’d like to be treated, and you have a happy family.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/Growth and learning.svg',
                    heading: 'Ownership Of Work',
                    text: 'Give every task, small or big, your best shot. Always remember- 99% right is 100% wrong.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/stay weird.svg',
                    heading: 'Take Initiative',
                    text: 'Want to change something? Change it. See something that needs fixing? Fix it.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/take initiative.svg',
                    heading: 'Growth & Learning',
                    text: 'Work with various teams and departments and learn something new every day.'
                },
            ],
            works: [
                {
                    icon: 'bi bi-shop fs-3',
                    heading: 'Build your online store front'
                },
                {
                    icon: 'bi bi-currency-rupee fs-3',
                    heading: 'set your own prices'
                },
                {
                    icon: 'bi bi-headset fs-3',
                    heading: '24x7 award wining support'
                },
                {
                    icon: 'bi bi-diagram-2 fs-3',
                    heading: 'bulks subscriptions'
                },
            ],
            mobile: '', 
            name: '',
            note: '',
            designation:'',
            questions: [
                {
                    id: 1,
                    question: "What else do I get with a reseller plan?",
                    answer: "Your reseller plan includes the following extras: * Free SalesWik software including email marketing to use for your business."
                },
                {
                    id: 2,
                    question: "What if I'm not satisfied with the reseller program?",
                    answer: "We offer a money-back guarantee if you're not happy with the reseller program."
                },
                {
                    id: 3,
                    question: "Who determines the pricing on my reseller storefront?",
                    answer: "You do. You can set the pricing for products and services individually, offer special sales and promotions, even provide certain customers with discount pricing. We also have a global pricing option that lets you quickly set the pricing for all of your products at once."
                },
                {
                    id: 4,
                    question: "What's your commission payment process?",
                    answer: "We offer a wide variety of payout options for your commissions (PayPal, EFT, Check, SalesWik Good as Gold). We usually pay the commission you earn during one month at the end of the following month. For example, if you earned commission on your reseller hosting sales during January, we'll pay you at the end of February."
                },
                {
                    id: 5,
                    question: "What does it mean to be a white-label reseller?",
                    answer: "When you sell white-label products or services, the name of the company that produces those services is replaced with your company name. So whether you want to be a white label email reseller or a white label hosting reseller or both, the primary brand name your customers will see is yours. In fact, in most cases, your brand is the only brand your customers will ever see, with a few exceptions. For example, if you sell a domain, you must disclose the accredited domain registrar. In this instance, a customer would see your brand as the seller, but further down in the purchase agreement copy your customer will also see on behalf of WildWestDomains.com as the actual ICANN accredited registrar."
                },
                {
                    id: 6,
                    question: "Can I customize my storefront?",
                    answer: "Yes. You can use our Storefront Branding to make your storefront reflect your personal brand. We give you control over your site's domain name, site logo, color scheme, page layout and more. You can always go back and make changes as your business grows. Or, for those resellers that are familiar with WordPress, we encourage you to make a fully customized site using SalesWik's WordPress plugin, which you can learn more about here."
                },
                {
                    id: 7,
                    question: "Who will provide customer service to my customers?",
                    answer: "We have a dedicated team that can support your customers 24/7 by phone or email. Our award-winning team can represent your brand and take your customer service to the next level. They can also sell products on your behalf."
                },
                {
                    id: 8,
                    question: "What if I need help?",
                    answer: "We're here to help 24/7. Our award-winning support team can help you get up and going, address any technical concerns, even provide tips and tricks on how to become a reseller. It's all included free with your plan."
                },
                {
                    id: 9,
                    question: "Are there different ways to partner with SalesWik?",
                    answer: "If you'd like to earn generous commissions through referral sales from your website visitors and email recipients, check out our Affiliate Program. Or, if you are looking for a way to manage all of your customers websites and clients, with one dashboard and a family of integrated tools, check out our SalesWik Pro Program."
                },
                {
                    id: 10,
                    question: "What is the difference between SalesWik Pro and Reseller?",
                    answer: "SalesWik's Reseller program allows you to set your own prices and sell SalesWik products under your own brand, whereas SalesWik Pro provides developers and designers with free tools to manage their clients and sites."
                },
                {
                    id: 8,
                    question: "Who takes payment from my customer?",
                    answer: "Although your customers will buy from your white labeled store front, when they enter the transaction experience they will be directed to a still white-labeled cart experience, but that contract, experience and payment collection are managed by WildWestDomains.com, a SalesWik entity, in the background. You, as the reseller, then get paid the net commissions from each transacted amount."
                },
            ],
        }
    },
    methods: {
        submitQuery() {
            console.log(this.mobile, this.email, this.number, this.note)
        }
    }

}
</script>

<style lang="scss" scoped></style>