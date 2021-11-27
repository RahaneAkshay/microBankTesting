import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "createAccount",
    component: () => import("../components/CreateAccount.vue"),
  },
  {
    path: "/UserDashboard",
    name: "UserDashboard",
    component: () => import("../components/UserDashboard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;