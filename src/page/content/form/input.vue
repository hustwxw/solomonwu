<template>
	<div class="content">
		<div class="row">
			<span class="ued-tag">基础用法</span><input type="text" class="ued-input" placeholder="请输入内容">
		</div>
		<div class="row">
			<span class="ued-tag">复合型输入框</span>
			<div class="ued-input-compose" style="margin-right: 95px;">
				<div class="ued-input-compose-tag">请选择<i></i></div>
				<input type="text" class="ued-input" placeholder="请输入内容">
			</div>
			<div class="ued-input-compose ued-input-compose_bg">
				<div class="ued-input-compose-tag">Http://</div>
				<input type="text" class="ued-input" placeholder="请输入内容">
			</div>
		</div>		
	</div>
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"

export default{
	name: 'colorPage',
	data(){
		return {
			
		};
	},
	methods:{
		
	},
	mounted(){
		this.$emit("hideHeaderAndLeft",{show:true});
	}
}	
</script>

<style>

</style>