<template>
  <div class="component">
    <!-- Vi kan vise elementer basert på data -->
    <p v-if="showMessage">Vue er så kult!</p>
    <p v-else-if="showError">Oida, noe gikk galt!</p>
    <p v-else>Hva er det som skjedde?</p>

    <button v-on:click="showMessage = false">Fjern melding</button> | 
    <button v-on:click="showError = false">Fjern feil</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: true,
      showError: true,
    };
  },
};
</script>