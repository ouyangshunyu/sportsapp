<template>
    <div>

        <div class="container">
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
            <div>
                <div class="middle-nav">
                    <figure>
                        <img src="../assets/plan.png" alt="">
                        <figcaption>
                            <p>运动服饰</p>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="../assets/freedom.png" alt="">
                        <figcaption>
                            <p>运动装备</p>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="../assets/slimming.png" alt="">
                        <figcaption>
                            <p>运动食品</p>
                        </figcaption>
                    </figure>
                </div>
            </div>



        <div class="picture">
            <h3>精选好货</h3>
            <swiper class="swiper-video" :options="swiperOptionVideo" ref="mySwiper">
                <!-- slides -->
                <swiper-slide class="swiper-slide">
                    <img
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180050&di=0d2ee92eead284e8133d6df07535d75a&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1512%2Fapic16988_sc115.com.jpg"
                        alt="">
                </swiper-slide>

                <swiper-slide class="swiper-slide"><img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=7412fd486c47c15f1d27485be0d7bd28&imgtype=0&src=http%3A%2F%2Fwww.duoxinqi.com%2Fimages%2F2012%2F06%2F20120605_8.jpg"
                    alt="">
                </swiper-slide>
            </swiper>
        </div>
        <div class="under">
            <h3>热门推荐</h3>

            <van-row>
                <van-col span="12" v-for="(item,index) in items">
                    <router-link to="/detail">
                        <img :src="item.picture">
                    <p>{{item.name}}</p>
                    <p>{{item.pricemin}}</p>
                    </router-link>
                </van-col>
            </van-row>

        </div>
            <div class="under">
                <h3>运动服饰</h3>

                <van-row>
                    <van-col span="12" v-for="(item1,index) in items1">
                        <router-link to="/detail">
                            <img :src="item1.picture">
                            <p>{{item1.name}}</p>
                            <p>{{item1.pricemin}}</p>
                        </router-link>
                    </van-col>
                </van-row>

            </div>
    </div>


    <van-icon name="shopping-cart" class="cart" color="white" size="20px" @click="cart"/>



    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import axios from 'axios'

    export default {
        name: "Buy",
        data() {
            return {
                active: 0,
                icon: {
                    normal: '',
                    active: '',
                },
                items:'',
                items1:'',
                swiperOptionVideo: {
                    loop: true,
                    slidesPerView: 1.5,
                    centeredSlides: false
                },
                imageURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=7412fd486c47c15f1d27485be0d7bd28&imgtype=0&src=http%3A%2F%2Fwww.duoxinqi.com%2Fimages%2F2012%2F06%2F20120605_8.jpg'

            }
        },
        methods: {
            cart() {
                this.$router.push('/cart')
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mounted() {
            axios({
                method: 'get',
                url: 'http://10.8.159.34:8080/goodsshow.do'
            }).then((data) => {
                console.log(data.data.data[0].datas)
                this.items =data.data.data[0].datas
            }),
                axios({
                    method: 'get',
                    url: 'http://10.8.159.34:8080/goodsshow.do'
                }).then((data) => {
                    console.log(data.data.data[1].datas)
                    this.items =data.data.data[1].datas
                })

        }
    }
</script>

<style scoped>
.container{
    margin-top:46px;
}
    .swiper-img {
        width: 100%;
        height: 30vh;
    }

    .swiper-video {
        width: 100%;
        height: 15vh;
        margin-top: 10px;
    }

    .swiper-slide {

        margin-right: 20px;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%
    }

    .middle-nav {
        display: flex;
        justify-content: space-around;
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

    .under {
        margin-left: 5px
    }

    .under img {
        width: 100%;
        height: 100%
    }

    van-col div {
        margin-left: 5px;
    }


    .cart {
        position: fixed;
        bottom: 100px;
        right: 20px;
        z-index: 2000;
        text-align: center;

        width: 50px;
        height: 50px;
        line-height: 50px;
        background: #666;
        border-radius: 50%;

    }


</style>
