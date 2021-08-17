<template>
  <div class="header">
    <img
      src="../assets/img/header-top.png"
      alt="Logo-top"
      class="header__logo header__logo--1"
    />
    <img
      src="../assets/img/header-middle.png"
      alt="Logo-middle"
      class="header__logo header__logo--2"
    />
    <img
      src="../assets/img/header-bottom.png"
      alt="Logo-bottom"
      class="header__logo header__logo--3"
    />
    <div class="button-group">
      <button @click.prevent="setLanguage('khmer')" class="btn btn-full">
        {{ buttonText.button1 }}
      </button>
      <button @click.prevent="setLanguage('english')" class="btn btn-full">
        {{ buttonText.button2 }}
      </button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      text: "",
      buttonText: {
        button1: "បន្តជាភាសាអង់គ្លេស",
        button2: "Continue in English test",
      },
    };
  },
  methods: {
    setLanguage(language) {
      Vue.set(Vue.prototype, "$language", "khmer");
      this.$language = language;
      this.$emit("scrollTo", "link-about-us");
    },
  },
};
</script>
<style lang="scss">
.header {
  display: flex;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(../assets/img/cover-photo.jpg);
  background-size: 100%;
  background-position: 100% 35%;

  background-attachment: fixed;
  align-items: center;
  justify-content: center;

  &__logo {
    height: 10rem;
    position: absolute;
    &--1 {
      transform: translate(-30rem, -12rem);
      height: 11rem;
      animation: fly-in-top 2.5s cubic-bezier(0, 0.83, 0.27, 1);
    }
    &--2 {
      height: 12rem;
      transform: translate(-29.5rem, 0);
      animation: fade-in-twist 2.5s cubic-bezier(0, 0.2, 0.3, 1);
    }
    &--3 {
      transform: translate(-30rem, 11rem);
      animation: fly-in-bottom 2.5s cubic-bezier(0, 0.83, 0.27, 1);
    }
  }

  .button-group {
    display: flex;
    flex-direction: column;
    transform: translateX(20rem);
    opacity: 0;
    animation: fade-in 2s 1.8s;
    animation-fill-mode: forwards;
    .btn {
      margin: 1rem;
      padding: 1.2rem 2.5rem;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fly-in-top {
    0% {
      transform: translateY(-100rem);
      opacity: 0;
    }
    50% {
      transform: translateY(-12rem);
      opacity: 1;
    }
    75% {
      transform: translateY(-12rem);
      opacity: 1;
    }
    100% {
      transform: translate(-30rem, -12rem);
    }
  }
  @keyframes fly-in-bottom {
    0% {
      transform: translateY(100rem);
      opacity: 0;
    }
    65% {
      transform: translateY(11rem);
      opacity: 1;
    }
    100% {
      transform: translate(-30rem, 11rem);
    }
  }
  @keyframes fade-in-twist {
    0% {
      opacity: 0;
      transform: translateX(0rem);
    }
    25% {
      opacity: 1;
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    70% {
      transform: rotate(0deg);
    }
  }
}
@media only screen and (max-width: 1020px) {
  .header {
    background-size: cover;
    background-position: 60% 35%;

    &__logo {
      height: 10rem;
      position: flex;
      &--1 {
        transform: translateY(-21rem);
        height: 8rem;
        animation: none;
      }
      &--2 {
        height: 8rem;
        transform: translateY(-11rem);
        animation: none;
      }
      &--3 {
        height: 8rem;
        transform: translateY(-1rem);
        animation: none;
      }
    }

    .button-group {
      transform: translate(0rem, 20rem);
      opacity: 1;
      animation: none;
    }
  }
}
</style>
