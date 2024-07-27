<template>
  <div class="position-fixed text-white top-0 w-100 py-md-2 px-md-3 pe-md-0 p-1"
    style="z-index: 99; min-height:80px !important;background-color: #00000070 !important;">
    <div class="d-flex justify-content-between align-items-start">
      <div class="flex-fill d-flex gap-2 align-items-center position-relative">
        <img src="/img/members/12.jpg" class="rounded" style="width: 50px;height: 50px;" alt="">
        <div class="flex-fill d-flex flex-column align-items-start">
          <div class="w-100 d-flex gap-2 justify-content-between align-items-center pe-2">
            <p class="mb-0 text-start text-white">Name</p>
            <i class="bi bi-arrow-right fs-5"></i>
          </div>
          <div class="d-flex justify-content-start w-50 overflow-x-scroll my-2 gap-2" id="scroll">
            <img :src="image" style="width: 20px; height: 20px; object-fit: contain;" v-for="image in images"
              :key="image.id" alt="">
          </div>
        </div>
        <div class="position-absolute end-0 smaller" style="bottom: 10px;">
          <div class="d-flex gap-1 align-items-start rounded-start-3 px-2 text-dark bg-warning">
            <span>Fameset</span>
            <i class="bi bi-star"></i>
            <span>8.5</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button v-for="(item, index) in carouselItems" :key="index" type="button" :data-bs-target="'#carouselExampleDark'"
        :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : null"
        :aria-label="'Slide ' + (index + 1)"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item position-relative"
        :class="{ active: index === 0 }" :data-bs-interval="index === 0 ? 10000 : 2000">
        <img :src="item.src" class="" style="height: 100vh; width: 100%; object-fit: cover" alt="..." />

        <div class="position-absolute d-flex flex-column gap-2 end-0 px-2" style="bottom: 15%;">
          <div class="d-flex flex-column text-dark">
            <i :class="['bi', isLiked ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up', 'fs-4']"
              @click="toggleLike"></i>
            <span class="smaller">3.4K</span>
          </div>
          <div class="d-flex flex-column text-dark">
            <i class="bi bi-chat-right-text"></i>
            <span class="smaller">3.4K</span>
          </div>
          <div class="d-flex flex-column text-dark">
            <i class="bi bi-megaphone"></i>
            <span class="smaller">Promote</span>
          </div>
        </div>

        <div class="position-absolute d-flex flex-column gap-2 start-0 px-2" style="bottom: 15%;">
          <div class="d-flex flex-column text-dark">
            <i :class="['bi', isHeart ? 'bi-heart-fill' : 'bi-heart', 'fs-4']" @click="toggleHeart"></i>
            <span class="smaller">Heart</span>
          </div>
          <div class="d-flex flex-column text-dark">
            <i class="bi bi-share"></i>
            <span class="smaller">Share</span>
          </div>
          <div class="d-flex flex-column text-dark">
            <i class="bi bi-rss"></i>
            <span class="smaller">Feed</span>
          </div>
        </div>

        <div class="carousel-overlay-bottom"></div>
        <div class="carousel-overlay-top"></div>
        <div class="carousel-caption text-white">
          <h5>{{ item.label }}</h5>
          <p>{{ item.text }}</p>
          <a href="#second" class="text-warning"><i class="bi bi-chevron-down fs-1"></i> </a>
        </div>
      </div>
    </div>


    <!-- <button class="carousel-control-prev text-white" type="button" data-bs-target="#carouselExampleDark"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>

    </button> -->


  </div>

</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          src: 'https://img101.urbanic.com/v1/goods-pic/6be4350a58054a1782774ad928f5127bUR_w1440_q90.webp',
          label: 'First slide label',
          text: 'Some representative placeholder content for the first slide.',
        },
        {
          src: 'https://img101.urbanic.com/v1/goods-pic/ad707fc0acaa430282ca040c2a26e6ceUR_w1440_q90.webp',
          label: 'Second slide label',
          text: 'Some representative placeholder content for the second slide.',
        },
        {
          src: 'https://img101.urbanic.com/v1/goods-pic/f4f034e39ff74695aa7484da814dd568UR_w1440_q90.webp',
          label: 'Third slide label',
          text: 'Some representative placeholder content for the third slide.',
        },
        {
          src: "https://img101.urbanic.com/v1/goods-pic/286a359e4ac541c6ad4e513f84c4f682UR_w1440_q90.webp",
          label: 'Forth slide label',
          text: 'Some representative placeholder content for the third slide.',
        },
        {
          src: "https://img101.urbanic.com/v1/goods-pic/cb97514caad24a099eb9921b81924233UR_w1440_q90.webp",
          label: 'Fifth slide label',
          text: 'Some representative placeholder content for the third slide.',
        },
        {
          src: "https://img101.urbanic.com/v1/goods-pic/df24e222175c4fe5896f69dd5a6e7bc2UR_w1440_q90.webp",
          label: 'Sixth slide label',
          text: 'Some representative placeholder content for the third slide.',
        },
        {
          src: "https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w1440_q90.webp",
          label: 'Seventh slide label',
          text: 'Some representative placeholder content for the third slide.',
        },
        {
          src: "https://img101.urbanic.com/v1/goods-pic/92e854a32b924753b3929277901e56acUR_w1440_q90.webp",
          label: 'Eighth slide label',
          text: 'Some representative placeholder content for the third slide.',
        },
        {
          src: "https://img101.urbanic.com/v1/goods-pic/587842b58fdb4848a73526d92869e0c9UR_w1440_q90.webp",
          label: 'Nineth slide label',
          text: 'Some representative placeholder content for the third slide.',
        },
        {
          src: "https://img101.urbanic.com/v1/goods-pic/a56eb4a57e1342aca2644dddcfa523d4UR_w1440_q90.webp",
          label: 'Nineth slide label',
          text: 'Some representative placeholder content for the third slide.',
        },
        {
          src: "https://img101.urbanic.com/v1/goods-pic/7a867aed4bc5446daf8c8ee96bb0f3d4UR_w1440_q90.webp",
          label: 'Nineth slide label',
          text: 'Some representative placeholder content for the third slide.',
        },
      ],
      images: [
        "/img/members/1.png",
        "/img/members/2.webp",
        "/img/members/3.png",
        "/img/members/4.png",
        "/img/members/5.jpg",
        "/img/members/6.webp",
        "/img/members/7.jpeg",
        "/img/members/8.png",
      ],
      isLiked: false,
      isHeart: false,
    };
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
      // if (this.isDisliked) {
      //   this.isDisliked = false; 
      // }
    },
    toggleHeart() {
      this.isHeart = !this.isHeart;
      // if (this.isLiked) {
      //   this.isHeart = false; // Prevent both like and dislike being active at the same time
      // }
    },
  },

};
</script>

<style>
.carousel-indicators button {
  background-color: #fff !important;
}

.carousel-item {
  position: relative;
}

.carousel-overlay-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  /* Covers the bottom 50% */
  background: linear-gradient(to top, rgba(43, 43, 43, 0.9), rgba(0, 0, 0, 0) 50%);
  pointer-events: none;
}

.carousel-overlay-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  /* Covers the top 50% */
  background: linear-gradient(to bottom, rgba(43, 43, 43, 0.9), rgba(0, 0, 0, 0) 50%);
  pointer-events: none;
}

.carousel-indicators {
  top: 80px !important;
}

.carousel-dark .carousel-control-next-icon,
.carousel-dark .carousel-control-prev-icon {
  filter: none !important;
}
</style>
