<template>
  <div class="home">
    <div class="lol">
      <p>{{ counterTitle }}</p>
      <button @click="decrement()" class="btn">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button @click="increment()" class="btn">+</button>
      <p>This data is {{ oddOrEven }}</p>
      <p>Counter Title</p>
      <input v-model="counterTitle" vAutofocus />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const counterTitle = ref("Here is your Counter Title");
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

watch(
  () => counterData.counter,
  (newCount) => {
    if (newCount === 5) {
      alert("Way to go");
    }
  }
);
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
