<template>
  <BackButton />
  <section v-if="!isLoading" class="bg-green-50">
    <div class="container m-auto px-6 py-10">
      <div class="md:grid-cols-70/30 grid w-full grid-cols-1 gap-6">
        <main>
          <div
            class="rounded-lg bg-white p-6 text-center shadow-md md:text-left"
          >
            <div class="mb-4 text-gray-500">{{ job.type }}</div>
            <h1 class="mb-4 text-3xl font-bold">{{ job.title }}</h1>
            <div
              class="mb-4 flex justify-center align-middle text-gray-500 md:justify-start"
            >
              <div class="mb-3 flex items-center gap-1 text-orange-700">
                <MapPinIcon class="size-4 text-orange-700" />
                {{ job.location }}
              </div>
            </div>
          </div>

          <div class="mt-6 rounded-lg bg-white p-6 shadow-md">
            <h3 class="mb-6 text-lg font-bold text-green-800">
              Job Description
            </h3>

            <p class="mb-4">
              {{ job.description }}
            </p>

            <h3 class="mb-2 text-lg font-bold text-green-800">Salary</h3>

            <p class="mb-4">{{ job.salary }} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h3 class="mb-6 text-xl font-bold">Company Info</h3>

            <h2 class="text-2xl">{{ job.company?.name }}</h2>

            <p class="my-2">
              {{ job.company?.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 overflow-hidden bg-green-100 p-2 font-bold">
              {{ job.company?.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ job.company?.contactPhone }}
            </p>
          </div>

          <!-- Manage -->
          <div class="mt-6 rounded-lg bg-white p-6 shadow-md">
            <h3 class="mb-6 text-xl font-bold">Manage Job</h3>
            <router-link
              :to="`./jobs/edit/${job.id}`"
              class="focus:shadow-outline mt-4 block w-full rounded-full bg-green-500 px-4 py-2 text-center font-bold text-white hover:bg-green-600 focus:outline-none"
              >Edit Job
            </router-link>
            <button
              class="focus:shadow-outline mt-4 block w-full rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
  <div v-else class="mt-6 text-center text-gray-500">
    <PulseLoader />
  </div>
</template>

<script setup>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { MapPinIcon } from "@heroicons/vue/24/solid/index.js";
import BackButton from "@components/BackButton.vue";

const route = useRoute();
const jobId = route.params.id;
const job = ref([]);
const isLoading = ref(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await axios.get(`http://localhost:5000/jobs/${jobId}`);
    job.value = response.data;
  } catch (err) {
    console.error(`Error fetching job`, err);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped></style>
