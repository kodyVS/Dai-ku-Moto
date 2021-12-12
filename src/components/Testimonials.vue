<template>
  <div class="testimonial-container">
    <div class="testimonial-container__title">
      <h2>Hear from our happy customers</h2>
    </div>

    <div class="testimonial-container__testimonials">
      <div
        v-for="(testimonial, index) in text"
        :key="index"
        class="testimonial"
      >
        <blockquote class="testimonial__text">
          {{ testimonial.text }}
        </blockquote>
        <cite class="testimonial__person">
          <img
            class="testimonial__img"
            :src="require(`@/assets/img/${testimonial.image}.jpg`)"
            :alt="'customer' + index"
          />
          {{ testimonial.person }}</cite
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: [],
      english: [
        {
          image: "customer-1",
          person: "Kody Van Sloten",
          text:
            "Best moto shop in Cambodia. The service was outstanding and the quality of work was amazing. The owner is a really nice person",
        },
        {
          image: "customer-2",
          person: "Joana Silva",
          text:
            "I dropped off my moto and I don't even recognize the moto they gave back. They did such a good job on the custom paint work and I am so happy with the way it turned out.",
        },
        {
          image: "customer-3",
          person: "Milton Chapman",
          text:
            "I came in with a broken transmission expecting that the moto would be out of comission all week. Colin and his team had it up and running the next day. I appreciated the love and care that went into the replacement, Thank you Dai Ku Moto!",
        },
      ],
      khmer: [
        {
          image: "customer-1",
          person: "Kody Van Sloten",
          text:
            "Best moto shop in Cambodia. The service was outstanding and the quality of work was amazing. The owner is a really nice person",
        },
        {
          image: "customer-2",
          person: "Joana Silva",
          text:
            "I dropped off my moto and I don't even recognize the moto they gave back. They did such a good job on the custom paint work and I am so happy with the way it turned out.",
        },
        {
          image: "customer-3",
          person: "Milton Chapman",
          text:
            "I came in with a broken transmission expecting that the moto would be out of comission all week. Colin and his team had it up and running the next day. I appreciated the love and care that went into the replacement. Thank you Dai Ku Moto!",
        },
      ],
    };
  },
  created() {
    this.setLanguage("english");
  },
  watch: {
    $language() {
      this.setLanguage(this.$language);
    },
  },
  methods: {
    async setLanguage(language) {
      if (language === "english") {
        this.text = this.english;
      } else {
        this.text = this.khmer;
      }
    },
  },
};
</script>

<style lang="scss">
blockquote {
  padding: 2%;
  font-style: italic;
  font-family: Georgia;
  line-height: 145%;
  position: relative;
  margin-top: 40px;
}
blockquote:before {
  content: "\201c";
  font-size: 500%;
  display: block;
  position: absolute;
  top: -5px;
  left: -5px;
}
blockquote:after {
  font-size: 500%;
}
.testimonial-container {
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.7)
    ),
    url(../assets/img/clean-work-1.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  color: rgb(219, 219, 219);
  font-weight: 300;
  padding-bottom: 10rem;
  padding-top: 15rem;
  &__title {
    margin-bottom: 4rem;
    font-size: 2.5rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
  }
  &__testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    grid-gap: 7rem;
    margin: 10px auto;
    width: 80vw;
    height: auto;
    align-items: center;
  }
}

.testimonial {
  display: flex;
  flex-direction: column;
  padding: 3rem;

  &__text {
    font-style: italic;
    font-size: 2rem;
    word-spacing: 1.2px;
    margin-bottom: 3rem;
  }
  &__img {
    height: 6rem;
    border-radius: 100px;
    margin-right: 10px;
  }
  &__person {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    text-transform: uppercase;
  }
}
@media only screen and (max-width: 1020px) {
  .testimonial-container {
    &__title {
      margin-bottom: 4rem;
      font-size: 1.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-align: center;
    }
  }
}
</style>
