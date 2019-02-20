import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async loadUser({ commit }) {
      // TODO: Add HTTP request
      commit('setUser', { name: 'Tobias' });
    }
  },
  modules: {},
  getters: {},
});