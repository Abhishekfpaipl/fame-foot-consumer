<template>
  <!-- <div class="rounded-5 bg-white position-sticky w-75" style="margin-top: -40px;left: 12%; z-index: 9;">
    <div class="position-relative">
      <div class="d-flex justify-content-between align-items-center p-3 px-4 px-md-5 rounded-top-5">
        <span @click="saveContact" class="d-flex flex-column align-items-center">
          <i class="bi bi-download fs-4"></i> 
        </span>
        <span @click="share" class="d-flex flex-column align-items-center">
          <i class="bi bi-share-fill fs-4"></i> 
        </span>
        <a href="#second"><i class="bi bi-telephone-outbound-fill fs-4 text-dark" ></i></a>
      </div>
      <div class="position-absolute end-50 end-md-45" style="width:60px;height: 60px;top: -60px;">
        <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" alt="Logo"
          class="rounded-3" style="width: 100px;">
      </div>
      <div class="d-flex flex-column align-items-center my-2">
        <h3>Business Name</h3>
        <small class="">Sales assistant</small>
        <small class="">B2B service</small>
        <small class="">Bhybrid by Onhoff</small>
      </div>
    </div>
  </div> -->
  <div class="container rounded-top-4 border-top border-start border-end bg-white" style="margin-top: -40px;">
    <div class="row">
      <div class="col-12 col-md-4  p-3">
        <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" alt="Logo" class="rounded-3"
          style="width: 200px;">
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