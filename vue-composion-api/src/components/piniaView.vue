<script setup>
import { useCounterStore } from "../stores/counter.js";

const counter = useCounterStore();
</script>

<template>
  <div class="home">
    <div class="lol">
      <p>Counter Title:{{ counter.title }}</p>
      <button class="btn" @click="counter.increment()">+</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.decrement()">-</button>
      <button class="btn" @click="counter.doubleCounter(2)">++</button><br />
      <p>This number is {{ counter.evenOrOdd }}</p>
      <p>This double number {{ counter.doubleCount }}</p>
      <input type="text" v-model="counter.title" />
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
