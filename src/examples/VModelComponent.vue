<template>
  <div class="component">
    <!--
      På denne komponenten kan man bruke v-model
            for to-veis kommunikasjon!
    -->
  </div>
</template>

<script>
export default {
  props: [
    'value',
  ],
  data() {
    return {
      inputValue: null,
    };
  },
};
</script>