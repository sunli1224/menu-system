<template>
    <div>
        <h2>这是首页</h2>
        <div v-if="user === ' ' ">

        </div>
        <div v-else>
            <h2>{{ user }}</h2>
        </div>
        <button @click="layout">注销</button>
        <button @click="back">回退</button>
        <button @click="goTo">跳转到</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
          return{
              is_login :" ",
              user: " "
          }
        },
        methods:{
            layout(){
              this.$axios.post("http://127.0.0.1:9000/home/",{mode:2,"user":this.$cookies.get("user")})
                  .then(
                      res=>{
                          alert(res.data["content"]);
                          this.$cookies.remove("user");
                      }
                  )
                  .catch(
                      err=>{
                          alert("注销出错");
                      }
                  )
            },
            back(){
                this.$router.go(-1);
            },
            goTo(){
                this.$router.replace('/manage');
            }
        },
        created() {
            this.$axios.post("http://127.0.0.1:9000/home/",{mode:1,"user":this.$cookies.get("user")})
                .then(
                    res=>{
                        console.log(res);
                        // this.is_login = res.data["is_login"];
                        this.user = res.data["user"];
                    }
                ).catch(
                err=>{

                }
            )
        }
    }
</script>

<style scoped>

</style>