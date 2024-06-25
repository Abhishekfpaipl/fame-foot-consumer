<template>
  <DashboardNav />
  <router-view />
</template>
<script>
import DashboardNav from "@/components/DashboardNav.vue";
export default {
  name: "App",
  components: {
    DashboardNav
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.smaller{
  font-size: 12px;
}
#scroll::-webkit-scrollbar {
  display: none;
}
</style>
