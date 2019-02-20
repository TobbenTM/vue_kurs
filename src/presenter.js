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
    this.currentIndex = parseInt(localStorage.getItem('index') || '0');
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
  watch: {
    currentIndex(newIndex) {
      localStorage.setItem('index', newIndex.toString());
    },
  },
  methods: {
    handleKeyup(event) {
      if (event.defaultPrevented) return;

      switch (event.key) {
        case 'ArrowRight':
        case 'PageDown':
          this.moveNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          this.movePrev();
          break;
        case 'Home':
          this.moveTo(0);
          break;
        case 'End':
          this.moveTo(this.maxSlides-1);
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
    moveTo(index) {
      this.transition = index < this.currentIndex ? 'slide-left' : 'slide-right';
      this.currentIndex = index;
      this.emitProgress();
    },
    emitProgress() {
      this.$emit('progress', (this.currentIndex + 1) * 100 / this.maxSlides);
    },
  },
};
