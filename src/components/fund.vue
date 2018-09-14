<template>
	<div>
		<div style="background: url(../../../static/images/fundBanner.jpg) no-repeat center top / 1920px 420px;height: 420px;"></div>
		<div class="container">
			<div class="fund_nav">
				<ul>
					<li v-for="(item, index) in fundTabList" @click="changeFundTab(item)"><a href="javascript:;" :class="index == tabIndex ? 'active' : ''">{{item.name}}</a></li>
				</ul>
			</div>
			<keep-alive>
				<component :is="currentTabComponent"></component>
			</keep-alive>
		</div>
	</div>
</template>
<script>
import fixedIncome from '@/components/fund/fixedIncome'
import placement from '@/components/fund/placement'
import equity from '@/components/fund/equity'

export default {
	data() {
		return {
			tabIndex: 0,
			currentTabComponent: 'fixedIncome',
			fundTabList: [
				{idx: 0, name: "固收类", component: 'fixedIncome'},
				{idx: 1, name: "阳光私募", component: 'placement'},
				{idx: 2, name: "私募股权", component: 'equity'}
			]
		}
	},
	methods: {
		changeFundTab(item){
			this.tabIndex = item.idx;
			this.currentTabComponent = item.component;
		}
	},
	components: {
		fixedIncome,
		placement,
		equity
	}
}
</script>
<style>
	@import '../../static/css/fund.css';
</style>