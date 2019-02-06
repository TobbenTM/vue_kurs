<template>
  <div class="progress" :style="{ width: `${this.progress}%` }"></div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #cf122d;
  box-shadow: 0 0 10px #cf122d;
  transition: width .4s ease-in-out;
}
</style>
