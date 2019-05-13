<template>
 <div class="container">
     <van-cell-group>
         <van-field
             v-model="phone"
             clearable
             placeholder="请输入手机号"
         />

         <van-field
             v-model="password"
             type="password"
             placeholder="请输入密码"
         >


         </van-field>
     </van-cell-group>
     <van-button class="icon" @click="login()">登录</van-button>
     <p>
         <van-button to="/forget" class="forget">忘记密码</van-button>
     </p>
 </div>
</template>

<script>
    import qs from "qs"
    import {Dialog, Toast} from 'vant';
    import axios from 'axios';

    export default {
        name: "Login",
        data() {
            return {
                phone: '',

                password: '',

                active: 1,
                activeIndex:1,
                shixiao: true,
                zhengze: "^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\\d{8}$",
            }
        },
        methods: {


            login() {
                if(!this.phone){
                    Toast('请输入手机号')
                    return false;
                }
                if(!this.password){
                    Toast('请输入密码')
                    return false;
                }
                var zy = new RegExp(this.zhengze);
                if(!zy.test(this.phone)){
                    Toast('请输入正确的手机号')
                    return false;
                }

                axios({
                    method: 'post',
                    url: 'http://www.k4me.top:8081/funsport-1.0/login.do',
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    data: qs.stringify({phone: this.phone, password: this.password})
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
        background: #666;
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

  .forget {
        border: none;
        font-size: 12px;
    }
</style>
