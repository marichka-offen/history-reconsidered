<template>
  <div class="bg">
    <div id="app">
      <Title />
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  components: {
    Title
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

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 62.5%;
}

body {
  margin: 0;
  font-family: "Goudy Bookletter 1911", serif;
  font-size: 1.6rem;
  line-height: 1.5;
}

.bg {
  height: 100vh;
  background-image: url("assets/images/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(70%);
}

#app {
  box-sizing: border-box;
  width: 75%;
  height: 100vh;
  padding: 0 2rem 2rem;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

h1 {
  font-size: 3em;
  font-family: "Teutonic4", cursive;
  text-align: center;
  padding: 2rem;
  margin: 0;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.17em;
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
</style>
