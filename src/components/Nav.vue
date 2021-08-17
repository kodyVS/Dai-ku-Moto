<template>
  <!-- Section for nav -->
  <div class="nav-section">
    <!-- ************************ -->
    <!-- *****MOBILE NAVIGATION***** -->
    <!-- ************************** -->
    <nav class="mobile-nav">
      <!-- Toggle button for menu ONLY SHOWN WHEN MOBILE NAV IS ACTIVE -->
      <div class="nav-top">
        <a @click.prevent="toggleMenu()" href="#" class="nav-toggle">
          <svg class="icon__menu">
            <use
              xlink:href="../assets/img/icons/menu-outline.svg#menu"
            ></use></svg
        ></a>
        <ul class="nav__social">
          <li class="nav__social__icon">
            <a
              @click="scrollTo($event)"
              href="https://www.facebook.com/daikumoto"
              target="_blank"
            >
              <svg class="icon icon__facebook">
                <use
                  xlink:href="../assets/img/icons/logo-facebook.svg#facebook"
                ></use></svg
            ></a>
          </li>
          <li class="nav__social__icon">
            <a href="#">
              <svg class="icon icon__whatsapp">
                <use
                  xlink:href="../assets/img/icons/logo-whatsapp.svg#whatsapp"
                ></use></svg
            ></a>
          </li>
          <li class="nav__social__icon">
            <a href="#">
              <svg class="icon icon__telegram">
                <use
                  xlink:href="../assets/img/icons/telegram.svg#telegram"
                ></use></svg
            ></a>
          </li>
        </ul>
      </div>
      <Drawer @close="toggleMenu()" align="left" :closeable="true">
        <div v-if="navToggle" class="drawer">
          <ul class="mobile-nav__links">
            <li
              class="mobile-nav__list-item"
              v-for="(link, index) in text.links"
              :key="index"
              @click="toggleMenu()"
            >
              <a
                @click.prevent="scrollTo($event)"
                class="mobile-nav__link"
                :id="'link-' + link.id"
                >{{ link.text }}</a
              >
            </li>
          </ul>
          <p class="mobile-nav__hours">
            Open Monday-Thurday <br />
            9:00am to 5:00pm
          </p>
          <a href="tel:+62896706255135" class="mobile-nav__phone-number">
            {{ text.number }}</a
          >
          <div class="mobile-nav__social-icons">
            <ul class="nav__social">
              <li class="nav__social__icon">
                <a
                  @click="scrollTo($event)"
                  href="https://www.facebook.com/daikumoto"
                  target="_blank"
                >
                  <svg class="icon icon__facebook">
                    <use
                      xlink:href="../assets/img/icons/logo-facebook.svg#facebook"
                    ></use></svg
                ></a>
              </li>
              <li class="nav__social__icon">
                <a href="#">
                  <svg class="icon icon__whatsapp">
                    <use
                      xlink:href="../assets/img/icons/logo-whatsapp.svg#whatsapp"
                    ></use></svg
                ></a>
              </li>
              <li class="nav__social__icon">
                <a href="#">
                  <svg class="icon icon__telegram">
                    <use
                      xlink:href="../assets/img/icons/telegram.svg#telegram"
                    ></use></svg
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </nav>

    <!-- ************************  -->
    <!-- *****DESKTOP NAVIGATION***** -->
    <!-- ************************** -->

    <nav class="nav">
      <!-- Image shown -->
      <img src="../assets/img/Favicon-no-text-3.png" alt="" class="nav__logo" />

      <!-- Links rendered from links object. -->
      <ul class="nav__links">
        <li
          class="nav__list-item"
          v-for="(link, index) in text.links"
          :key="index"
        >
          <a
            @click.prevent="scrollTo($event)"
            class="nav__link"
            :id="'link-' + link.id"
            >{{ link.text }}</a
          >
        </li>
      </ul>

      <!-- Currently only displaying the phone number with a link to phone app -->
      <div class="nav__information">
        <a href="tel:+62896706255135" class="nav__phone-number">{{
          text.number
        }}</a>
        <!-- <p class="nav__hours">8:00 to 5:00pm Monday-Thursday</p> -->
      </div>

      <!-- Social Icons svg -->
      <ul class="nav__social">
        <li class="nav__social__icon">
          <a
            @click="scrollTo($event)"
            href="https://www.facebook.com/daikumoto"
            target="_blank"
          >
            <svg class="icon icon__facebook">
              <use
                xlink:href="../assets/img/icons/logo-facebook.svg#facebook"
              ></use></svg
          ></a>
        </li>
        <li class="nav__social__icon">
          <a href="#">
            <svg class="icon icon__whatsapp">
              <use
                xlink:href="../assets/img/icons/logo-whatsapp.svg#whatsapp"
              ></use></svg
          ></a>
        </li>
        <li class="nav__social__icon">
          <a href="#">
            <svg class="icon icon__telegram">
              <use
                xlink:href="../assets/img/icons/telegram.svg#telegram"
              ></use></svg
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
export default {
  data() {
    return {
      mobileDisplay: true,
      navToggle: false,
      text: {},
      english: {
        links: [
          {
            text: "Home",
            id: "home",
          },
          {
            text: "About us",
            id: "about-us",
          },
          {
            text: "Testimonials",
            id: "testimonials",
          },
          {
            text: "Gallery",
            id: "gallery",
          },
          {
            text: "Contact us",
            id: "contact-us",
          },
        ],
        number: "+447123456789",
      },
      khmer: {
        links: [
          {
            text: "asdf",
            id: "home",
          },
          {
            text: "asdf",
            id: "about-us",
          },
          {
            text: "asdf",
            id: "testimonials",
          },
          {
            text: "asdf",
            id: "gallery",
          },
          {
            text: "asdf",
            id: "contact-us",
          },
        ],
        number: "+999999999",
      },
      menuDisplay: true,
    };
  },
  components: {
    Drawer,
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
    //Method that scrolls to the location of the link that is pressed
    scrollTo(event) {
      this.$emit("scrollTo", event.target.id);
    },
    //Toggles if the menu is displayed
    toggleMenu() {
      this.navToggle = !this.navToggle;
    },
  },
};
</script>
<style lang="scss">
.nav-section {
  overflow: hidden;
}
//MOBILE - Toggle button for the mobile menu
.mobile-nav {
  visibility: hidden;
}
.nav-top {
  position: fixed;
  background-color: rgb(20, 20, 20);
  box-shadow: 0 2px 2px rgb(22, 22, 22);
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
}
.nav-toggle {
  color: #fff;
  top: 1.1rem;
  left: 1.4rem;
}
.icon__menu {
  height: 5rem;
  width: 5rem;
}
.drawer {
  display: grid;
  grid-template-rows: 3.5fr 1fr 0.5fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  .icon {
    height: 5rem;
    width: 5rem;
    padding: 1rem;
    &__telegram {
      margin-right: 0;
    }
  }
}
.mobile-nav {
  &__links {
    list-style-type: none;
    font-size: 3rem;
  }
  &__link {
    margin-top: 2.5rem;
    display: block;
    cursor: pointer;
    &:hover {
      filter: brightness(0.5);
    }
  }
  &__phone-number {
    font-size: 2.3rem;
    text-decoration: none;
    color: var(--color-primary);
  }
  &__hours {
    font-size: 1.6rem;
  }
}

