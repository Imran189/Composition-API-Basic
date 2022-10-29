<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import modalDarkVue from "../components/modalDark.vue";
import { useOnline, useNow } from "@vueuse/core";

const now = useNow();

const online = useOnline();
const showModal = ref(false);
const hideModal = ref(true);
const showDarkModal = ref(false);

const openModal = () => {
  showModal.value = !showModal.value;
};
const closeModal = () => {
  showModal.value = !hideModal.value;
};
</script>

<template>
  <div class="modalsView">
    <p v-if="online">Status: Online</p>
    <p v-else-if="!online">Status: Offline</p>
    <p class="time">Now: {{ now }}</p>
    <p>Modal Page</p>
    <div class="dm">
      <h3>Dark Modal</h3>
      <input v-model="showDarkModal" type="checkbox" />
    </div>
    <br />
    <button @click="openModal()" v-if="showModal === false">ShowModal</button>
    <component
      :is="showDarkModal ? modalDarkVue : Modal"
      v-if="showModal"
      title="This Modal With Props"
      showModal
      @hideModal="closeModal()"
    ></component>
  </div>
</template>

<style>
.modalsView {
  text-align: center;
}

.dm {
  display: inline-flex;
}
.time {
  font-size: 15px;
  display: block;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
