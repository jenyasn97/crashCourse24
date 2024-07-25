<template>
  <nav class="border-b border-green-500 bg-green-700">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <router-link
            class="mr-4 flex flex-shrink-0 cursor-pointer items-center"
            to="/"
          >
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="ml-2 hidden text-2xl font-bold text-white md:block"
              >Vue Jobs</span
            >
          </router-link>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <router-link
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  `rounded-md`,
                  `px-3`,
                  `py-2`,
                  `text-white`,
                ]"
                >Home
              </router-link>
              <router-link
                to="/jobs"
                :class="[
                  isActiveLink('/jobs')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  `rounded-md`,
                  `px-3`,
                  `py-2`,
                  `text-white`,
                ]"
                >Jobs
              </router-link>
              <router-link
                to="/jobs/add"
                :class="[
                  isActiveLink('/jobs/add')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  `rounded-md`,
                  `px-3`,
                  `py-2`,
                  `text-white`,
                ]"
                >Add Job
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from "@assets/img/logo.png";
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<style scoped></style>
