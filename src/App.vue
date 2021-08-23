<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Resorts">Resorts</router-link>
      <router-link to="/Guesthouses">Guesthouses</router-link>
      <router-link to="/Contact">Contact</router-link>
      <router-link to="/About">About</router-link>
    </div> -->
    <router-view />
  </div>
  <Footer> </Footer>
</template>

<script setup>
// import TabBar from "./components/tabbar.vue";
// import Home from "./views/Home.vue";
// import About from "./views/About.vue";
import Footer from "./components/footer.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
