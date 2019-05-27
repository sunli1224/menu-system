<template>
    <div>
        <ul class="navibar">
            <li><router-link to="/about/intro">公司简介</router-link></li>
            <li><router-link to="/about/join">加入我们</router-link></li>
            <li><router-link to="/about/contact">联系我们</router-link></li>
        </ul>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
    .navibar{
        list-style: none;
        margin: 0;
        padding: 0;
        height: 120px;
        line-height: 120px;
        display: flex;
        justify-content: space-around;
    }
    .navibar a{
        font-size: 30px;
        display: block;
        text-decoration: none;
    }
</style>