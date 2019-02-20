<template>
  <div class="component">
    <input
      v-model="userMessage"
      placeholder="Legg igjen en melding.."
    />
    <p>Meldingen er: "{{ userMessage }}"</p>
    <p>Eller "{{ userMessage.replace('react', 'vue') }}" uten teite rammeverk!</p>
    <!-- (Dette burde gjøres med computed properties, mer om det snart!) -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMessage: '',
    };
  },
};
</script>

<style scoped>
.component input {
  line-height: 2em;
  padding: .5em;
}
</style>