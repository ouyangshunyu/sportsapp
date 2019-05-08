<template>
    <div>
        <van-nav-bar
            :title="topTit"



            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <img class="gravatar" src="../assets/gravatar.jpg" alt="" slot="left" >
            <view-router slot="right" name="right">

            </view-router>
            <HeadRightRun ></HeadRightRun>
        </van-nav-bar>

    </div>
</template>

<script>
    import HeadRightRun from './HeadRightRun'
    export default {
        name: "Head",
        data:function () {
           return {

           }
        },
        components:{
            HeadRightRun
        },
        methods:{
            onClickLeft(){

            },
            onClickRight(){

            }

        },

        props:['topTit']
    }
</script>

<style scoped>
    .gravatar{
        width: 40px;
        height: 40px;
        vertical-align:middle;
        border-radius: 50%;

    }
    @font-face {
        font-family: 'my-icon';
        src: url('../assets/icon/iconfont.ttf') format('truetype');
    }

    .my-icon {
        font-family: 'my-icon';
    }

    .my-icon-benpao::before {
        content: "\e60d";
    }
</style>
