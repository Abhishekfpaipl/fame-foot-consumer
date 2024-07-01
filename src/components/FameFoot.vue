<template>
    <div class="container-fluid p-3  bg-dark" style="background-image: url('/img/level.png')">
        <!-- <router-link to="/" class="row text-decoration-none px-4">
            <div
                class="col-12 col-md-4 d-flex justify-content-md-start justify-content-center gap-2 align-items-center mt-3 mt-md-0">
                <div class="text-white fs-5">
                    <span class="border-bottom me-2 pb-1 my-2 ">Want to Manage</span> <br>
                    <span class="fw-bold text-uppercase text-warning"> your fame ? </span>
                </div>
                <router-link to="/list-business" class="btn btn-warning text-capitalize lh-2">get started <br>
                    FREE</router-link>
            </div>
            <div class="col-12 col-md-8 d-md-flex justify-content-end align-items-center gap-5 mt-3 mt-md-0 w-100">
                <div class="d-flex align-items-center mx-auto">
                    <img src="/img/logo.svg" style="width: 50px;object-fit: contain;filter: invert(1);">
                    <p class="mb-0 text-uppercase text-white fs-2">fameset.com</p>
                </div>
                <p class="mb-0 text-white"> All rights
                    reserved<br> Copyright © 2024 </p>
            </div>
        </router-link> -->
        <div class="row px-4">
            <router-link to="/list-your-business"
                class="text-decoration-none col-md-6 d-flex justify-content-md-start justify-content-center align-items-center mt-3 mt-md-0">
                <div class="text-white fs-5">
                    <span class="border-bottom me-2 pb-1 my-2 ">Want to Manage</span> <br>
                    <span class="fw-bold text-uppercase text-warning"> your fame ? </span>
                </div>
                <router-link to="/list-your-business" class="btn btn-warning text-capitalize lh-2">get started <br>
                    FREE</router-link>
            </router-link>
            <router-link to="/"
                class="text-decoration-none col-md-6 d-flex flex-column flex-md-row justify-content-end gap-md-5 mt-3 mt-md-0">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="/img/logo.svg" style="width: 50px;object-fit: contain;filter: invert(1);">
                    <p class="mb-0 text-uppercase text-white fs-2">fameset.com</p>
                </div>
                <p class="mb-0 text-white"> All rights
                    reserved<br> Copyright © 2024 </p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    // d-flex flex-column flex-md-row
}
</script>
<style lang="">

</style>