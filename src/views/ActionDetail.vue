<template>
    <div class="wrapper">
        <video width="100%" height="240" controls>
            <source :src="detail.video" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            您的浏览器不支持Video标签。
        </video>
        <div class="title">{{detail.name}}</div>
        <div class="content">
            动作要领
            <p style="color: #888888;">{{detail.action}}</p>
        </div>
        <div class="pic">
            <div class="mask"></div>
           <div class="pic1">
               <img :src="detail.imgleft" alt="">

           </div>
            <div class="pic2">
                <img :src="detail.imgright" alt="">
            </div>
        </div>
        <div class="go-back-btn" @click="goBack">
            <van-icon name="arrow-left"></van-icon>
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios';
    export default {

        name: "ActionDetail",
        data:function(){
            return {
                detail:{}
            }

        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        },
        mounted() {
            var actionId = this.$route.query.actionId;
            var _this = this;
            axios({
                method:'get',
                url:'http://www.k4me.top:8081/funsport-1.0/actionVideo.do',
                params:{actionid:actionId}
            })
                .then(function (data) {
                   var result = data.data;

                   var detail = result.data;
                   _this.detail = detail[0];
                })
        }

    }
</script>

<style scoped>
    .wrapper{
        background: black;
        height: 100vh;
    }
    .title{
        color: #FFFFFF;
        padding-top: 2vh;
        padding-left:  8vw;
    }
    .content{
        color: #FFFFFF;
        padding-top: 2vh;
        padding-left:  8vw;
        font-size: 14px;

    }
    .pic{
        overflow: hidden;
        position: relative;

    }
    .pic .mask{
        width: 100%;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.5);
    }
    .pic img{
        width: 50vw;
        display: block;
    }
    .pic .pic1,.pic .pic1{
        float: left;



    }
    .go-back-btn{
        background: rgba(0,0,0,0.1);
        color: #f3f3f3;
        position: fixed;
        top:2vh;
        left: 4vw;
        width: 8vw;
        height: 8vw;
        text-align: center;
        line-height: 8vw;
        border-radius: 50%;
    }

</style>
