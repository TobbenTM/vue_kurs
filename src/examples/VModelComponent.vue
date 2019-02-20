<template>
  <div class="component">
    <!--
      På denne komponenten kan man bruke v-model
            for to-veis kommunikasjon!
    -->
    <input type="text" placeholder="Gateadresse" v-model="localState.street"/>
    <input type="text" placeholder="Postnummer" v-model="localState.zip"/>
    <input type="text" placeholder="Poststed" v-model="localState.city"/>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      localState: {
        street: null,
        zip: null,
        city: null,
      },
    };
  },
  created() {
    this.localState = Object.assign({}, this.localState, this.value);
  },
  watch: {
    localState: {
      deep: true,
      handler(newValue) {
        this.$emit('input', newValue);
      },
    },
    value: {
      deep: true,
      handler(newValue) {
        this.localState = Object.assign(this.localState, newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.component {
  display: grid;
  grid-template-areas:
    "street street"
    "zip city";
  grid-template-columns: 2fr 3fr;
  grid-gap: .2em;

  input[placeholder="Gateadresse"] {
    grid-area: street;
  }
  input[placeholder="Postnummer"] {
    grid-area: zip;
  }
  input[placeholder="Poststed"] {
    grid-area: city;
  }
}
</style>