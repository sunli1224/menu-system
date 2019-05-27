<template>
    <div class="left-box">
        <div class="left-top-box">
                <div class="login-btn-box">
                    <span><h2><router-link to="/login">登录</router-link></h2></span>
                </div>
                <div class="register-btn-box">
                    <span><h2><router-link to="/register">注册</router-link></h2></span>
                </div>
        </div>
        <div class="message-box">
            <div style="position: relative;top: 40px;left: 50px;">
                <span class="message-box-font">台号:</span>
                <span class="message-box-font">xxx</span>
            </div>
            <div style="position: relative;top: 50px;left: 50px;">
                <span class="message-box-font">人数:</span>
                <span class="message-box-font">xxx</span>
            </div>
            <div style="position: relative;top: 60px;left: 50px;">
                <span class="message-box-font">订单号:</span>
                <span class="message-box-font">xxx</span>
            </div>
        </div>
        <div class="menulist-name">
            <ul>
                <li><router-link :to="tagname">主页</router-link></li>
                <li><router-link :to="{name:'dish'}">菜品</router-link></li>
                <li><router-link to="/order">订单</router-link></li>
                <li><router-link to="/manage">管理</router-link></li>
                <li><router-link to="/about">关于</router-link></li>
            </ul>
        </div>
        <div class="main-content-box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import login from './login'
    export default {
        name: "menulist",
        data(){
            return{
                tagname: "/home",
            }
        }

    }
</script>

<style scoped>
    .left-box{
        width: 100%;
        height: 100%;
        border: red solid 1px;
    }
    .left-top-box{
        width: 300px;
        height: 100px;
        border: red solid 1px;
        position: relative;
        left: 50px;
    }
    .login-btn-box{
        width: 50px;
        height: 50px;
        border: red solid 1px;
        position: absolute;
        top: 20px;
        left: 50px;

    }
    .register-btn-box{
        width: 50px;
        height: 50px;
        border: red solid 1px;
        position: absolute;
        left: 200px;
        top: 20px;
    }
    .message-box{
        border: red solid 1px;
        width: 300px;
        height: 200px;
        position: relative;
        left: 50px;
    }
    .message-box-font{
        font-size: 25px;
        color: black;
    }
    .menulist-name{
        border: red solid 1px;
        width: 300px;
        height: 612px;
        position: relative;
        left: 50px;
    }
    ul{
        width: 200px;
        height: 200px;
        list-style-type: none;
        font-size: 40px;
    }
    li{
        border: red solid 1px;
        margin: 0;
        padding: 25px;
        text-align: center;
    }
    .main-content-box{
        width: 1300px;
        height: 100%;
        border: red solid 1px;
        position: relative;
        left: 500px;
        top: -900px;
    }
    ul :hover,ul a.activate{
        background: aquamarine;
    }
</style>