//DESKTOP - navigation bar
.nav {
  height: 5rem;
  width: 100%;
  background-color: rgb(22, 22, 22);
  box-shadow: 0 2px 2px rgb(22, 22, 22);
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-primary);
  transition: all 1s;
  font-size: 1.6rem;
  &__phone-number {
    text-decoration: none;
    color: var(--color-primary);
    transition: color 0.3s;
    &:hover {
      color: rgb(223, 223, 223);
    }
  }
  &__logo {
    height: 5rem;
    margin-left: 1rem;
  }
  &__list-item {
    margin-left: 3rem;
  }
  //Styles for the links that will change when on hover/visited
  &__links {
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1.7rem;
    cursor: pointer;
  }
  &__link,
  &__link:link,
  &__link:visited {
    text-decoration: none;
    color: rgb(223, 223, 223);
  }
  &__link:hover,
  &__link:active {
    transform: translateX(10px);
    filter: brightness(0.5);
    transition: all 0.2s;
  }

  &__link::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 0%;
    padding-top: 4px;
    border-bottom: rgba(223, 233, 223) solid 1px;
    transition: all 0.2s;
  }
  &__link:hover::after {
    padding-top: 8px;
    width: 70%;
  }

  //Social Icons

  //box for the social icons
  &__social {
    list-style: none;
    display: flex;
    justify-content: center;
  }
}
.icon {
  height: 3rem;
  width: 3rem;
  fill: rgb(223, 223, 223);
  margin-left: 1rem;
  transition: all 0.2s ease-in;
  filter: brightness(0.7);
  &:hover {
    filter: brightness(1);
    transform: scale(1.2);
  }
  &__facebook {
    fill: #4267b2;
  }
  &__whatsapp {
    fill: #25d366;
  }
  &__telegram {
    fill: #0088cc;
    margin-right: 4rem;
  }
}
@media only screen and (max-width: 1020px) {
  .mobile-nav {
    visibility: visible;
  }
  .nav {
    visibility: hidden;
  }
}
</style>
