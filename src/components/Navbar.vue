<script setup></script>

<style scoped>
.item-nav {
  font-size: 23px;
}
</style>

<template>
  <div class="flex flex-wrap gap-10 justify-center py-10">
    <div class="item-nav hover:underline hover:decoration-white text-color-4">
      <router-link to="/">Home</router-link>
    </div>
    <div class="item-nav hover:underline hover:decoration-white text-color-4">
      <router-link to="skills">Skills</router-link>
    </div>
    <div class="item-nav hover:underline hover:decoration-white text-color-4">
      <router-link to="projects">Projects</router-link>
    </div>
    <div class="item-nav hover:underline hover:decoration-white text-color-4">
      <router-link to="blogs">Blogs</router-link>
    </div>
  </div>
</template>
