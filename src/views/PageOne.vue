<template>
    <div>
        <div class="container">
            <h2>恭喜你完成注册</h2>
            <p>完善基本信息</p>
            <p>获得更适合你的训练</p>
            <van-button to="/pageTwo" class="next">下一步</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageOne",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .container{
        margin-top:200px;
        text-align: center;
        font-weight:normal;
    }
    h2{
        font-weight: normal;
    }
    p{
        margin:0;
        padding: 0;
        font-size:14px;
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

</style>
