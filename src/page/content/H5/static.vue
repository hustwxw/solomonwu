<template>
<transition name="comein-fade">
	<div class="content">
		<p class="title">以下页面均是静态页面的效果</p>
		<div class="wrap">
			<a href="https://hustwxw.github.io/solomonwu/h5static/html/上拉刷新.html" target="_blank">上拉刷新（基于iscroll5）</a>
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
	name: 'basicBox',
	data(){
		return {
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
	}
}	
</script>

<style scoped>
.title{
	display: inline-flex;
	width:100%;
	height:40px;
	justify-content: flex-start;
	align-items: center;
	font-size: 14px;
	margin-bottom: 10px;
}
.wrap{
	display: flex;
	flex-wrap: wrap;
	width:100%;
	height:auto;
}
.wrap a{
	display: inline-flex;
	width:auto;
	min-width: 100px;
	font-size: 14px;
	text-decoration: none;
	align-items: center;
	margin-right: 10px;
}
</style>