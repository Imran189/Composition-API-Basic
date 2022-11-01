<script setup>
import { ref } from "vue";
import NoteView from "../components/Notes/NoteView.vue";
import NoteFormView from "../components/Notes/NoteFormView.vue";
import { useNoteStore } from "../stores/counter.js";
const useNotes = useNoteStore();
const newNote = ref("");
const newNoteRef = ref(null);

const addNote = () => {
  useNotes.addNoteState(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};
const deleteItem = (id) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== id;
  });
};
</script>

<template>
  <div class="notes py-3">
    <NoteFormView>
      <template #buttons>
        <button class="button is-link has-background-success">
          Add New Note
        </button>
      </template>
    </NoteFormView>
    <NoteView
      v-for="item in useNotes.notes"
      :key="item.id"
      :note="item"
      @deleteItem="deleteItem"
    ></NoteView>
  </div>
</template>
