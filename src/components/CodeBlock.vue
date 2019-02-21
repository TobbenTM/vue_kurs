<template>
  <div class="code-block">
    <codemirror
      class="code-block__mirror"
      :code="filteredCode"
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
    scriptOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
    templateOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    filteredCode() {
      if (this.scriptOnly) {
        const matches = /<script>((?:.|\n|\r)*)<\/script>/gm.exec(this.code);
        return matches ? matches[1].trim() : this.code;
      }
      if (this.templateOnly) {
        const matches = /<template>((?:.|\n|\r)*)<\/template>/gm.exec(this.code);
        return matches ? matches[1].trim() : this.code;
      }
      return this.code;
    },
  },
};
</script>

<style lang="scss">
.code-block {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &__mirror {
    padding: 1em;
    background: #263238;
    border-radius: .3em;
    overflow: hidden;
    box-shadow: 0 0.1em 0.5em rgba(0, 0, 0, .4);

    .CodeMirror {
      height: auto;
      text-align: left;

      pre {
        font-family: 'Fira Code';
        font-variant-ligatures: contextual;
        font-size: .9em;
      }
    }
  }
}
</style>
