<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import modalDarkVue from "../components/modalDark.vue";

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
</style>
