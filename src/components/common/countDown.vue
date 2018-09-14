<template>
  <div>
    <input type="button" :value="value" class="js_send" @click="sendVercode" ref="count" />
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      default: 60
    },
    isCountDown: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: "获取验证码",
      countTime: this.time   //由于不能直接修改props里边的数据，所以只能在这里将props中的time赋值给一个变量
    }
  },
  methods: {
    sendVercode(){
      this.$emit("sendCode", this.countDown);
    },
    countDown(){
      let el = this.$refs.count;
      if (!this.isCountDown) {
        this.value = this.countTime + 's';
        el.style.color = '#666';
        el.disabled = 'disabled';
        this.countTime--;

        if (this.countTime >= 0) {
            setTimeout(this.countDown, 1000);
        } else {
          this.value = '获取验证码';
          el.disabled = '';
          el.style.color = '#c09e6b';            
          this.countTime = this.time;
        }
      } else {
        this.value = '获取验证码';
        el.disabled = '';
        el.style.color = '#c09e6b';        
        this.countTime = this.time;
      }
    }
  }
}
</script>
<style scoped>
.js_send{float:right;width:26%;color:#c09e6b;font-size: 14px;cursor: pointer;height: 48px;background:none;border:none;font-size: 16px;}
.js_send.reset_send{color: #666;}
</style>