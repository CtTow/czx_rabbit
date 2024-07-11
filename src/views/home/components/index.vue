<script setup>

import HomeBanner from './HomeBanner.vue'
import HomeHot from './HomeHot.vue'
import HomeCategory from './HomeCategory.vue'
import HomeNew from './HomeNew.vue'
import HomeProduct from './HomeProduct.vue'



</script>

<template> 

  <div>
    <div class="container">
      <HomeBanner></HomeBanner>
      <HomeCategory></HomeCategory>
    </div>
    <HomeHot></HomeHot>
    <HomeNew></HomeNew>
    <HomeProduct></HomeProduct>
  </div>

</template>