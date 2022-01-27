<script setup>
import { ref, onBeforeMount } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import Accordion from "../components/Accordion.vue";

const settings = ref({ itemsToShow: 1.9, wrapAround: true, autoplay: 3500 });
const allSkill = ref([
  {
    name: "Front End Skills",
    data: [
      {
        name: "HTML 5",
        experience: "4 Years",
        icon: "html5",
      },
      {
        name: "CSS",
        experience: "4 Years",
        icon: "css3",
      },
      {
        name: "Vue JS",
        experience: "2 Years",
        icon: "vuejs",
      },
      {
        name: "Javascript",
        experience: "2 Years",
        icon: "javascript",
      },
      {
        name: "Nuxt JS",
        experience: "1 Years",
        icon: "nuxtjs",
      },
      {
        name: "Tailwind CSS",
        experience: "4 Month",
        icon: "tailwindcss",
      },
      {
        name: "Bootstrap CSS",
        experience: "2 Years",
        icon: "bootstrap",
      },
      {
        name: "React JS",
        experience: "2 Month",
        icon: "react",
      },
    ],
  },
  {
    name: "Back End Skills",
    data: [
      {
        name: "PHP",
        experience: "1 Years",
        icon: "php",
      },
      {
        name: "Laravel",
        experience: "1 Years",
        icon: "laravel",
      },
      {
        name: "Golang",
        experience: "1 Month",
        icon: "go",
      },
      {
        name: "firebase",
        experience: "1 Month",
        icon: "firebase",
      },
      {
        name: "Python",
        experience: "6 Month",
        icon: "python",
      },
      {
        name: "MySQL",
        experience: "1 Years",
        icon: "mysql",
      },
    ],
  },
  {
    name: "Networking Skills",
    data: [
      {
        name: "HTML 5",
        experience: "3 Years",
        icon: "html5",
      },
      {
        name: "CSS",
        experience: "3 Years",
        icon: "css3",
      },
      {
        name: "Vue JS",
        experience: "3 Years",
        icon: "vuejs",
      },
      {
        name: "Javascript",
        experience: "3 Years",
        icon: "javascript",
      },
      {
        name: "Nuxt JS",
        experience: "3 Years",
        icon: "nuxtjs",
      },
      {
        name: "Tailwind CSS",
        experience: "3 Years",
        icon: "tailwindcss",
      },
    ],
  },
  {
    name: "Tools",
    data: [
      {
        name: "Visual Studio Code",
        experience: "2 Years",
        icon: "vscode",
      },
      {
        name: "GIT",
        experience: "2 Years",
        icon: "git",
      },
      {
        name: "Github",
        experience: "2 Years",
        icon: "github",
      },
      {
        name: "Gitlab",
        experience: "2 Years",
        icon: "gitlab",
      },
      {
        name: "Bitbucket",
        experience: "3 Years",
        icon: "bitbucket",
      },
      {
        name: "Jira",
        experience: "3 Years",
        icon: "jira",
      },
    ],
  },
  {
    name: "Other Skills",
    data: [
      {
        name: "HTML 5",
        experience: "3 Years",
        icon: "html5",
      },
      {
        name: "CSS",
        experience: "3 Years",
        icon: "css3",
      },
      {
        name: "Vue JS",
        experience: "3 Years",
        icon: "vuejs",
      },
      {
        name: "Javascript",
        experience: "3 Years",
        icon: "javascript",
      },
      {
        name: "Nuxt JS",
        experience: "3 Years",
        icon: "nuxtjs",
      },
      {
        name: "Tailwind CSS",
        experience: "3 Years",
        icon: "tailwindcss",
      },
    ],
  },
]);

onBeforeMount(() => {
  if (window.innerWidth > 1024) settings.value.itemsToShow = 2.99;
});
</script>

<style>
.carousel__next,
.carousel__prev {
  color: #e0c097;
  background-color: #5c3d2e;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
.carousel__item {
  border-radius: 0.5rem;
}
</style>

<template>
  <div class="container mx-auto max-w-4xl animate-fade-in-down">
    <div class="flex justify-center flex-col gap-8 lg:gap-5">
      <accordion
        v-for="skills in allSkill"
        :key="skills.name"
        class="py-4 bg-color-4 rounded-lg"
      >
        <template v-slot:title>
          <h2 class="text-xl pb-2 py-2 px-4 text-color-2">{{ skills.name }}</h2>
        </template>
        <template v-slot:content>
          <Carousel :settings="settings" class="animate-fade-in-down">
            <Slide v-for="skill in skills.data" :key="skill.name">
              <div class="carousel__item p-10 lg:p-16 bg-color-2">
                <i
                  :class="`devicon-${skill.icon}-plain colored text-9xl py-0 lg:py-2`"
                ></i>
                <div class="py-0 lg:py-10">
                  <h2 class="text-2xl font-bold py-2 text-color-4">
                    {{ skill.name }}
                  </h2>
                  <h3 class="text-sm text-color-4">
                    <span class="font-bold">
                      {{ skill.experience }}
                    </span>
                    experience
                  </h3>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </template>
      </accordion>
    </div>
  </div>
</template>
