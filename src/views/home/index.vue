<script>
import HelloPage from "@/ui/helloPage/index.vue";

export default {
  name: "HomeView",

  components: {
    HelloPage,
  },
};
</script>

<template>
  <HelloPage>
    <template #heading>
      Hello Apps
      <img class="logo" src="@/assets/logo.svg" />
    </template>
    A playground for interview apps
  </HelloPage>
</template>

<style scoped>
.logo {
  height: 1.5rem;
}
</style>
