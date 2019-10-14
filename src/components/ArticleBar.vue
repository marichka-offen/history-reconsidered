<template>
  <div id="side-nav">
    <h4 class="title pointer" @click="articles = !articles">
      History Articles
    </h4>
    <transition name="fade">
      <div class="links" v-show="!articles">
        <router-link :to="{ name: 'kent-militia' }">
          <!-- KENT MILITIA -->
          <span>Kent Militia</span>
        </router-link>

        <!-- MARYLAND -->
        <router-link :to="{ name: 'maryland' }">
          <span>Maryland</span>
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
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.innerWidth <= 950) {
      console.log(window.innerWidth);
      document.querySelector(".links").style.display = "none";
    } else {
      console.log("bla bla bla");
    }
  },
  data() {
    return {
      irish: true,
      dutch: true,
      scottish: true,
      colonial: true,
      articles: false
    };
  },
  methods: {
    arrowFunc() {
      document.querySelector(".arrow-icon").classList.toggle("open");
    }
  }
};
</script>

<style lang="scss" scoped>
$theme-color: rgb(167, 37, 37);
.title {
  margin: 0;
  border-bottom: 1.5px solid rgba(#8d6f6f, 0.6);
  color: $theme-color;
}

#side-nav {
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
h4 {
  position: relative;
}

@media screen and (max-width: 950px) {
  #side-nav {
    border: none;
    padding: 0;
  }
  .title {
    border: none;
    position: relative;
    // width: max-content;
  }

  .links {
    position: absolute;
    background-color: rgba(255, 247, 240, 0.9);
    // border: 2px dashed rgba(167, 37, 37, 0.5);
    outline: 1rem solid rgba(255, 247, 240, 0.9);
    text-align: center;
    margin: 3.5rem 0 0;
    padding: 1rem 2rem;
    box-shadow: 0 10px 22px 0 rgba(0, 0, 0, 0.5),
      0 10px 25px 0 rgba(0, 0, 0, 0.4);
  }
}
</style>
