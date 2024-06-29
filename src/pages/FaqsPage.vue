<template>
    <div style="padding-top:66px">
        <div class="text-center fw-bold py-5 text-white" style="background-color: var(--bg-primary);">
            <h1 class="text-center mb-4">Frequently Asked Questions</h1>
        </div>
        <div class="container py-5 rounded-top-5 bg-white" style="margin-top: -40px;">
            <FaqSection/> 
        </div>
    </div>
</template>
<script>
import FaqSection from '@/components/business-site/FaqSection.vue';
export default {
    name: 'FaqPage',
    components: {
        FaqSection,
    },
    data() {
        return {
            faqs: [
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
                {
                    question: "How much does a CRM system cost?",
                    answer: "Depending on the features, the cost of a CRM system may start from $10-$25 per user per month. CRM companies also offer custom plans for specific features."
                },
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
                {
                    question: "Can i sync leads form my website to saleswik?",
                    answer: "Yes, we have API based solutions for all your lead sources and its sync leads in runtime."
                },
                {
                    question: "Can i manage my accounts at saleswik CRM?",
                    answer: "Yes, you can manage your PO, proforma & Tax invoices. You can also manage your credit payment followups & AMC renewal."
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>