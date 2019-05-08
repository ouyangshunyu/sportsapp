<template>
    <div>
        <div>
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <a href="#">
                        <img class="swiper-img" src="../assets/program_21.png" alt="">
                    </a>
                </van-swipe-item>
                <van-swipe-item>
                    <a href="#">
                        <img class="swiper-img" src="../assets/program_22.jpg" alt="">
                    </a>
                </van-swipe-item>
                <van-swipe-item>
                    <a href="#">
                        <img class="swiper-img" src="../assets/program_23.jpg" alt="">
                    </a>
                </van-swipe-item>
            </van-swipe>
        </div>

        <div>
            <div class="middle-nav">
                <figure>
                    <img src="../assets/movie.png" alt="">
                    <figcaption>
                        <p>视频训练</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../assets/plan.png" alt="">
                    <figcaption>
                        <p>训练计划</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../assets/freedom.png" alt="">
                    <figcaption>
                        <p>自由训练</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../assets/slimming.png" alt="">
                    <figcaption>
                        <p>训练营</p>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div class="follow-plan">
            <van-cell-group>
                <van-cell>
                <span slot="title" class="plan-title">
                    跟着计划练
                </span>
                </van-cell>
                <van-cell title="训练计划">
                    <span slot="" class="index-num">{{indexNum}}/{{totalPic}}</span>

                </van-cell>
            </van-cell-group>
            <CarouselCard
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
            </CarouselCard>
        </div>
        <div class="follow-movie">
            <van-cell-group>
                <van-cell>
                <span slot="title" class="movie-title">
                    跟着视频练
                </span>
                </van-cell>
                <van-cell>
                <span slot="title">
                   减肥燃脂
                </span>
                    <Hscroll slot="label">
                        <li>
                            <a href="">
                                <img src="../assets/program_23.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_22.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_21.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_69.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_78.jpg" alt="">
                            </a>
                        </li>
                    </Hscroll>

                </van-cell>
                <van-cell>
                <span slot="title">
                   腹肌塑造
                </span>
                    <Hscroll slot="label">
                        <li>
                            <a href="">
                                <img src="../assets/program_23.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_22.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_21.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_69.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_78.jpg" alt="">
                            </a>
                        </li>
                    </Hscroll>

                </van-cell>
                <van-cell>
                <span slot="title">
                   瑜伽专题
                </span>
                    <Hscroll slot="label">
                        <li>
                            <a href="">
                                <img src="../assets/program_23.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_22.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_21.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_69.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/program_78.jpg" alt="">
                            </a>
                        </li>
                    </Hscroll>

                </van-cell>
                <van-cell>
                <span slot="title">
                   教练专区
                </span>
                    <Hscroll slot="label" class="train-area">
                        <li>
                            <a href="">
                                <img style="width: 20vw;height: 20vw" src="../assets/program_23.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img style="width: 20vw;height: 20vw"  src="../assets/program_22.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img style="width: 20vw;height: 20vw"  src="../assets/program_21.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img style="width: 20vw;height: 20vw"  src="../assets/program_69.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img style="width: 20vw;height: 20vw"  src="../assets/program_78.jpg" alt="">
                            </a>
                        </li>
                    </Hscroll>

                </van-cell>
            </van-cell-group>
            <button type="button" class="all-movie-btn">全部训练视频</button>

        </div>
        <div class="freedom-train">
            <van-cell-group>
                <van-cell>
                <span slot="title" class="freedom-title">
                    自由训练
                </span>
                </van-cell>
                <van-cell>
                <span slot="title" >
                    工具
                </span>
                    <div slot="label" class="tool">
                        <a href="" >
                            动作库
                        </a>
                        <a href="" >
                            自定义训练
                        </a>
                        <a href="" >
                            倒计时
                        </a>
                    </div>
                </van-cell>
                <van-cell>
                <span slot="title" >
                    部位
                </span>
                    <div slot="label" class="part">
                        <a href="" >
                            胸部
                        </a>
                        <a href="" >
                            背部
                        </a>
                        <a href="" >
                            肩部
                        </a>
                        <a href="" >
                            胸部
                        </a>
                        <a href="" >
                            背部
                        </a>
                        <a href="" >
                            肩部
                        </a>
                        <a href="" >
                            胸部
                        </a>
                        <a href="" >
                            背部
                        </a>
                        <a href="" >
                            肩部
                        </a>
                    </div>
                </van-cell>
                <van-cell>
                <span slot="title" >
                    时长
                </span>
                    <div slot="label" class="long">
                        <a href="" >
                           <10分钟
                        </a>
                        <a href="" >
                          10~20分钟
                        </a>
                        <a href="" >
                            20~30分钟
                        </a>
                        <a href="" >
                            >30分钟
                        </a>
                    </div>
                </van-cell>

            </van-cell-group>
        </div>

    </div>
</template>

<script>
    import {CarouselCard, CarouselCardItem} from 'vue-carousel-card'
    import 'vue-carousel-card/styles/index.css'
    import Hscroll from '@/components/Hscroll'

    export default {

        name: "Recommend",
        data: function () {
            return {
                indexNum: 1,
                totalPic: 6
            }
        },
        methods: {
            changeIndex(index) {
                this.indexNum = index + 1;

            }

        },
        components: {
            CarouselCard,
            CarouselCardItem,
            Hscroll
        },
        mounted() {
            this.$emit('setActiveIndex',0);
        }


    }
</script>

<style scoped>
    .swiper-img {
        width: 100%;
        height: 20vh;
    }

    .middle-nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 4vh;

    }

    .middle-nav figure img {
        margin: 0 15%;
    }

    .middle-nav figure {
        margin: 0;
        padding: 0;
    }

    .middle-nav figure figcaption {
        margin: 0;
        padding: 0;
    }

    .middle-nav figure figcaption p {
        font-size: 12px;

        text-align: center;
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

    .plan-title, .movie-title,.freedom-title {
        font-size: 20px;
    }

    .index-num {
        color: #000000;
    }

    .follow-plan {
        border-top: solid #bfbfbf 1vh;
        border-bottom: solid #bfbfbf 1vh;
        padding-bottom: 2vh;
    }
    .train-area img{
        width: 20vw;
        height: 20vw;

    }

    .all-movie-btn{
        outline: none;
        background: #FFFFFF;
        border:1px solid #aaaaaa;
        padding: 10px 15px;
        -webkit-border-radius: 19px;
        -moz-border-radius: 19px;
        border-radius: 19px;
        font-size: 12px;
        font-weight: lighter;
        color: #333333;
        margin-left: 50%;
        transform: translate(-50%,0);
    }
    .freedom-train a{
        background: #D3D3D3;
        color: black;
        display: inline-block;
        padding: 5px 25px;
        border-radius: 5px;
        margin-right: 16px;
    }

    .part a{
        margin-right: 16px;
        padding:5px 35px;
        margin-top: 16px;
    }
    .long a{
        margin-right: 10px;
        padding:5px 20px;
        margin-top: 16px;
    }






</style>
