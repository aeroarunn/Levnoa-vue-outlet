import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "home",
      component: DashboardLayout,
      children: [
        {
          path: "/home",
          name: "Home",
          component: () =>
            import(/* webpackChunkName: "cosmoarunn" */ "./views/Home.vue")
        },
        {
          path: "chat",
          name: "Chat",
          component: () =>
            import(/* webpackChunkName: "cosmoarunn" */ "./views/Chat.vue")
        }
      ]
    }
  ]
});
