<template>
  <div class="form-page">
    <h3 class="center">
      Feel free to reach out with any questions, comments or concerns
    </h3>

    <div class="form">
      <form
        action="https://formspree.io/lgoffen56@gmail.com"
        method="POST"
        class="form"
      >
        <div class="form__group">
          <input
            minlength="3"
            type="text"
            class="form__input"
            placeholder="Full name"
            id="name"
            required
            name="name"
          />
          <label for="name" class="form__label">Full name</label>
        </div>
        <div class="form__group">
          <input
            type="email"
            class="form__input"
            placeholder="Email address"
            id="email"
            required
            name="_replyto"
          />
          <label for="email" class="form__label">Email address</label>
        </div>

        <div class="form__group">
          <textarea
            minlength="10"
            rows="6"
            class="form__input"
            placeholder="Enter your message here"
            id="message"
            required
            name="message"
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
    <div class="hide">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci
      necessitatibus voluptates quia laborum repellat eius debitis quis libero
      laudantium officia et dicta officiis hic, in delectus labore error
      obcaecati!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Adipisci tempore ab animi ut laudantium architecto iste. Tenetur adipisci
      perspiciatis optio pariatur, laudantium repellat voluptatibus, quos quas
      ut consequuntur error explicabo.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$theme-color: rgb(167, 37, 37);

.form-page {
  width: 80%;
  padding: 0;
}
.form {
  width: 80%;
  margin: 0 auto;

  &__input {
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1rem 1rem;
    border-radius: 3px;
    background-color: rgba(white, 0.5);
    border: 1px solid rgba($theme-color, 0.2);
    width: 100%;
    display: block;
    transition: all 0.3s;
    margin-top: 0.7rem;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(black, 0.1);
      border-bottom: 4px solid #87be33;
      background-color: rgba(white, 1);
    }

    &:focus:invalid {
      border-bottom: 4px solid rgba($theme-color, 0.7);
    }

    &::-webkit-input-placeholder {
      color: grey;
    }
  }

  &__label {
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-top: 0.5rem;
    display: block;
    transition: all 0.3s;
    color: $theme-color;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
}

button {
  display: block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  border-radius: 3px;
  background-color: $theme-color;
  color: #fff;
  border: none;
  font-family: "Goudy Bookletter 1911", serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 1px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(black, 0.1);
  }
}

.hide {
  visibility: hidden;
}
</style>
