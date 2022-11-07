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
.order-img{
  width: 90%;
  height: 240px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 26px 10px;
}
.order-img img {
  min-width: 20px !important;
  min-height: 40px !important;
  max-width: 192px !important;
  max-height: 240px !important;
}
.order-title{
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  padding: 20px 0px;
}
.order-border{
  border-bottom: 2px solid #00B2A9
}
.order-button{
  width: 70%;
  background-color: #00b2a9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4px 0;
  margin: 0 auto;
  position: relative;
}
.see{
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #f1f1f1;
}
.heart-icon{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
}
.order{
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  height: 100%;
}
.order-item{
  padding-bottom: 15px;
  height: 100%;
}
</style>
