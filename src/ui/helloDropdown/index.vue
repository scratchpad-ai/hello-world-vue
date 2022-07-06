<script>
import _ from "lodash";
import Popper from "vue3-popper";
import HelloDropdownLauncher from "./_launcher.vue";
import HelloDropdownList from "./_list.vue";
import HelloDropdownListItem from "./_listItem.vue";

export default {
  components: {
    Popper,
    HelloDropdownLauncher,
    HelloDropdownList,
    HelloDropdownListItem,
  },

  props: {
    placeholder: { type: String, default: "Select..." },
    modelValue: String,
    options: Array,
    disabled: Boolean,
    scrollable: Boolean,
  },

  computed: {
    modelLabel() {
      const option = _.find(this.options, { value: this.modelValue });
      if (option) {
        return option.label;
      }
      return this.placeholder;
    },
  },

  methods: {
    onSelect(value, close) {
      if (!this.disabled) {
        this.$emit("update:modelValue", value);
      }
      close();
    },
  },
};
</script>

<template>
  <Popper>
    <HelloDropdownLauncher>
      {{ modelLabel }}
    </HelloDropdownLauncher>

    <template #content="{ close }">
      <HelloDropdownList scrollable="scrollable">
        <HelloDropdownListItem
          v-for="option in options"
          :key="option"
          :value="option.value"
          :disabled="disabled"
          @click="onSelect($event, close)"
        >
          {{ option.label }}
        </HelloDropdownListItem>
      </HelloDropdownList>
    </template>
  </Popper>
</template>
