<template>
    <div class="bg-dark" style="padding-top:66px">
        <!-- <div class="text-white py-5" style=" background-color:var(--bg-primary) ;padding-bottom: 6rem !important;"
            v-observe>
            <h1 class="text-center mb-0 fw-bold">Contact Page</h1>
            <p class="small mb-0 text-capitalize text-center">The secret of getting ahead, is getting started</p>
        </div>
        <div class="container bg-white rounded-top-5" style="margin-top: -40px;" v-observe>
            <div class="row p-3">
                <div class="col-12 col-md-6 pt-4 text-center">
                    <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating mt-0">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Name</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No</label>
                        </div> 
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                        </div>

                        <div class="form-check text-start ms-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                v-model="agree">
                            <label class="form-check-label small" for="flexCheckDefault">
                                I agree to the <router-link to="/agreement" class="text-dark text-capitalize">terms and
                                    conditions</router-link> and
                                <router-link to="/privacy-policy" class="text-dark text-capitalize">privacy
                                    policy.</router-link>
                            </label>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-danger py-2 fs-5 w-100 rounded-0 text-white" type="submit">Submit</button>
                        </div>
                    </form>

                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 pt-4 text-center">
                    <h1 class="text-uppercase my-3">We Believe</h1>
                    <p class="text-capitalize fs-5 fw-bold">"If you don't take care of your customers, <br> your
                        competitors
                        will do!"</p>
                    <h1 class="text-uppercase cutout my-3"><span>So Relax </span></h1>
                    <p class="text-capitalize fs-5 fw-bold">"let's build an awesome business together <br>We will take
                        care of
                        you !"</p>
                </div>

            </div>
        </div>
        <div class="container-fluid mt-5 py-5 text-dark" style="background-color: var(--bg-forth)" v-observe>
            <div class="row">
                <h1 class="text-uppercase mb-4 text-center">Need to get in touch with us?</h1>
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src="/img/contactus.svg" style="width: 500px; max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 ">
                    <div class="row row-cols-1">
                        <div v-for="(icon, index) in contact" :key="index" class="col py-2"
                            @click="handleIconClick(icon.action)">
                            <div class="d-flex justify-content-center align-items-center border p-2 ">
                                <a class="text-white" :href="icon.url" target="_blank">
                                    <i :class="icon.icon" :style="'color:' + icon.color"></i>
                                </a>
                                <p class="text-start ms-2 fw-bold mb-0">{{ icon.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="container my-5" v-observe>
            <h1 class="text-capitalize my-5 text-center">Follow us on</h1>
            <div class="row row-cols-4">
                <div v-for="(contact, index) in folows" :key="index" class="col py-2">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="rounded-circle border d-flex align-items-center justify-content-center"
                            style="width: 60px; height: 60px;">
                            <a class="text-white" :href="contact.url" target="_blank">
                                <i :class="contact.icon" :style="'color:' + contact.color"></i>
                            </a>
                        </div>
                    </div>
                    <p class="text-center mt-2 fw-bold">{{ contact.name }}</p>
                </div>
            </div>
        </div>
        <div class="my-3">
            <SocialSchedule v-observe />
        </div> -->
        <h5 class="fw-bold brandText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quis voluptatem assumenda nisi nihil
            expedita
            quas dolore explicabo architecto deserunt maiores, quaerat, corrupti vero reprehenderit magni nobis tempore.
            Voluptatum odio optio eum ratione alias sapiente ipsam rem corporis, numquam ipsum, dicta facilis
            consectetur
            repellat nesciunt natus accusantium ab officiis delectus? Quia hic non consequuntur numquam alias maiores
            inventore voluptate beatae perspiciatis asperiores. Porro, ut at? Repellat, harum. In dolorum mollitia
            aspernatur consectetur consequatur obcaecati assumenda quo quaerat officia dolor pariatur molestiae sit
            tempora
            sed dolorem beatae excepturi inventore fugit labore similique neque atque, expedita ut et! Repellendus
            officia
            aut nulla veritatis vitae odit est voluptates odio blanditiis at, similique necessitatibus quam quae quia
            animi
            recusandae accusantium fuga aspernatur cumque iusto dolores ut! Voluptatibus officia, molestias laborum
            itaque
            perferendis aut quod, voluptate nostrum, qui neque fugit debitis ea consequatur suscipit illum laboriosam
            odit
            nam nesciunt deleniti. Laudantium sit quasi nihil quidem, maiores velit eius enim odio, neque deleniti vel
            voluptates. Quos accusantium quis odio alias animi quaerat eveniet accusamus nesciunt! Impedit quasi hic
            eligendi facilis error facere voluptas eaque ipsum nobis atque consequatur provident laborum nulla, ipsa
            veritatis recusandae? Facere illo unde excepturi porro quae consequatur? Rem saepe iusto nihil id.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quis voluptatem assumenda nisi nihil
            expedita
            quas dolore explicabo architecto deserunt maiores, quaerat, corrupti vero reprehenderit magni nobis tempore.
            Voluptatum odio optio eum ratione alias sapiente ipsam rem corporis, numquam ipsum, dicta facilis
            consectetur
            repellat nesciunt natus accusantium ab officiis delectus? Quia hic non consequuntur numquam alias maiores
            inventore voluptate beatae perspiciatis asperiores. Porro, ut at? Repellat, harum. In dolorum mollitia
            aspernatur consectetur consequatur obcaecati assumenda quo quaerat officia dolor pariatur molestiae sit
            tempora
            sed dolorem beatae excepturi inventore fugit labore similique neque atque, expedita ut et! Repellendus
            officia
            aut nulla veritatis vitae odit est voluptates odio blanditiis at, similique necessitatibus quam quae quia
            animi
            recusandae accusantium fuga aspernatur cumque iusto dolores ut! Voluptatibus officia, molestias laborum
            itaque
            perferendis aut quod, voluptate nostrum, qui neque fugit debitis ea consequatur suscipit illum laboriosam
            odit
            nam nesciunt deleniti. Laudantium sit quasi nihil quidem, maiores velit eius enim odio, neque deleniti vel
            voluptates. Quos accusantium quis odio alias animi quaerat eveniet accusamus nesciunt! Impedit quasi hic
            eligendi facilis error facere voluptas eaque ipsum nobis atque consequatur provident laborum nulla, ipsa
            veritatis recusandae? Facere illo unde excepturi porro quae consequatur? Rem saepe iusto nihil id.
        </h5>
    </div>
</template>

<script>
// import SocialSchedule from "@/components/SocialSchedule.vue";
export default {
    name: "ContactPage",
    components: {
        // SocialSchedule,
    },
    data() {
        return {
            contact: [
                { name: 'support@saleswik.com', icon: 'bi-envelope fs-3', color: 'red', action: 'openEmail' },
                { name: '918860012001', icon: 'bi-telephone-fill fs-3', color: 'black', action: 'openDialer' },
                { name: '918860012001', icon: 'bi-whatsapp fs-3', color: 'green', action: 'openWhatsapp' },
                { name: 'Block B1/632, Janakpuri, Delhi', icon: 'bi-geo-fill fs-3', color: 'black', action: 'openMaps' },
            ],
            folows: [
                {
                    icon: 'bi bi-facebook fs-3',
                    name: 'Facebook',
                    color: 'blue',
                    url: 'https://www.facebook.com/yourpage'
                },
                {
                    icon: 'bi bi-twitter-x fs-3',
                    name: 'Twitter',
                    color: 'black',
                    url: 'https://www.instagram.com/yourprofile'
                },
                {
                    icon: 'bi bi-youtube fs-3',
                    name: 'YouTube',
                    color: 'red',
                    url: 'https://www.youtube.com/'
                },
                {
                    icon: 'bi bi-linkedin fs-3',
                    name: 'LinkedIn',
                    color: 'blue',
                    url: 'https://www.linkedin.com/in/yourprofile'
                },
            ],
            mobile: '',
            email: '',
            number: '',
            note: '',
        }
    },
    methods: {
        loginAccount() {
            console.log(this.mobile, this.email, this.number, this.note)
        }
    }
}
</script>

<style scoped>
.cutout {
    overflow: hidden;
    text-align: center;
}

.cutout>span {
    position: relative;
    display: inline-block;
}

.cutout>span:before,
.cutout>span:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 900px;
    /* Adjust width as needed */
    margin: 0 20px;
}

.cutout>span:before {
    right: 100%;
    border-bottom: 2px solid;
    border-color: red;
    border-image-slice: 1;
}

.cutout>span:after {
    left: 100%;
    border-bottom: 2px solid;
    border-color: red;
    border-image-slice: 1;
}
</style>
