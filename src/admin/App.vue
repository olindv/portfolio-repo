<template lang="pug">
  .wrapper
    app-header
    app-tabs
    router-view

</template>

<script>

import {mapState} from 'vuex';
import {mapActions} from 'vuex';
import header from './components/common/header.vue';
import tabs from './components/common/tabs.vue';

export default {
  components: {
    appHeader: header,
    appTabs: tabs
  },
  computed:{
    ...mapState({
      userId: state => state.user.userId
    })
  },
  watch: {
    userId(){
      this.getNewData();
    }
  },
  methods: {
    ...mapActions(
      {
        getSkillsData: 'skills/getSkillsData',
        getArticlesData: 'articles/getArticlesData',
        getWorksData: 'works/getWorksData'
      }
    ),
    getNewData(){
      this.getSkillsData(this.userId);
      this.getArticlesData(this.userId);
      this.getWorksData(this.userId);
    }
  }
};

</script>

<style lang="scss">
@import 'normalize.css';
@import './assets/styles/fonts.scss';
@import './assets/styles/mixins.scss';

  html, body {
    height: 100%;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    background: #f5f5f5;
  }
  .container {
    // width: 1140px;
    margin: 0 auto;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .wrapper {
    background: url('./assets/images/adminimg.png') center center no-repeat;
    min-height: 100%;
    background-size: cover;
    overflow: hidden;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(#fff, .8);
    }
  }
  .content {
    position: relative;
  }
  .content__title{
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 30px;
  }
  .content__wrap {
    display: flex;
  }
  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 50px 30px;
  }
  .container_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 30px;
  }

  .button {
    background-color: $light-blue;
    padding: 15px 20px;
    border-radius: 5px;
    color: #fff;
    &:hover {
      background-color: $blue;
    }
  }
  .subtitle {
    font-size: 16px;
    font-weight: bold;
  }
</style>
