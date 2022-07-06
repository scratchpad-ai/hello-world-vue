<script>
import { mapState } from "pinia";
import HelloPage from "@/ui/helloPage/index.vue";
import CalculatorApp from "./_app.vue";
import { useCalculatorStore } from "@/stores/calculator.js";

export default {
  name: "CalculatorView",

  components: {
    HelloPage,
    CalculatorApp,
  },

  computed: {
    ...mapState(useCalculatorStore, ["buttons"]),
  },
};
</script>

<template>
  <HelloPage heading="Calculator">
    <CalculatorApp :buttons="buttons" />
  </HelloPage>
</template>

<style scoped></style>
