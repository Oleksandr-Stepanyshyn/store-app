import BaseFoo from "./views/BaseFoo.vue";
import BaseBar from "./views/BaseBar.vue";
import HomePage from "@/views/HomePage.vue";
import ApartmentPage from "@/views/ApartmentPage.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/apartment/:id",
    name: "apartment",
    component: ApartmentPage,
  },
  {
    path: "/foo",
    name: "foo",
    component: BaseFoo,
  },
  {
    path: "/bar",
    name: "bar",
    component: BaseBar,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error-page",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
