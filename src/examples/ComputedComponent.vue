<template>
  <div class="component">
    {{ rawValue }} | {{ computedValue }} <br/>
    <button v-on:click="rawValue += 1">Level up!</button>
  </div>
</template>

<script>
export default {
  computed: {
    computedValue() {
      return this.rawValue * this.rawValue;
    },
  },
  data() {
    return {
      rawValue: 3,
    };
  },
};
</script>