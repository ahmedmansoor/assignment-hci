<template>
  <div id="nav">
    <!-- <TabBar> </TabBar> -->
    <!-- <router-link :to="{ name: 'About' }">About</router-link> -->
    <!-- <TabBar /> -->
    <!-- <Home />
    <Footer /> -->
    <!-- <router-link to="/">Home</router-link> |
  <router-view />
    <router-link :to="{ name: 'Resorts' }">Resorts</router-link> -->
  </div>
  <router-view />
  <Footer> </Footer>
</template>

<script setup>
// import TabBar from "./components/tabbar.vue";
// import Home from "./views/Home.vue";
import Footer from "./components/footer.vue";
// import About from "./views/About.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
