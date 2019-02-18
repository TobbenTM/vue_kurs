<template>
  <div class="slide">
    <img src="../assets/2s_stamp.png" class="slide__stamp">

    <div class="slide__content">
      <slot></slot>
      <code-block v-if="$slots['code']">
        <slot name="code"></slot>
      </code-block>
    </div>
  </div>
</template>

<script>
import CodeBlock from './CodeBlock';

export default {
  components: {
    CodeBlock,
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
    width: 4%;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h1 {
      display: block;
      width: 100%;
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
    }

    li {
      padding: .3em 0;
    }
  }
}
</style>
