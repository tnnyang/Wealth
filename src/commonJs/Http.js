import axios from 'axios';
import router from '../router';
import NProgress from 'nprogress'  //路由切换或数据加载进度条
NProgress.configure({showSpinner: false})   //禁用进度环
import util from './util';

//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     const token = util.dataStorage.Get("token")
//     if(!token && to.path !== '/login'){
//         next('/login');
//     }else {
//         next();
//     }
//     NProgress.start();    //路由切换时出现进度条
// })

// router.afterEach(transition => {
//   NProgress.done();
// });

// 添加请求拦截器
// axios.interceptors.request.use((config) =>{
//     config.headers['token'] = util.dataStorage.Get("token");
//     return config;
// },function(error) {
//     return Promise.reject(error);
// });

/**
 * 返回值说明：
 *
 *  code : 0[成功]，其他失败
 *  msg ：请求成功/请求失败
 *  json : response中的data属性
 */

export default {
    /**
    * 封装get方法
    * @param url
    * @param data
    * @returns {Promise}
    */
    get: function(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            }).then(response => {
                // NProgress.done();
                resolve(response.data);
            }).catch(err =>{
                reject(err);
            });
        });
    },

    /**
    * 封装post请求
    * @param url
    * @param data
    * @returns {Promise}
    */

    post: function(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err);
            });
        });
    },

    /**
     * 封装put请求
     * @param url
     * @param data
     * @returns {Promise}
     */

    put: function(url, data = {}) {
        return new Promise((resolve, reject) =>{
            axios.put(url, data).then(response =>{
                resolve(response.data);
            }, err =>{
                reject(err);
            })
        })
    },

    /**
    * 封装Delete请求
    * @param url
    * @param data
    * @returns {Promise}
    */

    delete: function(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.delete(url, data).then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            });
        });
    }
};