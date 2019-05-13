<template>
    <div class="container">
        <van-tabs @click="getIndex" color="gray" v-model="active">
            <van-tab title="注册">


            </van-tab>


            <van-tab title="登录">


            </van-tab>
        </van-tabs>
        <router-view @setActiveIndex="getActiveIndex"></router-view>
    </div>
</template>

<script>
    import qs from "qs"
    import {Dialog, Toast} from 'vant';
    import axios from 'axios';

    export default {
        name: "Join",
        data() {
            return {
                phone: '',
                phone1: '',
                password: '',
                password1: '',
                yzm: '',
                active: 1,
                shixiao: true,
                zhengze: "^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\\d{8}$",
            }
        },
        methods: {
            getIndex(index){
                this.$toast.clear('clearAll');
              if(index==1){
                  this.$router.push('/login')
              }else{
                  this.$router.push('/register')
              }
            },
            getActiveIndex(index){
               this.active = index
            },
            blurPhone(){
                let phone = this.phone;
                if(!phone){
                    this.$toast("请输入手机号")
                    return false
                }
                let reg = new RegExp(this.zhengze);
                if(!reg.test(this.phone)){
                    this.$toast("请输入正确的手机号")
                    return false
                }
            }
            ,
            yz() {
                var zy = new RegExp(this.zhengze);
                if (!zy.test(this.phone)) {
                    this.$dialog.alert({
                        message: '请先输入手机号'
                    });
                } else {
                    axios({
                        method: 'post',
                        url: 'http://www.k4me.top:8081/funsport-1.0/phonecode.do',
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded'
                        },
                        data: qs.stringify({phone: this.phone})
                    }).then((data) => {
                        console.log(data.data)

                    })
                    this.shixiao = false

                }

            },
            toHome() {
                axios({
                    method: 'post',
                    url: 'http://www.k4me.top:8081/funsport-1.0/useradd.do',
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    data: qs.stringify({code: this.yzm, phone: this.phone, password: this.password})
                }).then((data) => {
                    console.log(data.data);
                    alert(data.data.msg);
                    this.$router.push('/pageOne')
                })
            },
            login() {
                if(!this.phone1){
                    Toast('请输入手机号')
                    return false;
                }
                if(!this.password1){
                    Toast('请输入密码')
                    return false;
                }
                var zy = new RegExp(this.zhengze);
                if(!zy.test(this.phone1)){
                    Toast('请输入正确的手机号')
                    return false;
                }

                axios({
                    method: 'post',
                    url: 'http://www.k4me.top:8081/funsport-1.0/login.do',
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    data: qs.stringify({phone: this.phone1, password: this.password1})
                }).then((data) => {
                    console.log(data.data)
                    if (data.data.code === 1) {

                        this.$store.commit('setUserInfo',{
                            token:data.data.data,
                            nickName:'舜玉',
                            gravatar:'../assets/gravatar.jpg'
                        });
                        var _this = this;
                        Toast({
                            message:"登录成功",
                            onClose() {
                                var redirectUrl = _this.$route.query.redirect;
                                console.log(redirectUrl);
                                if(redirectUrl){
                                    _this.$router.push(redirectUrl)
                                }else{
                                    _this.$router.push('/mine')
                                }

                            }
                        })

                        return false;

                    } else {
                        Toast('用户名或密码错误')
                    }
                })

            }


        }

    }
</script>

<style scoped>
    .container {
        margin-top: 20px;
        text-align: center;
    }



    p {
        font-size: 12px;
        color: #ccc;
    }

    p a {
        text-decoration: underline;
        color: #000;
    }

    .xieyi, .forget {
        border: none;
        font-size: 12px;
    }
</style>
