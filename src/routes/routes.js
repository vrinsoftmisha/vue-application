import { createWebHistory, createRouter } from "vue-router";
import { LOGIN } from ".";
import Login from "../components/auth/login.vue";

const routes = [
  {
    path: "",
    redirect: LOGIN,
  },
  {
    name: "login",
    path: LOGIN,
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
