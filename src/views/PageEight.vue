<template>
    <div>
        <van-nav-bar>
            <van-icon name="arrow-left" slot="left" color="gray" @click="onClickLeft"/>
        </van-nav-bar>

        <div class="container">
            <h2>根据你的信息</h2>

            <h2>我们为你推荐了一下课程</h2>

            <h4>系列课程</h4>
            <div class="picture">
                <h6>男士增肌训练</h6>
                <van-checkbox-group v-model="result1" class="first">

                    <van-checkbox ref="checkboxes"/>

                </van-checkbox-group>

            </div>

            <h4>针对性训练</h4>
            <van-checkbox-group v-model="result">
                <van-cell-group>
                    <van-cell
                        v-for="(item, index) in list"
                        clickable
                        :key="item"
                        :title="`${item}`"
                        @click="toggle(index)"
                    >
                        <span slot="label">{{title}}</span>
                        <div></div>

                        <van-checkbox :name="item" ref="checkboxes"/>
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>


            <van-button class="next" to="/login">下一步</van-button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "PageEight",
        data() {
            return {
                title: '',
                list: [
                    {
                        title: '上肢力量提升训练'
                    },
                    {
                        title: '下肢力量训练'
                    }
                ],
                // list1:['男士增肌训练：'],
                result: ['上肢力量提升训练：' +
                '13个动作,不循环,13分钟', '下肢力量训练：' +
                '7个动作,2个循环,15分钟'],
                result1: ['男士增肌训练' +
                '546513练过']

            }
        },
        methods: {
            toggle(index) {
                this.$refs.checkboxes[index].toggle();
            },


            onClickLeft() {
                this.$router.go(-1)

            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 10px;
        text-align: center;
        font-weight: normal;
    }

    h2 {
        font-weight: 400;
        margin: 0;
        padding: 0;
    }

    .next {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #666;
        color: #000;
        font-size: 16px;
    }

    .picture {
        width: 100%;
        height: 120px;
        background: url("1956.jpg") no-repeat;
    }

    .picture img {
        width: 100%;
        height: 100%;
    }

    .first {
        position: absolute;
        right: 10px;
        top: 43%;
    }

    h6 {
        float: left;
        margin-top: 80px;
        margin-left: 20px;
    }
</style>
