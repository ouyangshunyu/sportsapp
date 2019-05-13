var mutaitons = {
    upload:function(state,str){
        state.img = str


    },
    setUserInfo:function (state,userInfo) {
        state.token = userInfo.token;
        state.nickName = userInfo.nickName;
        state.gravatar = userInfo.gravatar;
    }


}

export default mutaitons
