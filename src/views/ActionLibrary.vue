<template>
    <div>
        <van-nav-bar
            fixed

            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
        <span slot="left" style="color: black">
            <van-icon size="20px" color="black" name="arrow-left" />
        </span>
            <span slot="title">动作库</span>
            <van-icon slot="right" color="black" name="search" size="25px"></van-icon>
        </van-nav-bar>
        <div class="container">
           <ul class="list">
               <router-link v-for="(item,index) in list" tag="li" :to="{name:'ActionLibraryList',query:{placeId:item.placeid}}" class="item">
                    <p class="title">{{item.place}}</p>
                    <p class="subtitle">{{item.num}}个动作</p>
               </router-link>

           </ul>
        </div>
    </div>


</template>

<script>
    import  axios from  'axios'
    export default {

        name: "ActionLibrary",
        data:function(){
            return{
                list:[]
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/recommend');

            },
            onClickRight(){

            }
        },
        mounted() {
            var _this = this;
            axios({
                method:'get',
                url:'http://www.k4me.top:8081/funsport-1.0/actionType.do',

            })
                .then(function (data) {
                   _this.list = data.data.data;
                   console.log(_this.list)
                })
        }

    }
</script>

<style scoped>
    .container{
        background:  #dbdbdb ;
        height: 100vh;
        padding-top: 46px;
        box-sizing: border-box;
    }
    .container .list{
        overflow: hidden;

    }
    .container .list .item{
        width: 31vw;
        height: 26vw;
        background: #FFFFFF;
        float: left;
        margin-left:  2vw;
        margin-top: 2vw;

    }
    .container .list .item p{
        text-align: center;
    }
    .container .list .item .title{
        font-size: 14px;
        margin-bottom: 0;
        margin-top: 28px;
    }
    .container .list .item .subtitle{
        font-size: 12px;
        margin: 0;
        color: #333333;
    }
</style>
