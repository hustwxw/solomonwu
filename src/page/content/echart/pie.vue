<template>
<transition name="comein-fade">
  <div class="content">
    <div class="row">
      <span class="ued-tag-basic">基础用法</span>
      <span v-html="map.uedPieRing.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedPieRing')">示例代码</a>  

      <span class="ued-tag-basic">南丁格尔图一</span>
      <span v-html="map.uedPieNDGE1.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedPieNDGE1')">示例代码</a>     
    </div>
    <div class="row" v-if="map.uedPieRing.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedPieRing.html"></pre>
        optoin参数：<pre v-html="map.uedPieRing.scriptText" v-if="map.uedPieRing.scriptText"></pre>
      </div>      
    </div>
    <div class="row" v-if="map.uedPieNDGE1.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedPieNDGE1.html"></pre>
        optoin参数：<pre v-html="map.uedPieNDGE1.scriptText" v-if="map.uedPieNDGE1.scriptText"></pre>
      </div>      
    </div>
    <div class="row">
      <span class="ued-tag-basic">南丁格尔图二</span>
      <span v-html="map.uedPieNDGE2.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedPieNDGE2')">示例代码</a>
    </div>
    <div class="row" v-if="map.uedPieNDGE2.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedPieNDGE2.html"></pre>
        optoin参数：<pre v-html="map.uedPieNDGE2.scriptText" v-if="map.uedPieNDGE2.scriptText"></pre>
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
import formatJson from "format-json"

export default{
  name: 'echart_pie',
  data(){
    return {
      map:{
        uedPieRing: (function(){

          var option = {
              "legend": {
                  "show": false,
              },
              "title": {
                  "text": "总销售额",
                  "x": "center",
                  "y": "85%",
                  "textStyle": {
                      "fontSize":window.FONTSIZE * .24,
                      "color":"#999999"
                  }
              },
              "calculable": true,
              "startAngle": 100,
              "series": [{
                  "type": "pie",
                  "z": 0,
                  label: {
                      normal: {
                          position: "center"
                      }
                  },
                  // "roseType": "radius",
                  "center": ["50%", "45%"],
                  "radius": ["40%", "70%"],
                  "data": [{
                      "value": 5,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#ffc200'
                                  }, {
                                      offset: 1,
                                      color: '#ffb900'
                                  }]
                              )
                          }
                      },
                      z: 2
                  }, {
                      "value": 3,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#0091ff'
                                  }, {
                                      offset: 1,
                                      color: '#00e3ff'
                                  }]
                              )
                          }
                      }
                  }, {
                      "value": 1,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#932233'
                                  }, {
                                      offset: 1,
                                      color: '#ff0000'
                                  }]
                              )
                          }
                      }
                  }],
                  // "hoverAnimation": false
              }],
              "tooltip": {
                  "show": true
              }
          }

          return {
            flag : false,
            html : '<div class="block" id="basic"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('basic')).setOption(option);
            }
          }

        })(),

        uedPieNDGE1: (function(){

          var option = {
              "legend": {
                  "show": false,
              },
              "title": {
                  "text": "总销售额",
                  "x": "center",
                  "y": "85%",
                  "textStyle": {
                      "fontSize":window.FONTSIZE * .24,
                      "color":"#999999"
                  }
              },
              "calculable": true,
              "startAngle": 100,
              "roseType": "radius",
              "series": [{
                  "type": "pie",
                  "z": 0,
                  label: {
                      normal: {
                          position: "center"
                      }
                  },
                  // "roseType": "radius",
                  "center": ["50%", "45%"],
                  "radius": ["40%", "70%"],
                  "data": [{
                      "value": 5,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#ffc200'
                                  }, {
                                      offset: 1,
                                      color: '#ffb900'
                                  }]
                              )
                          }
                      },
                      z: 2
                  }, {
                      "value": 3,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#0091ff'
                                  }, {
                                      offset: 1,
                                      color: '#00e3ff'
                                  }]
                              )
                          }
                      }
                  }, {
                      "value": 1,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#932233'
                                  }, {
                                      offset: 1,
                                      color: '#ff0000'
                                  }]
                              )
                          }
                      }
                  }],
                  // "hoverAnimation": false
              }],
              "tooltip": {
                  "show": true
              }
          }


          return {
            flag : false,
            html : '<div class="block" id="ndgr1"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('ndgr1')).setOption(option);
            }
          }

        })(),

        uedPieNDGE2: (function(){

          var option = {
              "legend": {
                  "show": false,
              },
              "title": {
                  "text": "总销售额",
                  "x": "center",
                  "y": "85%",
                  "textStyle": {
                      "fontSize":window.FONTSIZE * .24,
                      "color":"#999999"
                  }
              },
              "calculable": true,
              "startAngle": 100,
              "roseType": "area",
              "series": [{
                  "type": "pie",
                  "z": 0,
                  label: {
                      normal: {
                          position: "center"
                      }
                  },
                  // "roseType": "radius",
                  "center": ["50%", "45%"],
                  "radius": ["40%", "70%"],
                  "data": [{
                      "value": 5,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#ffc200'
                                  }, {
                                      offset: 1,
                                      color: '#ffb900'
                                  }]
                              )
                          }
                      },
                      z: 2
                  }, {
                      "value": 3,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#0091ff'
                                  }, {
                                      offset: 1,
                                      color: '#00e3ff'
                                  }]
                              )
                          }
                      }
                  }, {
                      "value": 1,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#932233'
                                  }, {
                                      offset: 1,
                                      color: '#ff0000'
                                  }]
                              )
                          }
                      }
                  }],
                  // "hoverAnimation": false
              }],
              "tooltip": {
                  "show": true
              }
          }


          return {
            flag : false,
            html : '<div class="block" id="ndgr2"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('ndgr2')).setOption(option);
            }
          }

        })()
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
      var code = event.target.parentNode.getElementsByTagName('pre')[1].innerText;
      copy(code)
      alert("复制成功")
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