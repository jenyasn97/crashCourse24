<template>
  <section class="py-4">
    <div class="container-xl m-auto lg:container">
      <div class="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
        <Card>
          <h2 class="text-2xl font-bold">For Developers</h2>
          <p class="mb-4 mt-2">
            Browse our Vue jobs and start your career today
          </p>
          <a
            href="jobs.html"
            class="inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-700"
          >
            Browse Jobs
          </a>
        </Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mb-4 mt-2">
            List your job to find the perfect developer for the role
          </p>
          <a
            href="add-job.html"
            class="inline-block rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Add Job
          </a>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from "@/components/Card.vue";
</script>

<style scoped></style>
