import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@views/HomeView.vue"),
  },

  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: () => import("@views/NotFoundView.vue"),
  },
  {
    path: "/jobs/:id",
    name: "job",
    component: () => import("@views/JobView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("@views/JobsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
