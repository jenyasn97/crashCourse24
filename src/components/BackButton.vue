<template>
  <section>
    <div class="container m-auto px-6 py-6">
      <router-link
        to="/jobs"
        class="flex items-center text-green-500 hover:text-green-600"
      >
        <ArrowLeftCircleIcon class="mr-1 size-6"></ArrowLeftCircleIcon>
        Back to Job Listings
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ArrowLeftCircleIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped></style>
