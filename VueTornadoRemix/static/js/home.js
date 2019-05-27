function clikTop() {
     var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        document.documentElement.scrollTop = document.body.scrollTop = -200;
}
function clickChange() {
    document.getElementById("registerone").style.color = "dodgerblue";
    document.getElementById("loginone").style.color = "black";
    document.getElementById("onepage").style.display = "none";
    document.getElementById("twopage").style.display = "block";
    document.getElementById("btn_send_login").style.display = "none";
    document.getElementById("btn_send_register").style.display = "block";
}
function twoclickChange() {
    document.getElementById("registerone").style.color = "black";
    document.getElementById("loginone").style.color = "dodgerblue";
    document.getElementById("onepage").style.display = "block";
    document.getElementById("twopage").style.display = "none";
    document.getElementById("btn_send_register").style.display = "none";
    document.getElementById("btn_send_login").style.display = "block";
}


$(function () {
   $("#userone").blur(function () {
       var user = $("#userone").val();
       if (user === ""){
           document.getElementById("usershh").innerHTML = "请填写用户名该字段";
           document.getElementById("usershh").style.color = "red";

       }
   }) 
});

$(function () {
   $("#userone").focus(function () {
       document.getElementById("usershh").innerHTML = "";
        document.getElementById("passhh").innerHTML = "";
   })
});

$(function () {
   $("#passone").blur(function () {
       var user = $("#passone").val();
       if (user === ""){
           document.getElementById("passhh").innerHTML = "请填写密码该字段";
           document.getElementById("passhh").style.color = "red";

       }
   })
});

$(function () {
   $("#passone").focus(function () {
       document.getElementById("usershh").innerHTML = "";
       document.getElementById("passhh").innerHTML = "";
   })
});

$(function () {
    $('#usertwo').blur(function () {
        var username = $('#usertwo').val();
        if(username === ""){
            document.getElementById("userff").innerHTML = "请填写昵名字段";
            document.getElementById("userff").style.color = "red";
        }
        else{
            var pattern = /^([\u4e00-\u9fa5]{2,4})|([A-Za-z0-9_]{4,16})|([a-zA-Z0-9_\u4e00-\u9fa5]{3,16})$/;
            if(pattern.test(username) !== true){
                document.getElementById("userff").innerHTML = "用户名字段必须是四位以上的数字、字母、中文";
                document.getElementById("userff").style.color = "red";
            }
        }
    })

});

$(function () {
   $('#usertwo').focus(function () {
       document.getElementById("userff").innerHTML = "";
       document.getElementById("passff").innerHTML = "";
       document.getElementById("passtff").innerHTML = "";
       document.getElementById("yxff").innerHTML = "";
   })
});


$(function () {
    $('#passtwo').blur(function () {
        var username = $('#passtwo').val();
        if(username === ""){
            document.getElementById("passff").innerHTML = "请填写密码字段";
            document.getElementById("passff").style.color = "red";
        }
        else{
            var pattern = /^[a-zA-Z]\w{5,}$/;
            if(pattern.test(username) !== true){
                document.getElementById("passff").innerHTML = "密码必须开头必须是以字母开头,且五位以上!";
                document.getElementById("passff").style.color = "red";
            }
        }
    })

});

$(function () {
   $('#passtwo').focus(function () {
       document.getElementById("passff").innerHTML = "";
       document.getElementById("userff").innerHTML = "";
       document.getElementById("passtff").innerHTML = "";
       document.getElementById("yxff").innerHTML = "";
   })
});


$(function () {
    $('#passttwo').blur(function () {
        var password1 = $('#passtwo').val();
        var password2 = $('#passttwo').val();
        if(password2 === ""){
            document.getElementById("passtff").innerHTML = "请填写重写密码字段";
            document.getElementById("passtff").style.color = "red";
        }
        else{
            var pattern = /^[a-zA-Z]\w{5,}$/;
            if(pattern.test(password2) !== true){
                document.getElementById("passtff").innerHTML = "密码必须开头必须是以字母开头,且五位以上!";
                document.getElementById("passtff").style.color = "red";
            }
            else{
                if (password1 !== password2){
                    document.getElementById("passtff").innerHTML = "该密码与之前密码不相符";
                    document.getElementById("passtff").style.color = "red";
                }
            }
        }
    })

});

$(function () {
   $('#passttwo').focus(function () {
       document.getElementById("passff").innerHTML = "";
       document.getElementById("userff").innerHTML = "";
       document.getElementById("passtff").innerHTML = "";
       document.getElementById("yxff").innerHTML = "";
   })
});


$(function () {
    $('#yxtwo').blur(function () {
        var email = $('#yxtwo').val();
        if(email === ""){
            document.getElementById("yxff").innerHTML = "请填写邮箱字段";
            document.getElementById("yxff").style.color = "red";
        }
        else{
            var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(pattern.test(email) !== true){
                document.getElementById("yxff").innerHTML = "不符合邮箱规则";
                document.getElementById("yxff").style.color = "red";
            }
        }
    })

});

$(function () {
   $('#yxtwo').focus(function () {
       document.getElementById("passff").innerHTML = "";
       document.getElementById("userff").innerHTML = "";
       document.getElementById("passtff").innerHTML = "";
       document.getElementById("yxff").innerHTML = "";
   })
});

