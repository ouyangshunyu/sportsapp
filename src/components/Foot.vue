<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item  to="/mine">
                <span>我的</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? mineIcon.active : mineIcon.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item to="/train">
                <span>训练</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? trainIcon.active : trainIcon.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item to="/vip" >
                <span>VIP</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? vipIcon.active : vipIcon.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item to="/search">
                <span>发现</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? searchIcon.active : searchIcon.normal"
                >
            </van-tabbar-item>
        <!--    <van-tabbar-item to="/trends">
                <span>动态</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? trendsIcon.active : trendsIcon.normal"
                >
            </van-tabbar-item>-->
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Foot",
        data:function () {
           return {
               active: 0,
               mineIcon: {
                   normal: '/static/img/mine1.png',
                   active: '/static/img/mine.png'

               },
               trainIcon: {
                   normal: '/static/img/train1.png',
                   active: '/static/img/train.png'

               },
               vipIcon: {
                   normal: '/static/img/vip1.png',
                   active: '/static/img/vip.png'

               },
               searchIcon: {
                   normal: '/static/img/search1.png',
                   active: '/static/img/search.png'

               },
               trendsIcon: {
                   normal: '/static/img/trends1.png',
                   active: '/static/img/trends.png'

               }
           }
        },
        mounted(){
            this.active = this.$props.activeIndex;

        },
        props:['activeIndex']


    }
</script>

<style scoped>

</style>
