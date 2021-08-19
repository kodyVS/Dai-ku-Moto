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
    <title>Ribbon</title>
    <circle
      cx="256"
      cy="160"
      r="128"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      d="M143.65 227.82L48 400l86.86-.42a16 16 0 0113.82 7.8L192 480l88.33-194.32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      d="M366.54 224L464 400l-86.86-.42a16 16 0 00-13.82 7.8L320 480l-64-140.8"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <circle
      cx="256"
      cy="160"
      r="64"
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
