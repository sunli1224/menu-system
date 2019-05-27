<template>
    <div>
        <h1>登录页</h1>
        <span>账号</span><input type="text" v-model="username"><br>
        <span>密码</span><input type="text" v-model="password"><br>
        <button type="button" @click="reset">注册</button>
        <button type="button" @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                username:" ",
                password:" ",
            }
        },
        methods:{
            reset(){
              this.username = " ";
              this.password = " ";
            },
            login(){
                if(this.username === " "){
                    alert("请输入用户名");
                    return;
                }
                if(this.password === " "){
                    alert("请输入密码");
                    return;
                }
                this.$axios.post("http://127.0.0.1:9000/login/",{mode:2,username:this.username,password:this.password})
                    .then(
                        res=>{
                            alert(res.data["content"]);
                            this.$cookies.set("user",this.username
                            );
                            this.username = " ";
                            this.password = " ";

                        }
                    )
                    .catch(
                        err=>{
                            alert("登录失败");
                        }
                    )
            }
        }
    }
</script>

<style scoped>

</style>