<template>
  <div>
    <h2>The Czechoslovak Legion 1914-1920</h2>
    <p>
      My next book will be
      <i>None Shall Pass Us by in Silence, The Czechoslovak Legion, 1914-1920</i
      >.
    </p>
    <blockquote>
      "Neither the Allies or Vienna will be able to pass us by in silence if we
      have soldiers."
    </blockquote>
    <h6>
      <i>
        – Thomas Masaryk, President of the Czechoslovak National Council,
        February 1915
      </i>
    </h6>
    <b>
      The Czar of Russia gave permission for the formation of a military
      organization comprised of Czech and Slovak immigrants under Russian
      Officers. Thus was born what later became the Czechoslovak Legion.
    </b>
    <p>
      The Legion fought first for the Czar, then the Russian Revolutionary
      Government that briefly followed the Czar, and the Allies against the
      Central Powers. With the end of World War I, the Legion fought, initially
      for their own survival, the Bolsheviks, as an Allied military formation,
      making their way across 4000 miles of Russia to Vladivostok, and from
      there to home. The Legion’s story involves events in Russia, decisions
      made in the capitals for Europe, numerous Allied armies, and a government
      created in exile for a Czechoslovak state that did not exist, initially,
      except in the minds of its founders.
      <br />
      <br />The Legion captured the imagination and commanded the respect of the
      Allied nations and gave legitimacy to the Czechoslovak government in
      exile’s claim to self-rule.
      <br />
      <br />As I write this book, the Legion will remain at the center of the
      story, but it is important to look at a context larger than their actions
      to understand their accomplishments.
      <br />
      <br />What they did was no less than earn nationhood for the Czechoslovak
      people. Watch this page for updates about the book.
      <br />
      <br />Here are some images from my personal collection that will be in
      that book:
    </p>

    <!-- CAROUSELF WITH IMAGES -->
    <div class="wrapper">
      <input type="radio" id="trigger1" name="slider" />
      <label for="trigger1"></label>
      <div class="slide bg1"></div>

      <input type="radio" id="trigger2" name="slider" checked autofocus />
      <label for="trigger2"></label>
      <div class="slide bg2"></div>

      <input type="radio" id="trigger3" name="slider" />
      <label for="trigger3"></label>
      <div class="slide bg3"></div>

      <input type="radio" id="trigger4" name="slider" />
      <label for="trigger4"></label>
      <div class="slide bg4"></div>

      <input type="radio" id="trigger5" name="slider" />
      <label for="trigger5"></label>
      <div class="slide bg5"></div>
    </div>

    <!-- CAROUSELF WITH IMAGES -->

    <h3>
      Following are some of my research resources used to date for the book:
    </h3>
    <ol>
      <li>
        Ackerman, Carl, “Trailing the Bolsheviki,” Charles Scribner’s Sons, New
        York, 1919
      </li>
      <li>
        Baerlein, Henry, "The March of the 70,000," Leonard Parsons/Whitefriar
        Press, London 1926
      </li>
      <li>Becvar, Gustav, “The Lost Legion: A Czechoslovakian Epic"</li>
      <li>
        Benes, Eduard, “My War Memoirs,” Allen and Unwin, LTD. London, 1928
      </li>
      <li>
        Bradley, John,. “ The Czechoslovak Legion in Russia”, East European
        Monographs, Columbia University Press, NY, 1991
      </li>
      <li>
        Dobson, Christopher and Miller, John, “ The Day We almost Bombed Moscow,
        The Allied War in Russia, 1918-1920,” Hodder and Stoughton, London, 1986
      </li>
      <li>
        Dupuy, R. Ernest,. “Perish By the Sword”, Military Service Publishing,
        Harrisburg, PA, 1939
      </li>
      <li>
        Fic, Victor M., “Revolutionary War for Independence and the Russian
        Question, Czechoslovak Army in Russia, 1914-1918,” Abhinav Publications,
        New Delhi, 1977
      </li>
      <li>
        Fic, Victor M., “The Bolsheviks and the Czechoslovak Legion,” Shakti
        Malik, New Delhi 1978
      </li>
      <li>
        Glos, Blanka and Glos, George., “Czechoslovak Troops in Russia and
        Siberia during the First World War,” Vantage Press, NY 2000
      </li>
      <li>
        Horne, Charles, “The Odyssey of the Czecho-Slovaks,” Great Events of the
        Great War, Vol. IV, National Alumni Press, 1920
      </li>
      <li>
        Hoyt, Edwin P., “The Army Without a Country,” MacMillan, New York/London
        1967
      </li>
      <li>
        Ivicic, Vaclav, “Short History of the 7th Czechoslovak “Tatransky” Rifle
        Regiment”
      </li>
      <li>
        Kinvig, Clifford, “Churchill’s Crusade, The British Invasion of Russia
        1918-1920,” Hambledon Continuum, NY, 2006
      </li>
      <li>
        Masaryk , Thomas, “ The Making of a State: Memories and Observations,
        1914-1918,” Frederick Stokes, New York, 1927
      </li>
      <li>
        Stewart, George, “The White Armies of Russia, A Chronicle of
        Counter-Revolution and Allied Intervention,” New York, 1933 (reprint by
        Naval and Military Press)
      </li>
      <li>
        Willett, Robert, “Russian Sideshow, America’s Undeclared War,”
        Brassey’s, Washington, DC, 2003
      </li>
    </ol>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 400px;
  width: 600px;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  z-index: 1000;
}

input {
  position: absolute;
  opacity: 0;
  bottom: 0;
  cursor: pointer;
}

label {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: solid 2px white;
  border-radius: 999px;
  background-color: transparent;
  margin: 380px 6px 5px 6px;
  z-index: 2;
  cursor: pointer;
  transition-duration: 0.4s;
}

input:checked + label {
  background-color: #fff;
}

input:focus + label {
  box-shadow: 0 0 0 2px #a72525, 0 0 18px #eee;
}

.slide {
  position: absolute;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  transform: translateX(-100%);
  transition-duration: 1s;
  opacity: 1;
}

input:checked ~ .slide {
  transform: translateX(100%);
}

input:checked + label + .slide {
  transform: translateX(0);
  opacity: 1;
}

.bg1 {
  background-image: url(https://images.unsplash.com/photo-1422806310414-91469fe4977e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=114e7a73b2385128045a5555b981e939);
}
.bg2 {
  background-image: url(https://images.unsplash.com/photo-1490020641477-3b0e96306b9a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=d8358f021c68f49335fe44b10f70b700);
}
.bg3 {
  background-image: url(https://images.unsplash.com/photo-1512529111457-3e8a595ef8e9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=9b3ab76b65a358830d60ca43be76f2e1);
}
.bg4 {
  background-image: url(https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=92d2cae094fb24e5266221828ee251e2);
}
.bg5 {
  background-image: url(https://images.unsplash.com/reserve/wPCyys8TPCHY3GXm2N2D_ssp_inthewoods_1.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=654d988a19f43ca9ac27f2eacbe2a554);
}
</style>
