<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl m-auto lg:container">
      <h2 class="mb-6 text-center text-3xl font-bold text-green-500">
        Brows Jobs
      </h2>
      <div v-if="isLoading" class="text-center text-gray-500">
        <PulseLoader />
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto my-10 max-w-lg px-6">
    <router-link
      to="/jobs"
      class="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
      >View All Jobs
    </router-link>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, defineProps, onMounted } from "vue";
import JobListing from "@components/JobListing.vue";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps({
  limit: {
    type: Number,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});
const jobs = ref([]);
const isLoading = ref(false);

async function getJobsData() {
  try {
    isLoading.value = true;
    const response = await axios.get("/api/jobs");
    jobs.value = response.data;
  } catch (err) {
    console.error(`Error fetching jobs`, err);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  getJobsData();
});
</script>

<style scoped></style>
