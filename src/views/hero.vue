<template>
  <div id="hero">
    Hero
    <div class="parent">
      <div v-for="(item, index) in heroList" :key="index" class="box-red" :class="index%2 === 1 ? 'box-white': ''">
        <img src="assets/logo.npg" style="width: 100px; height: 100px; opacity: 1;">
        <p class="name=style">{{item.heroName}}</p>
        <!-- <p class="job-style">{{item.job}}</p>
        <p class="brief-style">{{item.briefContents}}</p> -->
        <div class="templateName" @click="showDetailed()">查看更多</div>
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
      token: '',
      heroList: []
    }
  },
  created() {
    getFigureList().then(res => {
      console.log(res);
      for (let data of res.data.data) {
        that.heroList.push(data);
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
}
.box-red {
  width: 20%;
  height: 300px;
  background: linear-gradient(133deg, #F36F44 0%, #D42F31 100%);
  box-shadow: 10px 16px 26px 1px rgba(126, 0, 0, 0.1607843137254902);
  border-radius: 20px 20px 20px 20px;
  box-sizing: border-box;
  flex: 0 0 0 20%;
  margin: 2% 2% 2% 2%;
  opacity: 1;
}
.box-white {
  width: 20%;
  height: 300px;
  background: #FFFFFF;
  box-shadow: 0px 16px 26px 1px rgba(21, 0, 0, 0.09803921568627451);
  border-radius: 20px 20px 20px 20px;
  box-sizing: border-box;
  flex: 0 0 0 20%;
  margin: 2% 2% 2% 2%;
  opacity: 1;
}
.img {
  width: 100px;
  height: 100px;
  opacity: 1;
}
.name-style {
  width: 60px;
  height: 20px;
  font-size: 20px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 0px;
}
.job-style {
  width: 64px;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 0px;
}
.brief-style {
  width: 228px;
  height: 91px;
  font-size: 16px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 0px;
}
</style>
