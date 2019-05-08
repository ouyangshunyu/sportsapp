<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

    @font-face {
        font-family: 'my-icon';
        src: url('./assets/icon/iconfont.ttf') format('truetype');
    }

    .my-icon {
        font-family: 'my-icon';
        font-style: normal;
    }

    .my-icon-benpao::before {
        content: "\e60d";
    }
    .my-icon-Path:before {
        content: "\e605";
    }

    .my-icon-faxian:before {
        content: "\e623";
    }

    .my-icon-tianjiaren:before {
        content: "\e683";
    }



    .my-icon-yaling:before {
        content: "\e60e";
    }

    .icon-dongtai:before {
        content: "\e606";
    }

    .icon-wodedangxuan:before {
        content: "\e608";
    }
</style>
