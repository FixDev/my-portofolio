<script setup>
import { ref, onBeforeMount } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const settings = ref({ itemsToShow: 1.9, wrapAround: true, autoplay: 3500 });
const skillsFE = ref([
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
    name: "PHP",
    experience: "3 Years",
    icon: "php",
  },
  {
    name: "PHP Laravel",
    experience: "3 Years",
    icon: "laravel",
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
]);

const skillsBE = ref([
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
    name: "PHP",
    experience: "3 Years",
    icon: "php",
  },
  {
    name: "PHP Laravel",
    experience: "3 Years",
    icon: "laravel",
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
]);

const skillsNetworking = ref([
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
    name: "PHP",
    experience: "3 Years",
    icon: "php",
  },
  {
    name: "PHP Laravel",
    experience: "3 Years",
    icon: "laravel",
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
]);

const tools = ref([
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
    name: "PHP",
    experience: "3 Years",
    icon: "php",
  },
  {
    name: "PHP Laravel",
    experience: "3 Years",
    icon: "laravel",
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
]);

const otherSkills = ref([
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
    name: "PHP",
    experience: "3 Years",
    icon: "php",
  },
  {
    name: "PHP Laravel",
    experience: "3 Years",
    icon: "laravel",
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
  <div class="mx-auto max-w-4xl animate-fade-in-down">
    <div class="pb-7">
      <h1 class="text-center text-2xl pb-3 text-color-4">Front End</h1>
      <Carousel :settings="settings">
        <Slide v-for="skill in skillsFE" :key="skill.name">
          <div class="carousel__item p-10 lg:p-16 bg-color-4 flex flex-col">
            <i
              :class="`devicon-${skill.icon}-plain colored text-9xl py-0 lg:py-2`"
            ></i>
            <div class="py-0 lg:py-10">
              <h2 class="text-2xl font-bold py-2 text-color-1">
                {{ skill.name }}
              </h2>
              <h3 class="text-sm text-color-2">
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
    </div>
    <div class="py-7">
      <h1 class="text-center text-2xl py-3 text-color-4">Back End</h1>
      <Carousel :settings="settings">
        <Slide v-for="skill in skillsBE" :key="skill.name">
          <div class="carousel__item p-10 lg:p-16 bg-color-4 flex flex-col">
            <i
              :class="`devicon-${skill.icon}-plain colored text-9xl py-0 lg:py-2`"
            ></i>
            <div class="py-0 lg:py-10">
              <h2 class="text-2xl font-bold py-2 text-color-1">
                {{ skill.name }}
              </h2>
              <h3 class="text-sm text-color-2">
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
    </div>
    <div class="py-7">
      <h1 class="text-center text-2xl py-3 text-color-4">Networking</h1>
      <Carousel :settings="settings">
        <Slide v-for="skill in skillsNetworking" :key="skill.name">
          <div class="carousel__item p-10 lg:p-16 bg-color-4 flex flex-col">
            <i
              :class="`devicon-${skill.icon}-plain colored text-9xl py-0 lg:py-2`"
            ></i>
            <div class="py-0 lg:py-10">
              <h2 class="text-2xl font-bold py-2 text-color-1">
                {{ skill.name }}
              </h2>
              <h3 class="text-sm text-color-2">
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
    </div>
    <div class="py-7">
      <h1 class="text-center text-2xl py-3 text-color-4">Tools</h1>
      <Carousel :settings="settings">
        <Slide v-for="skill in tools" :key="skill.name">
          <div class="carousel__item p-10 lg:p-16 bg-color-4 flex flex-col">
            <i
              :class="`devicon-${skill.icon}-plain colored text-9xl py-0 lg:py-2`"
            ></i>
            <div class="py-0 lg:py-10">
              <h2 class="text-2xl font-bold py-2 text-color-1">
                {{ skill.name }}
              </h2>
              <h3 class="text-sm text-color-2">
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
    </div>
    <div class="py-7">
      <h1 class="text-center text-2xl py-3 text-color-4">Other Skills</h1>
      <Carousel :settings="settings">
        <Slide v-for="skill in otherSkills" :key="skill.name">
          <div class="carousel__item p-10 lg:p-16 bg-color-4 flex flex-col">
            <i
              :class="`devicon-${skill.icon}-plain colored text-9xl py-0 lg:py-2`"
            ></i>
            <div class="py-0 lg:py-10">
              <h2 class="text-2xl font-bold py-2 text-color-1">
                {{ skill.name }}
              </h2>
              <h3 class="text-sm text-color-2">
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
    </div>
  </div>
</template>

<!-- Front End -->
<!-- <div>
      <div class="flex flex-wrap justify-center gap-x-10 gap-y-5">
        <i class="devicon-android-plain colored"></i>
        <i class="devicon-android-plain colored"></i>
        <i class="devicon-android-plain colored"></i>
        <i class="devicon-android-plain colored"></i>
      </div>
    </div> -->
<!-- Back End -->
<!-- <div>
      <h1>Back End</h1>
    </div> -->
<!-- Networking -->
<!-- <div>
      <h1>Networking</h1>
    </div> -->
<!-- Tools -->
<!-- <div>
      <h1>Tools</h1>
    </div> -->
<!-- other skills -->
<!-- <div>
      <h1>Other Skills</h1>
    </div> -->
