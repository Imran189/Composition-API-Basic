<script setup>
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card mb-3">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<style></style>
