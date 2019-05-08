<template>
    <div>
        <van-nav-bar




            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <img class="gravatar" src="../assets/gravatar.jpg" alt="" slot="left" >
            <van-tabs color="#333" @click="tabClick" v-model="tabActive" slot="title">
                <van-tab title="推荐" ></van-tab>
                <van-tab title="关注"></van-tab>
                <van-tab title="附近"></van-tab>

            </van-tabs>
            <van-icon size="20px" class-prefix="my-icon"   name="tianjiaren"  slot="right" />
        </van-nav-bar>
        trends
        <Foot :activeIndex="activeIndex"></Foot>
    </div>
</template>

<script>
    import Foot from '@/components/Foot'
    export default {

        name: "Trends",
        components:{
            Foot
        },
        data:function () {
           return {
               activeIndex:4,
               tabActive:0
           }
        },
        methods:{
            onClickLeft(){

            },
            onClickRight(){

            },
            tabClick(index){
                console.log(index)
            }
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
</style>
