<template>
  <div id="app">
    <app-presenter v-on:progress="progress = $event">

      <app-slide>
        <img src="./assets/logo.png"/>
        <h1>Vue.js</h1>
        <h4>Introduksjonskurs</h4>
        <a href="http://nærd.no/vue" style="width: 100%;">nærd.no/vue</a>
        <a href="https://github.com/tobbentm/vue_kurs">github.com/tobbentm/vue_kurs</a>
      </app-slide>

      <app-slide>
        <h1>Agenda:</h1>
        <ul>
          <li>Hva er Vue.js?</li>
          <li>Devtools</li>
          <li>Komponenter</li>
          <li>Lifecycle</li>
          <li>Databinding</li>
          <li>Større apps med Vue.js</li>
        </ul>
      </app-slide>

      <app-slide>
        <h1>Hva er Vue.js?</h1>
        <div class="half">
          <ul>
            <li>Lettlært
              <ul><li>Bruker bare html/css/js</li></ul>
            </li>
            <li>Fleksibelt
              <ul>
                <li>Kan brukes i små apps for å erstatte jQuery</li>
                <li>Eller i større Single Page Applications</li>
              </ul>
            </li>
            <li>Raskt
              <ul>
                <li>20 KB .js pakke</li>
                <li>Konsistent like rask eller raskere enn React og Angular i benchmarks</li>
              </ul>
            </li>
            <li>Enkel dokumentasjon</li>
            <li>Opinionated</li>
          </ul>
        </div>
        <img src="./assets/fe_stats.png" class="half"/>
      </app-slide>
      
      <app-slide>
        <h1>Devtools</h1>
        <ul>
          <li>Finnes kjempebra extensions til <a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd">Chrome</a> og <a href="https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/">Firefox</a></li>
          <li>Rask prototyping og skaffolding med @vue/cli</li>
        </ul>
        <code-block 
          :code="
`npm install -g @vue/cli
vue create vue-prosjekt`"
          lang="text/x-sh"
        />
      </app-slide>

      <app-slide>
        <h1>Komponenter</h1>
        <code-block 
          :code="examples.basicComponent"
          lang="text/x-vue"
        />
      </app-slide>

      <app-slide>
        <h1>Lifecycle</h1>
      </app-slide>

      <app-slide>
        <h1>Databinding</h1>
      </app-slide>

      <app-slide>
        <h1>Prototyping med Vue CLI</h1>
      </app-slide>

      <app-slide>
        <h1>Økosystem ellers</h1>
      </app-slide>

      <app-slide>
        <img src="./assets/power_of_sharing.png" />
      </app-slide>

    </app-presenter>
    <app-progress :progress="progress"/>
  </div>
</template>

<script>
import Vue from 'vue';
import AppPresenter from './presenter';
import AppProgress from './components/AppProgress';
import AppSlide from './components/AppSlide';
import CodeBlock from './components/CodeBlock';

import BasicComponentExample from '!!raw-loader!./examples/BasicComponent.vue';

Vue.component('app-presenter', AppPresenter);

export default {
  name: 'app',
  components: {
    AppSlide,
    AppProgress,
    CodeBlock,
  },
  data() {
    return {
      progress: 0,
      examples: {
        basicComponent: BasicComponentExample
      }
    };
  },
};
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  font-size: 1.5em;
}

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: all .5s ease-in-out;
}

.slide-left-enter, .slide-left-leave-to,
.slide-right-enter, .slide-right-leave-to {
  opacity: 0;
}

.slide-left-enter, .slide-right-leave-to {
  transform: translateX(-75px);
}

.slide-right-enter, .slide-left-leave-to {
  transform: translateX(75px);
}
</style>
