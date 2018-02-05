<template>
    <el-container>
        <el-header class="header" v-if="showHeader">Header</el-header>
        <el-container>
            <el-aside width="20%" v-if="showLeft">Aside</el-aside>
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
        showHeader : true,
        showLeft : true
    }
  },
  methods:{
    hideHeaderAndLeft(data){
        if(data.hide){
            this.showHeader = false;
            this.showLeft = false;
        }
    }
  }
}
</script>

<style src="./assets/css/basic.css"></style>

<style src="./assets/css/framework.css"></style>
