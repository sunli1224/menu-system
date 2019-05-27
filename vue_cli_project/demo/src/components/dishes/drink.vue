<template>
    <div>
        <h1>饮料类</h1>
        <dishsametype :fathername="name"></dishsametype>
    </div>
</template>

<script>
    import dishsametype from './dishsametype'
    export default {
        name: "drink",
        components:{dishsametype},
        data() {
            return {
                name: 4
            }
        }
    }
</script>

<style scoped>

</style>