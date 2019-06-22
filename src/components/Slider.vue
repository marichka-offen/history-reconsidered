<template>
  <div class="container">
    <div class="slider">
      <img :src="images[count]" alt="Czechoslovak Legion" />
    </div>
    <nav class="slider-nav">
      <ul>
        <li class="arrow">
          <button @click="previousImage" class="previous">
            <span>&#8592;</span>
          </button>
        </li>
        <li class="arrow">
          <button @click="nextImage" class="next">
            <span>&#8594;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import img1 from "@/assets/images/CzechoslovakLegion/img1.jpg";
import img2 from "@/assets/images/CzechoslovakLegion/img2.jpg";
import img3 from "@/assets/images/CzechoslovakLegion/img3.jpg";
import img4 from "@/assets/images/CzechoslovakLegion/img4.jpg";
import img5 from "@/assets/images/CzechoslovakLegion/img5.jpg";
import img6 from "@/assets/images/CzechoslovakLegion/img6.jpg";
import img7 from "@/assets/images/CzechoslovakLegion/img7.jpg";
import img8 from "@/assets/images/CzechoslovakLegion/img8.jpg";
import img9 from "@/assets/images/CzechoslovakLegion/img9.jpg";

export default {
  data() {
    return {
      images: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
      count: 0
    };
  },
  methods: {
    nextImage() {
      console.log(this.count);
      this.count += 1;

      if (this.count > this.images.length - 1) {
        this.count = 0;
      }
    },
    previousImage() {
      if (this.count > 0) {
        this.count -= 1;
      } else {
        this.count = this.images.length - 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$arrow: #8d6f6f;

.container {
  //   width: 600px;
  //   height: 400px;
  max-width: 800px;
  margin: 0 auto;
  //   padding: 40px;
  overflow: hidden;
}
img {
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  width: 90%;
  height: 400px;
  object-fit: cover;
  object-fit: contain;
  background-color: rgba(#8d6f6f, 0.5);
  padding: 2rem;
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  color: $arrow;
  font-size: 4rem;
}

button span {
  //   position: relative;
  //   display: inline-block;
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.previous:hover span {
  transform: translateX(-10px) scale(1.2);
}

.next:hover span {
  transform: translateX(10px) scale(1.2);
}

.slider-nav ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.slider-nav li {
  text-align: center;
}

.slider-nav .arrow {
  flex: 0 0 15%;
}

.slider-nav a {
  flex-basis: 100%;
  display: flex;
  align-items: center;
}

.slider-nav span {
  display: block;
  width: 100%;
}

.fadeImg {
  animation: fadeImg 0.8s;
}

@keyframes fadeImg {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
