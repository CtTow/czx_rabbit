import http from '@/utils/http'

export const getCategoryApi = (id)=>{
  return http({
    url:'/category',
    params:{
      id
    }
  })
}

//二级路由接口
export const getCategoryFilterApi = (id)=>{
  return http({
    url:'/category/sub/filter',
    params:{  
      id
    }
  })
}
//二级路由接口
export const getSubCategoryFilterApi = (data)=>{
  return http({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}