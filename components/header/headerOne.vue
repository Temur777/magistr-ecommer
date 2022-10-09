<template>
  <div style="background-color: white; color: black; height: auto">
    <HeaderDesktop/>
    <Category/>
  </div>
</template>

<script>
export default {
  name: 'headerOne',
  components:{
    HeaderDesktop: () => import('@/components/header/parts/search-desktop'),
    Category: () => import('@/components/header/categorys')
  }

}
</script>
