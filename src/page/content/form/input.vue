<template>
	<div class="content">
		<div class="row">
			<span class="ued-tag">基础用法</span><input type="text" class="ued-input" placeholder="请输入内容"><a href="javascript:void(0)" class="view" @click="view('uedInput')">示例代码</a>						
		</div>
		<div class="row" v-if="flag.uedInput">
			<span class="ued-tag"></span>
			<pre>&lt;input type=&quot;text&quot; class=&quot;ued-input&quot; placeholder=&quot;请输入内容&quot;&gt;</pre>
		</div>
		<div class="row">
			<span class="ued-tag">复合型输入框</span>
			<div class="ued-input-compose">
				<div class="ued-input-compose-tag">请选择<i></i></div>
				<input type="text" class="ued-input" placeholder="请输入内容">
			</div>
			<a href="javascript:void(0)" class="view" @click="view('uedInputCompose')">示例代码</a>
			<div class="ued-input-compose ued-input-compose_bg">
				<div class="ued-input-compose-tag">Http://</div>
				<input type="text" class="ued-input" placeholder="请输入内容">
			</div>
			<a href="javascript:void(0)" class="view" @click="view('uedInputComposeBg')">示例代码</a>
		</div>
		<div class="row" v-if="flag.uedInputCompose">
			<span class="ued-tag"></span>
			<pre>
&lt;div class=&quot;ued-input-compose&quot;&gt;
  &lt;div class=&quot;ued-input-compose-tag&quot;&gt;请选择&lt;i&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;ued-input&quot; placeholder=&quot;请输入内容&quot;&gt;
&lt;/div&gt;</pre>
		</div>
		<div class="row" v-if="flag.uedInputComposeBg">
			<span class="ued-tag"></span>
			<pre>
&lt;div class=&quot;ued-input-compose ued-input-compose_bg&quot;&gt;
  &lt;div class=&quot;ued-input-compose-tag&quot;&gt;Http://&lt;/div&gt;
  &lt;input type=&quot;text&quot; class=&quot;ued-input&quot; placeholder=&quot;请输入内容&quot;&gt;
&lt;/div&gt;</pre>
		</div>
	</div>	
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"

export default{
	name: 'basicColor',
	data(){
		return {
			flag:{
				'uedInput':false,
				'uedInputCompose':false,
				'uedInputComposeBg':false
			}
		};
	},
	methods:{
		view(param){
			var _this = this;
			for(var p in this.flag){
				(p != param) && (_this.flag[p] = false);
			}
			(_this.flag[param])?(_this.flag[param] = false):(_this.flag[param] = true);
		}
	},
	mounted(){
		this.$emit("hideHeaderAndLeft",{show:true});
		// hljs.initHighlightingOnLoad();
	}
}	
</script>

<style>

</style>