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
        <div class="container" ref="container">
            <div class="content">
                <div class="content1">
                    <div class="title">
                        部位
                    </div>
                    <ul class="list">

                        <li v-for="(item,index) in placeList" :class="{item:true,select:item.placeid == placeId}"  @click="changePlace(item.placeid,item.place)">{{item.place}}</li>




                    </ul>

                </div>
                <div class="content1">
                    <div class="title">
                        部位
                    </div>
                    <ul class="list">

                        <li  v-for="(item,index) in coachList" :class="{item:true,select:sex==item.sex}" @click="changeSex(item.sex)" >{{item.text}}</li>


                    </ul>

                </div>

            </div>

        </div>
        <router-link :to="{name:'ActionLibraryList',query:{sex:sex,placeId:placeId,placeName:placeName}}" tag="div" class="to-search">查找训练</router-link>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import axios from  'axios';
    export default {

        name: "SearchAction",
        data:function(){
            return {
                sex:1,
                placeId:0,
                placeName:"",
                placeList:[],
                coachList:[
                    {
                        sex:1,
                        text:"男教练",
                    },
                    {
                        sex:2,
                        text:"女教练",
                    }
                ]
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1);

            },
            onClickRight(){

            },
            changeSex(sex){
              this.sex = sex;
            },
            changePlace(placeId,place){
                this.placeId = placeId
                this.placeName = place;
            }
        },
        mounted() {
            this.sex= this.$route.query.sex ;
            this.placeId = this.$route.query.placeId;
            var _this = this;
            axios({
                method:'get',
                url:'http://10.8.159.34:8080/actionType.do'
            }).then(function (data) {
               var result = data.data;
               _this.placeList =result.data;
               _this.placeList.map(function (item,index) {
                   if(item.placeid == _this.placeId){
                       _this.placeName = item.place;
                   }
               })
            })

            const scroll = new BScroll(this.$refs.container, {

                scrollY:true,
                click:true

            })
        }

    }
</script>

<style scoped>
    .container{
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
.container .content{
    padding-top: 46px;
    height: 101vh;
    box-sizing:border-box;

    width: 100vw;
}
    .content .title{
        width: 100vw;
        text-align: center;
        margin-top: 2vh;
        font-size: 15px;
    }
    .list {
        padding-left: 11vw;
        margin-top: 5vw;
        overflow: hidden;
        clear: both;
    }
    .list .item{
        float: left;
        width: 25vw;
        margin-right: 2vw;
        margin-bottom: 2vw;
        text-align: center;
        height: 10vw;
        line-height: 10vw;
        background: #dbdbdb;
    }
    .list .select{
        background: #000;
        color: #FFFFFF;
    }
    .to-search{
        width: 100vw;
        height: 5vh;
        background: #000;
        color: #FFFFFF;
        position: fixed;
        bottom: 0;
        left: 0;
        text-align: center;
        line-height: 5vh;
    }
</style>
