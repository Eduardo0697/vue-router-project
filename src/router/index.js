import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import sourceData from "../data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import("../views/Protected.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("../views/Invoices.vue"),
    meta: {
      requiresAuth: true,
    },
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
    props: (route) => ({
      ...route.params,
      id: parseInt(route.params.id),
      propTest: "Test",
    }),
    beforeEnter(to) {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists)
        return {
          name: "NotFound",
          // allows keeping the URL while rendering a differente page
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      // Defining children we make the route a child of the DestinationShow page,
      {
        // path: "/destination/:id/:slug/:experienceSlug", // It's already scoped to it's parent path, so we don't need all the route
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("../views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // The linkActiveClass allows you to add a class to the active route
  linkActiveClass: "vue-school-active-link",
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 300);
      })
    );
    // return{ top:null, left: null, behavior: null }
  },
});
// Global Navigation guard, every time a routes changes this function is fired
router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    // need to login if it's nos already logged in
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

export default router;
