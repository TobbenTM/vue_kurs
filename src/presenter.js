export default {
  render: function(createElement) {
    return createElement(
      'transition',
      { attrs: { name: this.transition } },
      [createElement('keep-alive', [this.currentSlide])]
    );
  },
  computed: {
    maxSlides() {
      return this.$slots.default.length;
    },
    currentSlide() {
      // We need to set the key if we're going to transition
      //           between identical components
      const slide = this.$slots.default[this.currentIndex];
      slide.key = `slide-${this.currentIndex}`;
      return slide;
    }
  },
  created() {
  },
  data() {
    return {
      currentIndex: 0,
      transition: null,
    };
  },
  mounted() {
    document.addEventListener('keyup', this.handleKeyup, true);
    this.emitProgress();
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.handleKeyup);
  },
  methods: {
    handleKeyup(event) {
      if (event.defaultPrevented) return;

      switch (event.key) {
        case 'ArrowRight':
          this.moveNext();
          break;
        case 'ArrowLeft':
          this.movePrev();
          break;
        default:
          return;
      }

      event.preventDefault();
    },
    moveNext() {
      if (this.currentIndex < this.maxSlides - 1) {
        this.transition = 'slide-right';
        this.currentIndex += 1;
        this.emitProgress();
      }
    },
    movePrev() {
      if (this.currentIndex > 0) {
        this.transition = 'slide-left';
        this.currentIndex -= 1;
        this.emitProgress();
      }
    },
    emitProgress() {
      this.$emit('progress', (this.currentIndex + 1) * 100 / this.maxSlides);
    },
  },
};
