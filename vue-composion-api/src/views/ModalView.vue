<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";

const showModal = ref(false);
const hideModal = ref(true);
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
    <button @click="openModal()" v-if="showModal === false">ShowModal</button>
    <Modal
      v-if="showModal"
      title="This Modal With Props"
      showModal
      @hideModal="closeModal()"
    ></Modal>
  </div>
</template>

<style scoped>
.modalsView {
  text-align: center;
}

.modal {
  background-color: beige;
  padding: 10px;
}
</style>
