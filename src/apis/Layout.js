import http from '@/utils/http'

export  function getLayout(){
  return http({
    url: '/home/category/head'
  })
}