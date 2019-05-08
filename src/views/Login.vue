<template>
    <div class="container">
        <van-tabs color="gray" v-model="active">
            <van-tab title="注册">

                <van-cell-group>
                    <van-field
                        v-model="phone"
                        clearable
                        placeholder="请输入手机号"
                    />

                    <van-field
                        v-model="yzm"
                        center
                        clearable
                        placeholder="请输入短信验证码"

                    >
                        <van-button slot="button" size="small" @click=yz() class="yanzheng">发送验证码</van-button>
                    </van-field>

                    <van-field
                        v-model="password"
                        type="password"
                        placeholder="请输入密码"
                    />


                </van-cell-group>
                <van-button class="icon" @click="toHome()" :disabled="shixiao">注册</van-button>
                <p>注册即表示你同意
                    <van-button class='xieyi' to="/xieyi">用户协议</van-button>
                </p>
            </van-tab>


            <van-tab title="登录">
                <van-cell-group>
                    <van-field
                        v-model="phone1"
                        clearable
                        placeholder="请输入手机号"
                    />

                    <van-field
                        v-model="password1"
                        type="password"
                        placeholder="请输入密码"
                    />

                    <van-button slot="button" size="small" type="primary" @click=yz() class="yanzheng">发送验证码
                    </van-button>
                    </van-field>
                </van-cell-group>
                <van-button class="icon" @click="login()">登录</van-button>
                <p>
                    <van-button to="/forget" class="forget">忘记密码</van-button>
                </p>

            </van-tab>
        </van-tabs>
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
                phone1:'',
                password: '',
                password1:'',
                yzm: '',
                active: 1,
                shixiao: true,
                zhengze: "^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\\d{8}$",
            }
        },
        methods: {
            yz() {
                var zy = new RegExp(this.zhengze);
                if (!zy.test(this.phone)) {
                    this.$dialog.alert({
                        message: '请先输入手机号'
                    });
                } else {
                    axios({
                        method: 'post',
                        url: 'http://10.8.159.34:8080/phonecode.do',
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
                    url: 'http://10.8.159.34:8080/useradd.do',
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

                    axios({
                        method: 'post',
                        url: 'http://10.8.159.34:8080/login.do',
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded'
                        },
                        data: qs.stringify({phone: this.phone1, password: this.password1})
                    }).then((data) => {
                         console.log(data)
                        // if (data.data.code === 0) {
                        //     this.$router.push('/mine')
                        // } else {
                        //     Toast('警示错误信息')
                        // }
                    })

                }



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

    .xieyi, .forget {
        border: none;
        font-size: 12px;
    }
</style>
<!--<template>-->
<!--    <div class="box">-->
<!--        <van-cell-group>-->
<!--            <van-field class="user"-->
<!--                       v-model="phone"-->
<!--                       required-->
<!--                       left-icon='manager-o'-->
<!--                       clearable-->
<!--                       label="手机号"-->
<!--                       placeholder="请输入手机号"-->
<!--            />-->

<!--            <van-field class="psd"-->
<!--                       v-model="password"-->
<!--                       left-icon='goods-collect-o    '-->
<!--                       type="password"-->
<!--                       label="密码"-->
<!--                       placeholder="请输入密码,不能低于6位"-->
<!--                       required/>-->
<!--        </van-cell-group>-->
<!--        <van-cell-group>-->
<!--            <van-field-->
<!--                v-model="authcode"-->
<!--                center-->
<!--                clearable-->
<!--                label="短信验证码"-->
<!--                placeholder="请输入短信验证码"-->
<!--            >-->
<!--                <van-button slot="button" size="small" type="primary" @click = 'yz()'>发送验证码</van-button>-->
<!--            </van-field>-->
<!--        </van-cell-group>-->
<!--        <van-button class="dl" type="primary" @click="toHome()" :disabled = 'aa' >注册</van-button>-->
<!--        <div class="xiao">-->
<!--            <router-link to="Register">注册后表示你同意微善的使用</router-link>-->
<!--        </div>-->

<!--        &lt;!&ndash; <Sanfang /> &ndash;&gt;-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    import { Dialog,Toast } from 'vant';-->
<!--    import axios from 'axios';-->

<!--    export default {-->

<!--        name:'Register',-->
<!--        data(){-->
<!--            return{-->
<!--                phone:'',-->
<!--                password:'',-->
<!--                title:'注册' ,-->
<!--                authcode:'',-->
<!--                aa:true,-->
<!--                zz:'',-->
<!--                show:false-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            yz(){-->
<!--                if(this.phone==''||this.phone.length!=11 || this.password.length<6){-->
<!--                    Dialog.alert({-->
<!--                        title: '错误提示',-->
<!--                        message: '用户名或密码格式不正确，请重新输入'-->
<!--                    }).then(() => {-->
<!--                        // on close-->
<!--                        this.phone='';-->
<!--                        this.password=''-->
<!--                    });-->
<!--                }else{-->
<!--                    axios({-->
<!--                        method:'post',-->
<!--                        url:'http://10.8.159.34:8080/phonecode.do',-->
<!--                        params:{phone:this.phone}-->
<!--                    }).then((data)=>{-->
<!--                        console.log(data)-->

<!--                        if(data.data.code==1001){-->
<!--                            this.zz = data.data.msg	;-->
<!--                            Toast(this.zz)-->
<!--                        }else{-->
<!--                            this.zz = data.data.msg	;-->
<!--                            Toast(this.zz)-->
<!--                        }-->
<!--                    })-->
<!--                    this.aa=false-->
<!--                }-->
<!--            },-->
<!--            toHome(){-->
<!--                axios({-->
<!--                    method:'get',-->
<!--                    url:'http://10.8.159.34:8080/isuser.do',-->
<!--                    params:{phone:this.phone}-->
<!--                }).then((data)=>{-->
<!--                    console.log(data.data)-->
<!--                    if(data.data.code==1001){-->
<!--                        this.zz = data.data.msg	;-->
<!--                        Toast(this.zz)-->
<!--                    }else{-->
<!--                        this.zz = data.data.msg	;-->
<!--                        Toast(this.zz)-->
<!--                        this.$router.push('/mine')-->
<!--                    }-->
<!--                })-->
<!--            }-->
<!--        }-->

<!--    };-->
<!--</script>-->

<!--<style scoped>-->
<!--    .box{width: 90%;margin: 46px auto 0;display: flex;flex-direction: column;justify-content: center}-->
<!--    .user{width: 90%;height: 50px;margin: 0px auto;}-->
<!--    .psd{width: 90%;height: 50px;margin: 0 auto ;}-->
<!--    .dl{width: 90%;height: 50px;margin: 30px auto 0;border-radius: 40px;cursor: pointer;}-->
<!--    .xiao{display: flex;justify-content: center;width: 90%;height: 50px;font-size: 16px;margin:  10px auto 0;}-->
<!--    .xiao a{color: #ccc;line-height: 50px;}-->
<!--</style>-->
