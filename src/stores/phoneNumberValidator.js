import _ from "lodash";
import { defineStore } from "pinia";
import {
  FORMAT_OPTIONS,
  EXTENSION_OPTIONS,
} from "@/const/phoneNumberValidator.js";

export const usePhoneNumberValidatorStore = defineStore({
  id: "phoneNumberValidator",

  state: () => ({
    validPhoneNumbers: _.clone(FORMAT_OPTIONS),
    extension: _.first(EXTENSION_OPTIONS).value,
  }),
});
