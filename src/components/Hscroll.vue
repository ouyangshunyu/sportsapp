<template>
    <div class="HScroll" ref="HScroll" slot="label">
        <div class="scroll-wrap" ref="scrollWrap" >

            <ul class="content" ref="content">
                <slot>

                </slot>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    export default {

        name: "Hscroll",
        methods:{
            makeScroll() {

                let width = this.$refs.content.children.length * parseFloat(getComputedStyle(this.$refs.content.children[0], null).width);

                let height = parseFloat(getComputedStyle(this.$refs.content.children[0], null).height)
                this.$refs.HScroll.style.height = height + 'px';

                this.$refs.content.style.width = width + "px";
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.scrollWrap, {
                            startX: 0,
                            click: true,
                            scrollX: true,
                            scrollY: false,
                            eventPassthrough: "vertical"

                        });
                    } else {
                        this.scroll.refresh();
                    }

                });

            }
        },
        mounted() {

        },
        updated() {
            var _this = this;

            this.$nextTick(() => {
                console.log(this.$refs.content)
                _this.makeScroll();
            });
        }

    }
</script>

<style scoped>
    .scroll-wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        overflow: hidden;
    }

    .HScroll {
        position: relative;

    }

    .content li {
        float: left;
        padding-right: 2vw;
        box-sizing: border-box;
        position: relative;

    }
    .content li a{
        color: aliceblue;
        display: block;
    }
    .content li img{
        width: 80vw;
        height: 20vh;
        display: block;

    }
    .content li .title{
        position: absolute;
        left: 10vw;
        top:8vh;
        font-size: 18px;
    }
    .content li .subtitle{
        position: absolute;
        left: 10vw;
        top:12vh
    }
</style>
