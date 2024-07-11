import http from '@/utils/http'

export const getDatali = (id)=>{
  return http({
    url:'/goods',
    params:{
      id
    }
  })
}

export const getDataliGoods = ({id,type,limit = 3})=>{
  return http({
    url:'/goods/hot',
    params:{
      id,
      type,
      limit
    }
  })  
}