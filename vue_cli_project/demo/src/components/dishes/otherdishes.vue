<template>
    <div>
        <h1>其他类菜品</h1>
        <dishsametype :fathername="name"></dishsametype>
    </div>
</template>

<script>
    import dishsametype from './dishsametype'
    export default {
        name: "otherdishes",
        components:{dishsametype},
        data() {
            return {
                name: 5
            }
        }
    }
</script>

<style scoped>

</style>