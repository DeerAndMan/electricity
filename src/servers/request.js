import Vue from 'vue'
import axios from 'axios';


let IS_VUE_APP_TOKEN;

/**
 * token 失效 跳回到 login 页
 * @param {String} msg 错误信息 
 */
const errorGoLogin = (errData) => {
    Vue.prototype.$message({
        message: errData.status+"："+errData.config.url+"，"+errData.data.message,
        type: 'error'
    });
    // setTimeout(() => {
    //     window.open("/login.html", "_top")
    // }, 2000)
    // console.log( errData );
    //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    // errData && removePending( errData.config );
}

/* 中断请求 数组 声明一个数组用于存储每个ajax请求的取消函数和ajax标识 */
// let cancelTokenShow = false
// const pending = []
// const CANCEL_TOKEN = axios.CancelToken;
// const removePending = (ever) => {
//     cancelTokenShow = true
//     console.log('传递过来的数据', ever);
//     for(let p in pending){
//         if(pending[p].u === ever.url + '&' + ever.method) { //当当前请求在数组中存在时执行函数体
//             pending[p].f(); //执行取消操作
//             pending.splice(p, 1); //把这条记录从数组中移除
//         }
//     }
// } 



// console.log(process.env.VUE_APP_BASE_URL, 1234567);

// const HTTPCode = {
//     400: '请求参数错误',
//     401: '权限不足, 请重新登录',
//     403: '服务器拒绝本次访问',
//     404: '请求资源未找到',
//     500: '内部服务器错误',
//     501: '服务器不支持该请求中使用的方法',
//     502: '网关错误',
//     504: '网关超时'
// }

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 30000,
})
/* 请求拦截器 */
request.interceptors.request.use(
    config => {
        // console.log( Vue.prototype.$store );
        // console.log('拦截', cancelTokenShow, config);
        // removePending(config);
        // removePending(config); //在一个ajax发送前执行一下取消操作
        /* 取消请求 */
        // config.cancelToken = new CANCEL_TOKEN( c => {
        //     // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        //     pending.push({ u: config.url + '&' + config.method, f: c });
        // })
        try {
            IS_VUE_APP_TOKEN = "91bbbc609b751ee239b4775987b34e7991a436052d28dcaa3085bd5da8539a23" // JSON.parse(sessionStorage.getItem('userData'))['token']
            IS_VUE_APP_TOKEN && (config.headers.authorization = IS_VUE_APP_TOKEN)
            /* 还可以判断 url 使用不同的情况 */
            // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
            // if (config.url.includes('pur/contract/export')) {
            //     config.headers['responseType'] = 'blob'
            // }
            // // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
            // if (config.url.includes('pur/contract/upload')) {
            //     config.headers['Content-Type'] = 'multipart/form-data'
            // }
        } catch (error) {
            // setTimeout(() => {
            //     window.open("/login.html", "_top")
            // }, 2000)
        }
        // console.log('拦截列表', pending);
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
/* 响应拦截 */
request.interceptors.response.use(
    response => {
        if(response.status !== 200) return Promise.reject(response.data)
        return Promise.resolve(response.data)
    },
    error => {
        const errData = error.response;
        // console.log('错误信息！！！', error, errData );
        // console.log( error.response.status in HTTPCode, '请求错误是否存在！！！' );
        if (error && errData) {
            // removePending(errData)
            switch (error.response.status) {
                case 401: // 未登录
                    // removePending(errData) // 取消请求
                    errorGoLogin(errData)
                    break;
                case 403: // token过期 
                    // removePending(errData) // 取消请求
                    errorGoLogin(errData)
                    break;
                case 404:
                    errorGoLogin(errData)
                    break;

                default:
                    Vue.prototype.$message({
                        message: errData.status+"："+errData.config.url+"，"+errData.data.message,
                        type: 'error'
                    });
                    break;
            }
        } else {
            Vue.prototype.$message({
                message: 'axios response error underfind',
                type: 'error'
            });
        }
        return Promise.reject(error)
    }
)

export default request