<template>
  <div class="component">
    <!-- Vi kan også binde mot attributter -->
    <a v-bind:href="url">Link til {{ url }}</a><br/>
    <a :href="url">Link til {{ url }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://nærd.no',
    };
  },
};
</script>