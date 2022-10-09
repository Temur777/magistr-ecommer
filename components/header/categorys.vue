<template>
  <v-container fluid>
  <v-row style="justify-content: center">
    <v-col offset="1" cols="10">
      <div>
        <ul class="navbar">
          <li class="link-item">
            <nuxt-link to="/">
              <div class="link">
                <img width="22" height="23" src="@/assets/images/navbar/books1.svg" alt=""/>
                <span>Literature</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="link">
                <img width="22" height="23" src="@/assets/images/navbar/data-science 1.svg" alt=""/>
                <span>E-books</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="link">
                <img width="22" height="23" src="@/assets/images/navbar/education 1.svg" alt=""/>
                <span>Bestsellers</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="link">
                <img width="22" height="23" src="@/assets/images/navbar/son 1.svg" alt=""/>
                <span>Children's literature</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="link">
                <img width="22" height="23" src="@/assets/images/navbar/blog 1.svg" alt=""/>
                <span>Publishers</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="link">
                <img width="22" height="23" src="@/assets/images/navbar/about 1.svg" alt=""/>
                <span>Authors</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <div class="link">
                <img width="22" height="23" src="@/assets/images/navbar/percentage 1.svg" alt=""/>
                <span>Discounts</span>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </v-col>
    <v-col cols="12" style="padding: 0" >
      <div class="category-border"></div>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'categorys',
}
</script>
<style scoped>
.navbar li{
  text-decoration: none;
  list-style: none;
  display: inline-block;
}
.navbar a{
  text-decoration: none;
}
.link {
  font-size: 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link span {
  margin-left: 4px;
  font-weight: 400;
  font-style: normal;
}
.navbar{
  display: flex;
  justify-content: space-between;
  padding: 0 !important;
}
.navbar li:hover span{
  color: #00B2A9;
}
.category-border{
  border-top: 3px solid #00B2A9;
  height: 0;
  padding: 0;
  width: 90%;
  margin: 0 auto;
}
</style>
