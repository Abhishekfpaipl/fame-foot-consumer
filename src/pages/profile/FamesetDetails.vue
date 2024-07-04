<template>
    <div>
        <div class="container-fluid position-fixed top-0 w-100 bg-light" style="z-index: 99;">
            <div class="row border py-3 px-2">
                <div class="col-12 d-flex gap-2 align-items-center">
                    <i class="bi bi-chevron-left" @click=goback()></i>
                    <!-- <span>{{ pageName }}</span> -->
                    <small>Page Name</small>
                </div>

            </div>
        </div>
        <div class="" style="padding-top: 71px;">
            <h1>Fameset</h1>
            
        </div>
    </div>
</template>
<script>
 export default {
    name: "RewardsDetail",
    
    methods: {
        goback() {
            window.history.back()
        }
    }
}
</script>
<style lang="">

</style>