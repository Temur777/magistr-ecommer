<template>
  <div>
    <HomeTitle/>
    <Collection/>
    <PopularBook/>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
components:{
  HomeTitle: () => import('@/components/homeHead'),
  Collection: () => import('@/components/widgets/collectionBannner'),
  PopularBook: () => import('@/components/widgets/popular'),
}
}
</script>
