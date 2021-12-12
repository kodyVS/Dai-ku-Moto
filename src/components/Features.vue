<template>
  <div class="features-section">
    <div class="title">
      <h1 v-if="$language === 'english'" class="title">
        {{ english.title }}
      </h1>
      <h1 v-else class="title">
        {{ khmer.title }}
      </h1>
      <!-- Simple event emitted in scrollTo() that scrolls the the contact page -->
      <a v-if="$language === 'english'" @click.prevent="scrollTo()"
        ><span class="span--1">Call</span> to Schedule an Appointment.</a
      >
      <a v-else @click.prevent="scrollTo()"
        ><span class="span--1"
          >សូមទំនាក់ទំនងមកកាន់យើងខ្ញុំដើម្បីធ្វើការណាត់ជួប</span
        >
      </a>
    </div>
    <div v-if="$language === 'english'" class="features__hours">
      Monday to Thursday | 8:00am 5:00pm
    </div>

    <div v-else class="features__hours">
      ថ្ងៃច័ន្ទ ដល់ ថ្ងៃព្រហស្បតិ៍ ម៉ោង ៨ ព្រឹកដល់ ៥ ល្ងាច
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
        title: "Quality Moto Repairs and Maintenance at a Fair Price",
        features: [
          {
            icon: "IosHammer",
            title: "Repairs and Maintenance",
            text:
              "Dai Ku Moto services nearly all makes and models of motos found here in Cambodia. Our goal is to keep your motorcycle running great so you can ride with confidence. Please give us a call to schedule an appointment and we would be happy to help!",
          },
          {
            icon: "IosBarChart",
            title: "Competitive Rates",
            text:
              "We take pride in offering our services at fair rates. At Dai Ku Moto, we are also flexible to work within your desired budget.",
          },
          {
            icon: "IosKey",
            title: "Sales and Purchases",
            text:
              "We also buy and sell motos. If you are looking to purchase a moto, please contact Dai Ku Moto to see what we have available. ",
          },
          {
            icon: "IosHome",
            title: "Mobile and Pickup Service",
            text:
              "Is your moto broken down at your home or workplace? Can’t get it to start? We can arrange a service call to your location for basic repairs and diagnosis of issues. We can also arrange a pickup service to haul your moto on our trailer to bring it to the Dai Ku Moto shop for repairs.",
          },
          {
            icon: "IosLock",
            title: "Safety",
            text:
              "There are many hazards on the roads, don’t let your moto be one of them! At Dai Ku Moto, we make the safety of your moto our top priority.",
          },
          {
            icon: "IosEarth",
            title: "Friendly Service in English and Khmer",
            text:
              "It is our goal to help make your moto repair experience as pleasant as possible. We are a bilingual shop that speaks both Khmer and English, and we are happy to serve our Cambodian and expat customers with integrity. ",
          },
        ],
      },
      khmer: {
        title: "ជួសជុល​ និងថែទាំម៉ូតូដែលមានគុណភាពក្នុងតម្លៃសមរម្យ",
        features: [
          {
            icon: "IosHammer",
            title: "ការជួសជុល និងការថែទាំ",
            text:
              "សេវាកម្មដៃគូម៉ូតូជួសជុលស្ទើរតែគ្រប់ប្រភេទម៉ូតូទាំងអស់ដែលមាននៅក្នុងប្រទេសកម្ពុជា។ គោលដៅរបស់យើង​​ខ្ញំុគឺធ្វើឱ្យម៉ូតូរបស់អ្នកដំណើរការល្អ ដូច្នេះអ្នកអាចជិះវាដោយមានទំនុកចិត្ត។ សូមទូរស័ព្ទមកយើងដើម្បីកំណត់ពេលណាត់ជួប ហើយយើងរីករាយនឹងជួយដល់អ្នក!",
          },
          {
            icon: "IosBarChart",
            title: "តម្លៃសមរម្យតាមទីផ្សារ",
            text:
              "យើងមានមោទនភាពក្នុងការផ្តល់ជូនសេវាកម្មរបស់យើងក្នុងតម្លៃសមរម្យ។ នៅដៃគូម៉ូតូយើងក៏មានភាពបត់បែនក្នុងការធ្វើការទៅតាមថវិកាដែលអ្នកចង់ចំណាយ។",
          },
          {
            icon: "IosKey",
            title: "ការលក់ និងការទិញ",
            text:
              "យើងក៏ទិញ និងលក់ម៉ូតូផងដែរ។ ប្រសិនបើអ្នកកំពុងចង់រកទិញម៉ូតូ សូមទាក់ទងមកពួកយើងដើម្បីដឹងថាយើងមានម៉ូតូអ្វីខ្លះ។",
          },
          {
            icon: "IosHome",
            title: "សេវាកម្មតាមទូរស័ព្ទ និងការទៅទទួលយក",
            text:
              "តើម៉ូតូរបស់អ្នកខូចនៅផ្ទះ ឬនៅកន្លែងធ្វើការរបស់អ្នកមែនទេ? មិនអាចធ្វើឱ្យម៉ាសុីនដំណើរការបានមែនទេ? យើងអាចរៀបចំសេវាកម្មការហៅតាមទូរស័ព្ទ​ដើម្បីយើងអាចទៅកាន់ទីតាំងរបស់អ្នកសម្រាប់ការជួសជុលបឋម និងការពិនិត្យមើលលើបញ្ហាដែលមាន។ យើងក៏អាចរៀបចំសេវាកម្មទៅយកម៉ូតូរបស់អ្នកតាមរ៉ឺម៉ករបស់យើងដើម្បីយកវាទៅហាងដៃគូម៉ូតូដើម្បីជួសជុល។",
          },
          {
            icon: "IosLock",
            title: "សុវត្ថិភាព",
            text:
              "មានគ្រោះថ្នាក់ជាច្រើននៅលើដងផ្លូវដែលបណ្ដាលមកពីបញ្ហាម៉ូតូ សូមកុំអោយម៉ូតូអ្នកស្ថិតក្នុងចំណោមម៉ូតូទាំងនោះ។ យើងរក្សាម៉ូតូរបស់អ្នកឱ្យដំណើរការល្អ និងមានសុវត្ថិភាពនៅលើដងផ្លូវ! នៅដៃគូម៉ូតូ សុវត្ថិភាពរបស់អ្នក និងម៉ូតូរបស់អ្នក គឺជាអាទិភាពចម្បងរបស់យើង។",
          },
          {
            icon: "IosEarth",
            title:
              "បម្រើសេវាកម្មដោយភាពរួសរាយរាក់ទាក់ជាភាសាអង់គ្លេស និងភាសាខ្មែរ",
            text:
              "គោលដៅរបស់យើងគឺជួយឱ្យអ្នករីករាយជាមួយបទពិសោធន៍នៃការជួសជុលម៉ូតូរបស់អ្នកតាមដែលយើងអាចធ្វើបាន។ នៅហាងរបស់យើង អាចនិយាយបានពីរភាសា ទាំងភាសាខ្មែរ និងភាសាអង់គ្លេស ហើយយើងរីករាយក្នុងការបម្រើអតិថិជនរបស់យើងទាំងជនជាតិខ្មែរ និងជនជាតិបរទេសដោយសុចរិតភាព។",
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
