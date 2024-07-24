<template>
  <div class="m-auto max-w-screen-sm p-4">
    <h1 class="text-2xl font-bold">{{ name }}</h1>
    <p v-if="status === 'active'">
      User is
      <span class="rounded-xl bg-green-500 px-2 text-white">active</span>
    </p>
    <p v-else-if="status === 'pending'">
      User is
      <span class="rounded-xl bg-yellow-500 px-2 text-white">pending</span>
    </p>
    <p v-else>
      User is
      <span class="rounded-xl bg-red-500 px-2 text-white">inactive</span>
    </p>

    <form class="my-2 p-2" @submit.prevent="addTask">
      <div class="flex items-center gap-2">
        <label for="newTask">Add Task</label>
        <input
          class="rounded-xl border px-3 py-1"
          type="text"
          id="newTask"
          name="newTask"
          v-model="newTask"
        />
        <button
          type="submit"
          class="rounded-xl bg-blue-500 px-3 py-1 text-white transition hover:bg-blue-800"
        >
          Add task
        </button>
      </div>
    </form>

    <h3>Tasks:</h3>
    <ul class="mb-2 flex list-disc flex-col gap-1">
      <li
        class="flex justify-between rounded-xl border p-2"
        v-for="(task, idx) in tasks"
        :key="task"
      >
        <span>{{ task }}</span>
        <TrashIcon
          class="size-6 cursor-pointer hover:text-red-500"
          @click="deleteTask(idx)"
        />
      </li>
    </ul>
    <button
      class="rounded-xl bg-blue-500 px-2 py-1 text-white transition hover:bg-blue-800"
      @click="changeStatus"
    >
      Change status
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { TrashIcon } from "@heroicons/vue/24/solid";

const name = ref("John Sultan");
const status = ref("active");
const tasks = ref([]);
const newTask = ref("");

function changeStatus() {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
}

function addTask() {
  if (newTask.value.trim() !== "" || newTask.value.length !== 0) {
    tasks.value.push(newTask.value);
  } else {
    alert("Введите задачу");
  }
  newTask.value = "";
}

function deleteTask(idx) {
  tasks.value.splice(idx, 1);
}

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (e) {
    console.log(e);
  }
});
</script>

<style scoped></style>
