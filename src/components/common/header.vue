<template>
  <div>
    <div :class="!isFixed ? 'nav' : 'nav nav_fixed'" v-if="!isShowQuestionTop">
      <div class="container navigation">
        <router-link to="/" class="logo fl"><img src="../../../static/images/nav_logo.png" alt="" /></router-link>
        <div class="header_nav fr">
          <ul>
            <li v-for="(item, index) in navList" :key="index"><router-link :to="item.url">{{item.text}}</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="questionnaire_nav" v-if="isShowQuestionTop">
      <div class="container">
        <router-link to="/"><img src="../../../static/images/questionnaireLogo.png" alt="" /></router-link>调查问卷
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    isFixed: {
      type: Boolean,
      default: false
    },
    isShowQuestionTop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      navList: [
        {text: "网站首页", url: "/index"},
        {text: "私筹基金", url: "/fund"},
        {text: "信托", url: "/trust"},
        {text: "保险", url: "/insurance"},
        {text: "调查问卷", url: "/question"},
        // {text: "关于我们", url: "/aboutUs"},
        {text: "个人中心", url: "/account"}
      ]
    }
  }
}
</script>
<style scoped>
.nav{height:70px;background:#1a1a1a;}
.header_nav li{float:left;width:100px;font-size:16px;position:relative;}
.header_nav li a{width:100px;height:70px;line-height:70px;text-align:center;display:block;}
.logo{margin-top:13px;}
.nav_fixed{position:fixed;top:0;right:0;left:0;z-index:1030;-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}
.header_nav .router-link-active,
.header_nav .router-link-active:hover,
.header_nav .router-link-active:focus{color:#fff;background:#c8a56f;}

.questionnaire_nav{font-size:30px;color:#c8a56f;height:110px;line-height:110px;border-bottom:4px solid #c8a56f;}
.questionnaire_nav img{position:relative;top:13px;margin-right:45px;}
</style>