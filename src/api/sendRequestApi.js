import util from "../commonJs/util.js";
import apiConfig from "./config.js";
import http from "../commonJs/Http.js";

let sendRequestApi = {
  GetFundList: function (data) {
    let url = util.ServerConfig.request + apiConfig.fundApi.pathGetFund;

    return http.get(url, data).then(res => {
      return res;
    });
  },
  GetPlacementList: function (data) {
    let url = util.ServerConfig.request + apiConfig.fundApi.pathGetPlacement;

    return http.get(url, data).then(res => {
      return res;
    });
  },
  GetEquityList: function (data) {
    let url = util.ServerConfig.request + apiConfig.fundApi.pathGetEquity;

    return http.get(url, data).then(res => {
      return res;
    });
  },
  GetDomesticList: function (data) {
    let url = util.ServerConfig.request + apiConfig.insuranceApi.pathGetDomestic;
    
    return http.get(url, data).then(res => {
      return res;
    });
  },
  GetOverseasList: function (data) {
    let url = util.ServerConfig.request + apiConfig.insuranceApi.pathGetOverseas;

    return http.get(url, data).then(res => {
      return res;
    });
  },
  GetQuestionList: function (data) {
    let url = util.ServerConfig.request + apiConfig.questionApi.pathGetQuestion;

    return http.get(url, data).then(res => {
      return res;
    });
  },
  Register: function (data) {
    let url = util.ServerConfig.request + apiConfig.userApi.pathRegister;

    return http.post(url, data).then(res => {
      return res;
    });
  },
  GetUserInfo: function (data) {
    let url = util.ServerConfig.request + apiConfig.userApi.pathRegister;

    return http.get(url, data).then(res => {
      return res;
    });
  },
  UpdatePwd: function (data){
    let url = util.ServerConfig.request + apiConfig.userApi.pathRegister + "/" + data.id;

    return http.put(url, data.data).then(res => {
      return res;
    });
  },
  Login: function (data) {
    let url = util.ServerConfig.request + apiConfig.userApi.pathRegister;

    return http.get(url, data).then(res => {
      return res;
    });
  },
  Reservation: function (data) {
    let url = util.ServerConfig.request + apiConfig.reservationApi.pathReservation;

    return http.post(url, data).then(res => {
      return res;
    });
  },
  Certification: function (data) {
    let url = util.ServerConfig.request + apiConfig.certificationApi.pathCertification;

    return http.post(url, data).then(res => {
      return res;
    });
  },
  GetCertification: function (data) {
    let url = util.ServerConfig.request + apiConfig.certificationApi.pathCertification;
    
    return http.get(url, data).then(res => {
      return res;
    });
  }
}

export default sendRequestApi;