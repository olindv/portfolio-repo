<template lang='pug'>
    .header
        .header__left Панель администрирования
        .header__right
            a(href="/").header__link Вернуться на сайт
</template>

<style lang="scss" scoped>
    .header {
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        background-color: $light-blue;
        color: #fff;
        position: relative;
    }
    .header__left {
        font-size: 24px;
        font-weight: bold;
        padding-left: 30px;
    }
    .header__right {
        padding-right: 30px;
    }
    .header__link {
        color: #fff;
        text-decoration: none;

    }
</style>


