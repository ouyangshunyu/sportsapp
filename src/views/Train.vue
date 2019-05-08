<template>
    <div>
        <van-nav-bar

        fixed


            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <img class="gravatar" src="../assets/gravatar.jpg" alt="" slot="left" >
            <van-tabs color="#333" @click="tabClick" v-model="tabActive" slot="title">
                <van-tab title="推荐" ></van-tab>
                <van-tab title="广场"></van-tab>

            </van-tabs>
            <van-icon size="20px"  name="search"  slot="right" />
        </van-nav-bar>
        <div class="container">
            <router-view @setActiveIndex="getActiveIndex"></router-view>

        </div>
        <Foot :activeIndex="activeIndex"></Foot>
    </div>
</template>

<script>
    import Foot from '@/components/Foot'
    export default {

        name: "Train",
        data:function(){
            return {
                activeIndex:1,
                tabActive:0
            }
        },
        methods:{
            getActiveIndex(index){
                this.activeIndex = index;

            },
            onClickLeft(){

            },
            onClickRight(){

            },
            tabClick(index){
                console.log(index)
                if(index==0){
                   this.$router.push('/recommend');
                }else if(index==1){
                    this.$router.push('/square');
                }

            }
        },
        components:{
            Foot
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
    .container{
        margin: 46px 0 50px;
    }
</style>
