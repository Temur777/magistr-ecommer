<template>
  <v-app>
  <v-container fluid>
    <v-row>
      <span class="subscribe-head-text">Below are our rates. Get one month free to try our services!</span>
    </v-row>
   <v-row class="mt-12">
     <v-col cols="10"  offset="1">
       <v-row>
         <v-col cols="3">
           <v-card class="subscribe-card">
            <div class="subscribe-card-img">
              <img width="130" src="@/assets/images/subscribe/literature 2.svg" alt="">
            </div>
             <div class="subscribe-card-footer">
                <div style="color: black; font-size: 18px; font-weight: 600; text-align: center">Starter</div>
               <div class="see-footer">See</div>
             </div>
           </v-card>
         </v-col>
         <v-col cols="3">
           <v-card class="subscribe-card">
             <div class="subscribe-card-img">
               <img width="130" src="@/assets/images/subscribe/bookss.svg" alt="">
             </div>
             <div class="subscribe-card-footer">
               <div style="color: black; font-size: 18px; font-weight: 600; text-align: center">Middle</div>
               <div class="see-footer">See</div>
             </div>
           </v-card>
         </v-col>
         <v-col cols="3">
           <v-card class="subscribe-card">
             <div class="subscribe-card-img">
               <img width="130" src="@/assets/images/subscribe/books 3.svg" alt="">
             </div>
             <div class="subscribe-card-footer">
               <div style="color: black; font-size: 18px; font-weight: 600; text-align: center">Pro</div>
               <div class="see-footer">See</div>
             </div>
           </v-card>
         </v-col>
         <v-col cols="3">
           <v-card class="subscribe-card">
             <div class="subscribe-card-img">
               <img width="130" src="@/assets/images/subscribe/e-book 1.svg" alt="">
             </div>
             <div class="subscribe-card-footer">
               <div style="color: black; font-size: 18px; font-weight: 600; text-align: center">E book</div>
               <div class="see-footer">See</div>
             </div>
           </v-card>
         </v-col>
       </v-row>
     </v-col>
   </v-row>
    <v-row>
      <v-col cols="4" offset="4">
        <v-card class="subscribe-card">
          <div class="subscribe-card-img">
            <img width="130" src="@/assets/images/subscribe/no-fee (2) 1.svg" alt="">
          </div>
          <div class="subscribe-card-footer">
            <div class="see-footer" style="width: 70%; padding: 4px 0; border-radius: 4px">See</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Subscribe',
}
</script>

<style scoped>
.subscribe-head-text{
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  display: block;
  text-align: center;
  padding: 15px 0;
  width: 100%;
}
.subscribe-card{
  height: 300px;
  border: 3px solid #00b2a9;
  background: #f1f1f1;
  border-radius: 10px;
}
.subscribe-card-img{
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
.see-footer{
  background: #00b2a9;
  color: #f1f1f1;
  border-radius: 10px;
  text-align: center;
  width: 120px;
  margin: 0 auto;
}
.subscribe-card-footer{
  position: absolute;
  width: 100%;
  bottom: 25px;
}
.subscribe-card{
  position: relative;
}
.subscribe-card{
  width: 70%;
  margin: 0 auto;
}
</style>
