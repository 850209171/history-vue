import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // redirect: "/hero"
  },
  {
    path: "/hero",
    name: "Hero",
    component: () => import("../views/hero.vue"),
    meta: { requireAuth: true }
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/history.vue"),
    meta: { requireAuth: true }
  },
  {
    path: "/landmark",
    name: "Landmark",
    component: () => import("../views/landmark.vue"),
    meta: { requireAuth: true }
  },{
    path: "/message",
    name: "Message",
    component: () => import("../views/history.vue"),
    meta: { requireAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/partyHistory/",
  routes
});

export default router;
