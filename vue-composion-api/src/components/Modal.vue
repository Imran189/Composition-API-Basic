<template>
  <div class="modal">
    <h2>{{ title }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi
      omnis? Quibusdam quasi earum perferendis in, eveniet perspiciatis, placeat
      natus recusandae quos consequuntur atque odio harum! Rem debitis
      consequuntur explicabo?
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "NO Title specified",
  },
});
</script>
