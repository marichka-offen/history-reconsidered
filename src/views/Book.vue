<template>
  <div>
    <h2>America's First Marines</h2>
    <div class="pages-grid">
      <img
        src="@/assets/images/book/book-ss1.png"
        alt="America's First Marines book cover"
      />
      <img
        src="@/assets/images/book/book-ss2.png"
        alt="America's First Marines page"
      />
      <img
        src="@/assets/images/book/book-ss3.png"
        alt="America's First Marines page"
      />
    </div>
    <h2 class="link">
      <a
        href="https://www.amazon.com/Americas-First-Marines-American-Regiment/dp/1463521146"
        target="_blank"
        >Now for sale on Amazon.com</a
      >
    </h2>

    <h3>
      The first ever comprehensive regimental history of America’s First
      Marines.
    </h3>
    <p>
      Making extensive use of primary source material as well as secondary
      sources and analysis, this is an account of how the regiment was
      organized, equipped, who served and their exploits until the regiment was
      disbanded. From this account we get a glimpse of how these men, and their
      fellow colonists saw themselves, as they formed a separate identity ...
      becoming "Americans".
    </p>
    <h3>
      When I call Gooch’s Regiment “America’s First Marines” what do I mean?
    </h3>
    <p>
      Gooch’s Regiment was raised in nine North American colonies and placed on
      the British Army Establishment as a Regiment of Foot, but in the 18th
      century, the definition of marine was based on what they did. Since the
      late 17th century both Foot Regiments and Marine Regiments were
      responsible for executing shipboard operations such as ship to shore
      operations, boarding party operations, assisting in ship-to-ship
      operations with small arms fire, and assisting with the ship’s guns.
      Sometimes, as a last resort, Marines also served as sailors but this seems
      to have been the exception. The fact that the men of Gooch’s Regiment
      served as sailors to such a great extent and for so long seems to be very
      unusual.
      <br />
      <br />In the 17th and 18th centuries, Marine Regiments were raised,
      typically from Foot Regiments and local levies, whenever Britain went to
      war. Marine Regiments were raised to take the fight to the enemy on the
      sea and not to serve as garrisons in Britain and its colonies, like so
      many of the Foot Regiments, and as a result were seen as elite formations
      in the British Army Establishment. The men of Gooch’s Regiment no doubt
      took great pride in calling themselves, and being called by others
      “Marines.”
      <br />
      <br />The identification of Gooch’s Regiment as an “American Regiment”
      came from the leadership of the expedition, the men of the regiment and
      the media of the time. They were the first military formation described as
      such, since the first colonists landed in North America. It is a
      distinction worth noting because it was the first time it was made and
      clearly not the last. Had the Regiment been seen as a British Regiment,
      their hardships might have not been taken to heart by the American
      colonists and made the lasting impression they did.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.pages-grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 3rem;
}
a {
  color: #a72525;
  text-decoration: underline;
}
.link {
  text-align: center;
}
</style>
