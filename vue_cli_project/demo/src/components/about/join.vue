<template>
    <div>
        <h3>加入我们</h3>
        <ul>
            <router-link to="/about/join/wechat"><h4>微信</h4></router-link>
            <router-link to="/about/join/qq"><h4>qq</h4></router-link>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "join"
    }
</script>

<style scoped>

</style>