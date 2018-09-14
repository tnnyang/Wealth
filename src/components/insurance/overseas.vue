<template>
	<div class="fund_content">
		<div class="loading" v-show="isShowLoading">加载中...</div>
		<div class="insurance_item" v-for="(item, index) in overseasList" :key="index" v-show="!isShowLoading">
			<div class="insurance_img fl"><img :src="item.imgPath" alt="" /></div>
			<div class="insurance_desc fl">
				<dl>
					<dt><p class="insurance_tit">{{item.name}}</p><p class="insurance_titdesc">{{item.desc1}}</p></dt>
					<dd>{{item.desc2}}</dd>
					<dd>{{item.desc3}}</dd>
					<dd>{{item.desc4}}</dd>
				</dl>
			</div>
			<div class="insurance_price fr">
				<div class="price_num">¥<span>{{item.price}}</span>起</div>
				<p><a href="javascript:;" class="insurance_yuyue" @click="immediately">立即预约</a></p>
			</div>
		</div>
		<pagination :total="total" :current-page='pageIndex' :page-size="pageSize" @pageChange="getOverseas" v-if="pageShow"></pagination>
	</div>
</template>
<script>
import insuranceApi from '@/api/sendRequestApi'
import pagination from '@/components/common/pagination'
import Bus from '@/commonJs/Bus'

export default {
	data() {
		return {
			overseasList: [],
			pageSize: 10,
			pageIndex: 1,
			total: 0,
			pageShow: false,
			isShowLoading: false
		}
	},
	mounted(){
		this.$nextTick(() => {
			this.getOverseas();
		});
	},
	methods: {
		getOverseas(currentPage){
			this.isShowLoading = true;
			let startPage = currentPage ? currentPage + (currentPage - this.pageSize) : 0;
			let endPage = currentPage ? currentPage * this.pageSize : this.pageSize;
			
			insuranceApi.GetOverseasList().then(res => {
				this.overseasList = res.slice(startPage, endPage);
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
<style>
	@import '../../../static/css/fund.css';
</style>