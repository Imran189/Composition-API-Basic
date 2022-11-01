<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useNoteStore } from "@/stores/counter.js";
const useNotes = useNoteStore();
const router = useRouter();
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

const editPage = (id) => {
  router.push("/edit/" + id);
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
      <a @click="editPage(note.id)" class="card-footer-item">Edit</a>
      <a
        @click.prevent="useNotes.deleteNoteState(note.id)"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<style></style>
