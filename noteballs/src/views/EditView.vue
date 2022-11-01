<script setup>
import NoteFormView from "@/components/Notes/NoteFormView.vue";
</script>

<template>
  <div>
    <NoteFormView />
    <h3>Edit Note id: {{ $route.params.id }}</h3>
  </div>
</template>

<style></style>
