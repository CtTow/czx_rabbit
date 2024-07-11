import { defineStore } from "pinia";
import { ref } from "vue";
import {getGoods} from '@/apis/home'
export const useBranStore = defineStore('brand',()=>{

  const brandLlst  = ref([])
  const getBrand = async ()=>{
      const res  = await getGoods()
      console.log(res);
      brandLlst.value = res.result
  }

  return{brandLlst,getBrand}

})