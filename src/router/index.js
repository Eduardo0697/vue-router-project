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
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () =>
      import(
        /* webpackChunkName: "destination" */ "../views/DestinationShow.vue"
      ),
    // props: true,
    props: (route) => ({ ...route.params, id: parseInt(route.params.id), propTest: 'Test' }),
    children: [ // Defining children we make the route a child of the DestinationShow page,
      {
        // path: "/destination/:id/:slug/:experienceSlug", // It's already scoped to it's parent path, so we don't need all the route
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("../views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // The linkActiveClass allows you to add a class to the active route
  linkActiveClass: "vue-school-active-link",
});

export default router;
