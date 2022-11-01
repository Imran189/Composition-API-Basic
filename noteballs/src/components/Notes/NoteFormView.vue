<script setup>
import { ref } from "vue";
const textareaRef = ref(null);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeHolder: {
    type: String,
    default: "Add a New Note",
  },
  label: {
    type: String,
    default: "Add Form",
  },
});
const emit = defineEmits(["update:modelValue"]);

const focusTextarea = () => {
  textareaRef.value.focus();
};
defineExpose({
  focusTextarea,
});
</script>

<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          :placeholder="`${placeHolder}`"
          ref="textareaRef"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<style></style>
