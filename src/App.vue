<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Nav />
  <br />
  <div id="container-div" className="container">
    <RouterView />
  </div>
  <br />
  <Footer />
</template>
