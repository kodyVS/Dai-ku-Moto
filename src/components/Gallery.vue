<template>
  <section class="gallery">
    <figure class="gallery__item gallery__item--2">
      <img
        src="../assets/img/gallery/clean-work-2.jpg"
        alt="Gallery image 2"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--1">
      <img
        src="../assets/img/gallery/clean-work-1.jpg"
        alt="Gallery image 1"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--3">
      <img
        src="../assets/img/gallery/custom-paint.jpg"
        alt="Gallery image 3"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--4">
      <img
        src="../assets/img/gallery/repair.jpg"
        alt="Gallery image 4"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--5">
      <img
        src="../assets/img/gallery/repair-2.jpg"
        alt="Gallery image 5"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--6">
      <img
        src="../assets/img/gallery/repair-3.jpg"
        alt="Gallery image 6"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--7">
      <img
        src="../assets/img/gallery/repair-4.jpg"
        alt="Gallery image 7"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--8">
      <img
        src="../assets/img/gallery/gallery-1.jpg"
        alt="Gallery image 8"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--9">
      <img
        src="../assets/img/gallery/gallery-2.jpg"
        alt="Gallery image 9"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--10">
      <img
        src="../assets/img/gallery/gallery-3.jpg"
        alt="Gallery image 10"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--11">
      <img
        src="../assets/img/gallery/gallery-4.jpg"
        alt="Gallery image 11"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--12">
      <img
        src="../assets/img/gallery/gallery-5.jpg"
        alt="Gallery image 12"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--13">
      <img
        src="../assets/img/gallery/gallery-6.jpg"
        alt="Gallery image 13"
        class="gallery__img"
      />
    </figure>
    <figure class="gallery__item gallery__item--14">
      <img
        src="../assets/img/gallery/gallery-7.jpg"
        alt="Gallery image 14"
        class="gallery__img"
      />
    </figure>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.gallery {
  margin-top: 10rem;
  display: grid;
  /*grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 5vw);*/
  grid-template: repeat(7, 5vw) / repeat(8, 1fr);

  grid-gap: 1.5rem;
  padding: 1.5rem;

  &__item {
    &--1 {
      grid-row: 1 / span 2;
      grid-column: 1 / span 2;
    }

    &--2 {
      grid-row: 1 / span 3;
      grid-column: 3 / span 3;
    }

    &--3 {
      grid-row: 1 / span 2;
      grid-column: 6 / 7;
    }

    &--4 {
      grid-row: 1 / span 2;
      grid-column: 7 / -1;
    }

    &--5 {
      grid-row: 3 / span 3;
      grid-column: 1 / span 2;
    }

    &--6 {
      grid-row: 4 / span 2;
      grid-column: 3 / span 2;
    }

    &--7 {
      grid-row: 4 / 5;
      grid-column: 5 / 6;
    }

    &--8 {
      grid-row: 3 / span 2;
      grid-column: 6 / span 2;
    }

    &--9 {
      grid-row: 3 / span 3;
      grid-column: 8 / -1;
    }

    &--10 {
      grid-row: 6 / span 2;
      grid-column: 1 / 2;
    }

    &--11 {
      grid-row: 6 / span 2;
      grid-column: 2 / span 2;
    }

    &--12 {
      grid-row: 6 / span 2;
      grid-column: 4 / 5;
    }

    &--13 {
      grid-row: 5 / span 3;
      grid-column: 5 / span 3;
    }

    &--14 {
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
}
</style>
