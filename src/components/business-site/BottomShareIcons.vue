<template>
    <div>
        <div class="whatsapp rounded-circle border d-flex align-items-center justify-content-center bg-success text-white"
            @click="openWhatsapp()" style="width: 37px; height: 37px;">
            <i class="bi bi-whatsapp fs-5"></i>
        </div>

        <div class="phone rounded-circle border d-flex align-items-center justify-content-center bg-primary text-white"
            @click="openDialer()" style="width: 37px; height: 37px;">
            <i class="bi bi-telephone fs-5"></i>
        </div>

        <div class="query border rounded-circle bg-success bg-dark" data-bs-toggle="offcanvas"
            data-bs-target="#bottomQuery" aria-controls="bottomQuery">
            <img src="/img/query.svg" style="width: 25px; height: 25px; filter: invert(1);" alt="">
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="bottomQuery" aria-labelledby="bottomQueryLabel">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="bottomQueryLabel">Query</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form @submit.prevent="submitQuery()" class="row g-3 needs-validation" novalidate>
                    <div class="w-100 p-2 form-floating">
                        <input type="text" class="form-control" placeholder="Mobile" v-model="name" required>
                        <label for="floatingInput" class="text-muted">First name</label>
                    </div>
                    <div class="w-100 p-2 form-floating">
                        <input type="text" class="form-control" placeholder="Mobile" v-model="email" required>
                        <label class="text-muted">Email Or Mobile No.</label>
                    </div>
                    <div class="form-floating">
                        <textarea v-model="query" rows="2" class="form-control flex-fill"
                            placeholder="Type your message..." required>
              </textarea>
                        <label class="text-muted">Enter Your Query</label>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit Query</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            query: '',
        }
    },
    methods: {
        submitQuery() {
            console.log('Submit Query')
            const data = {
                name: this.name,
                email: this.email,
                query: this.query,
            }
            this.$store.dispatch('submitQuery', data)
        },
        openDialer() {
            const phoneNumber = 918860012001;
            window.location.href = `tel:${phoneNumber}`;
        },
        openWhatsapp() {
            window.open(`https://wa.me/${918860012001}?text=Hello...`, '_blank');
        }
    }
}
</script>
<style>
.query {
    z-index: 9;
    position: fixed;
    bottom: 10%;
    right: 10px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.whatsapp {
    z-index: 9;
    position: fixed;
    bottom: 17%;
    left: 10px;
    cursor: pointer;
    padding: 5px !important
}

.phone {
    z-index: 9;
    position: fixed;
    bottom: 10%;
    left: 10px;
    cursor: pointer;
    padding: 5px
}
</style>