<template>
<transition name="comein-fade">
  <div class="content">
    <div class="row">
      <span class="ued-tag-basic">基础用法</span>
      <span v-html="map.uedProgeressBasic.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedProgeressBasic')">示例代码</a>       
    </div>
    <div class="row" v-if="map.uedProgeressBasic.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制代码">
        <pre v-text="map.uedProgeressBasic.html"></pre>
        <pre v-text="map.uedProgeressBasic.scriptText" v-if="map.uedProgeressBasic.scriptText"></pre>
      </div>      
    </div>

    <div class="row">
      <span class="ued-tag-basic">无text用法</span>
      <span v-html="map.uedProgeressNotxt.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedProgeressNotxt')">示例代码</a>       
    </div>
    <div class="row" v-if="map.uedProgeressNotxt.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制代码">
        <pre v-text="map.uedProgeressNotxt.html"></pre>
        <pre v-text="map.uedProgeressNotxt.scriptText" v-if="map.uedProgeressNotxt.scriptText"></pre>
      </div>      
    </div>
  </div>  
</transition>
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"
import copy from "copy-to-clipboard"
import $ from "jquery"

export default{
  name: 'progeress',
  data(){
    return {
      map:{
        uedProgeressBasic:{
          flag : false,
          html : ['<div class="ued-progress-basic animate-tran">\n',
                 '  <div class="ued-progress-bar animate-tran" style="width:40%"></div>\n',
                 '  <div class="ued-progress-text">40%</div>\n',
                 '</div>'].join(''),
          scriptText : ''
        },
        uedProgeressNotxt:{
          flag : false,
          html : ['<div class="ued-progress-basic ued-progress-notext animate-tran">\n',
                 '  <div class="ued-progress-bar animate-tran" style="width:80%"></div>\n',
                 '  <div class="ued-progress-text">80%</div>\n',
                 '</div>'].join(''),
          scriptText : ''
        }        
      }
    };
  },
  methods:{
    view(param){
      var _this = this;
      for(var p in this.map){
        (p != param) && (_this.map[p].flag = false);
      }
      (_this.map[param].flag)?(_this.map[param].flag = false):(_this.map[param].flag = true);
    },
    copy(event){
      var code = event.target.parentNode.getElementsByTagName('pre')[0].innerText;
      copy(code)
    }
  },
  mounted(){
    this.$emit("hideHeaderAndLeft",{show:true});
    
    for(var p in this.map){
      if(this.map[p].script){
        this.map[p].script();
      }
    }
  }
} 
</script>

<style>

</style>