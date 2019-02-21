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
          <li>Databinding</li>
          <li>Event handling</li>
          <li>Kode-pause! ❤</li>
          <li>Computed properties</li>
          <li>Watchers</li>
          <li>Custom inputs</li>
          <li>Filtre</li>
          <li>Directives</li>
          <li>Lifecycle</li>
          <li>Gotchas &amp; pitfalls</li>
          <li>Routing og state</li>
        </ul>
      </app-slide>

      <app-slide>
        <h1>Hvem er jeg?</h1>
        <img src="http://tobbentm.com/ul/pl05.jpg" style="border-radius: 50%; overflow: hidden; max-width: 256px;" />
        <h4>Tobias Lønnerød Madsen</h4>
        <p>Fullstack utvikler .Net</p><br/>
        <a href="https://github.com/TobbenTM">github.com/TobbenTM</a>
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
          :code="examples.BasicComponentExample"
          lang="text/x-vue"
        />
        <p>Component.vue</p>
      </app-slide>

      <app-slide>
        <h1>Komponenter</h1>
        <h2 class="subtitle">Hvordan registrere for bruk?</h2>
        <code-block
          :code="examples.RegistrationExample"
          lang="text/javascript"
          class="half"
        />
        <div class="half">
          <h4>Fungerer for:</h4>
          <ul>
            <li>Komponenter</li>
            <li>Filtre</li>
            <li>Plugins</li>
            <li>Direktiver</li>
          </ul>
        </div>
      </app-slide>

      <app-slide>
        <h1>Databinding</h1>
        <div class="half">
          <code-block
            :code="examples.BindingComponentExample"
            lang="text/x-vue"
          />
          <p>BindingComponent.vue</p>
        </div>
        <binding-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Databinding for attributter</h1>
        <div class="half">
          <code-block
            :code="examples.AttrBindingComponentExample"
            lang="text/x-vue"
          />
          <p>AttrBindingComponent.vue</p>
        </div>
        <attr-binding-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Databinding med evaluering</h1>
        <div class="half">
          <code-block
            :code="examples.InputComponentExample"
            lang="text/x-vue"
          />
          <p>InputComponent.vue</p>
        </div>
        <input-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Event handling</h1>
        <div class="half">
          <code-block
            :code="examples.EventComponentExample"
            lang="text/x-vue"
          />
          <p>EventComponent.vue</p>
        </div>
        <event-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Vue objektet</h1>
        <code-block
          :code="
