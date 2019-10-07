<template>
  <div>
    <h2>The Kent County Militia, 1660-1707</h2>
    <div class="image">
      <img
        src="@/assets/images/kent-militia.jpg"
        alt="Flag of the Dutch West Indies Company"
      />
      <i>
        <h5>Flag of the Dutch West Indies Company</h5>
      </i>
    </div>
    <p>
      We are a reenactment group primarily seeking to portray a militia company
      and their families in the colony of Maryland between the years 1660-1707.
      We have had the privilege of participating in events at our beloved St.
      Mary’s City in Maryland, Lewes and New Castle in Delaware, and Marietta
      Mansion, Maryland. Despite the similarity of clothing there is no
      intention to portray a uniformed company. The absence of a uniform is not
      only historically authentic, it also allows for us to join and be joined
      by other late 17th century reenactors and portray any militia organization
      of the period. We just might turn pirate if the company is to our liking!
      While we seek to keep our standards both high and reasonable, we will help
      those who wish to join us to meet them. We welcome any and all who share
      our interest in the late 17th century American colonial experience.
    </p>
    <!-- IMAGE -->
    <p>
      We are honored to be the sole American contingent of “The Honourable
      Company of Foote,” an Irish, cross border, non-profit organization to
      promote the awareness of Irish military history.
    </p>

    <h3>Particulars of the impression</h3>

    <h4>Firearms</h4>
    <p>
      This was a period of transition from matchlocks to firelocks for the Army
      and the Regiment therefore acceptable to turn out with either firelocks or
      matchlocks. The shape and lines are of no consequence, given the early
      stages of this impression, as long as it is a full sized musket.
    </p>

    <h4>Bandolier of “boxes” or cartridge box</h4>
    <p>
      The bandolier became outdated inn European armies by the 1680’s but may
      have continued to be used in the colonies. It should be made of vegetable
      tanned leather with 12 to 15 “boxes”, a bullet bag, and priming flask.
      Cartridge boxes worn over the shoulder or on the waist belt are viable
      alternatives.
    </p>

    <h4>Sword, Sword Baldric, and Sheath</h4>
    <p>
      The sword should be a plain hilted short sword described as “a good stiff
      tuck” during the Great Civil War. A good source for blunted swords,
      suitable for actual use in mock combat is either Bailiff Forge or
      Armourclass, both in the UK. Baldric and sheath should be of vegetable
      tanned leather. If you do not have the correct sword, it is far better to
      turn out without one.
    </p>

    <!-- IMAGE CAROUSEL -->

    <h4>Men’s clothing</h4>
    <p>
      The coat is a long wool or linen garment approximately knee length, wide
      sleeved and deep cuffed with pewter, cloth, wooden or bone buttons from
      the collarless neck down the entire length of the coat. Pocket flaps are
      generally low. Sleeve lengths were alternately high and low on the arm but
      we suggest a sleeve ending above the wrist bone. The shirt is an almost
      knee length linen garment with full sleeves and a narrow band collar and
      pewter, cloth, wooden or bone buttons. A cravat was generally worn with
      the shirt. Knee britches are wool or linen, generally worn low on the
      waist and full in the leg. Hose are knee length or higher stockings are
      worn in a variety of colors. Shoes are brown or black and tie with a
      single lace or ribbon.
    </p>

    <h4>Ladies’ Clothing</h4>
    <p>
      The chemise is a neck to knee length or longer linen
      undergarment/nightgown of the period. It has a drawstring neck and cuffs.
      The sleeves are three-quarter length or longer, but would have been pushed
      up to elbow length in period. The petticoat is a drawstring skirt made of
      linen or wool or a linen/wool combination (linsey woolsey) that extends
      from the waist to the ankle or just above the ground. The linen or wool
      bodice, with or without sleeves, and or sleeved jacket was worn in
      combination with the petticoat over the shift, and was worn by lower
      middle class ladies.
      <br />
      <br />Stays or semi-boned jumps are worn under the bodice or jacket. The
      hat was either a man’s low crowned broad brimmed hat or straw hat, worn in
      combination with a linen cap, with or without lace, or linen or silk hood.
      <br />
      <br />Hose Knee length or higher stockings are worn in a variety of colors
      and can be ‘clocked’ (embroidered at the ankle). Shoes Black or brown
      smaller men’s latchet shoes could be worn or pointed toe shoe with low
      heels closed with a ribbon would have been worn, as well as wooden and
      leather clogs
    </p>

    <h4>Miscellaneous</h4>
    <p>
      Equipment such as haversacks, knapsacks, tents, eating utensils, plates,
      flagons, canteens, furniture, etc., are available from a variety of
      sources. Some things are authentic and some are not. Ask us before buying.
    </p>
    <hr />
    <h3>Useful Links:</h3>
    <ul>
      <li v-for="link in links" :key="link.index">
        <a :href="link.src">{{ link.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Historic St. Mary’s City, Maryland",
          src: "http://www.stmaryscity.org/"
        },
        {
          title: "Lewes, Delaware",
          src: "http://www.leweschamber.com/"
        },
        {
          title: "The finest in custom leather work and accoutrements",
          src: "http://www.fortvauseoutfitters.com/"
        },
        {
          title: "The Pirate Brethren",
          src: "http://www.piratebrethren.com/oldindex.html"
        },
        {
          title: "The Duke of York and Albany’s Maritime Regiment of Foot",
          src: "http://www.lukehistory.com/admirals/index.html"
        },
        {
          title: "Gentlemen of Fortune",
          src: "http://www.gentlemenoffortune.com/"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
