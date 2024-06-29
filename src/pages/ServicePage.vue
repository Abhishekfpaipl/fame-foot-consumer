<template>
    <div class="text-white" style="background-color: black">
        <div class="my-5">
            <ServicesFormBanner brandColorOne="#125252" brandName="work wity" :text="text" :customer="customer"
                :service="service" :category="category" :place="place" v-observe />
        </div>
        <div class="my-5">
            <ServicesLeadManagement :values="leads" title="Features, that boost your attention!" v-observe />
        </div>
        <div class="my-5">
            <CaptureLead v-observe />
        </div>
        <div class="my-5">
            <SalesFunnel v-observe />
        </div>
        <div class="my-5">
            <WhyChooseUs :description="whychooseUs" title="why choose us" image="/img/whychooseUs.svg" v-observe />
        </div>
        <div class="my-5">
            <AutoScrolling v-observe />
        </div>
        <div class="my-5">
            <TempCustomers :reviews="customers" title="our customers" v-observe />
        </div>
        <div class="my-5">
            <ServicesSalesCounter :service="service" :serviceCount="2000" :category="category" :categoryCount="1500"
                :place="place" :placeCount="5000" v-observe />
        </div>
        <div class="my-5">
            <ServicesOurService v-observe />
        </div>
        <div class="my-5">
            <ServicesFameFoot service="Website Development" :category="null" :place="null" v-observe />
        </div>
    </div>
</template>
<script>
import ServicesFormBanner from "@/components/business-site/services/FormBanner.vue";
import ServicesLeadManagement from "@/components/business-site/services/LeadManagement.vue";
import WhyChooseUs from "@/components/business-site/WhyChooseUs.vue";
import AutoScrolling from "@/components/business-site/services/AutoScrolling.vue";
import TempCustomers from "@/components/business-site/TempCustomers.vue";
import ServicesSalesCounter from "@/components/business-site/services/SalesCounter.vue";
import SalesFunnel from "@/components/business-site/SalesFunnel.vue";
import CaptureLead from "@/components/business-site/CaptureLead.vue";

