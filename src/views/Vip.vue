<template>
    <div>
        <van-nav-bar
           

            fixed

            @click-left="onClickLeft"

        >
            <img class="gravatar" src="../assets/gravatar.jpg" alt="" slot="left" >
            <span class="vipTit" slot="title">vip会员专区</span>
        </van-nav-bar>
        <div class="container">
            <router-link to="/" tag="div" class="top-img">

                <img src="../assets/viphead.jpg" alt="">
            </router-link>

            <div class="rich-plan">
                <van-cell-group>
                    <van-cell>
                <span slot="title" class="plan-title">
                    丰富计划
                </span>
                    </van-cell>
                    <van-cell >
                        <span class="plan-subtitle" slot>助你达到目的，养成运动好习惯</span>
                        <span slot="right-icon" class="index-num">{{indexNum}}/{{totalPic}}</span>

                    </van-cell>
                </van-cell-group>
                <SwiperCard @setSilderInfo="getSilderInfo" :picList="cardList"></SwiperCard>
              <!--  <CarouselCard
                    :interval="700000"
                    :autoplay='false'
                    height="25vh"
                    type="card"
                    arrow="never"
                    indicator-position="none"
                    @change="changeIndex"
                >
                    <CarouselCardItem v-for="i in 6" :key="i">
                        <h1 v-text="i"></h1>
                    </CarouselCardItem>
                </CarouselCard>-->
            </div>
            <div class="exclusive-courses">
                <van-cell-group>
                    <van-cell>
                <span slot="title" class="course-title">
                    专享课程
                </span>
                    </van-cell>
                    <van-cell >
                        <span class="plan-subtitle" slot>每月更新,惊喜不断</span>


                    </van-cell>
                </van-cell-group>
                <div class="courses-content">
                    <figure v-for="(item,index) in exclusiveCoursesList">
                        <img :src="item.imgUrl" alt="">
                        <figcaption>
                            <p class="title">{{item.title}}</p>
                            <p class="subtitle">{{item.subtitle}}</p>
                        </figcaption>
                    </figure>
                </div>
                <div class="more-exclusive">
                   <router-link tag="a" to="/more" class="to-more-exclusive">
                       全部专享课程
                   </router-link>
                </div>
            </div>
            <div class="more-vip-courses">
                <van-cell-group>
                    <van-cell >
                        <span slot="title" class="more-vip-title">
                            更多会员特权
                        </span>
                    </van-cell>
                    <van-cell >
                        <span slot="title">
                            十项特权，尽显最贵
                        </span>
                    </van-cell>
                </van-cell-group>
                <router-link class="to-more-vip" to="/getmorevip">
                    <img src="../assets/vippic.jpg" alt="">
                </router-link>
                <router-link class="get-vip" to="/getVip">
                    <img src="../assets/getvip.jpg" alt="">
                </router-link>
            </div>

        </div>
        <Foot :activeIndex="activeIndex"></Foot>
    </div>
</template>

<script>
    import Foot from '@/components/Foot'
    import 'vue-carousel-card/styles/index.css'
    import SwiperCard from '@/components/SwiperCard'
    import axios from  'axios'
    export default {

        name: "Vip",
        components:{
            Foot,

            SwiperCard
        },
        data:function () {
           return {
               activeIndex:2,
               indexNum: 1,
               totalPic: 6,
               cardList:[],
               exclusiveCoursesList:[
                   {
                       imgUrl:'/static/img/program_78.f0c84ea.jpg',
                       title:'普拉提肩颈系列',
                       subtitle:'87987人训练过'
                   },
                   {
                       imgUrl:'/static/img/program_78.f0c84ea.jpg',
                       title:'普拉提肩颈系列',
                       subtitle:'87987人训练过'
                   },
                   {
                       imgUrl:'/static/img/program_78.f0c84ea.jpg',
                       title:'普拉提肩颈系列',
                       subtitle:'87987人训练过'
                   },
                   {
                       imgUrl:'/static/img/program_78.f0c84ea.jpg',
                       title:'普拉提肩颈系列',
                       subtitle:'87987人训练过'
                   },
                   {
                       imgUrl:'/static/img/program_78.f0c84ea.jpg',
                       title:'普拉提肩颈系列',
                       subtitle:'87987人训练过'
                   },
                   {
                       imgUrl:'/static/img/program_78.f0c84ea.jpg',
                       title:'普拉提肩颈系列',
                       subtitle:'87987人训练过'
                   },
                   {
                       imgUrl:'/static/img/program_78.f0c84ea.jpg',
                       title:'普拉提肩颈系列',
                       subtitle:'87987人训练过'
                   },
                   {
                       imgUrl:'/static/img/program_78.f0c84ea.jpg',
                       title:'普拉提肩颈系列',
                       subtitle:'87987人训练过'
                   },
                   {
                       imgUrl:'/static/img/program_78.f0c84ea.jpg',
                       title:'普拉提肩颈系列',
                       subtitle:'87987人训练过'
                   }
               ]
           }
        },
        methods:{
            onClickLeft(){

            },
            changeIndex(index) {
                this.indexNum = index + 1;

            },
            getSilderInfo(index,totalNum){
                this.indexNum = index+1;
                this.totalPic = totalNum;

            }
        },
        mounted() {
            var _this = this;
            axios({
                method:'get',
                url:'http://10.8.159.34:8080/alltraining.do',
            }).then(function (data) {
                var result = data.data.data;


                _this.cardList = result.plan;

            })
        }

    }
</script>

<style scoped>
    .gravatar{
        width: 40px;
        height: 40px;
        vertical-align:middle;
        border-radius: 50%;

    }
    .vipTit{
        color: #daa520;
    }
    .container{
        margin-top: 46px;
        margin-bottom: 50px;
    }
    .top-img img{
        width: 100%;
        display: block;
    }
    h1 {
        height: 25vh;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        background: linear-gradient(90deg, rgba(88, 140, 236, 1), rgba(106, 106, 207, 1))
    }

    .plan-title,.course-title,.more-vip-title{
        font-size: 20px;
        color: #daa520;
    }

    .index-num {
        color: #000000;

    }

    .rich-plan {
        border-top: solid #bfbfbf 1vh;
        border-bottom: solid #bfbfbf 1vh;
        padding-bottom: 2vh;
    }
    .plan-subtitle{
        width: 60vw;
    }
    .courses-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .courses-content figure{
        padding: 0;
        margin: 0;
    }
    .courses-content figure img{
        width: 30vw;
    }
    .courses-content figure figcaption{
         padding: 0;
         margin: 0;
        font-size: 12px;
        margin-bottom: 12px;
     }
    .courses-content figure figcaption p{
        margin: 0;
    }
    .courses-content figure figcaption .subtitle{
        color: #333;
    }
    .to-more-exclusive{
        display: block;
        color: #000;
        border:solid 1px #888;
        height: 6vh;
        border-radius: 3vh;
        line-height: 6vh;
        text-align: center;
        width: 35vw;
        font-size: 16px;
    }
    .more-exclusive {
        display: flex;
        justify-content: center;
        padding: 3vh 0;
        border-bottom: 1vh solid #bdbdbd;
    }
    .to-more-vip img{
        width: 100%;
    }
    .get-vip img{
        width: 80%;
        margin: 0 auto;
        display: block;

    }
    .get-vip {
        display: block;
        padding: 3vh 0;
    }
</style>
