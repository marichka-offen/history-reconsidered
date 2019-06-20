import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Book from "./views/Book.vue";
import Recommend from "./views/Recommend.vue";
import Contact from "./views/Contact.vue";

// HISTORY ARTICLES ROUTES
import KentMilitia from "./views/HistoryArticles/KentMilitia/KentMilitia.vue";
import CzechoslovakLegion from "./views/HistoryArticles/CzechoSlovakLegion/CzechoslovakLegion.vue";
import IrishHistory from "./views/HistoryArticles/IrishHistory/IrishHistory.vue";
import DutchHistory from "./views/HistoryArticles/DutchHistory/DutchHistory.vue";
import ScottishHistory from "./views/HistoryArticles/ScottishHistory/ScottishHistory.vue";
import ColonialHistory from "./views/HistoryArticles/ColonialHistory/ColonialHistory.vue";
import Hussites from "./views/HistoryArticles/Hussites/Hussites.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/book",
      name: "book",
      component: Book
    },
    {
      path: "/recommendations",
      name: "recommendations",
      component: Recommend
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/kent-militia",
      name: "kent-militia",
      component: KentMilitia
    },
    {
      path: "/czechoslovak-legion",
      name: "czechoslovak-legion",
      component: CzechoslovakLegion
    },
    {
      path: "/irish-history",
      name: "irish-history",
      component: IrishHistory
    },
    {
      path: "/dutch-history",
      name: "dutch-history",
      component: DutchHistory
    },
    {
      path: "/scottish-history",
      name: "scottish-history",
      component: ScottishHistory
    },
    {
      path: "/colonial-history",
      name: "colonial-history",
      component: ColonialHistory
    },
    {
      path: "/hussites",
      name: "hussites",
      component: Hussites
    }
  ]
});
