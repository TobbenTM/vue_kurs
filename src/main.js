import Vue from 'vue';
import VueCodeMirror from 'vue-codemirror';
import App from './App.vue';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/javascript/javascript.js';

Vue.use(VueCodeMirror, {
  options: {
    theme: 'material',
    mode: 'text/x-vue',
    lineWrapping: true,
    scrollbarStyle: null,
    viewportMargin: Infinity,
  },
});

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
