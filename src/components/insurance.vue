<template>
	<div>
		<div style="background: url(../../static/images/insuranceBanner.jpg) no-repeat center top / 1920px 420px;height: 420px;"></div>
		<div class="container">
			<div class="fund_nav">
				<ul>
					<li v-for="(item, index) in insuranceTabList" @click="changeInsuranceTab(item)"><a href="javascript:;" :class="index == tabIndex ? 'active' : ''">{{item.name}}</a></li>
				</ul>
			</div>
			<keep-alive>
				<component :is="currentTabComponent"></component>
			</keep-alive>		
		</div>
	</div>
</template>
<script>
import domestic from '@/components/insurance/domestic'
import overseas from '@/components/insurance/overseas'

export default {
	data() {
		return {
			tabIndex: 0,
			currentTabComponent: 'domestic',
			insuranceTabList: [
				{idx: 0, name: "国内", component: 'domestic'},
				{idx: 1, name: "国外", component: 'overseas'}
			]
		}
	},
	methods: {
		changeInsuranceTab(item){
			this.tabIndex = item.idx;
			this.currentTabComponent = item.component;
		}
	},
	components: {
		domestic,
		overseas
	}
}
</script>
<style>
	@import '../../static/css/fund.css';
</style>