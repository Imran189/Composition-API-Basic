<script setup>
import { ref } from "vue";

const newNote = ref("");
const newNoteRef = ref(null);
const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi veritatis odio eius sed atque, esse ullam in distinctio assumenda beatae dolore rerum sequi saepe repellat perspiciatis quos optioeveniet facere",
  },
  {
    id: "id2",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi veritatis odio eius sed atque, esse ullam in distinctio assumenda beatae dolore rerum sequi saepe repellat perspiciatis quos optioeveniet facere",
  },
  {
    id: "id3",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi veritatis odio eius sed atque, esse ullam in distinctio assumenda beatae dolore rerum sequi saepe repellat perspiciatis quos optioeveniet facere",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();
  let note = {
    id: id,
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
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

    <div class="card mb-3" v-for="item in notes" :key="item.id">
      <div class="card-content">
        <div class="content">
          {{ item.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
