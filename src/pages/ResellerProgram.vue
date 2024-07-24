<template>
    <div>
        <CarouselBanner />
        <div class=" text-center fw-bold py-5 text-bg-dark">
            <div class="container">
                <p class="fs-1 mb-0 text-capitalize">Patnership with us</p>
                <p class="fs-5 text-capitalize">it's your own business , let it shine</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolores quas quae, perspiciatis eos
                    voluptate neque natus ex repellendus. Ullam at molestias dicta, natus possimus eligendi nobis ea
                    architecto tempora facilis recusandae dolor repudiandae asperiores veniam eos eius voluptates sapiente,
                    doloremque qui quaerat repellat maiores. Corporis porro debitis qui architecto earum maxime officiis
                    excepturi cum. Dolores ea quo tenetur nemo numquam eos voluptates ab quae vel corporis explicabo quidem
                    praesentium, perferendis nobis aut rem pariatur culpa neque veniam, laudantium eligendi totam expedita
                    animi reprehenderit! Atque adipisci iste odio dolores velit exercitationem dolor doloremque voluptatem
                    neque, deleniti rerum! Eius repellendus iure esse officia quasi iusto nesciunt alias. Magni corporis
                    illo excepturi quaerat esse eos amet omnis dicta. Reiciendis explicabo, amet sit repellendus dolores
                    inventore, sed modi fuga corrupti cumque fugiat assumenda odit, accusamus porro blanditiis ducimus
                    repellat itaque delectus. Distinctio, est recusandae? Repudiandae suscipit vero distinctio,
                    exercitationem reiciendis ipsam, quae iure eum non, unde neque dolores doloremque esse. Eius voluptas
                    similique vel officia, reprehenderit doloribus ad officiis odit numquam quam. Ipsam dicta perspiciatis,
                    assumenda perferendis nesciunt quibusdam minima temporibus quisquam expedita, placeat quos. Consequatur
                    nobis et exercitationem dolores! Saepe maxime dolor sunt et sit consequuntur magni, expedita iste
                    perferendis, amet adipisci provident harum architecto assumenda soluta, libero perspiciatis error omnis?
                    Soluta tempora illum facere, molestiae placeat assumenda tenetur labore in ut expedita saepe dolore
                    sapiente provident rem officiis explicabo voluptatum perferendis delectus? Fugit hic, a distinctio
                    voluptate commodi minima praesentium sequi quasi error impedit explicabo corrupti maiores facilis animi
                    ipsum ipsa quis deserunt et? Explicabo mollitia vitae iusto nulla, minima quibusdam soluta ipsum eius
                    ipsa, expedita maxime iure beatae omnis ratione quae sed culpa! Natus quia ipsum doloribus praesentium
                    quos? Amet dolorem sit, quis consectetur explicabo tempora modi corporis dolorum qui ipsa exercitationem
                    sequi est atque, numquam blanditiis esse neque nobis veniam suscipit id delectus molestiae aliquid
                    impedit! Harum praesentium ut vitae quo voluptatibus quasi, porro ab explicabo numquam dolore eius
                    perferendis mollitia, nostrum ea, nam aut. Voluptatum quos accusamus ab, porro repellendus, ut quaerat
                    officiis est maxime nisi distinctio suscipit dolorem, quidem placeat! Quos consequuntur a expedita
                    aliquid ad cumque molestias explicabo saepe nemo inventore ullam, iure, debitis veritatis natus fugit
                    rerum possimus porro ea! Optio repudiandae porro aut debitis neque qui id sit quo veniam, quidem quis
                    est perspiciatis ab praesentium deserunt, voluptatibus quos? Facere incidunt quia quasi? Cumque
                    asperiores eaque fugiat sint enim nesciunt nam iure nobis, necessitatibus illum aut laudantium
                    repudiandae error laborum, perspiciatis at, iusto pariatur! Ad, nisi sit natus, cupiditate placeat
                    consectetur quae quas totam neque earum similique voluptatibus unde modi nobis sint ipsam fugiat libero
                    hic illum magnam deserunt dolor. Fuga beatae placeat debitis itaque officia. Nisi nulla officiis, natus
                    voluptates quae accusamus tenetur nam, explicabo est consequatur excepturi blanditiis aperiam itaque.
                    Architecto ducimus, placeat repellat eaque velit harum voluptas accusantium neque? Expedita, nobis
                    nesciunt! Commodi beatae provident blanditiis vero cum at repellendus quae aperiam pariatur dolore hic
                    harum, quod dicta ad explicabo non! Sed libero est assumenda doloremque voluptas deserunt nostrum nobis
                    tempore.</p>
            </div>
        </div>
        <div class="py-5 rounded-top-5 bg-white" style="margin-top: -40px;" v-observe>
            <div class="sticky-nav my-4">
                <div class="d-flex gap-3 p-3 py-2 overflow-x-scroll" id="scroll"
                    style="background-color:rgba(255, 206, 86, 0.2); border:1px solid rgba(255, 206, 86, 1) !important;">
                    <div v-for="(section, index) in sections" :key="index">
                        <a :href="'#' + section.id" class="nav-link text-dark"
                            @click.prevent="scrollToSection(section.id)"
                            :class="{ active: activeSection === section.id }">
                            {{ section.name }}
                        </a>
                    </div>
                </div>
            </div>

            <div class="container">
                <section v-for="(section, index) in sections" :key="index" :id="section.id" class="section"
                    style="padding-top:30px">
                    <h3 class="p-2 text-center my-4 cutout">
                        <span>{{ section.name }}</span>
                    </h3>
                    <component :is="section.component"></component>
                </section>
            </div>
            <!-- <div class="row">
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

            </div> -->
        </div>

        <!-- <div class="container-fluid text-white py-5" style="background-color: var(--bg-primary);">
            <div class="row">
                <div class="col-12 col-md-6">
                    <img src="/img/reseller-program.svg" style="width: 250px;max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 d-flex justify-content-center align-items-center">
                    <p class="fs-1 fw-bold">"It's your own business <br> Let it shine"</p>
                </div>
            </div>
        </div> -->

    </div>
