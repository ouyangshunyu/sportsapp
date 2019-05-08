<template>
    <div>

        <div class="container">
            <h2>根据您的信息匹配针对训练</h2>

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
            setTimeout(function(){
                    console.log('aa');
                // location.href='/login'
                },1000)

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
        margin-top:;
        padding: 0;
    }
    .jiazai{
        margin-left:45%;
    }

</style>
