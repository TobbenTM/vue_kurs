import Vue from 'vue';
import BasicComponent from './BasicComponent.vue';

// Man kan registrere lokalt til komponenter:
export default {
  components: {
    BasicComponent,
  },
};

// Eller globalt for alle til å bruke:
Vue.component('basic-component', BasicComponent);