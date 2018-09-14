<template>
  <div>
    <!-- 注册 -->
    <div class="popup regPop" v-show="isRegisterShow">
      <div class="mask"></div>
      <div class="popupCon regloginBox">
        <h5>尊敬的用户欢迎您</h5>
        <h6>短信验证即登录,未注册将进行创建账号</h6>
        <ul>
          <li class="inputsbox">
            <input type="text" class="js_phone" value="" placeholder="请输入您的手机号" maxlength="11" v-model="phone" />
          </li>
          <li class="inputsbox">
            <input type="text" class="js_vercode" placeholder="请输入短信验证码" maxlength="6" v-model="vercode" />
            <count-down @sendCode="sendCode" :time="time" :isCountDown="isCountDown"></count-down>
          </li>
          <li class="inputsbox">
            <input type="password" class="js_pwd" value="" placeholder="请设置6-20位登录密码" v-model="pwd"/>
          </li>
          <li class="inputsbox">
            <input type="password" class="js_repeatpwd" value="" placeholder="请再次确认您的登录密码" v-model="repeatPwd" />
          </li>
          <li class="errortip" v-show="isShowRegError">{{errorTips}}</li>
          <li class="check">
            <input type="checkbox" id="checkbox" checked class="js_check" v-model="checked"> 
            <label for="checkbox">我已阅读并同意互融财富<a href="#">《用户服务协议》</a></label>
          </li>
          <li>
            <button type="button" class="reg_submit" @click="confirm">确定</button>
          </li>
          <li class="otheropts">
            <span class="goLogin fl" @click="toLogin">账号密码登录</span>
          </li>
        </ul>
        <img class="close popup_close" src="../../../static/images/close.png" alt="" @click="regClose" />
      </div>
    </div>
    <!-- 登录 -->
    <div class="popup loginPop" v-show="isLoginShow">
      <div class="mask"></div>
      <div class="popupCon loginBox">
        <h5>尊敬的用户欢迎您</h5>
        <h6>请使用您的账号及密码进行登录</h6>
        <ul>
          <li class="inputsbox">
            <input type="text" class="login_phone" value="" placeholder="请输入您的手机号" maxlength="11" v-model="loginPhone" />
          </li>
          <li class="inputsbox" style="margin-bottom:10px;">
            <input type="password" class="login_pwd" value="" placeholder="请输入您的登录密码" v-model="loginPwd" />
          </li>
          <li class="errortip" v-show="loginErrorTips">{{errorTips}}</li>
          <li>
            <button type="button" class="login_submit" @click="confirmLogin">立即登录</button>
          </li>

          <li class="otheropts">
            <span class="goReg fl">短信验证码登录（注册）</span>
            <span class="forgetPwd fr" @click="editPwd">忘记密码？</span>
          </li>
        </ul>
        <img class="close popup_close" src="../../../static/images/close.png" alt="" @click="loginClose" />
      </div>
    </div>
    <!-- 修改密码 -->
    <div class="popup forgetPwdPop" v-show="isEditPwdShow">
      <div class="mask"></div>
      <div class="popupCon changePwd">
        <h5>尊敬的用户欢迎您</h5>
        <h6>请使用您的账号及密码进行登录</h6>
        <ul>
          <li class="inputsbox">
            <label>手机号</label>
            <input type="text" class="change_phone" value="" placeholder="请输入您的手机号" maxlength="11" v-model="editPwdPhone" />
          </li>
          <li class="inputsbox">
            <label>短信验证码</label>
            <input type="text" class="change_vercode" placeholder="请输入短信验证码" maxlength="6" v-model="editPwdCode" />
            <count-down @sendCode="pwdSendCode" :time="time" :isCountDown="isCountDown"></count-down>
          </li>
          <li class="inputsbox">
            <label>新密码</label>
            <input type="password" class="change_pwd" value="" placeholder="请设置6-20位登录密码" v-model="updatePwd" />
          </li>
          <li class="inputsbox" style="margin-bottom:24px;">
            <label>请确认</label>
            <input type="password" class="change_repeatpwd" value="" placeholder="请再次确认您的登录密码" v-model="editRepeatPwd" />
          </li>
          <li class="errortip" v-show="isShowPwdTips">{{errorTips}}</li>
          <li>
            <button type="button" class="change_submit" @click="confirmUpdatePwd">确定</button>
          </li>
        </ul>
        <img class="close popup_close" src="../../../static/images/close.png" alt="" @click="editPwdClose" />
      </div>
    </div>
    <!-- 修改密码成功 -->
    <div class="popup pwdSuccPop" v-show="isEditPwdSuccShow">
      <div class="mask"></div>
      <div class="popupCon changeSucc">
        <img class="succIcon" src="../../../static/images/succ_icon.png" alt="" />
        <h5>恭喜，登录密码设置成功!</h5>
        <h6 class="h6_gray">下次登录可使用该密码进行登录</h6>
        <ul>
          <li>
            <button type="button" class="succ_submit" @click="toLogin">去登录</button>
          </li>
        </ul>
        <img class="close popup_close" src="../../../static/images/close.png" alt="" @click="editSuccClose" />
      </div>
    </div>
    <!-- 预约 -->
    <div class="popup orderPop" v-show="isReservationShow">
      <div class="mask"></div>
      <div class="orderCon">
        <p class="orderCon_tit">预约信息表</p>
        <div class="orderCon_form">
          <p class="orderCon_form_tips">亲爱的用户请，请务必完整的填写下列信息，以便我们安排专业人员为您服务，否则将不能完成预约！</p>
          <ul>
            <li><input type="text" class="order_name" value="" placeholder="姓名" v-model="reservationName" /></li>
            <li><input type="text" class="order_phone" value="" placeholder="手机号" maxlength="11" v-model="reservationPhone" /></li>
            <li class="errortip" v-show="isShowYuYueError">{{yuYueTips}}</li>
            <li><button type="button" class="order_submit" @click="confirmSubmit">确认提交</button></li>
          </ul>
          <p class="orderCon_form_tel">详情可咨询客服热线：400-660-5818</p>
        </div>
        <img class="close order_close" src="../../../static/images/close_big.png" alt="" @click="reservationClose" />
      </div>
    </div>
    <div class="pendant">
      <ul>
        <li :class="isLoginEvent ? 'login cur' : ''" @click="register" v-if="isShowloginTips">登录注册</li>
        <li :class="!isReservationEvent ? 'reservation' : 'reservation cur'" @click="reservation">预约咨询</li>
        <li :class="isEditPwdCur ? 'cur' : ''" v-if="isShowEditPwd" @click="editPwd" style="margin-bottom:20px;">修改密码</li>
        <li :class="" v-if="isShowLogout" @click="logout">注销登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bus from '@/commonJs/Bus'
