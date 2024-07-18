<template>
    <div class="circle">
      <div class="logo"></div>
      <div class="text">
        <p ref="text">I never tell the same joke twice I have a DRY sense of humor.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RotatingTextCircle",
    mounted() {
      const text = this.$refs.text;
  
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
        )
        .join("");
    }
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap");
  
  :root {
    --radius: 35vmin;
    --frame-size: calc(var(--radius) / 3);
    --d-outer: calc(var(--radius) * 2);
    --d-inner: calc(var(--d-outer) - var(--frame-size));
    --font-size: calc(var(--radius) / 10);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inconsolata, sans-serif;
  }
  
  html {
    height: 100%;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
  
  p {
    font-size: var(--font-size);
  }
  
  .circle {
    position: relative;
    width: var(--d-outer);
    height: var(--d-outer);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo {
    position: absolute;
    width: var(--d-inner);
    height: var(--d-inner);
    background: url(https://avatars.githubusercontent.com/u/58844494?v=4);
    background-size: cover;
    border-radius: 50%;
    filter: contrast(1.5);
  }
  
  .text {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: rotateText 10s linear infinite;
  }
  
  @keyframes rotateText {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  
  .text p span {
    position: absolute;
    left: 50%;
    font-size: 1.2em;
    transform-origin: 0 var(--radius);
  }
  </style>
  