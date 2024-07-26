import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/review-list",
    name: "ReviewListPage",
    component: () => import("@/pages/ReviewListPage.vue")
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: () => import("@/pages/DashboardPage.vue")
  },
  {
    path: "/digital-card",
    name: "DigitalCard",
    component: () => import("@/pages/DigitalCard.vue")
  },
  // {
  //   path: "/review-list",
  //   name: "ReviewList ",
  //   component: () => import("@/pages/ReviewList.vue")
  // },
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
  {
    path: "/login-page",
    name: "LoginPage",
    component: () => import('@/pages/auths/LoginPage.vue')
  },
  {
    path: "/registration-page",
    name: "RegistrationPage",
    component: () => import('@/pages/auths/RegistrationPage.vue')
  },
  {
    path: "/forgot-password-page",
    name: "ForgotPasswordPage",
    component: () => import('@/pages/auths/ForgotPasswordPage.vue')
  },
  {
    path: "/reset-password-page",
    name: "ResetPasswordPage",
    component: () => import('@/pages/auths/ResetPasswordPage.vue')
  },
  {
    path: "/email-verification-page",
    name: "EmailVerificationPage",
    component: () => import('@/pages/auths/EmailVerificationPage.vue')
  },
  {
    path: "/basic-details",
    name: "BasicDetails",
    component: () => import('@/pages/profile/BasicDetails.vue')
  },
  {
    path: "/connect-details",
    name: "ConnectDetails",
    component: () => import('@/pages/profile/ConnectDetails.vue')
  },
  {
    path: "/overview-details",
    name: "OverviewDetails",
    component: () => import('@/pages/profile/OverviewDetails.vue')
  },
  {
    path: "/worktime-details",
    name: "WorktimeDetails",
    component: () => import('@/pages/profile/WorktimeDetails.vue')
  },
  {
    path: "/businesstype-details",
    name: "BusinessTypeDetails",
    component: () => import('@/pages/profile/BusinessTypeDetails.vue')
  },
  {
    path: "/branding-details",
    name: "BrandingDetails",
    component: () => import('@/pages/profile/BrandingDetails.vue')
  },
  {
    path: "/product-list",
    name: "ProductList",
    component: () => import('@/pages/profile/ProductList.vue')
  },
  {
    path: "/create-product",
    name: "CreateProduct",
    component: () => import('@/pages/profile/CreateProduct.vue')
  },
  {
    path: "/collection-list",
    name: "CollectionList",
    component: () => import('@/pages/profile/CollectionList.vue')
  },
  {
    path: "/gallery-details",
    name: "GalleryDetails",
    component: () => import('@/pages/profile/GalleryDetails.vue')
  },
  {
    path: "/rewards-details",
    name: "RewardsDetails",
    component: () => import('@/pages/profile/RewardsDetails.vue')
  },
  {
    path: "/supporters-details",
    name: "SupportersDetails",
    component: () => import('@/pages/profile/SupportersDetails.vue')
  },
  {
    path: "/fameset-details",
    name: "FamesetDetails",
    component: () => import('@/pages/profile/FamesetDetails.vue')
  },
  {
    path: "/category-details",
    name: "CategoryDetails",
    component: () => import('@/pages/profile/CategoryDetails.vue')
  },
  {
    path: "/bank-details",
    name: "BankDetails",
    component: () => import('@/pages/profile/BankDetails.vue')
  },
  {
    path: "/social-details",
    name: "SocialDetails",
    component: () => import('@/pages/profile/SocialDetails.vue')
  },
  {
    path: "/offer-page",
    name: "OfferPage",
    component: () => import('@/pages/OfferPage.vue')
  },
  {
    path: "/collection-page",
    name: "CollectionPage",
    component: () => import('@/pages/CollectionPage.vue')
  },
  {
    path: "/business-seller",
    name: "BusinessSetupPage",
    component: () => import('@/pages/BusinessSetupPage.vue')
  },
  {
    path: "/showcase-details",
    name: "ShowcaseDetails",
    component: () => import('@/pages/profile/ShowcaseDetails.vue')
  },
  {
    path: "/timeline-details",
    name: "TimelineDetails",
    component: () => import('@/pages/profile/TimelineDetails.vue')
  },
  {
    path: "/testimonial-details",
    name: "TestimonialDetails",
    component: () => import('@/pages/profile/TestimonialDetails.vue')
  },
  {
    path: "/notifications-details",
    name: "NotificationDetails",
    component: () => import('@/pages/profile/NotificationDetails.vue')
  },
  {
    path: "/request-details",
    name: "RequestDetails",
    component: () => import('@/pages/profile/RequestDetails.vue')
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
