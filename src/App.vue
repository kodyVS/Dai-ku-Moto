<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./pages/Main";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap");

//Chose Open sans as the main font and sans-serif as the background
//Font smoothing is standard I think?
// Set the default text color in the app with the almost black color
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: var(--color-text);
  background-color: #e6e6e6;
}

// I reduce the font-size for smaller screens so that also reduces the size of everything in rem
@media only screen and (max-width: 1020px) {
  html {
    font-size: 55%;
  }
}
</style>