`export default {
  name: 'ComponentName',
  props: {}, // properties
  data() {}, // reactive data
  computed: {}, // computed data
  components: {}, // other components used
  watch: {}, // observe reactive data
  methods: {}, // methods

  // lifecycle handlers
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  errorCaptured() {},
};`"
          lang="text/javascript"
        />
      </app-slide>

      <app-slide>
        <h1>La oss kode!</h1>
        <h2 class="subtitle">Dette bør vi få til:</h2>
        <ul>
          <li>Få kjørt Vue CLI prosjektet (npm run serve)</li>
          <li>Lag din egen komponent!
            <ul>
              <li>Bør ha et input felt</li>
              <li>Og noe for å vise verdien fra feltet</li>
            </ul>
          </li>
          <li>Legg til komponenten i App.vue</li>
        </ul>
      </app-slide>

		<app-slide>
			<h1> Vue plugins til VSCode! </h1>
			<ul>
				<li> <a href="https://github.com/vuejs/vetur"> https://github.com/vuejs/vetur </a> </li>
				<li> <a href="https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets"> https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets  </a> </li>
			</ul>
		</app-slide>

      <app-slide>
        <h1>Conditional Rendering</h1>
        <div class="half">
          <code-block
            :code="examples.ConditionalComponentExample"
            lang="text/x-vue"
            :template-only="true"
          />
          <p>ConditionalComponent.vue</p>
        </div>
        <conditional-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>List Rendering</h1>
        <div class="half">
          <code-block
            :code="examples.ListComponentExample"
            lang="text/x-vue"
          />
          <p>ListComponent.vue</p>
        </div>
        <list-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Computed properties</h1>
        <div class="half">
          <ul>
            <li>Vil oppdateres om kilder oppdateres</li>
            <li>Cachet basert på dependencies</li>
            <li>Fine til å koble opp mot state</li>
            <li>Fungerer som vanlige properties</li>
          </ul>
          <computed-component/>
        </div>
          <code-block
            class="half"
            :code="examples.ComputedComponentExample"
            lang="text/x-vue"
          />
      </app-slide>

      <app-slide>
        <h1>Watchers</h1>
        <div class="half">
          <code-block
            :code="examples.WatcherComponentExample"
            lang="text/javascript"
            :script-only="true"
          />
          <p>WatcherComponent.vue</p>
        </div>
        <div class="half">
          <ul>
            <li>For å reagere på endringer</li>
            <li>Som regel bedre å bruke computed</li>
          </ul>
          <watcher-component/>
        </div>
      </app-slide>

      <app-slide>
        <h1>Custom inputs</h1>
        <div class="half">
          <ul>
            <li>Noen ganger trenger vi custom inputs</li>
            <li>Vi kan utnytte 2-veis databinding med v-model</li>
            <li>(bør ikke overbrukes)</li>
          </ul>
          <v-model-usage-component/>
          <code-block
            :code="examples.VModelUsageExample"
            lang="text/x-vue"
            :script-only="true"
          />
        </div>
        <div class="half">
          <code-block
            :code="examples.VModelComponentExample"
            lang="text/javascript"
            :script-only="true"
          />
          <p>VModelComponent.vue</p>
        </div>
      </app-slide>

      <app-slide>
        <h1>Filters</h1>
        <div class="half">
          <code-block
            :code="examples.FilterComponentExample"
            lang="text/x-vue"
          />
          <p>FilterComponent.vue</p>
        </div>
        <div class="half">
          <ul>
            <li>For å enkelt transformere tekst</li>
            <li>På en gjenbrukbar måte</li>
          </ul>
          <filter-component/>
        </div>
      </app-slide>

      <app-slide>
        <h1>Directives</h1>
        <div class="half">
          <ul>
            <li>For å gjøre endringer på elementer enkelt</li>
            <li>På en gjenbrukbar måte</li>
            <li>Kan registrere hooks for:
              <ul>
                <li>bind</li>
                <li>inserted</li>
                <li>update</li>
                <li>componentUpdated</li>
                <li>unbind</li>
              </ul>
            </li>
          </ul>
          <directive-component/>
        </div>
        <div class="half">
          <code-block
            :code="examples.DirectiveComponentExample"
            lang="text/x-vue"
          />
          <p>DirectiveComponent.vue</p>
        </div>
      </app-slide>

      <app-slide>
        <h1>Vue objektet</h1>
        <code-block
          :code="
`export default {
  name: 'ComponentName', // ✔️
  props: {}, // properties ✔️
  data() {}, // reactive data ✔️
  computed: {}, // computed data ✔️
  components: {}, // other components used ✔️
  watch: {}, // observe reactive data ✔️
  methods: {}, // methods ✔️
  
  // lifecycle handlers
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  errorCaptured() {},
};`"
          lang="text/javascript"
        />
      </app-slide>

      <app-slide>
        <h1>Lifecycle</h1>
        <h2 class="subtitle">Hvordan reagere på komponenters tilstand?</h2>
      </app-slide>

      <app-slide>
        <!-- <h1>Lifecycle</h1> -->
        <a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" style="display: contents;" target="_blank">
          <vertical-image src="static/lifecycle.png"/>
        </a>
      </app-slide>

      <app-slide>
        <h1>Lifecycle</h1>
        <h2 class="subtitle">Praktisk eksempel</h2>
        <ul class="half">
          <li>Kan brukes for å begynne lasting når komponent blir vist</li>
          <li>Kan brukes for å rydde opp i ubrukte ressurser</li>
        </ul>
        <lifecycle-component/>
      </app-slide>

      <app-slide>
        <h1>Reactivity</h1>
        <h2 class="subtitle">Gotchas</h2>
        <div class="half">
          <code-block
            :code="examples.ReactivityGotchaComponentExample"
            lang="text/javascript"
            :script-only="true"
          />
          <p>ReactivityGotchaComponent.vue</p>
        </div>
        <reactivity-gotcha-component class="half"/>
      </app-slide>

      <app-slide>
        <h1>Routing og state</h1>
        <h2 class="subtitle">For større applikasjoner</h2>
        <code-block
          :code="
