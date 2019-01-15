<template>
<transition name="comein-fade">
  <div class="content">
    <div class="row">
      <span class="ued-tag-basic">基础用法</span>
      <span v-html="map.uedBarBasic.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedBarBasic')">示例代码</a>       
    </div>
    <div class="row" v-if="map.uedBarBasic.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedBarBasic.html"></pre>
        optoin参数：<pre v-html="map.uedBarBasic.scriptText" v-if="map.uedBarBasic.scriptText"></pre>
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
  name: 'echart_bar',
  data(){
    return {
      map:{
        uedBarBasic: (function(){

          var option = {
                color: ['#3398DB'],
                tooltip: {
                    show: false
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '8%',
                    top: '15%',
                    containLabel: true
                },
                "tooltip": {
                    "show": true                  
                },
                xAxis: [{
                    type: 'category',
                    data: ['海南', '首都', '天津', '香港', '祥鹏', '西部', '福州', '北部湾', '乌航', '金鹏', '长安', '桂林'],
                    axisLabel: {
                        formatter: function(ele) {
                            return ele.split('').join('\n');
                        },
                        fontSize: window.FONTSIZE * .2,
                        color: "#999999",
                        fontFamily: "PingFang Regular",
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#dddddd"
                        }
                    },
                }],
                yAxis: {
                    type: "value",
                    name: '直销额\n占比(%)',
                    nameTextStyle: {
                        fontSize: window.FONTSIZE * .2,
                        color: "#999999",
                        fontFamily: "PingFang Regular"
                    },
                    axisLabel: {
                        fontSize: window.FONTSIZE * .2,
                        color: "#999999",
                        fontFamily: "PingFang Regular",
                        formatter: function(ele) {
                            return new Number(ele).toFixed(1)
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    min: 0,
                    max: 1.0
                },
                series: [{
                    name: '收入',
                    type: 'bar',
                    barWidth: '60%',
                    data: [100, 520, 200, 334, 390, 330, 10, 52, 200, 334, 390, 330].map(function(ele) {
                        return new Number(ele / 1000 * 1.5).toFixed(2);
                    }),
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: window.FONTSIZE * .2,
                        color: "#3a404c",
                        fontFamily: "PingFang Regular"
                    },
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: '#0091ff'
                            }, {
                                offset: 1,
                                color: '#00e4ff'
                            }]
                        )
                    }
                }]
          }

          return {
            flag : false,
            html : '<div class="block" id="basic"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('basic')).setOption(option);
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