<script setup>
import { ref } from "vue";
import NoteFormView from "@/components/Notes/NoteFormView.vue";
import { useNoteStore } from "../stores/counter";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const storeNotes = useNoteStore();

const editNoteModel = ref("");
editNoteModel.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, editNoteModel.value);
  router.push("/");
};
</script>

<template>
  <div>
    <NoteFormView
      v-model="editNoteModel"
      bgColor="link"
      placeHolder="Edit This Note"
      label="Edit Form"
    >
      <template #buttons>
        <button
          @click="$router.push('/')"
          class="button is-link has-background-link-dark mr-2"
        >
          Cancel
        </button>
        <button
          @click="handleSaveClicked()"
          v-show="editNoteModel"
          class="button is-link has-background-link"
        >
          Update Note
        </button>
      </template>
    </NoteFormView>
    <h3>Edit Note id: {{ $route.params.id }}</h3>
  </div>
</template>

<style></style>
