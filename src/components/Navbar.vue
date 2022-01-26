<script setup>
import { ref } from "vue";
const showMenu = ref(false);
const navbarData = ref([
  {
    route: "/",
    name: "Home",
    active: true,
  },
  {
    route: "skills",
    name: "Skills",
    active: false,
  },
  {
    route: "projects",
    name: "Projects",
    active: false,
  },
  {
    route: "blogs",
    name: "Blogs",
    active: false,
  },
]);

const toggleNav = () => {
  showMenu.value = !showMenu.value;
};
</script>

<style scoped></style>

<template>
  <nav
    class="container px-8 py-8 mx-auto md:flex md:justify-center md:items-center"
  >
    <div class="flex items-center justify-start">
      <!-- Mobile menu button -->
      <div
        @click="toggleNav"
        class="flex md:hidden bg-color-2 rounded-md p-1 animate-bounce"
      >
        <button type="button" class="text-color-4 focus:outline-none">
          <svg
            v-if="!showMenu"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
          <svg v-else viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path
              fil-rule="evenodd"
              d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-6 space-y-3 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-12 md:mt-0"
    >
      <li
        class="text-color-4 hover:text-white text-lg lg:text-2xl animate-fade-in-down"
        v-for="nav in navbarData"
        :key="nav.name"
      >
        <router-link :to="nav.route">
          {{ nav.name }}
        </router-link>
      </li>
      <div
        class="md:hidden mx-auto w-full py-1 border-b-2 border-color-4 opacity-25 shadow-2xl"
      ></div>
    </ul>
  </nav>
</template>
