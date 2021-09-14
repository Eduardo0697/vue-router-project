import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    // You only need to change the attribute path to change the name in all the routes
    path: "/places-to-visit/:id/:slug",
    name: "destination.show",
    component: () =>
      import(
        /* webpackChunkName: "destination" */ "../views/DestinationShow.vue"
      ),
    // props: true,
    props: (route) => ({ ...route.params, id: parseInt(route.params.id), propTest: 'Test' }),
  },
  {
    path: "/destination/:id/:slug/:experienceSlug",
    name: "experience.show",
    component: () => import("../views/ExperienceShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // The linkActiveClass allows you to add a class to the active route
  linkActiveClass: "vue-school-active-link",
});

export default router;
