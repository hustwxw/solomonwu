<template>
	<div class="login_wrap">
		<p class="title">登录</p>
		<el-form :label-position="labelPosition" label-width="80px">
			<el-form-item label="用户名">
		    	<el-input v-model="username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
		    	<el-input type="password" v-model="password"></el-input>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="login">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import eking from "@/lib/eking"
export default{
	name: 'login',
	data(){
		return {
			labelPosition: 'right',
			username:'',
			password:''
		};
	},
	methods:{
		login(){
			var _this = this;
			eking.net.get("login",{
				user : _this.username,
				password : _this.password
			},function(json){
				if(json.code == 0){
					alert();
				}
			})
		}
	},
	mounted(){
		this.$emit("hideHeaderAndLeft",{hide:true})
	}
}	
</script>

<style>
.login_wrap{
	display: flex;
	width:500px;
	height:300px;
	box-shadow: 2px 2px 2px #d5d5d5;
	background-color: #3c8dbc;
	border-radius: 5px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.el-container{
	height:100%;
}
.el-main{
	display: flex;
	justify-content: center;
	align-items: center;
}
.title{
	display: flex;
	width: 100%;
	height: 50px;
	font-size:16px;
	justify-content: center;
	align-items: center;
}
label{
	color:#999999;
}
</style>