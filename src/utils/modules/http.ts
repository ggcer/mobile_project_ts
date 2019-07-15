/* ------------------------------------------ http请求工具类 ------------------------------------------ */
import axios from 'axios';
import globalConfig from '@/assets/global/globalConfig';
// 请求实例
const instance = axios.create({
  timeout: globalConfig.timeout,
  headers: {
    post: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  return config;
});

// 返回拦截器
instance.interceptors.response.use((response) => {
  return response.data;
});

// http请求类
const http: Utils['http'] = {
};
export default http;
