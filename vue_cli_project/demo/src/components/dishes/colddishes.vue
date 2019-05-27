<template>
    <div>
        <h1>冷菜菜品</h1>
        <dishsametype :fathername="name"></dishsametype>
    </div>
</template>

<script>
    import dishsametype from './dishsametype'
    export default {
        name: "colddishes",
        components:{dishsametype},
        data() {
            return {
                name: 2
            }
        }
    }
</script>

<style scoped>

</style>