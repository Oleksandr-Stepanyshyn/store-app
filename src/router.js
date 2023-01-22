import BaseFoo from "./views/BaseFoo.vue";
import BaseBar from "./views/BaseBar.vue";
import HomePage from "@/views/HomePage.vue";
import ApartmentPage from "@/views/ApartmentPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/apartment",
    name: "Apartment",
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
