<template>
  <div id="app" :class="isShowQuestionTop ? 'backgroundBlack' : ''">
    <top :isFixed="isFixed" :isShowQuestionTop="isShowQuestionTop"></top>
    <router-view/>
    <foot></foot>
    <login></login>
  </div>
</template>

<script>
import top from '@/components/common/header'
import foot from '@/components/common/footer'
import login from '@/components/common/login'
import Bus from '@/commonJs/Bus'

export default {
  data(){
    return {
      isFixed: false,
      isShowQuestionTop: false
    }    
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);

    Bus.$on("isShowQuestionTop", res => {
      this.isShowQuestionTop = res;
    });
  },
  watch:{
    $route() {  //不知道为何现在监听路由的变化只能在父组件里起效，在子组件里居然没有任何效果，之前在子组件里监听是可以监听到的
      this.isShowQuestionTop = false;
    }
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if(scrollTop > 0){
        this.isFixed = true
      }else{
        this.isFixed = false
      }
    }
  },
  components: {
    top,
    foot,
    login
  }
}
</script>