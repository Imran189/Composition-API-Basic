<template>
  <div>
    <nav
      class="navbar is-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container is-max-desktop">
        <div class="navbar-brand">
          <a class="navbar-item is-size-4 is-family-monospace"> Noteballs</a>
          <a
            @click.prevent="showNavbar()"
            role="button"
            class="navbar-burger"
            :class="{ 'is-active': showNav }"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          class="navbar-menu"
          :class="{ 'is-active': showNav }"
        >
          <div class="navbar-end">
            <router-link to="/" class="navbar-item is-active">
              Home
            </router-link>
            <router-link to="/about" class="navbar-item"> Stats </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showNav = ref(false);

const showNavbar = () => {
  showNav.value = !showNav.value;
};
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
