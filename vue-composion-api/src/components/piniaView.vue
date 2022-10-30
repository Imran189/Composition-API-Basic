<script setup>
import { useCounterStore } from "../stores/counter.js";

const counter = useCounterStore();
</script>

<template>
  <div class="home">
    <div class="lol">
      <p>Counter Title:</p>
      <button class="btn" @click="counter.increment()">+</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.decrement()">-</button>
      <button class="btn" @click="counter.doubleCount">++</button>
    </div>
  </div>
</template>

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
