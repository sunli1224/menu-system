<template>
    <div>
        <div v-for="item in this.allbase">
            <span><h1>{{item[0]}}</h1></span>
            <span><h1>RMB {{item[1]}}/份</h1></span>
            <a @click="orderdish(item)">+</a><br>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dishsametype",
        data(){
            return{
                allbase:[]
            }
        },
        methods:{
            orderdish(item){
                let userlogin = this.$cookies.get("user");
                if (userlogin === null)
                {
                    alert("还未登录");
                }
                else{
                    this.$axios.post("http://127.0.0.1:9000/order/",{mode:1,users:userlogin,orderDishName:item[0],num:1,money:item[1],dishype:item[2]})
                        .then(
                            res=>{
                                alert(res.data["content"])
                            }
                        ).catch(
                        err=>{
                            alert("点单失败")
                        }
                    )
                }

            }
        },
        props:['fathername'],
        created() {
            this.$axios.post("http://127.0.0.1:9000/dishes/",{mode:this.fathername})
                .then(
                    res=>{
                        console.log(res.data["content"]);
                        let base =res.data["content"];
                        for(let item of base){
                            this.allbase.push(item)
                        }
                    }
                ).catch(
                err=>{
                    console.log(err);
                }
            )
        }
    }
</script>

<style scoped>
a{
    font-size: 40px;
    color: burlywood;
}
</style>