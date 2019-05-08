<template>
    <div>
        <div class="head">
            <router-link to="/" tag="div" class="find-train">
                <van-icon name="search"/>
                查找训练
            </router-link>
            <router-link to="/" tag="div" class="publish-train">
                <van-icon name="plus"/>
                发布训练
            </router-link>
        </div>
        <div class="new-train">
            <van-cell-group>
                <van-cell>
                    <span class="nt-icon" slot="icon">new</span>
                    <span class="nt-content" slot="title">

                      <TestScroll
                          :dataList="testList"
                          scrollType="scroll-up"
                      >

                      </TestScroll>

                    </span>
                    <van-icon slot="right-icon" name="arrow" style="margin-top: 8px;"/>
                </van-cell>

            </van-cell-group>
        </div>
        <div class="jingxuan">
            <van-cell-group>
                <van-cell is-link>
                    <span class="jx-title" slot="title">周边精选</span>
                    <span class="jx-content" slot>查看全部</span>
                </van-cell>
            </van-cell-group>
            <div class="jingxuancontent">
                <van-cell-group>
                    <van-cell>
                    <span class="jxc-title" slot="title">
                        <img src="../assets/gravatar.jpg" alt="">
                        <span>gardenia</span>
                    </span>

                    </van-cell>
                    <van-cell>

                    <span class="jxc-title" slot="title">
                      20分钟极简臀腿训练
                    </span>
                        <span slot>
                            <van-rate
                                allow-half
                                void-icon="star"
                                v-model="value1"
                                :size="16"
                            />
                        </span>
                        <span class="jxc-label" slot="label">
                        22个动作，不循环，22分钟

                        </span>

                    </van-cell>
                    <van-cell >
                        <span slot="title">
                            <van-tag color="#f282ff" plain>酣畅淋漓</van-tag>
                            <van-tag color="#7232dd" plain>轻松完成</van-tag>
                            <van-tag color="#f2826a" plain>感觉身体被掏空</van-tag>
                        </span>
                    </van-cell>
                </van-cell-group>
                <div class="fengexian"></div>
            </div>
            <div class="jingxuancontent">
                <van-cell-group>
                    <van-cell>
                    <span class="jxc-title" slot="title">
                        <img src="../assets/gravatar.jpg" alt="">
                        <span>gardenia</span>
                    </span>

                    </van-cell>
                    <van-cell>

                    <span class="jxc-title" slot="title">
                      20分钟极简臀腿训练
                    </span>
                        <span slot class="jxc-content">
                             <van-rate
                                 allow-half
                                 void-icon="star"
                                 v-model="value2"
                                 :size="16"
                             />

                        </span>
                        <span class="jxc-label" slot="label">
                        22个动作，不循环，22分钟

                        </span>

                    </van-cell>
                    <van-cell >
                        <span slot="title">
                            <van-tag color="#f282ff" plain>酣畅淋漓</van-tag>
                            <van-tag color="#7232dd" plain>轻松完成</van-tag>
                            <van-tag color="#f2826a" plain>感觉身体被掏空</van-tag>
                        </span>
                    </van-cell>
                </van-cell-group>
                <div class="fengexian"></div>
            </div>
            <div class="jingxuancontent">
                <van-cell-group>
                    <van-cell>
                    <span class="jxc-title" slot="title">
                        <img src="../assets/gravatar.jpg" alt="">
                        <span>gardenia</span>
                    </span>

                    </van-cell>
                    <van-cell>

                    <span class="jxc-title" slot="title">
                      20分钟极简臀腿训练
                    </span>
                        <span slot>
                             <van-rate
                                 allow-half
                                 void-icon="star"
                                 v-model="value2"
                                 :size="16"
                             />
                        </span>
                        <span class="jxc-label" slot="label">
                        22个动作，不循环，22分钟

                        </span>

                    </van-cell>
                    <van-cell >
                        <span slot="title">
                            <van-tag color="#f282ff" plain>酣畅淋漓</van-tag>
                            <van-tag color="#7232dd" plain>轻松完成</van-tag>
                            <van-tag color="#f2826a" plain>感觉身体被掏空</van-tag>
                        </span>
                    </van-cell>
                </van-cell-group>
                <div class="fengexian"></div>
            </div>

        </div>
        <div class="tupian">
            <Hscroll >
                <li>
                    <a href="">
                        <img style="width: 48vw;height: 15vh;" src="../assets/program_23.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img style="width: 48vw;height: 15vh;" src="../assets/program_22.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img style="width: 48vw;height: 15vh;" src="../assets/program_21.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img style="width: 48vw;height: 15vh;" src="../assets/program_69.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img style="width: 48vw;height: 15vh;" src="../assets/program_78.jpg" alt="">
                    </a>
                </li>
            </Hscroll>
        </div>
        <div class="jingxuan">
            <van-cell-group>
                <van-cell is-link>
                    <span class="jx-title" slot="title">周热门</span>
                    <span class="jx-content" slot>查看全部</span>
                </van-cell>
            </van-cell-group>
            <div class="jingxuancontent">
                <van-cell-group>
                    <van-cell>
                    <span class="jxc-title" slot="title">
                        <img src="../assets/gravatar.jpg" alt="">
                        <span>gardenia</span>
                    </span>

                    </van-cell>
                    <van-cell>

                    <span class="jxc-title" slot="title">
                      20分钟极简臀腿训练
                    </span>
                        <span slot>
                           4878人练过
                        </span>
                        <span class="jxc-label" slot="label">
                        22个动作，不循环，22分钟

                        </span>

                    </van-cell>
                    <van-cell >
                        <span slot="title">
                            <van-tag color="#f282ff" plain>酣畅淋漓</van-tag>
                            <van-tag color="#7232dd" plain>轻松完成</van-tag>
                            <van-tag color="#f2826a" plain>感觉身体被掏空</van-tag>
                        </span>
                    </van-cell>
                </van-cell-group>
                <div class="fengexian"></div>
            </div>
            <div class="jingxuancontent">
                <van-cell-group>
                    <van-cell>
                    <span class="jxc-title" slot="title">
                        <img src="../assets/gravatar.jpg" alt="">
                        <span>gardenia</span>
                    </span>

                    </van-cell>
                    <van-cell>

                    <span class="jxc-title" slot="title">
                      20分钟极简臀腿训练
                    </span>
                        <span slot class="jxc-content">
                             4878人练过

                        </span>
                        <span class="jxc-label" slot="label">
                        22个动作，不循环，22分钟

                        </span>

                    </van-cell>
                    <van-cell >
                        <span slot="title">
                            <van-tag color="#f282ff" plain>酣畅淋漓</van-tag>
                            <van-tag color="#7232dd" plain>轻松完成</van-tag>
                            <van-tag color="#f2826a" plain>感觉身体被掏空</van-tag>
                        </span>
                    </van-cell>
                </van-cell-group>
                <div class="fengexian"></div>
            </div>
            <div class="jingxuancontent">
                <van-cell-group>
                    <van-cell>
                    <span class="jxc-title" slot="title">
                        <img src="../assets/gravatar.jpg" alt="">
                        <span>gardenia</span>
                    </span>

                    </van-cell>
                    <van-cell>

                    <span class="jxc-title" slot="title">
                      20分钟极简臀腿训练
                    </span>
                        <span slot>
                             4878人练过
                        </span>
                        <span class="jxc-label" slot="label">
                        22个动作，不循环，22分钟

                        </span>

                    </van-cell>
                    <van-cell >
                        <span slot="title">
                            <van-tag color="#f282ff" plain>酣畅淋漓</van-tag>
                            <van-tag color="#7232dd" plain>轻松完成</van-tag>
                            <van-tag color="#f2826a" plain>感觉身体被掏空</van-tag>
                        </span>
                    </van-cell>
                </van-cell-group>
                <div class="fengexian"></div>
            </div>

        </div>
    </div>
