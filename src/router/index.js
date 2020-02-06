import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index.vue";
import Prize from "@/views/prize.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/prize",
      name: "prize",
      component: Prize
    }
  ]
});

export default router;
