<template lang='pug'>
    .tabs
        nav.tabs__navigation
            ul.tabs__controls
                li(:class='{tabs__button_active: activeSkills.activeClass}').tabs__button
                    router-link(to='/admin/').tabs__link Обо мне
                li(:class='{tabs__button_active: activeArticles.activeClass}').tabs__button
                    router-link(to='/admin/blog').tabs__link Блог
                li(:class='{tabs__button_active: activeWorks.activeClass}').tabs__button
                    router-link(to='/admin/works').tabs__link Мои работы
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState({
            activeSkills: state => state.skills.active,
            activeArticles: state => state.articles.active,
            activeWorks: state => state.works.active
        })
    }
}
</script>



<style lang="scss" scoped>
.tabs {
    background-color: #f0efe9;
    position: relative;
}
.tabs__controls{
    display: flex;
}
.tabs__button {
    padding: 20px 30px;
    border-right: 1px solid #fff;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        transition: .8s;
    }
    &_active {
        background-color: #fff;
        .tabs__link {
            color: blue;
        }
    }
}

.tabs__link {
    text-decoration: none;
    color: #7e898d;

}

.tabs__item_active{
    background-color: #fff;
    .tabs__link{
    color: $light-blue;
    }
}


</style>


