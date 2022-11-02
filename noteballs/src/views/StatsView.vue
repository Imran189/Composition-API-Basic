<script setup>
import { useNoteStore } from "../stores/counter";

const totalNotes = useNoteStore();
</script>
<template>
  <div class="about is-font">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stats</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ totalNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of character of all notes</td>
          <td>{{ totalNotes.totalNotesCharacter }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
