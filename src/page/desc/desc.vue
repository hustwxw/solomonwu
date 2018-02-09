<template>
<transition name="comein-fade">
	<div class="content">
		<h1>UED标准组件库使用说明文档</h1>
		<h2>1、CSS文件引用（两个必须文件）</h2>
		<div class="box">
			<h3>基础css库：&lt;link rel="stylesheet" href="https://hustwxw.github.io/solomonwu/src/assets/css/basic.css"&gt; <a href="https://hustwxw.github.io/solomonwu/src/assets/css/basic.css" target="_blank">basic.css源文件</a></h3>
			<h3>组件css库：&lt;link rel="stylesheet" href="https://hustwxw.github.io/solomonwu/src/assets/css/ued.css"&gt; <a href="https://hustwxw.github.io/solomonwu/src/assets/css/ued.css" target="_blank">ued.css源文件</a></h3>
		</div>
		<h2>2、CSS命名规则</h2>
		<div class="box">
			<h3>统一使用格式 a-b-c 三部分进行命名</h3>
			<h3>a: 固定是ued</h3>
			<h3>b: 组件名字，比如input、color、button之类</h3>
			<h3>c: 组件子类型，比如input有基础类型的basic，也有复合类型的compose，也有成功类型success等等</h3>
		</div>
		<div class="box m_t_20">
			<h3>例子：</h3>
			<h3>ued-input-basic : 表示基础类型的input类型框</h3>
			<h3>ued-input-success : 表示成功类型的input类型框</h3>
		</div>
	</div>
</transition>
</template>

<script>
	export default{
		name : "descIndex",
		mounted(){
			this.$emit("hideHeaderAndLeft",{show:true});
		}
	}
</script>

<style scoped>
	h1,h2{
		margin-bottom:10px;
		margin-top:10px;
		line-height: 30px;
	}
	h3{
		line-height: 30px;
	}
	.box{
		box-sizing: border-box;
		padding:20px;
		border:1px solid #d5d5d5;
	}
</style>