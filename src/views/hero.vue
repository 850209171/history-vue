<template>
  <div id="hero">
    <div class="parent">
      <div v-for="(item, index) in heroList" :key="index" :class="(index%2 === 1 && (Math.floor(index / 4)) % 2 !== 1)|| (index%2 !== 1 && (Math.floor(index / 4)) % 2 === 1) ? 'box-white': 'box-red'">
        <img :src="item.avatar" style="width: 100px; height: 100px; opacity: 1; border-radius: 50%; margin: 10px;">
        <p :class="(index%2 === 1 && (Math.floor(index / 4)) % 2 !== 1)|| (index%2 !== 1 && (Math.floor(index / 4)) % 2 === 1)? 'name-style-white': 'name-style-red'">{{item.name}}</p>
        <p :class="(index%2 === 1 && (Math.floor(index / 4)) % 2 !== 1)|| (index%2 !== 1 && (Math.floor(index / 4)) % 2 === 1) ? 'title-style-white': 'title-style-red'">{{item.title}}</p>
        <p :class="(index%2 === 1 && (Math.floor(index / 4)) % 2 !== 1)|| (index%2 !== 1 && (Math.floor(index / 4)) % 2 === 1) ? 'introduction-style-white': 'introduction-style-red'">{{item.introduction}}</p>
        <div :class="(index%2 === 1 && (Math.floor(index / 4)) % 2 !== 1)|| (index%2 !== 1 && (Math.floor(index / 4)) % 2 === 1) ? 'button-style-white': 'button-style-red'" @click="showDetailed(item.id)">查看更多→</div>
      </div>
    </div>
    <!-- <template > -->
    <Detail @cancel="close" v-if="bol"></Detail>
    <!-- </template> -->
  </div>
</template>

<script>
import {getFigureList} from '@/api/index'
import Detail from "./heroDetail.vue";

export default {
  name: 'Hero',
  data() {
    return {
      heroList: [],
      bol: false,  // 控制弹窗界面的显示
      label: 0
    }
  },
  components: {
    Detail
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
    showDetailed(index) {
      this.label = index;
      sessionStorage.setItem('index', (this.label));
      console.log(this.label+1);
      this.bol = true;
    },
    close() {
      this.bol = false;
    }
  }
}
</script>


<style lang="scss">

//这里面可以自定义字体样式等，都是CSS基础
.rule {
  position: absolute;
  width: 0.82rem;
  height: 0.36rem;
  top: 0.08rem;
  right: 0rem;
  background: #111111;
}
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
  margin: 0px auto;
}
.name-style-white {
  width: 100%;
  height: 20px;
  font-size: 20px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 500;
  color: #000000;
  text-align: center;
  margin: 0px auto;
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
  width: 90%;
  height: 98px;
  font-size: 16px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
  word-wrap: break-all;  //
  overflow-x: hidden; 
  overflow-y: scroll;
  margin: 0px auto;
}
.introduction-style-red::-webkit-scrollbar {
  display: none;
}
.introduction-style-white {
  width: 90%;
  height: 98px;
  font-size: 16px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0px auto;
}
.introduction-style-white::-webkit-scrollbar {
  display: none;
}
.button-style-red {
  width: 100% ;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  margin: 20px auto;
  cursor: pointer;
  
  &:hover {
    color: black;
  }

}
.button-style-white {
  width: 100%;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  font-weight: 400;
  color: #000000;
  margin: 20px auto;
  cursor: pointer;

  &:hover {
    color: red;
  }
}
</style>
