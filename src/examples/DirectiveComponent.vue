<template>
  <div class="component">
    <button v-loading="savingChanges"
            v-on:click="savingChanges = true">
      Lagre
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savingChanges: false,
    };
  },
  directives: {
    // Shorthand for bind + update
    loading: function(el, { value }) {
      el.disabled = value;
    },
  },
};
</script>