<template>
  <section class="flex h-96 flex-col items-center justify-center text-center">
    <ExclamationTriangleIcon class="size-24 text-yellow-400" />
    <h1 class="mb-4 text-6xl font-bold">404 Not Found</h1>
    <p class="mb-5 text-xl">This page does not exist</p>
    <router-link
      to="/"
      class="mt-4 rounded-md bg-green-700 px-3 py-2 text-white hover:bg-green-900"
      >Go Back
    </router-link>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped></style>
