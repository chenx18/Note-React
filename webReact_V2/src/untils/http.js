import axios from 'axios';
// react跨域代理的方法: https://blog.csdn.net/xdhc304/article/details/99681146
//添加请求拦截器
axios.interceptors.request.use(config => {
  // 这里的 config 包含每次请求的内容
  // 判断 localStorage 中是否存在 token
  if (localStorage.getItem('token')) {
    //  存在将 token写入 request header
    config.headers.Authorization = `Basic ${localStorage.getItem('token')}`;
  }
  if (localStorage.getItem('guId')) {
    config.headers.LoginMac = (localStorage.getItem('guId')).replace(/\"/g, "");
  }
  return config;
}, err => {
  return Promise.reject(err);
});

//添加响应拦截器
axios.interceptors.response.use(response => {
  // loading && loading.close();
  checkStatus(response);
  return response
}, err => {
  checkStatus(err.response);
  // loading && loading.close();
  return err.response;
});

function checkStatus(response ={}) {
  switch (response.status) {
    case 400:   // "请求无效"
      console.log('请求无效')
      break;
    case 401:   // "未登录或登录已失效,请重新登录"
      console.log('未登录或登录已失效,请重新登录');
      localStorage.removeItem('user');
      break;
    case 404:   // "请求无效"
      console.log('请求无效')
      break;
    case 500:   // "服务器错误"
      console.log('服务器错误')
      break;
  }
}

//  post
export default {
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      headers: {
        'FunId': '1',
        'Language': 'zh-CN'
      }
    })
  },
  
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data: data,
      headers: {
        'FunId': '1',
        'Language': 'zh-CN'
      }
    })
  },
}
