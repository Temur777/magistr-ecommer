<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <div class="page-title">
          <span>Our benefits:  </span>
        </div>
        <v-col cols="10" offset="1" class="mt-10">
          <v-row>
            <v-col cols="4">
              <div class="footer-box">
                <div class="footer-img">
                  <img src="@/assets/images/buss.svg" alt="">
                </div>
                <div class="footer-text">
                  BL’s fast delivering system
                </div>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="footer-box">
                <div class="footer-img">
                  <img src="@/assets/images/log.svg" alt="">
                </div>
                <div class="footer-text">
                  Low prices
                </div>
              </div>
            </v-col>
            <v-col cols="4">
            <div class="footer-box">
              <div class="footer-img">
                <img src="@/assets/images/quanty.svg" alt="">
              </div>
              <div class="footer-text">
                We have the highest quality
              </div>
            </div>
          </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="footer-end">
        <v-col cols="10" offset="1">
          <v-row>
            <v-col cols="3">
              <div>
                <div class="footer-logo">
                  <img src="@/assets/images/BL.svg" alt="">
                </div>
              </div>
            </v-col>
            <v-col cols="6" class="msg">
              <div class="messenger">
                <div class="messenger-box">
                  <img src="@/assets/images/maill.svg" alt="">
                  <span>bl.store@gmail.com</span>
                </div>
                <div class="messenger-box">
                  <img src="@/assets/images/instagramm.svg" alt="">
                  <span>bl_store</span>
                </div>
                <div class="messenger-box">
                  <img src="@/assets/images/phonee.svg" alt="">
                  <span>+000 00 000000  </span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'footer'

}
</script>

<style scoped>
.footer-img img{
  width: 120px;
}
.footer-img{
  display: flex;
  justify-content: center;
}
.footer-text{
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  margin-top: 10px;
}
.footer-end{
  background-color: #00b2a9;
}
.footer-logo img{
width: 88px;
}
.messenger-box{
  display: flex;
  align-items: center;
  color: #f1f1f1;
}
.messenger-box span{
  margin-left: 10px;
}
.msg{
  display: flex;
  align-items: center;
}
.messenger{
  width: 100%;
  display: flex !important;
  justify-content: space-between !important;
}
</style>