import util from '@/commonJs/util'
import countDown from '@/components/common/countDown'
import validate from '@/commonJs/validate'
import userApi from '@/api/sendRequestApi'

export default {
  data () {
    return {
      isLoginShow: false,
      isEditPwdShow: false,
      isRegisterShow: false,
      isEditPwdSuccShow: false,
      isReservationShow: false,
      isLoginEvent: true,
      isReservationEvent: false,
      isShowRegError: false,
      isShowYuYueError: false,
      isShowloginTips: true,
      isShowEditPwd: false,
      isShowLogout: false,
      isEditPwdCur: false,
      isShowPwdTips: false,
      loginErrorTips: false,
      time: 60,
      isCountDown: false,
      phone: "",
      vercode: "",
      pwd: "",
      repeatPwd: "",
      checked: true,
      errorTips: "",
      editPwdPhone: "",
      editPwdCode: "",
      updatePwd: "",
      editRepeatPwd: "",
      reservationName: "",
      reservationPhone: "",
      loginPhone: "",
      loginPwd: "",
      yuYueTips: ""
    }
  },
  mounted(){
    Bus.$on("reservationShow", res => {
      this.isReservationShow = res;
    });

    if(util.dataStorage.Get("token")){
      this.isShowloginTips = false;
      this.isShowEditPwd = true;
      this.isShowLogout = true;
      this.isReservationEvent = true;
    }
  },
  methods: {
    confirm(){
      if(this.phone.length < 1){
        this.showErrorDialog("请输入11位手机号");
      }else if(validate.isMObile(this.phone)){
        this.showErrorDialog("手机号格式错误");
      }else if(this.vercode.length < 1){
        this.showErrorDialog("验证码不能为空");
      }else if(validate.lengthCheck(this.vercode, 6)){
        this.showErrorDialog("请输入6位验证码");
      }else if(this.pwd.length < 1){
        this.showErrorDialog("密码不能为空");
      }else if(validate.checkPwd(this.pwd)){
        this.showErrorDialog("密码格式错误");
      }else if(this.repeatPwd.length < 1){
        this.showErrorDialog("确认密码不能为空");
      }else if(validate.isEqual(this.pwd, this.repeatPwd)){
        this.showErrorDialog("两次密码输入不一致");
      }else if(!this.checked){
        this.showErrorDialog("请阅读并同意用户服务协议");
      }else{
        this.hideErrorDialog();
        this.isRegisterShow = false;
        this.isCountDown = false;

        let params = {
          phone: this.phone,
          pwd: this.pwd,
          agree: this.checked
        };

        userApi.Register(params).then(res => {
          util.dataStorage.Save("token", "login");
          this.isShowloginTips = false;
          this.isShowEditPwd = true;
          this.isShowLogout = true;
          this.isReservationEvent = true;
        });
      }
    },
    sendCode(callBack){
      if(this.phone.length < 1){
        this.showErrorDialog("请输入11位手机号");
      }else if(validate.isMObile(this.phone)){
        this.showErrorDialog("手机号格式错误");
      }else{
        this.hideErrorDialog();
        this.sendCodeRequest(callBack);
      }
    },
    pwdSendCode(callBack){
      if(this.editPwdPhone.length < 1){
        this.isShowPwdTips = true;
        this.errorTips = "请输入11位手机号";
      }else if(validate.isMObile(this.editPwdPhone)){
        this.isShowPwdTips = true;
        this.errorTips = "手机号格式错误";
      }else{
        this.isShowPwdTips = false;
        this.errorTips = "";        
        this.sendCodeRequest(callBack);
      }
    },
    sendCodeRequest(callBack){
      callBack();
      //向后台发送请求

    },
    showErrorDialog(msg){
      this.isShowRegError = true;
      this.errorTips = msg;
    },
    hideErrorDialog(){
      this.isShowRegError = false;
      this.errorTips = "";      
    },
    register(){
      this.isRegisterShow = true;
      this.isLoginEvent = true;
      this.isReservationEvent = false;
      this.isCountDown = false;   //将isCountDown设置为false，当弹出登录注册弹窗后，就可以再次点击发送验证码按钮了
    },
    reservation(){
      this.isReservationShow = true;
      this.isReservationEvent = true;
      this.isLoginEvent = false;
      this.isEditPwdCur = false;
    },
    confirmSubmit(){
      if(this.reservationName.length < 1){
        this.isShowYuYueError = true;
        this.yuYueTips = "请输入姓名";
      }else if(this.reservationPhone.length < 1){
        this.isShowYuYueError = true;
        this.yuYueTips = "请输入11位手机号";
      }else if(validate.isMObile(this.reservationPhone)){
        this.isShowYuYueError = true;
        this.yuYueTips = "手机号格式错误";
      }else{
        this.isReservationShow = false;
        this.isShowYuYueError = false;
        this.yuYueTips = "";

        let params = {
          name: this.reservationName,
          phone: this.reservationPhone
        };

        userApi.Reservation(params).then(res => {
          this.isReservationShow = false;
          alert("提交成功！");
        });
      }
    },
    confirmLogin(){
      let params = {
        search: this.loginPhone
      };

      userApi.Login(params).then(res => {
        if(res.length > 0){
          util.dataStorage.Save("token", "login");
          this.isLoginShow = false;
          this.isShowLogout = true;
          this.isReservationEvent = true;
          this.isShowloginTips = false;
          this.isShowEditPwd = true;
        }else{
          this.loginErrorTips = true;
          this.errorTips = "账号不存在！";
        }        
      });
    },
    regClose(){
      this.isRegisterShow = false;
      this.isCountDown = true;    //将isCountDown设置为true，当中途关闭登录注册弹窗后，就可以将读秒的倒计时效果设置为发送验证码的效果了
      this.isShowRegError = false;
    },
    loginClose(){
      this.isLoginShow = false;
    },
    editPwdClose(){
      this.isEditPwdShow = false;
      this.isCountDown = true;
    },
    editSuccClose(){
      this.isEditPwdSuccShow = false;
    },
    reservationClose(){
      this.isReservationShow = false;
      this.isShowYuYueError = false;
    },
    editPwd(){
      this.isEditPwdShow = true;  
      this.isEditPwdCur = true;
      this.isReservationEvent = false;
      this.isCountDown = false;
      this.isLoginShow = false;
    },
    confirmUpdatePwd(){
      if(this.editPwdPhone.length < 1){
        this.isShowPwdTips = true;
        this.errorTips = "请输入11位手机号";
      }else if(validate.isMObile(this.editPwdPhone)){
        this.isShowPwdTips = true;
        this.errorTips = "手机号格式错误";
      }else if(this.editPwdCode.length < 1){
        this.isShowPwdTips = true;
        this.errorTips = "验证码不能为空";
      }else if(validate.lengthCheck(this.editPwdCode, 6)){
        this.isShowPwdTips = true;
        this.errorTips = "请输入6位验证码";
      }else if(this.updatePwd.length < 1){
        this.isShowPwdTips = true;
        this.errorTips = "新密码不能为空";
      }else if(validate.checkPwd(this.updatePwd)){
        this.isShowPwdTips = true;
        this.errorTips = "新密码格式错误";
      }else if(this.editRepeatPwd.length < 1){
        this.isShowPwdTips = true;
        this.errorTips = "确认密码不能为空";
      }else if(validate.isEqual(this.updatePwd, this.editRepeatPwd)){
        this.isShowPwdTips = true;
        this.errorTips = "两次密码输入不一致";
      }else{        
        this.isShowPwdTips = false;
        this.errorTips = "";

        let params = {
          id: 1,
          data: {
            pwd: this.updatePwd
          }
        };

        userApi.UpdatePwd(params).then(res => {
          this.isEditPwdShow = false;
          this.isEditPwdSuccShow = true;
        });
      }      
    },
    logout(){
      util.dataStorage.Remove("token");
      this.isShowloginTips = true;
      this.isLoginEvent = true;
      this.isShowEditPwd = false;
      this.isShowLogout = false;
      this.isReservationEvent = false;
    },
    toLogin(){
       this.isEditPwdSuccShow = false;
       this.isRegisterShow = false;
       this.isLoginShow = true;
    }
  },
  components: {
    countDown
  }
}
</script>
<style scoped>
.pendant{width: 106px;padding: 23px 0;background: #c8a56f;position: fixed;top: 129px;right: 0;font-size: 18px;color: #1a1a1a;}
.pendant li{height: 31px;border-left: 4px solid #c8a56f;line-height: 31px;text-align: center;cursor: pointer;}
.pendant li:first-child{margin-bottom: 20px;}
.pendant li.cur{height: 31px;border-left: 4px solid #1a1a1a;color: #1a1a1a;}
.popup_close{width: 18px;height: 18px;position: absolute;top: 22px;right: 22px;cursor: pointer;}
.popupCon h5, .popupCon h6{text-align: center;font-size: 22px;color: #c8a56f;}
.popupCon h6{font-size: 14px;font-weight: normal;margin-top: 14px;}
.popupCon h6.h6_gray{color: #666;}
.popupCon ul{width: 400px;margin: 40px auto 0;font-size: 14px;}
.popupCon li.inputsbox{border: 1px solid #c8a56f;border-radius: 2px;margin-top: 18px;overflow: hidden;}
.regloginBox input,.loginBox input{width: 100%;height: 48px;background:none;border:none;font-size: 16px;color:#fff;padding-left:16px;}
.popupCon li input::-webkit-input-placeholder{color:#767574;font-size: 14px;}
.regloginBox li input.js_vercode{width:70%;float:left;}
.regloginBox li input.js_send{float:right;width:26%;color:#c09e6b;font-size: 14px;cursor: pointer;}
.regloginBox li input.js_send.reset_send{color: #666;}
.popupCon button{background: none;border: none;width: 400px;height: 48px;background: #c8a56f;color: #fff;border-radius: 2px;font-size: 18px;margin-top: 20px;cursor: pointer;}
.popupCon li.errortip,.orderCon li.errortip{height: 16px;background: url(../../../static/images/errorTip.png) no-repeat left top / 16px 16px;padding-left: 22px;color: #bb3939;margin: 24px 0 -8px;border: none;}
.regloginBox li.check {color: #999;margin-top: 20px;position: relative;height: 20px;}
.check input[type='checkbox']{position: absolute; left: 0; top: 0;width: 20px;height: 20px;opacity: 0;z-index: 99;cursor: pointer;}
.check label{position: absolute; left: 22px; top: 4px;cursor:pointer;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;}
.check label a{color: #c8a56f;}
.check label:before {content: '';position: absolute;left: -22px; top: 0px;width: 14px; height: 14px;border-radius: 50%; background: #e0e0e0;}
.check label:after {content: ''; position: absolute; left: -20px; top: 2px; width: 10px; height: 10px;border-radius: 50%;background: #e0e0e0;}
.check input[type='checkbox']:checked + label:before { background: #e0e0e0;} 
.check input[type='checkbox']:checked + label:after {background: #c8a56f;}
.otheropts{margin-top: 16px;color: #999;overflow: hidden;}
.otheropts span{cursor: pointer;}
.otheropts .fr{color: #c8a56f;}
.changePwd li.inputsbox{padding: 0;}
.changePwd li label{width: 98px;height: 48px;display: block;float: left;background: rgba(49,49,49,.54);color: #bfbfbf;text-align: center;line-height: 48px;border-radius: 2px 0 0 2px;}
.changePwd li input{width: 298px;height: 48px;padding: 9px 20px;background:none;border:none;font-size: 16px;color:#fff;}
.changePwd li input.change_vercode{width:180px;float:left;}
.changePwd li input.change_send{float:right;width:98px;color:#c09e6b;font-size: 14px;padding: 0;line-height: 46px;cursor: pointer;}
.changePwd li input.change_send.reset_send{color: #666;}
.succIcon{width: 52px;height: 52px;display: block;margin: 20px auto 30px;}
.orderCon{width: 602px;background: #1a1918;padding: 20px 0 50px;z-index: 99999;position: fixed;left: 50%;top: 50%;margin: -250px 0 0 -301px;}
.orderCon_tit{font-size: 24px;color: #c8a56f;text-align: center;font-weight: bold;background: url(../../../static/images/line.png) no-repeat left bottom / 100% 1px;height: 44px;}
.orderCon_form{width: 528px;margin: 10px auto 0;}
.orderCon_form_tips{font-size: 16px;color: #c8a56f;line-height: 30px;}
.orderCon_form ul{width: 323px;margin: 36px auto 21px;}
.orderCon_form li{height: 44px;border: 1px solid #c8a56f;margin-top: 26px;overflow: hidden;}
.orderCon_form input{width: 100%;height: 44px;padding: 10px 0 10px 11px;line-height: 24px;background:none;border:none;font-size: 16px;color:#fff;}
.orderCon_form li input::-webkit-input-placeholder{color:#666;font-size: 14px;}
.orderCon_form button{background: none;border: none;width: 321px;height: 42px;background: #c8a56f;color: #fff;font-size: 16px;cursor: pointer;}
.orderCon_form_tel{font-size: 16px;color: #a5895e;text-align: center;}
.order_close{width: 24px;height: 25px;position: absolute;top: 19px;right: 20px;cursor: pointer;}
</style>