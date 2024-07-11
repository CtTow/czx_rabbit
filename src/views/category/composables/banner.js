import { ref,onMounted } from "vue"
import {getBanner} from '@/apis/home'

export const useBannerList = ()=>{
  const brandLlst  = ref([])
  const Banner = async ()=>{
      const res  = await getBanner({
        distributionSite:'2'
      })
      // console.log(res);
      brandLlst.value = res.result
    }
  
  onMounted(()=>{
    Banner()
  })
  return{
    brandLlst
  }
}