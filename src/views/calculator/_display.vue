<script>
export default {
  name: "CalculatorDisplay",
};
</script>

<template>
  <div class="display">
    <slot />
  </div>
</template>

<style scoped>
.display {
  grid-column: span 4;
  padding: 0.4rem 2rem;
  font-size: 3rem;
  text-align: right;
  color: white;
  overflow-x: auto;
}
</style>
