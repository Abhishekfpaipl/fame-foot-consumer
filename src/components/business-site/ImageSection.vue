<template>
    <div class="container-fluid" style="background-color: var(--bg-primary);">
        <div class="row p-3">
            <h1 class="text-white text-uppercase fw-bold">Let's</h1>
            <div class="col-12 text-center">
                <img :src="banner" class="d-none d-md-flex m-auto" alt="Cover Image" style="width:50%;">
                <img :src="banner" class="d-md-none" alt="Cover Image" style="width:100%;">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ImageSection', 
    props:{
        banner: {
            type: String, 
        },
        brandColorOne: {
            type: String, 
        },
        brandTextColor: {
            type: String, 
        },
        title: {
            type: String, 
        },
        description: {
            type: String, 
        }
    }
   
}
</script> 