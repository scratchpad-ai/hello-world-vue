import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/phone-validator",
      name: "phoneValidator",
      component: () => import("../views/phoneValidator/index.vue"),
    },
    {
      path: "/calculator",
      name: "calculator",
      component: () => import("../views/calculator/index.vue"),
    },
    {
      path: "/config",
      name: "config",
      component: () => import("../views/config/index.vue"),
    },
  ],
});

export default router;
