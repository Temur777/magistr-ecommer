<template>
  <v-app>
    <v-container style="padding: 20px 0" >
      <v-row v-for="(item, index) in bookList" :key="index" class="showw">
        <v-col cols="9">
          <h2 style="text-align: center">{{item.bookName}}</h2>
          <div class="p-8 description">
          <span>{{item.description}} </span>
          </div>
          <div class="elements">
            <div>
              <v-icon
                large
                color="blue-grey lighten-1"
              >
                mdi-eye
              </v-icon>
              <span>12</span>
            </div>
            <div class="ml-4">
              <v-icon
                large
                color="pink lighten-1"
              >
                mdi-heart
              </v-icon>
              <span>22</span>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="order order-nav">
            <div class="order-item">
              <div class="order-img">
                <img src="@/assets/images/photo_6036024369693699434_x 1.png" alt="">
              </div>
              <div class="order-border"></div>
              <div class="order-title">
                Name: Atomic Habits
                Author: James Clear
              </div>
              <div class="order-button">
                <div class="see">See</div>
                <div class="heart-icon">
                  <img src="@/assets/images/heart.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import {getLiteratureList} from "@/http/requests/literature";

export default {
  name: 'literature',
  data(){
    return{
      bookList: []
    }
  },
  async created() {
    await getLiteratureList().then(res => {
       this.bookList = res && res.data && res.data.data ? res.data.data : []
  } )
}
}
</script>
<style scoped>
.order-nav {
  box-shadow: 0px 0px 17px rgb(0 0 0 / 50%);
}
.showw{
  box-shadow: 0px 3px 10px 0px #aea6a6;
  padding: 20px;
  margin-top: 32px;
  border-radius: 20px ;
}
.description{
  text-align: justify;
  padding: 20px;
  margin-top: 10px;
}
.elements{
  display: flex;
  padding-left: 20px;
}
</style>
