<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" style="padding: 0">
          <div class="home-title">Welcome to book line - biggest readers’ community in Central Asia</div>
          <div class="home-description">
            <p>
              The Book Line is one of the fastest growing communities in Central Asia. BL is an online library where you can find absolutely any book, rent or purchase, and we also have electronic versions of books for sale.
            </p>
            <p style="margin-top:10px; ">
              Our goal is to become the premier provider of books at a fraction of the cost, so that students, students, and reading enthusiasts do not have to feel uncomfortable looking for a particular publication!
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
export default {
  name: 'homeHead'

}
</script>

<style scoped>
.home-title{
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  text-align: center;
  padding: 30px 0;
}
.home-description {
  background: #00B2A9;
  color: white;
  font-weight: 400;
  font-size: 28px;
  padding: 28px 0;
}
.home-description p{
  width: 70%;
  margin: 0 auto;
  text-align: center;
}
</style>
