<script>
export default {
  props: {
    disabled: Boolean,
    value: [String, Number],
  },

  emits: ["click"],

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.$emit("click", this.value);
    },
  },
};
</script>

<template>
  <a
    class="dropdown-item"
    :class="{ disabled }"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<style scoped>
.dropdown-item {
  padding: 0 0.5rem;
  text-align: left;
  cursor: pointer;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--color-text);
  background: var(--color-background-mute);
}
.dropdown-item:not(:last-child) {
  border-bottom: var(--color-border);
}
.dropdown-item:hover:not(.disabled) {
  background: var(--color-background-soft);
}
</style>
