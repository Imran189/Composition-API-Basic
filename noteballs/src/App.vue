<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/layout/navbarView.vue";
</script>

<template>
  <div>
    <Navbar />
  </div>

  <RouterView />
</template>

<style>
@import "bulma/css/bulma.min.css";
</style>
