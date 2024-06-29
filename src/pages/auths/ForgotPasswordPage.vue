<template>
    <div class="container-fluid" style="background: #000">
        <div class="row g-0 pb-2" style="min-height: 100vh;">
            <div class="pt-2 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <routerLink to="/"
                    class="text-decoration-none d-flex flex-md-column justify-content-center align-items-center"
                    style="height: 150px; width: 150px;">
                    <img :src="`${publicPath}${logo}`" alt="user" class="d-none d-md-block"
                        style="width: 100%; object-fit: contain; filter: invert(1);">
                    <img :src="`${publicPath}${logo}`" alt="user" class="d-md-none"
                        style="width: 50%; object-fit: contain; filter: invert(1);">
                    <span class="fs-1 text-uppercase text-white">Fameset</span>
                </routerLink>
            </div>
            <div class="container d-flex flex-column justify-content-center col-md-6 bg-light pt-2">
                <p class="text-center fs-5">Forgot Password</p>
                <form @submit.prevent="forgotPassword()">
                    <div class="w-100 p-2 form-floating">
                        <input type="email" class="form-control" placeholder="Email" v-model="email" required>
                        <label for="floatingInput" class="ms-2 text-muted">Email Id.</label>
                    </div>
                    <div class="d-flex justify-content-center align-items-center w-100 px-2 mt-2">
                        <button type="submit" class="btn btn-dark py-2 fs-5 w-100"
                            style="padding: 10px 12px !important;">Submit</button>
                    </div>
                </form>
                <div class="text-center container my-3">
                    <p>If you submit your email here, Will send you a One Time Password at your registered email
                        address
                    </p>
                </div>
                <router-link to="/login-page">
                    <p class="text-center">Click here for Login..</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForgotPasswordPage',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            logo: 'img/logo.svg',
            email: "",
        };
    },
    methods: {
        forgotPassword() {
            const data = {
                email: this.email
            }
            this.$store.dispatch('MacStore/forgotPassword', data)
        }
    },
}
</script>
 
