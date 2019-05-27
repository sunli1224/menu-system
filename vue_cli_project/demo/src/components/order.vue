<template>
    <div>
        <table>
            <caption>
                <span>单号:{{singleNum}}</span>
                <span><button type="button" @click="senddata">提交订单</button></span>
            </caption>
            <tr>
                <td>序号</td>
                <td>菜名</td>
                <td>单价</td>
                <td>数量</td>
                <td>价格</td>
                <td>备注</td>
                <td>种类</td>
                <td>删除</td>
            </tr>
            <tr v-for="(item, index) in this.orderAll">
                <td>{{ index+1 }}</td>
                <td>{{ item[0] }}</td>
                <td>{{item[2] / item[1] }}</td>
                <td><span @click="deletes(item)">-</span><input type="text" :value="item[1]" readonly="readonly" ><span @click="adds(item)">+</span></td>
                <td>{{ item[2]}}</td>
                <td>加辣</td>
                <td>{{ item[3] }}</td>
                <td><button type="button" @click="del(item[0])">删除</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "order",
        data(){
            return{
                orderAll:[
                ],
                singleNum:" ",

            }
        },
        created() {
            this.singleNum = (Math.floor(Math.random()*9)*1000 + Math.floor(Math.random()*9)*100 + Math.floor(Math.random()*9)*10 + Math.floor(Math.random()*9));
            this.$axios.post("http://127.0.0.1:9000/order/",{mode:2})
                .then(
                    res=>{
                        let base =res.data["content"];
                        for(let item of base){
                            this.orderAll.push(item)
                        }
                    }
                )
                .catch(
                    err=>{
                        console.log(err);
                    }
                )
        },
        methods:{
            senddata(){
                this.$axios.post("http://127.0.0.1:9000/order/",{mode:6,ordernum:this.singleNum})
                    .then(
                        res=>{
                            alert(res.data["content"]);
                        }
                    ).catch(
                    err=>{
                        console.log(err);
                        alert("创建订单号失败");
                    }
                )
            },
            del(item){
                this.$axios.post("http://127.0.0.1:9000/order/",{mode:3,delName:item})
                    .then(
                        res=>{
                            alert(res.data["content"]);
                        }
                    ).catch(
                        err=>{
                            console.log(err);
                            alert("删除失败");
                        }
                )
            },
            deletes(item){
                let num;
                num = item[1] - 1;
                // alert(num);
                this.$axios.post("http://127.0.0.1:9000/order/",{mode:4,nums:num,dealname:item[0],eachmoney:item[2]/item[1]})
                    .then(
                        res=>{
                            alert(res.data["content"]);
                        }
                    ).catch(
                        err=>{
                            console.log(err);
                            alert("删除失败");
                        }
                )
            },
            adds(item){
                let num;
                num = item[1] + 1;
                // alert(num);
                this.$axios.post("http://127.0.0.1:9000/order/",{mode:5,nums:num,dealname:item[0],eachmoney:item[2]/item[1]})
                    .then(
                        res=>{
                            alert(res.data["content"]);
                        }
                    ).catch(
                    err=>{
                        console.log(err);
                        alert("删除失败");
                    }
                )
            }
        }

    }
</script>

<style scoped>
    div{
        position: relative;
        left: 30%;
    }
    input{
        width: 50px;
    }
    table
    {
        border-radius: 15px;
        border-collapse:collapse;
    }

    table, td, th,caption
    {
        border:1px solid black;
        font-size: 30px;
    }
</style>