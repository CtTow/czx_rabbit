import { defineStore } from "pinia";
import { ref,computed } from "vue";

export const useCartStore = defineStore('cart',()=>{
  const cartList  = ref([])

  const addcart = (goods)=>{
   console.log(goods.count);
   const item =  cartList.value.find((item)=>goods.skuId === item.skuId)
   if(item){
    console.log(item.count);
    item.count++
   }else{
    cartList.value.push(goods)
   }
   console.log(cartList);
  } 

  const deleCart = (skuId)=>{
    const idx = cartList.value.findIndex((item)=>{skuId === item.skuId})
    cartList.value.splice(idx,1)
  }

  const allCount = computed(()=>cartList.value.reduce((sum,index)=>sum+index.count,0))
 
  const allPirce = computed(()=>cartList.value.reduce((sum,index)=>sum+index.pirce*index.count,0))
 

  //单选功能

  const singleCheck= (skuId,selected)=>{
    const item =  cartList.value.find(item=>item.skuId ===skuId)
    item.selected = selected
  }
  //全选功能 
  const isAll = computed(()=>cartList.value.every((item)=>item.selected))

  //全选功能
  const allcheck = ()=>{
    cartList.value.forEach(item => {
      item.selected = !item.selected
    });
  }

  //选中几项
  const selectedCount = computed(()=>cartList.value.filter(item=>item.selected).reduce((sum,index)=>sum+index.count,0))

  return{
    cartList,
    addcart,
    deleCart,
    allCount,
    allPirce,
    singleCheck,
    isAll,
    allcheck,
    selectedCount
  }
},
{
  persist: true,
})