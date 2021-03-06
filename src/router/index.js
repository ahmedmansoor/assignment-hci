import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Resorts from "../views/Resorts.vue";
import Guesthouses from "../views/Guesthouses.vue";
import ResortDetails from "../views/ResortDetails.vue";
import CheckOut from "../views/CheckOut.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";

import SignUp from "../views/auth/SignUp.vue";
import SignIn from "../views/auth/SignIn.vue";
import TabBar from "../components/tabbar.vue";

const routes = [
  {
    path: "/TabBar",
    name: "tabbar",
    component: TabBar,
  },
  {
    path: "/SignIn",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/Contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Resorts",
    name: "resorts",
    component: Resorts,
  },
  {
    path: "/Guesthouses",
    name: "guesthouses",
    component: Guesthouses,
  },
  {
    path: "/ResortDetails",
    name: "resortdetails",
    component: ResortDetails,
  },
  {
    path: "/CheckOut",
    name: "checkout",
    component: CheckOut,
  },
  {
    path: "/About",
    name: "about",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // uncomment from here
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
});

export default router;
