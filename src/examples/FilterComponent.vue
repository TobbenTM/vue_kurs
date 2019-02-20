<template>
  <div class="component">
    <!-- Man kan kjøre data igjennom filtre -->
    {{ currentDate | formatDate }} <br/>
    {{ currentDate | formatDate | capitalize }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  filters: {
    formatDate(date) {
      return date.toDateString();
    },
    capitalize(string) {
      return string.toUpperCase();
    },
  },
};
</script>