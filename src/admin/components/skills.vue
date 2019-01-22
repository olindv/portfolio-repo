<template lang="pug">
  .content
    .container.container_skills
      h2.content__title Страница "Обо мне"
      .skills-groups
        skills-group(
          v-for="skillData in skillsData" 
          :key='skillData.key' 
          :skillData="skillData"
        )
</template>

<script>
import skillsGroup from "./skills/skillsGroup.vue";
import {mapState} from 'vuex';
export default {
  components: {
    skillsGroup
  },
  computed: {
    ...mapState({
      skillsData: state => state.skills.skillsData,
      active: state => state.skills.active
    })
  },
  created(){
    this.active.activeClass = true;
  },
  destroyed(){
    this.active.activeClass = false;
  }
};
</script>

<style lang="scss" scoped>
.skills-groups {
  display: flex;
  flex-wrap: wrap;
  margin-left: -120px;
  margin-top: -35px;
}
</style>
