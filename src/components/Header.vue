<template>
  <div id="app">
    <div class="header">
      <img src="static/school.jpg" style="padding-left: 5%">
      <div v-for="(item, index) in headerList" :key="index" class="menu-item" :class="activedIndex === index ? 'active-item': ''" @click="changeMenu(index)">
        {{item.name}}
      </div>
      <p>纪念上海大学建校100周年校史可视化展示平台</p>
      <img src="static/party.jpg" style="height: 80px;">
    </div>
    <div class="background">
      <img src="static/background.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      activedIndex: 0,
      headerList: [
        {
          name: '校史人物',
          path: '/hero'
        },
        {
          name: '建校地标',
          path: '/landmark'
        },
        {
          name: '团史校史',
          path: '/history'
        },
        {
          name: '留言纪念',
          path: '/message'
        },
        // 添加了一个空项，看得更自然
        {

        }
      ]
    }
  },
  methods: {
    changeMenu(idx) {
      console.log('idx', idx)
      this.activedIndex = idx;
      this.$router.push(this.headerList[idx].path);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
.header {
  width: 100%;
  height: 5%;
  line-height: 8%;
  background: linear-gradient(133deg, #F36F44 0%, #D42F31 100%);
  border-radius: 0px 0px 0px 0px;
  font-size: 20px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  p {
    width: 170px;
    height: 45px;
    font-size: 14px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 100;
    color: #FFFFFF;
    line-height: 20px;
    word-wrap: break-word;
	  word-break: break-all;
  }
}
.menu-item {
  cursor: pointer;
}
.active-item {
  color: white;
  box-shadow: 0px 14px 30px 0px rgba(69, 158, 255, 0.2);
  font-size: 25px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 400;
  border-top: 6px solid rgb(255, 255, 255);
  padding-top: 35px;
  padding-bottom: 37px;
}
.background {
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
}
</style>
