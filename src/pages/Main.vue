<template>
  <!-- Created a main page to put the individual components into, I could have done this in app but I figured it was better practice this way so I could add another page in the future if I wanted to -->
  <div class="container">
    <!-- Nav emits scrolling events which I send to the reference of these elements. I used javascript instead of basic html/css since I needed to manually adjust the scroll positions down and up from where it was scrolling  -->
    <Nav @scrollTo="scrollToId($event)" />
    <div class="content">
      <Header
        @scrollTo="scrollToId($event)"
        class="header"
        id="home"
        ref="home"
      />
      <!-- Features and about-us point to the same area, just have different names -->
      <Features @scrollTo="scrollToId($event)" ref="features" />
      <Testimonials ref="testimonials" />
      <Gallery ref="gallery" />
      <Contact ref="contact-us" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Header from "../components/Header";
import Features from "../components/Features.vue";
import Gallery from "../components/Gallery.vue";
import Testimonials from "../components/Testimonials.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
// Needed to import vue to set up a new observable
import Vue from "vue";
export default {
  components: {
    Nav,
    Header,
    Features,
    Gallery,
    Testimonials,
    Contact,
    Footer,
  },
  data() {
    return {};
  },
  created() {
    //sets the language to default "english" when app is created
    this.setLanguage();
  },
  methods: {
    //Set's language and creates an observable that we can use in other components to switch between english and khmer
    setLanguage() {
      // I set an observable on the vue instance called language and set it to its default value english
      const language = Vue.observable({ language: "english" });
      //I define 2 prototypes on the language observable, a get property and a set property,
      //This allows me to listen to the observable and get its value and also change the value of the observable
      // The reason i did this method over adding vuex is it was just one global variable I needed, it seemed heavy to add vuex for that
      Object.defineProperty(Vue.prototype, "$language", {
        get() {
          return language.language;
        },

        set(value) {
          language.language = value;
        },
      });
    },
    //Emitted an event when the navigation was clicked in the child components, used boundingClient react to get the value of the height, then used the height of the body to always get the needed height
    //This was used to allow me to still reference the component to where I am scrolling but adjust the location of the scroll based off the component not just a pages y value
    // If there is a better way please share

    scrollToId(event) {
      let location = "";
      const bodyRect = document.body.getBoundingClientRect().top;
      switch (event) {
        case "link-home":
          location = this.$refs.home.$el.getBoundingClientRect().top - bodyRect;
          break;

        case "link-about-us":
          location =
            this.$refs.features.$el.getBoundingClientRect().top - bodyRect - 20;
          break;

        case "link-testimonials":
          location =
            this.$refs.testimonials.$el.getBoundingClientRect().top -
            bodyRect -
            20;
          break;

        case "link-gallery":
          location =
            this.$refs.gallery.$el.getBoundingClientRect().top - bodyRect - 100;
          break;

        case "link-contact-us":
          location =
            this.$refs["contact-us"].$el.getBoundingClientRect().top -
            bodyRect -
            30;
          break;
      }
      window.scrollTo(0, location);
    },
  },
};
</script>

<style lang="scss">
// Setting the default font-size back to 16 pixels, but allows for 1rem=10px
.content {
  font-size: 1.6rem;
  //Created a grid for the content, this was not needed but it made the lay out easier during build
  display: grid;
  grid-template-rows: 100vh repeat(5, auto);
  grid-row-gap: 0;
}
</style>
