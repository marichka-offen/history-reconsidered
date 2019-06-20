<template>
  <div id="nav">
    <h4 class="title">History Articles</h4>
    <router-link :to="{ name: 'kent-militia' }">Kent Militia</router-link>
    <router-link :to="{ name: 'czechoslovak-legion' }"
      >Czechoslovak Legion</router-link
    >
    <router-link :to="{ name: 'irish-history' }">Irish History</router-link>
    <router-link :to="{ name: 'dutch-history' }">Dutch History</router-link>
    <router-link :to="{ name: 'scottish-history' }"
      >Scottish History</router-link
    >
    <router-link :to="{ name: 'colonial-history' }"
      >Colonial History</router-link
    >
    <router-link :to="{ name: 'hussites' }">Hussites</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  margin: 0;
  border-bottom: 1.5px solid rgba(#8d6f6f, 0.6);
  color: #a72525;
}

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
</style>
