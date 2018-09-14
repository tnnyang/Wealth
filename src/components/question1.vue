<template>
<div class="question">
  	<div class="container">
		<div class="questionnaire_title">合格投资者风险测评问卷</div>		
		<div class="questionnaire_desc">
			<p class="desc_way">根据《私募投资基金监督管理暂行办法》第四章第十四条规定：</p>
			<p>私募基金管理人、私募基金销售机构不得向合格投资者之外的单位和个人募集资金,不得通过报刊电台、电视、互联网等公众传播或讲座,报告分析会、传单、手机短信、微信、博客和电子邮件等方式向不特定对象宣传推介。</p>
			<p>阁下如有意了解私募基金且满足《私募投资基金监督管理暂行方法》关于“合格投资人”标准之规定,即：</p>
			<p><img src="images/duiHao.png" alt="" />具备相应风险识别能力和风险承担能力；<br /><img src="images/duiHao.png" alt="" />投资于单只私募基金的金额不低于100万元；<br /><img src="images/duiHao.png" alt="" />个人金融类资产不低于300万元或者最近三年个人年平均收入不低于50万元人民币;</p>
			<i class="line"></i>
			<p>互融财富谨遵《私募投资基金监督管理暂行办法》之规定，只向特定投资人展示私募基金产品信息，不构成任何投资推介建议。 为了给您提供更优质的服务，请您花费几分钟时间，如实填写调查问卷,本问卷可协助您评估您的风险承受能力,进而为您挑选更适合的投资产品。</p>
		</div>
	</div>
	<div class="questionnaire_main">
		<div v-for="(item, index) in question" :key="index" :class="index % 2 == 0 ? 'questionnaire questionnaire_grey' : 'questionnaire questionnaire_black'">
			<div class="container">
				<dl>
					<dt>{{item.title}}</dt>
					<dd v-for="(questionItem, idx) in item.content" :key="idx">
						<label>
							<input type="radio" :name="item.name" class="question_item" :value="questionItem.text" v-model="requiredItem[item.name]" v-if="item.type == 'radio'">
							<input type="checkbox" :name="item.name" class="question_item" :value="questionItem.text" v-model="requiredItem[item.name]" v-if="item.type == 'checkbox'">							
							{{questionItem.text}}							
						</label>						
					</dd>
					<dd v-if="item.type == 'textarea'"><textarea :name="item.name" v-model="requiredItem[item.name]" placeholder="备注"></textarea></dd>				
				</dl>
			</div>
		</div>
		<p class="questionnaire_btn"><input type="button" value="提交" @click="submit"/></p>		
	</div>
	{{requiredItem}}
</div>
</template>
<script>
	import Bus from '@/commonJs/Bus'

	export default {
		data(){
			return {
				question: [
					{
						name: "yearOld",
						title: "1、您的年龄介于",
						type: "radio",
						content: [
							{text: "A 18-30岁"}, 
							{text: "B 31-50岁"}, 
							{text: "C 51-65岁"}, 
							{text: "D 高于65岁"}
						]
					}, 
					{
						name: "education",
						title: "2、您的学历",
						type: "radio",
						content: [
							{text: "A 高中及以下"}, 
							{text: "B 中专或大专"}, 
							{text: "C 本科"}, 
							{text: "D 硕士及以上"}
						]
					}, 
					{
						name: "job",
						title: "3、您的职业为",
						type: "radio",
						content: [
							{text: "A 无固定职业"}, 
							{text: "B 专业技术人员"}, 
							{text: "C 一般企事业单位员工"}, 
							{text: "D 金融行业一般从业人员"}
						]
					}, 
					{
						name: "income",
						title: "4、您的家庭可支配年收入为(折合人民币)",
						type: "radio",
						content: [
							{text: "A 50万元以下"}, 
							{text: "B 50-100万元"}, 
							{text: "C 100-500万元"}, 
							{text: "D 500-1000万元"}, 
							{text: "E 1000万元以上"}
						]
					}, 
					{
						name: "ivest",
						title: "5、在您每年的家庭可支配收入中，可用于金融投资(蓄存款除外)的比例为",
						type: "radio",
						content: [
							{text: "A 小于10%"}, 
							{text: "B 10%至25%"}, 
							{text: "C 25%至50%"}, 
							{text: "D 大于50%"}
						]
					}, 
					{
						name: "knowledge",
						title: "6、您的投资知识可描述为",
						type: "radio",
						content: [
							{text: "A 有限：基本没有金融产品方面的知识"}, 
							{text: "B 一般：对金融产品及其相关风险具有基本的知识和理解"}, 
							{text: "C 丰富：对金融产品及其相关风险具有丰富的知识和理解"}
						]
					}, 
					{
						name: "experience",
						title: "7、您的投资经验可描述为",
						type: "checkbox",
						content: [
							{text: "A 除银行储蓄外，基本没有其他投资经验"}, 
							{text: "B 购买过债券、保险等理财产品"}, 
							{text: "C 参与过股票、基金等产品的交易"}, 
							{text: "D 参与过权证、期货、期权等产品的交易"}
						]
					}, {
						name: "years",
						title: "8、您有多少年投资基金、股票、信托、私募证券或金融衍生产品等风险投资品的经验",
						type: "radio",
						content: [
							{text: "A 没有经验"}, 
							{text: "B 少于2年"}, 
							{text: "C 2至5年"}, 
							{text: "D 5至10年"}, 
							{text: "E 10年以上"}
						]
					}, 
					{
						name: "limit",
						title: "9、您计划的投资期限是多久",
						type: "radio",
						content: [
							{text: "A 1年以下"}, 
							{text: "B 1至3年"}, 
							{text: "C 3至5年"}, 
							{text: "D 5年以上"}
						]
					}, 
					{
						name: "purpose",
						title: "10、您的投资目的是",
						type: "radio",
						content: [
							{text: "A 资产保值"}, 
							{text: "B 资产稳健增长"}, 
							{text: "C 资产迅速增长"}
						]
					}, 
					{
						name: "attitude",
						title: "11、以下哪项描述最符合您的投资态度",
						type: "checkbox",
						content: [
							{text: "A 厌恶风险，不希望本金损失，希望获得稳定回报"}, 
							{text: "B 保守投资，不希望本金损失，愿意承担一定幅度的收益波动"}, 
							{text: "C 寻求资金的较高收益和成长性，愿意为此承担有限本金损失"}, 
							{text: "D 希望赚取高回报，愿意为此承担较大本金损失"}
						]
					}, 
					{
						name: "dominating",
						title: "12、假设有两种投资：投资A预期获得10%的收益，可能承担的损失非常小；投资B预期获得30%的收益，但可能承担较大亏损。您会怎么支配您的投资",
						type: "radio",
						content: [
							{text: "A 全部投资于收益较小且风险较小的A"}, 
							{text: "B 同时投资于A和B，但大部分资金投资于收益较小且风险较小的A"}, 
							{text: "C 同时投资于A和B，但大部分资金投资于收益较大且风险较大的B"}, 
							{text: "D 全部投资于收益较大且风险较大的B"}
						]
					},
					{
						name: "loss",
						title: "13、您认为自己能承受的最大投资损失是多少",
						type: "radio",
						content: [
							{text: "A 10%以内"},
							{text: "B 10%-30%"}, 
							{text: "C 30%-50%"}, 
							{text: "D 超过50%"}
						]
					},
					{
						name: "remaks",
						title: "14、备注",
						type: "textarea"
					}
				],
				requiredItem: {},
				isDisabled: false
			}
		},
		mounted(){
			Bus.$emit("isShowQuestionTop", true);

			this.getQuestionItem();
		},
		methods: {			
			submit(){
				let required = this.validate();
				if(!required){
					alert("提交失败！ 存在必填项未填");
				}else{
		          console.log(this.requiredItem);
				}
			},
			getQuestionItem(){
				this.question.forEach(item => {
					if(item.type == "checkbox"){
						this.requiredItem[item.name] = [];
					}else{
						this.requiredItem[item.name] = '';
					}
				});
			},
			validate() {
		        for (let i in this.requiredItem) {
		          if (this.requiredItem[i].length === 0) return false;
		        }
		    	return true;
			}
		}		
	}
