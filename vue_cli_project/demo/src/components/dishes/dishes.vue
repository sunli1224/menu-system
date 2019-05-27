<template>
    <div>
        <ul class="navibar">
            <li><router-link to="/dishes/hotdishes">热菜</router-link></li>
            <li><router-link to="/dishes/colddishes">凉菜</router-link></li>
            <li><router-link to="/dishes/soup">汤类</router-link></li>
            <li><router-link to="/dishes/drink">饮料</router-link></li>
            <li><router-link to="/dishes/otherdishes">其他</router-link></li>
        </ul>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dishes"
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