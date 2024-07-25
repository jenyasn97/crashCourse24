<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from "@components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
