<template>
  <div class="component">
    <ul>
      <li v-for="(item, key) in reactiveObject" :key="key">
        {{ key }}: {{ item }}
      </li>
    </ul>
    <button v-on:click="addProperty(false)">
      Legg til property
    </button>
    <button v-on:click="addProperty(true)">
      Legg til property med Vue.set
    </button>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      reactiveObject: {
        keyOne: 'Hello',
        keyTwo: 'World!',
      },
    };
  },
  methods: {
    addProperty(withVue) {
      const key = `key${Math.floor(Math.random()*100)}`;
      if (withVue) {
        Vue.set(this.reactiveObject, key, 'Added with Vue');
      } else {
        this.reactiveObject[key] = 'Added without Vue';
      }
    }
  }
};
</script>