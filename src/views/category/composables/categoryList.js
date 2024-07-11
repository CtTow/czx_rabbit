import {ref,onMounted} from 'vue'
  import {getCategoryApi} from  '@/apis/category'
  import {useRoute} from 'vue-router'
  import {onBeforeRouteUpdate} from 'vue-router'

export const usecategoryList = ()=>{

  const categoryData= ref({})
  const route = useRoute()

  const getCategoryData = async (id = route.params.id)=>{
    const res =  await getCategoryApi(id)
    console.log(res.result);
    categoryData.value = res.result
  }
  
  onMounted(()=>{
    getCategoryData()
  })

  onBeforeRouteUpdate((to)=>{
    getCategoryData(to.params.id)
    console.log(to.params.id);
  })

  return{
    categoryData
  }
}