<template>
  <div>
    <div>
     <Header/>
    </div>
    <div class="content-nuxt">
      <nuxt/>
    </div>
<div>
  <Footer/>
</div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components :{
  Header: () => import('@/components/header/headerOne'),
  Footer: () => import('@/components/footer/footer'),
}
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body::-webkit-scrollbar {
  width: 8px;
}

/* Handle */
body::-webkit-scrollbar-thumb {
  background: #00b2a9;
}
body::-webkit-scrollbar-track {
  background: #f1f1f1 !important;
  border-radius: 2px !important;
}
#app .v-application--wrap {
   min-height: 1px !important;
  background-color: white;
  color: black;
 }
.page-title{
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 76px;
  text-align: center;
  width: 100%;
  margin-top: 50px;
}
.page-title span{
  border-bottom: 2px solid #00B2A9;
  padding: 4px 25px;
}

</style>
