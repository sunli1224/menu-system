<template>
    <div>
        <h1>汤类菜品</h1>
        <dishsametype :fathername="name"></dishsametype>
    </div>
</template>

<script>
    import dishsametype from './dishsametype'
    export default {
        name: "soup",
        components: {dishsametype},
        data(){
            return{

                name:3
            }
        }
    }
</script>

<style scoped>

</style>