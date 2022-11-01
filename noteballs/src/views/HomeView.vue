<script setup>
import { ref } from "vue";
import NoteView from "../components/Notes/NoteView.vue";
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
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add s new Note"
            ref="newNoteRef"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            v-show="newNote"
            @click="addNote()"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <NoteView
      v-for="item in useNotes.notes"
      :key="item.id"
      :note="item"
      @deleteItem="deleteItem"
    ></NoteView>
  </div>
</template>
