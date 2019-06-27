<template>
  <div class="bg">
    <div id="app">
      <Title/>
      <div class="grid">
        <div class="grid__left">
          <div>
            <Navbar/>
            <br>
            <ArticleBar/>
          </div>
        </div>
        <div class="grid__right">
          <MainQuote/>
          <router-view class="main-content"/>
        </div>
      </div>
      <br>
      <br>
      <Copyright class="copyright"/>
    </div>
  </div>
</template>

<script>
import Title from "./components/Title.vue";
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
  font-family: "Windsong";
  src: url("assets/fonts/Windsong.ttf") format("truetype");
}

@font-face {
  font-family: "AquilineTwo";
  src: url("assets/fonts/AquilineTwo.ttf") format("truetype");
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
  font-size: 1.25em;
  color: #a72525;
}
h4 {
  font-size: 1em;
}
h5 {
  font-size: 0.83em;
  margin: 0;
}
h6 {
  font-size: 0.75em;
  font-weight: 400;
  text-align: right;
  margin-top: 0;
}

p {
  text-align: justify;
}

a {
  text-decoration: none;
}

small {
  font-size: 70%;
  color: #024a74;
}

hr {
  height: 2rem;
  border: none;
  border-bottom: 1.5px solid rgba(#8d6f6f, 0.6);
}

blockquote {
  text-align: center;
  font-family: "AquilineTwo", cursive;
  font-size: 2.5rem;
}

ol,
ul {
  font-size: 80%;
  color: #444;
}

img {
  width: 100%;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.grid {
  display: grid;
  grid-template-columns: max-content auto;

  &__left > * {
    position: sticky;
    top: 5rem;
  }
}

.main-content {
  padding: 0 5rem 2rem;
  margin: 0 auto;
}

.copyright {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #a72525;
}
.image {
  width: 70%;
  margin: 5rem auto;
  display: block;
  text-align: center;

  &--sm {
    width: 60%;
  }
  &--cl {
    width: 27%;
    margin: 0 1rem;
  }
}
.center {
  text-align: center;
}
.padding {
  display: inline-block;
  width: 80%;
  padding-left: 5rem;
}
.pointer {
  cursor: pointer;
}
</style>
