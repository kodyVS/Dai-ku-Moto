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
    <title>Bar Chart</title>
    <path
      d="M32 32v432a16 16 0 0016 16h432"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <rect
      x="96"
      y="224"
      width="80"
      height="192"
      rx="20"
      ry="20"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <rect
      x="240"
      y="176"
      width="80"
      height="240"
      rx="20"
      ry="20"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <rect
      x="383.64"
      y="112"
      width="80"
      height="304"
      rx="20"
      ry="20"
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
