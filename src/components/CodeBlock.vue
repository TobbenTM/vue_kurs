<template>
  <div class="code-block">
    <codemirror
      class="code-block__mirror"
      :code="code"
      :options="{
        mode: lang,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      required: false,
      default: 'text/x-vue',
    },
  },
};
</script>

<style lang="scss">
.code-block {
  width: 100%;
  display: flex;
  justify-content: center;

  &__mirror {
    padding: 1em;
    background: #263238;
    border-radius: .3em;
    overflow: hidden;
    box-shadow: 0 0.1em 0.5em rgba(0, 0, 0, .4);

    .CodeMirror {
      height: auto;
      text-align: left;
      
      &-sizer {
        // padding: 1em;
      }
    }
  }
}
</style>
