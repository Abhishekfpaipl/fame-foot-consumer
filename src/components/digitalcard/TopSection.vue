<template>
  <div class="container rounded-top-5  border-top border-start border-end bg-white"
    style="border-color:grey !important;margin-top: -40px;">
    <div class="d-flex justify-content-start align-items-center">

    </div>
    <div class="row">
      <div class="col-12 col-md-4  p-3 position-relative">
        <!-- <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" alt="Logo" class="rounded-3" -->
        <img src="/img/members/19.jpg" alt="Logo" class="rounded-3"
          style="width: 200px;">
        <span @click="share" class="position-absolute start-0 px-3">
          <i class="bi bi-share-fill fs-4"></i>
        </span>
      </div>
      <div class="col-12 col-md-8 p-5 ">
        <div class="d-flex flex-column align-items-md-start align-items-center my-2">
          <h3>Business Name</h3>
          <small class="">Sales assistant</small>
          <small class="">B2B service</small>
          <small class="">Bhybrid by Onhoff</small>
        </div>
        <div class="d-flex justify-content-center justify-content-md-start gap-2 overflow-x-scroll w-100 " id="scroll">
          <img :src="image" style="width: 30px; height: 30px; object-fit: contain;" v-for="image in images"
            :key="image.id" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopSection",
  data() {
    return {
      contact: [
        { name: 'Email', icon: 'bi-envelope fs-5', action: 'openEmail' },
        { name: 'Call', icon: 'bi-telephone fs-5', action: 'openDialer' },
        { name: 'Business', icon: 'bi-building fs-5', action: '' },
        { name: 'Whatsapp', icon: 'bi-whatsapp fs-5', action: 'openWhatsapp' },
        { name: 'Map', icon: 'bi-geo fs-5', action: 'openMaps' },
        { name: 'Query', icon: 'bi-question-circle fs-5', action: 'openQuery' },
      ], images: [
        "/img/members/1.png",
        "/img/members/2.webp",
        "/img/members/3.png",
        "/img/members/4.png",
        "/img/members/5.jpg",
        "/img/members/6.webp",
        "/img/members/7.jpeg",
        "/img/members/8.png",
      ],
    }
  },
  // methods: {

  //   share() {
  //     if (navigator.share) {
  //       navigator.share({
  //         title: 'Share this content',
  //         text: 'Check out this awesome content!',
  //         url: window.location.href,
  //       }).then(() => {
  //         console.log('Successful share');
  //       }).catch((error) => {
  //         console.log('Error sharing', error);
  //       });
  //     } else {
  //       alert('Web Share API is not supported in your browser.');
  //     }
  //   },
  // }
};
</script>
<style>
@media(max-width:768px) {
  .end-md-45 {
    right: 45% !important
  }
}
</style>