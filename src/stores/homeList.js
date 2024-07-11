import { ref} from 'vue'
import { defineStore } from 'pinia'
import {getLayout} from '@/apis/Layout'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])

  const getcategory = async()=>{
    const res = await getLayout()
    // console.log(res);
    categoryList.value = res.result
  }

  return { categoryList, getcategory }
})
