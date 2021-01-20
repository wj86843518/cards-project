import http from './index'


export const getData = data => http({ url: 't/1', method: 'post', data })

export const t = 't'