<template>
    <div>
        <van-nav-bar>
            <van-icon name="arrow-left" slot="left" color="gray" @click="onClickLeft"/>
        </van-nav-bar>

        <div class="container">
            <h2>你的性别是?</h2>
            <p><img src="@/assets/640.jpg"/></p>
            <p>男</p>
            <p><img src="@/assets/324180.jpg"/></p>
            <p>女</p>

            <van-button to="/pageFive" class="next">下一步</van-button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "PageFore",
        data(){
            return{

            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)

            }
        }
    }
</script>

<style scoped>
    .container{
        margin:0 20px;
        margin-top:50px;
        text-align: center;
        font-weight:normal;
    }
    h2{
        font-weight: normal;
        font-size:18px;
        margin:0;
        padding: 0;
    }
    .next {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #666;
        color: #000;
        font-size: 16px;
    }
    p img{
        width:100px;
        height:100px;
        border-radius: 50%;
    }
</style>
