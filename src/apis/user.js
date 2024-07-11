import http from '@/utils/http'

export function getloginApi({account,password}){
  return http({
    url:'/login',
    method:'POST',
    data:{
      account,
      password
    }
  })
}