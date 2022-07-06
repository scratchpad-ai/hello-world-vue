import _ from "lodash";
import { defineStore } from "pinia";
import { CALCULATOR_STANDARD_CONFIG } from "@/const/calculator.js";

export const useCalculatorStore = defineStore({
  id: "calculator",

  state: () => ({
    buttons: _.clone(CALCULATOR_STANDARD_CONFIG),
  }),
});
