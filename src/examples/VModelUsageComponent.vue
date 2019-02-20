<template>
  <div class="component">
    <address-input v-model="address"/>
    <address>
      {{ address.street }}<br/>
      {{ address.zip }} {{ address.city }}
    </address>
  </div>
</template>

<script>
import AddressInput from './VModelComponent.vue';

export default {
  components: {
    AddressInput,
  },
  data() {
    return {
      address: {
        street: 'Biskop Gunnerus\' gate 14',
        zip: '0185',
        city: 'Oslo',
      },
    };
  },
};
</script>