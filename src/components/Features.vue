<template>
  <div class="features-section">
    <h2 class="title">
      Need repairs or looking for a used moto?
      <a @click.prevent="scrollTo()"><span>let us know</span>.</a>
    </h2>
    <div v-if="$language === 'english'" class="features">
      <div
        v-for="(feature, index) in english.features"
        :key="index"
        class="feature"
      >
        <!-- <component
          :is="feature.icon"
          h="50"
          w="50"
          rootClass="icon-features"
        ></component> -->

        <component :is="feature.icon" :iconStyle="'height:5rem'"></component>

        <!-- <svg class="icon icon__facebook">
          <use :xlink:href="feature.icon"></use>
        </svg> -->
        <!-- <img
          src="../assets/img/feature-icons/globe-outline.svg"
          alt="Trophy"
          class="feature-image"
        /> -->
        <h4 class="heading-4">{{ feature.title }}</h4>
        <p class="feature__text">
          {{ feature.text }}
        </p>
      </div>
    </div>

    <div v-if="$language === 'khmer'" class="features">
      <div
        v-for="(feature, index) in khmer.features"
        :key="index"
        class="feature"
      >
        <!-- <component
          :is="feature.icon"
          h="50"
          w="50"
          rootClass="icon-features"
        ></component> -->

        <component :is="feature.icon" :iconStyle="'height:5rem'"></component>

        <!-- <svg class="icon icon__facebook">
          <use :xlink:href="feature.icon"></use>
        </svg> -->
        <!-- <img
          src="../assets/img/feature-icons/globe-outline.svg"
          alt="Trophy"
          class="feature-image"
        /> -->
        <h4 class="heading-4">{{ feature.title }}</h4>
        <p class="feature__text">
          {{ feature.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IosTrophy from "./SvgIcon/Trophy.vue";
import IosKey from "./SvgIcon/Key.vue";
import IosHammer from "./SvgIcon/Hammer";
import IosRibbon from "./SvgIcon/Ribbon";
import IosBarChart from "./SvgIcon/BarChart";
import IosLock from "./SvgIcon/Lock";
export default {
  components: {
    IosTrophy,
    IosKey,
    IosHammer,
    IosRibbon,
    IosBarChart,
    IosLock,
  },
  data() {
    return {
      text: {},
      english: {
        title: "",
        features: [
          {
            icon: "IosHammer",
            title: "Service and repair",
            text:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
          },
          {
            icon: "IosRibbon",
            title: "Top quality service",
            text:
              "We can help you get the look you want from your moto. We want to give you the bike you love.",
          },
          {
            icon: "IosTrophy",
            title: "Friendly service in English and Khmer",
            text:
              "We strive to give all our customers the best experience they can. We know repairs can be frusterating, that's why we want to help.",
          },
          {
            icon: "IosKey",
            title: "Purchases and Sales",
            text:
              "We always have moto's for sale. Contact us or head to our facebook page to see the latest moto's for sale.",
          },
          {
            icon: "IosBarChart",
            title: "Competitive rates",
            text:
              "We strive to help you get your equipment fixed at a price you can afford",
          },
          {
            icon: "IosLock",
            title: "Safety",
            text:
              "The roads of Cambodia can be dangerous. We make sure all repairs are done properly to ensure your safety",
          },
        ],
      },
      khmer: {
        title: "asdf",
        features: [
          {
            icon: "IosHammer",
            title: "asdf",
            text:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
          },
          {
            icon: "IosRibbon",
            title: "asdf",
            text:
              "We can help you get the look you want from your moto. We want to give you the bike you love.",
          },
          {
            icon: "IosTrophy",
            title: "asdf",
            text:
              "We strive to give all our customers the best experience they can. We know repairs can be frusterating, that's why we want to help.",
          },
          {
            icon: "IosKey",
            title: "asdf",
            text:
              "We always have moto's for sale. Contact us or head to our facebook page to see the latest moto's for sale.",
          },
          {
            icon: "IosBarChart",
            title: "asdf",
            text:
              "We strive to help you get your equipment fixed at a price you can afford",
          },
          {
            icon: "IosLock",
            title: "asdf",
            text:
              "The roads of Cambodia can be dangerous. We make sure all repairs are done properly to ensure your safety",
          },
        ],
      },
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
    scrollTo() {
      this.$emit("scrollTo", "link-contact-us");
    },
  },
};
</script>

<style lang="scss">
.icon-features {
  height: 5rem;
  width: 5rem;
}
.icon-component {
  height: 5rem;
  width: 5rem;
}
.title {
  margin: 5rem 0 3rem 0;
  font-size: 3.4rem;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  a {
    display: block;
    margin-top: 0.7rem;

    span {
      border-bottom: 1px solid var(--color-primary);
      color: var(--color-primary);
      font-size: 2.8rem;
      transition: all 0.4s;
      &:hover {
        cursor: pointer;
        filter: brightness(0.5);
        border-bottom: none;
      }
    }
  }
}
.features {
  display: grid;
  padding-top: 5rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 60rem));
  grid-template-rows: auto auto auto;
  grid-gap: 2rem;
  margin-bottom: 15rem;
  text-align: center;
}
.feature {
  max-width: 55rem;
  &__icon {
    height: 5rem;
  }
  padding: 3rem;
  .heading-4 {
    font-size: 1.9rem;
    margin-bottom: 1rem;
  }
  .heading-4::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 15%;
    padding-top: 1rem;
    border-bottom: var(--color-primary) solid 3px;
    margin-bottom: 2.5rem;
  }
}
@media only screen and (max-width: 1020px) {
  .title {
    letter-spacing: 2.2px;
    font-size: 2.3rem;
    a {
      display: block;
      margin-top: 0.7rem;

      span {
        border-bottom: 1px solid var(--color-primary);
        color: var(--color-primary);
        font-size: 2rem;
      }
    }
  }
}
</style>
