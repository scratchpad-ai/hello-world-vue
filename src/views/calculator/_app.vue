<script>
import _ from "lodash";
import calculate from "@/util/calculator.js";
import CalculatorDisplay from "./_display.vue";
import CalculatorButton from "./_button.vue";

export default {
  name: "CalculatorApp",

  props: {
    buttons: Array,
  },

  data() {
    return {
      inputs: [],
    };
  },

  components: {
    CalculatorDisplay,
    CalculatorButton,
  },

  computed: {
    display() {
      if (_.isEmpty(this.inputs)) {
        return "0";
      }
      return calculate(this.inputs);
    },
  },

  methods: {
    onButtonClick(input) {
      if (input === "clear") {
        this.inputs = [];
      } else {
        this.inputs.push(input);
      }
    },
  },
};
</script>

<template>
  <div class="calculator-app">
    <CalculatorDisplay>{{ display }}</CalculatorDisplay>
    <CalculatorButton
      v-for="button in buttons"
      :key="button.value"
      v-bind="button"
      @click="onButtonClick"
    />
  </div>
</template>

<style scoped>
.calculator-app {
  border-radius: 1rem;
  border: 2px solid #222;
  background-color: #222;
  display: grid;
  width: 24rem;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  overflow: hidden;
}
</style>
