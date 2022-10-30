import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(1);
  const title = ref("This title from pinia");

  const doubleCount = computed(() => count.value * 2);

  const evenOrOdd = computed(() => {
    if (count.value % 2 == 0) {
      return "even";
    } else return "odd";
  });

  function doubleCounter(pera) {
    count.value += pera;
  }
  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }
  return {
    count,
    title,
    evenOrOdd,
    doubleCount,
    increment,
    decrement,
    doubleCounter,
  };
});
