<script setup>
import { ref } from "vue";

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
    <p>Modal View</p>
    <button @click="openModal()">ShowModal</button>
    <div class="modal" v-if="showModal">
      <h2>This is modal</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi
        omnis? Quibusdam quasi earum perferendis in, eveniet perspiciatis,
        placeat natus recusandae quos consequuntur atque odio harum! Rem debitis
        consequuntur explicabo?
      </p>
      <button @click="closeModal()">closeModal</button>
    </div>
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
