<template>
    <div>
        <div class="container">
            <Head/>

            <van-tabs @click="onClick" style="margin:0 20px;text-align: center" v-model="active">

                <van-tab title="注册">
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
                            v-model="password"
                            type="password"
                            placeholder="密码(6位或以上)"
                            required:false
                        />


                    </van-cell-group>
                    <van-button type="default" class="icon">注册</van-button>
                    <p>注册即表示你同意<van-button type="default" class="xieyi">用户协议</van-button>及<van-button type="default" class="tiaokuan">隐私条款</van-button></p>
                </van-tab>
                <van-tab title="登录" line-width="20">
                    <van-cell-group>
                        <van-field
                            v-model="phoneNum"
                            required:false
                            clearable
                            label="手机号"
                            placeholder="请输入手机号"
                        />

                        <van-field
                            v-model="password"
                            type="password"
                            label="密码"
                            placeholder="请输入密码"
                            required:false
                        />


                    </van-cell-group>
                    <van-button class="icon" to="/entry">登录</van-button><br/>
                    <van-button to="/forget" class="forget">忘记密码</van-button>
                </van-tab>

            </van-tabs>


        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                phoneNum: '',
                password: '',
                yzm: '',
                active: 2

            }
        },
        methods: {
            onClick(index, title) {
                // this.$toast(title);
            },
            tap() {
                this.$router.push('/Mine')
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 46px;
        text-align: center;
    }

    .icon {
        width: 280px;
        background: #666;
        color: #fff;
        margin-top: 30px;
    }

    p {
        font-size: 16px;
        color: #ccc;
    }

    p a {
        text-decoration: underline;
        color: #000;
    }

    .xieyi,.tiaokuan,.forget {
        border: none;
    }
</style>
