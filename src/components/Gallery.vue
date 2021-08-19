<template>
  <!-- // todo Add a popup for the image when it is clicked,
     // todo Possibly reduce the number of images shown on mobile -->
  <section class="gallery">
    <!-- Looping through images and giving them a class with the index of the image -->
    <figure
      v-for="(img, index) in images"
      :key="index"
      :class="'gallery__item gallery__item--' + index"
    >
      <!-- When using src on images you need to require the image instead of just passing in a string when it goes through javascript -->
      <!-- Used v-laxy-image to give a placeholder and a blur effect. Very useful -->
      <v-lazy-image
        :src="require(`@/assets/img/gallery/${img}.jpg`)"
        :src-placeholder="require(`@/assets/img/gallery/small/${img}.jpg`)"
        :alt="'Gallery image ' + index"
        class="gallery__img"
      />
    </figure>
  </section>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  components: {
    VLazyImage,
  },
  data() {
    return {
      source: "clean-work-2",
      images: [
        "clean-work-1",
        "clean-work-2",
        "cover-photo",
        "custom-paint",
        "gallery-1",
        "gallery-2",
        "gallery-3",
        "gallery-4",
        "gallery-5",
        "gallery-6",
        "gallery-7",
        "repair-2",
        "repair-3",
        "repair-4",
      ],
    };
  },
};
</script>

<style lang="scss">
.gallery {
  margin-top: 10rem;
  display: grid;
  //Created a grid tempate that fits the current amount of images I have
  grid-template: repeat(7, 5vw) / repeat(8, 1fr);

  grid-gap: 1.5rem;
  padding: 1.5rem;

  &__item {
    //Manually creating a grid for the images
    &--0 {
      grid-row: 1 / span 2;
      grid-column: 1 / span 2;
    }

    &--1 {
      grid-row: 1 / span 3;
      grid-column: 3 / span 3;
    }

    &--2 {
      grid-row: 1 / span 2;
      grid-column: 6 / 7;
    }

    &--3 {
      grid-row: 1 / span 2;
      grid-column: 7 / -1;
    }

    &--4 {
      grid-row: 3 / span 3;
      grid-column: 1 / span 2;
    }

    &--5 {
      grid-row: 4 / span 2;
      grid-column: 3 / span 2;
    }

    &--6 {
      grid-row: 4 / 5;
      grid-column: 5 / 6;
    }

    &--7 {
      grid-row: 3 / span 2;
      grid-column: 6 / span 2;
    }

    &--8 {
      grid-row: 3 / span 3;
      grid-column: 8 / -1;
    }

    &--9 {
      grid-row: 6 / span 2;
      grid-column: 1 / 2;
    }

    &--10 {
      grid-row: 6 / span 2;
      grid-column: 2 / span 2;
    }

    &--11 {
      grid-row: 6 / span 2;
      grid-column: 4 / 5;
    }

    &--12 {
      grid-row: 5 / span 3;
      grid-column: 5 / span 3;
    }

    &--13 {
      grid-row: 6 / span 2;
      grid-column: 8 / -1;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  //blur effect on loading images
  .v-lazy-image {
    filter: blur(5px);
    transition: filter 0.7s;
  }

  .v-lazy-image-loaded {
    filter: blur(0);
  }
}
</style>
