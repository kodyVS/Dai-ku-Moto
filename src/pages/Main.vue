<template>
  <div class="container">
    <Nav @scrollTo="scrollToId($event)" />
    <div class="content">
      <Header
        @scrollTo="scrollToId($event)"
        class="header"
        id="home"
        ref="home"
      />
      <Features @scrollTo="scrollToId($event)" id="about-us" ref="features" />
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
    return {
      language: "English",
    };
  },
  created() {
    this.setLanguage();
  },
  methods: {
    //Set language
    setLanguage() {
      const language = Vue.observable({ language: "english" });
      Object.defineProperty(Vue.prototype, "$language", {
        get() {
          return language.language;
        },

        set(value) {
          language.language = value;
        },
      });
      //Vue.prototype.$language = "khmer";
    },
    //Emitted an event when the navigation was clicked, used boundingClient react to get the value of the height, then used the height of the body to always get the needed height
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
          console.log(this.$refs.gallery);
          location =
            this.$refs.gallery.$el.getBoundingClientRect().top - bodyRect - 100;
          break;

        case "link-contact-us":
          location =
            this.$refs["contact-us"].$el.getBoundingClientRect().top - bodyRect;
          break;
      }
      console.log(location);
      window.scrollTo(0, location);
    },
  },
};
</script>

<style lang="scss">
.content {
  font-size: 1.6rem;
  display: grid;
  grid-template-rows: 100vh repeat(5, auto);
  grid-row-gap: 0;
}

/* -----BUTTONS ----- */
.btn,
.btn:link,
.btn:visited,
input[type="submit"] {
  display: inline-block;
  padding: 10px 30px;
  text-decoration: none;
  font-size: 1.7rem;
  font-family: "Open sans";
  border-radius: 200px;
  transition: background-color 0.3s, border 0.3s, color 0.2s;
  cursor: pointer;
  border: none;
}
.btn-full,
.btn-full:link,
.btn-full:visited,
input[type="submit"] {
  border: 1px solid var(--color-primary);
  background-color: #1a1919;
  color: rgb(231, 230, 230);
  margin-right: 15px;
}
.btn:hover,
.btn:active,
input[type="submit"]:hover,
input[type="submit"]:active {
  background-color: #b35f15;
}
</style>
