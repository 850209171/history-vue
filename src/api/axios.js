import axios from 'axios';

//1. 创建新的axios实例，
const service = axios.create({
    // // 公共接口
    // baseURL: 'http://106.54.189.213:60017/',
    baseURL: '/api',
    // 超时时间 单位是ms，这里设置了3s的超时时间
    timeout: 3 * 1000
  })

service.interceptors.request.use(config => {
    config.headers.token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoic2h1IiwiaXNzIjoid3NnIiwiaWF0IjoxNjQ1NDIyNDA1LCJleHAiOjE2NDgwMTQ0MDV9.n-ruSRnHNv2HdeSDygRDiS2tZIazGrSlAegjg6Ldmew';
    return config;
  },error => {
    return 'token failed';
  });

export default service;
