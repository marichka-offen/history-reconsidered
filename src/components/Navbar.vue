<template>
  <div id="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'book' }">My Book</router-link>
    <!-- <router-link :to="{ name: 'recommendations' }">Books I Recommend</router-link> -->
    <router-link :to="{ name: 'contact' }">Contact Me</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav {
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

@media screen and (max-device-width: 800px) {
  #nav {
    flex-direction: row;
    width: auto;
    justify-content: center;
    border-right: none;
    border-bottom: 1.5px solid rgba(#8d6f6f, 0.6);

    & > * {
      padding: 0 2rem;
    }
  }
}
</style>
