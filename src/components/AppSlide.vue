<template>
  <div class="slide">
    <img src="../assets/2s_stamp.png" class="slide__stamp">

    <div class="slide__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
};
</script>

<style lang="scss" scoped>
.slide {
  height: 100%;
  width: 100%;
  max-height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  &__stamp {
    position: absolute;
    top: 0;
    left: 0;
    width: 3.5%;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h1, h2, h3, h4, p {
      display: block;
      width: 100%;
    }

    p {
      margin: 0;
    }

    a {
      text-decoration: underline;
      color: inherit;

      &:visited {
        color: inherit;
      }
    }

    img {
      max-width: 80%;
      max-height: 90%;
    }

    img.half {
      max-width: 40%;
      max-height: 90%;
      padding: 2em;
    }
    
    ul {
      text-align: left;
      display: block;
    }

    ul.half {
      max-width: 40%;
      display: inline;
    }

    li {
      padding: .3em 0;
    }
  }
}
</style>
