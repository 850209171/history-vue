<template>
  <div id="hero">
    <div class="parent">
      <div v-for="(item, index) in heroList" :key="index" class="box-red" :class="index%2 === 1 ? 'box-white': ''">
        <img :src="item.avatar" style="width: 100px; height: 100px; opacity: 1; border-radius: 50%">
        <p :class="index%2 === 1 ? 'name-style-white': 'name-style-red'">{{item.name}}</p>
        <p :class="index%2 === 1 ? 'title-style-white': 'title-style-red'">{{item.title}}</p>
        <p :class="index%2 === 1 ? 'introduction-style-white': 'introduction-style-red'">{{item.introduction}}</p>
        <p :class="index%2 === 1 ? 'button-style-white': 'button-style-red'" @click="showDetailed()"><a>查看更多→</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import {getFigureList} from '@/api'

export default {
  name: 'Hero',
  data() {
    return {
      heroList: [],
      picUrl: []
    }
  },
  created() {
    getFigureList().then(res => {
      console.log(res);
      for (let data of res.data.data) {
        this.heroList.push(data);
      }
    })
  },
  methods:{
    showDetailed() {
      console.log('showDetailedMessage', idx)
    },
  }
}
</script>


<style lang="scss">
.parent {
  width: 80%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content:center;
  margin: 0 auto;
}

// 红白框样式
.box-red {
  width: 20%;
  height: 350px;
  background: linear-gradient(133deg, #F36F44 0%, #D42F31 100%);
  box-shadow: 10px 16px 26px 1px rgba(126, 0, 0, 0.1607843137254902);
  border-radius: 20px 20px 20px 20px;
  box-sizing: border-box;
  flex: 0 0 0 20%;
  margin: 20px 10px;
  padding: 15px 10px;
  text-align: center;
  opacity: 1;
}
.box-white {
  width: 20%;
  height: 350px;
  background: #FFFFFF;
  // box-shadow: 0px 16px 26px 1px rgba(21, 0, 0, 0.09803921568627451);
  box-shadow: 0px 16px 26px 1px rgba(21, 0, 0, 0.09803921568627451);
  border-radius: 20px 20px 20px 20px;
  box-sizing: border-box;
  flex: 0 0 0 20%;
  margin: 20px 10px;
  padding: 15px 10px;
  text-align: center;
  opacity: 1;
}

// 姓名(name)样式
.name-style-red {
  width: 100%;
  height: 20px;
  font-size: 20px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
}
.name-style-white {
  width: 100%;
  height: 20px;
  font-size: 20px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 500;
  color: #000000;
  text-align: center;
}

// 曾任职字样(title)样式
.title-style-red {
  width: 100%;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  line-height: 0px;
}
.title-style-white {
  width: 100%;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 500;
  color: #000000;
  line-height: 0px;
}

// 介绍部分(introduction)样式
.introduction-style-red {
  width: 100%;
  height: 91px;
  font-size: 16px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  overflow: hidden; // 文字溢出部分隐藏
  color: #ffffff;
  line-height: 16px;
  word-wrap: break-all;  //
}
.introduction-style-white {
  width: 100%;
  height: 91px;
  font-size: 16px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  overflow: hidden;
  color: #000000;
  line-height: 16px;
  word-wrap: break-word;
}
.button-style-red {
  width: 100% ;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 0px;
}
.button-style-white {
  width: 100%;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  color: #000000;
  line-height: 0px;
}
</style>
