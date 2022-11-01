<script setup>
import { ref } from "vue";
import NoteFormView from "@/components/Notes/NoteFormView.vue";

const editNoteModel = ref("");
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
          class="button is-link has-background-link-dark"
        >
          Cancel
        </button>
        <button
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
