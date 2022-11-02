<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const homePage = () => {
  router.push("/");
  showNav.value = !showNav.value;
};

const statPage = () => {
  router.push("/stats");
  showNavbar();
};

const showNav = ref(false);

const showNavbar = () => {
  showNav.value = !showNav.value;
};
</script>
<template>
  <div>
    <nav
      class="navbar is-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container is-max-desktop px-2">
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
            <a @click="homePage()" class="navbar-item is-active"> Home </a>
            <router-link
              to="/stats"
              @click="showNav = false"
              class="navbar-item"
            >
              Stats
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
