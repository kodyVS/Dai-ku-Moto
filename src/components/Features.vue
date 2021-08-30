<template>
  <div class="features-section">
    <div class="title">
      <h1 class="title">
        Moto Repairs and Maintenance at a Fair Price
      </h1>
      <!-- Simple event emitted in scrollTo() that scrolls the the contact page -->
      <a @click.prevent="scrollTo()"
        ><span class="span--1">Contact us</span> to Schedule an Appointment.</a
      >
    </div>
    <div class="features__hours">
      Monday to Thursday | 8:00am 5:00pm
    </div>
    <!-- Using 2 different divs when the language switches. I could probably reduce code by adding ternary operators in each field
    but I am not sure which is more optimal -->
    <div v-if="$language === 'english'" class="features">
      <div
        v-for="(feature, index) in english.features"
        :key="index"
        class="feature"
      >
        <!-- Here is my solution for switching out the SVG icons in the for-loop. I place a new component in with the name shown in feature.icon -->
        <!-- I was able to pass the iconstyle into the svg directly :) -->
        <component :is="feature.icon" :iconStyle="'height:5rem'"></component>
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
        <component :is="feature.icon" :iconStyle="'height:5rem'"></component>
        <h4 class="heading-4">{{ feature.title }}</h4>
        <p class="feature__text">
          {{ feature.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IosKey from "./SvgIcon/Key.vue";
import IosHammer from "./SvgIcon/Hammer";
import IosBarChart from "./SvgIcon/BarChart";
import IosLock from "./SvgIcon/Lock";
import IosEarth from "./SvgIcon/Earth";
import IosHome from "./SvgIcon/Home";
export default {
  components: {
    IosKey,
    IosHammer,
    IosBarChart,
    IosLock,
    IosEarth,
    IosHome,
  },
  data() {
    return {
      text: {},
      english: {
        title: "",
        features: [
          {
            icon: "IosHammer",
            title: "Repairs and Maintenance",
            text:
              "Dai Ku Moto services nearly all makes and models of motos found here in Cambodia. If your moto isn’t working well or hasn’t been serviced recently, please give us a call to schedule an appointment and we would be happy to help!",
          },
          {
            icon: "IosBarChart",
            title: "Competitive Rates",
            text:
              "We take pride in offering our services at fair and transparent rates. At Dai Ku Moto, we are also flexible to work within your desired budget. We communicate with you throughout the repair process so that you are satisfied with the final product and the final price.",
          },
          {
            icon: "IosKey",
            title: "Sales and Purchases",
            text:
              "While repairs and maintenance are our ‘bread-and-butter,’ we do often take opportunities to buy and sell motos as well. If you are looking to purchase a moto, please contact Dai Ku Moto to see what we have available.",
          },
          {
            icon: "IosHome",
            title: "Mobile and Pickup Service",
            text:
              "Is your moto broken down at your home? Can’t get it to start? We can arrange a service call to your location for basic repairs and diagnosis of issues. We can also arrange a pickup service to haul your moto on our trailer to bring it to the Dai Ku Moto shop for repairs.",
          },
          {
            icon: "IosLock",
            title: "Safety",
            text:
              "There are many hazards on the roads, don’t let your moto be one of them! At Dai Ku Moto, we make the safety of your moto our top priority. Items such as lights, brakes, and tires are always checked to ensure safe operation, and if we find anything suspect, we will communicate that to you",
          },
          {
            icon: "IosEarth",
            title: "Friendly Service in English and Khmer",
            text:
              "It is our goal to help make your moto repair experience as pleasant as possible. We are a bilingual shop that speaks both Khmer and English, and we are happy to serve our Cambodian and expat customers with integrity.",
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
  //Creating a local variable for the language (suppose to be better to use local variables for watched values but I could be wrong)
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
//! I need Go back and clean up this scss, it's structure is messy
.icon-features {
  height: 5rem;
  width: 5rem;
}
.icon-component {
  height: 5rem;
  width: 5rem;
}
.title {
  margin: 8rem 0 2rem 0;
  font-size: 3.4rem;
  font-weight: 300;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  a {
    display: block;
    margin-top: 0.7rem;
    font-size: 2.4rem;
    text-transform: none;

    .span--1 {
      color: var(--color-primary);
      font-size: 2.4rem;
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 60rem));
  grid-template-rows: auto auto auto;
  grid-gap: 2rem;
  margin-bottom: 15rem;
  text-align: center;
  &__hours {
    display: block;
    text-align: center;
    font-weight: 300;
    font-size: 1.8rem;
    margin-top: -1rem;
  }
}
.feature {
  max-width: 55rem;
  padding: 3rem;
  &__icon {
    height: 5rem;
  }
  &__text {
    line-height: 2.3rem;
  }
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
      font-size: 1.9rem;
      margin-top: 0.7rem;

      .span--1 {
        border-bottom: 1px solid var(--color-primary);
        color: var(--color-primary);
        font-size: 1.9rem;
      }
    }
  }
}
</style>
