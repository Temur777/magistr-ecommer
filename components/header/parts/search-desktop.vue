<template>
 <div >
<v-container fluid>
   <v-row>
     <v-col cols="2" class="gv-center">
       <div class="logo" @click="home">
         BL
       </div>
     </v-col>
     <v-col cols="8" >
       <div class="search">
         <input type="text" >
       </div>
     </v-col>
     <v-col cols="2"  class="gv-center">
       <div class="subscribe" @click="subscribe">
         Subscribe
       </div>
     </v-col>
   </v-row>
</v-container>
 </div>
</template>

<script>
export default {
  name: 'SearchDesktop',
  methods:{
    subscribe(){
      this.$router.push('/subscribe')
    },
    home(){
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.logo{
  width: 140px;
  height: 161px;
   color: #00B2A9;
  font-size: 120px;
  font-weight: 400;
  line-height: 161.28px;
}
.search input {
  border-radius: 14px;
  border: 3px solid #00B2A9;
  height: 52px;
  width: 70%;
  background-image: url('assets/images/Mask group.svg');
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: center center;

}
.search input:focus {
  outline: none;
}
.search{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.subscribe{
  width: 162px;
  height: 61px;
  background: #00B2A9;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
