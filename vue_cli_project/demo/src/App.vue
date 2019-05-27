<template>
  <div id="app">
    <menulist></menulist>
  </div>
</template>

<script>
  import menulist from './components/menulist'
  //在一个组件里使用另一个组件，需要通过import...from的形式把组件引入进来
  // import menulist from './components/menulist'
  export default {
    components:{
      menulist:menulist,
    }
  }
</script>

<style>

</style>