// 注册界面的ajax
$(function () {
    $("#btn_send_register").click(function () {
        var username = $('#usertwo').val();
        var passwordone = $("#passtwo").val();
        var passwordtwo = $("#passttwo").val();
        var email = $('#yxtwo').val();
        var email_code = $('#yztwo').val();
        var c_time = gettodaytime();
        $.post("/home/", {"mode":1, "username": username, "passwordone":passwordone, "passwordtwo":passwordtwo,"email":email,"email_code": email_code,"c_time":c_time},function (data) {
            if(data === "0"){
                window.location.href = "/home/";
            }
            if(data === "1"){
                layer.msg('用户名字段必须是四位以上的数字、字母、中文', {
                icon: 2,
             time: 2000 //2秒关闭（如果不配置，默认是3秒）
}, function(){
                    document.getElementById("usertwo").value = " ";
                    document.getElementById("passtwo").value = " ";
                    document.getElementById("passttwo").value = " ";
                    document.getElementById("yxtwo").value = " ";
                    document.getElementById("yztwo").value = " ";

});
            }
            if(data === "2"){
                layer.msg('用户名错误', {
                icon: 2,
             time: 2000 //2秒关闭（如果不配置，默认是3秒）
}, function(){
                    document.getElementById("usertwo").value = " ";
                    document.getElementById("passtwo").value = " ";
                    document.getElementById("passttwo").value = " ";
                    document.getElementById("yxtwo").value = " ";
                    document.getElementById("yztwo").value = " ";
});
            }
            if(data === "3"){
                layer.msg('用户名错误', {
                icon: 2,
             time: 2000 //2秒关闭（如果不配置，默认是3秒）
}, function(){
                    document.getElementById("usertwo").value = " ";
                    document.getElementById("passtwo").value = " ";
                    document.getElementById("passttwo").value = " ";
                    document.getElementById("yxtwo").value = " ";
                    document.getElementById("yztwo").value = " ";
});
            }
            if(data === "4"){
                layer.msg('用户名错误', {
                icon: 2,
             time: 2000 //2秒关闭（如果不配置，默认是3秒）
}, function(){
                    document.getElementById("usertwo").value = " ";
                    document.getElementById("passtwo").value = " ";
                    document.getElementById("passttwo").value = " ";
                    document.getElementById("yxtwo").value = " ";
                    document.getElementById("yztwo").value = " ";
});
            }
            if(data === "5"){
                layer.msg('用户名错误', {
                icon: 2,
             time: 2000 //2秒关闭（如果不配置，默认是3秒）
}, function(){
                    document.getElementById("usertwo").value = " ";
                    document.getElementById("passtwo").value = " ";
                    document.getElementById("passttwo").value = " ";
                    document.getElementById("yxtwo").value = " ";
                    document.getElementById("yztwo").value = " ";
});
            }
            if(data === "6"){
                layer.msg('用户名错误', {
                icon: 2,
             time: 2000 //2秒关闭（如果不配置，默认是3秒）
}, function(){
                    document.getElementById("usertwo").value = " ";
                    document.getElementById("passtwo").value = " ";
                    document.getElementById("passttwo").value = " ";
                    document.getElementById("yxtwo").value = " ";
                    document.getElementById("yztwo").value = " ";
});
            }
            if(data === "7"){
                layer.msg('用户名错误', {
                icon: 2,
             time: 2000 //2秒关闭（如果不配置，默认是3秒）
}, function(){
                    document.getElementById("usertwo").value = " ";
                    document.getElementById("passtwo").value = " ";
                    document.getElementById("passttwo").value = " ";
                    document.getElementById("yxtwo").value = " ";
                    document.getElementById("yztwo").value = " ";
});
            }
            
        })
    })
});

// 获取当前时间
function gettodaytime(){
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var second = today.getSeconds();
    return today.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + second
}



// 邮箱验证码ajax
$(function () {
    $('#btn_email').click(function () {
        var email = $('#yxtwo').val();
        $.post("/mails/", {"email" : email}, function (data) {
            settime(document.getElementById("btn_email"))
        })
    })
});
var countdown=60;
function settime(val) {
    if (countdown === 0) {
            val.removeAttribute("disabled");
            val.value = "免费获取验证码";
            countdown = 60;
            return;
        } else {
            val.setAttribute("disabled", true);
            val.value = "重新发送(" + countdown + ")";
            countdown--;
        }
        setTimeout(function () {
            settime(val)
        }, 1000)
}




function pass_click(){
    var password = document.getElementById("passone").value;
    if (password === ""){
        // alert("请填写密码该字段");
        document.getElementById("passhh").innerHTML = "请填写密码该字段";
        document.getElementById("passhh").style.color = "red";
    }
}



// 登录界面的ajax
$("#btn_send_login").click(function () {
    var username = $("#userone").val();
    var passone = $("#passone").val();
    $.post("/home/",{"mode": 2,"username":username,"passone":passone},function (data) {
        if(data === -1)
        {
            layer.msg('用户名错误', {
                icon: 2,
             time: 2000 //2秒关闭（如果不配置，默认是3秒）
}, function(){
                document.getElementById("userone").value = " ";
                document.getElementById("passone").value = " ";
});
        }
        if(data === 0)
        {

            layer.msg('密码错误', {
                icon: 2,
             time: 2000 //2秒关闭（如果不配置，默认是3秒）
}, function(){
            document.getElementById("userone").value = " ";
            document.getElementById("passone").value = " ";
});

        }
        if(data === 1)
        {
            window.location.href = '/home/';
        }
    }, 'json' )
});