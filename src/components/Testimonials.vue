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
      <!-- <div class="testimonial testimonial--1">
        <blockquote class="testimonial__text">
          Best moto shop in Cambodia. The service was outstanding and the
          quality of work was amazing. The owner is a really nice person
        </blockquote>
        <cite class="testimonial__person">
          <img
            class="testimonial__img"
            src="../assets/img/customer-1.jpg"
            alt="Customer1"
          />
          Kody Van Sloten</cite
        >
      </div>
      <div class="testimonial testimonial--2">
        <blockquote class="testimonial__text">
          Inexpensive, healthy and great-tasting meals, delivered right to my
          home. We have lots of food delivery here in Lisbon, but no one comes
          even close to Omifood. Me and my family are so in love!
        </blockquote>
        <cite class="testimonial__person"
          ><img
            class="testimonial__img"
            src="../assets/img/customer-2.jpg"
            alt="Customer2"
          />Joana Silva</cite
        >
      </div>

 -->
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
            " Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!",
        },
        {
          image: "customer-3",
          person: "Milton Chapman",
          text:
            " I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!",
        },
      ],
      khmer: [
        {
          image: "customer-1",
          person: "Kody Van Sloten",
          text: "",
        },
        {
          image: "customer-2",
          person: "Joana Silva",
          text: "",
        },
        {
          image: "customer-3",
          person: "Milton Chapman",
          text: "",
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
h1,
h2 {
  font-weight: 300;
}
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
