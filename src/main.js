import Vue from 'vue';
import VueCodeMirror from 'vue-codemirror';
import App from './App.vue';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/vue/vue.js';

Vue.use(VueCodeMirror, {
  options: {
    theme: 'material',
    mode: 'text/x-vue',
    viewportMargin: Infinity,
  },
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
