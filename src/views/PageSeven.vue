<template>
    <div>

        <div class="container">
            <h2>已根据您的信息匹配针对训练,请登录</h2>

            <van-loading type="spinner" class="jiazai" />


        </div>
    </div>
</template>

<script>
    export default {
        name: "PageSeven",
        data() {
            return {

            }
        },
        mounted(){
            var _this = this;
            setTimeout(function(){

                _this.$router.push('/login');
                },2000)

        }
    }
</script>

<style scoped>
    .container {
        margin-top:60%;
        text-align: center;
    }
    h2{
        text-align: center;
        font-weight: normal;
        font-size:18px;
        margin-top:0;
        padding: 0;
    }
    .jiazai{
        margin-left:45%;
    }

</style>
