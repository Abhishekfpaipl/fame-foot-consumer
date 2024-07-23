<template>
    <div class="container rounded-top-5 bg-white">
        <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
            <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                <li class="nav-item border rounded" role="presentation" v-for="(price, index) in faqs" :key="index">
                    <button class="nav-link text-dark" style="white-space: nowrap" :class="{ 'active': index === activeTabIndex }"
                        :id="'tab-' + index" data-bs-toggle="pill" :data-bs-target="'#content-' + index" type="button"
                        role="tab" :aria-controls="'content-' + index" :aria-selected="index === activeTabIndex"
                        @click="onTabClick(index)">{{
                            price.name
                        }}</button>
                </li>
            </div>
        </ul>

        <div class="tab-content" id="pills-tabContent">
            <div class="d-flex align-items-center shadow p-2 mb-3">
                <input type="search" placeholder="Search for questions?" v-model="searchTerm"
                    class="form-control border-0" ref="searchInput" @keyup.enter="search">
                <div>
                    <i class="bi bi-search" @click="search"></i>
                </div>
            </div>
            <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }"
                v-for="(price, index) in faqs" :key="index" :id="'content-' + index" role="tabpanel"
                :aria-labelledby="'tab-' + index" tabindex="0">
                <div class="row">
                    <div class="col-12" v-for="(faq, index) in filteredFaqs(price.plans)" :key="index">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item my-2 border-0">
                                <h2 class="accordion-header border">
                                    <button class="accordion-button collapsed bg-light border-start border-4"
                                        type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                                        :aria-controls="'flush-collapseOne' + index"
                                        style="border-color: var(--brand-color) !important;">
                                        <span class="me-2">Q{{ index + 1 }}.</span> {{ faq.question }}
                                    </button>
                                </h2>
                                <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse border-0"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body text-start">{{ faq.answer }}</div>
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
    name: "PriceSection",
    data() {
        return {
            searchTerm: '',
            activeTabIndex: 0,
            faqs: [
                {
                    id: 109,
                    name: "All",
                    plans: [
                        {
                            id: 1,
                            question: "What else do I get with a reseller plan?",
                            answer: "Your reseller plan includes the following extras: * Free Fameset software including email marketing to use for your business."
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
                            answer: "We offer a wide variety of payout options for your commissions (PayPal, EFT, Check, Fameset Good as Gold). We usually pay the commission you earn during one month at the end of the following month. For example, if you earned commission on your reseller hosting sales during January, we'll pay you at the end of February."
                        },
                        {
                            id: 5,
                            question: "What does it mean to be a white-label reseller?",
                            answer: "When you sell white-label products or services, the name of the company that produces those services is replaced with your company name. So whether you want to be a white label email reseller or a white label hosting reseller or both, the primary brand name your customers will see is yours. In fact, in most cases, your brand is the only brand your customers will ever see, with a few exceptions. For example, if you sell a domain, you must disclose the accredited domain registrar. In this instance, a customer would see your brand as the seller, but further down in the purchase agreement copy your customer will also see on behalf of WildWestDomains.com as the actual ICANN accredited registrar."
                        },
                        {
                            id: 6,
                            question: "Can I customize my storefront?",
                            answer: "Yes. You can use our Storefront Branding to make your storefront reflect your personal brand. We give you control over your site's domain name, site logo, color scheme, page layout and more. You can always go back and make changes as your business grows. Or, for those resellers that are familiar with WordPress, we encourage you to make a fully customized site using Fameset's WordPress plugin, which you can learn more about here."
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
                            question: "Are there different ways to partner with Fameset?",
                            answer: "If you'd like to earn generous commissions through referral sales from your website visitors and email recipients, check out our Affiliate Program. Or, if you are looking for a way to manage all of your customers websites and clients, with one dashboard and a family of integrated tools, check out our Fameset Pro Program."
                        },
                        {
                            id: 10,
                            question: "What is the difference between Fameset Pro and Reseller?",
                            answer: "Fameset's Reseller program allows you to set your own prices and sell Fameset products under your own brand, whereas Fameset Pro provides developers and designers with free tools to manage their clients and sites."
                        },
                        {
                            id: 8,
                            question: "Who takes payment from my customer?",
                            answer: "Although your customers will buy from your white labeled store front, when they enter the transaction experience they will be directed to a still white-labeled cart experience, but that contract, experience and payment collection are managed by WildWestDomains.com, a Fameset entity, in the background. You, as the reseller, then get paid the net commissions from each transacted amount."
                        },
                    ]
                },
                {
                    id: 5,
                    name: "Customer Onboarding",
                    plans: [
                        {
                            question: "How do I get started with your services?",
                            answer: "You can get started by contacting us through our website, phone, or email. We will arrange an initial consultation to understand your needs."
                        },
                        {
                            question: "What is the onboarding process like?",
                            answer: "Our onboarding process includes an initial consultation, needs assessment, proposal presentation, contract signing, and project kickoff."
                        },
                        {
                            question: "Do you offer a trial period for your services?",
                            answer: "Yes, we offer a trial period for certain services. Please contact us for more details."
                        },
                        {
                            question: "How do you ensure a smooth transition to your services?",
                            answer: "We have a dedicated onboarding team that works closely with new clients to ensure a smooth transition, including data migration, training, and ongoing support."
                        }
                    ]
                },
                {
                    id: 8,
                    name: "Contact and Support",
                    plans: [
                        {
                            question: "How can I contact your support team?",
                            answer: "You can contact our support team via phone, email, or live chat available on our website."
                        },
                        {
                            question: "What are your support hours?",
                            answer: "Our support hours are 24/7, ensuring assistance is available whenever you need it."
                        },
                        {
                            question: "Where can I find documentation and resources?",
                            answer: "Documentation and resources can be found in the client portal on our website."
                        },
                        {
                            question: "How do I provide feedback on your services?",
                            answer: "We welcome feedback and you can provide it through our website, by email, or during regular client meetings."
                        }
                    ]
                }
            ],
        };
    },
    methods: {
        filteredFaqs(plans) {
            if (!this.searchTerm) {
                return plans;
            }
            const term = this.searchTerm.toLowerCase();
            return plans.filter(faq =>
                faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
            );
        },
        onTabClick(index) {
            this.activeTabIndex = index;
            this.scrollTabIntoView(index);
        },
        scrollTabIntoView(index) {
            const tabElement = document.getElementById(`tab-${index}`);
            if (tabElement) {
                tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    },
    mounted() {
        this.$refs.searchInput.focus();
    }
};
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.active {
    /* background-color:black!important; */
    background-color: #FFF5DD !important;
    border-bottom: 2px solid black;
    color: black;
    font-weight: 600;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}
</style>
