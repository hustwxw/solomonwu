<template>
<transition name="comein-fade">
	<div class="content">
		<!-- 基本输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法</span><span v-html="map.uedInputBasic.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputBasic')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputBasic.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputBasic.html"></pre>
				<pre v-text="map.uedInputBasic.scriptText" v-if="map.uedInputBasic.scriptText"></pre>
			</div>
		</div>
		<!-- 禁用输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法 -- 禁用</span><span v-html="map.uedInputNoAllowed.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputNoAllowed')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputNoAllowed.flag">
			<span class="ued-tag-basic"></span>			
			<div class="code">		
				<input type="button" class="copy" @click="copy" value="复制代码">		
				<pre v-text="map.uedInputNoAllowed.html"></pre>
				<pre v-text="map.uedInputNoAllowed.scriptText" v-if="map.uedInputNoAllowed.scriptText"></pre>
			</div>
		</div>
		<!-- 成功输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法 -- 成功</span><span v-html="map.uedInputSuccess.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputSuccess')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputSuccess.flag">
			<span class="ued-tag-basic"></span>			
			<div class="code">		
				<input type="button" class="copy" @click="copy" value="复制代码">		
				<pre v-text="map.uedInputSuccess.html"></pre>
				<pre v-text="map.uedInputSuccess.scriptText" v-if="map.uedInputSuccess.scriptText"></pre>
			</div>
		</div>
		<!-- 错误输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法 -- 错误</span><span v-html="map.uedInputError.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputError')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputError.flag">
			<span class="ued-tag-basic"></span>			
			<div class="code">		
				<input type="button" class="copy" @click="copy" value="复制代码">		
				<pre v-text="map.uedInputError.html"></pre>
				<pre v-text="map.uedInputError.scriptText" v-if="map.uedInputError.scriptText"></pre>
			</div>
		</div>
		<!-- 复合型输入框 -->
		<div class="row">
			<span class="ued-tag-basic">复合型输入框</span>
			<span v-html="map.uedInputCompose.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedInputCompose')">示例代码</a>
			<span v-html="map.uedInputComposeBg.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedInputComposeBg')">示例代码</a>
		</div>
		<div class="row" v-if="map.uedInputCompose.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputCompose.html"></pre>
				<pre v-text="map.uedInputCompose.scriptText" v-if="map.uedInputCompose.scriptText"></pre>
			</div>
		</div>
		<div class="row" v-if="map.uedInputComposeBg.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputComposeBg.html"></pre>
				<pre v-text="map.uedInputComposeBg.scriptText" v-if="map.uedInputComposeBg.scriptText"></pre>
			</div>
		</div>
		<!-- 文本域 -->
		<div class="row">
			<span class="ued-tag-basic">文本域</span>
			<span v-html="map.uedInputTextarea.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedInputTextarea')">示例代码</a>			
		</div>
		<div class="row" v-if="map.uedInputTextarea.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputTextarea.html"></pre>
				<pre v-text="map.uedInputTextarea.scriptText" v-if="map.uedInputTextarea.scriptText"></pre>
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
	name: 'basicInput',
	data(){
		return {
			map:{
				uedInputBasic:{
					flag : false,
					html : '<input type="text" class="ued-input-basic" placeholder="请输入内容">',
				},
				uedInputNoAllowed:{
					flag : false,
					html : '<input type="text" class="ued-input-basic" disabled placeholder="内容" value="这里禁止输入">'
				},
				uedInputCompose:{
					flag : false,
					html : '<div class="ued-input-compose" id="ued-input-compose" onselectstart="return false"> \n\v\v\v\v <div class="ued-input-compose-tag">请选择<i></i></div> \n\v\v\v\v <input type="text" class="ued-input-basic" placeholder="请输入内容"> \n\v\v\v\v <ul class="none"> \n\v\v\v\v\v\v\v\v <li>选项一</li> \n\v\v\v\v\v\v\v\v <li>选项二</li> \n\v\v\v\v\v\v\v\v <li>选项三</li> \n\v\v\v\v </ul> \n</div>',
					script : function(){
						$("#ued-input-compose .ued-input-compose-tag").on("click",function(){
							if($(this).parent().find('ul').hasClass('none')){
								$(this).parent().find('ul').removeClass('none')
							}else{
								$(this).parent().find('ul').addClass('none')
							}
						});
						$("#ued-input-compose li").on("click",function(){
							$(this).parent("ul").addClass('none');
							$("#ued-input-compose .ued-input-compose-tag").html($(this).html() + "<i></i>");
						});
					},
					scriptText : 
						`示例脚本：\n $("#ued-input-compose .ued-input-compose-tag").on("click",function(){ \n\v\v\v\v if($(this).parent().find('ul').hasClass('none')){ \n\v\v\v\v\v\v\v\v $(this).parent().find('ul').removeClass('none') \n\v\v\v\v }else{ \n\v\v\v\v\v\v\v\v $(this).parent().find('ul').addClass('none') \n\v\v\v\v } \n }); \n $("#ued-input-compose li").on("click",function(){ \n\v\v\v\v $(this).parent("ul").addClass('none'); \n\v\v\v\v $("#ued-input-compose .ued-input-compose-tag").html($(this).html() + "<i></i>"); \n });`
				},
				uedInputComposeBg:{
					flag : false,
					html : '<div class="ued-input-compose ued-input-compose_bg"> \n\v\v\v\v <div class="ued-input-compose-tag">Http://</div> \n\v\v\v\v <input type="text" class="ued-input-basic" placeholder="请输入内容"> \n</div>'					
				},
				uedInputSuccess:{
					flag : false,
					html : '<div class="ued-input-success"><input type="text" class="ued-input-basic"><i></i></div>'
				},
				uedInputError:{
					flag : false,
					html : '<div class="ued-input-error"><input type="text" class="ued-input-basic"><i></i></div>'
				},
				uedInputTextarea:{
					flag : false,
					html : '<textarea class="ued-input-basic ued-input-textarea"></textarea>'
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