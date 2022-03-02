<template>
  <Suspense>
    <template #default>
      <ProfilePictureVue />
    </template>
    <template #fallback>
      <ProfilePictureSkeletonVue />
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent } from "vue";
import ProfilePictureSkeletonVue from "../components/ProfilePictureSkeleton.vue";

export default {
  components: {
    ProfilePictureVue: defineAsyncComponent(() =>
      import("../components/ProfilePicture.vue")
    ),
    ProfilePictureSkeletonVue,
  },
};
</script>

<style></style>
