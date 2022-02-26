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
    component: () => import("../views/hero.vue")
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/history.vue")
  },
  {
    path: "/landmark",
    name: "Landmark",
    component: () => import("../views/landmark.vue")
  },{
    path: "/message",
    name: "Message",
    component: () => import("../views/history.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/partyHistory/",
  routes
});

export default router;
