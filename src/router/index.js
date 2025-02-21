import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/app/views/LandingView.vue";
import MainView from "@/app/views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
    },
  ],
});

export default router;
