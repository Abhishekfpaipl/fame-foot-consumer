import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/digital-card",
    name: "DigitalCard",
    component: () => import("@/pages/DigitalCard.vue")
  },
  {
    path: "/review-list",
    name: "ReviewListPage ",
    component: () => import("@/pages/ReviewListPage.vue")
  },
  {
    path: "/list-your-business",
    name: "ListYourBusiness",
    component: () => import("@/pages/ListYourBusiness.vue")
  },
  {
    path: "/business",
    name: "BusinessPage",
    component: () => import("@/pages/BusinessPage.vue")
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/pages/AboutUs.vue")
  },
  {
    path: "/category-sentence/:id",
    name: "CategorySentence",
    component: () => import("@/pages/CategorySentence.vue")
  },
  {
    path: "/customer-sentence/:id",
    name: "CustomerSentence",
    component: () => import("@/pages/CustomerSentence.vue")
  },
  {
    path: "/place-sentence/:id",
    name: "PlaceSentence",
    component: () => import("@/pages/PlaceSentence.vue")
  },
  {
    path: "/service-sentence/:id",
    name: "ServiceSentence",
    component: () => import("@/pages/ServiceSentence.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/pages/ContactUs.vue")
  },
  {
    path: "/demo",
    name: "DemoPage",
    component: () => import("@/pages/DemoPage.vue")
  },
  {
    path: "/faqs",
    name: "FaqsPage",
    component: () => import("@/pages/FaqsPage.vue")
  },
  {
    path: "/free-trial",
    name: "FreeTrial",
    component: () => import("@/pages/FreeTrial.vue")
  },
  {
    path: "/legal-warning",
    name: "LegalWarning",
    component: () => import("@/pages/LegalWarning.vue")
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("@/pages/PrivacyPolicy.vue")
  },
  {
    path: "/reseller-program",
    name: "ResellerProgram",
    component: () => import("@/pages/ResellerProgram.vue")
  },
  {
    path: "/service/:slug",
    name: "ServicePage",
    component: () => import("@/pages/ServicePage.vue")
  },
  {
    path: "/term-of-use",
    name: "TermOfUse",
    component: () => import("@/pages/TermOfUse.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
