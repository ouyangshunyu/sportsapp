<template>
    <div>
        <van-nav-bar
            fixed

            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
        <span slot="left" style="color: black">
            <van-icon size="20px" color="black" name="arrow-left" />
        </span>
            <span slot="title">动作库</span>
            <van-icon slot="right" color="black" name="search" size="25px"></van-icon>
        </van-nav-bar>
        <div class="classify">
            <div class="classify-content">


            <router-link tag="p" :to="{name:'SearchAction',query:{sex:sex,placeId:placeId}}">
                <span>{{placeName}}</span>
                <van-icon name="arrow-down"></van-icon>
            </router-link>
            <!--<p>
                <span>器械</span>
                <van-icon name="arrow-down"></van-icon>
            </p>-->
            <router-link tag="p" :to="{name:'SearchAction',query:{sex:sex,placeId:placeId}}">
                <span>
                    {{sex==1?"男教教":"女教练"}}
                </span>
                <van-icon name="arrow-down"></van-icon>
            </router-link>
            </div>
        </div>
        <div class="container">
            <ul class="list">
                <router-link :to="{name:'ActionDetail',query:{actionId:item.id}}" class="item" v-for="(item,index) in list" tag="li">
                    <img :src="item.picture" alt="">
                     <div class="content">
                         <p class="title">{{item.name}}</p>
                         <p class="subtitle">{{item.instrument}}</p>
                     </div>
                </router-link>
            </ul>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {

        name: "ActionLibraryList",
        mounted() {
            this.placeId     = this.$route.query.placeId;
            this.sex = this.$route.query.sex ? this.$route.query.sex:1;
            this.placeName = this.$route.query.placeName ? this.$route.query.placeName:'不限';
            var _this = this;
            axios({
                method:'get',
                url:'http://www.k4me.top:8081/funsport-1.0/actionvideolist.do',
                params:{
                    placeid:this.placeId,
                    sex:this.sex
                }
            })
                .then(function (data) {
                    var result = data.data;
                    console.log(result.data)
                   _this.list = result.data;
                    console.log(_this.list);
                })
        },
        data:function (){
            return {
               sex:1,
                placeId:0,
                placeName:'不限',
                list:[]
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push('/actionLibrary');
            },
            onClickRight(){

            }
        }

    }
</script>

<style scoped>
.classify{  

    color: #333;
    position: fixed;
    top: 46px;
    left: 0;
    border-bottom: 1px solid #dbdbdb;
}
.classify .classify-content{
    display: flex;
    justify-content: space-around;
    flex: 1;
    width: 100vw;

}
    .container{
        margin-top:  99px;
    }
.container .list .item{
    overflow: hidden;
    border-bottom: 1px solid #dbdbdb;
}
    .container .list .item img{
        width: 30vw;
        display: block;
        float: left;
    }
.container .list .item div{
    float: left;
    padding-left: 4vw;

}
.container .list .item div p{
    padding: 0;
    margin: 0;
}
.container .list .item div .title{
    margin-top: 2vh;
}
.container .list .item div .subtitle{
    font-size: 12px;
    color: #333;
    margin-top: .5vh;
}
</style>
