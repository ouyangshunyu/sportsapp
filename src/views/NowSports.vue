<template>
    <div>
    <div class="container">
        <h1>视频</h1>
        <van-button type="default" class="icon" to="/login">即刻运动</van-button>
    </div>
    </div>
</template>

<script>
    export default {
        name: "NowSports",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .container{
        margin-top:300px;
        text-align: center;

    }
h1{
    font-size:60px;
    font-weight: 400;

}
    .icon{
        width:300px;
        margin-top:30px;
        font-size:20px;
    }
</style>
