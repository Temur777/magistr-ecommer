<template>
 <v-container fluid>
   <v-row >
     <v-col cols="12">
       <v-row style="padding: 20px 26px 10px 26px">
         <v-col cols="3" class="box" >
           <div class="collectoin">
             <img src="@/assets/images/spencer-DXobXpIa9_4-unsplash 2.png" alt="">
             <div class="collection-banner">
               <span>Read anywhere you want</span>
             </div>
           </div>
         </v-col>
         <v-col cols="6" class="box box-second" >
           <div class="collectoin">
             <img src="@/assets/images/photo_5876539971861589298_w 1.png" alt="">
             <div class="collection-banner">
               <span>All bestsellers</span>
             </div>
           </div>
         </v-col>
         <v-col cols="3" class="box">
           <div class="collectoin">
             <img src="@/assets/images/freestocks-RgKmrxpIraY-unsplash 1.png" alt="">
               <div class="collection-banner">
                 <span>Worldwide literature</span>
               </div>
           </div>
         </v-col>
       </v-row>
     </v-col>
   </v-row>
   <v-row style="padding: 0px 26px">
     <v-col cols="6" class="box" >
       <div class="collectoin">
         <img src="@/assets/images/tamanna-rumee-Wt33T42JNCM-unsplash 1.png" alt="">
         <div class="collection-banner">
           <span>Sales every 3 month</span>
         </div>
       </div>
     </v-col>
     <v-col cols="6" class="box" >
       <div class="collectoin">
         <img src="@/assets/images/photo_5876539971861589298_w 1.png" alt="">
         <div class="collection-banner">
           <span>Business books</span>
         </div>
       </div>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
.collectoin img{
  width: 100%;
  height: 441px !important;
}
.collectoin {
  border-radius: 10px;
  background-color: #00b2a9;
  padding: 8px;
  position: relative;
}
.box{
  padding: 5px !important;
}
.collection-banner{
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: white;
  position: absolute;
  bottom: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.collection-banner span{
  width: 60%;
  text-align: center;
}
</style>
