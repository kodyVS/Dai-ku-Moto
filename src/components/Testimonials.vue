<template>
  <div class="testimonial-container">
    <div class="testimonial-container__title">
      <h2>Hear from our happy customers</h2>
    </div>

    <div class="testimonial-container__testimonials">
      <div v-for="(testimonial, index) in text" :key="index" class="testimonial">
        <blockquote class="testimonial__text">
          {{ testimonial.text }}
        </blockquote>
        <cite class="testimonial__person">
          <!-- <img
            class="testimonial__img"
            :src="require(`@/assets/img/${testimonial.image}.jpg`)"
            :alt="'customer' + index"
          /> -->
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
            "Best moto shop in Cambodia. Four words came to mind about their professional service: Reliable, Trustworthy, Quality, and Affordable. The service was outstanding and the quality of work was amazing and you can tell the owner really takes care of his staff. I've had a pleasant experience everytime I needed work done by the dai ku moto team.",
        },
        {
          image: "customer-2",
          person: "Wejeka",
          text:
            "Since 2018 until now, Colin and his team at Dai Ku Moto have been helping fix my moto. Through their work, my moto is running great. Anytime I have a problem on my moto they always come back with a great solution to solve the issues, so that my moto will not break down or have worse issues. For this, I am so grateful that I can trust in their service! They have always provided the best quality services and the prices are also reasonable.",
        },
        {
          image: "customer-3",
          person: "Gary Bevan",
          text:
            "My old Suzuki Viva got to the point where it would not start. I contacted Dai Ku Moto and they came and collected the moto. They did a complete service, even flushed out the fuel tank and replaced the rings and valve seals. The moto now runs like new. Definitely recommend this shop to ex-pats as value for money and a staff that know what they are doing.",
        },
      ],
      khmer: [
        {
          image: "customer-1",
          person: "Kody Van Sloten",
          text:
            "Best moto shop in Cambodia. The service was outstanding and the quality of work was amazing. You can tell the owner really takes care of his staff. I've had a pleasant experience everytime I needed to work with the dai ku moto team.",
        },
        {
          image: "customer-2",
          person: "Wejeka",
          text:
            "Since 2018 until now, Colin and his team at Dai Ku Moto have been helping fix my moto. Four words came to mind about their professional service: Reliable, Trustworthy, Quality, and Affordable. Through their work, my moto is running great. I am so grateful that I can trust in their service! They have always provided the best quality services and the prices are also reasonable.",
        },
        {
          image: "customer-3",
          person: "Gary Bevan",
          text:
            "My old Suzuki Viva got to the point where it would not start. I contacted Dai Ku Moto and they came and collected the moto. They did a complete service, even flushed out the fuel tank and replaced the rings and valve seals. They delivered it back to my workplace all for $60. The moto now runs like new. Definitely recommend this shop to ex-pats as value for money and a staff that know what they are doing.",
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
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
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
