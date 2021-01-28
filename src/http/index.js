import axios from 'axios'

let baseURL = 'https://yan-test.szbellmen.cn/' || process.env.VUE_APP_BASEURL;

export const service = axios.create({
    timeout: 30000, // 请求超时时间
    baseURL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})


// 请求前拦截
service.interceptors.request.use(config => {
    return config
})


// 添加响应拦截器
service.interceptors.response.use(response => {
    // console.log(response)
    return response.data
}, error => {
    console.error('error=>', error)
    return Promise.reject(error)
})

export default service