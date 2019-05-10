<template>
    <div class="wrapper">
        <div class="content" ref="content">

                <slot>

                </slot>

        </div>
    </div>
   
</template>

<script>
    import  BScroll from 'better-scroll'
    export default {

        name: "ElasticityPage",
        mounted() {
            const scroll = new BScroll(this.$refs.content, {

                scrollY:true
            })

        }

    }
</script>

<style scoped>
    .wrapper{
        position: relative;
    }
    .content{
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;


    }
    .content>div{




        width: 100vw;
    }
</style>
