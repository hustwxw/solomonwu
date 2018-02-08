<template>
    <el-container class="wrap">
        <el-header class="header" v-show="showHeader">用户体验中心Logo</el-header>
        <el-container>
            <el-aside class="aside" width="15.652%" v-show="showLeft">
              <ul class="menu_ul">
                <li v-bind:class="{menu_li:true,first:menu.first,second:menu.second,third:menu.third}" v-for="menu in menus">{{menu.name}}</li>
              </ul>
            </el-aside>
            <el-main>
                <router-view v-on:hideHeaderAndLeft="hideHeaderAndLeft"/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'App',
  data(){
        return {
            showHeader: false,
            showLeft: false,
            menus: [{
                name: '说明',
                first: true,
                second: false,
                third: false
            }, {
                name: '组件',
                first: true,
                second: false,
                third: false
            }, {
                name: 'Basic',
                first: false,
                second: true,
                third: false
            }, {
                name: '配色 Color',
                first: false,
                second: false,
                third: true
            }, {
                name: '布局 Layout',
                first: false,
                second: false,
                third: true
            }, {
                name: '字体 Typography',
                first: false,
                second: false,
                third: true
            }, {
                name: '图标 Icon',
                first: false,
                second: false,
                third: true
            }, {
                name: '按钮 Button',
                first: false,
                second: false,
                third: true
            }, {
                name: 'Form',
                first: false,
                second: true,
                third: false
            }, {
                name: '单选框 Radio',
                first: false,
                second: false,
                third: true
            }, {
                name: '复选框 Checkbox',
                first: false,
                second: false,
                third: true
            }, {
                name: '输入框 Input',
                first: false,
                second: false,
                third: true
            }]
        }
  },
  methods:{
    hideHeaderAndLeft(data){
        if(data.hide){
            this.showHeader = false;
            this.showLeft = false;
        }
        if(data.show){
            this.showHeader = true;
            this.showLeft = true;
        }
    }
  }
}
</script>

<style src="./assets/css/basic.css"></style>

<style src="./assets/css/framework.css"></style>

<style src="./assets/css/ued.css"></style>

<style scoped>
  .header{
    height:62px;
    background-color: #1E262F;
    line-height: 62px;
    color:white;
  }
  .aside{
    background-color: #2E3640;
    padding: 2.083% 0%;
    min-width: 190px;
  }
  .wrap{
    height:100%;
  }
  .menu_ul{
    height:auto;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .menu_li,.menu_li.first{
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    height:40px;
    width:100%;
    color:white;
    font-size:18px;
    cursor: pointer;
    padding:0% 14%;
    box-sizing: border-box;
    letter-spacing: -0.31px;
    font-weight:bold;
  }
  .menu_li.second{
    font-size: 16px;
    color: #B3BAC3;
    letter-spacing: -0.28px;
    padding:0% 19.6%;
    font-weight:lighter;
  }
  .menu_li.third{
    font-size: 14px;
    color: #F5F5F5;
    letter-spacing: -0.28px;
    padding:0% 19.6%;
    font-weight:lighter;
  }
  .menu_li.third:hover,.menu_li.third.hover{
    color: #43BCEF;
  }
  .menu_li.first:hover,.menu_li.first.hover{
    background-color: #0486FE;
  }
</style>
