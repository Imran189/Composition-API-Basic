<template>
  <div class="modal">
    <h2>{{ title }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi
      omnis? Quibusdam quasi earum perferendis in, eveniet perspiciatis, placeat
      natus recusandae quos consequuntur atque odio harum! Rem debitis
      consequuntur explicabo?
    </p>
    <p>User Name is: {{ userData.userName }}</p>
    <button @click="closeModal()" v-if="showModal == true">closeModal</button>
  </div>
</template>
<script setup>
import { inject } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "NO Title specified",
  },
  showModal: {
    type: Boolean,
    default: "",
  },
});

const emit = defineEmits(["hideModal"]);
const closeModal = () => {
  emit("hideModal");
};

const userData = inject("userData");
</script>

<style scoped>
.modal {
  background-color: beige;
  padding: 10px;
}
</style>
