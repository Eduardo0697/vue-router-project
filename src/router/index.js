import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Panama.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Jamaica.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Hawaii.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
