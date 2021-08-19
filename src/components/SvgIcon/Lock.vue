<template>
  <!-- Made SVG Icons to import as a component so I could use the <component></component> to render them into the vue file
    I thought about using a package for this but this allows me to choose what ever SVG I want from whatever package 
    Allows me to input the svg icon through javascript instead of xlink:href
    Also allows me to bind a prop's to whatever class I want to change on the svg or the path, total customization of icons -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="ionicon"
    :style="iconStyle"
    viewBox="0 0 512 512"
  >
    <title>Lock Closed</title>
    <path
      d="M336 208v-95a80 80 0 00-160 0v95"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <rect
      x="96"
      y="208"
      width="320"
      height="272"
      rx="48"
      ry="48"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
</template>
<script>
export default {
  props: ["iconStyle"],
};
</script>
<style lang="scss">
.ionicon {
  & > * {
    stroke-width: 4%;
  }
}
</style>
