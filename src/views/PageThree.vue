<template>
    <div>
        <van-nav-bar>
            <van-icon name="arrow-left" slot="left" color="gray" @click="onClickLeft"/>
        </van-nav-bar>

        <div class="container">
            <h2>点击头像</h2>
            <h2>上传自己的照片吧</h2>
            <van-uploader :after-read="onRead" accept="image/jpg, image/png" multiple>
                <van-icon name="photograph" />
            </van-uploader>
            <img :src="img"/>
            <van-button to="/pageFour" class="next">下一步</van-button>

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "PageThree",
        data(){
            return{

            }
        },
        computed:{
            ...mapState(['img'])
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)

            },
            onRead(file) {
                // this.img=file.content
                this.$store.commit('upload',file.content)
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
    img{
        width:100px;
        height:100px;
        border-radius:50%;
    }
    p{
        width:100px;
        height:100px;
        border:1px solid #ccc;
        border-radius:50%;
        margin-top:50px;
        text-align: center;
        line-height: 100px;
        margin-left:80px;
    }
    .next {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #666;
        color: #000;
        font-size: 16px;
    }
</style>
