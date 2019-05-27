<template>
    <div>
        <h1>热菜菜品</h1>
        <dishsametype :fathername="name"></dishsametype>
    </div>
</template>

<script>
    import dishsametype from './dishsametype'
    export default {
        name: "hotdishes",
        components:{dishsametype},
        data() {
            return {
                name: 1
            }
        }
    }
</script>

<style scoped>

</style>