`vue add router
vue add vuex`"
          lang="text/x-sh"
        />
      </app-slide>

      <app-slide>
        <h1>State med Vuex</h1>
        <a href="https://vuex.vuejs.org/" target="_blank"><img src="./assets/vuex_flow.png" /></a>
      </app-slide>

      <app-slide>
        <h1>State med Vuex</h1>
        <a href="https://vuex.vuejs.org/" target="_blank"><img src="./assets/vuex.png" /></a>
      </app-slide>

      <app-slide>
        <h1>State med Vuex</h1>
        <code-block
          :code="examples.StoreExample"
          lang="text/javascript"
        />
        <p>store.js</p>
      </app-slide>

      <app-slide>
        <h1>State med Vuex</h1>
        <div class="half">
          <code-block
            :code="examples.StoreExample"
            lang="text/javascript"
          />
          <p>store.js</p>
        </div>
        <div class="half">
          <code-block
            :code="examples.VuexComponentExample"
            lang="text/x-vue"
          />
          <p>VuexComponent.vue</p>
        </div>
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
import VerticalImage from './components/VerticalImage';

import BasicComponentExample from '!!raw-loader!./examples/BasicComponent.vue';
import BindingComponent from './examples/BindingComponent';
import BindingComponentExample from '!!raw-loader!./examples/BindingComponent.vue';
import AttrBindingComponent from './examples/AttrBindingComponent';
import AttrBindingComponentExample from '!!raw-loader!./examples/AttrBindingComponent.vue';
import InputComponent from './examples/InputComponent';
import InputComponentExample from '!!raw-loader!./examples/InputComponent.vue';
import EventComponent from './examples/EventComponent';
import EventComponentExample from '!!raw-loader!./examples/EventComponent.vue';
import ConditionalComponent from './examples/ConditionalComponent';
import ConditionalComponentExample from '!!raw-loader!./examples/ConditionalComponent.vue';
import ListComponent from './examples/ListComponent';
import ListComponentExample from '!!raw-loader!./examples/ListComponent.vue';
import ComputedComponent from './examples/ComputedComponent';
import ComputedComponentExample from '!!raw-loader!./examples/ComputedComponent.vue';
import LifecycleComponent from './examples/LifecycleComponent';
import WatcherComponent from './examples/WatcherComponent';
import WatcherComponentExample from '!!raw-loader!./examples/WatcherComponent.vue';
import StoreExample from '!!raw-loader!./examples/store.js';
import VuexComponentExample from '!!raw-loader!./examples/VuexComponent.vue';
import ReactivityGotchaComponent from './examples/ReactivityGotchaComponent';
import ReactivityGotchaComponentExample from '!!raw-loader!./examples/ReactivityGotchaComponent.vue';
import FilterComponent from './examples/FilterComponent';
import FilterComponentExample from '!!raw-loader!./examples/FilterComponent.vue';
import RegistrationExample from '!!raw-loader!./examples/RegistrationExample.js';
import VModelUsageComponent from './examples/VModelUsageComponent';
import VModelComponentExample from '!!raw-loader!./examples/VModelComponent.vue';
import DirectiveComponent from './examples/DirectiveComponent';
import DirectiveComponentExample from '!!raw-loader!./examples/DirectiveComponent.vue';

Vue.component('app-presenter', AppPresenter);

export default {
  name: 'app',
  components: {
    AppSlide,
    AppProgress,
    CodeBlock,
    VerticalImage,
    BindingComponent,
    InputComponent,
    AttrBindingComponent,
    EventComponent,
    ConditionalComponent,
    ListComponent,
    ComputedComponent,
    LifecycleComponent,
    WatcherComponent,
    ReactivityGotchaComponent,
    FilterComponent,
    VModelUsageComponent,
    DirectiveComponent,
  },
  data() {
    return {
      progress: 0,
      examples: {
        BasicComponentExample,
        BindingComponentExample,
        InputComponentExample,
        AttrBindingComponentExample,
        EventComponentExample,
        ConditionalComponentExample,
        ListComponentExample,
        ComputedComponentExample,
        WatcherComponentExample,
        StoreExample,
        VuexComponentExample,
        ReactivityGotchaComponentExample,
        FilterComponentExample,
        RegistrationExample,
        VModelComponentExample,
        VModelUsageExample: '<address-input v-model="address"/>',
        DirectiveComponentExample,
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
