<template>
    <div>
        <CarouselBanner />
        <div class=" text-center fw-bold py-5 text-bg-dark">
            <div class="container">
                <p class="fs-1 mb-0 text-capitalize">Sell with us</p>
                <p class="fs-5 text-capitalize">it's your own business , let it shine</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolores quas quae, perspiciatis eos
                    voluptate neque natus ex repellendus. Ullam at molestias dicta, natus possimus eligendi nobis ea
                    architecto tempora facilis recusandae dolor repudiandae asperiores veniam eos eius voluptates
                    sapiente,
                    doloremque qui quaerat repellat maiores. Corporis porro debitis qui architecto earum maxime officiis
                    excepturi cum. Dolores ea quo tenetur nemo numquam eos voluptates ab quae vel corporis explicabo
                    quidem
                    praesentium, perferendis nobis aut rem pariatur culpa neque veniam, laudantium eligendi totam
                    expedita
                    animi reprehenderit! Atque adipisci iste odio dolores velit exercitationem dolor doloremque
                    voluptatem
                    neque, deleniti rerum! Eius repellendus iure esse officia quasi iusto nesciunt alias. Magni corporis
                    illo excepturi quaerat esse eos amet omnis dicta. Reiciendis explicabo, amet sit repellendus dolores
                    inventore, sed modi fuga corrupti cumque fugiat assumenda odit, accusamus porro blanditiis ducimus
                    repellat itaque delectus. Distinctio, est recusandae? Repudiandae suscipit vero distinctio,
                    exercitationem reiciendis ipsam, quae iure eum non, unde neque dolores doloremque esse. Eius
                    voluptas
                    similique vel officia, reprehenderit doloribus ad officiis odit numquam quam. Ipsam dicta
                    perspiciatis,
                    assumenda perferendis nesciunt quibusdam minima temporibus quisquam expedita, placeat quos.
                    Consequatur
                    nobis et exercitationem dolores! Saepe maxime dolor sunt et sit consequuntur magni, expedita iste
                    perferendis, amet adipisci provident harum architecto assumenda soluta, libero perspiciatis error
                    omnis?
                    Soluta tempora illum facere, molestiae placeat assumenda tenetur labore in ut expedita saepe dolore
                    sapiente provident rem officiis explicabo voluptatum perferendis delectus? Fugit hic, a distinctio
                    voluptate commodi minima praesentium sequi quasi error impedit explicabo corrupti maiores facilis
                    animi
                    ipsum ipsa quis deserunt et? Explicabo mollitia vitae iusto nulla, minima quibusdam soluta ipsum
                    eius
                    ipsa, expedita maxime iure beatae omnis ratione quae sed culpa! Natus quia ipsum doloribus
                    praesentium
                    quos? Amet dolorem sit, quis consectetur explicabo tempora modi corporis dolorum qui ipsa
                    exercitationem
                    sequi est atque, numquam blanditiis esse neque nobis veniam suscipit id delectus molestiae aliquid
                    impedit! Harum praesentium ut vitae quo voluptatibus quasi, porro ab explicabo numquam dolore eius
                    perferendis mollitia, nostrum ea, nam aut. Voluptatum quos accusamus ab, porro repellendus, ut
                    quaerat
                    officiis est maxime nisi distinctio suscipit dolorem, quidem placeat! Quos consequuntur a expedita
                    aliquid ad cumque molestias explicabo saepe nemo inventore ullam, iure, debitis veritatis natus
                    fugit
                    rerum possimus porro ea! Optio repudiandae porro aut debitis neque qui id sit quo veniam, quidem
                    quis
                    est perspiciatis ab praesentium deserunt, voluptatibus quos? Facere incidunt quia quasi? Cumque
                    asperiores eaque fugiat sint enim nesciunt nam iure nobis, necessitatibus illum aut laudantium
                    repudiandae error laborum, perspiciatis at, iusto pariatur! Ad, nisi sit natus, cupiditate placeat
                    consectetur quae quas totam neque earum similique voluptatibus unde modi nobis sint ipsam fugiat
                    libero
                    hic illum magnam deserunt dolor. Fuga beatae placeat debitis itaque officia. Nisi nulla officiis,
                    natus
                    voluptates quae accusamus tenetur nam, explicabo est consequatur excepturi blanditiis aperiam
                    itaque.
                    Architecto ducimus, placeat repellat eaque velit harum voluptas accusantium neque? Expedita, nobis
                    nesciunt! Commodi beatae provident blanditiis vero cum at repellendus quae aperiam pariatur dolore
                    hic
                    harum, quod dicta ad explicabo non! Sed libero est assumenda doloremque voluptas deserunt nostrum
                    nobis
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
        </div>
    </div>
</template>
<script>
import CarouselBanner from '@/components/CarouselBanner.vue';
import AccessSection from '@/components/business/AccessSection.vue';
import BusinessCounter from '@/components/business/BusinessCounter.vue';
import BusinessSell from '@/components/business/BusinessSell.vue';
import HowItWorks from '@/components/business/HowItWorks.vue';
import JourneySection from '@/components/business/JourneySection.vue';
import SuccessStory from '@/components/business/SuccessStory.vue';
import PriceSection from "@/components/PriceSection.vue";
import FaqSection from "@/components/FaqSection.vue";
export default {
    components: {
        CarouselBanner,
        BusinessCounter,
        BusinessSell,
        HowItWorks,
        JourneySection,
        AccessSection,
        SuccessStory,
        PriceSection,
        FaqSection,
    },
    data() {
        return {
            sections: [
                { id: 'Price', name: 'Price', component: 'PriceSection' },
                { id: 'AccessSection', name: 'Access', component: 'AccessSection' },
                { id: 'Counter', name: 'Counter', component: 'BusinessCounter' },
                { id: 'Sell', name: 'Sell', component: 'BusinessSell' },
                { id: 'FAQ', name: 'FAQ', component: 'FaqSection' },
                { id: 'How It Works', name: 'How It Works', component: 'HowItWorks' },
                { id: 'Journey ', name: 'Journey ', component: 'JourneySection' },
                { id: 'Success Story ', name: 'Success Story ', component: 'SuccessStory' },
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