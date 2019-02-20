<template>
  <div class="component">
    {{ user.name }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    // Option 1
    computedUser() {
      return this.$store.state.user;
    },
    // Option 2 (preferrable)
    ...mapState(['user'])
  },
  async mounted() {
    // Option 1 (preferrable)
    await this.loadUser();
    // Option 2
    await this.$store.dispatch('loadUser');
  },
  methods: {
    ...mapActions(['loadUser']),
  }
};
</script>