<template>
    <div class="tartist-tiny-slider-wrap">
      <div class="tartist-tiny-slider">
        <div class="wrap" v-for="(chunk, index) in chunkedItems" :key="index">
          <div class="tartist-tiny-slider__item" v-for="(item, idx) in chunk" :key="idx">{{ item }}</div>
        </div>
      </div>
      <div class="tns-nav">
        <button 
          v-for="(dot, index) in chunkedItems" 
          :key="index" 
          :class="{'tns-nav-active': index === activeSlide}" 
          @click="goToSlide(index)">
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TinySlider',
    data() {
      return {
        items: [
          'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
          'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12', 'Item 13', 'Item 14',
        ],
        chunkSize: 6,
        chunkedItems: [],
        activeSlide: 0
      };
    },
    mounted() {
      this.setChunkSize();
      this.chunkItems();
      window.addEventListener('resize', this.handleResize);
    },
    unmounted() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      setChunkSize() {
        this.chunkSize = window.innerWidth >= 800 ? 12 : 1;
      },
      chunkItems() {
        let size = this.chunkSize;
        this.chunkedItems = [];
        for (let i = 0; i < this.items.length; i += size) {
          this.chunkedItems.push(this.items.slice(i, i + size));
        }
      },
      handleResize() {
        this.setChunkSize();
        this.chunkItems();
        this.activeSlide = 0;
      },
      goToSlide(index) {
        this.activeSlide = index;
        this.updateSlide();
      },
      updateSlide() {
        const slider = this.$el.querySelector('.tartist-tiny-slider');
        const width = slider.offsetWidth;
        slider.style.transform = `translateX(-${this.activeSlide * width}px)`;
      }
    },
    watch: {
      activeSlide() {
        this.updateSlide();
      }
    }
  };
  </script>
  
  <style scoped>  
  
  .tartist-tiny-slider-wrap {
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
  
  .tartist-tiny-slider {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .wrap {
    flex: 0 0 100%;
    display: inline-grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .tartist-tiny-slider__item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    font-size: 1.2em;
    background-color: #2779a8;
    color: #ffffff;
  }
  
  .tartist-tiny-slider__item:nth-child(2n+1) {
    background-color: #ffc40c;
    color: #212121;
  }
  
  .tns-nav {
    text-align: center;
    margin-top: 30px;
  }
  
  .tns-nav button {
    width: 15px;
    height: 15px;
    border-radius: 20px;
    border: none;
    margin: 0 5px;
    background-color: #dddddd;
  }
  
  .tns-nav button.tns-nav-active {
    background-color: #2779a8;
  }
  
  @media (min-width: 800px) {
    .tartist-tiny-slider-wrap {
      width: 768px;
      margin: 0 auto;
    }
  
    .tartist-tiny-slider__item {
      height: 250px;
      font-size: 2em;
    }
  
    .wrap {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  </style>
  