<template>
  <div class="home">
    <div class="lol">
      <button @click="decrement()" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increment()" class="btn">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};
</script>
<style scoped>
.lol {
  text-align: center;
  padding: 20px;
}

.btn {
  font-size: 20px;
  margin: 10px;
  padding: 5px;
}
.counter {
  font-size: 20px;
}
</style>
