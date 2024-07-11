import axios from 'axios'
import {useruseStore} from '@/stores/user'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
const http =  axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(config => {
  const user = useruseStore()
  
  const token = user.userList.token
  if(token){
      config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  const user = useruseStore()
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  // console.log(e.response.status);
  if (e.response.status === 401) {
    
    user.clearUserList()
    ElMessage({
      type:'warning',
      message:'登录过期请重新登录'
    })
  }
  return Promise.reject(e)
})

export default http