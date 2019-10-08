<template>
  <div id="nav">
    <h4 class="title">History Articles</h4>
    <div class="links">
      <router-link :to="{ name: 'kent-militia' }">
        <!-- KENT MILITIA -->
        <span @click="kent = !kent">Kent Militia</span>
      </router-link>
      <router-link :to="{ name: 'kent-militia-maryland' }" v-show="!kent">
        <small>Maryland (1634 - 1707)</small>
      </router-link>

      <!-- CZECHOSLVAK LEGION -->
      <router-link :to="{ name: 'czechoslovak-legion' }">
        <span>Czechoslovak Legion</span>
      </router-link>

      <!-- IRISH HISTORY -->
      <span class="pointer" @click="irish = !irish">Irish History</span>

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
      <span class="pointer" @click="dutch = !dutch">Dutch History</span>
      <router-link :to="{ name: 'eighty-years-war' }" v-show="!dutch">
        <small>80 Years War</small>
      </router-link>
      <router-link :to="{ name: 'new-netherlands' }" v-show="!dutch">
        <small>New Netherlands</small>
      </router-link>

      <!-- SCOTTISH HISTORY -->
      <span class="pointer" @click="scottish = !scottish"
        >Scottish History</span
      >
      <router-link :to="{ name: 'mackeys-regiment' }" v-show="!scottish">
        <small>MacKay's Regiment</small>
      </router-link>
      <router-link :to="{ name: 'dumbartons-regiment' }" v-show="!scottish">
        <small>Dumbarton's Regiment</small>
      </router-link>
      <router-link :to="{ name: 'house-stuart' }" v-show="!scottish">
        <small>House of Stuart</small>
      </router-link>

      <!-- COLONIAL HISTORY -->
      <span class="pointer" @click="colonial = !colonial"
        >Colonial History</span
      >
      <router-link :to="{ name: 'british-america' }" v-show="!colonial">
        <small>British America</small>
      </router-link>
      <router-link :to="{ name: 'regulars-va' }" v-show="!colonial">
        <small>Regulars in VA</small>
      </router-link>
      <router-link :to="{ name: 'maryland-forces' }" v-show="!colonial">
        <small>Maryland Forces</small>
      </router-link>
      <router-link :to="{ name: 'va-rangers' }" v-show="!colonial">
        <small>VA Rangers</small>
      </router-link>
      <router-link :to="{ name: 'severn-battle' }" v-show="!colonial">
        <small>Battle of the Severn</small>
      </router-link>

      <!-- THE HUSSITES -->
      <router-link :to="{ name: 'hussites' }">
        <span>Hussites</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kent: true,
      irish: true,
      dutch: true,
      scottish: true,
      colonial: true
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

@media screen and (max-device-width: 800px) {
  #nav {
    border-right: none;
    flex-direction: row;
  }

  .title {
    transform: translateX(-20rem);
  }

  .links {
    display: flex;
  }

  span {
    font-size: 1.4rem;
    display: block;
    width: max-content;
    padding: 0 1rem;
  }
}
</style>
