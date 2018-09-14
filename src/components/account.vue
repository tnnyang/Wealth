<template>
	<div>
	  <div class="information">
		<div class="container">
			<div class="inforDetail">
				<img class="header" src="../../static/images/account_head.png" alt="" />
				<ul>
					<li class="inforDetail_phone"><label>欢迎您</label>：17521518474！</li>
					<li><label>上次登陆时间</label>：2018-8-13  21:34</li>
				</ul>
			</div>				
		</div>
	</div>
	<div class="taskList">
		<div class="taskitem">
			<div class="container">
				实名认证
				<span class="renzheng" @click="finish">{{isReal}}</span>
			</div>
		</div>
		<div class="taskitem">
			<div class="container">
				手机号认证
				<span>已完成</span>
			</div>
		</div>
		<div class="taskitem">
			<div class="container">
				风险承受能力：<em>C3</em>
				<span><router-link to="/question">重新测试</router-link></span>
			</div>
		</div>
	</div>
	<div class="popup realname" v-show="isShowReal">
		<div class="mask"></div>
		<div class="realCon">
			<h5>请填写身份证信息 , 完成实名认证</h5>
			<p><img src="../../static/images/real_line.png" alt="" /></p>
			<ul>
				<li>
					<label>真实姓名：</label>
					<input type="text" class="real_name" value="" placeholder="请输入本人姓名，核实后不可更改" v-model="name" />
				</li>
				<li>
					<label>证件类型：</label>
					<div class="divselect"> 
						<span @click="selectDown">{{cardType}}</span> 
						<ul v-show="isShowOption"> 
							<li v-for="(item, index) in cardTypeList" :key="index" @click.stop="selected(item)">{{item}}</li>
						</ul> 
					</div>
				</li>
				<li>
					<label>证件号：</label>
					<input type="text" class="real_id" value="" placeholder="请输入本人身份证号，核实后不可更改" v-model="cardCode" />
				</li>
				<li class="errortip" v-show="isShowerrorTips">{{errorTips}}</li>
				<li>
					<button type="button" class="real_submit" @click="confirm">确定</button>
				</li>
			</ul>
			<img class="close real_close" src="../../static/images/close_big.png" alt="" @click="close" />
		</div>
	</div>
</div>
</template>
<script>
	import accountApi from '@/api/sendRequestApi'

	export default {
		data(){
			return {
				isShowReal: false,
				isShowerrorTips: false,
				name: "",
				cardType: "请选择证件类型",
				cardTypeList: ["请选择证件类型", "身份证"],
				cardCode: "",
				errorTips: "",
				isReal: "未完成",
				isShowOption: false
			}
		},
		mounted(){
			let params = {
				search: "tnnyang"
			};
			
			accountApi.GetCertification(params).then(res => {
				if(res.length > 0){
					this.isReal = "已完成";
				}				
			});
		},
		methods: {
			selectDown(){
				if(this.isShowOption){
					this.isShowOption = false;
				}else{
					this.isShowOption = true;
				}				
			},
			selected(item){
				this.cardType = item;
				this.isShowOption = false;
			},
			finish(){
				if(this.isReal == "未完成"){
					this.isShowReal = true;
				}				
			},
			close(){
				this.isShowReal = false;
			},
			confirm(){
				if(this.name.length < 1){
					this.isShowerrorTips = true;
					this.errorTips = "姓名不能为空！";
				}else if(this.cardType == "请选择证件类型"){
					this.isShowerrorTips = true;
					this.errorTips = "请选择证件类型!";
				}else if(this.cardCode.length < 1){
					this.isShowerrorTips = true;
					this.errorTips = "证件号不能为空！";
				}else{
					this.isShowerrorTips = false;
					this.errorTips = "";

					let params = {
						name: this.name,
						cardType: this.cardType,
						cardCode: this.cardCode
					};

					accountApi.Certification(params).then(res => {
						this.isShowReal = false;
						this.isReal = "已完成";
					});
				}
			}
		}
	}
</script>
<style scoped>
.information{padding: 70px 0;background: #1a1a1a;}
.inforDetail{background: url(../../static/images/account_line.png) no-repeat left bottom / 776px 1px;padding:0 0 50px 30px;margin-left: 70px;overflow: hidden;}
.inforDetail .header{width: 113px;height: 113px;border-radius: 50%;float:left;margin-right: 30px;}
.inforDetail ul{float: left;font-size: 24px;color: #fff;line-height: 48px;padding-top: 10px;}
.inforDetail ul label{width: 158px;display: inline-block;}
.inforDetail .inforDetail_phone{color: #c8a56f;}
.inforDetail_phone label{letter-spacing: 28px;}
.taskList{margin-bottom: 123px;}
.taskitem{height: 100px;background: #1f1f1f;font-size: 18px;color: #fff;line-height: 40px;}
.taskitem span{color: #c8a56f;text-decoration: underline;width: 80px;display: inline-block;float: right;cursor: pointer;}
.taskitem span a{color: #c8a56f;display: block;}
.taskitem em{color: #c8a56f;font-size: 24px;position:relative;top:2px;}
.taskList .taskitem:nth-child(2){background: #1a1a1a;}
.taskitem .container{padding:30px 110px 30px 100px;overflow: hidden;}
.realCon{width: 708px;padding: 70px 32px 60px;background: #1a1a1a;z-index: 99999;position: fixed;left: 50%;top: 50%;margin: -250px 0 0 -354px;}
.realCon h5{font-size: 24px;color: #c8a56f;text-align: center;margin-bottom: 32px;}
.real_close{width: 24px;height: 25px;position: absolute;top: 30px;right: 30px;cursor: pointer;}
.realCon ul{width: 460px;margin: 40px auto 0;font-size: 24px;color: #c8a56f;line-height: 40px;}
.realCon li{margin-top: 40px;height:40px;}
.realCon li label{width: 122px;text-align: right;float:left;}
.realCon li input,.realCon li select{background: none;width: 323px;height: 40px;border: solid 1px #c4a26d;font-size: 16px;color: #d8d8d8;padding: 0 12px;line-height: 40px;font-weight: normal;float: right;}
.realCon li select{appearance:none;-moz-appearance:none;-webkit-appearance:none;background: url(../../static/images/select_arrow.png) no-repeat right center / 16px 8px;}
.realCon input::-webkit-input-placeholder{color:#666;font-size: 14px;}
.realCon li button{background: none;border:none;width: 323px;height: 50px;background: #c4a26d;border-radius: 2px;font-size: 24px;color: #fdfdfd;line-height: 50px;text-align: center;float: right;cursor: pointer;}
.realCon li.errortip{height: 16px;background: url(../../static/images/errorTip.png) no-repeat left top / 16px 16px;padding-left: 22px;color: #bb3939;font-size: 14px;line-height: 16px;margin:24px 0 -26px 136px;}
.divselect{width: 323px;height: 40px; position:relative; z-index:10000;float:right;border:1px solid #c4a26d;}
.divselect span{width: 317px;height: 38px;line-height:38px; display:block; color:#807a62; cursor:pointer;font-style:normal;background:url(../../static/images/select_arrow.png) no-repeat right center;padding:0 12px;font-size:16px;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;}
.divselect ul{width:323px;border:1px solid #c4a26d;border-top:none; background:#1a1a1a; position:absolute; z-index:20000;margin:1px 0 0 -1px;color:#c8a56f;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;}
.divselect ul li{height:30px; line-height:30px;margin:0;padding-left:12px;font-size:16px;cursor:pointer;}
.divselect ul li:hover{background:#c4a26d;color:#fff;}
</style>