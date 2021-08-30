<template>
  <!-- Very basic footer -->
  <div class="footer-section">
    <img src="../assets/img/Favicon-no-text-3.png" class="footer__logo" />
    <div class="footer__text">
      <p>Find us on</p>
    </div>

    <div class="footer__social">
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
    <button
      @click.prevent="$emit('scrollTo', 'link-about-us')"
      id="footer-button"
      class="btn btn-full"
    >
      Back to Top
    </button>
    <div class="footer__author">
      <p class="year"><i>@2021 Designed by Kody Van Sloten </i></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer-section {
  margin-top: 20rem;
  background-color: rgb(31, 31, 31);
  box-shadow: 0px -1px 1px rgb(24, 24, 24);
  color: rgb(236, 236, 236);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1rem;
}
.links {
}
#footer-button {
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  grid-column: 1 / -1;
  justify-self: center;
  margin: 0;
}
.footer {
  &__social {
    grid-column: 1 / -1;
    text-align: end;

    .icon {
      height: 4rem;
      width: 4rem;
    }
    .icon__telegram {
      margin-right: 1rem;
    }
  }
  &__text {
    grid-column: 1 /-1;
    text-align: center;
    align-self: flex-start;
  }
  &__logo {
    grid-column: 1 /-1;
    justify-self: center;
    height: 7rem;
    width: 7rem;
    padding-top: 2rem;
  }
  &__hours {
    grid-column: 1 /-1;
    text-align: center;
  }
  &__author {
    grid-column: 1 / -1;
    justify-self: end;
    margin-right: 3rem;
  }
}
</style>
