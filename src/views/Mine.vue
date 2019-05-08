<template>
<<<<<<< HEAD
   <div>
       <van-nav-bar
           fixed
           title="我的训练"



           @click-left="onClickLeft"
           @click-right="onClickRight"
       >
           <img class="gravatar" src="../assets/gravatar.jpg" alt="" slot="left" >
           <van-icon size="20px" class-prefix="my-icon" name="benpao"  slot="right" />
       </van-nav-bar>
       <div class="container">
           <van-cell-group>
               <van-cell   value="训练总时长" />
               <van-cell size="large"  is-link to="/index" >
                   <span class="duration-title" slot="title">0</span>
                   <span class="grade" slot>lv0</span>
               </van-cell>

               <van-cell  size="large"  is-link to="/index" >
                    <span class="ranking-tit" slot="title">本周好友排名</span>
                   <img class="friend-gravatar" src="../assets/gravatar.jpg" alt="" slot >
                   <van-icon slot="right-icon" name="arrow" class="custom-arrow-icon" />
               </van-cell>
           </van-cell-group>
           <div class="separator"></div>
           <van-cell-group>
               <van-cell  >
                   <span class="train-tit" slot="title">我的训练</span>
               </van-cell>

           </van-cell-group>
           <div class="base-train">
               <img src="../assets/program_78.jpg" alt="">
               <div class="base-train-tit">基础体能训练系列</div>
               <div class="base-train-num"><span>4644946</span>人训练过</div>

           </div>
           <van-cell-group>
               <van-cell  style="border-bottom: 1px solid #333333; width: 90vw; margin: 0 5vw" >
                   <span  slot="title">高效燃烧脂肪</span>
                    <div style="color: #333333;margin-bottom: 1vh" slot="label">
                        5个动作，循环3次，21分钟
                    </div>
               </van-cell>
               <van-cell  style="border-bottom: 1px solid #333333; width: 90vw; margin: 0 5vw" >
                   <span  slot="title">高效燃烧脂肪</span>
                   <div style="color: #333333;margin-bottom: 1vh" slot="label">
                       5个动作，循环3次，21分钟
                   </div>
               </van-cell>
               <van-cell  style=" width: 90vw; margin: 0 5vw" >
                   <span  slot="title">高效燃烧脂肪</span>
                   <div style="color: #333333;margin-bottom: 1vh" slot="label">
                       5个动作，循环3次，21分钟
                   </div>
               </van-cell>

           </van-cell-group>
           <div class="more-train">
               <img src="../assets/program_69.jpg" alt="">
               <div class="more-train-tit">想要训练更有效？</div>
               <button class="more-btn" type="button">获取会员专属内容</button>
           </div>
       </div>

       <Foot :activeIndex="activeIndex"></Foot>
   </div>

</template>

<script>
    import Foot from '@/components/Foot'
    export default {
        name: "Mine",
        components:{
            Foot
        },
        data:function () {
           return {
               title:'我的训练',
               activeIndex:0

           }
        },
        methods:{
            onClickLeft(){

            },
            onClickRight(){

            }

        },


    }
</script>

<style scoped>
    .gravatar{
        width: 40px;
        height: 40px;
        vertical-align:middle;
        border-radius: 50%;

    }
    .container{
        margin-bottom: 50px;
        margin-top: 46px;
    }
    .friend-gravatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;

        display: inline-block;
        vertical-align:top;
    }
    .custom-arrow-icon{
        line-height: 37px;
    }
    .duration-title{
        font-size: 30px;
    }
    .grade{
        color:#000000;
    }
    .ranking-tit{
        line-height: 37px;
    }
    .separator{
        width: 100%;
        height: 1vh;
        background: #aaaaaa;
    }
    .train-tit{
        font-size: 20px;
        color: #000;

    }
    .base-train{
        position: relative;

    }
    .base-train img{
        width: 90vw;
        margin: 0 5vw;
        height: 25vh;
    }
    .base-train .base-train-tit{
        position: absolute;
        top: 50%;
        left: 10%;
        color: #ffffff;
        font-size: 3vh;
    }
    .base-train .base-train-num{
        position: absolute;
        top: 65%;
        left: 10%;
        color: #ffffff;
        font-size: 2vh;
    }
    .more-train{
        width: 100%;
        position: relative;
    }
    .more-train img{
        width: 100%;
        height: 30vh;
    }
    .more-train .more-train-tit{
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%,0);
        color: #ffffff;
        font-size: 20px;
    }
    .more-train .more-btn{
        background: rgba(255,255,255,0);
        outline: none;
        border:1px solid #ffffff;
        position: absolute;
        top: 45%;
        left: 50%;
        color: #ffffff;
        width: 45vw;
        height: 8vh;
        font-weight: lighter;
        transform: translate(-50%,0);


    }
</style>
