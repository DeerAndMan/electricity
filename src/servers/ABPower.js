import Vue from 'vue'
import axios from 'axios';
import request from './request.js'

// const CancelToken = axios.CancelToken;

const message = (message='', type='success') => {
    Vue.prototype.$message({ message, type });
}

/* 请求测试 */
export const axiosTest = (url='', params={}, cancel={}) => {
    // let cancel;
    return new Promise( (resolve, reject) => {
        // request.get(url, {
        //     params,
        //     // cancelToken: new CancelToken(function executor(c) {
        //     //     cancel = c;
        //     // })
        // })
        if( cancel.cancel ) cancel.cancel()
        request({
            url,
            method: 'GET',
            data: params,
            //中止请求
            cancelToken: new axios.CancelToken(function executor(c) {
                cancel.cancel = c;
            })
        })


        .then( res => {
            resolve(res)
            message('成功 ！！！')
        })
        .catch( rej => {
            reject(rej)
        })
    })
    // 
    // cancel()
}