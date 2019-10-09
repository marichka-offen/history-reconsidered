<template>
  <div id="main-nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'book' }">Book</router-link>
    <!-- <router-link :to="{ name: 'recommendations' }">Books I Recommend</router-link> -->
    <router-link :to="{ name: 'contact' }">Contact</router-link>
    <div class="visible">
      <ArticleBar />
    </div>
  </div>
</template>

<script>
import ArticleBar from "./ArticleBar.vue";
export default {
  components: {
    ArticleBar
  }
};
</script>

<style lang="scss" scoped>
#main-nav {
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding: 1.5rem;
  text-align: right;
  border-right: 1.5px solid rgba(#8d6f6f, 0.6);
}
a {
  color: #444;
}

.visible {
  display: none;
}

@media screen and (max-width: 950px) {
  #main-nav {
    flex-direction: row;
    width: auto;
    justify-content: center;
    border-right: none;
    border-bottom: 1.5px solid rgba(#8d6f6f, 0.6);

    & > * {
      padding: 0 1.5rem;
    }
  }

  .visible {
    display: block;
  }
}

@media screen and (max-width: 430px) {
  #main-nav {
    font-size: 1.2rem;

    & > * {
      padding: 0 1rem;
    }
  }
}
</style>
