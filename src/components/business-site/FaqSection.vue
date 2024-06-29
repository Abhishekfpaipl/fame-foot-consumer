<template>
    <div class="my-3 py-3">
        <div class="container">
            
            <div>
                <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
                    <!-- <p class="fs-3 mb-0 me-3">Show:</p> -->
                    <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                        <li class="nav-item border rounded-pill" role="presentation" v-for="(price, index) in pricing"
                            :key="index">
                            <button class="nav-link" :class="{ 'active': index === activeTabIndex }"
                                :id="'tab-' + index" data-bs-toggle="pill" :data-bs-target="'#content-' + index"
                                type="button" role="tab" :aria-controls="'content-' + index"
                                :aria-selected="index === activeTabIndex" @click="activeTabIndex = index">{{ price.name
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
                        v-for="(price, index) in pricing" :key="index" :id="'content-' + index" role="tabpanel"
                        :aria-labelledby="'tab-' + index" tabindex="0">
                        <div class="row">
                            <div class="col-12" v-for="(faq, index) in filteredFaqs(price.plans)" :key="index">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item my-2 border-0">
                                        <h2 class="accordion-header border">
                                            <button class="accordion-button collapsed bg-light border-start border-4" type="button"
                                                data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne' + index"
                                                aria-expanded="false" :aria-controls="'flush-collapseOne' + index"
                                                style="border-color: var(--bg-primary) !important;"
                                                >
                                                <span class="me-2">Q{{ index + 1 }}.</span> {{ faq.question }}
                                            </button>
                                        </h2>
                                        <div :id="'flush-collapseOne' + index"
                                            class="accordion-collapse collapse border-0"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body text-start">{{ faq.answer }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="filteredFaqs(price.plans).length === 0" class="col-12">
                                <p class="text-center">No results found.</p>
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
            pricing: [
                {
                    id: 622,
                    name: "All",
                    plans: [
                        {
                            question: " Can i make whatsApp communication from saleswik CRM?",
                            answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                        },
                        {
                            question: "Is Saleswik CRM gives alert of timely followups?",
                            answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                        },
                        {
                            question: "Can I sync my call log leads to saleswik CRM?",
                            answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                        },
                        {
                            question: "Is my data secured at saleswik CRM?",
                            answer: "Yes, your data is completely safe, and important credentails are encripted."
                        },
                    ]
                },
                {
                    id: 62,
                    name: "About",
                    plans: [
                        {
                            question: " Can i make whatsApp communication from saleswik CRM?",
                            answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                        },
                        {
                            question: "Is Saleswik CRM gives alert of timely followups?",
                            answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                        },
                        {
                            question: "Can I sync my call log leads to saleswik CRM?",
                            answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                        },
                        {
                            question: "Is my data secured at saleswik CRM?",
                            answer: "Yes, your data is completely safe, and important credentails are encripted."
                        },
                    ]
                },
                {
                    id: 1,
                    name: "Function",
                    plans: [
                        {
                            question: "What does a CRM system do ?",
                            answer: "At its core, the CRM system is designed to manage communications with customers and align all stakeholders involved in interactions with them. However, CRM systems have evolved to perform complex tasks like automating processes, setting up workflows, tracking all conversations and using all the sales and marketing data to derive meaningful reports."
                        },
                        {
                            question: "Why is CRM important for marketers?",
                            answer: "With CRM, marketers can check the performance of their marketing sources, evaluate touchpoints, and more. A CRM helps marketers better understand customers and tune their messaging accordingly. Marketers can also personalize their messages using lead details captured in the CRM platform."
                        },
                        {
                            question: "What is CRM software used for?",
                            answer: "Aligning teams and automating customer-facing processes. Standardizing sales processes and automating them. Managing customer tickets. Tracking the performance of various marketing sources. Reporting and analytics"
                        },
                        {
                            question: "Why is CRM important in sales?",
                            answer: "Because sales reps pursue many leads, CRM plays a significant role in organizing them as per their stages in the sales pipeline. It also helps them keep track of interactions with prospects, schedule meetings, set reminders, and more."
                        },
                    ]
                },
                {
                    id: 6,
                    name: "Features",
                    plans: [
                        {
                            question: " Can i make whatsApp communication from saleswik CRM?",
                            answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                        },
                        {
                            question: "Is Saleswik CRM gives alert of timely followups?",
                            answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                        },
                        {
                            question: "Can I sync my call log leads to saleswik CRM?",
                            answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                        },
                        {
                            question: "Is my data secured at saleswik CRM?",
                            answer: "Yes, your data is completely safe, and important credentails are encripted."
                        },
                    ]
                },
                {
                    id: 5,
                    name: "Account",
                    plans: [
                        {
                            question: " Can i make whatsApp communication from saleswik CRM?",
                            answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                        },
                        {
                            question: "Is Saleswik CRM gives alert of timely followups?",
                            answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                        },
                        {
                            question: "Can I sync my call log leads to saleswik CRM?",
                            answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                        },
                        {
                            question: "Is my data secured at saleswik CRM?",
                            answer: "Yes, your data is completely safe, and important credentails are encripted."
                        },
                    ]
                },
                {
                    id: 4,
                    name: "Refund",
                    plans: [
                        {
                            question: " Can i make whatsApp communication from saleswik CRM?",
                            answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                        },
                        {
                            question: "Is Saleswik CRM gives alert of timely followups?",
                            answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                        },
                        {
                            question: "Can I sync my call log leads to saleswik CRM?",
                            answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                        },
                        {
                            question: "Is my data secured at saleswik CRM?",
                            answer: "Yes, your data is completely safe, and important credentails are encripted."
                        },
                    ]
                },
                {
                    id: 3,
                    name: "Career",
                    plans: [
                        {
                            question: "Why is CRM important for marketers?",
                            answer: "With CRM, marketers can check the performance of their marketing sources, evaluate touchpoints, and more. A CRM helps marketers better understand customers and tune their messaging accordingly. Marketers can also personalize their messages using lead details captured in the CRM platform."
                        },
                        {
                            question: "What is CRM software used for?",
                            answer: "Aligning teams and automating customer-facing processes. Standardizing sales processes and automating them. Managing customer tickets. Tracking the performance of various marketing sources. Reporting and analytics"
                        },
                        {
                            question: "Why is CRM important in sales?",
                            answer: "Because sales reps pursue many leads, CRM plays a significant role in organizing them as per their stages in the sales pipeline. It also helps them keep track of interactions with prospects, schedule meetings, set reminders, and more."
                        },
                        {
                            question: "How much does a CRM system cost?",
                            answer: "Depending on the features, the cost of a CRM system may start from $10-$25 per user per month. CRM companies also offer custom plans for specific features."
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Patnership",
                    plans: [
                        {
                            question: "Can I sync my call log leads to saleswik CRM?",
                            answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                        },
                        {
                            question: "Is my data secured at saleswik CRM?",
                            answer: "Yes, your data is completely safe, and important credentails are encripted."
                        },
                        {
                            question: "Can i sync leads form my website to saleswik?",
                            answer: "Yes, we have API based solutions for all your lead sources and its sync leads in runtime."
                        },
                        {
                            question: "Can i manage my accounts at saleswik CRM?",
                            answer: "Yes, you can manage your PO, proforma & Tax invoices. You can also manage your credit payment followups & AMC renewal."
                        },
                    ]
                },

            ],
            searchTerm: '',
            activeTabIndex: 0
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
    background-color: var(--bg-primary) !important;
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    border-radius: 2rem;
    /* transform: scale(1.2); */
}

/* Add any necessary styling here */
</style>
