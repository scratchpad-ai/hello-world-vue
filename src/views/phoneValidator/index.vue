<script>
import { mapState } from "pinia";
import HelloPage from "@/ui/helloPage/index.vue";
import HelloInput from "@/ui/helloInput/index.vue";
import { usePhoneNumberValidatorStore } from "@/stores/phoneNumberValidator.js";
import PhoneNumberValidator from "@/util/phoneNumberValidator.js";

export default {
  name: "PhoneValidatorView",

  data() {
    return {
      input: "",
      isValid: false,
    };
  },

  components: {
    HelloPage,
    HelloInput,
  },

  computed: {
    ...mapState(usePhoneNumberValidatorStore, ["formats", "extension"]),

    feedbackClass() {
      return this.isValid ? "valid" : "invalid";
    },

    feedbackText() {
      return this.isValid ? "VALID" : "INVALID";
    },
  },

  methods: {
    validate() {
      this.isValid = PhoneNumberValidator(
        this.input,
        this.formats,
        this.extension
      );
    },
  },
};
</script>

<template>
  <HelloPage heading="Phone Validator">
    <HelloInput
      name="input"
      label="Phone #"
      v-model="input"
      @input="validate()"
    />
    <div :class="`feedback ${feedbackClass}`">
      {{ feedbackText }}
    </div>
  </HelloPage>
</template>

<style scoped>
.feedback {
  margin-top: 0.5rem;
  text-align: center;
}

.valid {
  color: green;
  text-shadow: 0 0 0.5rem green;
}

.invalid {
  color: red;
  text-shadow: 0 0 0.5rem red;
}
</style>
