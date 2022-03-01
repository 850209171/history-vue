<template>
  <div id="history">
    <div class="history-title">上海大学与共青团大事记</div>
    <div class="parent"> 
      <div v-for="(item, index) in grouphistoryList" :key="index" :class="index%2 === 1 ? 'box-white': 'box-red'" @click="getGroupDetail(index)">
        <img :src="item.picture" style="width: 90%; height: 200px;
        background: linear-gradient(133deg, #F36F44 0%, #D42F31 100%);
        object-fit: cover;
        box-shadow: 0px 10px 20px rgba(126, 0, 0, 0.16);
        opacity: 1;
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 10px;">
        <p :class="index%2 === 1 ? 'title-style-white': 'title-style-red'">{{ item.title }}</p>
        <p :class="index%2 === 1 ? 'time-style-white': 'time-style-red'">1992-10-10</p>
      </div>  
    </div>
    <div class="honor">
      <div class="history-title">上海大学光荣榜</div>
      <div class="sec-title">五四青年奖章获得者</div>
      <div v-for="(item, index) in halloffameList" :key="index" class="honor-person" @click="getHalloDetail(index)">
        <img :src="item.picture" alt="" style="width: 60px; height: 60px; border-radius: 50%; opacity: 1;">
        <div
        ><p class="text-style">{{ item.name }}</p></div>
        <div><p class="text-style">{{ item.time }}</p></div>
      </div>
    </div>
    <template v-if="groupbol">
      <GroupDetail></GroupDetail>
    </template>
    <template v-if="hallobol">
      <HalloDetail></HalloDetail>
    </template>
  </div>
</template>

<script>
import {getGroupList} from '@/api/index.js'
import {getMessageList} from '@/api/index.js'
import GroupDetail from "./groupDetail.vue"
import HalloDetail from "./halloDetail.vue"

export default {
  name: 'History',
  data() {
    return {
      grouphistoryList: [],
      groupindex: 0,
      groupbol: false,
      halloffameList: [],
      halloindex: 0,
      hallobol: false
    }
  },
  components: {
    GroupDetail,
    HalloDetail
  },
  created() {
    getGroupList().then(res => {
      console.log(res);
      for (let data of res.data.data) {
        this.grouphistoryList.push(data);
      }
    }),
    getMessageList().then(res => {
      console.log(res);
      for (let data of res.data.data) {
        this.halloffameList.push(data);
      }
    })
  },
  methods: {
    getGroupDetail(index) {
      this.groupindex = index;
      console.log('事件索引：', this.groupindex);
      sessionStorage.setItem('groupIndex', (this.groupindex + 1));
      this.groupbol = true;
    },
    getHalloDetail(index) {
      this.halloindex = index;
      console.log('人物索引：', this.halloindex);
      sessionStorage.setItem('halloIndex', (this.halloindex + 1));
      this.hallobol = true;
    }
  }
}
</script>


<style lang="scss">
.history-title {
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  line-height: 50px;
  color: #D63332;
  opacity: 1;
  margin: 10px auto;
  text-align: center;
} 
.sec-title {
  width: 100%;
  height: 20px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #D53132;
  opacity: 1;
  margin: 20px auto;
  text-align: center;
}
.parent {
  width: 60%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
  margin: 20px auto;
}
.honor {
  width: 70%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
  margin: 0 auto;
}
.honor-person {
  width: 150px;
  height: 50px;
  display: flex;
  margin-left: 20px;
  margin-bottom: 50px;
  // background-color:red;
	// opacity: 0.5;
}
.text-style {
  width: 48px;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  line-height: 16px;
  color: #444444;
  opacity: 1;
}
// 红白框样式
.box-red {
  width: 18%;
  height: 370px;
  background: linear-gradient(133deg, #F36F44 0%, #D42F31 100%);
  box-shadow: 10px 16px 26px 1px rgba(126, 0, 0, 0.1607843137254902);
  border-radius: 20px 20px 20px 20px;
  box-sizing: border-box;
  flex: 25%;
  margin: 20px 20px;
  text-align: center;
  opacity: 1;
}
.box-white {
  width: 18%;
  height: 370px;
  background: #FFFFFF;
  // box-shadow: 0px 16px 26px 1px rgba(21, 0, 0, 0.09803921568627451);
  box-shadow: 0px 16px 26px 1px rgba(21, 0, 0, 0.09803921568627451);
  border-radius: 20px 20px 20px 20px;
  box-sizing: border-box;
  flex: 25%;
  margin: 20px 20px;
  text-align: center;
  opacity: 1;
}

// title样式
.title-style-red {
  width: 90%;
  _height: 200px; 
  min-height: 20px; 
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #FFFFFF;
  opacity: 1;
  margin: 0px auto;
  text-align: left;
  line-height: 25px;
}
.title-style-white {
  width: 90%;
  _height: 200px; 
  min-height: 20px; 
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #D63332;
  opacity: 1;
  margin: 0px auto;
  text-align: left;
  line-height: 25px;
}

// time样式
.time-style-red {
  width: 90%;
  height: 19px;
  font-size: 16px;
  font-family: DIN;
  font-weight: bold;
  line-height: 19px;
  color: #ffffff;
  opacity: 1; 
  text-align: left;
  margin: 30px auto;
}
.time-style-white {
  width: 90%;
  height: 19px;
  font-size: 16px;
  font-family: DIN;
  font-weight: bold;
  line-height: 19px;
  color: #D63332;
  opacity: 1; 
  text-align: left;
  margin: 30px auto;
}
</style>
