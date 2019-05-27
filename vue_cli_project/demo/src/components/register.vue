<template>
    <div class="login-box">
        <h1>这是注册页</h1>
        <div class="remove-login">
            <span>用户名</span><input type="text" class="user-input" @change="userJudge(user)" v-model="user" required="required"><br>
            <br>
            <span>密码</span><input type="text" class="pass-input" @change="passJudge(password)" v-model="password" required="required"><br>
            <br>
            <span>重新输入密码</span><input type="text" class="pass-twice-input" @change="passtwiceJudge(passtwice)" v-model="passtwice" required="required"><br>
            <br>
            <button type="reset" class="login-reset-btn" @click="reset">重置</button>
            <button type="button" class="login-btn" @click="registerSend">注册</button><br>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
          return{
              user:" ",
              password:" ",
              passtwice:" "
          }
        },
        methods:{
            registerSend(){
              this.$axios.post("http://127.0.0.1:9000/login/",{mode:1,username:this.user,password:this.password,passtwice:this.passtwice})
                  .then(
                      res=>{
                          alert(res.data["content"]);
                          this.user = " ";
                          this.password = " ";
                          this.passtwice = " ";
                      }
                  )
                  .catch(
                      err=>{
                          alert("注册失败");
                      }
                  )
            },
            reset(){
                this.user = " ";
                this.password = " ";
                this.passtwice = " ";
            },
            userJudge(user){
                let pattern = /^([\u4e00-\u9fa5]{2,4})|([A-Za-z0-9_]{4,16})|([a-zA-Z0-9_\u4e00-\u9fa5]{3,16})$/;
                if(pattern.test(user) !== true){
                    alert("用户名字段必须是四位以上的数字、字母、中文");
                }
                // if(user === null){
                //     alert(user);
                //     console.log("请填写用户名");
                //     return;
                // }
            },
            passJudge(pass){
                let pattern = /^[a-zA-Z]\w{5,}$/;
                if(pattern.test(pass)!== true){
                    alert("密码必须开头必须是以字母开头,且五位以上!");
                }
            },
            passtwiceJudge(passtwice){
                 if (this.password !== passtwice){
                    alert("前后密码不相符");
                }
            }
        }
    }
</script>

<style scoped>
    h1{
        text-align: -webkit-center;
    }
    .login-box{
        border: red solid 1px;
        width: 500px;
        height: 400px;
        position: relative;
        left: 32%;
    }
.remove-login{
    position: relative;
    left: 40%;
}
.user-input{
    position: absolute;
    left: 13%;
}
.pass-input{
    position: absolute;
    left: 13%;
}
.pass-twice-input{
    position:absolute;
    left: 13%;
}
.login-btn{
    /*display: inline;*/
    position:absolute;
    left: 18%;
}
</style>