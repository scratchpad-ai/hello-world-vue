<script>
export default {
  props: {
    scrollable: Boolean,
  },
};
</script>

<template>
  <div class="dropdown-list" :class="{ scrollable: scrollable }">
    <slot />
  </div>
</template>

<style scoped>
.dropdown-list {
  min-width: 200px;
  display: block;
  padding: 4px 0;
  border: 1px solid var(--color-border);
}

.dropdown-list.scrollable {
  max-height: 250px;
  overflow-y: auto;
}
</style>
