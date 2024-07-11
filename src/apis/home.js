import http from '@/utils/http'
// 获取轮播图图片
export  function getBanner(params={}){
  const {distributionSite = '1'} = params
  return http({
    url: '/home/banner',
    params:{
      distributionSite
    }
  })
}

// 获取人气推荐
export  function Hot(){
  return http({
    url: '/home/hot'
  })
}
// 获取新鲜好物推荐
export  function NewShopping(){
  return http({
    url: '/home/new'
  })
}
//获取商品列表
export const  getGoods = ()=>{
  return http({
    url:'/home/goods'
  })
}