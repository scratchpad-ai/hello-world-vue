<script>
export default {
  name: "CalculatorButton",

  props: {
    label: String,
    value: String,
    cols: { type: Number, default: 1 },
    variation: { type: String, default: "number" },
  },
};
</script>

<template>
  <button
    class="button"
    :class="variation"
    :style="{ gridColumn: `span ${cols}` }"
    @click="$emit('click', value)"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  display: block;
  width: 100%;
  font-size: 2rem;
  border: 1px solid #222;
  padding: 1rem 0.2rem;
  color: white;
}
.button.number {
  background-color: #444;
}
.button.number:hover {
  background-color: #3c3c3c;
}
.button.operator {
  background-color: #ffa500;
}
.button.operator:hover {
  background-color: #f79d00;
}
.button.clear {
  background-color: #2a2b2c;
}
.button.clear:hover {
  background-color: #222324;
}
</style>
