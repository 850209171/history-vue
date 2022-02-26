<template>
  <div class="mark">
    <div class="alert">
      <div class="quit">
        <a href="" @click="close"><img src="/static/close.png" alt="" style="heigth: 26px;"></a>
      </div>
      <!-- 内容 -->
      <div class="photo-line">
        <img :src="heroDetail.avatar" style="width: 60px; height: 60px; opacity: 1; border-radius: 50%;">
        <p class="name-style" style="padding-left: 30px;">{{ heroDetail.name }}</p>
        <p class="name-style">|</p>
        <p class="title-style">{{ heroDetail.title }}</p>
      </div>
      <!-- 视频 -->
      <div class="video-line">
          <!-- <img src="/static/include.jpg" style="width: 400px; height: 225px; background: #FFF4F4; 
            border-radius: 20px 20px 20px 20px; opacity: 1; border: 1px solid #707070;" alt=""> -->
          <video :src="heroDetail.video" :controls="videoOptions.controls"
                  class="video-js vjs-big-play-centered vjs-fluid"
                  webkit-playsinline="true"
                  playsinline="true"
                  x-webkit-airplay="allow"
                  x5-playsinline
                  autoplay="autoplay"
                  ref="video" style="width: 400px; height: 225px; background: #FFF4F4; 
          border-radius: 20px 20px 20px 20px; opacity: 1; border: 1px solid #707070;"></video>
      </div>
      <!-- 生平事迹 -->
      <div class="self-line">
          <img src="/static/self.png" style="width: 25px; height: 25px; opacity: 1;" alt="">
          <p>人物生平</p>
      </div>
      <div class="self-introduction">  {{ heroDetail.introduction }}</div>
      <!-- 在上大的故事 -->
      <div class="story-line">
          <img src="/static/book.png" style="width: 25px; height: 25px; opacity: 1;" alt="">
          <p>在上大的故事</p>
      </div>
      <div class="story-text">{{ heroDetail.story }}</div>
    </div>
  </div>
</template>

<script>
import {getFigureDetail} from '@/api/index'

export default {
  data() {
    return {
      heroDetail: {},
      index: sessionStorage.getItem('index'),
      videoOptions: {
        controls:true,
        src: "", // url地址
      },
      player: null,
      playTime:'',
      seekTime:'',
      current:''
    }
  },
  created() {
      let param = {
        id: this.index
      };
      getFigureDetail(param).then(res => {
          this.heroDetail = res.data.data;
      })
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    close() {
      this.$emit('cancel');
    },
    initVideo() {
      //原生初始化视频方法
      let myVideo = this.$refs.video;
      //ontimeupdate
      myVideo.ontimeupdate = function() {myFunction()};
      let _this = this;

      function myFunction(){
        let playTime = myVideo.currentTime
        setTimeout(function () {
            localStorage.setItem("cacheTime",playTime)
        },500)
        let time = localStorage.getItem("cacheTime")
        // 当前播放位置发生变化时触发。
        if(playTime - Number(time) > 2){
            myVideo.currentTime = Number(time)
        }
      };
    }
  }
};
</script>

<style lang="scss">
.mark {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.alert{
    width: 60%;
    height: 80%;
    background: #FFF4F4;
    border-radius: 40px 40px 40px 40px;
    opacity: 1;
    border: 1px solid #707070;
    margin: 0px auto;
    padding: 0px auto;
    background-image: url("/static/detail.jpg");
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center;
}

.quit{
  width: 100%;
  height: 1px;
  display: flex;
  flex-direction: row-reverse;
  margin: 20px -20px;
}

.photo-line{
    width: 80%;
    height: 30px;
    margin: 30px auto;    
    display: flex;  
    flex-direction: row;
}
.name-style{
    width: 70px;
    height: 20px;
    font-size: 20px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
    color: #444444;
    text-align: center;
}
.title-style{
    width: 120px;
    height: 20px;
    font-size: 20px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 300;
    color: #444444;
}
.video-line{
    width: 100%;
    height: 225px;
    margin: 10px auto;
    text-align: center;
}
.self-line{
    width: 80%;
    height: 10px;
    margin: 20px auto;    
    display: flex;  
    flex-direction: row;
    p{
        width: 80px;
        height: 20px;
        font-size: 20px;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: bold;
        color: #333333;
        margin: 0px;
    }
}
.story-line{
    width: 80%;
    height: 10px;
    margin: 20px auto;    
    display: flex;  
    flex-direction: row;
    p{
        width: 120px;
        height: 10px;
        font-size: 20px;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: bold;
        color: #333333;
        margin: 0px;
    }
}
.self-introduction{
    width: 70%;
    height: 70px;
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #606060;
    margin: 0px auto;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: scroll;
}
.self-introduction::-webkit-scrollbar {
    display: none;
}
.story-text{
    width: 70%;
    height: 140px;
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #606060;
    margin: 0px auto;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: scroll;
}
.story-text::-webkit-scrollbar {
    display: none;
}


</style>
