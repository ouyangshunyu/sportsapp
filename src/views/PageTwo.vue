<template>
    <div>
        <div class="container">
            <h2>取一个你喜欢的昵称吧</h2>
            <van-cell-group>
                <van-field
                    v-model="username"
                    required:false
                    clearable
                    placeholder="2-15个字"
                />
            </van-cell-group>
            <van-button to="/pageThree" class="next">下一步</van-button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "PageTwo",
    data(){
            return{
                username:''
            }
    }
    }
</script>

<style scoped>
    .container{
        margin:0 20px;
        margin-top:100px;
        text-align: center;
        font-weight:normal;
    }
    h2{
        font-weight: normal;
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
