<script>
export default {
  name: "HelloPage",

  props: {
    heading: String,
  },
};
</script>

<template>
  <main>
    <h1>
      <slot name="heading">
        {{ heading }}
      </slot>
    </h1>
    <slot />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  margin: 0 auto;
  text-align: center;
}

h1 {
  text-align: center;
  margin: 0 0 1rem;
}
</style>
