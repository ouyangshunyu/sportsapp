<template>
    <div>
        <van-nav-bar




            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <img class="gravatar" src="../assets/gravatar.jpg" alt="" slot="left" >
            <van-tabs color="#333" @click="tabClick" v-model="tabActive" slot="title">
                <van-tab title="精选" ></van-tab>
                <van-tab title="视频"></van-tab>
                <van-tab title="商城"></van-tab>

            </van-tabs>
            <van-icon size="20px"  name="search"  slot="right" />
        </van-nav-bar>
        search
        <Foot :activeIndex="activeIndex"></Foot>
    </div>
</template>

<script>
    import Foot from '@/components/Foot'
    export default {

        name: "Search",
        components:{
            Foot
        },
        data:function () {
           return {
               activeIndex:3,
               tabActive:0
           }
        },
        methods:{
            onClickLeft(){

            },
            onClickRight(){

            },
            tabClick(){

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

