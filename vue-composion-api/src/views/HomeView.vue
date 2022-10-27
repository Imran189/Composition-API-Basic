<template>
  <div class="home">
    <div class="lol">
      <button @click="decrement()" class="btn">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button @click="increment()" class="btn">+</button>
      <p>This data is {{ oddOrEven }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const counterData = reactive({
  counter: 0,
});

const increment = () => {
  counterData.counter++;
};
const decrement = () => {
  counterData.counter--;
};

const oddOrEven = computed(() => {
  if (counterData.counter % 2 === 0) return "even";
  return "odd";
});
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
