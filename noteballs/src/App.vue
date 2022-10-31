<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/layout/navbarView.vue";
</script>

<template>
  <div>
    <Navbar />
    <div class="container is-max-desktop px-2 py-4">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "bulma/css/bulma.min.css";
</style>
