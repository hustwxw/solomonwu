<template>
	<div>
		
	</div>
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"

export default{
	name: 'colorPage',
	data(){
		return {
			labelPosition: 'right',
			username:'hustwxw',
			password:'hustwxw'
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
					_this.$store.dispatch('setLogined',{
						username : _this.username
					});
				}
			})
		},
		reset(){
			this.username = "";
			this.password = "";
		}
	},
	mounted(){
		this.$emit("hideHeaderAndLeft",{show:true});
	}
}	
</script>

<style>

</style>