<template>
    <div class="container-fluid" style="background: #000">
        <div class="row g-0 pb-2" style="min-height: 100vh;">
            <div class="pt-2 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <routerLink to="/" class="text-decoration-none d-flex flex-md-column justify-content-center align-items-center" style="height: 150px; width: 150px;">
                    <img :src="`${publicPath}${logo}`" alt="user" class="d-none d-md-block"
                        style="width: 100%; object-fit: contain; filter: invert(1);">
                    <img :src="`${publicPath}${logo}`" alt="user" class="d-md-none" 
                        style="width: 50%; object-fit: contain; filter: invert(1);">
                        <span class="fs-1 text-uppercase text-white">Fameset</span>
                </routerLink>
            </div>
            <div class="container d-flex flex-column justify-content-center col-md-6 bg-light pt-2">
                <p class="text-center fs-5">Login Your Account </p>
                <form @submit.prevent="loginAccount()">
                    <div class="w-100 p-2 form-floating">
                        <input type="tel" class="form-control" placeholder="Mobile" v-model="mobile">
                        <label for="floatingInput" class="ms-2 text-muted">Mobile No.</label>
                    </div>
                    <p class="text-center mb-1">OR</p>
                    <div class="w-100 p-2 form-floating">
                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                        <label for="floatingInput" class="ms-2 text-muted">Email Id.</label>
                    </div>
                    <div class="w-100 p-2 form-floating btn-group">
                        <input type="password" class="form-control" id="password" placeholder="Password"
                            v-model="password" required>
                        <label for="password" class="ms-2 text-muted">Password</label>
                        <i class="bi btn btn-outline-dark  py-3"
                            :class="{ 'bi-eye': !showPassword, 'bi-eye-slash': showPassword }"
                            @click="togglePasswordVisibility('password')"></i>
                    </div>
                    <router-link to="/forgot-password-page" class="float-end">
                        <p class="text-center">Forgot Password?</p>
                    </router-link>
                    <div class="d-flex justify-content-center align-items-center w-100 px-2 mt-2">
                        <button type="submit" class="btn btn-dark py-2 fs-5 w-100"
                            style="padding: 10px 12px !important;">Submit</button>
                    </div>
                    <router-link to="/registration-page">
                        <p class="text-center">Don't have an account ? Register</p>
                    </router-link>
                </form>
                <div class="text-center container my-3">
                    <p>By proceeding, you agree to <RouterLink to="/term-of-use">Terms & Conditions</RouterLink> &
                        <RouterLink to="/privacy-policy">
                            Privacy policy</RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            logo: 'img/logo.svg',
            email: 'abhishek@gmail.com',
            password: "123456789",
            mobile: '',
            showPassword: false,
        };
    },
    methods: {
        loginAccount() {
            console.log('hello')
        },
        togglePasswordVisibility(fieldId) {
            this.showPassword = !this.showPassword;
            const inputField = document.getElementById(fieldId);
            inputField.type = this.showPassword ? 'text' : 'password';
        }
    },
}
</script>
 