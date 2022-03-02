<template>
  <div
    class="max-w-4xl flex flex-col items-center h-auto flex-wrap mx-auto my-28 lg:my-32 bg-color-4 rounded-lg animate-fade-in-down"
  >
    <img
      v-show="state.isLoaded"
      @load="onLoad"
      class="block rounded-full shadow-xl mx-auto -mt-28 h-48 w-48 bg-cover bg-center object-cover"
      src="/src/assets/img/profile.jpg"
      alt="Profile picture"
    />
    <div
      v-show="!state.isLoaded"
      class="animate-pulse border-solid border-2 border-color-2 block rounded-full shadow-xl mx-auto -mt-28 h-48 w-48 bg-color-4 bg-cover bg-center object-cover"
    ></div>
    <h1 class="text-3xl font-bold pt-5 text-color-2">Muhammad Fikri</h1>
    <h2 class="text-xl font-bold pt-2 text-color-2">Software Engineer</h2>
    <div
      class="mx-auto w-4/5 py-3 border-b-2 border-color-2 opacity-25 shadow-2xl"
    ></div>
    <div class="flex flex-wrap justify-center gap-5 my-3">
      <a
        target="blank"
        href="https://www.linkedin.com/in/muhammad-fikri-977a50192/"
      >
        <img
          class="h-8 w-8 hover:scale-125"
          src="../assets/svg/linkedin.svg"
          alt="Linkedin"
        />
      </a>
      <a target="blank" href="https://github.com/FixDev">
        <img
          class="h-8 w-8 hover:scale-125 fill"
          src="../assets/svg/github.svg"
          alt="Github"
        />
      </a>
      <a target="blank" href="mailto:fikrimuhammad2016@gmail.com">
        <img
          class="h-8 w-8 hover:scale-125"
          src="../assets/svg/email.svg"
          alt="Email"
        />
      </a>
      <a target="blank" href="https://www.instagram.com/fikrimuha__">
        <img
          class="h-8 w-8 hover:scale-125"
          src="../assets/svg/instagram.svg"
          alt="Instagram"
        />
      </a>
      <a
        target="blank"
        href="https://www.facebook.com/muhamadfikri.muhamadfikri.988"
      >
        <img
          class="h-8 w-8 hover:scale-125"
          src="../assets/svg/facebook.svg"
          alt="Facebook"
        />
      </a>
    </div>

    <p class="text-xl lg:text-2xl text-center px-14 py-5 text-color-2">
      Hi! I am Software Engineer &#128187;. IT enthusiast, fast learner, and
      problem solver.
    </p>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  isLoaded: false,
});

const onLoad = () => {
  state.isLoaded = true;
  return;
};
</script>

<style></style>
