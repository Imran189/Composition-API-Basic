import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StatsView from "../views/StatsView.vue";
import EditView from "../views/EditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/stats",
      name: "StatsView",
      component: StatsView,
    },
    {
      path: "/edit/:id",
      name: "EditView",
      component: EditView,
      props: true,
    },
  ],
});

export default router;
