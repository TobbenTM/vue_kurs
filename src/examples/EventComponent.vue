<template>
  <div class="component">
    <!-- Vi kan binde event-handlere -->
    <button v-on:click="onButtonClicked">Jeg kan trykkes!</button><br/>
    <button @click="onButtonClicked">Jeg kan trykkes!</button><br/>

    <!-- Og også med modifiers! -->
    <button v-on:click.prevent="onButtonClicked">Jeg kan trykkes!</button>
  </div>
</template>

<script>
export default {
  methods: {
    onButtonClicked(e) {
      alert(`Du trykte på knappen! defaultPrevented: ${e.defaultPrevented ? 'true' : 'false'}`);
    },
  },
};
</script>