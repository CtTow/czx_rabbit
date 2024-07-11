<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHead.vue'
import LayoutFooter from './components/LayoutFoot.vue'
import Layout from './components/layout.vue'
import { onMounted } from 'vue'

import{useCategoryStore} from '@/stores/homeList'
const category = useCategoryStore()

import{useBannerStore} from '@/stores/banner'
const getBanner  = useBannerStore()

onMounted(()=>{
  category.getcategory()
  getBanner.getBnnerimg()
})
</script>

<template>
  <Layout/>
  <LayoutNav />
  <LayoutHeader/>
  <RouterView/>
  <LayoutFooter />
</template>