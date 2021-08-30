<template>
  <!-- Made SVG Icons to import as a component so I could use the <component></component> to render them into the vue file
    I thought about using a package for this but this allows me to choose what ever SVG I want from whatever package 
    Allows me to input the svg icon through javascript instead of xlink:href
    Also allows me to bind a prop's to whatever class I want to change on the svg or the path, total customization of icons -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="ionicon"
    viewBox="0 0 512 512"
    :style="iconStyle"
  >
    <title>Location</title>
    <path
      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <circle
      cx="256"
      cy="192"
      r="48"
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
