import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/Home.vue";
import Faq from "@/view/Faq.vue";
import Price from "@/view/Price.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home-view",
      component: Home,
    },
    {
      path: "/faq",
      name: "Faq-view",
      component: Faq,
    },
    {
      path: "/price",
      name: "price-view",
      component: Price,
    },
  ],
});