</script>
<style>
.questionnaire_title{font-size:36px;color:#c8a56f;text-align:center;margin-top:57px;}
.questionnaire_desc{font-size:16px;color:#fff;line-height:30px;}
.desc_way{font-size:18px;color:#c8a56f;margin-top:50px;}
.questionnaire_desc p{margin-bottom:15px;}
.questionnaire_desc .line{display:block;height:1px;background:#c8a56f;opacity:.2;filter:alpha(opacity=20);margin:25px 0 20px;}
.questionnaire_desc img{position:relative;top:3px;margin-right:10px;}
.questionnaire_main{color:#fff;margin-top:45px;}
.questionnaire_main dt{font-size:18px;margin-bottom:30px;line-height:30px;}
.questionnaire_main dd{font-size:16px;margin-bottom:33px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;}
.questionnaire_main dd label{cursor:pointer;}
.question_item{-webkit-appearance:none;display:inline-block;border:1px solid #c8a56f;width:14px;height:14px;border-radius:7px;position:relative;top:1px;margin-right:14px;}
.questionnaire_main input[type=radio]:checked{background:#c8a56f;}
.questionnaire_main input[type=checkbox]{border-radius:2px;}
.questionnaire_main input[type=checkbox]:checked{background:url(../../static/images/certificationChecked.png) no-repeat left top / 14px 14px;border:none;}
.questionnaire_main textarea{width:700px;height:120px;border:1px solid #c8a56f;background:none;resize:none;color:#c8a56f;line-height:22px;padding:7px 10px;font-size:16px;}
.questionnaire_grey{background:#1a1a1a;padding-top:30px;overflow:hidden;}
.questionnaire_black{padding-top:37px;overflow:hidden;}
.questionnaire_btn{padding-bottom:58px;}
.questionnaire_btn input{display:block;width:230px;height:68px;border:none;margin:58px auto 0;font-size:30px;color:#fff;border-radius:2px;background:#c8a56f;cursor:pointer;}
.questionnaire_btn input.disabled{background:#9f9f9f;cursor:not-allowed;}
.answer{background:#1a1a1a;font-size:18px;color:#e0e0e0;padding:112px 60px;margin:95px auto;}
.answer .answer_title{font-size:24px;color:#c8a56f;margin-bottom:50px;}
.answer p{margin-bottom:22px;}
.answer p span{font-size:30px;color:#c8a56f;}
.answer_btn a{display:inline-block;width:230px;height:68px;text-align:center;font-size:30px;line-height:68px;margin-top:70px;}
.answer_btn .continue{background:#c8a56f;color:#fff;margin-right:50px;}
.answer_btn .reset{color:#c8a56f;border:1px solid #c8a56f;}
</style>