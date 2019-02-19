<template>
  <div class="component">
    <!-- Alt innenfor krøllparantesen blir evaluert -->
    {{ userMessage }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMessage: 'Hello Vue!',
    };
  },
};
</script>