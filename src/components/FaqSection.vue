<template>
    <div>
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
    </div>
</template>
<script>
export default {
    name: "FaqSection",
    data(){
        return{
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
    }
}
</script>
<style lang="">

</style>