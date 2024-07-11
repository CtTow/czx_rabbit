import  {NewShopping} from '@/apis/home'
import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useNewShoppingStore = defineStore('newshopping',()=>{
  const Newlist = ref([])

  const getNewlist  = async()=>{
    const res  = await NewShopping()
    console.log(res);
    Newlist.value = res.result
  }
  return {Newlist,getNewlist}
}) 