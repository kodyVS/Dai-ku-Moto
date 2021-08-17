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

//VARIABLES
:root {
  --color-text: #242424;
  --color-primary: #d35a02;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: var(--color-text);
  background-color: #e6e6e6;
}
</style>
