<template>
  <div id="nav">
    <h4 class="title">History Articles</h4>
    <router-link :to="{ name: 'kent-militia' }">
      <!-- KENT MILITIA -->
      <span @click="kent = !kent">Kent Militia</span>
    </router-link>
    <router-link :to="{ name: 'kent-militia-maryland' }" v-show="!kent">
      <small>Maryland (1634 - 1707)</small>
    </router-link>

    <!-- CZECHOSLVAK LEGION -->
    <router-link :to="{ name: 'czechoslovak-legion' }"
      >Czechoslovak Legion</router-link
    >

    <!-- IRISH HISTORY -->
    <router-link :to="{ name: 'irish-history' }">
      <span @click="irish = !irish">Irish History</span>
    </router-link>

    <router-link :to="{ name: 'oneils-rebelion' }" v-show="!irish">
      <small>O'Neil's Rebellion</small>
    </router-link>
    <router-link :to="{ name: 'three-kingdoms' }" v-show="!irish">
      <small>War of Three Kingdoms</small>
    </router-link>
    <router-link :to="{ name: 'ireland-1652-1688' }" v-show="!irish">
      <small>Ireland (1652-1688)</small>
    </router-link>
    <router-link :to="{ name: 'williamite-war' }" v-show="!irish">
      <small>Williamite War</small>
    </router-link>
    <router-link :to="{ name: 'irish-military' }" v-show="!irish">
      <small>Irish Military Establishment</small>
    </router-link>

    <!-- DUTCH HISTORY -->
    <router-link :to="{ name: 'dutch-history' }">
      <span @click="dutch = !dutch">Dutch History</span>
    </router-link>
    <router-link :to="{ name: 'eighty-years-war' }" v-show="!dutch">
      <small>80 Years War</small>
    </router-link>
    <router-link :to="{ name: 'new-netherlands' }" v-show="!dutch">
      <small>New Netherlands</small>
    </router-link>

    <!-- SCOTTISH HISTORY -->
    <router-link :to="{ name: 'scottish-history' }"
      >Scottish History</router-link
    >

    <!-- COLONIAL HISTORY -->
    <router-link :to="{ name: 'colonial-history' }"
      >Colonial History</router-link
    >

    <!-- THE HUSSITES -->
    <router-link :to="{ name: 'hussites' }">Hussites</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kent: true,
      irish: true,
      dutch: true
    };
  }
};
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