</template>

<script>
    import TestScroll from '@/components/TextScroll'
    import Hscroll from '@/components/Hscroll'
    export default {

        name: "Square",
        data() {
            return {
                testList: [
                    {text: 'sanyu'},

                    {text: 'zhang'},
                ],
                value1: 2.5,
                value2: 3.5,
                value3: 4.5
            }
        },
        computed: {},
        methods: {},
        mounted() {
            this.$emit('setActiveIndex',1)
        },
        components: {
            TestScroll,
            Hscroll

        }

    }
</script>

<style scoped>
    .head {
        display: flex;
        justify-content: space-around;
        padding: 2vh 0;
    }

    .find-train, .publish-train {
        width: 45vw;
        height: 6vh;
        text-align: center;
        line-height: 6vh;
        background: #dddddd;
        border-radius: 5px;


    }

    .publish-train {
        background: yellow;
    }

    .nt-icon {
        position: absolute;
        left: -13px;
        top: 15px;
        border-radius: 10px;
        height: 20px;
        background: yellow;
        width: 40px;
        text-align: right;
        padding-right: 5px;
    }

    .new-train {
        border-top: 1vh solid #dbdbdb;
        border-bottom: 1vh solid #dbdbdb;
    }

    .jx-content {
        color: black;
    }

    .jx-title {
        font-size: 15px;
    }
    .jxc-title{
        font-size: 14px;
        color: #000;
    }
    .jxc-title img{
        width:30px;
        height: 30px;
    }
    .jxc-title *{
        display: inline-block;
        vertical-align: middle;
    }
    .jxc-label {
        color: #333333;
        font-size: 12px;
    }
    .fengexian{
        width: 90vw;
        margin-left: 5vw;
        height: .5vh;
        background: #dbdbdb;
    }
    .tupian{
        border-top: solid 1vh #dbdbdb;
        border-bottom: solid 1vh #dbdbdb;
        padding:1vh 0;
    }



</style>
