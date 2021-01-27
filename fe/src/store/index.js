import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formsState: {
      loveCat: null,
      name: null,
      lastName: null,
      date: null,
      mail: null
    },
    valid: null,
    tooltipSuccess: null,
    tooltipError: null
  },
  mutations: {
    SET_NAME: (state, payload) => {
      state.formsState.name = payload
    },
    SET_LAST_NAME: (state, payload) => {
      state.formsState.lastName = payload
    },
    SET_LOVE_CAT: (state, payload) => {
      state.formsState.loveCat = payload
    },
    SET_DATE: (state, payload) => {
      state.formsState.date = payload
    },
    SET_MAIL: (state, payload) => {
      state.formsState.mail = payload
    },
    CLEAR_FORM_STATE: (state) => {
      state.formsState = {}
    },
    SET_TOOLTIP_SUCCESS: (state, payload) => {
      state.tooltipSuccess = payload
    },
    SET_TOOLTIP_ERROR: (state, payload) => {
      state.tooltipError = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    formState: state => {
      return state.formsState
    },
    valid: state => {
      return state.valid
    },
    tooltipSuccess: state => {
      return state.tooltipSuccess
    },
    tooltipError: state => {
      return state.tooltipError
    }
  }
})
