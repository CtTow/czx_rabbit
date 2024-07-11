import { defineStore } from "pinia";
import { ref } from "vue";
import {getloginApi} from '@/apis/user'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';


export const useruseStore = defineStore('user',()=>{
  const userList = ref({})

  const  router = useRouter()

  const getUser = async (account,password)=>{
    const res =  await getloginApi({account,password})
     console.log(res);
     userList.value =  res.result
     ElMessage({type:'success',message:'登录成功'})
     router.replace({path:'/'})
  }

  const clearUserList = ()=>{
    userList.value = {}
    router.push('/login')
  }
  return({userList,getUser,clearUserList})
},
{
  persist: true,
})