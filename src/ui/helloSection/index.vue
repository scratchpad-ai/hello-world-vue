<script>
export default {
  name: "HelloSection",

  props: {
    heading: String,
  },
};
</script>

<template>
  <section>
    <h2>
      <slot name="heading">
        {{ heading }}
      </slot>
    </h2>
    <slot />
  </section>
</template>

<style scoped>
section {
  border-top: 1px solid var(--color-border);
  padding: 1rem 0;
  margin: 0 auto;
  text-align: center;
}

h2 {
  text-align: center;
  margin: 0 0 1rem;
}
</style>
