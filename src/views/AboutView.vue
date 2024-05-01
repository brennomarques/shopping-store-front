<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  console.log(import.meta.env.VITE_BASE_URL)
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
