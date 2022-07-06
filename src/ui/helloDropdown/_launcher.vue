<script>
export default {
  methods: {
    focus() {
      this.$el.focus();
    },
  },
};
</script>

<template>
  <button class="dropdown-launcher-button" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
.dropdown-launcher-button {
  cursor: pointer;
  background-color: var(--color-background-mute);
  border: 2px solid var(--color-border);
  padding: 0.2rem 0.4rem;
  color: var(--color-text);
}
</style>
