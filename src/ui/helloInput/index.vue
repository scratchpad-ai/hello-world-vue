<script>
export default {
  name: "HelloInput",

  props: {
    name: String,
    label: String,
    type: { type: String, default: "text" },
    modelValue: String,
  },

  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<template>
  <div class="hello-input">
    <label :for="`#${name}`">
      {{ label }}
    </label>
    <slot>
      <textarea
        v-if="type === 'textarea'"
        :id="`#${name}`"
        :value="modelValue"
        @input="updateValue"
      />
      <input
        v-else
        :id="`#${name}`"
        :type="type"
        :value="modelValue"
        @input="updateValue"
      />
    </slot>
  </div>
</template>

<style scoped>
.hello-input {
  display: inline-flex;
  text-align: center;
}

.hello-input label {
  margin-right: 0.5em;
}
.hello-input label::after {
  content: ":";
}

.hello-input input,
.hello-input textarea {
  background-color: var(--color-background-mute);
  border: 2px solid var(--color-border);
  padding: 0.1rem 0.2rem;
  color: var(--color-text);
}
</style>
