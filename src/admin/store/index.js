import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import articles from './modules/articles';
import skills from './modules/skills';
import user from './modules/user';
import works from './modules/works';


export const store = new Vuex.Store({
  modules: {
    articles, skills, user, works
  }
})