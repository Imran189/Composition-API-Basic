<script setup></script>

<template>
  <div class="notes py-3">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add s new Note" />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <div class="card mb-3" v-for="i in 3" :key="i">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
          veritatis odio eius sed atque, esse ullam in distinctio assumenda
          beatae dolore rerum sequi saepe repellat perspiciatis quos optio
          eveniet facere.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
