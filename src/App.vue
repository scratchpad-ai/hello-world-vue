<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/phone-validator">Phone Validator</RouterLink>
      <RouterLink to="/calculator">Calculator</RouterLink>
      <RouterLink to="/config">Config</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  text-align: center;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

nav :deep(a) {
  color: var(--color-text);
}

nav :deep(a.router-link-active) {
  font-weight: bold;
}

nav :deep(a:not(:last-child)) {
  margin-right: 1em;
}
</style>
