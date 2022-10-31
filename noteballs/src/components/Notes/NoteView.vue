<script setup>
import { computed } from "vue";

const emit = defineEmits(["deleteItem"]);
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

const deleteHandler = () => {
  emit("deleteItem", props.note.id);
};
</script>

<template>
  <div class="card mb-3">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-gray-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="deleteHandler()" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<style></style>
