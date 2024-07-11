import  {Hot} from '@/apis/home'
import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useHotStore = defineStore('Hot',()=>{
  const HotList = ref([])

  const getHot  = async()=>{
    const res  = await Hot()
    console.log(res);
    HotList.value = res.result
  }
  return {HotList,getHot}
}) 