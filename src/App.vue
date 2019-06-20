<template>
  <div class="bg">
    <div id="app">
      <Title />
      <div class="grid">
        <div class="grid__left">
          <Navbar />
          <br />
          <ArticleBar />
        </div>
        <div class="grid__right">
          <MainQuote />
          <router-view class="main-content" />
        </div>
      </div>
      <Copyright class="copyright" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Navbar from "./components/Navbar.vue";
import ArticleBar from "./components/ArticleBar.vue";
import MainQuote from "./components/MainQuote.vue";
import Copyright from "./components/Copyright.vue";

export default {
  components: {
    Title,
    Navbar,
    ArticleBar,
    MainQuote,
    Copyright
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Goudy Bookletter 1911";
  src: url("assets/fonts/goudy_bookletter_1911.otf") format("opentype");
}

@font-face {
  font-family: "Teutonic4";
  src: url("assets/fonts/teutonic4.ttf") format("truetype");
}

@font-face {
  font-family: "Windsong";
  src: url("assets/fonts/Windsong.ttf") format("truetype");
}

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 62.5%;
}

body {
  margin: 0;
  font-family: "Goudy Bookletter 1911", serif;
  font-size: 1.8rem;
  line-height: 1.5;
}

.bg {
  height: max-content;
  background-image: linear-gradient(
      rgba(149, 83, 83, 0.3),
      rgba(56, 53, 53, 0.3)
    ),
    url("assets/images/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  filter: grayscale(10%);
}

#app {
  box-sizing: border-box;
  width: 75%;
  min-height: 100vh;
  padding: 0 2rem 2rem;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  position: relative;
}

h1 {
  font-size: 3em;
  text-align: center;
  padding: 2rem;
  margin: 0;
  letter-spacing: 1rem;
}
h2 {
  font-size: 1.5em;
  color: #a72525;
}
h3 {
  font-size: 1.17em;
  color: #a72525;
}
h4 {
  font-size: 1.12em;
}
h5 {
  font-size: 0.83em;
}
h6 {
  font-size: 0.75em;
}

a {
  text-decoration: none;
}

small {
  font-size: 90%;
}

.grid {
  display: grid;
  grid-template-columns: max-content auto;
}

.main-content {
  padding: 0 5rem 2rem;
  margin: 0 auto;
}

.copyright {
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #a72525;
}
</style>
