<template>
    <div>
        <van-nav-bar
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="container">
        <h1>忘记密码</h1>

        <van-tabs @click="onClick" style="margin:0 20px;text-align: center" v-model="active">
                <van-cell-group>
                    <van-field
                        v-model="phoneNum"
                        required:false
                        clearable
                        placeholder="请输入手机号"
                    />
                    <van-field
                        v-model="yzm"
                        center
                        clearable
                        placeholder="请输入短信验证码"
                    >
                        <van-button slot="button" size="small" type="primary"
                                    style="border:none;background:none;color:#333;">获取验证码
                        </van-button>
                    </van-field>

                    <van-field
                        v-model="password1"
                        type="password"
                        placeholder="设置新密码(6位或以上)"
                        required:false
                    />


                </van-cell-group>
                <van-button type="default" class="icon" to="/login">确定</van-button>

        </van-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        data(){
            return{
                phoneNum: '',
                password1: '',
                yzm: '',
                active:2

            }
        },
        methods:{
            onClick(){

            },
            onClickLeft(){
                this.$router.go(-1)

            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 46px;
        text-align: center;
    }
    h1{
        font-size:24px;
        font-weight: normal;
    }

    .icon {
        width: 280px;
        background: #666;
        color: #fff;
        margin-top: 30px;
    }
</style>
