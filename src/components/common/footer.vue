<template>
  <div class="footer">
    <div class="footTop">
      <div class="container">
        <div class="footer_nav">
          <div class="footerleft fl">
            <img src="../../../static/images/foot_logo.png" alt="" />
            <h3>400-660-5818</h3>
            <p class="footerwork">周一到周五 9:30-18:00</p>
          </div>
          <div class="footnav_link fl">
            <p>快速了解</p>
            <ul>
              <li v-for="(item, index) in footerList" :key="index"><router-link :to="item.url">{{item.text}}</router-link></li>
            </ul>
          </div>
          <div class="footerright fl">
            <h3>扫右侧二维码+关注我们</h3>
            <p class="footeemail">邮箱：hurongclub@163.com</p>
            <div class="footaddress">地址：上海市黄浦区瞿溪路1236号2号楼5楼</div>
          </div>
          <img class="footcode fr" src="../../../static/images/qr_code.png" alt="" />
        </div>
      </div>
    </div>
    <p class="footBot">© 2017互融CLUB All rights reserved上海益民互融金融信息服务有限公司  沪ICP备15006388号｜理财有风险，投资需谨慎</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerList: [
        {text: "私筹基金", url: "/fund"},
        {text: "信托", url: "/trust"},
        {text: "保险", url: "/insurance"},
        {text: "鸿儒会", url: "/meeting"},
        {text: "关于我们", url: "/aboutUs"},
        {text: "个人中心", url: "/account"}
      ]
    }
  }
}
</script>
<style scoped>
.footer{height: 280px;background:#1a1a1a;border-top: 10px solid #ac8c63;color: #bbb;}
.footTop{height: 210px;overflow:hidden;}
.footer_nav{overflow:hidden;padding-top:30px;}
.footerleft h3{font-size:30px;color:#fff;font-weight:normal;font-family:Arial;margin: 22px 0 10px;}
.footerwork{font-size: 16px;color: #666;text-align: center;}
.footnav_link{width: 360px;overflow:hidden;margin:0 32px 0 145px;font-size: 20px;}
.footnav_link p{margin-bottom: 10px;}
.footnav_link li{float:left;width: 98px;height: 34px;font-size: 14px;margin: 20px 20px 0 0;}
.footnav_link li a{width: 98px;height: 34px;display: block;text-align: center;line-height: 34px;border:1px solid #999;}
.footnav_link li a:hover{background:#999;color:#333;}
.footerright{text-align: right;font-size: 14px;line-height: 32px;margin-top: 32px;border-left: 1px solid #353535;width: 310px;height: 158px;}
.footcode{float: right;margin-left: 20px;width: 140px;height: 140px;}
.footBot{height: 60px;background: #131313;font-size: 12px;color: #666;line-height: 60px;text-align: center;}
</style>