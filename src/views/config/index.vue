<script>
import { mapWritableState } from "pinia";
import HelloPage from "@/ui/helloPage/index.vue";
import HelloSection from "@/ui/helloSection/index.vue";
import HelloInput from "@/ui/helloInput/index.vue";
import HelloDropdown from "@/ui/helloDropdown/index.vue";
import { useCalculatorStore } from "@/stores/calculator.js";
import { usePhoneNumberValidatorStore } from "@/stores/phoneNumberValidator.js";
import { EXTENSION_OPTIONS } from "@/const/phoneNumberValidator.js";

export default {
  name: "ConfigView",

  EXTENSION_OPTIONS,

  data() {
    return {
      buttonsJSON: undefined,
      buttonsError: undefined,
    };
  },

  components: {
    HelloPage,
    HelloSection,
    HelloInput,
    HelloDropdown,
  },

  mounted() {
    this.buttonsJSON = JSON.stringify(this.buttons, null, 2);
  },

  computed: {
    ...mapWritableState(useCalculatorStore, ["buttons"]),
    ...mapWritableState(usePhoneNumberValidatorStore, ["extension"]),
  },

  watch: {
    buttonsJSON() {
      try {
        this.buttons = JSON.parse(this.buttonsJSON);
        this.buttonsError = undefined;
      } catch (e) {
        this.buttonsError = e;
      }
    },
  },
};
</script>

<template>
  <HelloPage heading="Config">
    <HelloSection heading="Phone Validator">
      <HelloInput name="extension" label="Extension">
        <HelloDropdown
          :options="$options.EXTENSION_OPTIONS"
          v-model="extension"
        />
      </HelloInput>
    </HelloSection>
    <HelloSection heading="Calculator">
      <HelloInput
        class="buttons-config"
        name="buttonsJSON"
        label="Buttons"
        type="textarea"
        :error="buttonsError"
        v-model="buttonsJSON"
      />
      <div v-if="buttonsError" class="buttons-error">{{ buttonsError }}</div>
    </HelloSection>
  </HelloPage>
</template>

<style scoped>
.buttons-config :deep(textarea) {
  width: 15rem;
  height: 20rem;
}

.buttons-error {
  color: red;
}
</style>
