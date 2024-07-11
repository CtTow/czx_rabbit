<script setup>
import {ref,onMounted} from 'vue'
import goodsItem from '@/views/home/components/goodsItem.vue'
import {useRoute} from 'vue-router'
import {getCategoryFilterApi,getSubCategoryFilterApi} from '@/apis/category.js'

const route = useRoute()

//基本数据
const categoryfilterList = ref([])
const getcategoryFilter = async()=>{
  const res =  await getCategoryFilterApi(route.params.id)
  categoryfilterList.value = res.result
}
onMounted(()=>{
  getcategoryFilter()
})

//导航栏切换数据

const cateSubCategoryList = ref([])

const reqData = ref({
  // categoryId:route.params.id,
  // page:1,
  // pageSize:20,
  // sortField:'publishTime'
  categoryId: route.params.id,
  page: 2,
  pageSize: 20,
  sortField: 'publishTime'
})

const cateSubCategory = async()=>{

    const res = await getSubCategoryFilterApi(reqData.value)
    console.log(res.result.items);
    cateSubCategoryList.value = res.result.items
    
}

//tb切换

const tabchange = ()=>{
  cateSubCategory()
}

onMounted(()=>{
  cateSubCategory()
})
//无线往下滚
const  disabled = ref(false)

const load = async()=>{
  
  reqData.value.page++
  const res = await getSubCategoryFilterApi(reqData.value)
  cateSubCategoryList.value =  [...cateSubCategoryList.value, ...res.result.items]
  if (res.result.items.length === 0) {
    disabled.value=true
  }
 }
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">" >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryfilterList.parentId}` }">{{categoryfilterList.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{categoryfilterList.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabchange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <goodsItem v-for="good in cateSubCategoryList" :good="good" :key="good.id" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>