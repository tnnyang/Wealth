<template>
	<div>
		<div style="background: url(../../static/images/trustBanner.jpg) no-repeat center top / 1920px 420px;height: 420px;"></div>
		<div class="trust">
			<div class="container">
				<ul>
					<li>
						<img src="../../static/images/trustFlexible.png" alt="" />
						<p class="trust_tit">投资灵活</p>
						<p>横跨货币、资本、实业三个领域</p>
					</li>
					<li>
						<img src="../../static/images/trustSafe.png" alt="" />
						<p class="trust_tit">资金安全</p>
						<p>开设银行专户、专款专用</p>
					</li>
					<li>
						<img src="../../static/images/trustRisk.png" alt="" />
						<p class="trust_tit">风险可控</p>
						<p>融资方资产抵押、多重安全保障</p>
					</li>
					<li>
						<img src="../../static/images/trustLimit.png" alt="" />
						<p class="trust_tit">期限明确</p>
						<p>一般1-3年、令投资计划性更强</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="container">
			<div class="fund_nav trust_nav">
				<ul>
					<li><a href="" class="active">产品列表</a></li>
				</ul>
			</div>
			<placement></placement>
		</div>
	</div>
</template>
<script>
import placement from '@/components/fund/placement'

export default {
	components: {
		placement
	}
}
</script>
<style>
	@import '../../static/css/fund.css';
</style>