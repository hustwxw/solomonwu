<template>
	<div class="content">
		<div class="row">
			<span class="ued-tag">基础用法</span><span v-html="code.uedInput"></span><a href="javascript:void(0)" class="view" @click="view('uedInput')">示例代码</a>						
		</div>
		<div class="row" v-if="flag.uedInput">
			<span class="ued-tag"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="code.uedInput"></pre>
			</div>
		</div>
		<div class="row">
			<span class="ued-tag">基础用法 -- 禁用</span><span v-html="code.uedInputNoAllowed"></span><a href="javascript:void(0)" class="view" @click="view('uedInputNoAllowed')">示例代码</a>						
		</div>
		<div class="row" v-if="flag.uedInputNoAllowed">
			<span class="ued-tag"></span>			
			<div class="code">		
				<input type="button" class="copy" @click="copy" value="复制代码">		
				<pre v-text="code.uedInputNoAllowed"></pre>
			</div>
		</div>
		<div class="row">
			<span class="ued-tag">基础用法 -- 成功</span><span v-html="code.uedInputSuccess"></span><a href="javascript:void(0)" class="view" @click="view('uedInputSuccess')">示例代码</a>						
		</div>
		<div class="row" v-if="flag.uedInputSuccess">
			<span class="ued-tag"></span>			
			<div class="code">		
				<input type="button" class="copy" @click="copy" value="复制代码">		
				<pre v-text="code.uedInputSuccess"></pre>
			</div>
		</div>
		<div class="row">
			<span class="ued-tag">基础用法 -- 错误</span><span v-html="code.uedInputError"></span><a href="javascript:void(0)" class="view" @click="view('uedInputError')">示例代码</a>						
		</div>
		<div class="row" v-if="flag.uedInputError">
			<span class="ued-tag"></span>			
			<div class="code">		
				<input type="button" class="copy" @click="copy" value="复制代码">		
				<pre v-text="code.uedInputError"></pre>
			</div>
		</div>
		<div class="row">
			<span class="ued-tag">复合型输入框</span>
			<span v-html="code.uedInputCompose"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedInputCompose')">示例代码</a>
			<span v-html="code.uedInputComposeBg"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedInputComposeBg')">示例代码</a>
		</div>
		<div class="row" v-if="flag.uedInputCompose">
			<span class="ued-tag"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="code.uedInputCompose"></pre>
			</div>
		</div>
		<div class="row" v-if="flag.uedInputComposeBg">
			<span class="ued-tag"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="code.uedInputComposeBg"></pre>
			</div>
		</div>
	</div>	
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"
import copy from "copy-to-clipboard"

export default{
	name: 'basicInput',
	data(){
		return {
			code:{
				uedInput : '<input type="text" class="ued-input" placeholder="请输入内容">',
				uedInputNoAllowed : '<input type="text" class="ued-input" disabled placeholder="内容" value="这里禁止输入">',
				uedInputCompose : '<div class="ued-input-compose"> \n\v\v\v\v <div class="ued-input-compose-tag">请选择<i></i></div> \n\v\v\v\v <input type="text" class="ued-input" placeholder="请输入内容"> \n\v\v\v\v <ul class="none"> \n\v\v\v\v\v\v\v\v <li>选项一</li> \n\v\v\v\v\v\v\v\v <li>选项二</li> \n\v\v\v\v\v\v\v\v <li>选项三</li> \n\v\v\v\v </ul> \n</div>',
				uedInputComposeBg : '<div class="ued-input-compose ued-input-compose_bg"> \n\v\v\v\v <div class="ued-input-compose-tag">Http://</div> \n\v\v\v\v <input type="text" class="ued-input" placeholder="请输入内容"> \n</div>',
				// uedInputSuccess : '<input class="ued-input ued-input-success">'
				uedInputSuccess : '<div class="ued-input-success"><input type="text" class="ued-input"><i></i></div>',
				uedInputError : '<div class="ued-input-error"><input type="text" class="ued-input"><i></i></div>'
			},
			flag:{
				'uedInput':false,
				'uedInputNoAllowed':false,
				'uedInputCompose':false,
				'uedInputComposeBg':false,
				'uedInputSuccess':false
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
		},
		copy(event){
			var code = event.target.parentNode.getElementsByTagName('pre')[0].innerText;
			copy(code)
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