<template>
	<div class="fund_content">
		<div class="loading" v-show="isShowLoading">加载中...</div>
		<div class="fund_item" v-for="(item, index) in placementList" :key="index" v-show="!isShowLoading">
			<div class="fund_name fl">
				<div class="fund_name">{{item.name}}</div>
				<div class="fund_desc">AA评级，纳入征信</div>
			</div>
			<div class="fl">
				<div class="fund_price"><span>{{item.funds}}</span>万元</div>
				<div class="fund_desc">起投资金</div>
			</div>
			<div class="fl">
				<div class="fund_limit"><span>{{item.limit}}</span>个月</div>
				<div class="fund_desc">产品期限</div>
			</div>
			<div class="fl">
				<div class="fund_manager">{{item.manager}}</div>
				<div class="fund_desc">资金管理人</div>
			</div>
			<div class="fund_reservation fr">
				<div class="fl">
					<div class="reservation_interest"><span>{{item.rate}}</span>/年</div>
					<p class="reservation_desc">业绩比较基准</p>
					<p class="reservation_desc">筹集状态：{{item.status}}</p>
				</div>
				<div class="reservation_text fr" @click="immediately">预约</div>
			</div>
		</div>
		<div :class="!this.pageShow ? 'fund_consultant bottom50' : 'fund_consultant'" v-show="!isShowLoading">
			资深投资顾问，多年深入研究，只为挑选最合适您的产品<a href="javascript:;" class="immediately" @click="immediately">立即预约咨询</a>
		</div>
		<pagination :total="total" :current-page='pageIndex' :page-size="pageSize" @pageChange="getPlacement" v-if="pageShow"></pagination>
	</div>
</template>
<script>
import pagination from '@/components/common/pagination'
import fundApi from '@/api/sendRequestApi'
import Bus from '@/commonJs/Bus'

export default {
	props: {
		isShowPlacement: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			placementList: [],
			pageSize: 10,
			pageIndex: 1,
			total: 0,
			pageShow: false,
			isShowLoading: false
		}
	},
	mounted(){
		this.$nextTick(() => {
			this.getPlacement();
		});
	},
	methods: {
		getPlacement(currentPage){
			this.isShowLoading = true;
			fundApi.GetPlacementList().then(res => {
				this.placementList = res;
				this.total = res.length;			
				this.isShowLoading = false;

				if(res.length <= this.pageSize){
					this.pageShow = false;
				}else{
					this.pageShow = true;
				}
			});
		},
		immediately(){
			Bus.$emit("reservationShow", true);
		}
	},
	components: {
		pagination
	}
}
</script>