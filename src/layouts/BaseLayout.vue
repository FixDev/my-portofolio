<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<style></style>
<template>
  <div class="container mx-auto">
    <Navbar />
    <div
      class="container antialiased leading-normal tracking-wider bg-cover px-8 lg:px-4"
    >
      <router-view />
    </div>
  </div>
</template>
