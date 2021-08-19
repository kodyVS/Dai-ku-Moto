<template>
  <!-- Made SVG Icons to import as a component so I could use the <component></component> to render them into the vue file
    I thought about using a package for this but this allows me to choose what ever SVG I want from whatever package 
    Allows me to input the svg icon through javascript instead of xlink:href
    Also allows me to bind a prop's to whatever class I want to change on the svg or the path, total customization of icons -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :style="iconStyle"
    class="ionicon"
    viewBox="0 0 512 512"
  >
    <title>Trophy</title>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M176 464h160M256 464V336M384 224c0-50.64-.08-134.63-.12-160a16 16 0 00-16-16l-223.79.26a16 16 0 00-16 15.95c0 30.58-.13 129.17-.13 159.79 0 64.28 83 112 128 112S384 288.28 384 224z"
    />
    <path
      d="M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="18"
    />
  </svg>
</template>
<script>
export default {
  props: ["iconStyle"],
};
</script>
