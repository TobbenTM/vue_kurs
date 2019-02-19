<template>
  <img :src="src" :style="verticalScrollStyle"/>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    verticalScrollStyle() {
      return {
        top: `${-this.offset}px`,
        position: 'absolute',
        maxHeight: 'initial',
      };
    },
    maxOffset() {
      return this.$el.offsetHeight - window.innerHeight;
    },
  },
  data() {
    return {
      offset: 0,
    };
  },
  mounted() {
    document.addEventListener('keyup', this.handleKeyup, true);
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.handleKeyup);
  },
  methods: {
    handleKeyup(event) {
      if (event.defaultPrevented) return;

      switch (event.key) {
        case 'ArrowUp':
          if (this.offset > 0) {
            this.offset -= 200;
          }
          break;
        case 'ArrowDown':
          if (this.offset < this.maxOffset) {
            this.offset = Math.min(this.offset + 200, this.maxOffset);
          }
          break;
        default:
          return;
      }

      event.preventDefault();
    },
  },
};
</script>

