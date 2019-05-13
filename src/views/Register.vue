<template>
    <div class="container">
        <van-cell-group>
            <van-field
                v-model="phone"
                clearable
                placeholder="请输入手机号"
                @input="watchPhone"
                @focus="focusPhone"
            />

            <van-field
                v-model="yzm"
                center
                clearable
                placeholder="请输入短信验证码"
                @input="watchCaptcha"

            >
                <van-button slot="button" size="small" @click=yz() :disabled="captchaBtnDisabled" ref="sendCaptchaBtn" class="yanzheng">发送验证码</van-button>
            </van-field>

            <van-field
                v-model="password"
                type="password"
                placeholder="请输入密码"
                @input="watchPassword"

            />


        </van-cell-group>
        <van-button class="icon" @click="toHome()" :disabled="shixiao">注册</van-button>
        <p>注册即表示你同意
            <van-button class='xieyi' @click="goProtocol" >用户协议</van-button>
        </p>
    </div>
</template>

<script>
    import qs from "qs"

    import axios from 'axios';

    export default {
        name: "Register",
        data() {
            return {
                activeIndex:0,
                phone: '',
                timer:'',

                password: '',

                yzm: '',
                captchaBtnDisabled:false,

                shixiao: true,
                zhengze: "^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\\d{8}$",
            }
        },
        methods: {
            focusPhone(){
                this.$toast.clear("clearAll");
            },
            watchCaptcha(){
                if(this.phone&&this.yzm&&this.password){
                    this.shixiao = false
                }else{
                    this.shixiao = true
                }
            },
            watchPhone(){
                if(this.phone&&this.yzm&&this.password){
                    this.shixiao = false
                }else{
                    this.shixiao = true
                }
            },
            watchPassword(){
                if(this.phone&&this.yzm&&this.password){
                    this.shixiao = false
                }else{
                    this.shixiao = true
                }
            },
            goProtocol(){
                this.$toast.clear('clearAll');
                this.$router.push('/xieyi')
            },

            yz() {
                var zy = new RegExp(this.zhengze);
                if(!this.phone){
                    this.$toast("请输入手机号");
                    return false;
                }
                if (!zy.test(this.phone)) {
                    this.$toast("请输入正确手机号");
                    return false;
                }

                    axios({
                        method: 'post',
                        url: 'http://www.k4me.top:8081/funsport-1.0/phonecode.do',
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded'
                        },
                        data: qs.stringify({phone: this.phone})
                    }).then((data) => {
                        console.log(data.data)
                        this.captchaBtnDisabled = true
                        var count = 60
                        var _this = this;
                        this.timer =setInterval(function () {
                            count --;
                            _this.$refs.sendCaptchaBtn.innerHTML = count +'s';
                            if(count == 0){

                                clearInterval(_this.timer)
                                count = 60;
                                this.captchaBtnDisabled = false
                                _this.$refs.sendCaptchaBtn.innerHTML = '发送验证码';
                            }
                        },1000)


                    })




            },
            toHome() {
                clearInterval(this.timer);
                if(this.yzm.length !=4){
                   this.$toast("请输入四位验证码")
                    return false;
                }
                axios({
                    method: 'post',
                    url: 'http://www.k4me.top:8081/funsport-1.0/useradd.do',
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    data: qs.stringify({code: this.yzm, phone: this.phone, password: this.password})
                }).then((data) => {
                    var result = data.data;

                    if(result.code == 1){
                        this.$router.push('/pageOne')
                    }else{
                        this.$toast(result.data)
                        location.reload();
                    }





                })
            },



        },
        mounted() {
            this.$emit('setActiveIndex',this.activeIndex)
        }

    }
</script>

<style scoped>
    .container {

        text-align: center;
        padding: 0 10vw;
    }

    .icon {
        width: 280px;
        background: #000;
        color: #fff;
        margin-top: 30px;
    }

    .yanzheng {
        border: none;
        background: #fff
    }

    p {
        font-size: 12px;
        color: #ccc;
    }

    p a {
        text-decoration: underline;
        color: #000;
    }


</style>
