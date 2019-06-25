import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Book from "./views/Book.vue";
import Recommend from "./views/Recommend.vue";
import Contact from "./views/Contact.vue";

// HISTORY ARTICLES ROUTES
// KENT MILITIA
import KentMilitia from "./views/HistoryArticles/KentMilitia/KentMilitia.vue";
import Maryland from "./views/HistoryArticles/KentMilitia/Maryland.vue";
// CZECHOSLVAK LEGION
import CzechoslovakLegion from "./views/HistoryArticles/CzechoSlovakLegion/CzechoslovakLegion.vue";
// IRISH HISTORY
import IrishHistory from "./views/HistoryArticles/IrishHistory/IrishHistory.vue";
import ONeilRebelion from "./views/HistoryArticles/IrishHistory/ONeilRebelion.vue";
import ThreeKingdoms from "./views/HistoryArticles/IrishHistory/ThreeKingdoms.vue";
import Ireland from "./views/HistoryArticles/IrishHistory/Ireland.vue";
import WilliamiteWar from "./views/HistoryArticles/IrishHistory/WilliamiteWar.vue";
import IrishMilEstabl from "./views/HistoryArticles/IrishHistory/IrishMilEstabl.vue";
// DUTCH HISTORY
import DutchHistory from "./views/HistoryArticles/DutchHistory/DutchHistory.vue";
import EightyYearsWar from "./views/HistoryArticles/DutchHistory/EightyYearsWar.vue";
import NewNetherlans from "./views/HistoryArticles/DutchHistory/NewNetherlans.vue";
// SCOTTISH HISTORY
import ScottishHistory from "./views/HistoryArticles/ScottishHistory/ScottishHistory.vue";
import MacKay from "./views/HistoryArticles/ScottishHistory/MacKay.vue";
import Dumbarton from "./views/HistoryArticles/ScottishHistory/Dumbarton.vue";
import Stuart from "./views/HistoryArticles/ScottishHistory/Stuart.vue";
// COLONIAL HISTORY
import ColonialHistory from "./views/HistoryArticles/ColonialHistory/ColonialHistory.vue";
// THE HUSSITES
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
      path: "/kent-militia/maryland",
      name: "kent-militia-maryland",
      component: Maryland
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
      path: "/irish-history/oneils-rebelion",
      name: "oneils-rebelion",
      component: ONeilRebelion
    },
    {
      path: "/irish-history/three-kingdoms",
      name: "three-kingdoms",
      component: ThreeKingdoms
    },
    {
      path: "/irish-history/ireland-1652-1688",
      name: "ireland-1652-1688",
      component: Ireland
    },
    {
      path: "/irish-history/williamite-war",
      name: "williamite-war",
      component: WilliamiteWar
    },
    {
      path: "/irish-history/irish-military",
      name: "irish-military",
      component: IrishMilEstabl
    },
    {
      path: "/dutch-history",
      name: "dutch-history",
      component: DutchHistory
    },
    {
      path: "/dutch-history/eighty-years-war",
      name: "eighty-years-war",
      component: EightyYearsWar
    },
    {
      path: "/dutch-history/new-netherlands",
      name: "new-netherlands",
      component: NewNetherlans
    },
    {
      path: "/scottish-history",
      name: "scottish-history",
      component: ScottishHistory
    },
    {
      path: "/scottish-history/mackeys-regiment",
      name: "mackeys-regiment",
      component: MacKay
    },
    {
      path: "/scottish-history/dumbartons-regiment",
      name: "dumbartons-regiment",
      component: Dumbarton
    },
    {
      path: "/scottish-history/house-stuart",
      name: "house-stuart",
      component: Stuart
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