export default {
    name: "ServicePage",
    components: {
        ServicesFormBanner,
        ServicesLeadManagement,
        SalesFunnel,
        CaptureLead,
        WhyChooseUs,
        AutoScrolling,
        TempCustomers,
        ServicesSalesCounter,
    },
    data() {
        return {
            text: '',
            service: '',
            customer: '',
            category: '',
            place: '',
            leads: [
                {
                    id: 432,
                    icon: 'bi-magnet fs-4',
                    title: 'sales funnel landing page',
                    description: 'Get in touch with customers by using our contact form and sync their data with a CRM of your favour.'
                },
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Lead capture automation",
                    description: "Capture leads from all sources- website, facbook, google, lead providers, referrals - onto one platform with zero leakage.",
                },
                {
                    id: 2,
                    icon: 'bi-diagram-3 fs-4',
                    title: "Lead distribution",
                    description: "Easily track and distribute leads between your teams based on requirements or other dynamic criteria.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "Sales automation",
                    description: "Automate sales processes. Communicate with leads across various channels.",
                },
                {
                    id: 5,
                    icon: 'bi-telephone fs-4',
                    title: "Direct Call Integration",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
                {
                    id: 65,
                    icon: 'bi-whatsapp fs-4',
                    title: "WhatsApp Call Integration",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
                {
                    id: 6,
                    icon: 'bi-clipboard-data fs-4',
                    title: "Real-time reports",
                    description: "Over 135+ reports help you measure every piece of your process.",
                },
                {
                    id: 32,
                    icon: 'bi-box-arrow-in-down-left fs-4',
                    title: "Import Leads",
                    description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                },
                {
                    id: 43,
                    icon: 'bi-box-arrow-up-right fs-4',
                    title: "Export Leads",
                    description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                },
                {
                    id: 13,
                    icon: 'bi-stars fs-4',
                    image: 'img/features/custom.png',
                    title: 'Leads Auto qualification',
                    description: 'Qualify leads based on their region, behavior, and other parameters'
                },

                {
                    id: 72,
                    icon: 'bi-archive fs-4',
                    title: 'Add relevant details',
                    description: 'Add notes, labels, or other documents to record in CRM.'
                },

                {
                    id: 31,
                    icon: 'bi-stack-overflow fs-4',
                    image: 'img/features/wallet.png',
                    title: 'Automate activites',
                    description: 'Create workflows for faster, error-free communication and service.'
                },
                {
                    id: 623,
                    icon: 'bi-people fs-4',
                    title: 'User management',
                    description: 'Invite all your team members, upload them by Excel/CSV or connect with Microsoft 365 or google workspace.'
                },
                {
                    id: 823,
                    icon: ' bi-ui-checks fs-4',
                    title: 'Stay connected',
                    description: 'Receive real-time notification about activities in CRM across devices.'
                },
                {
                    id: 823,
                    icon: ' bi-calendar2-date fs-4',
                    title: 'Schedule Leads',
                    description: 'Receive real-time notification about activities in CRM across devices.'
                },
                {
                    id: 54,
                    icon: ' bi-lightning fs-4',
                    image: 'img/features/uniform.png',
                    title: 'Close deals quickly',
                    description: "Generate invoices within CRM from prospect's record and update the deal stage and status."
                },

            ],
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
            ],
            customers: [
                {
                    id: 1,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Ram',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "We initially thought Saleswik was a small tool that only stores client data but once we started working on it, we knew its depth. We are very excited to use the new features like Team Pipelines, Email-in, and File Cabinet. We 100% recommend Saleswik to everyone!"
                },
                {
                    id: 2,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Shyam',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend Zoho Saleswik for any micro business."
                },
                {
                    id: 3,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Nikhil',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all."
                },
                {
                    id: 4,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Abhishek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The general idea was to keep everything in one place and at an affordable price, and Saleswik was very accessible that way, and with the ability to expand without switching CRMs."
                },
                {
                    id: 5,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Rajan',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses."
                },
                {
                    id: 6,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Yogesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik has been really helpful for us to keep a track on contacts and deals. Since we are small team, Saleswik was so user-friendly that we were able to start using from week 1 of our trial."
                },
                {
                    id: 7,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Lokesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But Saleswik is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it."
                },
                {
                    id: 8,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Bhasker',
                    company: 'XYz Pvt Ltd',
                    rating: '3.5',
                    text: "As vendor and customers needed order visibility, we wanted to automate the entire business and found only Saleswik to be the best suited in terms of integration."
                },
                {
                    id: 9,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Vivek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has stayed true to its value proposition—a CRM tailored for small businesses and startups."
                },
                {
                    id: 10,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Ankit',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since the implementation of Saleswik, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!"
                },
                {
                    id: 11,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Karan',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The mobile app of Saleswik increases productivity on a whole different level. As a small business, it gives us the edge over our competitors and we're very happy to use Saleswik!"
                },
                {
                    id: 12,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Rajat',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "Saleswik helps me stay on track, lets me know where I am at any point of time and what I need to do to reach where I really want to go!"
                },
                {
                    id: 13,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Ajay',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since I started using Saleswik, no lead has been lost. The student conversion rate has increased by 25 percent, to 30 percent."
                },
                {
                    id: 14,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Vikas',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has helped us to decentralize information. Now all the team has access to the documents and sales information. We no longer have the problem that some documents is stored on the PC of a teammate who is not accessible at the time."
                },
            ],
            whychooseUs: [
                {
                    title: 'Ensure Zero Lead Leakage',
                    icon: 'bi-headset'
                },
                {
                    title: 'No Missing Follow - ups',
                    icon: 'bi-thumbs-up'
                },
                {
                    title: "Increase 80 % Additional Sales",
                    icon: 'bi-currency-ruppee'
                },
                {
                    title: "Cost effective",
                    icon: 'bi-journal'
                },
                {
                    title: "Secured Plateform",
                    icon: 'bi-stars'
                },
                {
                    title: "Free support",
                    icon: 'bi-stars'
                },
                {
                    title: "Modern Interface",
                    icon: 'bi-stars'
                },
                {
                    title: "Easy Setup & Fast Adoption",
                    icon: 'bi-stars'
                },
            ],
        }
    },
    mounted() {
        this.extractKeywordsFromRoute();
    },
    methods: {
        extractKeywordsFromRoute() {
            const routeParam = this.$route.params.slug;
            const parts = routeParam.split('-');

            this.text = 'we are offering';
            this.service = parts.slice(3, parts.indexOf('to')).join(' ');
            this.customer = parts.slice(parts.indexOf('to') + 1, parts.indexOf('from')).join(' ');
            this.category = parts.slice(parts.indexOf('from') + 1, parts.indexOf('in')).join(' ');
            this.place = parts.slice(parts.indexOf('in') + 1).join(' ');
        },
    },
}
</script>
<style lang="">

</style>