</template>

<script>
import CarouselBanner from "@/components/CarouselBanner.vue"
import BenefitSection from "@/components/BenefitSection.vue"
import PriceSection from "@/components/PriceSection.vue"
import ProfitSection from "@/components/ResellerPriceSection.vue"
import ProductSection from "@/components/ProductSection.vue"
import FaqSection from "@/components/FaqSection.vue"
import ResellerAbout from "@/components/ResellerAbout.vue"
import SuccessStory from '@/components/business/SuccessStory.vue';

export default {
    name: 'CareerPage',
    components: {
        CarouselBanner,
        BenefitSection,
        PriceSection,
        ProfitSection,
        ProductSection,
        FaqSection,
        ResellerAbout,
        SuccessStory
    },
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
            designation: '',
            sections: [
                { id: 'Price', name: 'Price', component: 'PriceSection' },
                { id: 'Margin', name: 'Margin', component: 'ProfitSection' },
                { id: 'Product', name: 'Product', component: 'ProductSection' },
                { id: 'FAQ', name: 'FAQ', component: 'FaqSection' },
                { id: 'Benefit', name: 'Benefit', component: 'BenefitSection' },
                { id: 'About', name: 'About', component: 'ResellerAbout' },
                { id: 'Success Story', name: 'Success Story', component: 'SuccessStory' },
            ],
            activeSection: '',
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        isActive(id) {
            return this.$route.hash === "#" + id;
        },
        scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
        handleScroll() {
            const scrollPosition = window.scrollY;
            this.sections.forEach(section => {
                const el = document.getElementById(section.id);
                if (el && scrollPosition >= el.offsetTop - 200) {
                    this.activeSection = section.id;
                }
            });
        },
        submitQuery() {
            console.log(this.mobile, this.email, this.number, this.note)
        },
    }

}
</script>

<style scoped>
.nav-link {
    color: black;
    text-decoration: none;
    padding: 5px 10px;
}

.nav-link.active {
    border-bottom: 2px solid black;
}

.sticky-nav {
    position: sticky;
    top: 80px !important;
    z-index: 9;
    background-color: white;
}
</style>