<template>
    <div>
        <van-nav-bar>
            <van-icon name="arrow-left" slot="left" color="gray" @click="onClickLeft"/>
        </van-nav-bar>

        <div class="container">
            <h2>请选择适合你的标签</h2>

            <h3>(最多3个)</h3>
<!--            <p><a>减肥燃脂</a><a>拉伸修复</a><a>态度纠正</a><a>身体协调</a><a>身心放松</a><a>力量提升</a><a>产后恢复</a></p>-->
            <van-row class="wp-list">
                <p :class="{active :item.isShow}"
                            v-for="item in wpList"
                           @click="selected(item,$event)">{{item.name}}
                </p>
            </van-row>
            <van-button to="/pageSeven" class="next">下一步</van-button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "PageSix",
        data(){
            return{
                wpList: [
                    {
                        name: '减肥燃脂',isShow:false
                    },
                    {
                        name: '拉伸修复',isShow:false
                    },
                    {
                        name: '态度纠正',isShow:false
                    },
                    {
                        name: '身体协调',isShow:false
                    },
                    {
                        name: '身心放松',isShow:false
                    },
                    {
                        name: '力量提升',isShow:false
                    },
                    {
                        name: '产后恢复',isShow:false
                    }
                ],
                wpLists:[]


            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)

            },
            selected(item,$event){
                if(this.wpLists.length>=3&&!item.isShow){
                    this.$toast('最多选择三个')

                }else{
                    if(item.isShow){
                        this.wpLists.indexOf(item)
                        this.wpLists.splice(this.wpLists.indexOf(item),1)
                    }else{
                        this.wpLists.push(item);
                    }
                    item.isShow = !item.isShow;
                }

            }
        }
    }
</script>

<style scoped>
    .container{
        margin:0 20px;
        margin-top:50px;
        text-align: center;
        font-weight:normal;
    }
    h2{
        font-weight: normal;
        font-size:20px;
        margin:0;
        padding: 0;
    }
    h3{
        font-size:16px;
        font-weight: normal;
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
    .wp-list{
        margin-left:20px;
    }
    /*p a{*/
    /*    display: block;*/
    /*    width:100px;*/
    /*    height:50px;*/
    /*    text-align: center;*/
    /*    line-height: 50px;*/
    /*    border:1px solid #ccc;*/
    /*    margin:10px 10px;*/
    /*    float:left;*/
    /*    color:#666;*/
    /*}*/
p{
    float:left;
width:100px;
    height:50px;
    text-align: center;
    line-height: 50px;
    margin:10px 10px;

}
   .active {
        background: #666;
       color:#fff
    }

</style>
