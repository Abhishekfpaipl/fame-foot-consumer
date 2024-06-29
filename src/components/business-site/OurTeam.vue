<template>
    <div class="py-3">
        <div class="container">
            <div class="py-2 mb-5">
                <h1 class="text-center text-capitalize">{{ title }}</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3">
                <div class="col" v-for="(lead, index) in values" :key="index">
                    <div class="position-relative w-100 d-flex justify-content-center align-items-center flex-fill">
                        <div class="card position-relative w-100 p-3 d-flex flex-column bg-light"
                            style="color: var(--bg-primary);">
                            <div class="image text-center">
                                <img :src="lead.img" style="width: 25%;" alt="">
                                <p class="ms-2 fw-bold text-uppercase">{{ lead.title }}</p>
                            </div>
                            <div class="content">
                                <p>{{ lead.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "LeadManagement",
    props: ['values', 'title'],
}
</script>
<style scoped>
.card:hover {
    background-color: var(--bg-primary) !important;
    color: white !important;
}

.card {
    max-width: 300px;
    min-height: 200px;
    height: 200; 
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container .card .image {
    position: relative;
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
    z-index: 1;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container .card .image i {
    font-size: 2rem; 
}

.container .card .content {
    position: relative;
    color: #fff;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    transition: visibility 0s, opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
    overflow: hidden;
}

.container .card:hover .content {
    visibility: visible;
    opacity: 1;
    max-height: 100px;
    /* Adjust as needed */
    transition-delay: 0.2s;
}

.container .card:hover .image {
    transform: translateY(-10px);
    /* display: none; */
    scale: 0.7
}
.container .card:hover .image i{
    display: none;

}
</style>
