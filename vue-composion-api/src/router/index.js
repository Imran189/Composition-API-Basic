import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ModalView from "../views/ModalView.vue";
import PiniaView from "../components/piniaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/modalview",
      name: "ModalView",
      component: ModalView,
    },
    {
      path: "/pinia/state",
      name: "PiniaView",
      component: PiniaView,
    },
  ],
});

export default router;
