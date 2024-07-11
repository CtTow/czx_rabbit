import { ref} from 'vue'
import { defineStore } from 'pinia'
import {getBanner} from '@/apis/home'

export const useBannerStore = defineStore('banner', () => {
  const bannerimg = ref([])

  const getBnnerimg = async()=>{
    const res = await getBanner()
    // console.log(res);
    bannerimg.value = res.result
  }

  return { bannerimg, getBnnerimg }
})