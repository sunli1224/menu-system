<template>
    <div>
        <div>
            <h2>添加菜品</h2>
            <span>菜品:</span><input type="text" v-model="dishname"><br>
            <span>分类:</span><input type="text" v-model="dishclass"><br>
            <span>单价:</span><input type="text" v-model="dishmoney"><br>
            <span>图片</span><input type="text" v-model="dishimg"><br>
            <br>
            <span>上传图片</span><input id="fileone" type="file" @change="upload"><br>
<!--            <button type="button" @click="upload(this)">上传</button><br>-->
            <button type="button" @click="send">添加</button>
        </div>
               <div>
            <h2>删除菜品</h2>
                   <div  v-for="item in listbase" v-model="listbase">
            <span>{{ item }}</span>      <a @click="del(item)">删除</a>
                   </div>
               </div>
    </div>
</template>

<script>
    export default {
        name: "manage",
        data(){
            return{
                dishname:" ",
                dishclass:" ",
                dishmoney:" ",
                dishimg:" ",
                listbase: []
            }
        },
        methods:{
            upload(val){
                // let files = document.getElementById("fileone").files[0];
                // let formdata = new FormData();
                // formdata.append("file",val.target.files[0]);
                // console.log(val.target.files[0]);
                // let mode = {
                //     mode: 4,
                //     headers:{'Content-Type':'multipart/form-data'},
                //     formdatas:formdata
                // };
                this.$axios.post("http://127.0.0.1:9000/admin/",{"file":val.target.files[0]})
                    .then(
                        res=>{
                            alert("上传成功");
                        }
                    )
                    .catch(
                        err=>{
                            alert("上传失败");
                        }
                    )
            },
            send(){
                if(this.dishname === " "){
                    alert("请填写菜品名称");
                    return;
                }
                if(this.dishclass === " "){
                    alert("请填写菜品的类别");
                    return;
                }
                if(this.dishmoney === " "){
                    alert("请填写菜品的价格");
                    return;
                }
                if(this.dishimg === " "){
                    alert("请填写菜品的图片名称");
                    return;
                }

                this.$axios.post("http://127.0.0.1:9000/admin/",{mode:1 ,dishname:this.dishname ,dishclass:this.dishclass ,dishmoney:this.dishmoney ,dishimg:this.dishimg})
                    .then(
                        res=>{
                            this.dishname = " ";
                            this.dishclass = " ";
                            this.dishmoney = " ";
                            this.dishimg = " ";
                            alert("成功添加");
                        }
                    ).catch(
                        err=>{
                            this.dishname = " ";
                            this.dishclass = " ";
                            this.dishmoney = " ";
                            this.dishimg = " ";
                            alert("添加失败");
                        }
                )
            },
            del(item){
                alert(item);
                this.$axios.post("http://127.0.0.1:9000/admin/",{mode:3,delContent:item})
                    .then(
                        res=>{
                            alert("删除成功");
                        }
                    )
                    .catch(
                        err=>{
                            alert("操作失败");
                        }
                    )
            }
        },
        created(){
            this.$axios.post("http://127.0.0.1:9000/admin/",{mode:2})
                .then(
                    res=>{
                        console.log(res.data["content"]);
                        let base =res.data["content"];
                        for(let item of base){
                            this.listbase.push(item[0])
                        }
                        // const key = Object.keys(res,data);
                        // console.log(key)
                    }
                )
                .catch(
                    err=>{
                        console.log(err)
                    }
                )
        },
        // beforeRouteEnter(to,from,next){
        //     // alert(this.name);//报错，beforeRouteEnter不能够访问this对象，因为守卫触发时组件还未被创建。
        //     next(ob=>{
        //         alert(ob.name);
        //     })
        //
        // },
        beforeRouteLeave(to,from,next){
            const answer = confirm('您确定要离开吗？');
            if(answer){
                next();
            }else{
                next();
            }
        }
    }
</script>

<style scoped>
    h2{
        color: burlywood;
    }
    span{
        font-size: 25px;
    }
    button{
        position: absolute;
        left: 240px;
    }
    /*a{*/
    /*    text-align: center;*/
    /*    font-size: 25px;*/
    /*    position: absolute;*/
    /*    top: 250px;*/
    /*    left: 250px;*/
    /*}*/
</style>