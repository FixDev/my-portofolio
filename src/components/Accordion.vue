<template>
  <div>
    <div
      @click="toggleAccordion()"
      class="flex items-center justify-between hover:cursor-pointer"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${uid}`"
    >
      <div>
        <slot name="title" />
      </div>

      <div class="text-xl pb-2 py-2 px-4 text-color-2">
        <svg
          class="w-3 transition-all duration-200 transform"
          :class="{
            'rotate-180': isOpen,
            'rotate-0': !isOpen,
          }"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 10"
          aria-hidden="true"
        >
          <path
            d="M15 1.2l-7 7-7-7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div v-if="isOpen" :id="`collapse${uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
  setup() {
    const uid = getCurrentInstance().uid;

    return {
      uid,
    };
  },
};
</script>
